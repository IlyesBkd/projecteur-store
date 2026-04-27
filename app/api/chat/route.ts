import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "No webhook configured" }, { status: 500 });
  }

  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Email et message requis" }, { status: 400 });
    }

    const now = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "";
    const country = req.headers.get("x-vercel-ip-country") || "";
    const city = req.headers.get("x-vercel-ip-city") || "";
    const location = [city, country].filter(Boolean).join(", ") || "Inconnu";

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "💬 Nouveau message client",
            color: 0x6366f1,
            fields: [
              { name: "📧 Email", value: email, inline: true },
              { name: "🌍 Localisation", value: location, inline: true },
              { name: "🕐 Heure", value: now, inline: true },
              { name: "💬 Message", value: message.slice(0, 1024) },
            ],
            footer: { text: "NexGear Chat Widget" },
          },
        ],
      }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 500 });
  }
}
