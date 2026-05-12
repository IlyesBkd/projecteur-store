"use client";

import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";

import { checkoutSuccessPath, Locale } from "@/lib/i18n";
import { Currency, formatMoney } from "@/lib/pricing";
import { checkoutCopy, productCopy } from "@/lib/site-copy";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";

type Props = {
  locale?: Locale;
  priceCents?: number;
  currency?: Currency;
};

export function CheckoutForm({ locale = "fr-FR", priceCents = 21900, currency = "eur" }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const copy = checkoutCopy[locale];
  const product = productCopy[locale];
  const isUs = locale === "en-US";
  const country = isUs ? "US" : "FR";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    if (!email || !name || !address || !city || !postalCode || (isUs && !state)) {
      setError(copy.required);
      return;
    }

    setLoading(true);
    setError(null);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message ?? copy.genericError);
      setLoading(false);
      return;
    }

    const stripeAddress = {
      line1: address,
      city,
      state: state || undefined,
      postal_code: postalCode,
      country,
    };

    const { error: confirmError, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}${checkoutSuccessPath(locale)}`,
        receipt_email: email,
        shipping: {
          name,
          phone,
          address: stripeAddress,
        },
        payment_method_data: {
          billing_details: {
            name,
            email,
            phone,
            address: stripeAddress,
          },
        },
      },
      redirect: "if_required",
    });

    if (confirmError) {
      setError(confirmError.message ?? copy.failed);
      setLoading(false);
      return;
    }

    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        phone,
        address,
        city,
        state,
        country,
        postal_code: postalCode,
        amount_cents: priceCents,
        currency,
        stripe_payment_intent_id: paymentIntent?.id || "",
      }),
    }).catch(() => {});

    window.location.href = checkoutSuccessPath(locale);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="mb-2 text-sm font-semibold text-gray-700">{copy.contact}</p>
        <div className="space-y-3">
          <input type="email" placeholder={copy.email} required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} autoComplete="email" />
          <input type="tel" placeholder={copy.phone} value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} autoComplete="tel" />
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-gray-700">{copy.shippingAddress}</p>
        <div className="space-y-3">
          <input type="text" placeholder={copy.fullName} required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} autoComplete="name" />
          <input type="text" placeholder={copy.address} required value={address} onChange={(e) => setAddress(e.target.value)} className={inputClass} autoComplete="shipping address-line1" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input type="text" placeholder={copy.postalCode} required value={postalCode} onChange={(e) => setPostalCode(e.target.value)} className={inputClass} autoComplete="shipping postal-code" />
            <input type="text" placeholder={copy.city} required value={city} onChange={(e) => setCity(e.target.value)} className={inputClass} autoComplete="shipping address-level2" />
          </div>
          {isUs ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input type="text" placeholder={copy.state} required value={state} onChange={(e) => setState(e.target.value.toUpperCase())} className={inputClass} autoComplete="shipping address-level1" maxLength={2} />
              <input type="text" value="United States" readOnly className={`${inputClass} bg-gray-50 text-gray-500`} aria-label={copy.country} />
            </div>
          ) : (
            <input type="text" value="France" readOnly className={`${inputClass} bg-gray-50 text-gray-500`} aria-label={copy.country} />
          )}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-gray-700">{product.payment}</p>
        <PaymentElement options={{ layout: "accordion" }} />
      </div>

      {error && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full rounded-lg bg-emerald-600 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? copy.processing : `${copy.pay} ${formatMoney(priceCents, currency, locale)}`}
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>{product.secureByStripe}</span>
      </div>
    </form>
  );
}
