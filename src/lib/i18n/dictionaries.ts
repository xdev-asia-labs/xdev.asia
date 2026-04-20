import "server-only";
import type { Locale } from "./config";
import { DEFAULT_LOCALE } from "./config";
import viDict from "./dictionaries/vi.json";
import enDict from "./dictionaries/en.json";
import jaDict from "./dictionaries/ja.json";
import zhTwDict from "./dictionaries/zh-tw.json";

export type Dictionary = typeof viDict;

const dictionaries: Record<Locale, Dictionary> = {
  vi: viDict,
  en: enDict as Dictionary,
  ja: jaDict as Dictionary,
  "zh-tw": zhTwDict as Dictionary,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
