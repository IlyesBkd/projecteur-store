import { Locale } from "@/lib/i18n";

export type LegalPageContent = {
  title: string;
  content: string;
};

type LegalPageMap = Record<string, LegalPageContent>;

const frPages: LegalPageMap = {
  "mentions-legales": {
    title: "Mentions legales",
    content: `
      <h2>Editeur du site</h2>
      <p>Le present site est edite par <strong>NEX-GEN E-Commerce</strong>, micro-entreprise situee a Paris, France. Email : <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a>.</p>
      <h2>Hebergement</h2>
      <p>Le site est heberge par <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
      <h2>Propriete intellectuelle</h2>
      <p>Les textes, images, logos, graphismes et contenus du site sont proteges. Toute reproduction non autorisee est interdite.</p>
      <h2>Droit applicable</h2>
      <p>Les presentes mentions legales sont regies par le droit francais.</p>
    `,
  },
  cgv: {
    title: "Conditions generales de vente",
    content: `
      <h2>Objet</h2>
      <p>Les presentes conditions encadrent les ventes du projecteur NEXGEAR 4K V12 sur ce site.</p>
      <h2>Prix</h2>
      <p>Les prix affiches en France sont indiques en euros. Les visiteurs americains peuvent voir et payer en dollars US lorsque la version anglaise du site est utilisee.</p>
      <h2>Commande et paiement</h2>
      <p>Le paiement est traite de maniere securisee par Stripe. Aucune donnee bancaire n'est stockee par NEX-GEN E-Commerce.</p>
      <h2>Livraison</h2>
      <p>La livraison est offerte lorsque cette mention est affichee au checkout. Les delais sont indicatifs et peuvent varier selon le pays de destination.</p>
      <h2>Retours</h2>
      <p>Le client dispose de 30 jours apres reception pour demander un retour, sous reserve que le produit soit complet et en bon etat.</p>
    `,
  },
  "politique-de-retour": {
    title: "Politique de retour",
    content: `
      <h2>Retour sous 30 jours</h2>
      <p>Vous pouvez demander un retour dans les 30 jours suivant la reception du produit.</p>
      <h2>Conditions</h2>
      <p>Le produit doit etre retourne complet, dans son emballage d'origine, sans dommage lie a une utilisation anormale.</p>
      <h2>Procedure</h2>
      <p>Contactez <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a> avec votre numero de commande avant tout renvoi.</p>
      <h2>Remboursement</h2>
      <p>Le remboursement est effectue sur le moyen de paiement initial apres reception et verification du retour.</p>
    `,
  },
  "politique-de-confidentialite": {
    title: "Politique de confidentialite",
    content: `
      <h2>Donnees collectees</h2>
      <p>Nous collectons les informations necessaires a la commande : nom, email, telephone, adresse de livraison et informations de suivi.</p>
      <h2>Paiement</h2>
      <p>Les paiements sont traites par Stripe. Nous ne stockons pas vos informations bancaires.</p>
      <h2>Utilisation</h2>
      <p>Les donnees servent uniquement a traiter les commandes, livrer les colis, gerer le service client et respecter nos obligations legales.</p>
      <h2>Vos droits</h2>
      <p>Vous pouvez nous contacter a <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a> pour demander l'acces, la rectification ou la suppression de vos donnees.</p>
    `,
  },
  contact: {
    title: "Contact",
    content: `
      <h2>Nous contacter</h2>
      <p>Pour toute question concernant nos produits, commandes ou retours, contactez notre equipe.</p>
      <h3>Email</h3>
      <p><a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a></p>
      <h3>Adresse postale</h3>
      <p>NEX-GEN E-Commerce<br>15 Rue de la Republique<br>75001 Paris, France</p>
    `,
  },
};

const enPages: LegalPageMap = {
  "mentions-legales": {
    title: "Legal notice",
    content: `
      <h2>Publisher</h2>
      <p>This website is published by <strong>NEX-GEN E-Commerce</strong>, based in Paris, France. Email: <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a>.</p>
      <h2>Hosting</h2>
      <p>The site is hosted by <strong>Vercel Inc.</strong>, 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
      <h2>Intellectual property</h2>
      <p>Text, images, logos, graphics, and site content are protected. Unauthorized reproduction is prohibited.</p>
      <h2>Governing law</h2>
      <p>This notice is governed by French law unless mandatory consumer rules state otherwise.</p>
    `,
  },
  cgv: {
    title: "Terms of sale",
    content: `
      <h2>Scope</h2>
      <p>These terms apply to purchases of the NEXGEAR 4K V12 projector through this website.</p>
      <h2>Prices</h2>
      <p>US visitors may view and pay in USD on the English version of the site. French visitors continue to see EUR pricing.</p>
      <h2>Orders and payment</h2>
      <p>Payments are processed securely by Stripe. NEX-GEN E-Commerce does not store card details.</p>
      <h2>Shipping</h2>
      <p>Free shipping applies when shown at checkout. Delivery times are estimates and may vary by destination.</p>
      <h2>Returns</h2>
      <p>You may request a return within 30 days after delivery, provided the product is complete and in good condition.</p>
      <h2>Taxes</h2>
      <p>Applicable taxes may be calculated during checkout depending on the destination and Stripe configuration.</p>
    `,
  },
  "politique-de-retour": {
    title: "Returns policy",
    content: `
      <h2>30-day returns</h2>
      <p>You can request a return within 30 days after receiving your product.</p>
      <h2>Conditions</h2>
      <p>The product must be returned complete, in its original packaging, and without damage caused by abnormal use.</p>
      <h2>How to start a return</h2>
      <p>Email <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a> with your order number before shipping anything back.</p>
      <h2>Refunds</h2>
      <p>Refunds are issued to the original payment method after the returned product is received and inspected.</p>
    `,
  },
  "politique-de-confidentialite": {
    title: "Privacy policy",
    content: `
      <h2>Data we collect</h2>
      <p>We collect the information needed to process your order: name, email, phone, shipping address, and order tracking details.</p>
      <h2>Payments</h2>
      <p>Payments are handled by Stripe. We do not store card details.</p>
      <h2>Use of data</h2>
      <p>Data is used to process orders, ship products, support customers, and meet legal obligations.</p>
      <h2>Your rights</h2>
      <p>Contact <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a> to request access, correction, or deletion of your personal data.</p>
    `,
  },
  contact: {
    title: "Contact",
    content: `
      <h2>Contact us</h2>
      <p>For product, order, shipping, or return questions, contact our support team.</p>
      <h3>Email</h3>
      <p><a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a></p>
      <h3>Postal address</h3>
      <p>NEX-GEN E-Commerce<br>15 Rue de la Republique<br>75001 Paris, France</p>
    `,
  },
};

export const legalPages = frPages;

export function getLegalPages(locale: Locale): LegalPageMap {
  return locale === "en-US" ? enPages : frPages;
}
