import en from './locales/en.json';
import id from './locales/id.json';

const translations = { en, id };

export type Locale = 'en' | 'id';

export function useTranslations(locale: Locale) {
  const dict = translations[locale] || en;
  return function t(key: string): string {
    const value = key.split('.').reduce((obj: any, keyPart) => obj?.[keyPart], dict);
    if (typeof value !== 'string') {
      if (import.meta.env.DEV) console.warn(`Missing translation: ${key} [${locale}]`);
      return key;
    }
    return value;
  };
}
