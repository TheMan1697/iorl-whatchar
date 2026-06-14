export type Locale = 'en' | 'ko' | 'ja' | 'zh' | 'es' | 'fr' | 'de';

export const siteUrl = 'https://isitiorl.com';

export const locales: Locale[] = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de'];

export const localePaths: Record<Locale, string> = {
  en: '/',
  ko: '/ko/',
  ja: '/ja/',
  zh: '/zh/',
  es: '/es/',
  fr: '/fr/',
  de: '/de/'
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch'
};

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
