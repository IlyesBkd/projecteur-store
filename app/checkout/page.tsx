"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CheckoutForm } from "@/components/CheckoutForm";
import { OLD_PRICE, PRODUCT_PRICE } from "@/lib/constants";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/create-payment-intent", { method: "POST" })
      .then((res) => {
        if (!res.ok) throw new Error("Erreur serveur");
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch(() => setError("Impossible de charger le formulaire de paiement"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header minimal */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="NEXGEAR"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Paiement sécurisé</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Colonne gauche : Résumé commande */}
          <div className="order-2 lg:order-1">
            <h1 className="font-heading text-2xl font-semibold text-gray-900 sm:text-3xl">
              Votre commande
            </h1>

            {/* Produit */}
            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/images/product/hero-main.png"
                    alt="Projecteur NEXGEAR 4K V12"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="font-heading text-base font-semibold text-gray-900">
                      Projecteur NEXGEAR 4K V12
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Avec trépied intégré
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 line-through">
                      {OLD_PRICE}
                    </span>
                    <span className="text-lg font-bold text-emerald-600">
                      {PRODUCT_PRICE}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Détail prix */}
            <div className="mt-4 space-y-3 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Sous-total</span>
                <span>{PRODUCT_PRICE}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Livraison</span>
                <span className="font-medium text-emerald-600">Gratuite</span>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <div className="flex justify-between text-base font-semibold text-gray-900">
                  <span>Total</span>
                  <span>{PRODUCT_PRICE}</span>
                </div>
              </div>
            </div>

            {/* Réassurance */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: "Livraison offerte", icon: "🚚" },
                { label: "Garantie 2 ans", icon: "🛡️" },
                { label: "Retour 30 jours", icon: "↩️" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-1.5 rounded-lg border border-gray-100 bg-white px-2 py-3 text-center"
                >
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-xs font-medium text-gray-600">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne droite : Formulaire de paiement */}
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-2xl font-semibold text-gray-900 sm:text-3xl">
              Paiement
            </h2>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
              {error && (
                <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {!clientSecret && !error && (
                <div className="flex flex-col items-center gap-4 py-12">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
                  <p className="text-sm text-gray-500">
                    Chargement du formulaire de paiement...
                  </p>
                </div>
              )}

              {clientSecret && (
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret,
                    appearance: {
                      theme: "stripe",
                      variables: {
                        colorPrimary: "#059669",
                        colorBackground: "#ffffff",
                        colorText: "#1f2937",
                        colorDanger: "#dc2626",
                        fontFamily: "system-ui, sans-serif",
                        borderRadius: "8px",
                        spacingUnit: "4px",
                      },
                    },
                    locale: "fr",
                  }}
                >
                  <CheckoutForm />
                </Elements>
              )}
            </div>

            {/* Logos paiement */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <Image src="/visa.svg" alt="Visa" width={40} height={28} className="h-6 w-auto opacity-50" />
              <Image src="/mastercard.webp" alt="Mastercard" width={40} height={28} className="h-6 w-auto opacity-50" />
              <Image src="/apple-pay.svg" alt="Apple Pay" width={40} height={28} className="h-6 w-auto opacity-50" />
              <Image src="/google_pay.png" alt="Google Pay" width={40} height={28} className="h-6 w-auto opacity-50" />
              <Image src="/paypal.png" alt="PayPal" width={40} height={28} className="h-6 w-auto opacity-50" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
