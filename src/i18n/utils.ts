import { ui, defaultLang, languages, type Locale, type TranslationKey } from './ui';

/**
 * Extracts the locale from a URL pathname.
 * Root '/' defaults to 'en'.
 * Subpaths like '/es/...' or '/es' map to the respective locale.
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as Locale;
  }
  return defaultLang;
}

/**
 * Returns a translation function for a given locale.
 * Falls back to defaultLang ('en') if a key is missing.
 */
export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    const localeDict = ui[lang] || ui[defaultLang];
    return (localeDict as Record<string, string>)[key] || (ui[defaultLang] as Record<string, string>)[key] || key;
  };
}

/**
 * Generates localized path URLs according to prefixDefaultLocale: false.
 * - 'en' -> '/'
 * - others -> '/es/', '/pt/', etc.
 */
export function useTranslatedPath(lang: Locale) {
  return function translatePath(path: string = '', targetLang: Locale = lang): string {
    // Normalize path by stripping leading/trailing slashes and any current locale prefix
    const cleanPath = path
      .replace(/^\//, '')
      .replace(new RegExp(`^(${Object.keys(languages).join('|')})(/|$)`), '')
      .replace(/\/$/, '');

    const hasCleanPath = cleanPath.length > 0;

    if (targetLang === defaultLang) {
      return hasCleanPath ? `/${cleanPath}/` : '/';
    }

    return hasCleanPath ? `/${targetLang}/${cleanPath}/` : `/${targetLang}/`;
  };
}
