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

try {
  await import(new URL(`../dist/assets/${bundleName}`, import.meta.url).href);
  // Give React time to mount and run effects (Reveal + RevealAll).
  await new Promise((r) => setTimeout(r, 500));

  const all = window.document.querySelectorAll('.reveal');
  const unrevealed = window.document.querySelectorAll('.reveal:not(.in)');
  const revealed = window.document.querySelectorAll('.reveal.in');
  const text = window.document.body.textContent;

  check(all.length > 0, `found ${all.length} .reveal elements in rendered DOM`);
  check(unrevealed.length === 0, `no unrevealed .reveal elements (black/empty spaces) — ${revealed.length} revealed`);
  check(text.includes('Capital pathways'), 'stats content present (Capital pathways)');
  check(text.includes('Miriyari supported us in raising'), 'testimonial present');
  check(text.includes('Ready to unlock transformative capital?'), 'CTA band present');
  check(text.includes('BEYI Group'), 'partners present');
  check(text.includes('info@miriyari.com'), 'footer contact present');
} catch (err) {
  console.error('DOM CHECK ERROR:', err);
  failures++;
}

if (failures) {
  console.error(`DOM CHECK FAILED: ${failures} assertion(s) failed`);
  process.exit(1);
}
console.log('DOM CHECK PASSED — app mounts and all content is visible.');
