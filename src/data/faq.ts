/** Questions fréquentes : les 12 existantes + les nouvelles questions de confiance. */
export interface Faq {
  q: string;
  a: string;
  page: "services" | "about" | "both";
}

export const faq: Faq[] = [
  // ── Services (existantes)
  { page: "services", q: "Quels types de projets réalisez-vous ?", a: "Nous développons des sites vitrines, applications web et mobiles, plateformes SaaS, outils métiers et solutions cloud. Chaque projet est traité sur mesure, de la conception au déploiement." },
  { page: "services", q: "Quels sont vos délais habituels ?", a: "Un MVP peut être livré en 2 à 8 semaines selon la complexité. Un site vitrine prend généralement 1 à 3 semaines. Nous établissons un planning détaillé avec des jalons clairs dès la phase de découverte." },
  { page: "services", q: "Travaillez-vous avec des clients à l'international ?", a: "Oui, nous travaillons avec des clients en France, en Afrique et dans la diaspora africaine. Nos outils collaboratifs et notre organisation permettent une collaboration fluide à distance." },
  { page: "services", q: "Comment se déroule la collaboration ?", a: "Nous utilisons une approche agile avec des sprints bimensuels. Vous bénéficiez d'un accès direct à votre chef de projet, de points d'avancement hebdomadaires et de démonstrations régulières." },
  { page: "services", q: "Proposez-vous de la maintenance ?", a: "Oui, nous proposons des contrats de maintenance évolutive : corrections de bugs, mises à jour de sécurité, évolutions fonctionnelles et monitoring applicatif. La maintenance peut être incluse dès le départ." },
  { page: "services", q: "Quelles sont vos technologies de prédilection ?", a: "React, TypeScript, Node.js, Django, React Native pour le développement. AWS, GCP, Docker pour le cloud. PostgreSQL et MongoDB pour les bases de données. Nous choisissons la stack la plus adaptée à vos besoins." },

  // ── À propos (existantes)
  // À VALIDER : année de création et villes de l'équipe (le site affiche 2021 et Paris / Brazzaville ; le numéro est marocain)
  { page: "about", q: "Depuis quand existe Lucane Tech ?", a: "Lucane Tech accompagne les entreprises depuis 2021 dans la conception de solutions digitales performantes, modernes et évolutives." },
  { page: "about", q: "Où se situe votre équipe ?", a: "Notre équipe de développeurs travaille depuis le Maroc, avec un partenaire relais à Brazzaville pour les rendez-vous et l'accompagnement sur place. Nous suivons aussi des projets à distance, en Afrique, en Europe et dans la diaspora." },
  { page: "about", q: "Quels profils composent votre équipe ?", a: "Développeurs, designers UX/UI et chefs de projet collaborent étroitement pour assurer la réussite de chaque mission." },
  { page: "about", q: "Travaillez-vous à distance ?", a: "Oui. Notre organisation est entièrement remote et s'appuie sur des outils collaboratifs performants garantissant réactivité et transparence." },
  { page: "about", q: "Quels types de projets réalisez-vous ?", a: "Nous concevons des sites web, applications mobiles, plateformes SaaS, solutions métier sur mesure et expériences digitales innovantes." },
  { page: "about", q: "Comment démarrer un projet avec vous ?", a: "Contactez-nous pour un premier échange gratuit. Nous analysons vos besoins et proposons une stratégie adaptée à vos objectifs." },

  // ── Nouvelles questions de confiance
  { page: "both", q: "Comment se passe le paiement ?", a: "Un acompte à la commande, puis le solde à la livraison. Pour les projets plus importants, un échéancier en trois temps est fixé dans le contrat." },
  { page: "both", q: "Acceptez-vous le Mobile Money ?", a: "Oui, selon le pays : MTN MoMo et Airtel Money, en plus du virement bancaire. Les modalités exactes sont précisées dans le devis." },
  { page: "both", q: "À qui appartient le code de mon site ?", a: "À vous. À la fin du paiement, le code source, le nom de domaine et les accès à l'hébergement vous sont remis." },
  { page: "both", q: "Signez-vous un accord de confidentialité ?", a: "Oui, un NDA peut être signé avant tout échange sensible sur votre projet." },
];

export const faqFor = (page: "services" | "about") => faq.filter((f) => f.page === page || f.page === "both");
