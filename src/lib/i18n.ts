import en from '../locales/en.json';
import es from '../locales/es.json';

const translations = {
  en,
  es,
};

export type Locale = 'en' | 'es';

export function useTranslations(locale: Locale = 'en') {
  const t = (key: string, params?: Record<string, string | number>) => {
    const keys = key.split('.');
    let value: unknown = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to English if translation not found
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = (value as Record<string, unknown>)[fallbackKey];
          } else {
            return key; // Return key if translation not found
          }
        }
        break;
      }
    }
    
    if (typeof value === 'string') {
      // Replace parameters if provided
      if (params) {
        return Object.entries(params).reduce((str, [key, val]) => {
          return str.replace(new RegExp(`{${key}}`, 'g'), String(val));
        }, value);
      }
      return value;
    }
    
    if (Array.isArray(value)) {
      return value;
    }
    
    return key;
  };
  
  return t;
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith('/es')) {
    return 'es';
  }
  return 'en';
}

export function getPathWithoutLocale(pathname: string): string {
  if (pathname.startsWith('/es')) {
    return pathname.replace(/^\/es/, '') || '/';
  }
  return pathname;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = getPathWithoutLocale(pathname);
  if (locale === 'es') {
    return `/es${pathWithoutLocale}`;
  }
  return pathWithoutLocale;
} 