import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { label: "Mentions légales", href: "/pages/mentions-legales" },
  { label: "CGV", href: "/pages/cgv" },
  { label: "Politique de retour", href: "/pages/politique-de-retour" },
  { label: "Politique de confidentialité", href: "/pages/politique-de-confidentialite" },
  { label: "Contact", href: "/pages/contact" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400">
      <div className="mx-auto w-full max-w-[1260px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center text-sm">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Image src="/visa.svg" alt="Visa" width={48} height={32} className="h-7 w-auto opacity-40 transition-opacity duration-300 hover:opacity-100" />
          <Image src="/mastercard.webp" alt="Mastercard" width={48} height={32} className="h-7 w-auto opacity-40 transition-opacity duration-300 hover:opacity-100" />
          <Image src="/paypal.png" alt="PayPal" width={48} height={32} className="h-7 w-auto opacity-40 transition-opacity duration-300 hover:opacity-100" />
          <Image src="/apple-pay.svg" alt="Apple Pay" width={48} height={32} className="h-7 w-auto opacity-40 transition-opacity duration-300 hover:opacity-100" />
          <Image src="/google_pay.png" alt="Google Pay" width={48} height={32} className="h-7 w-auto opacity-40 transition-opacity duration-300 hover:opacity-100" />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Image src="/logo.png" alt="NEXGEAR" width={120} height={32} className="h-8 w-auto opacity-70" />
          <p className="text-center text-xs text-gray-500">
            © 2026 NEXGEAR. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
