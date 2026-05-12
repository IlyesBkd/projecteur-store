"use client";

import { useEffect, useState } from "react";

import { Locale } from "@/lib/i18n";
import { currencyForLocale, fallbackOldPriceCents, fallbackPriceCents, formatMoney } from "@/lib/pricing";
import { productCopy } from "@/lib/site-copy";

import { CheckoutButton } from "./CheckoutButton";

type StickyCartProps = {
  locale?: Locale;
};

export function StickyCart({ locale = "fr-FR" }: StickyCartProps) {
  const [visible, setVisible] = useState(false);
  const currency = currencyForLocale(locale);
  const price = formatMoney(fallbackPriceCents(currency), currency, locale);
  const oldPrice = formatMoney(fallbackOldPriceCents(currency), currency, locale);
  const copy = productCopy[locale];

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.getElementById("hero-section");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      setVisible(window.scrollY > threshold - 80);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility);
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-200 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
      <div className="mx-auto flex w-full max-w-[1260px] items-center justify-between gap-3 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)_+_0.75rem)] sm:px-6">
        <div>
          <p className="text-sm font-semibold text-zinc-900">{copy.shortName}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 line-through">{oldPrice}</span>
            <span className="text-base font-bold text-[#e53e3e]">{price}</span>
          </div>
        </div>
        <CheckoutButton className="inline-flex items-center justify-center rounded-md bg-[#10b981] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d9467]">
          {copy.cta}
        </CheckoutButton>
      </div>
    </div>
  );
}
