import Image from "next/image";

import type { FeatureHighlight } from "@/lib/feature-content";

import { ScrollReveal } from "./ScrollReveal";

type FeatureRowProps = {
  feature: FeatureHighlight;
  index: number;
};

export function FeatureRow({ feature, index }: FeatureRowProps) {
  const desktopImageOrder = feature.reverseOnDesktop ? "lg:order-2" : "lg:order-1";
  const desktopTextOrder = feature.reverseOnDesktop ? "lg:order-1" : "lg:order-2";

  return (
    <article
      className={`grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${
        index > 0 ? "mt-16 md:mt-20" : ""
      }`}
    >
      <ScrollReveal className={desktopImageOrder} delay={index * 100}>
        <div className="relative aspect-square overflow-hidden rounded-[18px] border border-white/10 bg-[#0a101b] shadow-[0_22px_65px_rgba(0,0,0,0.58)] ring-1 ring-white/5">
          <Image
            src={feature.image}
            alt={feature.alt}
            fill
            sizes="(min-width: 1280px) 540px, (min-width: 1024px) 45vw, (min-width: 640px) 86vw, 92vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal className={desktopTextOrder} delay={index * 100 + 120}>
        <h2 className="font-heading text-[1.45rem] leading-tight text-[#5dc8ff] sm:text-[1.75rem] lg:text-[2rem]">
          {feature.title}
        </h2>

        <div
          className="mt-4 max-w-[62ch] text-[0.99rem] leading-relaxed text-white/90 sm:text-[1.04rem] [&_strong]:font-semibold [&_strong]:text-white"
          dangerouslySetInnerHTML={{ __html: feature.descriptionHtml }}
        />
      </ScrollReveal>
    </article>
  );
}
