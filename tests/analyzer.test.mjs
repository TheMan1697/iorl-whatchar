import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createRequire } from 'node:module';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import ts from 'typescript';

// Transpile only the dependency-free text analyzer into a temporary CommonJS
// tree. No Vitest/esbuild dependency or checked-in generated code is needed.
const scratch = mkdtempSync(join(tmpdir(), 'whatchar-unit-'));
let analyzer;
try {
  const program = ts.createProgram([resolve('src/utils/analyzeText.ts')], {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.CommonJS,
    moduleResolution: ts.ModuleResolutionKind.Node10,
    rootDir: resolve('src'),
    outDir: scratch,
    noEmitOnError: true,
    skipLibCheck: true
  });
  const result = program.emit();
  const errors = [...ts.getPreEmitDiagnostics(program), ...result.diagnostics];
  if (errors.length) {
    throw new Error(ts.formatDiagnosticsWithColorAndContext(errors, {
      getCurrentDirectory: () => process.cwd(),
      getCanonicalFileName: (path) => path,
      getNewLine: () => '\n'
    }));
  }
  analyzer = createRequire(import.meta.url)(join(scratch, 'utils/analyzeText.js'));
} finally {
  rmSync(scratch, { recursive: true, force: true });
}

const { analyzeText, findConfusingCharacters, detectedScripts } = analyzer;
const suspiciousChars = (text) => findConfusingCharacters(analyzeText(text)).map((item) => item.char);

test('ordinary ASCII letters are informational lookalikes, not suspicious', () => {
  const items = analyzeText('ace');
  assert.ok(items.some((item) => item.lookalikes.length > 0));
  assert.deepEqual(suspiciousChars('ace'), []);
});

test('intentional I/l/1 and O/0 ambiguity remains visible', () => {
  assert.deepEqual(suspiciousChars('I l 1 O 0'), ['I', 'l', '1', 'O', '0']);
});

test('Greek and Cyrillic homoglyphs still flag, unlike plain Latin A', () => {
  assert.deepEqual(suspiciousChars('AΑА'), ['Α', 'А']);
});

test('zero-width characters are disclosed without flagging adjacent safe letters', () => {
  const items = findConfusingCharacters(analyzeText('a\u200Bb'));
  assert.equal(items.length, 1);
  assert.equal(items[0].char, '\u200B');
  assert.equal(items[0].codePoint, 'U+200B');
  assert.equal(items[0].display, 'ZWSP');
  assert.equal(items[0].isInvisible, true);
});

test('ASCII space is ignored; dash variants are still inspectable', () => {
  assert.deepEqual(suspiciousChars('a b'), []);
  assert.deepEqual(suspiciousChars('-−'), ['-', '−']);
});

test('Japanese and Korean ordinary text is not automatically suspicious', () => {
  assert.deepEqual(suspiciousChars('漢字가나다'), []);
});

test('astral code points are preserved as one Unicode character', () => {
  const result = analyzeText('😀');
  assert.equal(result.length, 1);
  assert.equal(result[0].codePoint, 'U+1F600');
  assert.deepEqual(findConfusingCharacters(result), []);
});

test('mixed-script detection still distinguishes Latin and Greek', () => {
  assert.deepEqual(detectedScripts(analyzeText('AΑ')), ['Latin', 'Greek']);
});
