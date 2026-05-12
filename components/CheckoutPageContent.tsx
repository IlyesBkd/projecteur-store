"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CheckoutForm } from "@/components/CheckoutForm";
import { homePath, Locale } from "@/lib/i18n";
import { currencyForLocale, fallbackOldPriceCents, fallbackPriceCents, formatMoney } from "@/lib/pricing";
import { checkoutCopy, productCopy } from "@/lib/site-copy";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type CheckoutPageContentProps = {
  locale?: Locale;
};

export function CheckoutPageContent({ locale = "fr-FR" }: CheckoutPageContentProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const currency = currencyForLocale(locale);
  const [priceCents, setPriceCents] = useState(fallbackPriceCents(currency));
  const [oldPriceCents, setOldPriceCents] = useState(fallbackOldPriceCents(currency));
  const product = productCopy[locale];
  const checkout = checkoutCopy[locale];
  const price = formatMoney(priceCents, currency, locale);
  const oldPrice = formatMoney(oldPriceCents, currency, locale);

  useEffect(() => {
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
      .then((data: { clientSecret: string; priceCents?: number }) => {
        setClientSecret(data.clientSecret);
        if (data.priceCents) setPriceCents(data.priceCents);
      })
      .catch(() => setError(checkout.loadError));
  }, [checkout.loadError, checkout.serverError, locale]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href={homePath(locale)}>
            <Image src="/logo.png" alt="NEXGEAR" width={120} height={32} className="h-auto w-[120px]" />
          </Link>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>{product.securePayment}</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h1 className="font-heading text-2xl font-semibold text-gray-900 sm:text-3xl">{product.order}</h1>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <Image src="/images/product/hero-main.png" alt={product.heroAlt} fill sizes="96px" className="object-contain p-2" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="font-heading text-base font-semibold text-gray-900">{product.name}</h2>
                    <p className="mt-1 text-sm text-gray-500">{product.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
                    <span className="text-lg font-bold text-emerald-600">{price}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3 rounded-xl border border-gray-200 bg-white p-5">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{product.subtotal}</span>
                <span>{price}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{product.shippingLabel}</span>
                <span className="font-medium text-emerald-600">{product.shippingFree}</span>
              </div>
              <div className="border-t border-gray-100 pt-3">
                <div className="flex justify-between text-base font-semibold text-gray-900">
                  <span>{product.total}</span>
                  <span>{price}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-2xl font-semibold text-gray-900 sm:text-3xl">{product.payment}</h2>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
              {error && <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}

              {!clientSecret && !error && (
                <div className="flex flex-col items-center gap-4 py-12">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
                  <p className="text-sm text-gray-500">{checkout.paymentFormLoading}</p>
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
