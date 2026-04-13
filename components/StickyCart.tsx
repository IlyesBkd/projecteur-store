"use client";

import { useEffect, useState } from "react";

import { PRODUCT_PRICE } from "@/lib/constants";

import { CheckoutButton } from "./CheckoutButton";

export function StickyCart() {
  const [visible, setVisible] = useState(false);

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

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-200 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
      <div className="mx-auto flex w-full max-w-[1260px] items-center justify-between gap-3 px-4 py-3 pb-[calc(env(safe-area-inset-bottom)_+_0.75rem)] sm:px-6">
        <div>
          <p className="text-sm font-semibold text-zinc-900">Projecteur NEXGEAR 4K V12</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 line-through">199,99 €</span>
            <span className="text-base font-bold text-[#e53e3e]">{PRODUCT_PRICE}</span>
          </div>
        </div>
        <CheckoutButton
          className="inline-flex items-center justify-center rounded-md bg-[#10b981] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0d9467]"
        >
          Commander
        </CheckoutButton>
      </div>
    </div>
  );
}
