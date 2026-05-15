import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";

import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { seoCopy } from "@/lib/site-copy";

import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nexgear.fr"),
  title: seoCopy["fr-FR"].title,
  description: seoCopy["fr-FR"].description,
  alternates: {
    languages: {
      "fr-FR": "/",
      "en-US": "/en",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable} bg-white font-body text-zinc-900 antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
