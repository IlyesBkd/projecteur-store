"use client";

import { useEffect, useState } from "react";

import { PRODUCT_PRICE, STRIPE_PAYMENT_LINK } from "@/lib/constants";

export function StickyCart() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero-section");
      const threshold = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      setVisible(window.scrollY > threshold - 80);
    };

    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden">
      <div className="mx-auto flex w-full max-w-[1260px] items-center justify-between gap-3 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6">
        <p className="text-base font-bold text-zinc-900">{PRODUCT_PRICE}</p>
        <a
          href={STRIPE_PAYMENT_LINK}
          className="rounded-lg bg-[#10b981] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0d9467]"
        >
          Commander
        </a>
      </div>
    </div>
  );
}
