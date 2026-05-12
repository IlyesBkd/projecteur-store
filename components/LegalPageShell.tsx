import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Locale } from "@/lib/i18n";
import { getLegalPages } from "@/lib/legal-content";

type LegalPageShellProps = {
  locale?: Locale;
  slug: string;
};

export function LegalPageShell({ locale = "fr-FR", slug }: LegalPageShellProps) {
  const pageContent = getLegalPages(locale)[slug];

  if (!pageContent) notFound();

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen bg-white">
        <article className="mx-auto max-w-3xl px-4 py-20 md:px-8">
          <h1 className="font-heading text-3xl font-bold text-zinc-900 sm:text-4xl">{pageContent.title}</h1>
          <p className="mt-3 text-sm text-gray-400">
            {locale === "en-US" ? "Last updated: March 1, 2026" : "Derniere mise a jour : 1er mars 2026"}
          </p>
          <div
            className="prose prose-gray mt-10 max-w-none prose-headings:font-heading prose-headings:font-semibold prose-headings:text-zinc-900 prose-h2:mt-10 prose-h2:text-2xl prose-h3:mt-8 prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700 prose-li:text-gray-700 prose-li:leading-relaxed prose-ul:my-4 prose-ol:my-4 prose-strong:text-zinc-900"
            dangerouslySetInnerHTML={{ __html: pageContent.content }}
          />
        </article>
      </main>
      <Footer locale={locale} />
    </>
  );
}
