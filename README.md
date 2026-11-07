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

Après avoir ajouté un projet, `npm run build` crée sa page HTML et l'ajoute au plan du site.

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
  prerender.mjs          après le build : une page HTML par adresse, 404.html et sitemap.xml
  optimize-images.mjs    convertit les images lourdes de public/ en WebP et met à jour les chemins
docs/superpowers/plans/  plan de la refonte (direction artistique, phases)
```

## Repères de design

- Couleurs : uniquement les jetons sémantiques (`bg-canvas`, `text-ink`, `text-ink-muted`, `border-line`, `bg-primary`…), qui changent seuls en mode sombre.
- Rayons : cartes, panneaux, images et champs à 10 px maximum (`rounded-md`) ; boutons, étiquettes et navigation en pilule (`rounded-full`).
- Animations : passer par `src/motion/` plutôt que d'écrire des animations à la main. Tout respecte le réglage « réduire les animations » de l'appareil.
- Page de test des animations, en développement seulement : `/__motion`.

## Référencement

Domaine officiel : **https://lucanetech.com**.

- `src/seo/pages.ts` : adresse du site et, pour chaque page, titre, description et titre principal. **C'est le seul fichier à modifier** pour changer le référencement d'une page (les études de cas sont générées depuis `src/data/projects.ts`).
- `src/seo/schema.ts` : données structurées schema.org (entreprise, site, fil d'Ariane, services, formules, FAQ, liste des réalisations, études de cas).
- `scripts/prerender.mjs` (lancé par `npm run build`) : écrit une page HTML par adresse avec ses balises, ses données structurées et une version texte de son contenu (lisible par les robots et les aperçus de liens sans JavaScript), plus `404.html` (exclue des moteurs) et `sitemap.xml`.
- `src/ui/useSeo.ts` : garde ces valeurs à jour quand on navigue dans le site.
- `public/robots.txt`, `public/og-image.jpg` (image de partage 1200 × 630), `public/site.webmanifest`.
- `public/_redirects` : l'ancienne adresse lucanetech.netlify.app redirige vers lucanetech.com ; une adresse inconnue renvoie une vraie erreur 404.
- `public/_headers` : cache long des fichiers du build et en-têtes de sécurité.

## Déploiement

Site statique (Netlify) : commande `npm run build`, dossier `dist`. `public/_redirects` renvoie toutes les routes vers `index.html`.
