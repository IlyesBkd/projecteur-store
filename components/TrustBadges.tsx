import Image from "next/image";
import { RefreshCw, ShieldCheck, Truck } from "lucide-react";

const badges = [
  { label: "Livraison Gratuite", sub: "48-72h", icon: Truck },
  { label: "Garantie 2 ans", sub: "incluse", icon: ShieldCheck },
  { label: "Retour 30 jours", sub: "satisfait ou remboursé", icon: RefreshCw },
];

export function TrustBadges() {
  return (
    <div className="mt-6 space-y-5">
      <div className="grid grid-cols-3 gap-2">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div key={badge.label} className="flex flex-col items-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-2 py-3 text-center">
              <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              <span className="text-xs font-semibold text-zinc-800">{badge.label}</span>
              <span className="text-[10px] text-zinc-500">{badge.sub}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 opacity-60">
        <Image src="/visa.svg" alt="Visa" width={40} height={28} className="h-6 w-auto" />
        <Image src="/mastercard.webp" alt="Mastercard" width={40} height={28} className="h-6 w-auto" />
        <Image src="/apple-pay.svg" alt="Apple Pay" width={40} height={28} className="h-6 w-auto" />
        <Image src="/google_pay.png" alt="Google Pay" width={40} height={28} className="h-6 w-auto" />
        <Image src="/paypal.png" alt="PayPal" width={40} height={28} className="h-6 w-auto" />
      </div>
    </div>
  );
}
