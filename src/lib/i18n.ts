// i18n — Lightweight i18n for EarnGap
import en from '@/i18n/en.json';
import zh from '@/i18n/zh.json';

export type Lang = 'en' | 'zh';
const dictionaries: Record<Lang, Record<string, string>> = { en, zh };

// Get stored lang or default to 'en'
export function getLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('earngap_lang');
  if (stored === 'zh' || stored === 'en') return stored;
  return 'en';
}

export function setLang(lang: Lang) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('earngap_lang', lang);
  }
}

export function t(key: string, lang?: Lang): string {
  const l = lang || getLang();
  return dictionaries[l]?.[key] || dictionaries['en']?.[key] || key;
}
