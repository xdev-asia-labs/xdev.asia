/**
 * i18n configuration for xDev.asia
 *
 * Strategy: Vietnamese is the default locale, served at the root path (/).
 * Other locales are served under /<locale>/ prefixes.
 *
 * Currently we are rolling out Phase 1 (UI infrastructure).
 * Content translation for series/blog posts will follow later.
 */

export const LOCALES = ["vi", "en", "ja", "zh-tw"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "vi";

export const LOCALE_LABELS: Record<Locale, string> = {
  vi: "Tiếng Việt",
  en: "English",
  ja: "日本語",
  "zh-tw": "繁體中文",
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  vi: "🇻🇳",
  en: "🇺🇸",
  ja: "🇯🇵",
  "zh-tw": "🇹🇼",
};

/** ISO language code used for the <html lang> attribute and hreflang tags. */
export const LOCALE_HTML_LANG: Record<Locale, string> = {
  vi: "vi",
  en: "en",
  ja: "ja",
  "zh-tw": "zh-Hant-TW",
};

/** hreflang attribute value used in <link rel="alternate" hreflang="..."> */
export const LOCALE_HREFLANG: Record<Locale, string> = {
  vi: "vi",
  en: "en",
  ja: "ja",
  "zh-tw": "zh-Hant",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Returns the URL prefix for a locale.
 * The default locale (vi) lives at root and has no prefix.
 */
export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/**
 * Build a localized path by prefixing the locale (except for the default locale).
 * `path` should start with "/".
 */
export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const prefix = localePrefix(locale);
  if (!prefix) return normalized;
  return `${prefix}${normalized === "/" ? "" : normalized}` || "/";
}

/**
 * Detect the active locale from a URL pathname.
 */
export function detectLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0]?.toLowerCase();
  if (first && isLocale(first)) return first;
  return DEFAULT_LOCALE;
}

/**
 * Strip the locale prefix from a path.
 * Returns a path that always starts with "/".
 */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0]!.toLowerCase())) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}
