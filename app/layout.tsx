import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NEX-GEN — Projecteur 4K Professionnel",
  description: "Découvrez le projecteur NEXGEAR 4K V12. Qualité 4K native, 800 ANSI Lumens, livraison offerte. Le meilleur projecteur pour votre home cinéma.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} bg-white font-body text-zinc-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
