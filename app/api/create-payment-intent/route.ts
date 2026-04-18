import { NextResponse } from "next/server";

import { getDb } from "@/lib/db";
import { getStripe } from "@/lib/stripe";

export async function POST() {
  try {
    const sql = getDb();
    const rows = await sql`SELECT value FROM settings WHERE key = 'product_price_cents'`;
    const priceCents = rows.length > 0 ? parseInt(rows[0].value, 10) : 21900;

    const stripe = getStripe();
    const paymentIntent = await stripe.paymentIntents.create({
      amount: priceCents,
      currency: "eur",
      automatic_payment_methods: { enabled: true },
      metadata: {
        product: "Projecteur NEXGEAR 4K V12",
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      priceCents,
    });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du paiement" },
      { status: 500 }
    );
  }
}
