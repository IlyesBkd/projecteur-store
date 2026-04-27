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
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-[#fafaf7] via-white to-white">
      {/* Subtle decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1260px] px-4 pb-16 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pb-20 lg:pt-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Product image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-100 to-zinc-50 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]">
              <div className="overflow-hidden rounded-[20px] bg-white">
                <Image
                  src="/images/product/hero-main.png"
                  alt="Projecteur NexGear 4K V12 avec trépied intégré"
                  width={1000}
                  height={1000}
                  priority
                  sizes="(min-width: 1280px) 640px, (min-width: 1024px) 55vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:pt-4">
            {/* Title - serif premium */}
            <h1 className="font-heading text-[2.4rem] font-medium leading-[1.05] tracking-[-0.02em] text-zinc-900 sm:text-[2.8rem] lg:text-[3.1rem]">
              Projecteur <em className="font-light italic text-emerald-700">NexGear</em>
              <span className="block">4K V12</span>
            </h1>
            <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-500">
              Une expérience cinéma premium, directement chez vous. Avec trépied intégré.
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={`star-${index}`} viewBox="0 0 24 24" className="h-4 w-4 text-amber-400" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-zinc-500">
                <strong className="font-semibold text-zinc-700">4.8</strong> · 2 176 avis vérifiés
              </span>
            </div>

            {/* Price block */}
            <div className="mt-7 rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-white to-zinc-50/50 p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-[3rem] font-medium leading-none tracking-tight text-zinc-900">
                      {PRODUCT_PRICE}
                    </span>
                    <span className="text-base text-zinc-400 line-through">{OLD_PRICE}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-700">
                      Économisez 130€
                    </span>
                    <span className="text-zinc-500">TVA incluse</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-700">En stock</span>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="mt-7 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
              {featureItems.map((feature) => (
                <div key={feature.label} className="group flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors group-hover:bg-emerald-600">
                    <FeatureIcon icon={feature.icon} />
                  </span>
                  <span className="text-sm font-medium text-zinc-800">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <CheckoutButton
              className="group relative mt-8 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-zinc-900 py-4 text-center text-base font-semibold text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 hover:bg-emerald-700 hover:shadow-[0_15px_45px_-10px_rgba(16,185,129,0.5)] hover:-translate-y-0.5"
            >
              <span>Acheter maintenant — {PRODUCT_PRICE}</span>
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </CheckoutButton>

            <TrustBadges />

            {/* Premium testimonial */}
            <figure className="mt-8 border-l-2 border-emerald-600 pl-5">
              <blockquote>
                <p className="font-heading text-lg italic leading-relaxed text-zinc-700">
                  &ldquo;Ce rétroprojecteur a littéralement changé la façon dont je consomme mes contenus multimédias.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-xs font-bold text-white">T</span>
                <div className="text-sm">
                  <span className="font-semibold text-zinc-900">Thierry P.</span>
                  <span className="ml-2 text-xs text-amber-500">★★★★★</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
