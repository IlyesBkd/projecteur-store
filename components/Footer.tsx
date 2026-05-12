import Image from "next/image";
import Link from "next/link";

import { Locale, legalPath } from "@/lib/i18n";

const legalLinks = {
  "fr-FR": [
    { label: "Mentions legales", slug: "mentions-legales" },
    { label: "CGV", slug: "cgv" },
    { label: "Politique de retour", slug: "politique-de-retour" },
    { label: "Politique de confidentialite", slug: "politique-de-confidentialite" },
    { label: "Contact", slug: "contact" },
  ],
  "en-US": [
    { label: "Legal notice", slug: "mentions-legales" },
    { label: "Terms", slug: "cgv" },
    { label: "Returns", slug: "politique-de-retour" },
    { label: "Privacy", slug: "politique-de-confidentialite" },
    { label: "Contact", slug: "contact" },
  ],
} satisfies Record<Locale, { label: string; slug: string }[]>;

type FooterProps = {
  locale?: Locale;
};

export function Footer({ locale = "fr-FR" }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto w-full max-w-[1260px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="flex flex-col items-center gap-6">
          <Image src="/logo.png" alt="NexGear" width={120} height={32} className="h-auto w-[120px] brightness-0 invert opacity-60" />

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Image src="/visa.svg" alt="Visa" width={40} height={28} className="h-6 w-auto opacity-30 transition-opacity hover:opacity-60" />
            <Image src="/mastercard.webp" alt="Mastercard" width={40} height={28} className="h-6 w-auto opacity-30 transition-opacity hover:opacity-60" />
            <Image src="/paypal.png" alt="PayPal" width={40} height={28} className="h-6 w-auto opacity-30 transition-opacity hover:opacity-60" />
            <Image src="/apple-pay.svg" alt="Apple Pay" width={40} height={28} className="h-6 w-auto opacity-30 transition-opacity hover:opacity-60" />
            <Image src="/google_pay.png" alt="Google Pay" width={40} height={28} className="h-6 w-auto opacity-30 transition-opacity hover:opacity-60" />
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            {legalLinks[locale].map((link) => (
              <Link key={link.slug} href={legalPath(locale, link.slug)} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-600">
            {locale === "en-US" ? "© 2026 NexGear. All rights reserved." : "© 2026 NexGear. Tous droits reserves."}
          </p>
        </div>
      </div>
    </footer>
  );
}
