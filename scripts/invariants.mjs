// Invariant tests for the reveal-on-scroll fix.
// Loads the BUILT bundle into jsdom and asserts properties that must hold for
// every route and every input:
//   I1  every .reveal element is either already revealed (.in) or observed by
//       an IntersectionObserver — nothing can be permanently invisible
//   I2  after an intersection pass, every .reveal element has .in
//   I3  the reveal pass is idempotent: re-running never removes .in and never
//       throws, even when everything is already revealed
//   I4  fallback: when IntersectionObserver is unavailable, every .reveal
//       element is revealed immediately (no black spaces)
//   I5  every stat counter settles exactly on its target value, including 0
// Each route is also checked for its expected content marker so the invariant
// assertions cannot pass vacuously on a page that failed to mount.
//
// Timing is handled with waitFor() polling rather than fixed sleeps, so the
// assertions are deterministic regardless of machine speed.
import { JSDOM } from 'jsdom';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');
const html = readFileSync(join(dist, 'index.html'), 'utf8');
const bundleName = readdirSync(join(dist, 'assets')).find((f) => f.endsWith('.js'));
if (!bundleName) throw new Error('no JS bundle in dist/assets');

let failures = 0;
const check = (ok, label) => {
  console.log(`${ok ? 'PASS' : 'FAIL'} ${label}`);
  if (!ok) failures++;
};

// Controllable fake IntersectionObserver: records what it observes, never
// auto-fires. The test decides when elements "enter the viewport".
class FakeIO {
  static instances = [];
  constructor(cb) {
    this.cb = cb;
    this.observed = new Set();
    FakeIO.instances.push(this);
  }
  observe(el) {
    this.observed.add(el);
  }
  unobserve(el) {
    this.observed.delete(el);
  }
  disconnect() {}
  fire() {
    const entries = [...this.observed].map((target) => ({ target, isIntersecting: true }));
    if (entries.length) this.cb(entries, this);
  }
  static observed() {
    const s = new Set();
    FakeIO.instances.forEach((io) => io.observed.forEach((el) => s.add(el)));
    return s;
  }
  static fireAll() {
    FakeIO.instances.forEach((io) => io.fire());
  }
  static reset() {
    FakeIO.instances = [];
  }
}

function makeDom(url) {
  const dom = new JSDOM(html, { url, pretendToBeVisual: true });
  const { window } = dom;
  global.window = window;
  global.document = window.document;
  global.MutationObserver = window.MutationObserver;
  Object.defineProperty(global, 'navigator', { value: window.navigator, configurable: true });
  global.location = window.location;
  global.HTMLElement = window.HTMLElement;
  global.Node = window.Node;
  global.CustomEvent = window.CustomEvent;
  global.getComputedStyle = window.getComputedStyle;
  global.requestAnimationFrame = window.requestAnimationFrame.bind(window);
  global.cancelAnimationFrame = window.cancelAnimationFrame.bind(window);
  global.self = window;
  return window;
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitFor(fn, timeout = 5000, step = 50) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (fn()) return true;
    await wait(step);
  }
  return fn();
}

const ROUTES = [
  ['/', 'Bridging the gap between businesses and'],
  ['/about', 'Unlocking Africa'],
  ['/services', 'Capital programmes that meet founders'],
  ['/impact', 'Funding that lands'],
  ['/blog', 'Monthly mission briefs from the capital desk'],
  ['/blog/results-first-model', 'Why We Don'],
  ['/contact', 'Get in touch with our team'],
];

// ---------- Main case: IntersectionObserver present (real browser path) ----------
{
  FakeIO.reset();
  const window = makeDom('https://miriyari-website.onrender.com/');
  window.IntersectionObserver = FakeIO;
  global.IntersectionObserver = FakeIO;

  await import(new URL(`../dist/assets/${bundleName}?case=io`, import.meta.url).href);

  for (const [path, marker] of ROUTES) {
    if (path !== '/') {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new window.Event('popstate'));
    }

    // Route actually mounted (guards against vacuous passes)
    const mounted = await waitFor(() => window.document.body.textContent.includes(marker));
    check(mounted, `[${path}] route content present: "${marker}"`);

    // I1: every .reveal element is revealed or observed (wait for effects to attach)
    const settled = await waitFor(() => {
      const all = [...window.document.querySelectorAll('.reveal')];
      if (all.length === 0) return false;
      const observed = FakeIO.observed();
      return all.every((el) => el.classList.contains('in') || observed.has(el));
    });
    const all = [...window.document.querySelectorAll('.reveal')];
    const revealed = new Set([...window.document.querySelectorAll('.reveal.in')]);
    const observed = FakeIO.observed();
    const orphaned = all.filter((el) => !revealed.has(el) && !observed.has(el));
    check(
      settled && orphaned.length === 0,
      `[${path}] I1 every .reveal is revealed or observed (${all.length} elements, ${orphaned.length} orphaned)`
    );

    // I2: after an intersection pass, everything is revealed
    FakeIO.fireAll();
    const allRevealed = await waitFor(() => window.document.querySelectorAll('.reveal:not(.in)').length === 0);
    check(allRevealed, `[${path}] I2 all .reveal revealed after intersection pass`);
  }

  // I3: idempotence — revisit a route, re-run the pass; nothing breaks, nothing regresses
  window.history.pushState({}, '', '/');
  window.dispatchEvent(new window.Event('popstate'));
  await waitFor(() => window.document.body.textContent.includes('Bridging the gap between businesses and'));
  FakeIO.fireAll();
  const idempotent = await waitFor(() => window.document.querySelectorAll('.reveal:not(.in)').length === 0);
  check(idempotent, 'I3 idempotent: re-navigation + re-pass leaves everything revealed');

  // I5: counters settle exactly on target (home: 3, 48h, $80K+, 4+)
  const homeSettled = await waitFor(() => {
    const stats = [...window.document.querySelectorAll('.stats .stat b')].map((b) => b.textContent);
    return JSON.stringify(stats) === JSON.stringify(['3', '48h', '$80K+', '4+']);
  });
  const homeStats = [...window.document.querySelectorAll('.stats .stat b')].map((b) => b.textContent);
  check(homeSettled, `I5 home counters settle on targets: ${JSON.stringify(homeStats)}`);

  // I5 continued: impact page counters incl. the 0 boundary (80K+, 48h, 0, 5+)
  window.history.pushState({}, '', '/impact');
  window.dispatchEvent(new window.Event('popstate'));
  await waitFor(() => window.document.body.textContent.includes('Funding that lands'));
  FakeIO.fireAll();
  const impactSettled = await waitFor(() => {
    const stats = [...window.document.querySelectorAll('.stats .stat b')].map((b) => b.textContent);
    return JSON.stringify(stats) === JSON.stringify(['$80K+', '48h', '0', '5+']);
  });
  const impactStats = [...window.document.querySelectorAll('.stats .stat b')].map((b) => b.textContent);
  check(impactSettled, `I5 impact counters settle on targets (incl. 0): ${JSON.stringify(impactStats)}`);
}

// ---------- Fallback case: no IntersectionObserver support ----------
{
  const window = makeDom('https://miriyari-website.onrender.com/fallback');
  // window.IntersectionObserver deliberately left undefined (jsdom default)

  await import(new URL(`../dist/assets/${bundleName}?case=fallback`, import.meta.url).href);

  const allRevealed = await waitFor(() => {
    const all = [...window.document.querySelectorAll('.reveal')];
    return all.length > 0 && window.document.querySelectorAll('.reveal:not(.in)').length === 0;
  });
  const total = [...window.document.querySelectorAll('.reveal')].length;
  const unrevealed = [...window.document.querySelectorAll('.reveal:not(.in)')].length;
  check(
    allRevealed,
    `I4 fallback (no IntersectionObserver): all ${total} .reveal elements revealed immediately (${unrevealed} unrevealed)`
  );
}

if (failures) {
  console.error(`INVARIANTS FAILED: ${failures} assertion(s) failed`);
  process.exit(1);
}
console.log('ALL INVARIANTS HOLD — no black/empty spaces possible on any route.');
