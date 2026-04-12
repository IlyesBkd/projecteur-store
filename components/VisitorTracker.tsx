"use client";

import { useEffect } from "react";

export function VisitorTracker() {
  useEffect(() => {
    const alreadyTracked = sessionStorage.getItem("tracked");
    if (alreadyTracked) return;

    const params = new URLSearchParams(window.location.search);

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        referrer: document.referrer || null,
        page: window.location.pathname,
        utm_source: params.get("utm_source") || null,
        utm_medium: params.get("utm_medium") || null,
        utm_campaign: params.get("utm_campaign") || null,
      }),
    }).catch(() => {});

    sessionStorage.setItem("tracked", "1");
  }, []);

  return null;
}
