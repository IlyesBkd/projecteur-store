"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { STRIPE_PAYMENT_LINK } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 animate-header-slide-in transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 shadow-sm backdrop-blur-md"
          : "bg-gray-900 shadow-none"
      }`}
    >
      <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-3.5">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="NEXGEAR" width={120} height={32} className="h-8 w-auto brightness-0 invert" />
          </Link>

          <a
            href={STRIPE_PAYMENT_LINK}
            className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:shadow-emerald-500/40"
          >
            Acheter maintenant
          </a>
        </div>
      </div>
    </header>
  );
}
