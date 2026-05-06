import type { Locale } from "./config";
import { DEFAULT_LOCALE } from "./config";
import viDict from "./dictionaries/vi.json";
import enDict from "./dictionaries/en.json";
import jaDict from "./dictionaries/ja.json";
import zhTwDict from "./dictionaries/zh-tw.json";

export type ClientDictionary = typeof viDict;

const dictionaries: Record<Locale, ClientDictionary> = {
  vi: viDict,
  en: enDict as ClientDictionary,
  ja: jaDict as ClientDictionary,
  "zh-tw": zhTwDict as ClientDictionary,
};

export function getClientDictionary(locale: Locale): ClientDictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
