/** Méthode en 5 étapes (textes repris des sections Processus et Méthodologie), garanties et valeurs. */
export const process = [
  {
    step: "01",
    /** Accroche affichée au-dessus du titre de l'étape. */
    tag: "On vous écoute",
    title: "Découverte",
    short: "Analyse de vos besoins, objectifs et contraintes techniques.",
    detail:
      "Ateliers de cadrage pour définir le périmètre, les objectifs et les contraintes. Analyse des besoins utilisateurs et benchmark concurrentiel accélérés par IA.",
    deliverable: "Cahier des charges et devis détaillé",
  },
  {
    step: "02",
    tag: "On dessine",
    title: "Design",
    short: "Conception UX/UI et prototypage interactif.",
    detail:
      "Conception UX/UI avec prototypage interactif assisté par IA. Génération rapide de variantes, validation des maquettes et design system co-créé avec l'IA.",
    deliverable: "Maquettes validées",
  },
  {
    step: "03",
    tag: "On construit",
    title: "Développement",
    short: "Implémentation agile en sprints bimensuels.",
    detail:
      "Sprints accélérés grâce aux assistants IA (génération de code, revues automatisées, détection de bugs). Livraisons plus fréquentes, qualité maintenue.",
    deliverable: "Version de test à chaque sprint",
  },
  {
    step: "04",
    tag: "On met en ligne",
    title: "Livraison",
    short: "Tests, déploiement et formation de vos équipes.",
    detail:
      "Déploiement progressif avec tests automatisés par IA. Documentation technique générée automatiquement, formation des équipes accélérée.",
    deliverable: "Mise en ligne, accès et documentation",
  },
  {
    step: "05",
    tag: "On reste à vos côtés",
    title: "Suivi",
    short: "Maintenance, évolutions et support technique dédié.",
    detail:
      "Monitoring augmenté par détection d'anomalies IA. Triage automatique des incidents, corrections et évolutions suggérées par l'analyse des usages.",
    deliverable: "Rapport mensuel",
  },
] as const;

/** Garanties (section « Garanties » de l'accueil). */
export const guarantees = [
  { title: "Devis 100 % gratuit", desc: "Estimation détaillée sans engagement, après session de découverte." },
  { title: "NDA disponible", desc: "Accord de confidentialité signable avant tout échange sensible." },
  { title: "Réponse sous 24 h", desc: "Chaque demande reçoit une réponse personnalisée dans la journée." },
  { title: "Contrat écrit", desc: "Périmètre, délais et prix fixés noir sur blanc avant de commencer." },
  { title: "Paiement échelonné", desc: "Acompte à la commande, solde à la livraison." },
  { title: "Code et accès remis", desc: "Le code source, le domaine et l'hébergement vous appartiennent." },
] as const;

/** Valeurs (page À propos). */
export const values = [
  { title: "Innovation", desc: "Nous explorons constamment de nouvelles technologies." },
  { title: "Collaboration", desc: "Le travail d'équipe et l'écoute sont au cœur de notre culture." },
  { title: "Fiabilité", desc: "Nos engagements sont respectés, toujours." },
  { title: "Impact", desc: "Chaque projet doit créer une valeur réelle pour ses utilisateurs." },
  { title: "Passion", desc: "Nous aimons ce que nous faisons et ça se voit." },
  { title: "Excellence", desc: "Nous visons le meilleur dans chaque ligne de code." },
] as const;
