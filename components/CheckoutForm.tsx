"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";

type Props = { priceCents?: number };

export function CheckoutForm({ priceCents = 21900 }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    if (!email || !name || !address || !city || !postalCode) {
      setError("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setLoading(true);
    setError(null);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message ?? "Une erreur est survenue");
      setLoading(false);
      return;
    }

    const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`,
        receipt_email: email,
        shipping: {
          name,
          phone,
          address: {
            line1: address,
            city,
            postal_code: postalCode,
            country: "FR",
          },
        },
        payment_method_data: {
          billing_details: {
            name,
            email,
            phone,
            address: {
              line1: address,
              city,
              postal_code: postalCode,
              country: "FR",
            },
          },
        },
      },
      redirect: "if_required",
    });

    if (confirmError) {
      setError(confirmError.message ?? "Le paiement a échoué");
      setLoading(false);
      return;
    }

    // Save order to DB
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        phone,
        address,
        city,
        postal_code: postalCode,
        amount_cents: priceCents,
        stripe_payment_intent_id: paymentIntent?.id || "",
      }),
    }).catch(() => {});

    window.location.href = "/checkout/success";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Contact */}
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-700">Contact</p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email *"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Livraison */}
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-700">Adresse de livraison</p>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Nom complet *"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Adresse *"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={inputClass}
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Code postal *"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Ville *"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Paiement */}
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-700">Paiement</p>
        <PaymentElement options={{ layout: "accordion" }} />
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full rounded-lg bg-emerald-600 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Traitement en cours..." : `Payer ${(priceCents / 100).toFixed(2).replace(".", ",")} €`}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>Paiement sécurisé par Stripe — Chiffré SSL 256 bits</span>
      </div>
    </form>
  );
}
