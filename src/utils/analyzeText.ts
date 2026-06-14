import { findGroup } from '../data/confusables';
import { unicodeNames } from '../data/unicodeNames';
import { detectScript } from './detectScript';

export type AnalyzedChar = {
  index: number;
  char: string;
  display: string;
  codePoint: string;
  name: string;
  script: string;
  isConfusable: boolean;
  isInvisible: boolean;
  groupLabel?: string;
  groupNote?: string;
  lookalikes: string[];
};

const invisible = new Set([
  '\t',
  '\n',
  '\r',
  '\u00A0',
  '\u1680',
  '\u180E',
  '\u2000',
  '\u2001',
  '\u2002',
  '\u2003',
  '\u2004',
  '\u2005',
  '\u2006',
  '\u2007',
  '\u2008',
  '\u2009',
  '\u200A',
  '\u200B',
  '\u200C',
  '\u200D',
  '\u2028',
  '\u2029',
  '\u202F',
  '\u205F',
  '\u2060',
  '\u3000',
  '\uFEFF'
]);

const asciiPunctuationNames: Record<string, string> = {
  '!': 'Exclamation mark',
  '"': 'Quotation mark',
  '#': 'Number sign',
  '$': 'Dollar sign',
  '%': 'Percent sign',
  '&': 'Ampersand',
  "'": 'Apostrophe',
  '(': 'Left parenthesis',
  ')': 'Right parenthesis',
  '*': 'Asterisk',
  '+': 'Plus sign',
  ',': 'Comma',
  '-': 'Hyphen-minus',
  '.': 'Full stop',
  '/': 'Solidus',
  ':': 'Colon',
  ';': 'Semicolon',
  '<': 'Less-than sign',
  '=': 'Equals sign',
  '>': 'Greater-than sign',
  '?': 'Question mark',
  '@': 'Commercial at',
  '[': 'Left square bracket',
  '\\': 'Reverse solidus',
  ']': 'Right square bracket',
  '^': 'Circumflex accent',
  '_': 'Low line',
  '`': 'Grave accent',
  '{': 'Left curly bracket',
  '|': 'Vertical line',
  '}': 'Right curly bracket',
  '~': 'Tilde'
};

const digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const greekNames: Record<string, string> = {
  Α: 'Greek capital letter Alpha', Β: 'Greek capital letter Beta', Γ: 'Greek capital letter Gamma', Δ: 'Greek capital letter Delta', Ε: 'Greek capital letter Epsilon', Ζ: 'Greek capital letter Zeta', Η: 'Greek capital letter Eta', Θ: 'Greek capital letter Theta', Ι: 'Greek capital letter Iota', Κ: 'Greek capital letter Kappa', Λ: 'Greek capital letter Lamda', Μ: 'Greek capital letter Mu', Ν: 'Greek capital letter Nu', Ξ: 'Greek capital letter Xi', Ο: 'Greek capital letter Omicron', Π: 'Greek capital letter Pi', Ρ: 'Greek capital letter Rho', Σ: 'Greek capital letter Sigma', Τ: 'Greek capital letter Tau', Υ: 'Greek capital letter Upsilon', Φ: 'Greek capital letter Phi', Χ: 'Greek capital letter Chi', Ψ: 'Greek capital letter Psi', Ω: 'Greek capital letter Omega',
  α: 'Greek small letter Alpha', β: 'Greek small letter Beta', γ: 'Greek small letter Gamma', δ: 'Greek small letter Delta', ε: 'Greek small letter Epsilon', ζ: 'Greek small letter Zeta', η: 'Greek small letter Eta', θ: 'Greek small letter Theta', ι: 'Greek small letter Iota', κ: 'Greek small letter Kappa', λ: 'Greek small letter Lamda', μ: 'Greek small letter Mu', ν: 'Greek small letter Nu', ξ: 'Greek small letter Xi', ο: 'Greek small letter Omicron', π: 'Greek small letter Pi', ρ: 'Greek small letter Rho', σ: 'Greek small letter Sigma', ς: 'Greek small letter Final Sigma', τ: 'Greek small letter Tau', υ: 'Greek small letter Upsilon', φ: 'Greek small letter Phi', χ: 'Greek small letter Chi', ψ: 'Greek small letter Psi', ω: 'Greek small letter Omega'
};

const cyrillicNames: Record<string, string> = {
  А: 'Cyrillic capital letter A', Б: 'Cyrillic capital letter Be', В: 'Cyrillic capital letter Ve', Г: 'Cyrillic capital letter Ghe', Д: 'Cyrillic capital letter De', Е: 'Cyrillic capital letter Ie', Ё: 'Cyrillic capital letter Io', Ж: 'Cyrillic capital letter Zhe', З: 'Cyrillic capital letter Ze', И: 'Cyrillic capital letter I', Й: 'Cyrillic capital letter Short I', К: 'Cyrillic capital letter Ka', Л: 'Cyrillic capital letter El', М: 'Cyrillic capital letter Em', Н: 'Cyrillic capital letter En', О: 'Cyrillic capital letter O', П: 'Cyrillic capital letter Pe', Р: 'Cyrillic capital letter Er', С: 'Cyrillic capital letter Es', Т: 'Cyrillic capital letter Te', У: 'Cyrillic capital letter U', Ф: 'Cyrillic capital letter Ef', Х: 'Cyrillic capital letter Ha', Ц: 'Cyrillic capital letter Tse', Ч: 'Cyrillic capital letter Che', Ш: 'Cyrillic capital letter Sha', Щ: 'Cyrillic capital letter Shcha', Ъ: 'Cyrillic capital letter Hard Sign', Ы: 'Cyrillic capital letter Yeru', Ь: 'Cyrillic capital letter Soft Sign', Э: 'Cyrillic capital letter E', Ю: 'Cyrillic capital letter Yu', Я: 'Cyrillic capital letter Ya',
  а: 'Cyrillic small letter A', б: 'Cyrillic small letter Be', в: 'Cyrillic small letter Ve', г: 'Cyrillic small letter Ghe', д: 'Cyrillic small letter De', е: 'Cyrillic small letter Ie', ё: 'Cyrillic small letter Io', ж: 'Cyrillic small letter Zhe', з: 'Cyrillic small letter Ze', и: 'Cyrillic small letter I', й: 'Cyrillic small letter Short I', к: 'Cyrillic small letter Ka', л: 'Cyrillic small letter El', м: 'Cyrillic small letter Em', н: 'Cyrillic small letter En', о: 'Cyrillic small letter O', п: 'Cyrillic small letter Pe', р: 'Cyrillic small letter Er', с: 'Cyrillic small letter Es', т: 'Cyrillic small letter Te', у: 'Cyrillic small letter U', ф: 'Cyrillic small letter Ef', х: 'Cyrillic small letter Ha', ц: 'Cyrillic small letter Tse', ч: 'Cyrillic small letter Che', ш: 'Cyrillic small letter Sha', щ: 'Cyrillic small letter Shcha', ъ: 'Cyrillic small letter Hard Sign', ы: 'Cyrillic small letter Yeru', ь: 'Cyrillic small letter Soft Sign', э: 'Cyrillic small letter E', ю: 'Cyrillic small letter Yu', я: 'Cyrillic small letter Ya'
};

export function toCodePoint(char: string): string {
  const cp = char.codePointAt(0);
  if (cp == null) return 'Unknown';
  return `U+${cp.toString(16).toUpperCase().padStart(4, '0')}`;
}

export function displayChar(char: string): string {
  if (char === ' ') return '␠';
  if (char === '\t') return 'TAB';
  if (char === '\n') return 'LF';
  if (char === '\r') return 'CR';
  if (char === '\u00A0') return 'NBSP';
  if (char === '\u1680') return 'OGHAM SPACE';
  if (char === '\u180E') return 'MVS';
  if (char === '\u2000') return 'EN QUAD';
  if (char === '\u2001') return 'EM QUAD';
  if (char === '\u2002') return 'EN SPACE';
  if (char === '\u2003') return 'EM SPACE';
  if (char === '\u2004') return '3-PER-EM';
  if (char === '\u2005') return '4-PER-EM';
  if (char === '\u2006') return '6-PER-EM';
  if (char === '\u2007') return 'FIGURE SPACE';
  if (char === '\u2008') return 'PUNCT SPACE';
  if (char === '\u2009') return 'THIN SPACE';
  if (char === '\u200A') return 'HAIR SPACE';
  if (char === '\u200B') return 'ZWSP';
  if (char === '\u200C') return 'ZWNJ';
  if (char === '\u200D') return 'ZWJ';
  if (char === '\u2028') return 'LINE SEP';
  if (char === '\u2029') return 'PARA SEP';
  if (char === '\u202F') return 'NNBSP';
  if (char === '\u205F') return 'MMSP';
  if (char === '\u2060') return 'WJ';
  if (char === '\u3000') return 'IDEOGRAPHIC SPACE';
  if (char === '\uFEFF') return 'BOM';
  return char;
}

function inferUnicodeName(char: string): string {
  const cp = char.codePointAt(0) ?? 0;
  const fallback = `${detectScript(char)} character ${toCodePoint(char)}`;

  if (unicodeNames[char]) return unicodeNames[char];
  if (char === ' ') return 'Space';
  if (char >= 'A' && char <= 'Z') return `Latin capital letter ${char}`;
  if (char >= 'a' && char <= 'z') return `Latin small letter ${char.toUpperCase()}`;
  if (char >= '0' && char <= '9') return `Digit ${digitNames[Number(char)]}`;
  if (asciiPunctuationNames[char]) return asciiPunctuationNames[char];
  if (greekNames[char]) return greekNames[char];
  if (cyrillicNames[char]) return cyrillicNames[char];
  if (cp >= 0x3040 && cp <= 0x309f) return `Hiragana character ${toCodePoint(char)}`;
  if (cp >= 0x30a0 && cp <= 0x30ff) return `Katakana character ${toCodePoint(char)}`;
  if (cp >= 0xac00 && cp <= 0xd7af) return `Hangul syllable ${char} ${toCodePoint(char)}`;
  if (cp >= 0x1100 && cp <= 0x11ff) return `Hangul Jamo ${char} ${toCodePoint(char)}`;
  if (cp >= 0x3130 && cp <= 0x318f) return `Hangul compatibility Jamo ${char} ${toCodePoint(char)}`;
  if (cp >= 0x4e00 && cp <= 0x9fff) return `CJK ideograph ${char} ${toCodePoint(char)}`;
  if (cp >= 0xff10 && cp <= 0xff19) return `Fullwidth digit ${digitNames[cp - 0xff10]}`;
  if (cp >= 0xff21 && cp <= 0xff3a) return `Fullwidth Latin capital letter ${String.fromCodePoint(cp - 0xff21 + 0x41)}`;
  if (cp >= 0xff41 && cp <= 0xff5a) return `Fullwidth Latin small letter ${String.fromCodePoint(cp - 0xff41 + 0x41)}`;

  return fallback;
}

export function analyzeText(input: string): AnalyzedChar[] {
  return Array.from(input).map((char, index) => {
    const group = findGroup(char);
    const isInvisible = invisible.has(char);
    const cp = char.codePointAt(0) ?? 0;
    const isAscii = cp <= 0x007f;
    const alwaysExplainGroups = new Set(['i-l-1', 'o-0', 'dash-minus', 'quotes', 'invisible']);
    const isConfusable = Boolean(group && (alwaysExplainGroups.has(group.id) || !isAscii));

    return {
      index,
      char,
      display: displayChar(char),
      codePoint: toCodePoint(char),
      name: inferUnicodeName(char),
      script: detectScript(char),
      isConfusable,
      isInvisible,
      groupLabel: group?.label,
      groupNote: group?.note,
      lookalikes: group?.chars.filter((candidate) => candidate !== char).slice(0, 8) ?? []
    };
  });
}

export function detectedScripts(chars: AnalyzedChar[]): string[] {
  const ignored = new Set(['ASCII punctuation', 'Invisible / special space']);
  return Array.from(new Set(chars.map((c) => c.script))).filter((script) => !ignored.has(script));
}
