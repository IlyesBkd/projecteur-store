import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";

export async function POST(req: NextRequest) {
  if (!DISCORD_WEBHOOK_URL) {
    return NextResponse.json({ error: "No webhook configured" }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { referrer, page, utm_source, utm_medium, utm_campaign, event } = body;
    const eventType = event || "visit";

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";
    const country = req.headers.get("x-vercel-ip-country") || "??";
    const city = req.headers.get("x-vercel-ip-city") || "";

    const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);
    const device = isMobile ? "📱 Mobile" : "💻 Desktop";

    const browser = extractBrowser(userAgent);

    let source = "🔗 Lien direct";
    if (utm_source) {
      source = `🎯 ${utm_source}${utm_medium ? ` / ${utm_medium}` : ""}${utm_campaign ? ` (${utm_campaign})` : ""}`;
    } else if (referrer) {
      try {
        const refHost = new URL(referrer).hostname;
        if (refHost.includes("google")) source = "🔍 Google";
        else if (refHost.includes("facebook") || refHost.includes("fb.")) source = "📘 Facebook";
        else if (refHost.includes("instagram")) source = "📸 Instagram";
        else if (refHost.includes("tiktok")) source = "🎵 TikTok";
        else if (refHost.includes("youtube")) source = "🎬 YouTube";
        else if (refHost.includes("twitter") || refHost.includes("x.com")) source = "🐦 Twitter/X";
        else if (refHost.includes("snapchat")) source = "👻 Snapchat";
        else source = `🌐 ${refHost}`;
      } catch {
        source = `🌐 ${referrer}`;
      }
    }

    const locationParts = [city, country].filter(Boolean);
    const location = locationParts.length > 0 ? locationParts.join(", ") : "Inconnu";

    const now = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

    const isCheckout = eventType === "checkout_click";

    const embed = {
      title: isCheckout ? "💰 Clic sur Acheter maintenant !" : "👀 Nouvelle visite sur le site",
      color: isCheckout ? 0xf59e0b : 0x10b981,
      fields: [
        { name: "📍 Source", value: source, inline: true },
        { name: "📱 Appareil", value: `${device} — ${browser}`, inline: true },
        { name: "🌍 Localisation", value: location, inline: true },
        { name: "📄 Page", value: page || "/", inline: true },
        { name: "🕐 Heure", value: now, inline: true },
      ],
      footer: { text: "NEX-GEN Tracker" },
    };

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

function extractBrowser(ua: string): string {
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Edg/")) return "Edge";
  if (ua.includes("OPR") || ua.includes("Opera")) return "Opera";
  if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  return "Autre";
}
