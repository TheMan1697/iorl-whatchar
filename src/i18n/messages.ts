import type { Locale } from './config';

export type Messages = {
  lang: string;
  title: string;
  description: string;
  hero: string;
  subtitle: string;
  textareaLabel: string;
  placeholder: string;
  analyze: string;
  result: string;
  details: string;
  noConfusing: string;
  cleanDetail: string;
  confusingFound: (count: number) => string;
  mixedScripts: string;
  examplesLabel: string;
  looksLike: (characters: string[]) => string;
  zeroWidthSpace: string;
  supports: string;
  footerPrivacy: string;
  seoTitle: string;
  seoBody: string;
  seoCards: Array<{ title: string; body: string }>;

  quickRefTitle: string;
  quickRefNote: string;
  quickRefItemsA: Array<{ char: string; codePoint: string; name: string }>;
  quickRefItemsB: Array<{ char: string; codePoint: string; name: string }>;
  useCasesTitle: string;
  useCases: Array<{ title: string; body: string }>;
  faqTitle: string;
  faqs: Array<{ q: string; a: string }>;
  privacyNote: string;
};

export const messages: Record<Locale, Messages> = {
  en: {
    lang: 'en',
    title: 'I or l, O or 0 & Unicode Character Checker | WhatChar',
    description: 'Paste text to identify I, l, 1, O, 0, hidden Unicode characters and lookalikes. See each character’s exact code point; analysis stays in your browser.',
    hero: 'I, l, 1, O, 0 — find out what they are.',
    subtitle: 'Paste text to identify confusing Unicode characters.',
    textareaLabel: 'Paste text to analyze',
    placeholder: 'Paste confusing text here...',
    analyze: 'Analyze',
    result: 'Result',
    details: 'Details',
    noConfusing: 'No confusing characters found.',
    cleanDetail: 'Clean text. No known lookalike or invisible characters detected.',
    confusingFound: (count) => `${count} confusing character${count === 1 ? '' : 's'} found.`,
    mixedScripts: 'Mixed scripts',
    examplesLabel: 'Examples',
    looksLike: (characters) => `Looks like ${characters.join(', ')}`,
    zeroWidthSpace: 'zero-width space',
    supports: 'Supports Greek, Cyrillic, Hangul, Japanese kana, CJK characters, fullwidth forms, punctuation variants, invisible spaces, and more.',
    footerPrivacy: 'All analysis runs in your browser.',
    seoTitle: 'I vs l, I vs 1, O vs 0, homoglyphs, and hidden spaces',
    seoBody: 'WhatChar is a Unicode character checker for common text confusion: I or l, I vs 1, l vs 1, O or 0, Latin letters versus Greek or Cyrillic homoglyphs, Hangul lookalikes, Japanese kana and CJK lookalikes, fullwidth forms, dash and minus variants, and zero-width spaces. Use it to check if a character is uppercase I, lowercase l, digit 1, Latin O, digit 0, or a hidden zero-width space without sending text to a server.',
    seoCards: [
      { title: 'I or l checker', body: 'Tell uppercase I, lowercase l, digit 1, Hangul ㅣ, vertical bars, Roman numerals, and fullwidth forms apart.' },
      { title: 'O or 0 checker', body: 'Compare Latin O, digit zero, Greek omicron, Cyrillic O, Hangul ㅇ, circles, and fullwidth round characters.' },
      { title: 'Greek and Cyrillic homoglyphs', body: 'Find letters from other scripts that can look like Latin text, including Α, А, Ρ, Р, Χ, Х, Υ, and У.' },
      { title: 'Hangul, Japanese kana, and CJK lookalikes', body: 'Check similar shapes such as ㅣ, ㅇ, ㅡ, ロ, 口, カ, 力, ニ, 二, シ, ツ, ソ, and ン.' },
      { title: 'Dash and minus variants', body: 'Distinguish hyphen-minus, hyphen, non-breaking hyphen, en dash, em dash, and the mathematical minus sign.' },
      { title: 'Zero-width and invisible spaces', body: 'Reveal zero-width spaces, no-break spaces, word joiners, hidden separators, and other invisible characters.' }
    ],
    quickRefTitle: 'Quick character reference',
    quickRefNote: 'Visually identical characters often have completely distinct Unicode code points. Verifying the code point prevents subtle input errors.',
    quickRefItemsA: [
      { char: 'I', codePoint: 'U+0049', name: 'LATIN CAPITAL LETTER I' },
      { char: 'l', codePoint: 'U+006C', name: 'LATIN SMALL LETTER L' },
      { char: '1', codePoint: 'U+0031', name: 'DIGIT ONE' },
      { char: '|', codePoint: 'U+007C', name: 'VERTICAL LINE' },
      { char: 'ㅣ', codePoint: 'U+3163', name: 'HANGUL LETTER I' }
    ],
    quickRefItemsB: [
      { char: 'O', codePoint: 'U+004F', name: 'LATIN CAPITAL LETTER O' },
      { char: '0', codePoint: 'U+0030', name: 'DIGIT ZERO' },
      { char: 'Ο', codePoint: 'U+039F', name: 'GREEK CAPITAL LETTER OMICRON' },
      { char: 'О', codePoint: 'U+041E', name: 'CYRILLIC CAPITAL LETTER O' },
      { char: 'ㅇ', codePoint: 'U+3147', name: 'HANGUL LETTER IEUNG' }
    ],
    useCasesTitle: 'Common use cases',
    useCases: [
      { title: 'Usernames & Handles', body: 'Detect lookalike characters used in suspicious accounts or spoofed identifiers.' },
      { title: 'Serial Keys & Coupons', body: 'Verify ambiguous I, l, 1, O, 0 characters when redeeming license codes.' },
      { title: 'OCR & Copied Text', body: 'Confirm exact characters extracted from scanned documents, PDFs, or images.' },
      { title: 'Code Snippets & Hidden Spaces', body: 'Identify zero-width spaces or foreign homoglyphs causing syntax errors in code.' }
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'Why do I, l, 1 or O, 0 look identical?', a: 'Sans-serif fonts and screen renderers strip stroke serifs and distinction marks. Checking exact Unicode code points reveals their true identities.' },
      { q: 'Is pasted text sent to a server?', a: 'No. All text analysis runs locally inside your browser javascript engine. Your input is never sent to an external server.' },
      { q: 'Can this detect invisible characters?', a: 'Yes. It identifies zero-width spaces (ZWSP), non-breaking spaces (NBSP), word joiners, and other hidden Unicode characters.' }
    ],
    privacyNote: 'Your text is analyzed locally in your browser.'
  },
  ko: {
    lang: 'ko',
    title: 'I·l·1, O·0 구분 및 유니코드 문자 판독기 | WhatChar',
    description: '텍스트를 붙여넣으면 I·l·1, O·0, 보이지 않는 문자와 유사 유니코드를 구분하고 각 문자의 정확한 코드 포인트를 표시합니다. 분석은 브라우저에서 처리됩니다.',
    hero: 'I, l, 1, O, 0 무엇인지 바로 확인하세요.',
    subtitle: '문자를 붙여넣으면 헷갈리는 유니코드 문자를 찾아드립니다.',
    textareaLabel: '분석할 텍스트 붙여넣기',
    placeholder: '헷갈리는 문자를 붙여넣으세요...',
    analyze: '분석하기',
    result: '결과',
    details: '상세',
    noConfusing: '헷갈리는 문자를 찾지 못했습니다.',
    cleanDetail: '알려진 유사 문자나 숨은 문자가 감지되지 않았습니다.',
    confusingFound: (count) => `헷갈릴 수 있는 문자 ${count}개를 찾았습니다.`,
    mixedScripts: '문자권 섞임',
    examplesLabel: '예시',
    looksLike: (characters) => `${characters.join(', ')}와 유사`,
    zeroWidthSpace: '보이지 않는 공백',
    supports: '그리스어, 키릴 문자, 한글, 일본어 가나, 한자, 전각문자, 기호 변형, 숨은 공백 등을 지원합니다.',
    footerPrivacy: '모든 분석은 브라우저 안에서만 실행됩니다.',
    seoTitle: 'I l 1 구분, O 0 구분, 유니코드 유사 문자와 숨은 공백 확인',
    seoBody: 'WhatChar는 i l 구분, i랑 l 차이, 대문자 I 소문자 l 구별, i l 1 구분, O 0 구분, 영어 O 숫자 0 차이, 제로폭 공백 확인이 필요할 때 사용할 수 있는 유니코드 문자 판독기입니다. 그리스 문자와 키릴 문자 호모글리프, 한글 ㅇ과 ㅣ, 일본어 가나와 한자 계열 유사 형태, 전각문자, 하이픈과 마이너스 기호, 보이지 않는 공백까지 한 번에 확인합니다.',
    seoCards: [
      { title: 'I / l / 1 / ㅣ / | 구분', body: 'i l 구분, i랑 l 차이, 대문자 I 소문자 l 구별, 숫자 1과 한글 ㅣ, 세로선을 확인합니다.' },
      { title: 'O / 0 / Ο / О / ㅇ 구분', body: 'O 0 구분, 영어 O 숫자 0 차이, 그리스 오미크론, 키릴 O, 한글 ㅇ과 원형 문자를 비교합니다.' },
      { title: '그리스 / 키릴 호모글리프', body: 'Α, А, Ρ, Р, Χ, Х, Υ, У처럼 라틴 문자와 비슷하게 보이는 다른 문자권 글자를 찾습니다.' },
      { title: '한글 / 일본어 / 한자 유사 형태', body: 'ㅣ, ㅇ, ㅡ, ロ, 口, カ, 力, ニ, 二, シ, ツ, ソ, ン처럼 비슷한 형태를 확인합니다.' },
      { title: '하이픈 / 대시 / 마이너스 구분', body: '하이픈, 줄바꿈 없는 하이픈, 엔대시, 엠대시, 수학 마이너스처럼 비슷하지만 다른 기호를 구분합니다.' },
      { title: '제로폭 공백 / 숨은 공백 확인', body: '제로폭 공백, 줄바꿈 없는 공백, 단어 결합자, 숨은 줄 구분 문자와 보이지 않는 문자를 보여줍니다.' }
    ],
    quickRefTitle: '헷갈리는 문자 빠른 비교',
    quickRefNote: '화면 모양이 같거나 비슷해 보여도 유니코드 코드 포인트(Code point)가 다르면 완전히 다른 문자입니다. 정확한 코드 포인트를 확인하세요.',
    quickRefItemsA: [
      { char: 'I', codePoint: 'U+0049', name: 'LATIN CAPITAL LETTER I' },
      { char: 'l', codePoint: 'U+006C', name: 'LATIN SMALL LETTER L' },
      { char: '1', codePoint: 'U+0031', name: 'DIGIT ONE' },
      { char: '|', codePoint: 'U+007C', name: 'VERTICAL LINE' },
      { char: 'ㅣ', codePoint: 'U+3163', name: 'HANGUL LETTER I' }
    ],
    quickRefItemsB: [
      { char: 'O', codePoint: 'U+004F', name: 'LATIN CAPITAL LETTER O' },
      { char: '0', codePoint: 'U+0030', name: 'DIGIT ZERO' },
      { char: 'Ο', codePoint: 'U+039F', name: 'GREEK CAPITAL LETTER OMICRON' },
      { char: 'О', codePoint: 'U+041E', name: 'CYRILLIC CAPITAL LETTER O' },
      { char: 'ㅇ', codePoint: 'U+3147', name: 'HANGUL LETTER IEUNG' }
    ],
    useCasesTitle: '주요 활용 사례',
    useCases: [
      { title: '아이디 및 닉네임 검사', body: '사칭이나 사기 목적의 사칭 닉네임, 유사 유니코드가 섞인 계정명을 확인합니다.' },
      { title: '시리얼 번호 및 라이선스 키', body: '쿠폰 코드나 비밀키 입력 시 I, l, 1, O, 0의 오입력을 예방합니다.' },
      { title: 'OCR 및 복사 텍스트 검증', body: '이미지, PDF, 웹페이지에서 복사한 텍스트의 실제 글자를 확인합니다.' },
      { title: '코드 및 숨은 공백 감지', body: '붙여넣은 소스코드에서 구문 에러를 일으키는 제로폭 공백(ZWSP)을 찾습니다.' }
    ],
    faqTitle: '자주 묻는 질문 (FAQ)',
    faqs: [
      { q: '왜 I, l, 1 또는 O, 0이 같은 문자처럼 보이나요?', a: '산세리프(Sans-serif) 폰트와 화면 렌더링 특성상 돌기와 장식이 생략되어 시각적 구분이 어렵습니다. 유니코드 코드 포인트를 확인해야 정확한 구분이 가능합니다.' },
      { q: '입력한 텍스트가 서버로 전송되나요?', a: '아니오. 모든 분석은 사용자 브라우저 내부에서 자바스크립트로 실행되며, 입력한 텍스트가 외부 서버로 전송되지 않습니다.' },
      { q: '보이지 않는 문자도 찾을 수 있나요?', a: '네. 제로폭 공백(ZWSP), 줄바꿈 없는 공백(NBSP), 단어 결합자(WJ) 등 보이지 않는 특수 문자를 정확히 감지해 표시합니다.' }
    ],
    privacyNote: '입력한 텍스트는 브라우저 내에서만 분석됩니다.'
  },
  ja: {
    lang: 'ja',
    title: 'I・l・1、O・0を判別するUnicode文字チェッカー | WhatChar',
    description: '文字列を貼り付けると、I・l・1、O・0、不可視文字や似たUnicode文字を判別し、各文字の正確なコードポイントを表示します。解析はブラウザ内で行われます。',
    hero: 'I, l, 1, O, 0 をすぐ確認。',
    subtitle: 'テキストを貼り付けて、紛らわしいUnicode文字を確認します。',
    textareaLabel: '解析するテキストを貼り付け',
    placeholder: '紛らわしいテキストを貼り付けてください...',
    analyze: '解析する',
    result: '結果',
    details: '詳細',
    noConfusing: '紛らわしい文字は見つかりませんでした。',
    cleanDetail: '問題のないテキストです。類似文字や不可視文字は検出されませんでした。',
    confusingFound: (count) => `紛らわしい文字が ${count} 個見つかりました。`,
    mixedScripts: '混在スクリプト',
    examplesLabel: '例',
    looksLike: (characters) => `${characters.join(', ')} に類似`,
    zeroWidthSpace: 'ゼロ幅スペース',
    supports: 'ギリシャ文字、キリル文字、ハングル、カタカナ、漢字、全角文字、記号バリエーション、不可視文字に対応しています。',
    footerPrivacy: 'すべての解析はブラウザ内でのみ実行されます。',
    seoTitle: 'I l 1 判別、O 0 判別、Unicode類似文字と不可視文字の確認',
    seoBody: 'WhatCharは、I l 1の判別、O 0の判別、Unicodeの類似文字（ホモグリフ）、全角文字、ダッシュ記号の違い、ゼロ幅スペースの検出を行うための文字チェッカーです。',
    seoCards: [
      { title: 'I / l / 1 / ㅣ / | 判別', body: '大文字I、小文字l、数字1、ハングルㅣ、パイプ記号などを区別します。' },
      { title: 'O / 0 / Ο / О / ㅇ 判別', body: '英字O、数字0、ギリシャ文字オミクロン、キリル文字O、ハングルㅇを比較します。' },
      { title: 'ギリシャ・キリル文字ホモグリフ', body: 'Α, А, Ρ, Р, Χ, Х, Υ, Уなどラテン文字に似た他言語の文字を検出します。' },
      { title: 'ハングル・カナ・漢字の類似形', body: 'ㅣ, ㅇ, ㅡ, ロ, 口, カ, 力, ニ, 二, シ, ツ, ソ, ンなどの似た形状を確認します。' },
      { title: 'ダッシュ・ハイフン判別', body: 'ハイフン、エンダッシュ、エムダッシュ、マイナス記号の違いを識別します。' },
      { title: 'ゼロ幅スペース・不可視文字', body: 'ゼロ幅スペースや不可視区切り文字を可視化します。' }
    ],
    quickRefTitle: '紛らわしい文字の早見表',
    quickRefNote: '見た目が同じでも、Unicodeのコードポイントが異なれば別の文字です。正確なコードポイントを確認してください。',
    quickRefItemsA: [
      { char: 'I', codePoint: 'U+0049', name: 'LATIN CAPITAL LETTER I' },
      { char: 'l', codePoint: 'U+006C', name: 'LATIN SMALL LETTER L' },
      { char: '1', codePoint: 'U+0031', name: 'DIGIT ONE' },
      { char: '|', codePoint: 'U+007C', name: 'VERTICAL LINE' },
      { char: 'ㅣ', codePoint: 'U+3163', name: 'HANGUL LETTER I' }
    ],
    quickRefItemsB: [
      { char: 'O', codePoint: 'U+004F', name: 'LATIN CAPITAL LETTER O' },
      { char: '0', codePoint: 'U+0030', name: 'DIGIT ZERO' },
      { char: 'Ο', codePoint: 'U+039F', name: 'GREEK CAPITAL LETTER OMICRON' },
      { char: 'О', codePoint: 'U+041E', name: 'CYRILLIC CAPITAL LETTER O' },
      { char: 'ㅇ', codePoint: 'U+3147', name: 'HANGUL LETTER IEUNG' }
    ],
    useCasesTitle: '主な活用事例',
    useCases: [
      { title: 'ユーザー名とアカウント検証', body: '似たUnicode文字を悪用した偽アカウントや不正IDを検出します。' },
      { title: 'シリアルキーとライセンスコード', body: 'クーポンやパスワード入力時のI, l, 1, O, 0の入力ミスを防ぎます。' },
      { title: 'OCRとコピーテキストの確認', body: '画像やPDFから読み取ったテキストの正確な文字種を判別します。' },
      { title: 'コードと不可視文字の検出', body: 'プログラムコードに混入したゼロ幅スペースによるエラーを特定します。' }
    ],
    faqTitle: 'よくある質問 (FAQ)',
    faqs: [
      { q: 'なぜI, l, 1やO, 0が同じ文字に見えるのですか？', a: 'サンセリフフォントでは装飾が省かれるためです。正確なUnicodeコードポイントで確認できます。' },
      { q: '入力したテキストはサーバーに送信されますか？', a: 'いいえ。すべての解析はブラウザ内でローカル処理され、外部サーバーへ送信されません。' },
      { q: '不可視文字も検出できますか？', a: 'はい。ゼロ幅スペース（ZWSP）やノーブレークスペースなどの隠れた文字を検出します。' }
    ],
    privacyNote: '入力したテキストはブラウザ内だけで解析されます。'
  },
  zh: {
    lang: 'zh',
    title: 'I、l、1 与 O、0 Unicode 字符检测器 | WhatChar',
    description: '粘贴文本即可区分 I、l、1、O、0、不可见字符和相似 Unicode 字符，并查看每个字符的准确代码点。分析在浏览器本地完成。',
    hero: '快速区分 I, l, 1, O, 0。',
    subtitle: '粘贴文本，识别易混淆的 Unicode 字符。',
    textareaLabel: '粘贴要分析的文本',
    placeholder: '在此粘贴易混淆的文本...',
    analyze: '分析',
    result: '结果',
    details: '详细信息',
    noConfusing: '未发现易混淆字符。',
    cleanDetail: '文本正常，未检测到已知相似字符或不可见字符。',
    confusingFound: (count) => `找到 ${count} 个易混淆字符。`,
    mixedScripts: '混合语系',
    examplesLabel: '示例',
    looksLike: (characters) => `类似于 ${characters.join(', ')}`,
    zeroWidthSpace: '零宽空格',
    supports: '支持希腊字母、西里尔字母、谚文、日文假名、汉字、全角字符、标点变体及不可见空格等。',
    footerPrivacy: '所有分析均在您的浏览器中完成。',
    seoTitle: 'I l 1 区分、O 0 区分、Unicode 相似字符与隐藏空格检测',
    seoBody: 'WhatChar 是一款用于检测文本混淆的 Unicode 字符分析工具，可精准区分大写 I、小写 l、数字 1、大写 O、数字 0 以及各类不可见字符。',
    seoCards: [
      { title: 'I / l / 1 / ㅣ / | 检测', body: '区分大写 I、小写 l、数字 1、谚文 ㅣ、竖线及全角形式。' },
      { title: 'O / 0 / Ο / О / ㅇ 检测', body: '对比拉丁字母 O、数字 0、希腊字母 Omicron、西里尔字母 O 及韩文 ㅇ。' },
      { title: '希腊与西里尔同形异义字', body: '查找与拉丁字母相似的其他语系字符，如 Α, А, Ρ, Р, Χ, Х, Υ, У。' },
      { title: '日韩与汉字相似字', body: '检测 ㅣ, ㅇ, ㅡ, ロ, 口, カ, 力, ニ, 二, シ, ツ, ソ, ン 等相似字形。' },
      { title: '破折号与减号变体', body: '区分连字符、不换行连字符、短破折号、长破折号及减号。' },
      { title: '零宽字符与不可见空格', body: '显示零宽空格、不换行空格、词语连接符等隐藏字符。' }
    ],
    quickRefTitle: '易混淆字符速查',
    quickRefNote: '看似相同的字符在 Unicode 中可能具有完全不同的代码点。核对代码点可避免输入错误与安全风险。',
    quickRefItemsA: [
      { char: 'I', codePoint: 'U+0049', name: 'LATIN CAPITAL LETTER I' },
      { char: 'l', codePoint: 'U+006C', name: 'LATIN SMALL LETTER L' },
      { char: '1', codePoint: 'U+0031', name: 'DIGIT ONE' },
      { char: '|', codePoint: 'U+007C', name: 'VERTICAL LINE' },
      { char: 'ㅣ', codePoint: 'U+3163', name: 'HANGUL LETTER I' }
    ],
    quickRefItemsB: [
      { char: 'O', codePoint: 'U+004F', name: 'LATIN CAPITAL LETTER O' },
      { char: '0', codePoint: 'U+0030', name: 'DIGIT ZERO' },
      { char: 'Ο', codePoint: 'U+039F', name: 'GREEK CAPITAL LETTER OMICRON' },
      { char: 'О', codePoint: 'U+041E', name: 'CYRILLIC CAPITAL LETTER O' },
      { char: 'ㅇ', codePoint: 'U+3147', name: 'HANGUL LETTER IEUNG' }
    ],
    useCasesTitle: '常见应用场景',
    useCases: [
      { title: '用户名与账号检测', body: '检查仿冒账号或相似字符混淆的标识符。' },
      { title: '序列号与兑换码校验', body: '输入密钥或优惠码时快速区分 I、l、1 与 O、0。' },
      { title: 'OCR 与复制文本核对', body: '确认从图片、PDF 或网页复制文本的真实字符。' },
      { title: '代码与不可见字符检测', body: '查找导致代码语法错误的零宽空格 (ZWSP)。' }
    ],
    faqTitle: '常见问题解答',
    faqs: [
      { q: '为什么 I、l、1 或 O、0 看起来一样？', a: '无衬线字体去掉了笔画特征。核对准确的 Unicode 代码点即可区分。' },
      { q: '输入的文本会被发送到服务器吗？', a: '不会。所有解析均在浏览器本地 JavaScript 引擎中完成，不上传服务器。' },
      { q: '能检测到不可见字符吗？', a: '可以。能精准识别零宽空格 (ZWSP)、不换行空格 (NBSP) 等隐藏字符。' }
    ],
    privacyNote: '您输入的文本仅在浏览器本地进行分析。'
  },
  es: {
    lang: 'es',
    title: 'Comprobador Unicode para I/l/1 y O/0 | WhatChar',
    description: 'Pega texto para distinguir I, l, 1, O, 0, caracteres invisibles y símbolos Unicode similares. Consulta el punto de código exacto de cada carácter directamente en tu navegador.',
    hero: 'I, l, 1, O, 0 — descubre qué son.',
    subtitle: 'Pega texto para identificar caracteres Unicode confusos.',
    textareaLabel: 'Pega texto para analizar',
    placeholder: 'Pega texto confuso aquí...',
    analyze: 'Analizar',
    result: 'Resultado',
    details: 'Detalles',
    noConfusing: 'No se encontraron caracteres confusos.',
    cleanDetail: 'Texto limpio. No se detectaron caracteres similares ni invisibles.',
    confusingFound: (count) => `Se encontraron ${count} carácter(es) confuso(s).`,
    mixedScripts: 'Sistemas de escritura mixtos',
    examplesLabel: 'Ejemplos',
    looksLike: (characters) => `Parece ${characters.join(', ')}`,
    zeroWidthSpace: 'espacio de ancho cero',
    supports: 'Compatible con griego, cirílico, hangul, kana japonés, CJK, formas de ancho completo y espacios invisibles.',
    footerPrivacy: 'Todo el análisis se ejecuta en tu navegador.',
    seoTitle: 'Comprobador de I vs l, O vs 0 y caracteres invisibles',
    seoBody: 'WhatChar es una herramienta de verificación para identificar caracteres confusos como I, l, 1, O, 0 y espacios de ancho cero.',
    seoCards: [
      { title: 'Comprobador de I vs l vs 1', body: 'Distingue I mayúscula, l minúscula, número 1 y barras verticales.' },
      { title: 'Comprobador de O vs 0', body: 'Compara la letra O, el cero, ómicron griega y O cirílica.' },
      { title: 'Homóglifos griegos y cirílicos', body: 'Encuentra letras de otros alfabetos que se parecen al texto latino.' },
      { title: 'Símbolos CJK y caracteres similares', body: 'Compara formas similares de kana, hangul y caracteres CJK.' },
      { title: 'Variantes de guiones y menos', body: 'Distingue guiones, guiones largos y el signo menos.' },
      { title: 'Espacios invisibles', body: 'Revela espacios de ancho cero y separadores ocultos.' }
    ],
    quickRefTitle: 'Referencia rápida de caracteres',
    quickRefNote: 'Los caracteres idénticos a la vista pueden tener puntos de código Unicode totalmente distintos.',
    quickRefItemsA: [
      { char: 'I', codePoint: 'U+0049', name: 'LATIN CAPITAL LETTER I' },
      { char: 'l', codePoint: 'U+006C', name: 'LATIN SMALL LETTER L' },
      { char: '1', codePoint: 'U+0031', name: 'DIGIT ONE' },
      { char: '|', codePoint: 'U+007C', name: 'VERTICAL LINE' },
      { char: 'ㅣ', codePoint: 'U+3163', name: 'HANGUL LETTER I' }
    ],
    quickRefItemsB: [
      { char: 'O', codePoint: 'U+004F', name: 'LATIN CAPITAL LETTER O' },
      { char: '0', codePoint: 'U+0030', name: 'DIGIT ZERO' },
      { char: 'Ο', codePoint: 'U+039F', name: 'GREEK CAPITAL LETTER OMICRON' },
      { char: 'О', codePoint: 'U+041E', name: 'CYRILLIC CAPITAL LETTER O' },
      { char: 'ㅇ', codePoint: 'U+3147', name: 'HANGUL LETTER IEUNG' }
    ],
    useCasesTitle: 'Casos de uso comunes',
    useCases: [
      { title: 'Nombres de usuario', body: 'Detecta caracteres confusos usados en cuentas falsas o suplantación.' },
      { title: 'Claves y licencias', body: 'Distingue I, l, 1, O y 0 al canjear códigos de licencia o cupones.' },
      { title: 'OCR y texto copiado', body: 'Verifica los caracteres exactos extraídos de imágenes o PDF.' },
      { title: 'Código y espacios ocultos', body: 'Encuentra espacios de ancho cero (ZWSP) que causan errores de sintaxis.' }
    ],
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      { q: '¿Por qué I, l, 1 u O, 0 se ven iguales?', a: 'Las fuentes sans-serif eliminan los remates tipográficos. Verificar el punto de código Unicode revela el carácter real.' },
      { q: '¿Se envía el texto a un servidor?', a: 'No. Todo el análisis se realiza localmente en tu navegador.' },
      { q: '¿Puede detectar caracteres invisibles?', a: 'Sí. Identifica espacios de ancho cero (ZWSP), espacios sin separación (NBSP) y otros caracteres ocultos.' }
    ],
    privacyNote: 'El texto que introduces se analiza únicamente en tu navegador.'
  },
  fr: {
    lang: 'fr',
    title: 'Vérificateur Unicode pour I/l/1 et O/0 | WhatChar',
    description: 'Collez du texte pour distinguer I, l, 1, O, 0, les caractères invisibles et les symboles Unicode similaires. Le point de code exact de chaque caractère est affiché dans votre navigateur.',
    hero: 'I, l, 1, O, 0 — découvrez ce qu’ils sont.',
    subtitle: 'Collez du texte pour identifier les caractères Unicode confus.',
    textareaLabel: 'Collez le texte à analyser',
    placeholder: 'Collez du texte confus ici...',
    analyze: 'Analyser',
    result: 'Résultat',
    details: 'Détails',
    noConfusing: 'Aucun caractère confus trouvé.',
    cleanDetail: 'Texte propre. Aucun caractère similaire ou invisible détecté.',
    confusingFound: (count) => `${count} caractère(s) confus trouvé(s).`,
    mixedScripts: 'Systèmes d’écriture mixtes',
    examplesLabel: 'Exemples',
    looksLike: (characters) => `Ressemble à ${characters.join(', ')}`,
    zeroWidthSpace: 'espace de largeur nulle',
    supports: 'Prend en charge le grec, le cyrillique, le hangul, les kanas japonais, le CJK et les espaces invisibles.',
    footerPrivacy: 'Toutes les analyses s’exécutent dans votre navigateur.',
    seoTitle: 'Vérificateur de I, l, 1, O, 0 et caractères masqués',
    seoBody: 'WhatChar est un outil permettant de vérifier et différencier les lettres et chiffres visuellement similaires.',
    seoCards: [
      { title: 'Vérificateur I vs l vs 1', body: 'Distinguez le I majuscule, le l minuscule, le chiffre 1 et les barres verticales.' },
      { title: 'Vérificateur O vs 0', body: 'Comparez la lettre O, le chiffre 0, l’omicron grec et le O cyrillique.' },
      { title: 'Homoglyphes grecs et cyrilliques', body: 'Trouvez les lettres d’autres alphabets ressemblant au texte latin.' },
      { title: 'Formes similaires CJK et kanas', body: 'Examinez les formes similaires parmi les caractères CJK et japonais.' },
      { title: 'Variantes de tirets et moins', body: 'Distinguez les tirets, tirets cadratins et signes moins.' },
      { title: 'Espaces invisibles', body: 'Révélez les espaces de largeur nulle et les séparateurs masqués.' }
    ],
    quickRefTitle: 'Référence rapide des caractères',
    quickRefNote: 'Des caractères visuellement identiques possèdent des points de code Unicode distincts.',
    quickRefItemsA: [
      { char: 'I', codePoint: 'U+0049', name: 'LATIN CAPITAL LETTER I' },
      { char: 'l', codePoint: 'U+006C', name: 'LATIN SMALL LETTER L' },
      { char: '1', codePoint: 'U+0031', name: 'DIGIT ONE' },
      { char: '|', codePoint: 'U+007C', name: 'VERTICAL LINE' },
      { char: 'ㅣ', codePoint: 'U+3163', name: 'HANGUL LETTER I' }
    ],
    quickRefItemsB: [
      { char: 'O', codePoint: 'U+004F', name: 'LATIN CAPITAL LETTER O' },
      { char: '0', codePoint: 'U+0030', name: 'DIGIT ZERO' },
      { char: 'Ο', codePoint: 'U+039F', name: 'GREEK CAPITAL LETTER OMICRON' },
      { char: 'О', codePoint: 'U+041E', name: 'CYRILLIC CAPITAL LETTER O' },
      { char: 'ㅇ', codePoint: 'U+3147', name: 'HANGUL LETTER IEUNG' }
    ],
    useCasesTitle: 'Cas d’utilisation fréquents',
    useCases: [
      { title: 'Noms d’utilisateur', body: 'Détectez les caractères similaires utilisés dans des identifiants suspects.' },
      { title: 'Clés de licence', body: 'Distinguez I, l, 1, O et 0 lors de la saisie de codes de licence.' },
      { title: 'OCR et texte copié', body: 'Vérifiez les caractères issus de scannages ou de fichiers PDF.' },
      { title: 'Code et espaces cachés', body: 'Identifiez les espaces de largeur nulle (ZWSP) provoquant des erreurs.' }
    ],
    faqTitle: 'Foire aux questions',
    faqs: [
      { q: 'Pourquoi I, l, 1 ou O, 0 se ressemblent-ils ?', a: 'Les polices sans emphase suppriment les détails typographiques. La vérification du point de code Unicode révèle la vraie nature du caractère.' },
      { q: 'Le texte est-il envoyé à un serveur ?', a: 'Non. Tout l’analyse s’exécute localement dans votre navigateur.' },
      { q: 'Peut-il détecter les caractères invisibles ?', a: 'Oui. Il détecte les espaces de largeur nulle (ZWSP), incassables (NBSP) et autres caractères masqués.' }
    ],
    privacyNote: 'Le texte saisi est analysé uniquement dans votre navigateur.'
  },
  de: {
    lang: 'de',
    title: 'Unicode-Zeichenprüfer für I/l/1 und O/0 | WhatChar',
    description: 'Text einfügen, um I, l, 1, O, 0, unsichtbare Zeichen und ähnliche Unicode-Zeichen zu unterscheiden. Der exakte Codepoint jedes Zeichens wird direkt im Browser angezeigt.',
    hero: 'I, l, 1, O, 0 — finden Sie heraus, was sie sind.',
    subtitle: 'Fügen Sie Text ein, um verwechselbare Unicode-Zeichen zu identifizieren.',
    textareaLabel: 'Text zum Analysieren einfügen',
    placeholder: 'Verwechselbaren Text hier einfügen...',
    analyze: 'Analysieren',
    result: 'Ergebnis',
    details: 'Details',
    noConfusing: 'Keine verwechselbaren Zeichen gefunden.',
    cleanDetail: 'Sauberer Text. Keine verwechselbaren oder unsichtbaren Zeichen erkannt.',
    confusingFound: (count) => `${count} verwechselbare(s) Zeichen gefunden.`,
    mixedScripts: 'Gemischte Schriften',
    examplesLabel: 'Beispiele',
    looksLike: (characters) => `Sieht aus wie ${characters.join(', ')}`,
    zeroWidthSpace: 'breitenloses Leerzeichen',
    supports: 'Unterstützt Griechisch, Kyrillisch, Hangul, Japanisch, CJK und unsichtbare Zeichen.',
    footerPrivacy: 'Die gesamte Analyse läuft in Ihrem Browser.',
    seoTitle: 'Zeichenprüfer für I vs l, O vs 0 und unsichtbare Zeichen',
    seoBody: 'WhatChar ist ein Unicode-Zeichenprüfer zur Unterscheidung von I, l, 1, O, 0 und breitenlosen Leerzeichen.',
    seoCards: [
      { title: 'I vs l vs 1 Prüfer', body: 'Unterscheiden Sie Großbuchstabe I, Kleinbuchstabe l, Zahl 1 und senkrechte Striche.' },
      { title: 'O vs 0 Prüfer', body: 'Vergleichen Sie Buchstabe O, Zahl 0, griechisches Omikron und kyrillisches O.' },
      { title: 'Griechische & kyrillische Homoglyphen', body: 'Finden Sie Zeichen anderer Schriften, die wie lateinischer Text aussehen.' },
      { title: 'CJK-Formen & ähnliche Zeichen', body: 'Prüfen Sie ähnliche Formen bei japanischen Kana und CJK-Zeichen.' },
      { title: 'Bindestrich- & Minus-Varianten', body: 'Unterscheiden Sie Bindestrich, Gedankenstrich und Minuszeichen.' },
      { title: 'Unsichtbare Leerzeichen', body: 'Decken Sie breitenlose Leerzeichen und verborgene Trennzeichen auf.' }
    ],
    quickRefTitle: 'Schnellvergleich ähnlicher Zeichen',
    quickRefNote: 'Optisch identische Zeichen besitzen oft unterschiedliche Unicode-Codepoints.',
    quickRefItemsA: [
      { char: 'I', codePoint: 'U+0049', name: 'LATIN CAPITAL LETTER I' },
      { char: 'l', codePoint: 'U+006C', name: 'LATIN SMALL LETTER L' },
      { char: '1', codePoint: 'U+0031', name: 'DIGIT ONE' },
      { char: '|', codePoint: 'U+007C', name: 'VERTICAL LINE' },
      { char: 'ㅣ', codePoint: 'U+3163', name: 'HANGUL LETTER I' }
    ],
    quickRefItemsB: [
      { char: 'O', codePoint: 'U+004F', name: 'LATIN CAPITAL LETTER O' },
      { char: '0', codePoint: 'U+0030', name: 'DIGIT ZERO' },
      { char: 'Ο', codePoint: 'U+039F', name: 'GREEK CAPITAL LETTER OMICRON' },
      { char: 'О', codePoint: 'U+041E', name: 'CYRILLIC CAPITAL LETTER O' },
      { char: 'ㅇ', codePoint: 'U+3147', name: 'HANGUL LETTER IEUNG' }
    ],
    useCasesTitle: 'Typische Anwendungsfälle',
    useCases: [
      { title: 'Benutzernamen & Identifikatoren', body: 'Erkennen Sie verwechselbare Zeichen in verdächtigen Konten.' },
      { title: 'Seriennummern & Lizenzschlüssel', body: 'Unterscheiden Sie I, l, 1, O und 0 beim Eingeben von Codes.' },
      { title: 'OCR & kopierter Text', body: 'Überprüfen Sie Zeichen aus gescannten Dokumenten oder PDFs.' },
      { title: 'Code & unsichtbare Zeichen', body: 'Finden Sie breitenlose Leerzeichen (ZWSP), die Fehler verursachen.' }
    ],
    faqTitle: 'Häufig gestellte Fragen (FAQ)',
    faqs: [
      { q: 'Warum sehen I, l, 1 oder O, 0 gleich aus?', a: 'Serifenlose Schriftarten lassen Unterscheidungsmerkmale weg. Der Unicode-Codepoint zeigt das echte Zeichen.' },
      { q: 'Wird der eingegebene Text an einen Server gesendet?', a: 'Nein. Die gesamte Analyse läuft lokal in Ihrem Browser.' },
      { q: 'Können unsichtbare Zeichen erkannt werden?', a: 'Ja. Es erkennt breitenlose Leerzeichen (ZWSP), geschützte Leerzeichen (NBSP) und andere versteckte Zeichen.' }
    ],
    privacyNote: 'Der eingegebene Text wird ausschließlich lokal in Ihrem Browser analysiert.'
  }
};
