import { Locale } from "@/lib/i18n";

export const productCopy = {
  "fr-FR": {
    name: "Projecteur NEXGEAR 4K V12",
    shortName: "Projecteur NEXGEAR 4K V12",
    subtitle: "Avec trepied integre",
    heroAlt: "Projecteur NexGear 4K V12 avec trepied integre",
    tagline: "Une experience cinema premium, directement chez vous. Avec trepied integre.",
    rating: "4.8 - 2 176 avis verifies",
    cta: "Acheter maintenant",
    save: "Economisez",
    tax: "TVA incluse",
    stock: "En stock",
    reviewQuote:
      "Ce retroprojecteur a litteralement change la facon dont je consomme mes contenus multimedia.",
    reviewAuthor: "Thierry P.",
    shippingFree: "Gratuite",
    shippingLabel: "Livraison",
    total: "Total",
    subtotal: "Sous-total",
    order: "Votre commande",
    payment: "Paiement",
    loading: "Chargement...",
    securePayment: "Paiement securise",
    secureByStripe: "Paiement securise par Stripe - Chiffre SSL 256 bits",
    close: "Fermer",
  },
  "en-US": {
    name: "NEXGEAR 4K V12 Projector",
    shortName: "NEXGEAR 4K V12",
    subtitle: "Built-in adjustable stand",
    heroAlt: "NexGear 4K V12 projector with built-in adjustable stand",
    tagline: "A premium home-theater experience with a compact built-in stand.",
    rating: "4.8 - 2,176 verified reviews",
    cta: "Buy now",
    save: "Save",
    tax: "Taxes calculated at checkout",
    stock: "In stock",
    reviewQuote:
      "This projector completely changed how I watch movies, sports, and shows at home.",
    reviewAuthor: "Taylor P.",
    shippingFree: "Free",
    shippingLabel: "Shipping",
    total: "Total",
    subtotal: "Subtotal",
    order: "Your order",
    payment: "Payment",
    loading: "Loading...",
    securePayment: "Secure payment",
    secureByStripe: "Secure payment by Stripe - 256-bit SSL encrypted",
    close: "Close",
  },
} satisfies Record<Locale, Record<string, string>>;

export const checkoutCopy = {
  "fr-FR": {
    contact: "Contact",
    shippingAddress: "Adresse de livraison",
    email: "Email *",
    phone: "Telephone",
    fullName: "Nom complet *",
    address: "Adresse *",
    postalCode: "Code postal *",
    city: "Ville *",
    state: "Region",
    country: "Pays",
    pay: "Payer",
    processing: "Traitement en cours...",
    required: "Veuillez remplir tous les champs obligatoires",
    failed: "Le paiement a echoue",
    genericError: "Une erreur est survenue",
    loadError: "Impossible de charger le formulaire de paiement",
    serverError: "Erreur serveur",
    paymentFormLoading: "Chargement du formulaire de paiement...",
    backToSite: "Retour au site",
    contactUs: "Nous contacter",
  },
  "en-US": {
    contact: "Contact",
    shippingAddress: "Shipping address",
    email: "Email *",
    phone: "Phone",
    fullName: "Full name *",
    address: "Street address *",
    postalCode: "ZIP code *",
    city: "City *",
    state: "State *",
    country: "Country",
    pay: "Pay",
    processing: "Processing...",
    required: "Please complete all required fields",
    failed: "Payment failed",
    genericError: "Something went wrong",
    loadError: "Unable to load the payment form",
    serverError: "Server error",
    paymentFormLoading: "Loading payment form...",
    backToSite: "Back to site",
    contactUs: "Contact us",
  },
} satisfies Record<Locale, Record<string, string>>;

export const trustBadgesCopy = {
  "fr-FR": [
    { label: "Livraison gratuite", sub: "48-72h" },
    { label: "Garantie 2 ans", sub: "incluse" },
    { label: "Retour 30 jours", sub: "satisfait ou rembourse" },
  ],
  "en-US": [
    { label: "Free US shipping", sub: "tracked delivery" },
    { label: "2-year warranty", sub: "included" },
    { label: "30-day returns", sub: "simple returns" },
  ],
} satisfies Record<Locale, { label: string; sub: string }[]>;

export const seoCopy = {
  "fr-FR": {
    title: "NexGear - Projecteur 4K Professionnel",
    description:
      "Decouvrez le projecteur NexGear 4K V12. Qualite 4K native, 800 ANSI Lumens, livraison offerte. Le meilleur projecteur pour votre home cinema.",
  },
  "en-US": {
    title: "NexGear - Professional 4K Projector",
    description:
      "Discover the NexGear 4K V12 projector with native 4K clarity, 800 ANSI lumens, free US shipping, and secure checkout in USD.",
  },
} satisfies Record<Locale, { title: string; description: string }>;
