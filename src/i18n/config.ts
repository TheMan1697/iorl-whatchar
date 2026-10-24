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

/**
 * WhatChar is a Kakerio tool. Links to kakerio.com use the same language where Kakerio has it
 * (ja is Kakerio's root; zh is Simplified Chinese, Kakerio's /zh-hans/); Spanish and French,
 * which Kakerio does not offer, go to its English pages.
 */
export const kakerioOrigin = 'https://kakerio.com';

export const kakerioPaths: Record<Locale, string> = {
  en: '/en/',
  ko: '/ko/',
  ja: '/',
  zh: '/zh-hans/',
  es: '/en/',
  fr: '/en/',
  de: '/de/'
};

/** A kakerio.com URL in the locale's Kakerio language: kakerioUrl('ko', 'tools/mojibake-fixer/'). */
export function kakerioUrl(locale: Locale, page = '') {
  return new URL(kakerioPaths[locale] + page.replace(/^\//, ''), kakerioOrigin).toString();
}
