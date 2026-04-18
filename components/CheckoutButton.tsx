"use client";

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

    const openCheckout = (window as unknown as Record<string, unknown>).__openCheckout;
    if (typeof openCheckout === "function") {
      (openCheckout as () => void)();
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
