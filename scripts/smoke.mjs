// Smoke test: serves the built dist/ and asserts every route returns the SPA shell.
// Run after `npm run build` via `npm run check`.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { existsSync } from 'node:fs';

const root = join(process.cwd(), 'dist');
const port = 4173;
const mime = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
};
const routes = ['/', '/about', '/services', '/impact', '/contact'];

const server = createServer(async (req, res) => {
  const urlPath = new URL(req.url, 'http://localhost').pathname;
  let filePath = join(root, urlPath === '/' ? 'index.html' : urlPath);
  if (!existsSync(filePath) || extname(filePath) === '') {
    filePath = join(root, 'index.html'); // SPA fallback
  }
  const data = await readFile(filePath);
  res.writeHead(200, { 'Content-Type': mime[extname(filePath)] || 'application/octet-stream' });
  res.end(data);
});

server.listen(port, async () => {
  try {
    for (const route of routes) {
      const res = await fetch(`http://localhost:${port}${route}`);
      const text = await res.text();
      if (res.status !== 200 || !text.includes('id="root"')) {
        throw new Error(`${route} → status ${res.status}, missing #root`);
      }
      console.log(`PASS ${route} (${res.status})`);
    }
    console.log('Smoke test passed — all routes serve the app shell.');
  } catch (err) {
    console.error('SMOKE FAILED:', err.message);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
