import type { Locale } from "./locales";
import enDict from "./dictionaries/en.json";

export type Dictionary = typeof enDict;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default as Dictionary),
  hu: () => import("./dictionaries/hu.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
