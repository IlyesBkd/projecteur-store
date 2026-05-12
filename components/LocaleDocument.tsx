"use client";

import { useEffect } from "react";

import { Locale } from "@/lib/i18n";

type LocaleDocumentProps = {
  locale: Locale;
};

export function LocaleDocument({ locale }: LocaleDocumentProps) {
  useEffect(() => {
    document.documentElement.lang = locale === "en-US" ? "en-US" : "fr";
  }, [locale]);

  return null;
}
