import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BRAND } from "@/lib/constants";
import { legalPages } from "@/lib/legal-content";

type Params = { slug: string };

export function generateStaticParams() {
  return Object.keys(legalPages).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const page = legalPages[params.slug];
  if (!page) return {};
  return { title: `${page.title} — ${BRAND}` };
}

export default function LegalPage({ params }: { params: Params }) {
  const page = legalPages[params.slug];
  if (!page) notFound();

  return (
    <>
      <Header />
      <article className="mx-auto w-full max-w-[780px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <h1 className="font-heading text-3xl font-semibold text-zinc-900 sm:text-4xl">
          {page.title}
        </h1>
        <div
          className="prose prose-zinc mt-8 max-w-none prose-headings:font-heading prose-h2:text-xl prose-h2:font-semibold prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
      </article>
      <Footer />
    </>
  );
}
