import { FeatureHighlightsSection } from "@/components/feature-highlights-section";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductHeroSection } from "@/components/product-hero-section";
import { ReviewsSection } from "@/components/reviews-section";
import { StickyCart } from "@/components/StickyCart";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="min-h-screen bg-white">
        <ProductHeroSection />
        <FeatureHighlightsSection />
        <ReviewsSection />
      </main>
      <Footer />
      <StickyCart />
    </>
  );
}
