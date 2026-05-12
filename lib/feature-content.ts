import rawFeatureData from "@/feature_data.json";
import { Locale } from "@/lib/i18n";

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

const englishFeatureHighlights: FeatureHighlight[] = [
  {
    id: "4FFpHB-en",
    title: "True 4K, crisp detail.",
    descriptionHtml:
      "Built for sharp, bright, realistic viewing, the <strong>NexGear</strong> combines <strong>native 4K resolution</strong>, <strong>800 ANSI lumens</strong>, and a <strong>20,000:1 contrast ratio</strong>. HDR10 helps deepen contrast and color, so movies, sports, and games feel vivid whether you are watching at night or in a brighter room.",
    image: "/images/features/feature-1.jpeg",
    reverseOnDesktop: false,
    alt: "Projected 4K image quality from the NexGear projector",
  },
  {
    id: "QqJMNE-en",
    title: "Auto focus and keystone correction.",
    descriptionHtml:
      "No fiddly setup. The <strong>NexGear</strong> automatically adjusts focus and image alignment, even when the projector is placed off-center. With zoom from <strong>100% down to 50%</strong>, you can fit the screen to your wall without constantly moving the unit.",
    image: "/images/features/feature-2.png",
    reverseOnDesktop: true,
    alt: "NexGear projector auto focus and keystone correction",
  },
  {
    id: "eXJ8rk-en",
    title: "Foldable built-in stand.",
    descriptionHtml:
      "The integrated adjustable stand lets you change the viewing angle quickly on a table, shelf, or bedroom setup. It is stable, compact, and designed to make home theater feel easy in more spaces.",
    image: "/images/features/feature-3.png",
    reverseOnDesktop: false,
    alt: "Integrated adjustable stand on the NexGear projector",
  },
  {
    id: "QYrUyq-en",
    title: "Wi-Fi mirroring and wired WAN.",
    descriptionHtml:
      "Stream, cast, game, or join video calls on a bigger screen. The <strong>NexGear</strong> connects over Wi-Fi or wired WAN for a steadier 4K streaming experience when you want the most reliable connection.",
    image: "/images/features/feature-4.png",
    reverseOnDesktop: true,
    alt: "Wireless and wired connectivity on the NexGear projector",
  },
  {
    id: "BFbyiW-en",
    title: "Built-in entertainment apps.",
    descriptionHtml:
      "Netflix, YouTube, and other apps are ready to use, and wireless mirroring lets you cast from a phone or tablet. Your favorite content is only a few clicks away, without extra cables.",
    image: "/images/features/feature-5.png",
    reverseOnDesktop: false,
    alt: "Streaming apps available on the NexGear projector",
  },
  {
    id: "WUGbbe-en",
    title: "Project almost anywhere.",
    descriptionHtml:
      "Use the adjustable tripod, table placement, wall setup, or ceiling projection to fit your room. It is designed for movie nights, bedrooms, living rooms, and outdoor screenings.",
    image: "/images/features/feature-6.png",
    reverseOnDesktop: true,
    alt: "Flexible placement options for the NexGear projector",
  },
  {
    id: "EyTXiU-en",
    title: "Portable by design.",
    descriptionHtml:
      "At only <strong>1.8 kg</strong>, NexGear is easy to move from room to room or pack for trips. Its compact design keeps setup simple while still delivering a serious big-screen experience.",
    image: "/images/features/feature-7.jpeg",
    reverseOnDesktop: false,
    alt: "Portable NexGear projector for home and travel",
  },
];

export function getFeatureHighlights(locale: Locale): FeatureHighlight[] {
  return locale === "en-US" ? englishFeatureHighlights : featureHighlights;
}
