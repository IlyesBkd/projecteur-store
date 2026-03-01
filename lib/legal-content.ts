import { BRAND } from "./constants";

export type LegalPage = {
  title: string;
  html: string;
};

export const legalPages: Record<string, LegalPage> = {
  "mentions-legales": {
    title: "Mentions légales",
    html: `
      <h2>Éditeur du site</h2>
      <p>${BRAND} — SAS au capital de 1 000 €<br/>
      Siège social : [Adresse à compléter]<br/>
      RCS : [Numéro à compléter]<br/>
      TVA intracommunautaire : [Numéro à compléter]<br/>
      Directeur de la publication : [Nom à compléter]</p>

      <h2>Hébergement</h2>
      <p>Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>

      <h2>Propriété intellectuelle</h2>
      <p>L'ensemble du contenu de ce site (textes, images, logos) est protégé par le droit d'auteur. Toute reproduction est interdite sans autorisation préalable.</p>
    `,
  },
  cgv: {
    title: "Conditions Générales de Vente",
    html: `
      <h2>Article 1 — Objet</h2>
      <p>Les présentes CGV régissent les ventes de produits ${BRAND} effectuées sur ce site.</p>

      <h2>Article 2 — Prix</h2>
      <p>Les prix sont indiqués en euros TTC. ${BRAND} se réserve le droit de modifier ses prix à tout moment.</p>

      <h2>Article 3 — Commande</h2>
      <p>Toute commande passée sur le site constitue un contrat de vente entre l'acheteur et ${BRAND}.</p>

      <h2>Article 4 — Paiement</h2>
      <p>Le paiement s'effectue par carte bancaire via la plateforme sécurisée Stripe.</p>

      <h2>Article 5 — Livraison</h2>
      <p>La livraison est effectuée en 48/72h ouvrées en France métropolitaine. Les frais de livraison sont offerts.</p>
    `,
  },
  "politique-de-retour": {
    title: "Politique de retour",
    html: `
      <h2>Droit de rétractation</h2>
      <p>Conformément à la législation européenne, vous disposez d'un délai de 30 jours à compter de la réception de votre commande pour nous retourner le produit.</p>

      <h2>Conditions de retour</h2>
      <p>Le produit doit être retourné dans son emballage d'origine, en parfait état, accompagné de tous ses accessoires.</p>

      <h2>Remboursement</h2>
      <p>Le remboursement sera effectué sous 14 jours ouvrés après réception et vérification du produit retourné, via le même moyen de paiement utilisé lors de la commande.</p>
    `,
  },
  "politique-de-confidentialite": {
    title: "Politique de confidentialité",
    html: `
      <h2>Données collectées</h2>
      <p>Nous collectons les données nécessaires au traitement de votre commande : nom, prénom, adresse e-mail, adresse de livraison, informations de paiement (traitées par Stripe).</p>

      <h2>Utilisation des données</h2>
      <p>Vos données sont utilisées uniquement pour le traitement de vos commandes et l'amélioration de nos services. Elles ne sont jamais revendues à des tiers.</p>

      <h2>Cookies</h2>
      <p>Ce site utilise des cookies techniques nécessaires à son fonctionnement ainsi que des cookies d'analyse anonymes.</p>

      <h2>Vos droits</h2>
      <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à [email à compléter].</p>
    `,
  },
  contact: {
    title: "Contact",
    html: `
      <h2>Nous contacter</h2>
      <p>Pour toute question relative à votre commande, un produit ou une demande de partenariat, contactez-nous :</p>

      <p><strong>Email :</strong> [email à compléter]<br/>
      <strong>Délai de réponse :</strong> sous 24 à 48h ouvrées.</p>

      <p>Nous nous engageons à vous répondre dans les meilleurs délais.</p>
    `,
  },
};
