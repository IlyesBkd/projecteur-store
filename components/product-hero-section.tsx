import Image from "next/image";

import { OLD_PRICE, PRODUCT_PRICE } from "@/lib/constants";

import { CheckoutButton } from "./CheckoutButton";
import { TrustBadges } from "./TrustBadges";

type FeatureItem = {
  label: string;
  icon: "spark" | "sun" | "grid" | "focus" | "screen" | "audio";
};

const featureItems: FeatureItem[] = [
  { label: "Véritable 4K natif", icon: "spark" },
  { label: "800 ANSI Lumens (26.000 lumens)", icon: "sun" },
  { label: "Correction intelligente", icon: "grid" },
  { label: "Auto Focus", icon: "focus" },
  { label: "Projection jusqu'à 300\"", icon: "screen" },
  { label: "Qualité sonore optimisée", icon: "audio" },
];

function FeatureIcon({ icon }: { icon: FeatureItem["icon"] }) {
  if (icon === "spark") {
    return (
      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true">
        <path d="M12 2l2.7 5.8L21 10l-6.3 2.2L12 18l-2.7-5.8L3 10l6.3-2.2L12 2z" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "sun") {
    return (
      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.2 2.2M16.9 16.9l2.2 2.2M19.1 4.9l-2.2 2.2M7.1 16.9l-2.2 2.2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "grid") {
    return (
      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 3v18M16 3v18M3 8h18M3 16h18" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (icon === "focus") {
    return (
      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4 4l2 2M18 18l2 2M20 4l-2 2M6 18l-2 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "screen") {
    return (
      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true">
        <rect x="3" y="5" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true">
      <path d="M4 10v4M8 8v8M12 6v12M16 8v8M20 10v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ProductHeroSection() {
  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.06),transparent)]" />
      <div className="relative mx-auto w-full max-w-[1260px] px-4 pb-12 pt-8 sm:px-6 sm:pt-10 lg:px-10 lg:pb-16 lg:pt-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.13fr_0.87fr] lg:gap-12">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/product/hero-main.png"
                alt="Projecteur NexGear 4K V12 avec trépied intégré"
                width={1000}
                height={1000}
                priority
                sizes="(min-width: 1280px) 690px, (min-width: 1024px) 58vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-600/30">
              -37% Offre limitée
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={`rating-star-${index}`}
                    className="inline-flex h-5 w-5 items-center justify-center rounded-[3px] bg-[#00b67a] text-[11px] leading-none text-white"
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium text-zinc-500">2 176 avis vérifiés</p>
            </div>

            <h1 className="mt-5 font-heading text-[2rem] leading-[1.1] tracking-tight text-zinc-900 sm:text-[2.4rem] lg:text-[2.6rem]">
              Projecteur NexGear 4K V12
              <span className="mt-1 block text-[0.65em] font-medium text-zinc-500">avec trépied intégré</span>
            </h1>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-[2.4rem] font-bold leading-none tracking-tight text-zinc-900">{PRODUCT_PRICE}</span>
              <span className="text-lg text-zinc-400 line-through">{OLD_PRICE}</span>
              <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">Économisez 130€</span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-emerald-700">En stock — Expédition sous 24h</span>
            </div>

            <hr className="my-5 border-zinc-100" />

            <div className="grid grid-cols-1 gap-x-5 gap-y-2.5 text-sm text-zinc-700 sm:grid-cols-2">
              {featureItems.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2.5 leading-snug">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600">
                    <FeatureIcon icon={feature.icon} />
                  </span>
                  <span className="font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <CheckoutButton
              className="mt-7 block w-full rounded-xl bg-emerald-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Acheter maintenant — {PRODUCT_PRICE}
            </CheckoutButton>

            <TrustBadges />

            <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-[14px] leading-relaxed text-zinc-700">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">T</span>
                <div>
                  <span className="text-sm font-semibold text-zinc-900">Thierry P.</span>
                  <span className="ml-2 text-xs text-[#00b67a]">★★★★★</span>
                </div>
              </div>
              <p className="italic text-zinc-600">
                &ldquo;Ce rétroprojecteur a littéralement changé la façon dont je consomme mes contenus multimédias.
                Je l&apos;utilise pour tout : films, séries, et même pour mes présentations au travail.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
