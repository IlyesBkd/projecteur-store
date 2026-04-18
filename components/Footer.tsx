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
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto w-full max-w-[1260px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="flex flex-col items-center gap-6">
          <Image src="/logo.png" alt="NexGear" width={120} height={32} className="h-7 w-auto brightness-0 invert opacity-60" />

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
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-gray-600">
            © 2026 NexGear. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
