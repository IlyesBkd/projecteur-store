"use client";

import { useEffect, useState } from "react";

import { BRAND, STRIPE_PAYMENT_LINK } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow ${scrolled ? "shadow-sm" : "shadow-none"}`}
    >
      <div className="mx-auto flex w-full max-w-[1260px] items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <span className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl">
          {BRAND}
        </span>

        <a
          href={STRIPE_PAYMENT_LINK}
          className="rounded-md border border-emerald-500 px-3.5 py-1.5 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
        >
          Acheter maintenant
        </a>
      </div>
    </header>
  );
}
