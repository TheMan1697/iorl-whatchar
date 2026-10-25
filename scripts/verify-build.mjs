import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const read = (path) => readFileSync(join(dist, path), 'utf8');
const localePaths = ['/', '/ko/', '/ja/', '/zh/', '/es/', '/fr/', '/de/'];

for (const path of localePaths) {
  const html = read(path === '/' ? 'index.html' : path.slice(1) + 'index.html');
  assert.match(html, /<meta\s+name="robots"\s+content="index, follow"/i, path + ' must be indexable');
  const canonical = 'https://isitiorl.com' + path;
  assert.ok(html.includes('href="' + canonical + '"'), path + ' must have its canonical');
  assert.ok(html.includes('kakerio.com'), path + ' must retain Kakerio branding links');
}

const possible404 = ['404.html', '404/index.html'];
const errorPath = possible404.find((path) => existsSync(join(dist, path)));
assert.ok(errorPath, '404 output file missing');
const notFound = read(errorPath);
assert.match(notFound, /<meta\s+name="robots"\s+content="noindex, follow"/i, '404 must be noindex');
assert.doesNotMatch(notFound, /<link\s+rel="canonical"/i, '404 must not claim a canonical');
assert.doesNotMatch(notFound, /application\/ld\+json/i, '404 must not claim SoftwareApplication schema');

const sitemap = read('sitemap.xml');
for (const path of localePaths) {
  assert.ok(sitemap.includes('<loc>https://isitiorl.com' + path + '</loc>'), 'sitemap missing ' + path);
}
assert.ok(!sitemap.includes('https://isitiorl.com/404/'), '404 must not be in sitemap');

console.log('Static SEO: 7 locale pages indexable with canonical and Kakerio links; 404 noindex/no canonical; sitemap OK.');
