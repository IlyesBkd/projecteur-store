import rawFeatureData from "@/feature_data.json";

export type FeatureHighlight = {
  id: string;
  title: string;
  descriptionHtml: string;
  image: string;
  reverseOnDesktop: boolean;
  alt: string;
};

const parsedFeatureData = rawFeatureData as FeatureHighlight[];

export const featureHighlights: FeatureHighlight[] = parsedFeatureData;
