import { Locale } from "@/lib/i18n";

export type Currency = "eur" | "usd";

export const PRODUCT_NAME = "NEXGEAR 4K V12 Projector";
export const PRODUCT_PRICE_EUR_CENTS = 21900;
export const OLD_PRICE_EUR_CENTS = 34999;
export const PRODUCT_PRICE_USD_CENTS = readPublicInt("NEXT_PUBLIC_USD_PRODUCT_PRICE_CENTS", 23900);
export const OLD_PRICE_USD_CENTS = readPublicInt("NEXT_PUBLIC_USD_OLD_PRICE_CENTS", 37999);

function readPublicInt(key: string, fallback: number) {
  const value = process.env[key];
  if (!value) return fallback;

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function currencyForLocale(locale: Locale): Currency {
  return locale === "en-US" ? "usd" : "eur";
}

export function localeForCurrency(currency: Currency): Locale {
  return currency === "usd" ? "en-US" : "fr-FR";
}

export function fallbackPriceCents(currency: Currency) {
  return currency === "usd" ? PRODUCT_PRICE_USD_CENTS : PRODUCT_PRICE_EUR_CENTS;
}

export function fallbackOldPriceCents(currency: Currency) {
  return currency === "usd" ? OLD_PRICE_USD_CENTS : OLD_PRICE_EUR_CENTS;
}

export function formatMoney(cents: number, currency: Currency, locale: Locale) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency.toUpperCase(),
    currencyDisplay: "symbol",
  }).format(cents / 100);
}
