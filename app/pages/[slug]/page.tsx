import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { legalPages } from "@/lib/legal-content";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageContent = legalPages[params.slug];
  if (!pageContent) return {};
  return {
    title: `${pageContent.title} | NEX-GEN`,
    description: pageContent.title,
  };
}

export default function LegalPage({ params }: PageProps) {
  const pageContent = legalPages[params.slug];

  if (!pageContent) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <article className="mx-auto max-w-3xl px-4 py-20 md:px-8">
          <h1 className="font-heading text-3xl font-bold text-zinc-900 sm:text-4xl">
            {pageContent.title}
          </h1>
          <p className="mt-3 text-sm text-gray-400">
            Dernière mise à jour : 1er mars 2026
          </p>
          <div
            className="prose prose-gray mt-10 max-w-none prose-headings:font-heading prose-headings:font-semibold prose-headings:text-zinc-900 prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700 prose-li:text-gray-700 prose-li:leading-relaxed prose-ul:my-4 prose-ol:my-4 prose-strong:text-zinc-900"
            dangerouslySetInnerHTML={{ __html: pageContent.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
