import Link from "next/link";

import { BRAND } from "@/lib/constants";

const legalLinks = [
  { label: "Mentions légales", href: "/pages/mentions-legales" },
  { label: "CGV", href: "/pages/cgv" },
  { label: "Politique de retour", href: "/pages/politique-de-retour" },
  { label: "Politique de confidentialité", href: "/pages/politique-de-confidentialite" },
  { label: "Contact", href: "/pages/contact" },
];

function FooterVisaSvg() {
  return (
    <svg viewBox="0 0 780 500" className="h-6" aria-label="Visa">
      <path
        d="M293.2 348.7l33.4-195.7h53.4l-33.4 195.7h-53.4zm246.8-190.6c-10.6-4-27.2-8.3-47.9-8.3-52.8 0-90 26.6-90.2 64.7-.3 28.2 26.5 43.9 46.8 53.3 20.8 9.6 27.8 15.8 27.7 24.4-.1 13.2-16.6 19.2-32 19.2-21.4 0-32.7-3-50.3-10.2l-6.9-3.1-7.5 43.8c12.5 5.5 35.6 10.2 59.6 10.5 56.1 0 92.5-26.3 92.9-67 .2-22.3-14-39.3-44.8-53.3-18.7-9.1-30.1-15.1-30-24.3 0-8.1 9.7-16.8 30.6-16.8 17.5-.3 30.1 3.5 40 7.5l4.8 2.3 7.2-42.7zm138.4-5.1h-41.3c-12.8 0-22.4 3.5-28 16.3l-79.4 179.7h56.1l11.2-29.4h68.5l6.5 29.4h49.5l-43.1-196zm-65.8 126.4c4.4-11.3 21.5-54.7 21.5-54.7-.3.5 4.4-11.4 7.1-18.8l3.6 17s10.3 47.2 12.5 57.1h-44.7v-.6zM249.5 153L197 291.6l-5.6-27.3c-9.8-31.5-40.3-65.6-74.5-82.7l47.8 171h56.5l84.1-199.6h-55.8z"
        fill="#9ca3af"
      />
      <path
        d="M146.9 153H60.1l-.7 3.5c67 16.2 111.4 55.3 129.8 102.3L171 172.6c-3-12.4-12.8-16-24.1-19.6z"
        fill="#6b7280"
      />
    </svg>
  );
}

function FooterMastercardSvg() {
  return (
    <svg viewBox="0 0 780 500" className="h-6" aria-label="Mastercard">
      <circle cx="312" cy="250" r="170" fill="#6b7280" />
      <circle cx="468" cy="250" r="170" fill="#9ca3af" />
      <path
        d="M390 113.4c-45.4 35.7-74.5 91.4-74.5 153.6s29.1 117.9 74.5 153.6c45.4-35.7 74.5-91.4 74.5-153.6S435.4 149.1 390 113.4z"
        fill="#4b5563"
      />
    </svg>
  );
}

function FooterAmexSvg() {
  return (
    <svg viewBox="0 0 780 500" className="h-6" aria-label="Amex">
      <rect width="780" height="500" rx="40" fill="#9ca3af" />
      <text
        x="390"
        y="290"
        textAnchor="middle"
        fill="#0a0a0a"
        fontSize="160"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        AMEX
      </text>
    </svg>
  );
}

function FooterApplePaySvg() {
  return (
    <svg viewBox="0 0 165 40" className="h-6" aria-label="Apple Pay">
      <path
        d="M21.3 10.5c-1.2 1.4-3.2 2.5-5.1 2.4-.2-1.9.7-3.9 1.8-5.2 1.2-1.4 3.3-2.4 5-2.5.2 2-.6 4-1.7 5.3zm1.7 2.7c-2.8-.2-5.2 1.6-6.5 1.6s-3.4-1.5-5.6-1.5c-2.9 0-5.5 1.7-7 4.2-3 5.1-.8 12.7 2.1 16.9 1.4 2.1 3.1 4.3 5.3 4.3 2.1-.1 2.9-1.4 5.5-1.4 2.5 0 3.2 1.4 5.4 1.3 2.3 0 3.7-2.1 5.1-4.2 1.6-2.4 2.3-4.7 2.3-4.8 0 0-4.4-1.7-4.5-6.7 0-4.2 3.4-6.2 3.6-6.3-2-2.9-5-3.2-6.1-3.4h.4z"
        fill="#9ca3af"
      />
      <path
        d="M57.4 7.5c7.3 0 12.4 5 12.4 12.4 0 7.4-5.2 12.4-12.6 12.4h-8.1v12.9H43V7.5h14.4zm-8.3 19.9h6.7c5.1 0 8-2.7 8-7.5s-2.9-7.5-8-7.5h-6.7v15zm29.5-3.5c0-4.8 3.7-7.8 10.3-8.2l7.6-.4v-2.2c0-3.1-2.1-4.9-5.5-4.9-3.3 0-5.3 1.6-5.8 4h-5.8c.3-5.2 4.6-9 11.8-9 6.9 0 11.4 3.7 11.4 9.4v19.6H97l-.5-4.7h-.1c-1.7 3.2-5.4 5.2-9.4 5.2-5.8 0-9.9-3.6-9.9-8.8h1.5zm17.9-2.4v-2.6l-6.8.4c-3.4.2-5.4 1.8-5.4 4.3 0 2.4 2 4.1 5.1 4.1 4.1 0 7.1-2.8 7.1-6.2zm14.2 21.7v-5c.4.1 1.4.1 1.8.1 2.6 0 4-1.1 4.9-3.8l.5-1.6-11.3-31.3h6.5l8.2 26.1h.1l8.2-26.1h6.3l-11.7 33c-2.7 7.5-5.7 9.9-12.1 9.9-.4 0-1.4-.1-1.8-.2l.4-.1z"
        fill="#9ca3af"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400">
      <div className="mx-auto w-full max-w-[1260px] px-4 py-10 sm:px-6 lg:px-10">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
          <FooterVisaSvg />
          <FooterMastercardSvg />
          <FooterAmexSvg />
          <FooterApplePaySvg />
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          © 2026 {BRAND}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
