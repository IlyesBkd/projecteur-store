import { NextRequest, NextResponse } from "next/server";

import { getDb } from "@/lib/db";
import { normalizeLocale } from "@/lib/i18n";
import { currencyForLocale, fallbackPriceCents } from "@/lib/pricing";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const locale = normalizeLocale(body.locale);
    const currency = currencyForLocale(locale);
    let priceCents = fallbackPriceCents(currency);

    if (currency === "eur") {
      const sql = getDb();
      const rows = await sql`SELECT value FROM settings WHERE key = 'product_price_cents'`;
      priceCents = rows.length > 0 ? parseInt(rows[0].value, 10) : priceCents;
    }

    const stripe = getStripe();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: priceCents,
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        product: locale === "en-US" ? "NEXGEAR 4K V12 Projector" : "Projecteur NEXGEAR 4K V12",
        locale,
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      priceCents,
      currency,
      locale,
    });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Unable to create payment" }, { status: 500 });
  }
}
