import Image from "next/image";
import Link from "next/link";

import { homePath, Locale } from "@/lib/i18n";
import { currencyForLocale, fallbackPriceCents, formatMoney } from "@/lib/pricing";
import { checkoutCopy, productCopy } from "@/lib/site-copy";

type SuccessPageContentProps = {
  locale?: Locale;
};

const copy = {
  "fr-FR": {
    confirmed: "Commande confirmee",
    accepted: "Paiement accepte",
    prep: "Preparation",
    prepDesc: "Sous 24h",
    shipping: "Expedition",
    shippingDesc: "Livraison 48-72h",
    thanks: "Merci pour votre commande !",
    email: "Un email de confirmation a ete envoye avec les details de votre commande.",
    tracking: "Suivi de commande",
  },
  "en-US": {
    confirmed: "Order confirmed",
    accepted: "Payment accepted",
    prep: "Preparation",
    prepDesc: "Within 24 hours",
    shipping: "Shipping",
    shippingDesc: "Tracked delivery",
    thanks: "Thanks for your order!",
    email: "A confirmation email has been sent with your order details.",
    tracking: "Order status",
  },
} satisfies Record<Locale, Record<string, string>>;

export function SuccessPageContent({ locale = "fr-FR" }: SuccessPageContentProps) {
  const product = productCopy[locale];
  const checkout = checkoutCopy[locale];
  const currency = currencyForLocale(locale);
  const price = formatMoney(fallbackPriceCents(currency), currency, locale);
  const page = copy[locale];
  const steps = [
    { label: page.confirmed, desc: page.accepted, done: true },
    { label: page.prep, desc: page.prepDesc, done: false },
    { label: page.shipping, desc: page.shippingDesc, done: false },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-400/5 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <Image src="/logo.png" alt="NexGear" width={120} height={32} className="mb-10 h-auto w-[120px] opacity-40" />

        <div className="w-full max-w-lg">
          <div className="rounded-3xl border border-gray-200/80 bg-white/80 p-8 shadow-xl shadow-gray-200/40 backdrop-blur-sm sm:p-10">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/20" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30">
                  <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="mt-7 text-center font-heading text-3xl font-semibold tracking-normal text-gray-900">{page.thanks}</h1>
            <p className="mt-3 text-center text-base leading-relaxed text-gray-500">{page.email}</p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white">
                <Image src="/images/product/hero-main.png" alt={product.heroAlt} fill sizes="64px" className="object-contain p-1" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                <p className="mt-0.5 text-xs text-gray-500">{product.subtitle}</p>
                <p className="mt-1 text-sm font-bold text-emerald-600">{price}</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-400">{page.tracking}</p>
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${step.done ? "bg-emerald-600 text-white" : "border-2 border-gray-200 bg-white text-gray-400"}`}>
                        {step.done ? (
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
                        ) : (
                          <span className="text-xs font-semibold">{i + 1}</span>
                        )}
                      </div>
                      {i < steps.length - 1 && <div className={`w-0.5 flex-1 ${step.done ? "bg-emerald-300" : "bg-gray-200"}`} style={{ minHeight: 24 }} />}
                    </div>
                    <div className="pb-6">
                      <p className={`text-sm font-semibold ${step.done ? "text-gray-900" : "text-gray-400"}`}>{step.label}</p>
                      <p className="text-xs text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href={homePath(locale)} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gray-800">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              {checkout.backToSite}
            </Link>
            <a href="mailto:contact@nexgear.fr" className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" /></svg>
              {checkout.contactUs}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
