import { ChatWidget } from "@/components/ChatWidget";
import { CheckoutModal } from "@/components/CheckoutModal";
import { FeatureHighlightsSection } from "@/components/feature-highlights-section";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleDocument } from "@/components/LocaleDocument";
import { ProductHeroSection } from "@/components/product-hero-section";
import { ReviewsSection } from "@/components/reviews-section";
import { StickyCart } from "@/components/StickyCart";
import { Locale } from "@/lib/i18n";

type HomePageProps = {
  locale?: Locale;
};

export function HomePage({ locale = "fr-FR" }: HomePageProps) {
  return (
    <>
      <LocaleDocument locale={locale} />
      <Header locale={locale} />
      <main id="top" className="min-h-screen bg-white">
        <ProductHeroSection locale={locale} />
        <FeatureHighlightsSection locale={locale} />
        <ReviewsSection locale={locale} />
      </main>
      <Footer locale={locale} />
      <StickyCart locale={locale} />
      <CheckoutModal locale={locale} />
      <ChatWidget />
    </>
  );
}
