import Image from "next/image";

import { PRODUCT_PRICE, STRIPE_PAYMENT_LINK } from "@/lib/constants";

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
    <section id="hero-section" className="bg-white">
      <div className="mx-auto w-full max-w-[1260px] px-4 pb-10 pt-6 sm:px-6 sm:pt-8 lg:px-10 lg:pb-14 lg:pt-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.13fr_0.87fr] lg:gap-10">
          <div>
            <Image
              src="/images/product/hero-main.png"
              alt="Projecteur NEXGEAR 4K V12 avec trépied intégré"
              width={1000}
              height={1000}
              priority
              sizes="(min-width: 1280px) 690px, (min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full rounded-[10px]"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 text-[#00b67a]">
              <div className="flex items-center gap-1 text-[13px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={`rating-star-${index}`}
                    className="inline-flex h-4 w-4 items-center justify-center rounded-[2px] bg-[#00b67a] text-[10px] leading-none text-white"
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium text-zinc-500">(2176 Avis)</p>
            </div>

            <h1 className="mt-4 max-w-[18ch] font-heading text-[2.15rem] leading-[1.08] text-zinc-800 sm:text-[2.4rem] lg:text-[2.7rem]">
              Projecteur NEXGEAR 4K V12 avec trépied intégré
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-xl text-gray-400 line-through">199,99 €</span>
              <span className="text-[2.15rem] font-bold leading-none text-[#e53e3e]">{PRODUCT_PRICE}</span>
              <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-600">-35%</span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-zinc-700 sm:grid-cols-2 sm:text-[15px]">
              {featureItems.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2.5 leading-snug">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-300 text-zinc-700">
                    <FeatureIcon icon={feature.icon} />
                  </span>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>

            <a
              href={STRIPE_PAYMENT_LINK}
              className="mt-6 block w-full rounded-[6px] bg-[#1c9854] py-3 text-center text-[1.4rem] font-semibold uppercase tracking-[0.02em] text-white transition hover:bg-[#167a43]"
            >
              Acheter maintenant
            </a>

            <TrustBadges />

            <div className="mt-6 rounded-xl bg-zinc-100 p-3.5 text-[14px] leading-relaxed text-zinc-700">
              <p>
                Ce rétroprojecteur a littéralement changé la façon dont je consomme mes contenus multimédias.
                Je l&apos;utilise pour tout : films, séries, et même pour mes présentations au travail.
              </p>
              <div className="mt-2.5 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Thierry P.</span>
                <span className="text-[#00b67a]">★★★★★</span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
