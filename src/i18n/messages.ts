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
    title: 'Iorl - WhatChar | Confusing Unicode Character Checker',
    description: 'Paste text to identify confusing Unicode characters like I, l, 1, O, 0, Greek, Cyrillic, Hangul, fullwidth, and invisible spaces.',
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
    supports: 'Supports Greek, Cyrillic, Hangul, Japanese kana, CJK characters, fullwidth forms, invisible spaces, and more.',
    footerPrivacy: 'All analysis runs in your browser.',
    seoTitle: 'What does Iorl - WhatChar check?',
    seoBody: 'Iorl - WhatChar helps you spot lookalike characters, homoglyphs, mixed scripts, and invisible spaces. It is useful when you need to tell whether a character is lowercase l, uppercase I, digit one, Latin O, digit zero, Greek omicron, Cyrillic O, Hangul ieung, or a hidden zero-width character.',
    seoCards: [
      { title: 'I / l / 1 / |', body: 'Identify characters that look like vertical strokes.' },
      { title: 'O / 0 / Ο / О / ㅇ', body: 'Compare Latin, Greek, Cyrillic, Hangul, and digit zero.' },
      { title: 'Invisible spaces', body: 'Reveal zero-width spaces, no-break spaces, and hidden joiners.' }
    ]
  },
  ko: {
    lang: 'ko',
    title: 'Iorl - WhatChar | 헷갈리는 유니코드 문자 판독기',
    description: 'I인지 l인지, 1인지, O인지 0인지 헷갈리는 문자를 붙여넣기만으로 확인하세요. 그리스 문자, 키릴 문자, 한글, 전각문자, 숨은 공백까지 찾습니다.',
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
    supports: '그리스어, 키릴 문자, 한글, 일본어 가나, 한자, 전각문자, 숨은 공백 등을 지원합니다.',
    footerPrivacy: '모든 분석은 브라우저 안에서만 실행됩니다.',
    seoTitle: 'Iorl - WhatChar는 무엇을 확인하나요?',
    seoBody: 'Iorl - WhatChar는 서로 비슷하게 보이는 글자, 호모글리프, 섞인 문자권, 보이지 않는 공백 문자를 찾아주는 가벼운 문자 판독기입니다. 소문자 l, 대문자 I, 숫자 1, 영어 O, 숫자 0, 그리스 오미크론, 키릴 O, 한글 ㅇ, 제로폭 공백을 구분할 때 유용합니다.',
    seoCards: [
      { title: 'I / l / 1 / |', body: '세로획처럼 보이는 글자를 구분합니다.' },
      { title: 'O / 0 / Ο / О / ㅇ', body: '라틴, 그리스, 키릴, 한글, 숫자 0을 비교합니다.' },
      { title: '숨은 공백', body: '제로폭 공백, 줄바꿈 없는 공백, 숨은 결합 문자를 보여줍니다.' }
    ]
  },
  ja: {
    lang: 'ja',
    title: 'Iorl - WhatChar | 紛らわしいUnicode文字チェッカー',
    description: 'I、l、1、O、0、ギリシャ文字、キリル文字、ハングル、全角文字、不可視スペースなど、紛らわしいUnicode文字を貼り付けるだけで確認できます。',
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
    supports: 'ギリシャ文字、キリル文字、ハングル、不可視スペースなどに対応。',
    footerPrivacy: '解析はすべてブラウザ内で実行されます。',
    seoTitle: 'Iorl - WhatCharで確認できること',
    seoBody: 'Iorl - WhatCharは、見た目が似ている文字、ホモグリフ、混在した文字体系、不可視スペースを検出する軽量ツールです。小文字l、大文字I、数字1、ラテンO、数字0、ギリシャ語のオミクロン、キリル文字O、ハングルㅇ、ゼロ幅スペースの判別に役立ちます。',
    seoCards: [
      { title: 'I / l / 1 / |', body: '縦線のように見える文字を識別します。' },
      { title: 'O / 0 / Ο / О / ㅇ', body: 'ラテン、ギリシャ、キリル、ハングル、数字0を比較します。' },
      { title: '不可視スペース', body: 'ゼロ幅スペースやノーブレークスペースを表示します。' }
    ]
  },
  zh: {
    lang: 'zh-Hans',
    title: 'Iorl - WhatChar | 易混淆 Unicode 字符检测器',
    description: '粘贴文本即可识别 I、l、1、O、0、希腊字母、西里尔字母、韩文字母、全角字符和不可见空格等易混淆 Unicode 字符。',
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
    supports: '支持希腊字母、西里尔字母、韩文、不可见空格等。',
    footerPrivacy: '所有分析都在你的浏览器中完成。',
    seoTitle: 'Iorl - WhatChar 可以检测什么？',
    seoBody: 'Iorl - WhatChar 可帮助你发现外观相似字符、同形异义字符、混合文字系统和不可见空格。它适用于区分小写 l、大写 I、数字 1、拉丁 O、数字 0、希腊 Omicron、西里尔 O、韩文 ㅇ 以及零宽空格。',
    seoCards: [
      { title: 'I / l / 1 / |', body: '识别看起来像竖线的字符。' },
      { title: 'O / 0 / Ο / О / ㅇ', body: '比较拉丁、希腊、西里尔、韩文和数字 0。' },
      { title: '不可见空格', body: '显示零宽空格、不换行空格和隐藏连接符。' }
    ]
  },
  es: {
    lang: 'es',
    title: 'Iorl - WhatChar | Detector de caracteres Unicode confusos',
    description: 'Pega texto para identificar caracteres Unicode confusos como I, l, 1, O, 0, griego, cirílico, hangul, caracteres de ancho completo y espacios invisibles.',
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
    supports: 'Compatible con griego, cirílico, hangul, espacios invisibles y más.',
    footerPrivacy: 'Todo el análisis se ejecuta en tu navegador.',
    seoTitle: '¿Qué comprueba Iorl - WhatChar?',
    seoBody: 'Iorl - WhatChar ayuda a detectar caracteres visualmente parecidos, homógrafos, sistemas de escritura mezclados y espacios invisibles. Es útil para distinguir l minúscula, I mayúscula, número 1, O latina, cero, ómicron griega, O cirílica, hangul ㅇ y caracteres de ancho cero.',
    seoCards: [
      { title: 'I / l / 1 / |', body: 'Identifica caracteres que parecen trazos verticales.' },
      { title: 'O / 0 / Ο / О / ㅇ', body: 'Compara latín, griego, cirílico, hangul y el número cero.' },
      { title: 'Espacios invisibles', body: 'Revela espacios de ancho cero, espacios inseparables y uniones ocultas.' }
    ]
  },
  fr: {
    lang: 'fr',
    title: 'Iorl - WhatChar | Détecteur de caractères Unicode confus',
    description: 'Collez du texte pour identifier les caractères Unicode confus comme I, l, 1, O, 0, grec, cyrillique, hangul, pleine chasse et espaces invisibles.',
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
    supports: 'Prend en charge le grec, le cyrillique, le hangul, les espaces invisibles, etc.',
    footerPrivacy: 'Toute l’analyse s’exécute dans votre navigateur.',
    seoTitle: 'Que vérifie Iorl - WhatChar ?',
    seoBody: 'Iorl - WhatChar vous aide à repérer les caractères ressemblants, les homoglyphes, les écritures mélangées et les espaces invisibles. Il est utile pour distinguer l minuscule, I majuscule, le chiffre 1, O latin, zéro, omicron grec, O cyrillique, hangul ㅇ et les caractères à largeur nulle.',
    seoCards: [
      { title: 'I / l / 1 / |', body: 'Identifie les caractères qui ressemblent à des traits verticaux.' },
      { title: 'O / 0 / Ο / О / ㅇ', body: 'Compare latin, grec, cyrillique, hangul et chiffre zéro.' },
      { title: 'Espaces invisibles', body: 'Révèle les espaces à largeur nulle, insécables et les joiners cachés.' }
    ]
  },
  de: {
    lang: 'de',
    title: 'Iorl - WhatChar | Prüfer für verwirrende Unicode-Zeichen',
    description: 'Füge Text ein, um verwirrende Unicode-Zeichen wie I, l, 1, O, 0, griechische, kyrillische, Hangul-, Vollbreiten- und unsichtbare Zeichen zu erkennen.',
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
    supports: 'Unterstützt Griechisch, Kyrillisch, Hangul, unsichtbare Leerzeichen und mehr.',
    footerPrivacy: 'Die gesamte Analyse läuft in deinem Browser.',
    seoTitle: 'Was prüft Iorl - WhatChar?',
    seoBody: 'Iorl - WhatChar hilft beim Erkennen von ähnlich aussehenden Zeichen, Homoglyphen, gemischten Schriftsystemen und unsichtbaren Leerzeichen. Es ist nützlich, um kleines l, großes I, Ziffer 1, lateinisches O, Null, griechisches Omikron, kyrillisches O, Hangul ㅇ und Zero-Width-Zeichen zu unterscheiden.',
    seoCards: [
      { title: 'I / l / 1 / |', body: 'Erkennt Zeichen, die wie vertikale Striche aussehen.' },
      { title: 'O / 0 / Ο / О / ㅇ', body: 'Vergleicht Latein, Griechisch, Kyrillisch, Hangul und die Ziffer Null.' },
      { title: 'Unsichtbare Leerzeichen', body: 'Zeigt Zero-Width-Spaces, geschützte Leerzeichen und versteckte Joiner.' }
    ]
  }
};
