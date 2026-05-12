import { NextRequest, NextResponse } from "next/server";

import { normalizeLocale } from "@/lib/i18n";
import { currencyForLocale, fallbackOldPriceCents, fallbackPriceCents, formatMoney } from "@/lib/pricing";
import { getDb } from "@/lib/db";

export async function GET(req: NextRequest) {
  const locale = normalizeLocale(req.nextUrl.searchParams.get("locale"));
  const currency = currencyForLocale(locale);

  try {
    let priceCents = fallbackPriceCents(currency);
    let oldPriceCents = fallbackOldPriceCents(currency);

    if (currency === "eur") {
      const sql = getDb();
      const rows = await sql`SELECT key, value FROM settings WHERE key IN ('product_price_cents', 'old_price_cents')`;

      for (const row of rows) {
        if (row.key === "product_price_cents") priceCents = parseInt(row.value, 10);
        if (row.key === "old_price_cents") oldPriceCents = parseInt(row.value, 10);
      }
    }

    const discount = Math.round((1 - priceCents / oldPriceCents) * 100);

    return NextResponse.json({
      locale,
      currency,
      priceCents,
      oldPriceCents,
      price: formatMoney(priceCents, currency, locale),
      oldPrice: formatMoney(oldPriceCents, currency, locale),
      discount: `-${discount}%`,
    });
  } catch {
    const priceCents = fallbackPriceCents(currency);
    const oldPriceCents = fallbackOldPriceCents(currency);

    return NextResponse.json({
      locale,
      currency,
      priceCents,
      oldPriceCents,
      price: formatMoney(priceCents, currency, locale),
      oldPrice: formatMoney(oldPriceCents, currency, locale),
      discount: "-37%",
    });
  }
}
