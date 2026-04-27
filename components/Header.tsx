"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
        <div className="flex items-center justify-center py-3.5">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="NexGear" width={120} height={32} className="h-8 w-auto brightness-0 invert" />
          </Link>
        </div>
      </div>
    </header>
  );
}
