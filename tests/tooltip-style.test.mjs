import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

// Static guard for a browser-found issue: long localized tooltips must never
// intercept pointer clicks on nearby example buttons.
const css = readFileSync('src/styles/global.css', 'utf8');
const component = readFileSync('src/components/Analyzer.tsx', 'utf8');

test('tooltip overlay does not intercept clicks', () => {
  const rule = css.match(/\.char-tooltip\s*\{([^}]*)\}/);
  assert.ok(rule, 'tooltip rule must exist');
  assert.match(rule[1], /pointer-events\s*:\s*none\s*;/);
});

test('selected characters use the persistent dictionary note, not a pinned overlay', () => {
  assert.doesNotMatch(css, /\.result-char-wrap:has\(\.result-char\.is-selected\)\s+\.char-tooltip/);
  assert.match(component, /className="dictionary-note"/);
  assert.match(css, /\.result-char:focus-visible\s*\+\s*\.char-tooltip/);
});
