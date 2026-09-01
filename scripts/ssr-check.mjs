// Functional verification: renders the REAL App entry (App.jsx → Header + Routes + Footer)
// through React's SSR renderer, one pass per route, and asserts expected page text is
// present in the rendered output. Boots Vite in-process to transform JSX/assets.
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

const ROUTES = [
  ['/', 'Bridging the gap between businesses and'],
  ['/about', 'Unlocking Africa'],
  ['/services', 'Capital programmes that meet founders'],
  ['/impact', 'Funding that lands'],
  ['/contact', 'Get in touch with our team'],
];

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
let failures = 0;
try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx');
  for (const [path, needle] of ROUTES) {
    const html = renderToString(
      React.createElement(MemoryRouter, { initialEntries: [path] }, React.createElement(App))
    );
    const ok = html.includes(needle);
    console.log(`${ok ? 'PASS' : 'FAIL'} ${path}  →  "${needle}" ${ok ? 'found' : 'MISSING'} (${html.length} chars)`);
    if (!ok) failures++;
  }
  const home = renderToString(
    React.createElement(MemoryRouter, { initialEntries: ['/'] }, React.createElement(App))
  );
  for (const shared of ['MIRIYARI', 'Injizaa.com', 'info@miriyari.com']) {
    const ok = home.includes(shared);
    console.log(`${ok ? 'PASS' : 'FAIL'} shared →  "${shared}" ${ok ? 'found' : 'MISSING'}`);
    if (!ok) failures++;
  }
} finally {
  await vite.close();
}
if (failures) {
  console.error(`RENDER CHECK FAILED: ${failures} assertion(s) failed`);
  process.exit(1);
}
console.log('RENDER CHECK PASSED — App mounts and renders all five pages.');
