import { Metadata } from "next";

import { LegalPageShell } from "@/components/LegalPageShell";
import { getLegalPages } from "@/lib/legal-content";

type PageProps = {
  params: {
    slug: string;
  };
};

const legalPages = getLegalPages("en-US");

export async function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageContent = legalPages[params.slug];
  if (!pageContent) return {};

  return {
    title: `${pageContent.title} | NEXGEAR`,
    description: pageContent.title,
  };
}

export default function EnglishLegalPage({ params }: PageProps) {
  return <LegalPageShell locale="en-US" slug={params.slug} />;
}
