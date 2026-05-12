import { NextRequest, NextResponse } from "next/server";

import { getDb } from "@/lib/db";
import { Currency, formatMoney, localeForCurrency } from "@/lib/pricing";

export async function GET() {
  try {
    const sql = getDb();
    const orders = await sql`SELECT * FROM orders ORDER BY created_at DESC`;
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Orders fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const sql = getDb();
    const body = await req.json();
    const {
      email,
      name,
      phone,
      address,
      city,
      state,
      country = "FR",
      postal_code,
      amount_cents,
      currency = "eur",
      stripe_payment_intent_id,
    } = body;

    if (!email || !name || !address || !city || !postal_code || !amount_cents) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await sql`ALTER TABLE orders ADD COLUMN IF NOT EXISTS state TEXT`;
    await sql`ALTER TABLE orders ADD COLUMN IF NOT EXISTS country TEXT NOT NULL DEFAULT 'FR'`;
    await sql`ALTER TABLE orders ADD COLUMN IF NOT EXISTS currency TEXT NOT NULL DEFAULT 'eur'`;

    const result = await sql`
      INSERT INTO orders (email, name, phone, address, city, state, country, postal_code, amount_cents, currency, stripe_payment_intent_id)
      VALUES (${email}, ${name}, ${phone || ""}, ${address}, ${city}, ${state || ""}, ${country}, ${postal_code}, ${amount_cents}, ${currency}, ${stripe_payment_intent_id || ""})
      RETURNING *
    `;

    const order = result[0];
    const orderCurrency = (currency === "usd" ? "usd" : "eur") as Currency;

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      const locale = localeForCurrency(orderCurrency);
      const priceFormatted = formatMoney(amount_cents, orderCurrency, locale);
      const now = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
      const regionLine = state ? `${city}, ${state} ${postal_code}` : `${postal_code} ${city}`;

      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "Nouvelle commande",
              color: 0x10b981,
              fields: [
                { name: "Client", value: `${name}\n${email}${phone ? `\n${phone}` : ""}`, inline: true },
                { name: "Produit", value: `Projecteur NEXGEAR 4K V12\n**${priceFormatted}**`, inline: true },
                { name: "Livraison", value: `${address}\n${regionLine}\n${country}`, inline: true },
                { name: "Date", value: now, inline: true },
                { name: "Stripe", value: stripe_payment_intent_id || "N/A", inline: true },
              ],
              footer: { text: `Commande #${order.id}` },
            },
          ],
        }),
      }).catch(() => {});
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
