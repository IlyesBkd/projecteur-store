"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { Locale } from "@/lib/i18n";
import { Currency, currencyForLocale, fallbackOldPriceCents, fallbackPriceCents, formatMoney } from "@/lib/pricing";
import { checkoutCopy, productCopy } from "@/lib/site-copy";

import { CheckoutForm } from "./CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type CheckoutModalProps = {
  locale?: Locale;
};

export function CheckoutModal({ locale = "fr-FR" }: CheckoutModalProps) {
  const [open, setOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const currency = currencyForLocale(locale);
  const [priceCents, setPriceCents] = useState(fallbackPriceCents(currency));
  const [oldPriceCents, setOldPriceCents] = useState(fallbackOldPriceCents(currency));
  const copy = productCopy[locale];
  const checkout = checkoutCopy[locale];
  const priceDisplay = formatMoney(priceCents, currency, locale);
  const oldPriceDisplay = formatMoney(oldPriceCents, currency, locale);

  useEffect(() => {
    setPriceCents(fallbackPriceCents(currency));
    setOldPriceCents(fallbackOldPriceCents(currency));
    setClientSecret(null);
    setError(null);

    fetch(`/api/price?locale=${locale}`)
      .then((res) => res.json())
      .then((data: { priceCents?: number; oldPriceCents?: number }) => {
        if (data.priceCents) setPriceCents(data.priceCents);
        if (data.oldPriceCents) setOldPriceCents(data.oldPriceCents);
      })
      .catch(() => {});

    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(checkout.serverError);
        return res.json();
      })
      .then((data: { clientSecret: string; priceCents?: number; currency?: Currency }) => {
        setClientSecret(data.clientSecret);
        if (data.priceCents) setPriceCents(data.priceCents);
      })
      .catch(() => setError(checkout.loadError));
  }, [checkout.loadError, checkout.serverError, currency, locale]);

  const openModal = useCallback(() => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, closeModal]);

  useEffect(() => {
    (window as unknown as Record<string, unknown>).__openCheckout = openModal;
    return () => {
      delete (window as unknown as Record<string, unknown>).__openCheckout;
    };
  }, [openModal]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

      <div className="relative z-10 mx-4 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700"
          aria-label={copy.close}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="border-b border-gray-100 p-6">
          <h2 className="font-heading text-xl font-semibold text-gray-900">{copy.order}</h2>

          <div className="mt-4 flex gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-50">
              <Image src="/images/product/hero-main.png" alt={copy.heroAlt} fill sizes="80px" className="object-contain p-1.5" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">{copy.name}</p>
                <p className="mt-0.5 text-xs text-gray-500">{copy.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 line-through">{oldPriceDisplay}</span>
                <span className="text-base font-bold text-emerald-600">{priceDisplay}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-sm">
            <span className="text-gray-500">{copy.shippingLabel}</span>
            <span className="font-medium text-emerald-600">{copy.shippingFree}</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-base font-semibold">
            <span className="text-gray-900">{copy.total}</span>
            <span className="text-gray-900">{priceDisplay}</span>
          </div>
        </div>

        <div className="p-6">
          {error && <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}

          {!clientSecret && !error && (
            <div className="flex flex-col items-center gap-3 py-10">
              <div className="h-7 w-7 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
              <p className="text-sm text-gray-500">{copy.loading}</p>
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
                locale: locale === "en-US" ? "en" : "fr",
              }}
            >
              <CheckoutForm locale={locale} priceCents={priceCents} currency={currency} />
            </Elements>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Image src="/visa.svg" alt="Visa" width={36} height={24} className="h-5 w-auto opacity-40" />
            <Image src="/mastercard.webp" alt="Mastercard" width={36} height={24} className="h-5 w-auto opacity-40" />
            <Image src="/apple-pay.svg" alt="Apple Pay" width={36} height={24} className="h-5 w-auto opacity-40" />
            <Image src="/google_pay.png" alt="Google Pay" width={36} height={24} className="h-5 w-auto opacity-40" />
            <Image src="/paypal.png" alt="PayPal" width={36} height={24} className="h-5 w-auto opacity-40" />
          </div>
        </div>
      </div>
    </div>
  );
}
