export type LegalPageContent = {
  title: string;
  content: string;
};

export const legalPages: Record<string, LegalPageContent> = {
  "mentions-legales": {
    title: "Mentions Légales",
    content: `
      <h2>Éditeur du site</h2>
      <p>NEXGEAR<br>
      [Adresse complète à compléter]<br>
      Email : contact@nexgear.fr<br>
      Téléphone : [À compléter]</p>

      <h2>Hébergement</h2>
      <p>Ce site est hébergé par [Nom de l'hébergeur]<br>
      [Adresse de l'hébergeur]</p>

      <h2>Propriété intellectuelle</h2>
      <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
    `,
  },
  cgv: {
    title: "Conditions Générales de Vente",
    content: `
      <h2>Article 1 - Objet</h2>
      <p>Les présentes Conditions Générales de Vente (CGV) régissent les ventes de projecteurs NEXGEAR effectuées sur ce site.</p>

      <h2>Article 2 - Prix</h2>
      <p>Les prix sont indiqués en euros TTC. NEXGEAR se réserve le droit de modifier ses prix à tout moment, étant toutefois entendu que le prix figurant au catalogue le jour de la commande sera le seul applicable à l'acheteur.</p>

      <h2>Article 3 - Commandes</h2>
      <p>Toute commande passée sur le site vaut acceptation des prix et descriptions des produits disponibles à la vente. La vente ne sera considérée comme définitive qu'après l'envoi à l'acheteur de la confirmation de l'acceptation de la commande par NEXGEAR.</p>

      <h2>Article 4 - Paiement</h2>
      <p>Le paiement s'effectue via Stripe Checkout. Les moyens de paiement acceptés sont : carte bancaire, Apple Pay, Google Pay.</p>

      <h2>Article 5 - Livraison</h2>
      <p>Les produits sont livrés en France métropolitaine sous 48 à 72 heures ouvrées. Les frais de livraison sont offerts.</p>
    `,
  },
  "politique-de-retour": {
    title: "Politique de Retour",
    content: `
      <h2>Droit de rétractation</h2>
      <p>Conformément à l'article L221-18 du Code de la consommation, vous disposez d'un délai de 30 jours à compter de la réception de votre commande pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.</p>

      <h2>Modalités de retour</h2>
      <p>Pour retourner un produit, veuillez nous contacter à l'adresse : contact@nexgear.fr. Le produit doit être retourné dans son emballage d'origine, en parfait état, avec tous ses accessoires.</p>

      <h2>Remboursement</h2>
      <p>Le remboursement sera effectué dans un délai de 14 jours suivant la réception du produit retourné, par le même moyen de paiement que celui utilisé lors de la commande.</p>

      <h2>Garantie</h2>
      <p>Tous nos projecteurs bénéficient d'une garantie constructeur de 2 ans couvrant les défauts de fabrication.</p>
    `,
  },
  "politique-de-confidentialite": {
    title: "Politique de Confidentialité",
    content: `
      <h2>Collecte des données</h2>
      <p>NEXGEAR collecte vos données personnelles uniquement dans le cadre du traitement de vos commandes : nom, prénom, adresse de livraison, adresse email, numéro de téléphone.</p>

      <h2>Utilisation des données</h2>
      <p>Vos données sont utilisées exclusivement pour :</p>
      <ul>
        <li>Le traitement et la livraison de vos commandes</li>
        <li>La gestion de la relation client</li>
        <li>L'envoi d'informations relatives à votre commande</li>
      </ul>

      <h2>Protection des données</h2>
      <p>Vos données sont stockées de manière sécurisée et ne sont jamais vendues à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p>

      <h2>Cookies</h2>
      <p>Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site et au traitement des paiements via Stripe.</p>
    `,
  },
  contact: {
    title: "Contact",
    content: `
      <h2>Nous contacter</h2>
      <p>Pour toute question concernant nos produits, vos commandes ou notre service client, vous pouvez nous joindre par :</p>

      <h3>Email</h3>
      <p><a href="mailto:contact@nexgear.fr" class="text-emerald-600 hover:text-emerald-700">contact@nexgear.fr</a></p>

      <h3>Téléphone</h3>
      <p>[Numéro à compléter]<br>
      Du lundi au vendredi de 9h à 18h</p>

      <h3>Adresse postale</h3>
      <p>NEXGEAR<br>
      [Adresse complète à compléter]</p>

      <h2>Délai de réponse</h2>
      <p>Nous nous engageons à répondre à toutes vos demandes sous 24 à 48 heures ouvrées.</p>
    `,
  },
};
