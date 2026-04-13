"use client";

import { STRIPE_PAYMENT_LINK } from "@/lib/constants";

type CheckoutButtonProps = {
  className?: string;
  children: React.ReactNode;
};

export function CheckoutButton({ className, children }: CheckoutButtonProps) {
  const handleClick = () => {
    const params = new URLSearchParams(window.location.search);

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event: "checkout_click",
        referrer: document.referrer || null,
        page: window.location.pathname,
        utm_source: params.get("utm_source") || null,
        utm_medium: params.get("utm_medium") || null,
        utm_campaign: params.get("utm_campaign") || null,
      }),
    }).catch(() => {});

    setTimeout(() => {
      window.location.href = STRIPE_PAYMENT_LINK;
    }, 150);
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
