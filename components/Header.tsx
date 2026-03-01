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
      className={`sticky top-0 z-40 bg-white transition-shadow ${scrolled ? "shadow-sm" : "shadow-none"}`}
    >
      <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="NEXGEAR" width={120} height={32} className="h-8 w-auto" />
          </Link>

          <a
            href={STRIPE_PAYMENT_LINK}
            className="inline-flex items-center rounded-md border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
          >
            Acheter maintenant
          </a>
        </div>
      </div>
    </header>
  );
}
