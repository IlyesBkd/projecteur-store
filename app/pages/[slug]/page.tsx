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

export default function LegalPage({ params }: PageProps) {
  const pageContent = legalPages[params.slug];

  if (!pageContent) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <article className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <h1 className="font-heading text-3xl font-bold text-zinc-900 sm:text-4xl">
            {pageContent.title}
          </h1>
          <div
            className="prose prose-zinc mt-8 max-w-none prose-headings:font-heading prose-headings:font-semibold prose-h2:mt-8 prose-h2:text-2xl prose-h3:mt-6 prose-h3:text-xl prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700 prose-ul:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: pageContent.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
