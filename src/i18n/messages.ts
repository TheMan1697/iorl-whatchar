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
  looksLike: string;
  supports: string;
  footerPrivacy: string;
  seoTitle: string;
  seoBody: string;
  seoCards: Array<{ title: string; body: string }>;
};

export const messages: Record<Locale, Messages> = {
  en: {
    lang: 'en',
    title: 'Iorl - WhatChar | I vs l, O vs 0 Unicode Character Checker',
    description: 'Paste text to tell I vs l vs 1, O vs 0, and identify confusing Unicode lookalikes, homoglyphs, mixed scripts, fullwidth forms, dash variants, and invisible spaces.',
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
    looksLike: 'looks like',
    supports: 'Supports Greek, Cyrillic, Hangul, Japanese kana, CJK characters, fullwidth forms, punctuation variants, invisible spaces, and more.',
    footerPrivacy: 'All analysis runs in your browser.',
    seoTitle: 'I vs l, I vs 1, O vs 0, homoglyphs, and hidden spaces',
    seoBody: 'Iorl - WhatChar is a Unicode character checker for common text confusion: I vs l, I vs 1, l vs 1, O vs 0, Latin letters versus Greek or Cyrillic homoglyphs, Hangul lookalikes, Japanese kana and CJK lookalikes, fullwidth forms, dash and minus variants, and zero-width spaces. Use it to check if a character is uppercase I, lowercase l, digit 1, Latin O, digit 0, or a hidden zero-width space. Paste text to see each character, its Unicode code point, script, name, and possible lookalikes without sending the text to a server.',
    seoCards: [
      { title: 'I vs l vs 1 checker', body: 'Tell uppercase I, lowercase l, digit 1, Hangul ㅣ, vertical bars, Roman numerals, and fullwidth forms apart.' },
      { title: 'O vs 0 checker', body: 'Compare Latin O, digit zero, Greek omicron, Cyrillic O, Hangul ㅇ, circles, and fullwidth round characters.' },
      { title: 'Greek and Cyrillic homoglyphs', body: 'Find letters from other scripts that can look like Latin text, including Α, А, Ρ, Р, Χ, Х, Υ, and У.' },
      { title: 'Hangul, Japanese kana, and CJK lookalikes', body: 'Check similar shapes such as ㅣ, ㅇ, ㅡ, ロ, 口, カ, 力, ニ, 二, シ, ツ, ソ, and ン.' },
      { title: 'Dash and minus variants', body: 'Distinguish hyphen-minus, hyphen, non-breaking hyphen, en dash, em dash, and the mathematical minus sign.' },
      { title: 'Zero-width and invisible spaces', body: 'Reveal zero-width spaces, no-break spaces, word joiners, hidden separators, and other invisible characters.' }
    ]
  },
  ko: {
    lang: 'ko',
    title: 'Iorl - WhatChar | I l 1 구분, O 0 구분 유니코드 문자 판독기',
    description: 'I인지 l인지, 1인지, O인지 0인지 헷갈리는 문자를 붙여넣기만으로 확인하세요. 유니코드 유사 문자, 호모글리프, 한글·일본어·한자 형태, 대시 기호, 숨은 공백까지 찾습니다.',
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
    looksLike: '비슷하게 보임',
    supports: '그리스어, 키릴 문자, 한글, 일본어 가나, 한자, 전각문자, 기호 변형, 숨은 공백 등을 지원합니다.',
    footerPrivacy: '모든 분석은 브라우저 안에서만 실행됩니다.',
    seoTitle: 'I l 1 구분, O 0 구분, 유니코드 유사 문자와 숨은 공백 확인',
    seoBody: 'Iorl - WhatChar는 i l 구분, i랑 l 차이, 대문자 I 소문자 l 구별, i l 1 구분, O 0 구분, 영어 O 숫자 0 차이, 제로폭 공백 확인이 필요할 때 사용할 수 있는 유니코드 문자 판독기입니다. 그리스 문자와 키릴 문자 호모글리프, 한글 ㅇ과 ㅣ, 일본어 가나와 한자 계열 유사 형태, 전각문자, 하이픈과 마이너스 기호, 보이지 않는 공백까지 한 번에 확인합니다.',
    seoCards: [
      { title: 'I / l / 1 / ㅣ / | 구분', body: 'i l 구분, i랑 l 차이, 대문자 I 소문자 l 구별, 숫자 1과 한글 ㅣ, 세로선을 확인합니다.' },
      { title: 'O / 0 / Ο / О / ㅇ 구분', body: 'O 0 구분, 영어 O 숫자 0 차이, 그리스 오미크론, 키릴 O, 한글 ㅇ과 원형 문자를 비교합니다.' },
      { title: '그리스 / 키릴 호모글리프', body: 'Α, А, Ρ, Р, Χ, Х, Υ, У처럼 라틴 문자와 비슷하게 보이는 다른 문자권 글자를 찾습니다.' },
      { title: '한글 / 일본어 / 한자 유사 형태', body: 'ㅣ, ㅇ, ㅡ, ロ, 口, カ, 力, ニ, 二, シ, ツ, ソ, ン처럼 비슷한 형태를 확인합니다.' },
      { title: '하이픈 / 대시 / 마이너스 구분', body: '하이픈, 줄바꿈 없는 하이픈, 엔대시, 엠대시, 수학 마이너스처럼 비슷하지만 다른 기호를 구분합니다.' },
      { title: '제로폭 공백 / 숨은 공백 확인', body: '제로폭 공백, 줄바꿈 없는 공백, 단어 결합자, 숨은 줄 구분 문자와 보이지 않는 문자를 보여줍니다.' }
    ]
  },
  ja: {
    lang: 'ja',
    title: 'Iorl - WhatChar | Iとl、Oと0、紛らわしいUnicode文字チェッカー',
    description: 'I、l、1、O、0の見分け方を確認し、Unicodeの類似文字、ホモグリフ、全角文字、ダッシュの違い、ゼロ幅スペースなどを検出します。',
    hero: 'I, l, 1, O, 0 をすぐ確認。',
    subtitle: 'テキストを貼り付けて、紛らわしいUnicode文字を確認します。',
    textareaLabel: '解析するテキストを貼り付け',
    placeholder: '紛らわしいテキストを貼り付けてください...',
    analyze: '解析する',
    result: '結果',
    details: '詳細',
    noConfusing: '紛らわしい文字は見つかりませんでした。',
    cleanDetail: '既知の類似文字や不可視文字は検出されませんでした。',
    confusingFound: (count) => `${count} 個の紛らわしい文字が見つかりました。`,
    mixedScripts: '文字体系の混在',
    examplesLabel: '例',
    looksLike: '似ている文字',
    supports: 'ギリシャ文字、キリル文字、ハングル、日本語かな、CJK文字、全角文字、記号の違い、不可視スペースなどに対応。',
    footerPrivacy: '解析はすべてブラウザ内で実行されます。',
    seoTitle: 'Iとl、Iと1、Oと0、類似文字とゼロ幅スペースを確認',
    seoBody: 'Iorl - WhatCharは、Iとlの見分け方、I l 1の判別、Oと0の違い、Unicodeの類似文字、ホモグリフ、混在した文字体系、全角文字、ダッシュとマイナスの違い、不可視スペースを確認できる文字チェッカーです。小文字l、大文字I、数字1、ラテンO、数字0、ギリシャのオミクロン、キリル文字O、ハングルㅇ、ハングルㅣ、ゼロ幅スペースを貼り付けるだけで調べられます。',
    seoCards: [
      { title: 'I / l / 1 / ㅣ / | の判別', body: 'Iとlの見分け方、Iと1の違い、小文字l、大文字I、数字1、ハングルㅣ、縦線を確認します。' },
      { title: 'O / 0 / Ο / О / ㅇ の判別', body: 'Oと0の違い、ラテンO、数字0、ギリシャのオミクロン、キリルO、ハングルㅇを比較します。' },
      { title: 'ギリシャ / キリルのホモグリフ', body: 'Α、А、Ρ、Р、Χ、Х、Υ、У のようにラテン文字に見える別の文字体系の文字を見つけます。' },
      { title: 'ハングル / 日本語かな / CJK形', body: 'ㅣ、ㅇ、ㅡ、ロ、口、カ、力、ニ、二、シ、ツ、ソ、ン のような似た形を確認します。' },
      { title: 'ハイフン / ダッシュ / マイナス', body: 'ハイフン、ノーブレークハイフン、enダッシュ、emダッシュ、数学用マイナス記号を区別します。' },
      { title: 'ゼロ幅スペース / 不可視文字', body: 'ゼロ幅スペース、ノーブレークスペース、ワードジョイナー、隠れた区切り文字などを表示します。' }
    ]
  },
  zh: {
    lang: 'zh-Hans',
    title: 'Iorl - WhatChar | I 和 l、O 和 0、Unicode 相似字符检测器',
    description: '粘贴文本即可区分 I 和 l、I 和 1、O 和 0，并检测 Unicode 相似字符、同形异义字符、全角字符、连字符变体和不可见空格。',
    hero: '立即确认 I、l、1、O、0。',
    subtitle: '粘贴文本，识别容易混淆的 Unicode 字符。',
    textareaLabel: '粘贴要分析的文本',
    placeholder: '在这里粘贴可疑文本...',
    analyze: '分析',
    result: '结果',
    details: '详情',
    noConfusing: '未发现易混淆字符。',
    cleanDetail: '未检测到已知相似字符或不可见字符。',
    confusingFound: (count) => `发现 ${count} 个易混淆字符。`,
    mixedScripts: '混合文字系统',
    examplesLabel: '示例',
    looksLike: '看起来像',
    supports: '支持希腊字母、西里尔字母、韩文、日文假名、CJK 字符、全角字符、标点变体、不可见空格等。',
    footerPrivacy: '所有分析都在你的浏览器中完成。',
    seoTitle: '区分 I 和 l、I 和 1、O 和 0，检测相似字符和不可见空格',
    seoBody: 'Iorl - WhatChar 是一个 Unicode 字符检测器，可用于 I 和 l 区分、大写 I 小写 l 区别、I 和 1 区分、O 和 0 区分、英文 O 数字 0 区别、零宽空格检测、同形异义字符和混合文字系统检查。它可以识别希腊 Omicron、西里尔 O、韩文 ㅇ、韩文 ㅣ、日文假名、CJK 相似形、全角字符、连字符和数学减号变体以及其他不可见字符。',
    seoCards: [
      { title: 'I / l / 1 / ㅣ / | 区分', body: '区分大写 I、小写 l、数字 1、韩文 ㅣ、竖线、罗马数字和全角形式。' },
      { title: 'O / 0 / Ο / О / ㅇ 区分', body: '比较拉丁 O、数字 0、希腊 Omicron、西里尔 O、韩文 ㅇ、圆形字符和全角形式。' },
      { title: '希腊 / 西里尔同形字符', body: '找出 Α、А、Ρ、Р、Χ、Х、Υ、У 等看起来像拉丁字母的其他文字系统字符。' },
      { title: '韩文 / 日文假名 / CJK 相似形', body: '检查 ㅣ、ㅇ、ㅡ、ロ、口、カ、力、ニ、二、シ、ツ、ソ、ン 等相似形状。' },
      { title: '连字符 / 破折号 / 减号', body: '区分普通连字符、不换行连字符、短破折号、长破折号和数学减号。' },
      { title: '零宽空格 / 不可见字符', body: '显示零宽空格、不换行空格、单词连接符、隐藏分隔符和其他不可见字符。' }
    ]
  },
  es: {
    lang: 'es',
    title: 'Iorl - WhatChar | I vs l, O vs 0 y detector de Unicode confuso',
    description: 'Pega texto para distinguir I vs l vs 1, O vs 0 y detectar caracteres Unicode parecidos, homógrafos, escrituras mezcladas, guiones, ancho completo y espacios invisibles.',
    hero: 'Identifica I, l, 1, O y 0 al instante.',
    subtitle: 'Pega texto para identificar caracteres Unicode confusos.',
    textareaLabel: 'Pega el texto para analizar',
    placeholder: 'Pega aquí texto sospechoso...',
    analyze: 'Analizar',
    result: 'Resultado',
    details: 'Detalles',
    noConfusing: 'No se encontraron caracteres confusos.',
    cleanDetail: 'No se detectaron caracteres parecidos o invisibles conocidos.',
    confusingFound: (count) => `Se encontraron ${count} caracteres confusos.`,
    mixedScripts: 'Sistemas de escritura mezclados',
    examplesLabel: 'Ejemplos',
    looksLike: 'parece',
    supports: 'Compatible con griego, cirílico, hangul, kana japonés, CJK, caracteres de ancho completo, variantes de puntuación, espacios invisibles y más.',
    footerPrivacy: 'Todo el análisis se ejecuta en tu navegador.',
    seoTitle: 'I vs l, I vs 1, O vs 0, homógrafos y espacios invisibles',
    seoBody: 'Iorl - WhatChar es un detector de caracteres Unicode para distinguir I vs l, I vs 1, l vs 1, O vs 0, letras latinas frente a homógrafos griegos o cirílicos, formas parecidas en hangul, kana japonés y CJK, caracteres de ancho completo, variantes de guion y signo menos, y espacios de ancho cero. Pega texto para ver el carácter, su código Unicode, sistema de escritura, nombre y posibles parecidos directamente en el navegador.',
    seoCards: [
      { title: 'I vs l vs 1', body: 'Distingue I mayúscula, l minúscula, número 1, hangul ㅣ, barras verticales, números romanos y formas de ancho completo.' },
      { title: 'O vs 0', body: 'Compara O latina, cero, ómicron griega, O cirílica, hangul ㅇ, círculos y formas redondas de ancho completo.' },
      { title: 'Homógrafos griegos y cirílicos', body: 'Detecta letras de otros sistemas que parecen texto latino, como Α, А, Ρ, Р, Χ, Х, Υ y У.' },
      { title: 'Hangul, kana japonés y CJK', body: 'Comprueba formas parecidas como ㅣ, ㅇ, ㅡ, ロ, 口, カ, 力, ニ, 二, シ, ツ, ソ y ン.' },
      { title: 'Guiones y signos menos', body: 'Distingue el guion normal, el guion inseparable, el guion corto, el guion largo y el signo menos matemático.' },
      { title: 'Espacios invisibles y de ancho cero', body: 'Revela espacios de ancho cero, espacios inseparables, word joiners, separadores ocultos y otros caracteres invisibles.' }
    ]
  },
  fr: {
    lang: 'fr',
    title: 'Iorl - WhatChar | I vs l, O vs 0 et détecteur Unicode confus',
    description: 'Collez du texte pour distinguer I vs l vs 1, O vs 0 et détecter les caractères Unicode similaires, homoglyphes, écritures mélangées, tirets, pleine chasse et espaces invisibles.',
    hero: 'Identifiez I, l, 1, O et 0 instantanément.',
    subtitle: 'Collez du texte pour identifier les caractères Unicode confus.',
    textareaLabel: 'Collez le texte à analyser',
    placeholder: 'Collez ici un texte suspect...',
    analyze: 'Analyser',
    result: 'Résultat',
    details: 'Détails',
    noConfusing: 'Aucun caractère confus trouvé.',
    cleanDetail: 'Aucun caractère similaire ou invisible connu n’a été détecté.',
    confusingFound: (count) => `${count} caractère${count > 1 ? 's' : ''} confus trouvé${count > 1 ? 's' : ''}.`,
    mixedScripts: 'Écritures mélangées',
    examplesLabel: 'Exemples',
    looksLike: 'ressemble à',
    supports: 'Prend en charge le grec, le cyrillique, le hangul, les kana japonais, les caractères CJK, les formes pleine chasse, les variantes de ponctuation, les espaces invisibles, etc.',
    footerPrivacy: 'Toute l’analyse s’exécute dans votre navigateur.',
    seoTitle: 'I vs l, I vs 1, O vs 0, homoglyphes et espaces invisibles',
    seoBody: 'Iorl - WhatChar est un détecteur de caractères Unicode pour distinguer I vs l, I vs 1, l vs 1, O vs 0, les lettres latines face aux homoglyphes grecs ou cyrilliques, les formes similaires en hangul, kana japonais et CJK, les formes pleine chasse, les variantes de tiret et de signe moins, ainsi que les espaces à largeur nulle. Collez du texte pour voir chaque caractère, son code Unicode, son écriture, son nom et ses ressemblances possibles dans le navigateur.',
    seoCards: [
      { title: 'I vs l vs 1', body: 'Distingue I majuscule, l minuscule, chiffre 1, hangul ㅣ, barres verticales, chiffres romains et formes pleine chasse.' },
      { title: 'O vs 0', body: 'Compare O latin, zéro, omicron grec, O cyrillique, hangul ㅇ, cercles et formes rondes pleine chasse.' },
      { title: 'Homoglyphes grecs et cyrilliques', body: 'Repère les lettres d’autres écritures qui ressemblent au texte latin, comme Α, А, Ρ, Р, Χ, Х, Υ et У.' },
      { title: 'Hangul, kana japonais et CJK', body: 'Vérifie les formes similaires comme ㅣ, ㅇ, ㅡ, ロ, 口, カ, 力, ニ, 二, シ, ツ, ソ et ン.' },
      { title: 'Tirets et signes moins', body: 'Distingue le trait d’union, le trait d’union insécable, le tiret demi-cadratin, le tiret cadratin et le signe moins mathématique.' },
      { title: 'Espaces invisibles et largeur nulle', body: 'Révèle les espaces à largeur nulle, insécables, word joiners, séparateurs cachés et autres caractères invisibles.' }
    ]
  },
  de: {
    lang: 'de',
    title: 'Iorl - WhatChar | I vs l, O vs 0 und Unicode-Lookalike-Prüfer',
    description: 'Füge Text ein, um I vs l vs 1, O vs 0 und verwirrende Unicode-Lookalikes, Homoglyphen, gemischte Schriften, Bindestriche, Vollbreitenformen und unsichtbare Leerzeichen zu erkennen.',
    hero: 'I, l, 1, O und 0 sofort erkennen.',
    subtitle: 'Füge Text ein, um verwirrende Unicode-Zeichen zu erkennen.',
    textareaLabel: 'Text zum Analysieren einfügen',
    placeholder: 'Verdächtigen Text hier einfügen...',
    analyze: 'Analysieren',
    result: 'Ergebnis',
    details: 'Details',
    noConfusing: 'Keine verwirrenden Zeichen gefunden.',
    cleanDetail: 'Keine bekannten Lookalike- oder unsichtbaren Zeichen erkannt.',
    confusingFound: (count) => `${count} verwirrende Zeichen gefunden.`,
    mixedScripts: 'Gemischte Schriftsysteme',
    examplesLabel: 'Beispiele',
    looksLike: 'sieht aus wie',
    supports: 'Unterstützt Griechisch, Kyrillisch, Hangul, japanische Kana, CJK-Zeichen, Vollbreitenformen, Satzzeichenvarianten, unsichtbare Leerzeichen und mehr.',
    footerPrivacy: 'Die gesamte Analyse läuft in deinem Browser.',
    seoTitle: 'I vs l, I vs 1, O vs 0, Homoglyphen und unsichtbare Leerzeichen',
    seoBody: 'Iorl - WhatChar ist ein Unicode-Zeichenprüfer für I vs l, I vs 1, l vs 1, O vs 0, lateinische Buchstaben gegenüber griechischen oder kyrillischen Homoglyphen, Hangul-Lookalikes, japanische Kana- und CJK-Formen, Vollbreitenzeichen, Bindestrich- und Minus-Varianten sowie Zero-Width-Spaces. Füge Text ein, um jedes Zeichen mit Unicode-Codepoint, Schriftsystem, Namen und möglichen Lookalikes direkt im Browser zu prüfen.',
    seoCards: [
      { title: 'I vs l vs 1', body: 'Unterscheidet großes I, kleines l, Ziffer 1, Hangul ㅣ, senkrechte Striche, römische Zahlen und Vollbreitenformen.' },
      { title: 'O vs 0', body: 'Vergleicht lateinisches O, Null, griechisches Omikron, kyrillisches O, Hangul ㅇ, Kreise und runde Vollbreitenformen.' },
      { title: 'Griechische und kyrillische Homoglyphen', body: 'Findet Buchstaben aus anderen Schriftsystemen, die wie lateinischer Text aussehen, etwa Α, А, Ρ, Р, Χ, Х, Υ und У.' },
      { title: 'Hangul, japanische Kana und CJK', body: 'Prüft ähnliche Formen wie ㅣ, ㅇ, ㅡ, ロ, 口, カ, 力, ニ, 二, シ, ツ, ソ und ン.' },
      { title: 'Bindestrich- und Minus-Varianten', body: 'Unterscheidet Hyphen-minus, Bindestrich, geschützten Bindestrich, Gedankenstrich und mathematisches Minuszeichen.' },
      { title: 'Unsichtbare und Zero-Width-Leerzeichen', body: 'Zeigt Zero-Width-Spaces, geschützte Leerzeichen, Word Joiner, versteckte Trenner und andere unsichtbare Zeichen.' }
    ]
  }
};
