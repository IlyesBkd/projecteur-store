import { Locale } from "@/lib/i18n";

import { ScrollReveal } from "./ScrollReveal";

type Review = {
  name: string;
  date?: string;
  rating: number;
  content: string;
};

const reviews: Record<Locale, Review[]> = {
  "fr-FR": [
    {
      name: "Margaret J.",
      date: "Aujourd'hui",
      rating: 5,
      content:
        "Ce projecteur m'a tout simplement bluffe.\nLa projection sans fil est fluide, et la correction automatique du trapeze change completement l'experience.",
    },
    {
      name: "Lucas T.",
      date: "Il y a 2 jours",
      rating: 5,
      content:
        "La qualite d'image est incroyable, meme en pleine journee. Je l'ai utilise pour Netflix comme pour des presentations professionnelles.",
    },
    {
      name: "Sophie L.",
      date: "Il y a 4 jours",
      rating: 4,
      content:
        "L'image est nette, les couleurs sont eclatantes, et il s'est connecte a mon telephone en quelques secondes.",
    },
    {
      name: "John M.",
      date: "La semaine derniere",
      rating: 5,
      content:
        "Le son est suffisamment puissant et l'installation a pris moins de deux minutes. Excellent rapport qualite-prix.",
    },
    {
      name: "Alex H.",
      date: "Il y a 2 semaines",
      rating: 5,
      content:
        "Installation simple, streaming 4K fluide, luminosite excellente meme dans une piece pas totalement sombre.",
    },
    {
      name: "Will K.",
      rating: 5,
      content:
        "Les couleurs sont vives et l'image reste nette sur un grand ecran. Parfait pour les soirees cinema.",
    },
  ],
  "en-US": [
    {
      name: "Margaret J.",
      date: "Today",
      rating: 5,
      content:
        "This projector genuinely surprised me.\nWireless casting is smooth, and automatic keystone correction makes setup almost effortless.",
    },
    {
      name: "Lucas T.",
      date: "2 days ago",
      rating: 5,
      content:
        "The picture quality is excellent even during the day. I use it for streaming and work presentations, and it handles both really well.",
    },
    {
      name: "Sophie L.",
      date: "4 days ago",
      rating: 4,
      content:
        "The image is sharp, colors are bright, and it connected to my phone in seconds. It feels like a compact theater at home.",
    },
    {
      name: "John M.",
      date: "Last week",
      rating: 5,
      content:
        "Setup took less than two minutes, and the built-in sound is stronger than I expected. Great value.",
    },
    {
      name: "Alex H.",
      date: "2 weeks ago",
      rating: 5,
      content:
        "Easy setup, smooth 4K streaming, and strong brightness even in a room that is not fully dark.",
    },
    {
      name: "Will K.",
      rating: 5,
      content:
        "Colors are vivid and the picture stays crisp on a big screen. It is perfect for movie nights.",
    },
  ],
};

const sectionCopy = {
  "fr-FR": {
    badge: "4.8/5 - 2 176 avis verifies",
    title: "Ce que nos clients disent",
    subtitle: "Plus de 2 000 clients satisfaits a travers la France.",
    verified: "Verifie",
    ratingLabel: "Note",
  },
  "en-US": {
    badge: "4.8/5 - 2,176 verified reviews",
    title: "What customers are saying",
    subtitle: "Trusted by more than 2,000 home-theater customers.",
    verified: "Verified",
    ratingLabel: "Rating",
  },
} satisfies Record<Locale, Record<string, string>>;

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="mt-4 flex items-center gap-0.5" aria-label={`${label} ${rating}/5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={`review-star-${index}`} viewBox="0 0 24 24" className={`h-4 w-4 ${index < rating ? "text-[#f2c300]" : "text-zinc-300"}`} aria-hidden="true">
          <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, locale }: { review: Review; locale: Locale }) {
  const copy = sectionCopy[locale];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-zinc-200/60">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-white">
          {review.name.charAt(0)}
        </span>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-zinc-900">{review.name}</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              {copy.verified}
            </span>
          </div>
          {review.date ? <p className="text-xs text-zinc-400">{review.date}</p> : null}
        </div>
      </div>

      <Stars rating={review.rating} label={copy.ratingLabel} />
      <p className="mt-3 flex-1 whitespace-pre-line text-[0.94rem] leading-[1.7] text-zinc-600">{review.content}</p>
    </article>
  );
}

type ReviewsSectionProps = {
  locale?: Locale;
};

export function ReviewsSection({ locale = "fr-FR" }: ReviewsSectionProps) {
  const copy = sectionCopy[locale];

  return (
    <section id="reviews" className="bg-gradient-to-b from-white to-gray-50 py-14 sm:py-18 lg:py-20">
      <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              {copy.badge}
            </div>
            <h2 className="mt-5 text-center font-heading text-3xl font-semibold tracking-normal text-zinc-900 sm:text-4xl">{copy.title}</h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-base leading-relaxed text-zinc-500">{copy.subtitle}</p>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews[locale].map((review, index) => (
            <ScrollReveal key={review.name} delay={index * 80}>
              <ReviewCard review={review} locale={locale} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
