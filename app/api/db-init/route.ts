import { NextResponse } from "next/server";

import { getDb } from "@/lib/db";

export async function POST() {
  try {
    const sql = getDb();

    await sql`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        name TEXT NOT NULL,
        phone TEXT,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        postal_code TEXT NOT NULL,
        product TEXT NOT NULL DEFAULT 'Projecteur NEXGEAR 4K V12',
        amount_cents INTEGER NOT NULL,
        stripe_payment_intent_id TEXT,
        status TEXT NOT NULL DEFAULT 'paid',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
    `;

    await sql`
      INSERT INTO settings (key, value)
      VALUES ('product_price_cents', '21900')
      ON CONFLICT (key) DO NOTHING
    `;

    await sql`
      INSERT INTO settings (key, value)
      VALUES ('old_price_cents', '34999')
      ON CONFLICT (key) DO NOTHING
    `;

    return NextResponse.json({ ok: true, message: "Tables created" });
  } catch (error) {
    console.error("DB init error:", error);
    return NextResponse.json({ error: "DB init failed" }, { status: 500 });
  }
}
