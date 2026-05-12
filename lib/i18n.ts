export type Locale = "fr-FR" | "en-US";

export const DEFAULT_LOCALE: Locale = "fr-FR";
export const SUPPORTED_LOCALES: Locale[] = ["fr-FR", "en-US"];

export const localeLabels: Record<Locale, string> = {
  "fr-FR": "FR",
  "en-US": "EN",
};

export function normalizeLocale(value?: string | null): Locale {
  if (!value) return DEFAULT_LOCALE;
  return value.toLowerCase().startsWith("en") ? "en-US" : "fr-FR";
}

export function isEnglish(locale: Locale) {
  return locale === "en-US";
}

export function pathForLocale(pathname: string, locale: Locale) {
  const cleanPath = pathname || "/";
  const withoutEnglishPrefix = cleanPath === "/en" ? "/" : cleanPath.replace(/^\/en(?=\/)/, "");

  if (locale === "en-US") {
    return withoutEnglishPrefix === "/" ? "/en" : `/en${withoutEnglishPrefix}`;
  }

  return withoutEnglishPrefix;
}

export function homePath(locale: Locale) {
  return locale === "en-US" ? "/en" : "/";
}

export function checkoutSuccessPath(locale: Locale) {
  return locale === "en-US" ? "/en/checkout/success" : "/checkout/success";
}

export function legalPath(locale: Locale, slug: string) {
  return locale === "en-US" ? `/en/pages/${slug}` : `/pages/${slug}`;
}
