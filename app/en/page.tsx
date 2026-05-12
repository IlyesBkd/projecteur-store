import type { Metadata } from "next";

import { HomePage } from "@/components/HomePage";
import { seoCopy } from "@/lib/site-copy";

export const metadata: Metadata = {
  title: seoCopy["en-US"].title,
  description: seoCopy["en-US"].description,
  alternates: {
    canonical: "/en",
    languages: {
      "fr-FR": "/",
      "en-US": "/en",
    },
  },
};

export default function EnglishHome() {
  return <HomePage locale="en-US" />;
}
