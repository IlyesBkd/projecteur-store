const introParagraphs = [
  "Les projecteurs d’aujourd’hui ne se limitent plus à projeter une image : ils sont devenus de véritables appareils intelligents. La plupart se connectent facilement à un smartphone, une tablette ou un ordinateur en Wi-Fi ou Bluetooth, ce qui permet de diffuser films, séries ou présentations en un instant, sans câbles ni complications.",
  "Autre avantage : leur design est désormais plus compact et léger. On peut les emporter partout — pour une soirée cinéma à la maison, une présentation pro, un week-end entre amis ou même une projection en plein air.",
  "C’est d’ailleurs pour cette polyvalence que de plus en plus de Français se tournent vers les vidéoprojecteurs.",
  "Mais une question revient souvent : 👉 comment choisir le bon modèle ? 👉 quels sont les vrais critères à regarder avant d’acheter ? 👉 et surtout, quel budget faut-il prévoir pour avoir une belle qualité d’image sans se ruiner ?",
  "J’ai passé plusieurs semaines à comparer, tester et analyser les meilleurs modèles du moment afin de créer ce guide d’achat clair et honnête — pour vous aider à trouver le projecteur qui correspond vraiment à vos besoins.",
];

const criteriaList = [
  "La qualité d’image (résolution et luminosité)",
  "Le son intégré",
  "La connectivité et la compatibilité",
  "La portabilité et la facilité d’installation",
  "L’autonomie et la durée de vie de la lampe",
];

const avoidList = [
  "Les projecteurs de 1080p et moins.",
  "Encombrant à utiliser",
  "Les modèles avec faible luminosité (< 2 500 lumens)",
  "Les projecteurs sans correction trapézoïdale ou focus auto",
  "Prix exagérés",
];

const products = [
  {
    id: 1,
    badge: "/projecteur-lp/badge-1.png",
    name: "NEXGEAR V12 4K",
    price: "169€",
    grade: "A+",
    productImage: "/projecteur-lp/product-nexgear.png",
    scoreImage: "/projecteur-lp/scores-top1.png",
    ratingLabel: "Note Globale",
    ratingImage: "/projecteur-lp/rating-9-9.png",
    ratingCaption: "Basé sur plus de 50 000 avis",
    originalPrice: "249€",
    expertTitle: "Avis d'expert :",
    advantages: [
      "✅ Assemblage et conditionnement en France",
      "✅ Qualité d’image 4K impressionnante",
      "✅ Technologie de réduction de lumière bleue",
      "✅ Prise en charge du partage d'écran de téléphone mobile sans fil",
      "✅ Mise au point automatique",
      "✅ Correction trapézoïdale très efficace",
      "✅ Plateforme smart intégrée (Google TV), Netflix, Disney+, Prime video ...",
      "✅ Excellent rapport qualité/prix",
    ],
    disadvantages: [
      "❌ Disponible uniquement en ligne",
      "❌ Très demandé, souvent en rupture de stock",
    ],
    description:
      "Parmi tous les modèles que nous avons testés cette année, le NEXGEAR s’est rapidement imposé comme l’une des plus belles découvertes. Dès la première prise en main, on ressent une vraie qualité de fabrication : matériaux agréables, finitions soignées et conception solide. Mais le plus impressionnant reste la qualité d’image. L’objectif offre une excellente clarté et une transmission lumineuse précise, avec des couleurs vives et naturelles. Autre atout notable : sa technologie de réduction de lumière bleue, rarement présente dans cette gamme de prix. Résultat : une image nette et confortable pour les yeux, même lors de longues séances cinéma. 4K réelle, le NEXGEAR séduit par sa reproduction fidèle des couleurs et sa facilité d’utilisation. La mise au point automatique, la correction trapézoïdale et son interface simple permettent une installation rapide, sans réglages compliqués. Idéal pour : - Créer une véritable expérience cinéma à la maison — que ce soit dans le salon, la chambre ou sur la terrasse. - Regarder Netflix, Prime Video ou YouTube en grand format, sans perte de qualité. - Jouer sur console ou PC avec une image fluide et des couleurs immersives. - Projeter des présentations ou contenus professionnels, grâce à sa clarté d’image et sa compatibilité universelle. - Emporter le projecteur en week-end ou en extérieur, grâce à son format compact et sa facilité d’installation. Et tout cela, pour un prix bien inférieur à celui des grandes marques. C’est ce parfait équilibre entre performance, design et accessibilité qui lui vaut sa première place dans notre sélection 2026.",
    editorialTip:
      "💡 Astuce de la rédaction : En cliquant sur notre lien ci-dessous, une remise de 20% s'applique souvent automatiquement sur leur site officiel selon les périodes.",
  },
  {
    id: 2,
    badge: "/projecteur-lp/badge-2.png",
    name: "Dangbei Atom",
    price: "719€",
    grade: "A",
    productImage: "/projecteur-lp/product-dangbei.jpg",
    scoreImage: "/projecteur-lp/scores-top3.png",
    ratingLabel: "Note Globale",
    ratingImage: "/projecteur-lp/rating-9-2.png",
    advantages: [
      "✅ L’interface VIDAA",
      "✅ Portabilité",
      "✅ Longue durée de vie de la lampe",
      "✅ Connectivité polyvalente",
    ],
    disadvantages: [
      "❌ Un produit onéreux",
      "❌ Durée de vie limitée de la batterie",
      "❌ Qualité sonore",
      "❌ Contraste et noirs limités",
      "❌ Réglages automatiques imparfaits",
    ],
  },
  {
    id: 3,
    badge: "/projecteur-lp/badge-3.png",
    name: "LG CineBeam Q",
    price: "799€",
    grade: "B",
    productImage: "/projecteur-lp/product-lg.png",
    scoreImage: "/projecteur-lp/scores-top4.png",
    ratingLabel: "Note Globale",
    ratingImage: "/projecteur-lp/rating-8-7.png",
    advantages: [
      "✅ Image 4K avec source laser RGB",
      "✅ Installation simple — “place & play”",
      "✅ Compact, élégant et bien conçu",
      "✅ Mode de décalage d'entrée faible",
    ],
    disadvantages: [
      "❌ Luminosité trop limitée pour usage en lumière ambiante",
      "❌ Pas de prise en charge 4K",
      "❌ Haut-parleur mono très faible",
      "❌ Prix élevé pour un projecteur ultra-portable",
      "❌ Télécommande peu pratique",
    ],
  },
  {
    id: 4,
    badge: "/projecteur-lp/badge-4.png",
    name: "Formovie Xming Page One",
    price: "399€",
    grade: "B",
    productImage: "/projecteur-lp/product-formovie.png",
    scoreImage: "/projecteur-lp/scores-top5.png",
    ratingLabel: "Note Globale",
    ratingImage: "/projecteur-lp/rating-8-3.png",
    advantages: [
      "✅ Compact et simple à installer",
      "✅ La fluidité des mouvements",
      "✅ Google TV et Netflix intégrés",
    ],
    disadvantages: [
      "❌ Niveaux de noir et contraste",
      "❌ Décalage d'entrée",
      "❌ Calibrage des couleurs",
      "❌ Niveaux de bruit",
      "❌ Fuite de lumière",
    ],
  },
  {
    id: 5,
    badge: "/projecteur-lp/badge-5.png",
    name: "BenQ MW560 WXGA DLP",
    price: "389€",
    grade: "B-",
    productImage: "/projecteur-lp/product-benq.jpg",
    scoreImage: "/projecteur-lp/scores-top3.png",
    ratingLabel: "Rating",
    ratingImage: "/projecteur-lp/rating-7-8.png",
    advantages: [
      "✅ Définition Full HD 1080p",
      "✅ Diagonale image : 1 m à 3 m",
      "✅ Correction automatique",
    ],
    disadvantages: [
      "❌ Limites de luminosité",
      "❌ Performances au niveau du noir",
      "❌ Zoom et décalage d'objectif limités",
      "❌ Consommation électrique élevée",
    ],
  },
];

type Product = (typeof products)[number];

function ProductCard({ product }: { product: Product }) {
  const isNexgear = product.id === 1;
  return (
    <article className="relative rounded-[32px] border border-zinc-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)] md:p-10">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <img
          src={product.badge}
          alt={`Badge classement ${product.name}`}
          className="h-16 w-16 object-contain md:h-20 md:w-20"
        />
      </div>
      <div className="pt-10">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-2xl font-bold uppercase tracking-tight text-zinc-900 md:text-3xl">
            {product.name}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
              {product.grade}
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="flex items-center justify-center rounded-2xl bg-zinc-50 p-4">
            <img
              src={product.productImage}
              alt={product.name}
              className="h-56 w-auto object-contain md:h-64"
            />
          </div>
          <div className="space-y-5">
            <img
              src={product.scoreImage}
              alt={`Scores ${product.name}`}
              className="w-full max-w-md"
            />
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase text-zinc-700">
                {product.ratingLabel}
              </p>
              <img
                src={product.ratingImage}
                alt={`Note ${product.name}`}
                className="h-10 w-auto"
              />
              {product.ratingCaption ? (
                <p className="text-xs text-zinc-500">{product.ratingCaption}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-center">
                {isNexgear && product.originalPrice ? (
                  <div className="mb-2">
                    <span className="line-through text-gray-400 text-lg">{product.originalPrice}</span>
                    <span className="text-2xl font-bold text-orange-600 ml-2">{product.price}</span>
                  </div>
                ) : (
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                  </div>
                )}
              </div>
              <a
                className={`rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600 ${
                  isNexgear ? "hover:shadow-xl hover:scale-[1.02]" : ""
                }`}
                href="#"
              >
                Vérifier le prix sur le site officiel
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {product.expertTitle ? (
            <h4 className="text-lg font-bold text-zinc-900">{product.expertTitle}</h4>
          ) : null}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="text-sm font-semibold uppercase text-emerald-700">Avantages</p>
              <ul className="mt-3 space-y-2 text-sm text-emerald-900">
                {product.advantages.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-rose-50 p-4">
              <p className="text-sm font-semibold uppercase text-rose-600">Inconvénients</p>
              <ul className="mt-3 space-y-2 text-sm text-rose-900">
                {product.disadvantages.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {product.description ? (
            <p className="text-sm leading-relaxed text-zinc-700">{product.description}</p>
          ) : null}
          {product.editorialTip ? (
            <div className="bg-blue-50 p-3 rounded-md text-sm leading-relaxed text-zinc-700">
              {product.editorialTip}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-10 pt-8 sm:px-6">
        <img
          src="/projecteur-lp/avisconso.avif"
          alt="Avis Conso"
          className="h-10 w-auto"
        />
        <div className="space-y-2">
          <h1 className="text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
            5 Meilleurs Vidéoprojecteurs Testés 2026
          </h1>
          <p className="text-base font-semibold text-zinc-700 md:text-lg">
            Nous avons testé plus de 30 modèles pour identifier les 5 meilleurs Vidéoprojecteurs…
          </p>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <img
              src="/projecteur-lp/author-david.jpg"
              alt="David Quentin"
              className="h-20 w-20 rounded-full border-4 border-white object-cover shadow"
            />
            <div className="space-y-1">
              <div className="flex items-center flex-wrap">
                <p className="text-lg font-semibold">David Quentin</p>
                <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-0.5 rounded-full ml-2">✓ Testeur Certifié</span>
              </div>
              <p className="text-sm text-zinc-600">
                David, 34 ans, ingénieur de formation, aime passer ses soirées à regarder des films comme au cinéma. Il recherche des appareils à la fois performants et faciles à utiliser, capables de transformer son salon en vraie salle de projection.
              </p>
              <p className="text-sm text-gray-500">Mis à jour le 26 Février 2026</p>
            </div>
          </div>
        </div>
        <a
          className="text-center text-sm font-semibold text-blue-600"
          href="#classement"
        >
          ↓ Cliquez ici pour défiler jusqu’au classement ↓
        </a>
        <img
          src="/projecteur-lp/hero-projector.jpg"
          alt="Projection cinéma à la maison"
          className="h-56 w-full rounded-2xl object-cover shadow-lg md:h-72"
        />
        <div className="space-y-4 text-sm leading-relaxed text-zinc-700">
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="text-lg font-bold uppercase text-emerald-900">
              Que faut-il rechercher ?
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-emerald-900">
              {criteriaList.map((item) => (
                <li key={item} className="leading-relaxed">
                  ✅ {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-5">
            <h3 className="text-lg font-bold uppercase text-rose-700">À éviter :</h3>
            <ul className="mt-3 space-y-2 text-sm text-rose-900">
              {avoidList.map((item) => (
                <li key={item} className="leading-relaxed">
                  ❌ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-zinc-700">
          Après avoir passé des mois à tester différents modèles — du mini projecteur portable au home cinéma complet — j’ai enfin pu établir ma sélection finale des meilleurs projecteurs 2026, ceux qui méritent vraiment votre attention.
        </p>
        <a
          id="classement"
          className="rounded-full bg-blue-600 px-6 py-4 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-200"
          href="#classement"
        >
          LES 5 MEILLEURS VIDEOPROJECTEURS DE 2026
        </a>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 pb-20 pt-6 sm:px-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
