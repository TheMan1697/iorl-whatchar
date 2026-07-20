import { unicodeNames, type UnicodeNameCharacter } from '../data/unicodeNames';
import type { AnalyzedChar } from '../utils/analyzeText';
import type { Locale } from './config';

const scriptKeyBySource = {
  Unknown: 'unknown',
  Space: 'space',
  'Invisible / special space': 'invisibleSpace',
  'ASCII digit': 'asciiDigit',
  Latin: 'latin',
  'ASCII punctuation': 'asciiPunctuation',
  'Latin Extended': 'latinExtended',
  'IPA / phonetic Latin': 'ipaLatin',
  'Spacing modifier letters': 'spacingModifierLetters',
  Greek: 'greek',
  Cyrillic: 'cyrillic',
  'Cyrillic Supplement': 'cyrillicSupplement',
  Armenian: 'armenian',
  Hebrew: 'hebrew',
  Devanagari: 'devanagari',
  Bengali: 'bengali',
  Gurmukhi: 'gurmukhi',
  Gujarati: 'gujarati',
  Tamil: 'tamil',
  Telugu: 'telugu',
  Kannada: 'kannada',
  Malayalam: 'malayalam',
  'Hangul Jamo': 'hangulJamo',
  'Hangul Compatibility Jamo': 'hangulCompatibilityJamo',
  Hangul: 'hangul',
  Hiragana: 'hiragana',
  Katakana: 'katakana',
  'Katakana Phonetic Extensions': 'katakanaPhoneticExtensions',
  'CJK Radicals': 'cjkRadicals',
  'Kangxi Radicals': 'kangxiRadicals',
  'CJK Symbols / punctuation': 'cjkSymbolsPunctuation',
  'CJK Extension A': 'cjkExtensionA',
  CJK: 'cjk',
  'CJK Compatibility Ideograph': 'cjkCompatibilityIdeograph',
  Cherokee: 'cherokee',
  'Letterlike symbol': 'letterlikeSymbol',
  'Number form / Roman numeral': 'numberFormRomanNumeral',
  'Arrow symbol': 'arrowSymbol',
  'Mathematical operator': 'mathematicalOperator',
  'Box drawing': 'boxDrawing',
  'Geometric shape': 'geometricShape',
  'Dingbat symbol': 'dingbatSymbol',
  'Mathematical alphanumeric symbol': 'mathematicalAlphanumericSymbol',
  'Fullwidth / Halfwidth': 'fullwidthHalfwidth',
  Other: 'other'
} as const;

type ScriptSource = keyof typeof scriptKeyBySource;
type ScriptKey = (typeof scriptKeyBySource)[ScriptSource];
type ScriptLabels = Record<ScriptKey, string>;

const scriptLabels = {
  en: {
    unknown: 'Unknown', space: 'Space', invisibleSpace: 'Invisible / special space', asciiDigit: 'ASCII digit', latin: 'Latin', asciiPunctuation: 'ASCII punctuation', latinExtended: 'Latin Extended', ipaLatin: 'IPA / phonetic Latin', spacingModifierLetters: 'Spacing modifier letters', greek: 'Greek', cyrillic: 'Cyrillic', cyrillicSupplement: 'Cyrillic Supplement', armenian: 'Armenian', hebrew: 'Hebrew', devanagari: 'Devanagari', bengali: 'Bengali', gurmukhi: 'Gurmukhi', gujarati: 'Gujarati', tamil: 'Tamil', telugu: 'Telugu', kannada: 'Kannada', malayalam: 'Malayalam', hangulJamo: 'Hangul Jamo', hangulCompatibilityJamo: 'Hangul Compatibility Jamo', hangul: 'Hangul', hiragana: 'Hiragana', katakana: 'Katakana', katakanaPhoneticExtensions: 'Katakana Phonetic Extensions', cjkRadicals: 'CJK Radicals', kangxiRadicals: 'Kangxi Radicals', cjkSymbolsPunctuation: 'CJK Symbols / punctuation', cjkExtensionA: 'CJK Extension A', cjk: 'CJK', cjkCompatibilityIdeograph: 'CJK Compatibility Ideograph', cherokee: 'Cherokee', letterlikeSymbol: 'Letterlike symbol', numberFormRomanNumeral: 'Number form / Roman numeral', arrowSymbol: 'Arrow symbol', mathematicalOperator: 'Mathematical operator', boxDrawing: 'Box drawing', geometricShape: 'Geometric shape', dingbatSymbol: 'Dingbat symbol', mathematicalAlphanumericSymbol: 'Mathematical alphanumeric symbol', fullwidthHalfwidth: 'Fullwidth / Halfwidth', other: 'Other'
  },
  ko: {
    unknown: '알 수 없음', space: '공백', invisibleSpace: '보이지 않는 특수 공백', asciiDigit: 'ASCII 숫자', latin: '라틴 문자', asciiPunctuation: 'ASCII 문장 부호', latinExtended: '라틴 확장 문자', ipaLatin: 'IPA / 음성 라틴 문자', spacingModifierLetters: '간격 조정 문자', greek: '그리스 문자', cyrillic: '키릴 문자', cyrillicSupplement: '키릴 문자 보충', armenian: '아르메니아 문자', hebrew: '히브리 문자', devanagari: '데바나가리 문자', bengali: '벵골 문자', gurmukhi: '구르무키 문자', gujarati: '구자라트 문자', tamil: '타밀 문자', telugu: '텔루구 문자', kannada: '칸나다 문자', malayalam: '말라얄람 문자', hangulJamo: '한글 자모', hangulCompatibilityJamo: '한글 호환 자모', hangul: '한글', hiragana: '히라가나', katakana: '가타카나', katakanaPhoneticExtensions: '가타카나 음성 확장', cjkRadicals: 'CJK 부수', kangxiRadicals: '강희자전 부수', cjkSymbolsPunctuation: 'CJK 기호 / 문장 부호', cjkExtensionA: 'CJK 확장 A', cjk: 'CJK 한자', cjkCompatibilityIdeograph: 'CJK 호환 한자', cherokee: '체로키 문자', letterlikeSymbol: '문자형 기호', numberFormRomanNumeral: '숫자 형식 / 로마 숫자', arrowSymbol: '화살표 기호', mathematicalOperator: '수학 연산자', boxDrawing: '괘선 문자', geometricShape: '도형 기호', dingbatSymbol: '장식 기호', mathematicalAlphanumericSymbol: '수학 영숫자 기호', fullwidthHalfwidth: '전각 / 반각 문자', other: '기타 문자'
  },
  ja: {
    unknown: '不明', space: '空白', invisibleSpace: '不可視 / 特殊空白', asciiDigit: 'ASCII 数字', latin: 'ラテン文字', asciiPunctuation: 'ASCII 記号', latinExtended: 'ラテン拡張文字', ipaLatin: 'IPA / 音声記号ラテン文字', spacingModifierLetters: '前進を伴う修飾文字', greek: 'ギリシャ文字', cyrillic: 'キリル文字', cyrillicSupplement: 'キリル文字補助', armenian: 'アルメニア文字', hebrew: 'ヘブライ文字', devanagari: 'デーヴァナーガリー文字', bengali: 'ベンガル文字', gurmukhi: 'グルムキー文字', gujarati: 'グジャラート文字', tamil: 'タミル文字', telugu: 'テルグ文字', kannada: 'カンナダ文字', malayalam: 'マラヤーラム文字', hangulJamo: 'ハングル字母', hangulCompatibilityJamo: 'ハングル互換字母', hangul: 'ハングル', hiragana: 'ひらがな', katakana: 'カタカナ', katakanaPhoneticExtensions: 'カタカナ拡張', cjkRadicals: 'CJK 部首', kangxiRadicals: '康熙部首', cjkSymbolsPunctuation: 'CJK 記号 / 句読点', cjkExtensionA: 'CJK 統合漢字拡張 A', cjk: 'CJK 漢字', cjkCompatibilityIdeograph: 'CJK 互換漢字', cherokee: 'チェロキー文字', letterlikeSymbol: '文字様記号', numberFormRomanNumeral: '数字形式 / ローマ数字', arrowSymbol: '矢印記号', mathematicalOperator: '数学演算子', boxDrawing: '罫線素片', geometricShape: '幾何学記号', dingbatSymbol: '装飾記号', mathematicalAlphanumericSymbol: '数学用英数字記号', fullwidthHalfwidth: '全角 / 半角形', other: 'その他'
  },
  zh: {
    unknown: '未知', space: '空格', invisibleSpace: '不可见 / 特殊空格', asciiDigit: 'ASCII 数字', latin: '拉丁字母', asciiPunctuation: 'ASCII 标点符号', latinExtended: '拉丁扩展字符', ipaLatin: 'IPA / 拉丁语音字符', spacingModifierLetters: '占位修饰字母', greek: '希腊字母', cyrillic: '西里尔字母', cyrillicSupplement: '西里尔字母补充', armenian: '亚美尼亚字母', hebrew: '希伯来字母', devanagari: '天城文字', bengali: '孟加拉文字', gurmukhi: '古木基文字', gujarati: '古吉拉特文字', tamil: '泰米尔文字', telugu: '泰卢固文字', kannada: '卡纳达文字', malayalam: '马拉雅拉姆文字', hangulJamo: '韩文字母', hangulCompatibilityJamo: '韩文兼容字母', hangul: '韩文', hiragana: '平假名', katakana: '片假名', katakanaPhoneticExtensions: '片假名语音扩展', cjkRadicals: 'CJK 部首', kangxiRadicals: '康熙部首', cjkSymbolsPunctuation: 'CJK 符号 / 标点', cjkExtensionA: 'CJK 扩展 A', cjk: 'CJK 汉字', cjkCompatibilityIdeograph: 'CJK 兼容汉字', cherokee: '切罗基字母', letterlikeSymbol: '字母式符号', numberFormRomanNumeral: '数字形式 / 罗马数字', arrowSymbol: '箭头符号', mathematicalOperator: '数学运算符', boxDrawing: '制表符号', geometricShape: '几何图形', dingbatSymbol: '装饰符号', mathematicalAlphanumericSymbol: '数学字母数字符号', fullwidthHalfwidth: '全角 / 半角字符', other: '其他字符'
  },
  es: {
    unknown: 'Desconocido', space: 'Espacio', invisibleSpace: 'Espacio invisible / especial', asciiDigit: 'Dígito ASCII', latin: 'Latino', asciiPunctuation: 'Puntuación ASCII', latinExtended: 'Latino extendido', ipaLatin: 'Latino AFI / fonético', spacingModifierLetters: 'Letras modificadoras espaciadoras', greek: 'Griego', cyrillic: 'Cirílico', cyrillicSupplement: 'Suplemento cirílico', armenian: 'Armenio', hebrew: 'Hebreo', devanagari: 'Devanagari', bengali: 'Bengalí', gurmukhi: 'Gurmukhi', gujarati: 'Guyaratí', tamil: 'Tamil', telugu: 'Telugu', kannada: 'Canarés', malayalam: 'Malayalam', hangulJamo: 'Jamo hangul', hangulCompatibilityJamo: 'Jamo hangul de compatibilidad', hangul: 'Hangul', hiragana: 'Hiragana', katakana: 'Katakana', katakanaPhoneticExtensions: 'Extensiones fonéticas katakana', cjkRadicals: 'Radicales CJK', kangxiRadicals: 'Radicales Kangxi', cjkSymbolsPunctuation: 'Símbolos / puntuación CJK', cjkExtensionA: 'Extensión A de CJK', cjk: 'CJK', cjkCompatibilityIdeograph: 'Ideograma de compatibilidad CJK', cherokee: 'Cheroqui', letterlikeSymbol: 'Símbolo con forma de letra', numberFormRomanNumeral: 'Forma numérica / número romano', arrowSymbol: 'Símbolo de flecha', mathematicalOperator: 'Operador matemático', boxDrawing: 'Dibujo de cajas', geometricShape: 'Forma geométrica', dingbatSymbol: 'Símbolo ornamental', mathematicalAlphanumericSymbol: 'Símbolo alfanumérico matemático', fullwidthHalfwidth: 'Ancho completo / medio ancho', other: 'Otro'
  },
  fr: {
    unknown: 'Inconnu', space: 'Espace', invisibleSpace: 'Espace invisible / spécial', asciiDigit: 'Chiffre ASCII', latin: 'Latin', asciiPunctuation: 'Ponctuation ASCII', latinExtended: 'Latin étendu', ipaLatin: 'Latin API / phonétique', spacingModifierLetters: 'Lettres modificatives avec chasse', greek: 'Grec', cyrillic: 'Cyrillique', cyrillicSupplement: 'Supplément cyrillique', armenian: 'Arménien', hebrew: 'Hébreu', devanagari: 'Dévanagari', bengali: 'Bengali', gurmukhi: 'Gourmoukhi', gujarati: 'Goudjarati', tamil: 'Tamoul', telugu: 'Télougou', kannada: 'Kannada', malayalam: 'Malayalam', hangulJamo: 'Jamo hangul', hangulCompatibilityJamo: 'Jamo hangul de compatibilité', hangul: 'Hangul', hiragana: 'Hiragana', katakana: 'Katakana', katakanaPhoneticExtensions: 'Extensions phonétiques katakana', cjkRadicals: 'Radicaux CJK', kangxiRadicals: 'Radicaux Kangxi', cjkSymbolsPunctuation: 'Symboles / ponctuation CJK', cjkExtensionA: 'Extension A des CJK', cjk: 'CJK', cjkCompatibilityIdeograph: 'Idéogramme de compatibilité CJK', cherokee: 'Cherokee', letterlikeSymbol: 'Symbole de type lettre', numberFormRomanNumeral: 'Forme numérique / chiffre romain', arrowSymbol: 'Symbole flèche', mathematicalOperator: 'Opérateur mathématique', boxDrawing: 'Filet de cadre', geometricShape: 'Forme géométrique', dingbatSymbol: 'Symbole ornemental', mathematicalAlphanumericSymbol: 'Symbole alphanumérique mathématique', fullwidthHalfwidth: 'Pleine chasse / demi-chasse', other: 'Autre'
  },
  de: {
    unknown: 'Unbekannt', space: 'Leerzeichen', invisibleSpace: 'Unsichtbares / spezielles Leerzeichen', asciiDigit: 'ASCII-Ziffer', latin: 'Lateinisch', asciiPunctuation: 'ASCII-Satzzeichen', latinExtended: 'Lateinisch erweitert', ipaLatin: 'IPA / phonetisches Latein', spacingModifierLetters: 'Modifikationsbuchstaben mit Breite', greek: 'Griechisch', cyrillic: 'Kyrillisch', cyrillicSupplement: 'Kyrillisch, Ergänzung', armenian: 'Armenisch', hebrew: 'Hebräisch', devanagari: 'Devanagari', bengali: 'Bengalisch', gurmukhi: 'Gurmukhi', gujarati: 'Gujarati', tamil: 'Tamilisch', telugu: 'Telugu', kannada: 'Kannada', malayalam: 'Malayalam', hangulJamo: 'Hangul-Jamo', hangulCompatibilityJamo: 'Hangul-Kompatibilitäts-Jamo', hangul: 'Hangul', hiragana: 'Hiragana', katakana: 'Katakana', katakanaPhoneticExtensions: 'Phonetische Katakana-Erweiterungen', cjkRadicals: 'CJK-Radikale', kangxiRadicals: 'Kangxi-Radikale', cjkSymbolsPunctuation: 'CJK-Symbole / Satzzeichen', cjkExtensionA: 'CJK-Erweiterung A', cjk: 'CJK', cjkCompatibilityIdeograph: 'CJK-Kompatibilitätsideogramm', cherokee: 'Cherokee', letterlikeSymbol: 'Buchstabenähnliches Symbol', numberFormRomanNumeral: 'Zahlenform / römische Zahl', arrowSymbol: 'Pfeilsymbol', mathematicalOperator: 'Mathematischer Operator', boxDrawing: 'Rahmenzeichnung', geometricShape: 'Geometrische Form', dingbatSymbol: 'Ziersymbol', mathematicalAlphanumericSymbol: 'Mathematisches alphanumerisches Symbol', fullwidthHalfwidth: 'Vollbreite / Halbbreite', other: 'Sonstiges'
  }
} satisfies Record<Locale, ScriptLabels>;

const letterScriptLabels = {
  en: { latin: 'Latin', greek: 'Greek', cyrillic: 'Cyrillic' },
  ko: { latin: '라틴', greek: '그리스', cyrillic: '키릴' },
  ja: { latin: 'ラテン', greek: 'ギリシャ', cyrillic: 'キリル' },
  zh: { latin: '拉丁', greek: '希腊', cyrillic: '西里尔' },
  es: { latin: 'latina', greek: 'griega', cyrillic: 'cirílica' },
  fr: { latin: 'latine', greek: 'grecque', cyrillic: 'cyrillique' },
  de: { latin: 'Lateinisch', greek: 'Griechisch', cyrillic: 'Kyrillisch' }
} satisfies Record<Locale, Record<'latin' | 'greek' | 'cyrillic', string>>;

const specialNameKeyByChar = {
  ' ': 'space', '\t': 'tab', '\n': 'lineFeed', '\r': 'carriageReturn', '\u00A0': 'noBreakSpace', '\u1680': 'oghamSpace', '\u180E': 'mongolianVowelSeparator', '\u2000': 'enQuad', '\u2001': 'emQuad', '\u2002': 'enSpace', '\u2003': 'emSpace', '\u2004': 'threePerEmSpace', '\u2005': 'fourPerEmSpace', '\u2006': 'sixPerEmSpace', '\u2007': 'figureSpace', '\u2008': 'punctuationSpace', '\u2009': 'thinSpace', '\u200A': 'hairSpace', '\u200B': 'zeroWidthSpace', '\u200C': 'zeroWidthNonJoiner', '\u200D': 'zeroWidthJoiner', '\u2028': 'lineSeparator', '\u2029': 'paragraphSeparator', '\u202F': 'narrowNoBreakSpace', '\u205F': 'mediumMathematicalSpace', '\u2060': 'wordJoiner', '\u3000': 'ideographicSpace', '\uFEFF': 'byteOrderMark', '|': 'verticalLine', '!': 'exclamationMark', 'ㅣ': 'hangulLetterI'
} as const;

type SpecialNameKey = (typeof specialNameKeyByChar)[keyof typeof specialNameKeyByChar];
type SpecialNames = Record<SpecialNameKey, string>;

const specialNames = {
  en: {
    space: 'Space', tab: 'Character tabulation', lineFeed: 'Line feed', carriageReturn: 'Carriage return', noBreakSpace: 'No-break space', oghamSpace: 'Ogham space mark', mongolianVowelSeparator: 'Mongolian vowel separator', enQuad: 'En quad', emQuad: 'Em quad', enSpace: 'En space', emSpace: 'Em space', threePerEmSpace: 'Three-per-em space', fourPerEmSpace: 'Four-per-em space', sixPerEmSpace: 'Six-per-em space', figureSpace: 'Figure space', punctuationSpace: 'Punctuation space', thinSpace: 'Thin space', hairSpace: 'Hair space', zeroWidthSpace: 'Zero width space', zeroWidthNonJoiner: 'Zero width non-joiner', zeroWidthJoiner: 'Zero width joiner', lineSeparator: 'Line separator', paragraphSeparator: 'Paragraph separator', narrowNoBreakSpace: 'Narrow no-break space', mediumMathematicalSpace: 'Medium mathematical space', wordJoiner: 'Word joiner', ideographicSpace: 'Ideographic space', byteOrderMark: 'Byte order mark / zero width no-break space', verticalLine: 'Vertical Line', exclamationMark: 'Exclamation Mark', hangulLetterI: 'Hangul letter ㅣ'
  },
  ko: {
    space: '공백', tab: '문자 탭', lineFeed: '줄 바꿈', carriageReturn: '캐리지 리턴', noBreakSpace: '줄 바꿈 없는 공백', oghamSpace: '오검 공백 표시', mongolianVowelSeparator: '몽골 문자 모음 구분자', enQuad: 'En 쿼드 공백', emQuad: 'Em 쿼드 공백', enSpace: 'En 공백', emSpace: 'Em 공백', threePerEmSpace: '1/3 Em 공백', fourPerEmSpace: '1/4 Em 공백', sixPerEmSpace: '1/6 Em 공백', figureSpace: '숫자 너비 공백', punctuationSpace: '문장 부호 너비 공백', thinSpace: '얇은 공백', hairSpace: '매우 얇은 공백', zeroWidthSpace: '제로폭 공백', zeroWidthNonJoiner: '제로폭 비결합자', zeroWidthJoiner: '제로폭 결합자', lineSeparator: '줄 구분자', paragraphSeparator: '문단 구분자', narrowNoBreakSpace: '좁은 줄 바꿈 없는 공백', mediumMathematicalSpace: '중간 수학 공백', wordJoiner: '단어 결합자', ideographicSpace: '표의 문자 공백', byteOrderMark: '바이트 순서 표시 / 제로폭 줄 바꿈 없는 공백', verticalLine: '세로줄', exclamationMark: '느낌표', hangulLetterI: '한글 모음 ㅣ'
  },
  ja: {
    space: '空白', tab: '文字タブ', lineFeed: '改行', carriageReturn: '復帰', noBreakSpace: '改行しない空白', oghamSpace: 'オガム空白記号', mongolianVowelSeparator: 'モンゴル母音分離記号', enQuad: 'En クワッド', emQuad: 'Em クワッド', enSpace: 'En 空白', emSpace: 'Em 空白', threePerEmSpace: '1/3 Em 空白', fourPerEmSpace: '1/4 Em 空白', sixPerEmSpace: '1/6 Em 空白', figureSpace: '数字幅空白', punctuationSpace: '句読点幅空白', thinSpace: '細い空白', hairSpace: '極細空白', zeroWidthSpace: 'ゼロ幅スペース', zeroWidthNonJoiner: 'ゼロ幅非接合子', zeroWidthJoiner: 'ゼロ幅接合子', lineSeparator: '行区切り', paragraphSeparator: '段落区切り', narrowNoBreakSpace: '狭い改行しない空白', mediumMathematicalSpace: '中程度の数式空白', wordJoiner: '単語結合子', ideographicSpace: '表意文字空白', byteOrderMark: 'バイト順マーク / ゼロ幅改行なし空白', verticalLine: '縦線', exclamationMark: '感嘆符', hangulLetterI: 'ハングル字母 ㅣ'
  },
  zh: {
    space: '空格', tab: '字符制表符', lineFeed: '换行符', carriageReturn: '回车符', noBreakSpace: '不换行空格', oghamSpace: '欧甘空格标记', mongolianVowelSeparator: '蒙古文元音分隔符', enQuad: 'En 方空格', emQuad: 'Em 方空格', enSpace: 'En 空格', emSpace: 'Em 空格', threePerEmSpace: '三分之一 Em 空格', fourPerEmSpace: '四分之一 Em 空格', sixPerEmSpace: '六分之一 Em 空格', figureSpace: '数字空格', punctuationSpace: '标点空格', thinSpace: '窄空格', hairSpace: '极窄空格', zeroWidthSpace: '零宽空格', zeroWidthNonJoiner: '零宽非连接符', zeroWidthJoiner: '零宽连接符', lineSeparator: '行分隔符', paragraphSeparator: '段落分隔符', narrowNoBreakSpace: '窄不换行空格', mediumMathematicalSpace: '中等数学空格', wordJoiner: '单词连接符', ideographicSpace: '表意文字空格', byteOrderMark: '字节顺序标记 / 零宽不换行空格', verticalLine: '竖线', exclamationMark: '感叹号', hangulLetterI: '韩文字母 ㅣ'
  },
  es: {
    space: 'Espacio', tab: 'Tabulación de carácter', lineFeed: 'Salto de línea', carriageReturn: 'Retorno de carro', noBreakSpace: 'Espacio de no separación', oghamSpace: 'Marca de espacio ogham', mongolianVowelSeparator: 'Separador vocálico mongol', enQuad: 'Cuadratín en', emQuad: 'Cuadratín em', enSpace: 'Espacio en', emSpace: 'Espacio em', threePerEmSpace: 'Espacio de un tercio de em', fourPerEmSpace: 'Espacio de un cuarto de em', sixPerEmSpace: 'Espacio de un sexto de em', figureSpace: 'Espacio de cifra', punctuationSpace: 'Espacio de puntuación', thinSpace: 'Espacio fino', hairSpace: 'Espacio ultrafino', zeroWidthSpace: 'Espacio de ancho cero', zeroWidthNonJoiner: 'No enlazador de ancho cero', zeroWidthJoiner: 'Enlazador de ancho cero', lineSeparator: 'Separador de línea', paragraphSeparator: 'Separador de párrafo', narrowNoBreakSpace: 'Espacio estrecho de no separación', mediumMathematicalSpace: 'Espacio matemático mediano', wordJoiner: 'Enlazador de palabras', ideographicSpace: 'Espacio ideográfico', byteOrderMark: 'Marca de orden de bytes / espacio sin separación de ancho cero', verticalLine: 'Barra vertical', exclamationMark: 'Signo de exclamación', hangulLetterI: 'Letra hangul ㅣ'
  },
  fr: {
    space: 'Espace', tab: 'Tabulation de caractère', lineFeed: 'Saut de ligne', carriageReturn: 'Retour chariot', noBreakSpace: 'Espace insécable', oghamSpace: 'Marque d’espace ogham', mongolianVowelSeparator: 'Séparateur de voyelle mongole', enQuad: 'Cadratin en', emQuad: 'Cadratin em', enSpace: 'Espace en', emSpace: 'Espace em', threePerEmSpace: 'Espace d’un tiers de em', fourPerEmSpace: 'Espace d’un quart de em', sixPerEmSpace: 'Espace d’un sixième de em', figureSpace: 'Espace tabulaire', punctuationSpace: 'Espace de ponctuation', thinSpace: 'Espace fine', hairSpace: 'Espace ultrafine', zeroWidthSpace: 'Espace sans chasse', zeroWidthNonJoiner: 'Antiliant sans chasse', zeroWidthJoiner: 'Liant sans chasse', lineSeparator: 'Séparateur de ligne', paragraphSeparator: 'Séparateur de paragraphe', narrowNoBreakSpace: 'Espace insécable étroite', mediumMathematicalSpace: 'Espace mathématique moyenne', wordJoiner: 'Liant de mots', ideographicSpace: 'Espace idéographique', byteOrderMark: 'Indicateur d’ordre des octets / espace insécable sans chasse', verticalLine: 'Barre verticale', exclamationMark: 'Point d’exclamation', hangulLetterI: 'Lettre hangul ㅣ'
  },
  de: {
    space: 'Leerzeichen', tab: 'Zeichentabulator', lineFeed: 'Zeilenvorschub', carriageReturn: 'Wagenrücklauf', noBreakSpace: 'Geschütztes Leerzeichen', oghamSpace: 'Ogham-Leerzeichenmarke', mongolianVowelSeparator: 'Mongolischer Vokaltrenner', enQuad: 'Halbgeviert', emQuad: 'Geviert', enSpace: 'Halbgeviert-Leerzeichen', emSpace: 'Geviert-Leerzeichen', threePerEmSpace: 'Drittelgeviert-Leerzeichen', fourPerEmSpace: 'Viertelgeviert-Leerzeichen', sixPerEmSpace: 'Sechstelgeviert-Leerzeichen', figureSpace: 'Ziffernbreites Leerzeichen', punctuationSpace: 'Satzzeichenbreites Leerzeichen', thinSpace: 'Schmales Leerzeichen', hairSpace: 'Haarleerzeichen', zeroWidthSpace: 'Leerzeichen ohne Breite', zeroWidthNonJoiner: 'Nichtverbinder ohne Breite', zeroWidthJoiner: 'Verbinder ohne Breite', lineSeparator: 'Zeilentrenner', paragraphSeparator: 'Absatztrenner', narrowNoBreakSpace: 'Schmales geschütztes Leerzeichen', mediumMathematicalSpace: 'Mittleres mathematisches Leerzeichen', wordJoiner: 'Wortverbinder', ideographicSpace: 'Ideografisches Leerzeichen', byteOrderMark: 'Byte-Reihenfolge-Markierung / geschütztes Leerzeichen ohne Breite', verticalLine: 'Vertikaler Strich', exclamationMark: 'Ausrufezeichen', hangulLetterI: 'Hangul-Buchstabe ㅣ'
  }
} satisfies Record<Locale, SpecialNames>;

type NameGrammar = {
  capitalLetter: (script: string, letter: string) => string;
  smallLetter: (script: string, letter: string) => string;
  digit: (digit: string) => string;
  fullwidthCapitalLetter: (letter: string) => string;
  fullwidthSmallLetter: (letter: string) => string;
  fullwidthDigit: (digit: string) => string;
  knownCharacter: (script: string, char: string) => string;
  generalCharacter: (script: string, codePoint: string) => string;
};

const nameGrammar: Record<Locale, NameGrammar> = {
  en: {
    capitalLetter: (script, letter) => `${script} capital letter ${letter}`, smallLetter: (script, letter) => `${script} small letter ${letter}`, digit: (digit) => `Digit ${digit}`, fullwidthCapitalLetter: (letter) => `Fullwidth Latin capital letter ${letter}`, fullwidthSmallLetter: (letter) => `Fullwidth Latin small letter ${letter}`, fullwidthDigit: (digit) => `Fullwidth digit ${digit}`, knownCharacter: (script, char) => `${script} character ${char}`, generalCharacter: (script, codePoint) => `${script} character ${codePoint}`
  },
  ko: {
    capitalLetter: (script, letter) => `${script} 대문자 ${letter}`, smallLetter: (script, letter) => `${script} 소문자 ${letter}`, digit: (digit) => `숫자 ${digit}`, fullwidthCapitalLetter: (letter) => `전각 라틴 대문자 ${letter}`, fullwidthSmallLetter: (letter) => `전각 라틴 소문자 ${letter}`, fullwidthDigit: (digit) => `전각 숫자 ${digit}`, knownCharacter: (script, char) => `${script}: ${char}`, generalCharacter: (script, codePoint) => `${script} ${codePoint}`
  },
  ja: {
    capitalLetter: (script, letter) => `${script}大文字 ${letter}`, smallLetter: (script, letter) => `${script}小文字 ${letter}`, digit: (digit) => `数字 ${digit}`, fullwidthCapitalLetter: (letter) => `全角ラテン大文字 ${letter}`, fullwidthSmallLetter: (letter) => `全角ラテン小文字 ${letter}`, fullwidthDigit: (digit) => `全角数字 ${digit}`, knownCharacter: (script, char) => `${script}：${char}`, generalCharacter: (script, codePoint) => `${script} ${codePoint}`
  },
  zh: {
    capitalLetter: (script, letter) => `${script}大写字母 ${letter}`, smallLetter: (script, letter) => `${script}小写字母 ${letter}`, digit: (digit) => `数字 ${digit}`, fullwidthCapitalLetter: (letter) => `全角拉丁大写字母 ${letter}`, fullwidthSmallLetter: (letter) => `全角拉丁小写字母 ${letter}`, fullwidthDigit: (digit) => `全角数字 ${digit}`, knownCharacter: (script, char) => `${script}：${char}`, generalCharacter: (script, codePoint) => `${script} ${codePoint}`
  },
  es: {
    capitalLetter: (script, letter) => `Letra ${script.toLowerCase()} ${letter} mayúscula`, smallLetter: (script, letter) => `Letra ${script.toLowerCase()} ${letter} minúscula`, digit: (digit) => `Dígito ${digit}`, fullwidthCapitalLetter: (letter) => `Letra latina ${letter} mayúscula de ancho completo`, fullwidthSmallLetter: (letter) => `Letra latina ${letter} minúscula de ancho completo`, fullwidthDigit: (digit) => `Dígito ${digit} de ancho completo`, knownCharacter: (script, char) => `${script}: ${char}`, generalCharacter: (script, codePoint) => `Carácter ${script.toLowerCase()} ${codePoint}`
  },
  fr: {
    capitalLetter: (script, letter) => `Lettre ${script.toLowerCase()} majuscule ${letter}`, smallLetter: (script, letter) => `Lettre ${script.toLowerCase()} minuscule ${letter}`, digit: (digit) => `Chiffre ${digit}`, fullwidthCapitalLetter: (letter) => `Lettre latine majuscule ${letter} pleine chasse`, fullwidthSmallLetter: (letter) => `Lettre latine minuscule ${letter} pleine chasse`, fullwidthDigit: (digit) => `Chiffre ${digit} pleine chasse`, knownCharacter: (script, char) => `${script} : ${char}`, generalCharacter: (script, codePoint) => `Caractère ${script.toLowerCase()} ${codePoint}`
  },
  de: {
    capitalLetter: (script, letter) => `${script}er Großbuchstabe ${letter}`, smallLetter: (script, letter) => `${script}er Kleinbuchstabe ${letter}`, digit: (digit) => `Ziffer ${digit}`, fullwidthCapitalLetter: (letter) => `Lateinischer Vollbreiten-Großbuchstabe ${letter}`, fullwidthSmallLetter: (letter) => `Lateinischer Vollbreiten-Kleinbuchstabe ${letter}`, fullwidthDigit: (digit) => `Vollbreitenziffer ${digit}`, knownCharacter: (script, char) => `${script}: ${char}`, generalCharacter: (script, codePoint) => `${script}es Zeichen ${codePoint}`
  }
};

export function localizeScript(source: string, locale: Locale): string {
  const key = scriptKeyBySource[source as ScriptSource];
  if (key) return scriptLabels[locale][key];
  return source || scriptLabels[locale].unknown;
}

function localizeLetterScript(source: string, locale: Locale): string {
  const key = scriptKeyBySource[source as ScriptSource];
  if (key === 'latin' || key === 'greek' || key === 'cyrillic') return letterScriptLabels[locale][key];
  return localizeScript(source, locale);
}

function isKnownCharacter(char: string): char is UnicodeNameCharacter {
  return Object.hasOwn(unicodeNames, char);
}

export function localizeCharacterName(item: Pick<AnalyzedChar, 'char' | 'codePoint' | 'name' | 'script'>, locale: Locale): string {
  const cp = item.char.codePointAt(0) ?? 0;
  if (locale === 'en') {
    if (cp >= 0x61 && cp <= 0x7A) return nameGrammar.en.smallLetter('Latin', item.char);
    if (item.char === 'ㅣ') return specialNames.en.hangulLetterI;
    return item.name;
  }

  const specialKey = specialNameKeyByChar[item.char as keyof typeof specialNameKeyByChar];
  if (specialKey) return specialNames[locale][specialKey];

  const grammar = nameGrammar[locale];
  const script = localizeScript(item.script, locale);
  const letterScript = localizeLetterScript(item.script, locale);

  if (cp >= 0x41 && cp <= 0x5A) return grammar.capitalLetter(letterScript, item.char);
  if (cp >= 0x61 && cp <= 0x7A) return grammar.smallLetter(letterScript, item.char);
  if (cp >= 0x30 && cp <= 0x39) return grammar.digit(item.char);
  if (cp >= 0xFF21 && cp <= 0xFF3A) return grammar.fullwidthCapitalLetter(String.fromCodePoint(cp - 0xFF21 + 0x41));
  if (cp >= 0xFF41 && cp <= 0xFF5A) return grammar.fullwidthSmallLetter(String.fromCodePoint(cp - 0xFF41 + 0x41));
  if (cp >= 0xFF10 && cp <= 0xFF19) return grammar.fullwidthDigit(String(cp - 0xFF10));

  if (isKnownCharacter(item.char)) {
    if (/^\p{Lu}$/u.test(item.char)) return grammar.capitalLetter(letterScript, item.char);
    if (/^\p{Ll}$/u.test(item.char)) return grammar.smallLetter(letterScript, item.char);
    return grammar.knownCharacter(script, item.char);
  }

  const englishName = unicodeNames[item.char];
  if (englishName) return englishName;
  if (item.name) return item.name;
  return grammar.generalCharacter(script, item.codePoint);
}
