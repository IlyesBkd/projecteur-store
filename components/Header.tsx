"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Locale, localeLabels, pathForLocale } from "@/lib/i18n";

type HeaderProps = {
  locale?: Locale;
};

export function Header({ locale = "fr-FR" }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setLocaleCookie = (nextLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <header
      className={`sticky top-0 z-40 animate-header-slide-in transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 shadow-sm backdrop-blur-md"
          : "bg-gray-900 shadow-none"
      }`}
    >
      <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-3.5">
          <span />
          <Link href={pathForLocale("/", locale)} className="flex items-center">
            <Image src="/logo.png" alt="NexGear" width={120} height={32} className="h-auto w-[120px] brightness-0 invert" />
          </Link>
          <div className="flex justify-end">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 p-0.5 text-xs font-semibold text-white">
              {(["fr-FR", "en-US"] as Locale[]).map((item) => (
                <Link
                  key={item}
                  href={pathForLocale(pathname, item)}
                  onClick={() => setLocaleCookie(item)}
                  className={`rounded-full px-2.5 py-1 transition ${
                    item === locale ? "bg-white text-gray-900" : "text-white/75 hover:text-white"
                  }`}
                  hrefLang={item}
                >
                  {localeLabels[item]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
