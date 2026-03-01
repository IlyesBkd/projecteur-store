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
    <article className="rounded-[14px] border border-zinc-300 bg-[#efefef] p-6 shadow-[0_4px_10px_rgba(0,0,0,0.06)] sm:p-7">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d9d9d9] text-[1.45rem] font-semibold text-zinc-600">
          {review.name.charAt(0)}
        </span>

        <div>
          <h3 className="font-heading text-[1.48rem] leading-none text-zinc-900">{review.name}</h3>
          {review.date ? <p className="mt-1 text-sm text-zinc-500">{review.date}</p> : null}
        </div>
      </div>

      <Stars rating={review.rating} />

      <p className="mt-4 whitespace-pre-line text-[1.04rem] leading-[1.7] text-zinc-800">{review.content}</p>
    </article>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-[#ebebeb] py-8 sm:py-12 lg:py-14">
      <div className="mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
