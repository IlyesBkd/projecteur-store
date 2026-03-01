import { featureHighlights } from "@/lib/feature-content";

import { FeatureRow } from "./feature-row";
import { WaveDivider } from "./wave-divider";

export function FeatureHighlightsSection() {
  return (
    <section
      id="features"
      aria-label="Présentation des fonctionnalités Nexgear"
      className="bg-white"
    >
      <WaveDivider />

      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_22%_0%,#1a2948_0%,#0a1220_38%,#05070f_100%)] py-14 sm:py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_20%,rgba(255,255,255,0)_82%,rgba(255,255,255,0.02)_100%)]" />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
          {featureHighlights.map((feature, index) => (
            <FeatureRow key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <WaveDivider flip />
    </section>
  );
}
