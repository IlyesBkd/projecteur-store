import { ScrollReveal } from "./ScrollReveal";

type Review = {
  name: string;
  date?: string;
  rating: number;
  content: string;
};

const reviews: Review[] = [
  {
    name: "Margaret J.",
    date: "Aujourd'hui",
    rating: 5,
    content:
      "Ce projecteur m’a tout simplement bluffé.\nJ’ai déjà essayé plusieurs modèles à petit prix, mais aucun n’arrive à la cheville de celui-ci.\nLa projection sans fil est fluide, et la correction automatique du trapèze change complètement l’expérience.",
  },
  {
    name: "Lucas T.",
    date: "Il y a 2 jours",
    rating: 5,
    content:
      "La qualité d’image est incroyable, même en pleine journée — je ne m’y attendais pas du tout.\nJe l’ai utilisé aussi bien pour des marathons Netflix que pour des présentations professionnelles, et il s’en sort à merveille.\nUltra polyvalent et compact, c’est devenu mon projecteur préféré !",
  },
  {
    name: "Sophie L.",
    date: "Il y a 4 jours",
    rating: 4,
    content:
      "Honnêtement, je ne m’attendais pas à ce que ce projecteur soit aussi performant.\nL’image est nette, les couleurs éclatantes, et il s’est connecté à mon téléphone en quelques secondes.\nOn a vraiment l’impression d’avoir un cinéma à la maison, directement dans la chambre.",
  },
  {
    name: "John M.",
    date: "La semaine dernière",
    rating: 5,
    content:
      "Totalement convaincu !\nLe son est suffisamment puissant pour se passer d’enceintes externes, et l’installation a pris moins de deux minutes.\nPour ce prix-là, c’est de loin le meilleur projecteur que j’aie jamais eu.",
  },
  {
    name: "Alex H.",
    date: "Il y a 2 semaines",
    rating: 5,
    content:
      "Ce projecteur a largement dépassé mes attentes.\nL’installation est simple et rapide, le streaming en 4K est d’une fluidité impressionnante, et la luminosité est excellente, même dans une pièce pas totalement sombre.\nUn achat que je ne regrette absolument pas — il vaut vraiment l’investissement.",
  },
  {
    name: "Will K.",
    rating: 5,
    content:
      "Je suis époustouflé par la qualité d’image de ce projecteur 4K.\nLes couleurs sont vives, et l’image reste parfaitement nette, même sur un grand écran.\nC’est parfait pour les soirées cinéma — on a vraiment l’impression d’avoir le cinéma à la maison.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="mt-4 flex items-center gap-0.5" aria-label={`Note ${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={`review-star-${index}`}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${index < rating ? "text-[#f2c300]" : "text-zinc-300"}`}
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
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
              Vérifié
            </span>
          </div>
          {review.date ? <p className="text-xs text-zinc-400">{review.date}</p> : null}
        </div>
      </div>

      <Stars rating={review.rating} />

      <p className="mt-3 flex-1 whitespace-pre-line text-[0.94rem] leading-[1.7] text-zinc-600">{review.content}</p>
    </article>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-white to-gray-50 py-14 sm:py-18 lg:py-20">
      <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              4.8/5 — 2 176 avis vérifiés
            </div>
            <h2 className="mt-5 text-center font-heading text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Ce que nos clients disent
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-base leading-relaxed text-zinc-500">
              Plus de 2 000 clients satisfaits à travers la France.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.name} delay={index * 80}>
              <ReviewCard review={review} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
