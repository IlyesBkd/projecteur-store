import Image from "next/image";
import { RefreshCw, ShieldCheck, Truck } from "lucide-react";

const badges = [
  { label: "Livraison Gratuite (48/72h)", icon: Truck },
  { label: "Garantie 2 ans incluse", icon: ShieldCheck },
  { label: "Satisfait ou Remboursé 30 jours", icon: RefreshCw },
];

export function TrustBadges() {
  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Image src="/visa.svg" alt="Visa" width={48} height={32} className="h-8 w-auto" />
        <Image src="/mastercard.webp" alt="Mastercard" width={48} height={32} className="h-8 w-auto" />
        <Image src="/apple-pay.svg" alt="Apple Pay" width={48} height={32} className="h-8 w-auto" />
        <Image src="/google_pay.png" alt="Google Pay" width={48} height={32} className="h-8 w-auto" />
        <Image src="/paypal.png" alt="PayPal" width={48} height={32} className="h-8 w-auto" />
      </div>

      <div className="mt-6 grid gap-4 text-center text-gray-800 sm:grid-cols-3">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div key={badge.label} className="flex flex-col items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
