// Functional DOM check: loads the BUILT bundle into jsdom, lets React mount,
// and asserts every `.reveal` element actually gets revealed (no black/empty
// spaces). A fake IntersectionObserver (everything instantly in view) exercises
// the same observer code path browsers run, including raw `reveal` elements.
import { JSDOM } from 'jsdom';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');
const html = readFileSync(join(dist, 'index.html'), 'utf8');
const bundleName = readdirSync(join(dist, 'assets')).find((f) => f.endsWith('.js'));
if (!bundleName) throw new Error('no JS bundle in dist/assets');

const dom = new JSDOM(html, { url: 'https://miriyari-website.onrender.com/', pretendToBeVisual: true });
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

// Simulate a browser IntersectionObserver: everything observed is immediately
// in view, so the REAL observer code path (Reveal + RevealAll) runs and must
// reveal every `.reveal` element — exactly what browsers execute.
window.IntersectionObserver = class FakeIntersectionObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe(el) {
    this.cb([{ target: el, isIntersecting: true }], this);
  }
  unobserve() {}
  disconnect() {}
};
global.IntersectionObserver = window.IntersectionObserver;

let failures = 0;
const check = (ok, label) => {
  console.log(`${ok ? 'PASS' : 'FAIL'} ${label}`);
  if (!ok) failures++;
};

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitFor(fn, timeout = 5000, step = 50) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (fn()) return true;
    await wait(step);
  }
  return fn();
}

try {
  await import(new URL(`../dist/assets/${bundleName}`, import.meta.url).href);
  // Give React time to mount and run effects (Reveal + RevealAll) — poll so
  // the assertion cannot race a slow first paint.
  const settled = await waitFor(() => {
    const els = window.document.querySelectorAll('.reveal');
    return els.length > 0 && window.document.querySelectorAll('.reveal:not(.in)').length === 0;
  });

  const all = window.document.querySelectorAll('.reveal');
  const unrevealed = window.document.querySelectorAll('.reveal:not(.in)');
  const text = window.document.body.textContent;

  check(all.length > 0, `found ${all.length} .reveal elements in rendered DOM`);
  check(
    settled && unrevealed.length === 0,
    `no unrevealed .reveal elements (black/empty spaces) — ${all.length} total, ${unrevealed.length} unrevealed`
  );
  check(text.includes('Capital pathways'), 'stats content present (Capital pathways)');
  check(text.includes('Miriyari supported us in raising'), 'testimonial present');
  check(text.includes('Ready to unlock transformative capital?'), 'CTA band present');
  check(text.includes('BEYI Group'), 'partners present');
  check(text.includes('info@miriyari.com'), 'footer contact present');

  // ---------- Blog interactions (behavioral) ----------
  window.history.pushState({}, '', '/blog');
  window.dispatchEvent(new window.Event('popstate'));
  await waitFor(() => window.document.body.textContent.includes('Monthly mission briefs from the capital desk'));

  const blogCards = () => window.document.querySelectorAll('.blog-card').length;
  check(blogCards() === 3, `blog index shows all 3 posts (found ${blogCards()})`);

  // Category filter: Mission → 1 post, featured hidden
  const missionChip = [...window.document.querySelectorAll('.chip')].find((c) => c.textContent.trim() === 'Mission');
  missionChip.click();
  await waitFor(() => blogCards() === 1);
  check(
    blogCards() === 1 && window.document.body.textContent.includes('Results-First Model'),
    'category filter: Mission filters to the results-first post'
  );

  // Back to All, then search
  const allChip = [...window.document.querySelectorAll('.chip')].find((c) => c.textContent.trim() === 'All');
  allChip.click();
  await waitFor(() => blogCards() === 3);

  const search = window.document.querySelector('.blog-search');
  const valueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  valueSetter.call(search, 'AFRIINNOX');
  search.dispatchEvent(new window.Event('input', { bubbles: true }));
  await waitFor(() => blogCards() === 1);
  check(
    blogCards() === 1 && window.document.body.textContent.includes('AFRIINNOX'),
    'search "AFRIINNOX" filters to the AFRIINNOX post'
  );

  // No matches → empty state with clear button
  valueSetter.call(search, 'zzzz-no-such-post');
  search.dispatchEvent(new window.Event('input', { bubbles: true }));
  await waitFor(() => blogCards() === 0);
  check(
    window.document.body.textContent.includes('No posts match your search'),
    'empty state shown when nothing matches'
  );
} catch (err) {
  console.error('DOM CHECK ERROR:', err);
  failures++;
}

if (failures) {
  console.error(`DOM CHECK FAILED: ${failures} assertion(s) failed`);
  process.exit(1);
}
console.log('DOM CHECK PASSED — app mounts and all content is visible.');
