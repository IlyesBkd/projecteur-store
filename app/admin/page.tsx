"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Order = {
  id: number;
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  product: string;
  amount_cents: number;
  stripe_payment_intent_id: string;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [priceCents, setPriceCents] = useState(21900);
  const [oldPriceCents, setOldPriceCents] = useState(34999);
  const [priceInput, setPriceInput] = useState("");
  const [oldPriceInput, setOldPriceInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [ordersRes, settingsRes] = await Promise.all([
        fetch("/api/orders"),
        fetch("/api/settings"),
      ]);
      if (ordersRes.ok) setOrders(await ordersRes.json());
      if (settingsRes.ok) {
        const s = await settingsRes.json();
        const pc = parseInt(s.product_price_cents || "21900", 10);
        const oc = parseInt(s.old_price_cents || "34999", 10);
        setPriceCents(pc);
        setOldPriceCents(oc);
        setPriceInput((pc / 100).toFixed(2));
        setOldPriceInput((oc / 100).toFixed(2));
      }
    } catch {
      /* ignore */
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchData();
  }, [authed, fetchData]);

  const savePrice = async () => {
    setSaving(true);
    setMsg("");
    const newCents = Math.round(parseFloat(priceInput) * 100);
    const newOldCents = Math.round(parseFloat(oldPriceInput) * 100);

    if (isNaN(newCents) || isNaN(newOldCents) || newCents <= 0 || newOldCents <= 0) {
      setMsg("Prix invalide");
      setSaving(false);
      return;
    }

    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "product_price_cents", value: String(newCents) }),
    });
    await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: "old_price_cents", value: String(newOldCents) }),
    });

    setPriceCents(newCents);
    setOldPriceCents(newOldCents);
    setMsg("Prix mis à jour !");
    setSaving(false);
    setTimeout(() => setMsg(""), 3000);
  };

  const formatPrice = (cents: number) =>
    (cents / 100).toFixed(2).replace(".", ",") + " €";

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

  // Simple password gate
  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <Image src="/logo.png" alt="NEXGEAR" width={120} height={32} className="mx-auto mb-6 h-8 w-auto" />
          <h1 className="text-center font-heading text-xl font-semibold text-gray-900">Admin</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (password === (process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "nexgear2026")) {
                setAuthed(true);
              } else {
                setMsg("Mot de passe incorrect");
                setTimeout(() => setMsg(""), 3000);
              }
            }}
            className="mt-6 space-y-4"
          >
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
            {msg && <p className="text-center text-sm text-red-500">{msg}</p>}
            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Connexion
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="NEXGEAR" width={100} height={28} className="h-7 w-auto" />
            <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">Admin</span>
          </div>
          <button
            onClick={() => setAuthed(false)}
            className="text-sm text-gray-500 transition hover:text-gray-900"
          >
            Déconnexion
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Prix */}
        <section className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="font-heading text-lg font-semibold text-gray-900">Prix du produit</h2>
          <p className="mt-1 text-sm text-gray-500">
            Prix actuel : <strong className="text-emerald-600">{formatPrice(priceCents)}</strong>
            {" "}(ancien : <span className="line-through">{formatPrice(oldPriceCents)}</span>)
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3 sm:items-end">
            <div>
              <label className="text-xs font-medium text-gray-600">Nouveau prix (€)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={priceInput}
                onChange={(e) => setPriceInput(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600">Ancien prix barré (€)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={oldPriceInput}
                onChange={(e) => setOldPriceInput(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <button
              onClick={savePrice}
              disabled={saving}
              className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-50"
            >
              {saving ? "Enregistrement..." : "Enregistrer"}
            </button>
          </div>
          {msg && <p className="mt-3 text-sm font-medium text-emerald-600">{msg}</p>}
        </section>

        {/* Commandes */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold text-gray-900">
              Commandes ({orders.length})
            </h2>
            <button
              onClick={fetchData}
              className="text-sm text-emerald-600 transition hover:text-emerald-700"
            >
              Actualiser
            </button>
          </div>

          {loading ? (
            <div className="mt-8 flex justify-center">
              <div className="h-7 w-7 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
            </div>
          ) : orders.length === 0 ? (
            <div className="mt-8 rounded-xl border border-gray-200 bg-white p-12 text-center">
              <p className="text-gray-400">Aucune commande pour le moment</p>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-gray-900">#{order.id}</span>
                        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                          {order.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-gray-900">{order.name}</p>
                      <p className="text-sm text-gray-500">{order.email}{order.phone ? ` • ${order.phone}` : ""}</p>
                      <p className="mt-1 text-xs text-gray-400">
                        {order.address}, {order.postal_code} {order.city}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{formatPrice(order.amount_cents)}</p>
                      <p className="mt-1 text-xs text-gray-400">{formatDate(order.created_at)}</p>
                      {order.stripe_payment_intent_id && (
                        <a
                          href={`https://dashboard.stripe.com/payments/${order.stripe_payment_intent_id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block text-xs text-emerald-600 hover:underline"
                        >
                          Voir sur Stripe →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
