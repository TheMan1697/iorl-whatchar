import { useMemo, useState } from 'react';
import { analyzeText, detectedScripts, type AnalyzedChar } from '../utils/analyzeText';
import { messages } from '../i18n/messages';
import type { Locale } from '../i18n/config';

type AnalyzerProps = {
  locale: Locale;
};

const zeroWidthExample = 'hello\u200Bworld';

const commonExamples = [
  'I l 1 i | ! ㅣ',
  'O 0 o Ο О ㅇ',
  'A Α А a а α',
  'P p Ρ Р ρ р',
  'X x Χ Х χ х ×',
  'Y y Υ У у',
  'V v ν υ',
  '- ‐ - – — −',
  "' ‘ ’ ´ `",
  '" “ ” ″',
  '/ ⁄ ∕ \\',
  zeroWidthExample,
];

const localeExamples: Partial<Record<Locale, string[]>> = {
  ko: [
    'I l 1 i | ! ㅣ',
    'ㅇ O 0 o Ο О 〇 ○',
    'ㅁ □ ○ ㅇ',
    'ㅅ ^',
    '- ‐ - – — −',
    "' ‘ ’ ´ `",
    '" “ ” ″',
    '/ ⁄ ∕ \\',
    zeroWidthExample,
  ],

  ja: [
    'I l 1 i | ! ㅣ',
    'O 0 o Ο О 〇 ○',
    'ロ 口 □',
    'カ 力',
    'ニ 二',
    'エ 工',
    'タ 夕',
    'ヘ へ ^',
    'ソ ン ノ ﾉ',
    'シ ツ ジ ヅ',
    '- ‐ - – — −',
    zeroWidthExample,
  ],

  zh: [
    'I l 1 i | ! ㅣ',
    '〇 O 0 Ο О ○',
    '口 ロ □',
    '力 カ',
    '二 ニ',
    '工 エ',
    '夕 タ',
    '- ‐ - – — −',
    '。 . ．',
    '， ,',
    '： :',
    zeroWidthExample,
  ],
};

function getExamples(locale: Locale): string[] {
  return localeExamples[locale] ?? commonExamples;
}

function getExampleLabel(example: string, locale: Locale): string {
  if (example !== zeroWidthExample) return example;

  if (locale === 'ko') return '보이지 않는 공백';
  if (locale === 'ja') return '見えない空白';
  if (locale === 'zh') return '不可见空格';

  return 'zero-width space';
}

function buildShortExplanation(item: AnalyzedChar, looksLikeLabel: string): string {
  const parts = [item.name, item.codePoint, item.script];
  if (item.lookalikes.length > 0) {
    parts.push(`${looksLikeLabel} ${item.lookalikes.slice(0, 6).join(' ')}`);
  }
  return parts.join(' · ');
}

function CharacterTooltip({ item, looksLikeLabel }: { item: AnalyzedChar; looksLikeLabel: string }) {
  return (
    <span className="char-tooltip" role="tooltip">
      <strong>{item.display}</strong>
      <span>{item.name}</span>
      <small>
        {item.codePoint} · {item.script}
      </small>
      {item.lookalikes.length > 0 && (
        <em>
          {looksLikeLabel} {item.lookalikes.slice(0, 6).join(' ')}
        </em>
      )}
    </span>
  );
}

function HighlightedChar({
  item,
  looksLikeLabel,
  onSelect,
  isSelected
}: {
  item: AnalyzedChar;
  looksLikeLabel: string;
  onSelect: (item: AnalyzedChar) => void;
  isSelected: boolean;
}) {
  const shortExplanation = buildShortExplanation(item, looksLikeLabel);
  const charClass = [
    'result-char',
    item.isConfusable ? 'is-confusable' : '',
    item.isInvisible ? 'is-invisible' : '',
    isSelected ? 'is-selected' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className="result-char-wrap">
      <button
        type="button"
        className={charClass}
        aria-label={shortExplanation}
        onMouseEnter={() => onSelect(item)}
        onFocus={() => onSelect(item)}
        onClick={() => onSelect(item)}
      >
        {item.isInvisible ? item.display : item.char === ' ' ? ' ' : item.char}
      </button>
      <CharacterTooltip item={item} looksLikeLabel={looksLikeLabel} />
    </span>
  );
}

export default function Analyzer({ locale }: AnalyzerProps) {
  const t = messages[locale];
  const examples = getExamples(locale);
  const [input, setInput] = useState('I l 1 i | ! ㅣ');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const analysis = useMemo(() => analyzeText(input), [input]);
  const suspicious = analysis.filter(
  (item) =>
    item.char !== ' ' &&
    (item.isConfusable ||
      item.isInvisible ||
      Boolean(item.groupLabel) ||
      item.lookalikes.length > 0)
);
  const scripts = detectedScripts(analysis);
  const mixedScripts = scripts.length > 1;
  const selected = selectedIndex == null ? suspicious[0] ?? analysis[0] : analysis[selectedIndex];

  return (
    <section className="analyzer" aria-labelledby="checker-title">
      <div className="input-wrap">
        <label className="sr-only" htmlFor="checker-input" id="checker-title">
          {t.textareaLabel}
        </label>
        <textarea
          id="checker-input"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setSelectedIndex(null);
          }}
          placeholder={t.placeholder}
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <div className="examples" aria-label={t.examplesLabel}>
          {examples.map((example) => (
            <button key={example} type="button" onClick={() => setInput(example)}>
              {getExampleLabel(example, locale)}
            </button>
          ))}
        </div>
      </div>

      <div className="result-block" aria-live="polite">
        <div className="section-label">{t.result}</div>
        <div className="result-line">
          {analysis.length === 0 ? (
            <span className="muted">{t.placeholder}</span>
          ) : (
            analysis.map((item) => (
              <HighlightedChar
                item={item}
                key={`${item.index}-${item.codePoint}`}
                looksLikeLabel={t.looksLike}
                onSelect={(next) => setSelectedIndex(next.index)}
                isSelected={selectedIndex === item.index}
              />
            ))
          )}
        </div>

        <div className="result-summary">
          {suspicious.length === 0 ? (
            <span>{t.noConfusing}</span>
          ) : (
            <>
              <span>{t.confusingFound(suspicious.length)}</span>
              {mixedScripts && (
                <span>
                  {t.mixedScripts}: {scripts.join(' + ')}
                </span>
              )}
            </>
          )}
        </div>

        {selected && (
          <div className="dictionary-note" aria-live="polite">
            <span className="dictionary-char">{selected.display}</span>
            <span className="dictionary-copy">
              <strong>{selected.name}</strong>
              <small>
                {selected.codePoint} · {selected.script}
                {selected.lookalikes.length > 0 && ` · ${t.looksLike} ${selected.lookalikes.slice(0, 8).join(' ')}`}
              </small>
            </span>
          </div>
        )}
      </div>

      <div className="details-block">
        <div className="section-label">{t.details}</div>
        {suspicious.length === 0 ? (
          <p className="empty-detail">{t.cleanDetail}</p>
        ) : (
          <ul className="details-list">
            {suspicious.map((item) => (
              <li key={`${item.index}-${item.codePoint}`}>
                <span className="detail-char">{item.display}</span>
                <span className="detail-dash">—</span>
                <span className="detail-main">
                  {item.name} <span className="detail-code">{item.codePoint}</span>
                </span>
                {item.lookalikes.length > 0 && (
                  <span className="detail-lookalikes">
                    {t.looksLike} {item.lookalikes.join(' ')}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
