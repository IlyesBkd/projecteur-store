import { NextRequest, NextResponse } from "next/server";

import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const sql = getDb();
    const rows = await sql`SELECT key, value FROM settings`;
    const settings: Record<string, string> = {};
    for (const row of rows) {
      settings[row.key] = row.value;
    }
    return NextResponse.json(settings);
  } catch (error) {
    console.error("Settings fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const sql = getDb();
    const body = await req.json();
    const { key, value } = body;

    if (!key || value === undefined) {
      return NextResponse.json({ error: "Missing key or value" }, { status: 400 });
    }

    await sql`
      INSERT INTO settings (key, value)
      VALUES (${key}, ${String(value)})
      ON CONFLICT (key) DO UPDATE SET value = ${String(value)}
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Settings update error:", error);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
