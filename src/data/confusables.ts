export type ConfusableGroup = {
  id: string;
  label: string;
  chars: string[];
  note: string;
};

export const confusableGroups: ConfusableGroup[] = [
  // Core ASCII / Latin / number confusion
  {
    id: 'i-l-1',
    label: 'I / l / 1 / |',
    chars: ['I', 'l', '1', 'i', '|', '!', 'Ⅰ', 'Ⅱ', 'Ⅲ', 'ı', 'ɪ', 'ǀ', '｜', 'Ｉ', 'ｌ', '１', '！'],
    note: 'Uppercase I, lowercase l, digit one, vertical bars, Roman numerals, and fullwidth forms can be confused.'
  },
  {
    id: 'o-0',
    label: 'O / 0 / Ο / О / ㅇ',
    chars: ['O', 'o', '0', 'Ο', 'ο', 'О', 'о', 'Օ', 'օ', 'ס', '०', '০', '੦', '૦', '௦', '౦', '೦', '൦', '〇', '○', '◯', 'ㅇ', 'Ｏ', 'ｏ', '０'],
    note: 'Latin O/o, zero, Greek omicron, Cyrillic O, Armenian O, Hebrew samekh, Indic zeros, circles, Hangul ieung, and fullwidth forms can look similar.'
  },
  {
    id: 's-5',
    label: 'S / 5',
    chars: ['S', 's', '5', 'Ѕ', 'ѕ', 'Տ', 'Ƨ', 'ƨ', 'Ｓ', 'ｓ', '５'],
    note: 'Latin S/s can be confused with digit 5 and similar Cyrillic/Armenian/fullwidth forms.'
  },
  {
    id: 'b-8',
    label: 'B / 8',
    chars: ['B', 'b', '8', 'Β', 'В', 'ь', 'Ь', 'Ƅ', 'Ᏼ', 'Ｂ', 'ｂ', '８'],
    note: 'B/b, digit 8, Greek beta, Cyrillic ve/soft sign, Cherokee, and fullwidth forms can look similar.'
  },
  {
    id: 'g-9-q',
    label: 'g / q / 9',
    chars: ['g', 'q', '9', 'ɡ', 'ց', 'զ', 'ԛ', 'ｇ', 'ｑ', '９'],
    note: 'Lowercase g/q and digit 9 can be confused with Latin script variants, Armenian, Cyrillic, and fullwidth forms.'
  },
  {
    id: 'z-2',
    label: 'Z / 2',
    chars: ['Z', 'z', '2', 'Ζ', 'Ƶ', 'ƶ', 'Ꮓ', 'Ｚ', 'ｚ', '２'],
    note: 'Z/z can be confused with digit 2, Greek zeta, and similar forms.'
  },

  // Latin / Greek / Cyrillic / fullwidth alphabet groups
  {
    id: 'a-lookalikes',
    label: 'A / a lookalikes',
    chars: ['A', 'a', 'Α', 'α', 'А', 'а', 'Ꭺ', 'ꓮ', '𝐀', '𝑨', '𝘈', '𝙰', 'Ａ', 'ａ', 'ɑ', 'ａ'],
    note: 'Latin A/a can be confused with Greek alpha, Cyrillic A/a, Cherokee, mathematical styles, fullwidth forms, and Latin alpha-like shapes.'
  },
  {
    id: 'c-lookalikes',
    label: 'C / c lookalikes',
    chars: ['C', 'c', 'С', 'с', 'Ϲ', 'ϲ', 'Ⅽ', 'ⅽ', 'Ꮯ', 'ꓚ', 'Ｃ', 'ｃ'],
    note: 'Latin C/c can be confused with Cyrillic es, Greek lunate sigma, Roman numeral C, Cherokee, and fullwidth forms.'
  },
  {
    id: 'd-lookalikes',
    label: 'D / d lookalikes',
    chars: ['D', 'd', 'Ꭰ', 'Ⅾ', 'ⅾ', 'ԁ', 'ꓓ', 'Ｄ', 'ｄ'],
    note: 'Latin D/d can be confused with Cherokee, Roman numeral D, Cyrillic d-like forms, and fullwidth forms.'
  },
  {
    id: 'e-lookalikes',
    label: 'E / e lookalikes',
    chars: ['E', 'e', 'Ε', 'Е', 'е', '℮', 'ℯ', 'ꓰ', 'Ｅ', 'ｅ'],
    note: 'Latin E/e can be confused with Greek epsilon, Cyrillic Ie/e, estimated sign, script e, and fullwidth forms.'
  },
  {
    id: 'f-lookalikes',
    label: 'F / f lookalikes',
    chars: ['F', 'f', 'Ϝ', 'Ғ', 'ғ', 'ſ', 'ꓝ', 'Ｆ', 'ｆ'],
    note: 'Latin F/f can be confused with Greek digamma, Cyrillic ghe with stroke, long s, and fullwidth forms.'
  },
  {
    id: 'h-lookalikes',
    label: 'H / h lookalikes',
    chars: ['H', 'h', 'Η', 'Н', 'һ', 'Ꮋ', 'ℋ', 'Ｈ', 'ｈ'],
    note: 'Latin H/h can be confused with Greek eta, Cyrillic en/shha, Cherokee, script H, and fullwidth forms.'
  },
  {
    id: 'j-lookalikes',
    label: 'J / j lookalikes',
    chars: ['J', 'j', 'Ј', 'ј', 'Ϳ', 'ϳ', 'Ｊ', 'ｊ'],
    note: 'Latin J/j can be confused with Cyrillic Je/je, Greek yot, and fullwidth forms.'
  },
  {
    id: 'k-lookalikes',
    label: 'K / k lookalikes',
    chars: ['K', 'k', 'Κ', 'κ', 'К', 'к', 'Ꮶ', 'K', 'Ｋ', 'ｋ'],
    note: 'Latin K/k can be confused with Greek kappa, Cyrillic ka, Kelvin sign, Cherokee, and fullwidth forms.'
  },
  {
    id: 'm-lookalikes',
    label: 'M / m lookalikes',
    chars: ['M', 'm', 'Μ', 'М', 'м', 'Ⅿ', 'ⅿ', 'Ꮇ', 'ꓟ', 'Ｍ', 'ｍ'],
    note: 'Latin M/m can be confused with Greek mu, Cyrillic em, Roman numeral M, Cherokee, and fullwidth forms.'
  },
  {
    id: 'n-lookalikes',
    label: 'N / n lookalikes',
    chars: ['N', 'n', 'Ν', 'η', 'Н', 'п', 'ո', 'ռ', 'Ｎ', 'ｎ'],
    note: 'Latin N/n can be confused with Greek nu/eta, Cyrillic en/pe, Armenian n-like forms, and fullwidth forms.'
  },
  {
    id: 'p-lookalikes',
    label: 'P / p lookalikes',
    chars: ['P', 'p', 'Ρ', 'ρ', 'Р', 'р', 'Ꮲ', 'ꓑ', 'Ｐ', 'ｐ'],
    note: 'Latin P/p can be confused with Greek rho, Cyrillic er, Cherokee, and fullwidth forms.'
  },
  {
    id: 'r-lookalikes',
    label: 'R / r lookalikes',
    chars: ['R', 'r', 'ʀ', 'г', 'ᴦ', 'Ꭱ', 'ℛ', 'Ｒ', 'ｒ'],
    note: 'Latin R/r can be confused with small capital R, Cyrillic ghe-like forms, Cherokee, script R, and fullwidth forms.'
  },
  {
    id: 't-lookalikes',
    label: 'T / t lookalikes',
    chars: ['T', 't', 'Τ', 'Т', 'т', 'Ꭲ', 'ꓔ', 'Ｔ', 'ｔ'],
    note: 'Latin T/t can be confused with Greek tau, Cyrillic te, Cherokee, and fullwidth forms.'
  },
  {
    id: 'u-lookalikes',
    label: 'U / u lookalikes',
    chars: ['U', 'u', 'υ', 'ս', 'Ս', 'ц', 'Ս', 'Ｕ', 'ｕ'],
    note: 'Latin U/u can be confused with Greek upsilon, Armenian se, Cyrillic tse-like forms, and fullwidth forms.'
  },
  {
    id: 'v-lookalikes',
    label: 'V / v lookalikes',
    chars: ['V', 'v', 'Ⅴ', 'ⅴ', 'ν', 'ѵ', 'Ꮩ', '∨', 'Ｖ', 'ｖ'],
    note: 'Latin V/v can be confused with Roman numeral five, Greek nu, Cyrillic izhitsa, logical OR, Cherokee, and fullwidth forms.'
  },
  {
    id: 'w-lookalikes',
    label: 'W / w lookalikes',
    chars: ['W', 'w', 'Ԝ', 'ԝ', 'ѡ', 'ω', 'ա', 'Ꮃ', 'Ｗ', 'ｗ'],
    note: 'Latin W/w can be confused with Cyrillic We, omega, Armenian ayb-like forms, Cherokee, and fullwidth forms.'
  },
  {
    id: 'x-lookalikes',
    label: 'X / x / × lookalikes',
    chars: ['X', 'x', 'Χ', 'χ', 'Х', 'х', 'Ⅹ', 'ⅹ', '×', '᙭', 'Ｘ', 'ｘ'],
    note: 'Latin X/x can be confused with Greek chi, Cyrillic ha, Roman numeral X, multiplication sign, Canadian syllabics, and fullwidth forms.'
  },
  {
    id: 'y-lookalikes',
    label: 'Y / y lookalikes',
    chars: ['Y', 'y', 'Υ', 'γ', 'У', 'у', 'Ү', 'ү', 'Ꭹ', 'Ｙ', 'ｙ'],
    note: 'Latin Y/y can be confused with Greek upsilon/gamma, Cyrillic U/straight U, Cherokee, and fullwidth forms.'
  },

  // Common lowercase shape confusions
  {
    id: 'm-rn',
    label: 'm / rn',
    chars: ['m', 'rn', 'ｍ'],
    note: 'The sequence rn can look like m in many fonts. This group is mainly for visual reference; single-character analysis will not split sequences.'
  },
  {
    id: 'cl-d',
    label: 'cl / d',
    chars: ['d', 'cl', 'ԁ'],
    note: 'The sequence cl can look like d in some fonts. This group is mainly for visual reference; single-character analysis will not split sequences.'
  },

  // Punctuation / operators
  {
    id: 'dash-minus',
    label: 'Dash / minus',
    chars: ['-', '‐', '‑', '‒', '–', '—', '―', '−', '﹣', '－'],
    note: 'Different hyphen, dash, non-breaking hyphen, horizontal bar, and minus characters.'
  },
  {
    id: 'quotes-single',
    label: 'Single quotes / apostrophes',
    chars: ["'", '‘', '’', '‚', '‛', '´', '`', '′', 'ʹ', 'ʼ', 'ꞌ', '＇'],
    note: 'Different apostrophe, single quote, prime, accent, and modifier-letter forms.'
  },
  {
    id: 'quotes-double',
    label: 'Double quotes / primes',
    chars: ['"', '“', '”', '„', '‟', '″', 'ʺ', '＂'],
    note: 'Different quotation mark and double-prime forms.'
  },
  {
    id: 'slash-lookalikes',
    label: 'Slash / division slash',
    chars: ['/', '⁄', '∕', '╱', '／'],
    note: 'Slash, fraction slash, division slash, box drawing slash, and fullwidth slash can look similar.'
  },
  {
    id: 'backslash-yen-won',
    label: 'Backslash / yen / won',
    chars: ['\\', '＼', '¥', '￥', '₩'],
    note: 'Backslash, fullwidth reverse solidus, yen sign, and won sign can be confused depending on locale and font.'
  },
  {
    id: 'colon-lookalikes',
    label: 'Colon lookalikes',
    chars: [':', '：', '꞉', 'ː', '∶', '︓'],
    note: 'Different colon-like punctuation and ratio marks.'
  },
  {
    id: 'semicolon-lookalikes',
    label: 'Semicolon lookalikes',
    chars: [';', '；', ';', '︔'],
    note: 'Semicolon, fullwidth semicolon, Greek question mark, and presentation forms can look similar.'
  },
  {
    id: 'dot-lookalikes',
    label: 'Dot / point lookalikes',
    chars: ['.', '·', '•', '∙', '․', '。', '．', '｡'],
    note: 'Full stop, middle dot, bullet, one dot leader, ideographic full stop, and fullwidth/halfwidth full stops can be confused.'
  },
  {
    id: 'comma-lookalikes',
    label: 'Comma lookalikes',
    chars: [',', '，', '‚', '،', '٫', '﹐'],
    note: 'Comma, fullwidth comma, low quote, Arabic comma/decimal separator, and small comma forms.'
  },
  {
    id: 'tilde-lookalikes',
    label: 'Tilde / wave dash',
    chars: ['~', '˜', '∼', '〜', '～'],
    note: 'Tilde, small tilde, tilde operator, wave dash, and fullwidth tilde can be confused.'
  },
  {
    id: 'equals-lookalikes',
    label: 'Equals lookalikes',
    chars: ['=', '＝', '≡', '═', '꞊'],
    note: 'Equals, fullwidth equals, identical-to sign, box drawing line, and modifier equals-like forms.'
  },
  {
    id: 'plus-lookalikes',
    label: 'Plus lookalikes',
    chars: ['+', '＋', '✚', '➕', '᛭'],
    note: 'Plus sign, fullwidth plus, heavy plus, emoji plus, and cross-like signs.'
  },
  {
    id: 'asterisk-lookalikes',
    label: 'Asterisk lookalikes',
    chars: ['*', '＊', '∗', '✱', '✲', '⁎'],
    note: 'Asterisk, fullwidth asterisk, operator asterisk, and decorative star-like forms.'
  },
  {
    id: 'bracket-round',
    label: 'Parentheses lookalikes',
    chars: ['(', ')', '（', '）', '❨', '❩', '﹙', '﹚'],
    note: 'ASCII, fullwidth, ornamental, and small parentheses.'
  },
  {
    id: 'bracket-square',
    label: 'Square bracket lookalikes',
    chars: ['[', ']', '［', '］', '【', '】', '❲', '❳'],
    note: 'ASCII, fullwidth, corner, and ornamental square brackets.'
  },

  // Spaces / invisible controls
  {
    id: 'invisible',
    label: 'Invisible / special spaces',
    chars: [' ', '\t', '\n', '\r', '\u00A0', '\u1680', '\u180E', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u200B', '\u200C', '\u200D', '\u2028', '\u2029', '\u202F', '\u205F', '\u2060', '\u3000', '\uFEFF'],
    note: 'Normal space, tabs, line breaks, non-breaking spaces, zero-width characters, word joiner, ideographic space, and BOM.'
  },

  // Korean / Japanese / CJK shape confusions
  {
    id: 'hangul-ieung-o-zero',
    label: 'ㅇ / O / 0',
    chars: ['ㅇ', 'O', 'o', '0', 'Ο', 'О', '〇', '○'],
    note: 'Hangul ieung can resemble O, zero, omicron, Cyrillic O, and circles.'
  },
  {
    id: 'hangul-i-l',
    label: 'ㅣ / I / l / 1 / |',
    chars: ['ㅣ', 'I', 'l', '1', 'i', '|', '!', 'Ⅰ', 'Ⅱ', 'Ⅲ', 'ı', 'ɪ', 'ǀ', '丨', '｜', 'Ｉ', 'ｌ', '１', '！'],
    note: 'Hangul vertical vowel ㅣ can resemble uppercase I, lowercase l, digit one, lowercase i, vertical bars, CJK vertical stroke, Roman numerals, and fullwidth forms.'
  },
  {
    id: 'hangul-eu-dash',
    label: 'ㅡ / dash',
    chars: ['ㅡ', '-', '−', '—', '一', 'ー', '－'],
    note: 'Hangul ㅡ can resemble dashes, minus, CJK one, katakana prolonged sound mark, and fullwidth hyphen.'
  },
  {
    id: 'katakana-ro-mouth',
    label: 'ロ / 口',
    chars: ['ロ', '口', '□', 'ㅁ'],
    note: 'Katakana ro, CJK mouth, square, and Hangul mieum can look similar.'
  },
  {
    id: 'katakana-ka-power',
    label: 'カ / 力',
    chars: ['カ', '力', 'ㄉ'],
    note: 'Katakana ka and CJK power can look nearly identical.'
  },
  {
    id: 'katakana-ni-two',
    label: 'ニ / 二',
    chars: ['ニ', '二', '〓', '＝'],
    note: 'Katakana ni and CJK two can look very similar.'
  },
  {
    id: 'katakana-e-work',
    label: 'エ / 工',
    chars: ['エ', '工'],
    note: 'Katakana e and CJK work can look very similar.'
  },
  {
    id: 'katakana-ta-evening',
    label: 'タ / 夕',
    chars: ['タ', '夕'],
    note: 'Katakana ta and CJK evening can look very similar.'
  },
  {
    id: 'katakana-he-hangul',
    label: 'ヘ / へ / ㅅ',
    chars: ['ヘ', 'へ', 'ㅅ', '^'],
    note: 'Katakana he, hiragana he, Hangul siot, and caret can look similar.'
  },
  {
    id: 'katakana-so-n',
    label: 'ソ / ン / ﾉ',
    chars: ['ソ', 'ン', 'ノ', 'ﾉ', '丶'],
    note: 'Katakana so, n, no, halfwidth no, and CJK dot can be confused in some fonts.'
  },
  {
    id: 'katakana-shi-tsu',
    label: 'シ / ツ',
    chars: ['シ', 'ツ', 'ジ', 'ヅ'],
    note: 'Katakana shi/tsu and voiced forms are commonly confused by learners and in small text.'
  }
];

const groupByChar = new Map<string, ConfusableGroup>();
for (const group of confusableGroups) {
  for (const char of group.chars) {
    if (!groupByChar.has(char)) {
      groupByChar.set(char, group);
    }
  }
}

export function findGroup(char: string) {
  return groupByChar.get(char);
}
