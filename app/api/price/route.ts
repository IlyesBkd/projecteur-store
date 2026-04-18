import { NextResponse } from "next/server";

import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const sql = getDb();
    const rows = await sql`SELECT key, value FROM settings WHERE key IN ('product_price_cents', 'old_price_cents')`;

    let priceCents = 21900;
    let oldPriceCents = 34999;

    for (const row of rows) {
      if (row.key === "product_price_cents") priceCents = parseInt(row.value, 10);
      if (row.key === "old_price_cents") oldPriceCents = parseInt(row.value, 10);
    }

    const formatPrice = (cents: number) =>
      (cents / 100).toFixed(2).replace(".", ",") + "€";

    const discount = Math.round((1 - priceCents / oldPriceCents) * 100);

    return NextResponse.json({
      priceCents,
      oldPriceCents,
      price: formatPrice(priceCents),
      oldPrice: formatPrice(oldPriceCents),
      discount: `-${discount}%`,
    });
  } catch {
    return NextResponse.json({
      priceCents: 21900,
      oldPriceCents: 34999,
      price: "219,00€",
      oldPrice: "349,99€",
      discount: "-37%",
    });
  }
}
