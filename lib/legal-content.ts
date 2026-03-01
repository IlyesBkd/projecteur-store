export type LegalPageContent = {
  title: string;
  content: string;
};

export const legalPages: Record<string, LegalPageContent> = {
  "mentions-legales": {
    title: "Mentions Légales",
    content: `
      <h2>Éditeur du site</h2>
      <p>
        Le présent site est édité par :<br>
        <strong>NEX-GEN E-Commerce</strong> — Micro-entreprise<br>
        SIRET : 123 456 789 00012<br>
        Siège social : 15 Rue de la République, 75001 Paris, France<br>
        Email : <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a><br>
      </p>
      <p>Directeur de la publication : le représentant légal de NEX-GEN E-Commerce.</p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par :<br>
        <strong>Vercel Inc.</strong><br>
        340 S Lemon Ave #4133, Walnut, CA 91789, USA<br>
        Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments présents sur ce site (textes, images, logos, vidéos, graphismes, icônes, sons, logiciels, etc.) sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication, transmission, ou dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite sans l'autorisation écrite préalable de NEX-GEN E-Commerce.
      </p>
      <p>
        Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
      </p>

      <h2>Responsabilité</h2>
      <p>
        NEX-GEN E-Commerce s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
      </p>
      <p>
        Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
      </p>

      <h2>Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens hypertextes vers d'autres sites internet. NEX-GEN E-Commerce ne dispose d'aucun moyen pour contrôler le contenu de ces sites tiers et n'assume aucune responsabilité quant à leur contenu.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
      </p>
    `,
  },

  cgv: {
    title: "Conditions Générales de Vente",
    content: `
      <h2>Article 1 — Objet</h2>
      <p>
        Les présentes Conditions Générales de Vente (ci-après "CGV") régissent l'ensemble des ventes conclues par l'intermédiaire du site internet exploité par NEX-GEN E-Commerce (micro-entreprise), dont le siège social est situé au 15 Rue de la République, 75001 Paris, France, immatriculée sous le numéro SIRET 123 456 789 00012.
      </p>
      <p>
        Toute commande passée sur le site implique l'acceptation pleine et entière des présentes CGV par le client. Ces conditions prévaudront sur toute autre condition figurant dans tout autre document, sauf dérogation expresse et écrite.
      </p>

      <h2>Article 2 — Prix</h2>
      <p>
        Les prix de nos produits sont indiqués en euros, toutes taxes comprises (TTC). Le prix du Projecteur NEXGEAR 4K est de <strong>129,99 € TTC</strong>, livraison incluse pour la France métropolitaine.
      </p>
      <p>
        NEX-GEN E-Commerce se réserve le droit de modifier ses prix à tout moment. Toutefois, le prix figurant sur le site au jour de la validation de la commande par le client sera le seul applicable.
      </p>

      <h2>Article 3 — Commandes</h2>
      <p>
        Le client passe commande sur le site internet en cliquant sur le bouton "Acheter maintenant". Il est ensuite redirigé vers la page de paiement sécurisée Stripe où il renseigne ses informations de livraison et de paiement.
      </p>
      <p>
        La commande ne sera considérée comme définitive qu'après :
      </p>
      <ol>
        <li>La confirmation du paiement intégral par le prestataire de paiement (Stripe).</li>
        <li>L'envoi d'un email de confirmation de commande à l'adresse email renseignée par le client.</li>
      </ol>
      <p>
        NEX-GEN E-Commerce se réserve le droit de refuser ou d'annuler toute commande en cas de suspicion de fraude, de litige relatif au paiement d'une commande antérieure, ou de demande anormale.
      </p>

      <h2>Article 4 — Modalités de paiement</h2>
      <p>
        Le paiement s'effectue en ligne, de manière sécurisée, via la plateforme <strong>Stripe</strong>. Les moyens de paiement acceptés sont :
      </p>
      <ul>
        <li>Carte bancaire (Visa, Mastercard)</li>
        <li>Apple Pay</li>
        <li>Google Pay</li>
        <li>PayPal</li>
      </ul>
      <p>
        L'intégralité du paiement est exigée au moment de la commande. Aucune donnée bancaire n'est collectée ni stockée par NEX-GEN E-Commerce. L'ensemble des transactions est traité et sécurisé de bout en bout par Stripe, certifié PCI-DSS niveau 1.
      </p>

      <h2>Article 5 — Livraison</h2>
      <p>
        <strong>La livraison est offerte pour toute commande à destination de la France métropolitaine.</strong> Les colis sont expédiés sous 48 à 72 heures ouvrées à compter de la confirmation de la commande.
      </p>
      <p>
        Les délais de livraison indiqués sont donnés à titre indicatif. Un éventuel retard de livraison ne pourra donner lieu à aucune pénalité ou annulation de la commande, sauf en cas de retard supérieur à 30 jours.
      </p>
      <p>
        En cas de colis endommagé à la réception, le client est invité à refuser le colis auprès du transporteur et à nous contacter immédiatement à <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a>.
      </p>

      <h2>Article 6 — Droit de rétractation</h2>
      <p>
        Conformément aux dispositions de l'article L221-18 du Code de la consommation, le client dispose d'un délai de <strong>30 jours</strong> à compter de la réception du produit pour exercer son droit de rétractation. Pour plus de détails, veuillez consulter notre <a href="/pages/politique-de-retour">Politique de Retour</a>.
      </p>

      <h2>Article 7 — Garantie</h2>
      <p>
        Tous les produits vendus sur notre site bénéficient de la garantie légale de conformité (articles L217-4 et suivants du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 et suivants du Code civil).
      </p>
      <p>
        En complément, nos projecteurs sont couverts par une <strong>garantie commerciale de 2 ans</strong> à compter de la date de livraison, couvrant tout défaut de fabrication.
      </p>

      <h2>Article 8 — Réclamations et litiges</h2>
      <p>
        Pour toute réclamation, le client peut contacter notre service client par email à l'adresse <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a>. Nous nous engageons à répondre dans un délai de 48 heures ouvrées.
      </p>
      <p>
        En cas de litige non résolu à l'amiable, le client peut recourir à un médiateur de la consommation conformément aux articles L611-1 et suivants du Code de la consommation. Les présentes CGV sont soumises au droit français.
      </p>
    `,
  },

  "politique-de-retour": {
    title: "Politique de Retour & Remboursement",
    content: `
      <h2>Notre engagement : 30 jours satisfait ou remboursé</h2>
      <p>
        Chez NEX-GEN E-Commerce, votre satisfaction est notre priorité. Conformément à l'article L221-18 du Code de la consommation, nous vous offrons un délai de <strong>30 jours calendaires</strong> à compter de la date de réception de votre colis pour retourner votre produit et obtenir un remboursement intégral, sans avoir à justifier de motif.
      </p>

      <h2>Conditions de retour</h2>
      <p>Pour être accepté, le retour doit respecter les conditions suivantes :</p>
      <ul>
        <li>Le produit doit être retourné dans son <strong>emballage d'origine</strong>, en parfait état et complet (accessoires, câbles, trépied, notice, etc.).</li>
        <li>Le produit ne doit pas présenter de traces d'utilisation anormale, de chocs ou de détérioration volontaire.</li>
        <li>La demande de retour doit être formulée dans le délai de 30 jours suivant la réception.</li>
      </ul>

      <h2>Procédure de retour</h2>
      <p>Pour effectuer un retour, veuillez suivre les étapes ci-dessous :</p>
      <ol>
        <li><strong>Contactez-nous par email</strong> à l'adresse <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a> en précisant votre numéro de commande et le motif du retour.</li>
        <li>Notre équipe vous enverra une <strong>confirmation de retour</strong> avec les instructions d'expédition sous 24 à 48 heures ouvrées.</li>
        <li><strong>Expédiez le produit</strong> soigneusement emballé à l'adresse qui vous sera communiquée.</li>
      </ol>
      <p>
        <strong>Important :</strong> aucun retour ne sera accepté sans accord préalable de notre service client. Les colis retournés sans autorisation pourront être refusés.
      </p>

      <h2>Frais de retour</h2>
      <p>
        Les frais d'expédition du retour sont à la charge du client, sauf en cas de produit défectueux ou d'erreur de notre part (produit non conforme à la commande). Dans ces cas exceptionnels, nous prenons en charge les frais de retour et organisons l'enlèvement du colis.
      </p>

      <h2>Remboursement</h2>
      <p>
        Le remboursement sera effectué dans un délai maximum de <strong>14 jours</strong> suivant la réception et la vérification du produit retourné dans nos locaux. Le remboursement sera réalisé via le même moyen de paiement que celui utilisé lors de la commande initiale (carte bancaire, Apple Pay, Google Pay ou PayPal via Stripe).
      </p>
      <p>
        Aucun remboursement ne pourra être effectué si le produit est retourné incomplet, endommagé, ou dans un état qui ne permet pas sa remise en vente.
      </p>

      <h2>Échanges</h2>
      <p>
        Nous ne proposons pas d'échange direct. Si vous souhaitez un autre produit, nous vous invitons à effectuer un retour puis à passer une nouvelle commande sur notre site.
      </p>

      <h2>Garantie légale</h2>
      <p>
        Indépendamment du droit de rétractation, vous bénéficiez de la garantie légale de conformité (articles L217-4 à L217-14 du Code de la consommation) et de la garantie contre les vices cachés (articles 1641 à 1649 du Code civil). Nos projecteurs sont également couverts par une <strong>garantie commerciale de 2 ans</strong>.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative à un retour ou un remboursement, contactez notre service client :<br>
        <strong>Email :</strong> <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a><br>
        Nous nous engageons à vous répondre sous 24 à 48 heures ouvrées.
      </p>
    `,
  },

  "politique-de-confidentialite": {
    title: "Politique de Confidentialité",
    content: `
      <h2>Introduction</h2>
      <p>
        NEX-GEN E-Commerce (micro-entreprise, SIRET 123 456 789 00012) s'engage à protéger la vie privée de ses utilisateurs. La présente politique de confidentialité a pour objet de vous informer sur la manière dont nous collectons, utilisons et protégeons vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi française Informatique et Libertés.
      </p>

      <h2>Données collectées</h2>
      <p>
        Dans le cadre de votre commande, nous collectons uniquement les données strictement nécessaires au traitement et à la livraison de votre commande :
      </p>
      <ul>
        <li><strong>Nom et prénom</strong> — pour l'identification et la livraison</li>
        <li><strong>Adresse postale</strong> — pour l'expédition du colis</li>
        <li><strong>Adresse email</strong> — pour la confirmation de commande et le suivi</li>
        <li><strong>Numéro de téléphone</strong> (optionnel) — pour les notifications du transporteur</li>
      </ul>
      <p>
        <strong>Aucune donnée bancaire</strong> n'est collectée, stockée ou traitée par NEX-GEN E-Commerce. L'intégralité du processus de paiement est gérée et sécurisée de bout en bout par notre prestataire de paiement <strong>Stripe</strong>, certifié PCI-DSS niveau 1, le plus haut niveau de certification de sécurité dans l'industrie du paiement.
      </p>

      <h2>Finalités du traitement</h2>
      <p>Vos données personnelles sont utilisées exclusivement pour les finalités suivantes :</p>
      <ul>
        <li>Le traitement et la gestion de vos commandes</li>
        <li>L'expédition et le suivi de vos colis</li>
        <li>La gestion de la relation client (réponse à vos demandes, retours, SAV)</li>
        <li>L'envoi d'emails transactionnels liés à votre commande (confirmation, expédition, livraison)</li>
      </ul>
      <p>
        Nous ne procédons à aucun envoi de newsletters ou d'emails marketing sans votre consentement explicite et préalable.
      </p>

      <h2>Partage des données</h2>
      <p>
        Vos données personnelles ne sont <strong>jamais vendues, louées ou cédées</strong> à des tiers à des fins commerciales ou publicitaires. Elles peuvent être partagées uniquement avec :
      </p>
      <ul>
        <li><strong>Stripe</strong> — notre prestataire de paiement, pour le traitement sécurisé de votre transaction</li>
        <li><strong>Notre transporteur</strong> — pour l'acheminement de votre colis (nom, adresse, téléphone)</li>
      </ul>

      <h2>Durée de conservation</h2>
      <p>
        Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter de la date de votre dernière commande, conformément aux obligations légales en matière de comptabilité et de garantie. Passé ce délai, vos données sont automatiquement supprimées de nos systèmes.
      </p>

      <h2>Cookies</h2>
      <p>
        Notre site utilise uniquement des <strong>cookies techniques</strong> strictement nécessaires au bon fonctionnement du site et au traitement des paiements via Stripe. Ces cookies ne collectent aucune donnée personnelle à des fins de profilage ou de publicité.
      </p>
      <p>
        Nous n'utilisons pas de cookies de suivi publicitaire, de cookies tiers à des fins marketing, ni de pixels de tracking sur le site lui-même.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants sur vos données personnelles :
      </p>
      <ul>
        <li><strong>Droit d'accès</strong> — obtenir la communication de l'ensemble de vos données personnelles</li>
        <li><strong>Droit de rectification</strong> — corriger des données inexactes ou incomplètes</li>
        <li><strong>Droit de suppression</strong> — demander la suppression de vos données</li>
        <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré et lisible</li>
        <li><strong>Droit d'opposition</strong> — vous opposer au traitement de vos données</li>
      </ul>
      <p>
        Pour exercer l'un de ces droits, il vous suffit de nous contacter par email à <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a>. Nous traiterons votre demande dans un délai de 30 jours maximum.
      </p>
      <p>
        En cas de désaccord avec la manière dont nous traitons vos données, vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
      </p>

      <h2>Sécurité</h2>
      <p>
        Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité et la confidentialité de vos données personnelles, et les protéger contre tout accès, utilisation, modification ou divulgation non autorisés.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative à la protection de vos données personnelles :<br>
        <strong>NEX-GEN E-Commerce</strong><br>
        15 Rue de la République, 75001 Paris, France<br>
        Email : <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a>
      </p>
    `,
  },

  contact: {
    title: "Contact",
    content: `
      <h2>Nous contacter</h2>
      <p>Pour toute question concernant nos produits, vos commandes ou notre service après-vente, notre équipe est à votre disposition.</p>

      <h3>Email</h3>
      <p>
        <a href="mailto:support@nex-gen.fr">support@nex-gen.fr</a><br>
        Nous répondons à toutes les demandes sous 24 à 48 heures ouvrées.
      </p>

      <h3>Adresse postale</h3>
      <p>
        NEX-GEN E-Commerce<br>
        15 Rue de la République<br>
        75001 Paris, France
      </p>

      <h2>Horaires du service client</h2>
      <p>
        Du lundi au vendredi, de 9h00 à 18h00 (heure de Paris).<br>
        Fermé les week-ends et jours fériés.
      </p>
    `,
  },
};
