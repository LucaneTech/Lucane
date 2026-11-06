# Lucane Tech — site vitrine

Site de l'équipe Lucane Tech : sites web, applications web et mobiles, logiciels sur mesure.
Thème clair par défaut avec bascule sombre, animations partout (défilement fluide, textes qui se révèlent, scène 3D en particules sur l'accueil).

## Démarrer

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # régénère le plan du site, vérifie les types, construit dist/
npm run preview    # sert dist/ en local
npm run lint
```

Node 20.19 ou plus récent.

## Modifier le contenu

Tout le texte et les chiffres vivent dans `src/data/`. Les pages lisent ces fichiers, inutile de toucher aux composants.

| Fichier | Contenu |
| --- | --- |
| `site.ts` | nom, domaine, e-mail, téléphone, WhatsApp, réseaux, chiffres clés |
| `projects.ts` | réalisations (une fiche = une page `/realisations/<slug>`) |
| `services.ts`, `offers.ts` | expertises et formules |
| `team.ts` | équipe |
| `clients.ts`, `testimonials.ts` | logos clients et témoignages |
| `sectors.ts`, `process.ts`, `faq.ts` | secteurs, méthode, questions fréquentes |

**Règle de confiance :** une valeur marquée `"À FOURNIR"` n'est jamais affichée. Un chiffre sans source reste caché (`verifiedFacts()`), un témoignage n'apparaît qu'avec `consent: true`, un logo seulement s'il est confirmé. On remplace la valeur, et l'élément s'affiche tout seul.

Après avoir ajouté un projet, `npm run sitemap` met à jour `public/sitemap.xml` (le build le fait aussi).

## Organisation

```
src/
  pages/            une page par route (chargées à la demande)
  components/       sections propres à chaque page (home/v2, services/v2, …)
  ui/               éléments partagés : Button, PageHero, ThemeToggle, Cursor, Intro, useSeo…
  motion/           animations réutilisables : SplitText, Reveal, Parallax, Magnetic, kit M.*…
  styles/tokens.css couleurs, rayons, ombres (clair et sombre)
  theme/            bascule clair / sombre
  data/             contenu (voir plus haut)
scripts/
  generate-sitemap.mjs   plan du site depuis src/data/projects.ts
  optimize-images.mjs    convertit les images lourdes de public/ en WebP et met à jour les chemins
docs/superpowers/plans/  plan de la refonte (direction artistique, phases)
```

## Repères de design

- Couleurs : uniquement les jetons sémantiques (`bg-canvas`, `text-ink`, `text-ink-muted`, `border-line`, `bg-primary`…), qui changent seuls en mode sombre.
- Rayons : cartes, panneaux, images et champs à 10 px maximum (`rounded-md`) ; boutons, étiquettes et navigation en pilule (`rounded-full`).
- Animations : passer par `src/motion/` plutôt que d'écrire des animations à la main. Tout respecte le réglage « réduire les animations » de l'appareil.
- Page de test des animations, en développement seulement : `/__motion`.

## Référencement

- Chaque page appelle `useSeo(titre, description)` : titre d'onglet, description, canonique et balises de partage.
- `index.html` porte les valeurs par défaut et les données structurées (Organization).
- `public/robots.txt` et `public/sitemap.xml` pointent vers `https://lucane.tech`. **À vérifier :** ce domaine ne répondait pas le 6 nov. 2026 (site actuel : lucanetech.netlify.app). Si le domaine change, modifier `site.domain` dans `src/data/site.ts`, `DOMAIN` dans `scripts/generate-sitemap.mjs`, `robots.txt` et `index.html`.

## Déploiement

Site statique (Netlify) : commande `npm run build`, dossier `dist`. `public/_redirects` renvoie toutes les routes vers `index.html`.
