export function detectScript(char: string): string {
  const cp = char.codePointAt(0);
  if (cp == null) return 'Unknown';

  // Invisible / spacing controls
  if (
    cp === 0x0009 ||
    cp === 0x000A ||
    cp === 0x000D ||
    cp === 0x0020 ||
    cp === 0x00A0 ||
    cp === 0x1680 ||
    cp === 0x180E ||
    (cp >= 0x2000 && cp <= 0x200D) ||
    cp === 0x2028 ||
    cp === 0x2029 ||
    cp === 0x202F ||
    cp === 0x205F ||
    cp === 0x2060 ||
    cp === 0x3000 ||
    cp === 0xFEFF
  ) {
    return cp === 0x0020 ? 'Space' : 'Invisible / special space';
  }

  // ASCII
  if (cp >= 0x0030 && cp <= 0x0039) return 'ASCII digit';
  if ((cp >= 0x0041 && cp <= 0x005A) || (cp >= 0x0061 && cp <= 0x007A)) return 'Latin';
  if (
    (cp >= 0x0021 && cp <= 0x002F) ||
    (cp >= 0x003A && cp <= 0x0040) ||
    (cp >= 0x005B && cp <= 0x0060) ||
    (cp >= 0x007B && cp <= 0x007E)
  ) {
    return 'ASCII punctuation';
  }

  // Latin extensions / phonetic / modifier forms
  if (cp >= 0x00C0 && cp <= 0x024F) return 'Latin Extended';
  if (cp >= 0x0250 && cp <= 0x02AF) return 'IPA / phonetic Latin';
  if (cp >= 0x02B0 && cp <= 0x02FF) return 'Spacing modifier letters';

  // Greek / Cyrillic
  if (cp >= 0x0370 && cp <= 0x03FF) return 'Greek';
  if (cp >= 0x0400 && cp <= 0x04FF) return 'Cyrillic';
  if (cp >= 0x0500 && cp <= 0x052F) return 'Cyrillic Supplement';

  // Hebrew / Armenian / Indic zeros included in confusables
  if (cp >= 0x0530 && cp <= 0x058F) return 'Armenian';
  if (cp >= 0x0590 && cp <= 0x05FF) return 'Hebrew';
  if (cp >= 0x0900 && cp <= 0x097F) return 'Devanagari';
  if (cp >= 0x0980 && cp <= 0x09FF) return 'Bengali';
  if (cp >= 0x0A00 && cp <= 0x0A7F) return 'Gurmukhi';
  if (cp >= 0x0A80 && cp <= 0x0AFF) return 'Gujarati';
  if (cp >= 0x0B80 && cp <= 0x0BFF) return 'Tamil';
  if (cp >= 0x0C00 && cp <= 0x0C7F) return 'Telugu';
  if (cp >= 0x0C80 && cp <= 0x0CFF) return 'Kannada';
  if (cp >= 0x0D00 && cp <= 0x0D7F) return 'Malayalam';

  // Hangul
  if (cp >= 0x1100 && cp <= 0x11FF) return 'Hangul Jamo';
  if (cp >= 0x3130 && cp <= 0x318F) return 'Hangul Compatibility Jamo';
  if (cp >= 0xAC00 && cp <= 0xD7AF) return 'Hangul';

  // Japanese
  if (cp >= 0x3040 && cp <= 0x309F) return 'Hiragana';
  if (cp >= 0x30A0 && cp <= 0x30FF) return 'Katakana';
  if (cp >= 0x31F0 && cp <= 0x31FF) return 'Katakana Phonetic Extensions';

  // CJK
  if (cp >= 0x2E80 && cp <= 0x2EFF) return 'CJK Radicals';
  if (cp >= 0x2F00 && cp <= 0x2FDF) return 'Kangxi Radicals';
  if (cp >= 0x3000 && cp <= 0x303F) return 'CJK Symbols / punctuation';
  if (cp >= 0x3400 && cp <= 0x4DBF) return 'CJK Extension A';
  if (cp >= 0x4E00 && cp <= 0x9FFF) return 'CJK';
  if (cp >= 0xF900 && cp <= 0xFAFF) return 'CJK Compatibility Ideograph';

  // Cherokee used in confusables
  if (cp >= 0x13A0 && cp <= 0x13FF) return 'Cherokee';

  // Roman numerals / letterlike / math
  if (cp >= 0x2100 && cp <= 0x214F) return 'Letterlike symbol';
  if (cp >= 0x2150 && cp <= 0x218F) return 'Number form / Roman numeral';
  if (cp >= 0x2190 && cp <= 0x21FF) return 'Arrow symbol';
  if (cp >= 0x2200 && cp <= 0x22FF) return 'Mathematical operator';
  if (cp >= 0x2500 && cp <= 0x257F) return 'Box drawing';
  if (cp >= 0x25A0 && cp <= 0x25FF) return 'Geometric shape';
  if (cp >= 0x2700 && cp <= 0x27BF) return 'Dingbat symbol';
  if (cp >= 0x1D400 && cp <= 0x1D7FF) return 'Mathematical alphanumeric symbol';

  // Fullwidth / halfwidth
  if (cp >= 0xFF00 && cp <= 0xFFEF) return 'Fullwidth / Halfwidth';

  return 'Other';
}