import type { Locale } from "./locales";

const dictionaries: Record<Locale, () => Promise<Record<string, unknown>>> = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  hu: () => import("./dictionaries/hu.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
