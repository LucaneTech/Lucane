# Refonte complète de lucane.tech — Plan d'implémentation

> **Pour les agents :** exécuter ce plan tâche par tâche, dans l'ordre, une tâche = un commit. Cocher chaque étape (`- [ ]` → `- [x]`) au fil de l'eau. Ne jamais passer à la phase suivante tant que les critères d'acceptation de la phase en cours ne sont pas vérifiés dans le navigateur (thème clair ET sombre, ordinateur ET mobile).

**Objectif :** transformer lucane.tech en vitrine qui laisse le prospect ébahi dès la première seconde — immersion totale, animations d'une fluidité parfaite, design futuriste très arrondi (pilules, verre, objets 3D lumineux, voir 0.1) — tout en inspirant confiance par des preuves vérifiables. Thème blanc par défaut, bascule sombre par bouton. Tout le contenu actuel est conservé.

**Priorité absolue : le visuel et la fluidité.** Chaque section a un « moment signature ». La confiance vient en second rideau, mais elle est partout.

**Architecture :** React 19 + React Router 7 (pages chargées à la demande), Tailwind CSS v4 avec des couleurs **sémantiques** (variables CSS qui changent selon le thème), Framer Motion 12 pour toutes les animations (valeurs de mouvement liées au défilement, sans re-rendu React), Lenis pour un défilement inertiel fluide. Toutes les données (chiffres, équipe, projets, témoignages, offres, FAQ) vivent dans `src/data/` : un seul endroit à modifier, aucune incohérence possible entre les pages.

**Pile technique :** React 19, TypeScript 5.8, Vite (rolldown), Tailwind 4, Framer Motion 12, Lenis (à ajouter), Three.js + @react-three/fiber (à ajouter, chargés seulement pour la scène 3D du hero), Radix Accordion (déjà là), lucide-react.

---

## 0. Principes non négociables

### 0.1 Direction artistique (v2 — 6 novembre 2026, d'après les références de l'équipe)

Références fournies par l'équipe :
- [Épingle 1](https://www.pinterest.com/pin/61994932366820775/) — vidéo d'un site sombre : une **fusée en particules 3D** (orange et bleu) sur un champ d'étoiles, titre géant « BOOST YOUR BRAND » mêlant contour et plein, navigation minimale « Let's talk / Join ».
- [Épingle 2](https://www.pinterest.com/pin/891009107542280118/) — page « protect your data » : fond noir, **formes 3D irisées** (orange, violet, bleu) qui flottent derrière une typographie géante et fine, **navigation et boutons en pilule**, chiffres flottants (+65k, +300k), logos clients dans des **cartes vitrées arrondies**, cartes « Our Benefits » très arrondies avec halo coloré.
- [Idées « futuristic website »](https://www.pinterest.com/ideas/futuristic-website/951081177372/) — mêmes codes en clair et en sombre : grands conteneurs arrondis façon « bento », panneaux vitrés, robots / objets 3D, typographie très grande.

| Règle | Valeur |
|---|---|
| Thème | Blanc par défaut (version claire « futuriste » : gris très doux, conteneurs arrondis), sombre en option (noir profond, halos lumineux) |
| Arrondis | **Généreux partout.** Pilule (`rounded-full`) dès que la forme le permet : boutons, navigation, étiquettes, puces, bouton de thème, curseur, champs d'une ligne, boutons flottants. Cartes et images : 24 à 32 px. Grands conteneurs de section : 40 px. Jamais d'angle vif, sauf bords d'écran pleine largeur |
| Matières | Verre (fond translucide + flou d'arrière-plan + filet clair), halos lumineux, dégradés **irisés** (teal → cyan → indigo → orange) réservés aux objets 3D, aux halos et aux accents — jamais en aplat de fond de texte |
| Accent | Teal Lucane `#008080` reste la couleur de marque ; palette irisée en soutien : cyan `#3CE0D0`, indigo `#5B6CFF`, orange `#FF7A3D` |
| Objets 3D | Hero : champ de particules en 3D qui forme une figure (fusée / logo) et réagit à la souris ; ailleurs : formes irisées flottantes en parallaxe derrière les titres |
| Typographie | Titres géants : **Inter Tight** en 300 (fin, comme l'épingle 2) mêlé à 800 pour les mots-clés, ou contour + plein (épingle 1). Texte : Sen. Chiffres et étiquettes : JetBrains Mono |
| Séparations | Conteneurs arrondis et espacement plutôt que filets ; filets fins conservés à l'intérieur des cartes |
| Ombres | Pas d'ombres portées grises ; **halos colorés** doux sous les éléments mis en avant |

La règle « tout bouge » (0.4) et le budget de fluidité (0.2) restent inchangés.

### 0.2 Fluidité (budget de performance)
- **Tout bouge** (voir 0.4), mais par les propriétés que le navigateur anime sans effort : `transform` (déplacement, échelle, rotation, inclinaison, 3D), `opacity`, `clip-path`, et la couleur sur les petits éléments (texte, filets, icônes). Jamais `width`, `height`, `top`, `box-shadow`, `filter` animés : ce sont eux qui provoquent les saccades. Une barre qui « grandit » se fait par `scaleX`, un bloc qui « s'ouvre » par `clip-path`.
- Animations liées au défilement via `useScroll` / `useTransform` (valeurs de mouvement, zéro re-rendu).
- Défilement inertiel Lenis (`lerp: 0.1`), synchronisé avec Framer Motion.
- Images : AVIF/WebP, `width`/`height` déclarés, `loading="lazy"` hors premier écran, `fetchpriority="high"` sur l'image du hero.
- Pages chargées à la demande (`React.lazy`) ; préchargement au survol des liens de navigation.
- Plus aucune `iframe` de site en direct sur l'accueil (remplacées par des captures).
- Objectifs : LCP < 2,5 s, CLS < 0,05, Lighthouse Performance ≥ 90 sur ordinateur, ≥ 80 sur mobile.
- `prefers-reduced-motion` : les animations deviennent de simples fondus courts ; Lenis désactivé.
- Mobile (< 1024 px) : pas de curseur personnalisé, parallaxe réduite, défilements horizontaux fixés remplacés par un carrousel tactile.

### 0.4 Tout bouge — immersion maximale

Règle : **aucun élément du site n'est statique.** Chaque élément a jusqu'à quatre couches de mouvement : à l'entrée (apparition), au défilement (lié à la position), à l'interaction (survol, clic, focus) et au repos (mouvement ambiant lent). Un élément sans au moins entrée + interaction est un bug.

| Élément | Entrée | Défilement | Interaction | Repos |
|---|---|---|---|---|
| Titres | Lettres ou mots qui montent dans leur masque | Légère inclinaison selon la vitesse de défilement, parallaxe | Lettres qui se décalent au survol (titres cliquables) | — |
| Paragraphes | Lignes qui montent une à une | Fondu de sortie quand la section quitte l'écran | — | — |
| Mots-clés en accent | Soulignement qui se trace | — | Couleur qui glisse | — |
| Images et captures | Rideau `clip-path` + zoom arrière de 1,2 à 1 | Parallaxe interne (l'image bouge dans son cadre) | Zoom lent, inclinaison 3D qui suit la souris | — |
| Vidéos | Rideau | Lecture quand visible, pause sinon | Curseur « Lire » | — |
| Boutons | Montée + fondu | — | Aimantés au curseur, aplat qui monte, flèche qui file et revient | — |
| Liens | Fondu | — | Soulignement qui se trace de gauche à droite et repart à droite | — |
| Icônes (lucide) | Trait qui se dessine (`pathLength`) | — | Rotation ou rebond selon l'icône | — |
| Cartes, lignes de liste | Montée en cascade | — | Filet qui s'épaissit, contenu qui se décale, curseur contextuel | — |
| Filets et grille de fond | Tracé progressif | Lignes verticales qui dérivent lentement | — | Respiration très lente de l'opacité |
| Chiffres | Compteur | — | Rejoue le compteur au survol | — |
| Logos clients | Cascade | — | Passage gris → couleur | Défilement continu |
| Bandeaux de texte | — | Accélèrent avec la vitesse de défilement, changent de sens selon le sens du défilement | — | Défilement continu |
| Champs de formulaire | Cascade | — | Libellé qui flotte, filet qui se trace au focus | — |
| Navigation | Glisse depuis le haut | Se cache / revient selon le sens du défilement | Lien actif : filet qui glisse d'un lien à l'autre | — |
| Sections | Transition d'entrée propre à chaque section | Sortie : léger recul (échelle 0,96) et assombrissement par superposition | — | — |
| Curseur | — | — | Change de forme et de libellé selon l'élément survolé | Suit avec ressort |
| Thème | — | — | Cercle qui s'étend depuis le bouton | — |
| Pages | Rideau + titre en lettres | — | — | — |
| Pied de page | Mot « LUCANE » géant qui se dévoile | Révélé par le haut (pied de page « collé » sous le contenu) | — | — |

**Repli :** en mouvement réduit, entrée = fondu de 200 ms, rien d'autre ; sur mobile, pas d'inclinaison 3D ni de curseur, le reste est conservé.

### 0.3 Confiance
- Aucun chiffre ne s'affiche s'il n'est pas dans `src/data/site.ts` avec un commentaire de source.
- Retirés tant qu'ils ne sont pas prouvés : « 98 % de satisfaction », « 4.8★ App Store », « taux de plantage < 0,1 % », « rétention J7 », « 99,9 % de disponibilité », « −40 % », « 2 400 commits », « 15+ dépôts open source », « 3 continents / 5+ pays / 6+ pays ».
- Témoignages publiés seulement avec accord écrit du client (champ `consent: true`).

---

## 1. Informations attendues de l'équipe

Le travail ne s'arrête pas en attendant : chaque valeur manquante est posée dans `src/data/` avec la mention `// À FOURNIR` et un texte provisoire neutre. Une page ne part en production que lorsque ses `À FOURNIR` sont remplis.

| # | Information | Utilisée en phase |
|---|---|---|
| 1 | Photos (portrait, fond neutre), noms, rôles, LinkedIn des 3-4 membres | 3, 6 |
| 2 | Chiffres réels : projets livrés, clients, pays des clients, années d'activité | 3 |
| 3 | Accord écrit des clients cités (KonShop, Oralise, EEMCI) + logos haute définition | 3, 5 |
| 4 | Statut légal, ville, adresse ou mention « basés à … » | 6, 7 |
| 5 | Afficher des prix « à partir de » ou non ; contenu des formules | 6 |
| 6 | Domaine officiel (lucane.tech fonctionne-t-il ?) ; page LinkedIn entreprise | 7 |
| 7 | Les 3 projets à mettre en vedette ; captures plein écran (1440×900) de chaque projet | 3, 5 |
| 8 | Pour chaque étude de cas : contexte, défi, solution, résultat (même qualitatif) | 5 |

---

## 2. Carte des fichiers

### Créer
| Fichier | Rôle |
|---|---|
| `src/styles/tokens.css` (réécrit) | Couleurs sémantiques clair/sombre, typographie, espacements, rayon 0 |
| `src/theme/ThemeProvider.tsx` | État du thème, persistance, transition animée |
| `src/ui/ThemeToggle.tsx` | Bouton soleil/lune |
| `src/motion/SmoothScroll.tsx` | Lenis + synchronisation Framer Motion |
| `src/motion/presets.ts` | Courbes et durées communes |
| `src/motion/Reveal.tsx` | Apparition au défilement (masque + translation) |
| `src/motion/SplitText.tsx` | Texte qui apparaît lettre par lettre / mot par mot |
| `src/motion/ScrollWords.tsx` | Phrase qui s'allume mot à mot au défilement |
| `src/motion/Parallax.tsx` | Profondeur liée au défilement ou à la souris |
| `src/motion/Magnetic.tsx` | Bouton attiré par le curseur |
| `src/motion/HorizontalScroll.tsx` | Section fixée qui défile horizontalement |
| `src/motion/Counter.tsx` | Compteur animé (police mono) |
| `src/motion/DrawLine.tsx` | Filet qui se trace au défilement |
| `src/motion/PageTransition.tsx` | Transition entre pages (rideau) |
| `src/ui/Cursor.tsx` (remplace `CursorEffect.tsx`) | Curseur point + anneau, libellés contextuels (« Voir », « Glisser ») |
| `src/ui/Intro.tsx` (remplace `PageLoader.tsx`) | Ouverture de 1,2 s, une fois par session |
| `src/ui/WhatsAppFab.tsx` | Bouton WhatsApp flottant |
| `src/ui/Section.tsx`, `src/ui/Eyebrow.tsx`, `src/ui/GridLines.tsx` | Primitives de mise en page |
| `src/ui/Seo.tsx` | Titre et description par page |
| `src/data/site.ts` | Identité, contacts, chiffres vérifiés |
| `src/data/team.ts`, `testimonials.ts`, `services.ts`, `offers.ts`, `sectors.ts`, `process.ts`, `faq.ts`, `clients.ts` | Contenus |
| `src/data/projects.ts` (étendu) | + `slug`, `cover`, `gallery`, `caseStudy`, `featured` |
| `src/pages/CaseStudy.tsx` | Page étude de cas `/realisations/:slug` |
| `src/pages/Legal.tsx`, `src/pages/Privacy.tsx` | Mentions légales, confidentialité |
| `src/components/home/*` | Nouvelles sections de l'accueil (voir phase 3) |

### Modifier
`index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/ui/Button.tsx`, toutes les pages et sections existantes (couleurs sémantiques, rayon 0, animations), `public/sitemap.xml`, `public/robots.txt`, `README.md`, `package.json`.

### Supprimer (à la fin, une fois inutilisés)
`src/ui/CursorEffect.tsx`, `src/ui/PageLoader.tsx`, `src/components/PageLoaderWrapper.tsx`, `src/components/Background.tsx` (motif à points), `src/ui/LivePreviewCard.tsx` (iframes), plugin DaisyUI, `react-intersection-observer` (remplacé par `useInView` de Framer), `src/assets/react.svg`.

---

## 3. Inventaire : où va chaque contenu existant

Rien ne disparaît. Ce tableau sert de liste de contrôle en fin de refonte.

| Contenu actuel | Nouvel emplacement |
|---|---|
| Accueil — hero, mot animé, 2 boutons | Accueil § Hero (mot animé conservé, refait en masque) |
| Accueil — logos défilants | Accueil § Bande de preuve (titre « Ils nous font confiance », doublon KFK retiré) |
| Accueil — 6 services | Accueil § Services (liste fixée) + page Services |
| Accueil — 3 projets en vedette | Accueil § Réalisations (défilement horizontal) |
| Accueil — 4 maquettes « Nos designs » + 12 maquettes non utilisées | Accueil § Studio design (galerie en mosaïque animée) |
| Accueil — galerie « L'équipe en action » | Accueil § Équipe + À propos |
| Accueil — chiffres + mini-devis | Accueil § Chiffres (vérifiés) + § Devis express |
| Accueil — appel final | Accueil § Final (typographie géante) |
| Services — hero, défilé techno, processus, 7 expertises, méthodologie, détail par domaine, pourquoi nous, FAQ | Page Services, même ordre logique ; indicateurs non prouvés → engagements mesurables |
| Projets — hero + filtres, 6 projets, TechDNA, frise, chiffres d'impact, témoignages, carte | Page Réalisations ; + 4 projets ; + pages d'étude de cas ; Maroc ajouté sur la carte |
| Technologies — 5 sections | Page Technologies, conservée, recolorée et sans arrondis |
| À propos — hero, mission, chiffres, fondateur, valeurs, FAQ | Page À propos ; fondateur → équipe complète ; + « Où nous sommes » |
| Contact — canaux, engagements, formulaire | Page Contact ; formulaire enrichi |
| Pied de page — services, liens, contact, newsletter, réseaux | Pied de page refait ; newsletter branchée ou retirée ; LinkedIn réactivé |
| 404, page maintenance | Conservées, restylées |

---

## PHASE 1 — Fondations visuelles et thème (aucune information requise)

### Tâche 1.1 — Couleurs sémantiques et mode sombre piloté par classe

Aujourd'hui Tailwind v4 applique `dark:` selon le réglage de l'ordinateur (media query), et les 301 classes `dark:` de 41 fichiers ignorent toute bascule manuelle. On passe à un pilotage par la classe `.dark` sur `<html>`.

**Fichiers :** `src/styles/tokens.css`, `src/index.css`

- [ ] Réécrire `src/styles/tokens.css` :

```css
/* Valeurs brutes — clair par défaut */
:root {
  --canvas: #FFFFFF;
  --canvas-alt: #F6F6F4;
  --canvas-inverse: #0B0B0A;
  --ink: #0F0F0E;
  --ink-muted: #5F5E5A;
  --ink-faint: #A3A29C;
  --line: #E6E5E1;
  --line-strong: #0F0F0E;
  --primary: #008080;
  --primary-ink: #006B6B;      /* accent pour du texte sur fond clair */
  --on-primary: #FFFFFF;
}
.dark {
  --canvas: #0B0B0A;
  --canvas-alt: #141413;
  --canvas-inverse: #FFFFFF;
  --ink: #F4F4F1;
  --ink-muted: #A3A29C;
  --ink-faint: #5F5E5A;
  --line: #262624;
  --line-strong: #F4F4F1;
  --primary: #008080;
  --primary-ink: #1FA3A3;
  --on-primary: #FFFFFF;
}

@theme inline {
  --color-canvas: var(--canvas);
  --color-canvas-alt: var(--canvas-alt);
  --color-canvas-inverse: var(--canvas-inverse);
  --color-ink: var(--ink);
  --color-ink-muted: var(--ink-muted);
  --color-ink-faint: var(--ink-faint);
  --color-line: var(--line);
  --color-line-strong: var(--line-strong);
  --color-primary: var(--primary);
  --color-primary-ink: var(--primary-ink);
  --color-on-primary: var(--on-primary);

  --font-display: "Inter Tight", system-ui, sans-serif;
  --font-sans: "Sen", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --radius-none: 0;
  --radius-field: 2px;
}
```

- [ ] Dans `src/index.css`, juste après `@import "tailwindcss";`, ajouter :

```css
@custom-variant dark (&:where(.dark, .dark *));
```

- [ ] Conserver temporairement les anciens noms (`surface`, `surface-alt`, `dark-surface`, `dark-elevated`) comme alias vers les nouvelles variables, pour que le site ne casse pas pendant la migration ; ils seront supprimés à la tâche 8.3.
- [ ] Neutraliser les arrondis globalement pendant la migration : `* { border-radius: 0 }` est INTERDIT (casse les champs) — on remplace plutôt classe par classe (tâche 1.6).

**Critères :** `npm run build` passe ; ajouter à la main `class="dark"` sur `<html>` dans les outils du navigateur fait basculer tout le site.

### Tâche 1.2 — Thème sans flash au chargement

**Fichiers :** `index.html`, `src/main.tsx`

- [ ] Dans `<head>` de `index.html`, avant toute feuille de style :

```html
<script>
  (function () {
    try {
      var t = localStorage.getItem("lucane-theme");
      if (t === "dark") document.documentElement.classList.add("dark");
    } catch (e) {}
  })();
</script>
```

Le thème par défaut est **clair**, même si l'ordinateur est en sombre (demande explicite de l'équipe).

- [ ] Supprimer de `src/main.tsx` la détection du thème de l'ordinateur et l'écouteur associé.

**Critères :** recharger la page en mode sombre mémorisé ne montre aucun éclair blanc.

### Tâche 1.3 — ThemeProvider et bouton de bascule animé

**Fichiers :** créer `src/theme/ThemeProvider.tsx`, `src/ui/ThemeToggle.tsx` ; modifier `src/App.tsx`, `src/components/Navbar.tsx`

- [ ] `ThemeProvider` expose `{ theme, toggle }`, lit `localStorage["lucane-theme"]`, écrit la classe `.dark` sur `<html>`.
- [ ] La bascule utilise l'API View Transitions quand le navigateur la propose : un **cercle qui s'étend depuis le bouton** (`clip-path: circle()`), 600 ms ; sinon changement instantané.

```tsx
const toggle = (e?: React.MouseEvent) => {
  const next = theme === "dark" ? "light" : "dark";
  const apply = () => {
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("lucane-theme", next);
    setTheme(next);
  };
  if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return apply();
  }
  const x = e?.clientX ?? innerWidth - 40;
  const y = e?.clientY ?? 40;
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const vt = document.startViewTransition(() => flushSync(apply));
  vt.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 600, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" }
    );
  });
};
```

- [ ] Ajouter dans `src/index.css` : `::view-transition-old(root), ::view-transition-new(root) { animation: none; mix-blend-mode: normal; }`
- [ ] `ThemeToggle` : bouton carré 40 px, filet 1 px, icône soleil/lune qui pivote (rotation + fondu), `aria-label` « Passer en thème sombre / clair ». Placé dans la barre de navigation (à gauche du bouton Contact) et dans le menu mobile.
- [ ] Supprimer de `Navbar.tsx` la détection du thème de l'ordinateur ; le logo clair/sombre lit le thème du `ThemeProvider`.

**Critères :** la bascule fonctionne, est mémorisée, l'animation de cercle est fluide (60 i/s dans l'onglet Performance), le logo change avec le thème.

### Tâche 1.4 — Typographie

**Fichiers :** `index.html`, `src/index.css`

- [ ] Charger Inter Tight (600, 700, 800), Sen (400, 500, 700), JetBrains Mono (400, 500) en une seule requête Google Fonts, `display=swap`, avec `preconnect` (déjà présent).
- [ ] Classes utilitaires : `.display-1` (`clamp(3.5rem, 9vw, 9rem)`, 800, `leading-[0.92]`, `tracking-[-0.04em]`), `.display-2`, `.display-3`, `.eyebrow` (mono, 12 px, majuscules, `tracking-[0.18em]`), `.lead` (20–22 px, `ink-muted`).

**Critères :** aucune police système visible au chargement après 1 s ; pas de saut de mise en page (CLS < 0,05).

### Tâche 1.5 — Primitives d'animation et défilement fluide

**Fichiers :** `package.json`, créer `src/motion/*`, modifier `src/App.tsx`

- [ ] `npm i lenis`
- [ ] `src/motion/presets.ts` :

```ts
export const ease = {
  out: [0.16, 1, 0.3, 1] as const,       // sortie expo, signature du site
  inOut: [0.65, 0, 0.35, 1] as const,
};
export const dur = { fast: 0.35, base: 0.7, slow: 1.1 };
export const stagger = 0.06;
```

- [ ] `SmoothScroll.tsx` : `ReactLenis` (`lerp: 0.1`, `smoothWheel: true`), désactivé si mouvement réduit ou écran tactile ; remet le défilement en haut à chaque changement de page (remplace `ScrollToTop`).
- [ ] Envelopper l'application dans `<MotionConfig reducedMotion="user">`.
- [ ] Composants (chacun < 80 lignes, typés, documentés par un commentaire d'une ligne) :
  - `Reveal` — l'enfant monte de 40 px dans un masque `overflow: hidden`, une seule fois, déclenché à 20 % de visibilité.
  - `SplitText` — découpe en mots (ou lettres) ; chaque morceau monte de 110 % dans son masque, décalage `stagger`.
  - `ScrollWords` — chaque mot passe de 15 % à 100 % d'opacité selon la progression du défilement de la section.
  - `Parallax` — `y` lié au défilement (`speed` de −0,3 à 0,3) ; variante `mouse` liée à la position du curseur via `useSpring`.
  - `Magnetic` — l'élément suit le curseur de 30 % de la distance dans un rayon de 80 px, retour élastique.
  - `HorizontalScroll` — section haute de `n × 100vh`, contenu `sticky` translaté en `x` selon la progression ; repli carrousel tactile sous 1024 px.
  - `Counter` — de 0 à la valeur en 1,6 s, police mono, déclenché à l'apparition.
  - `DrawLine` — filet SVG dont `pathLength` suit le défilement.

**Critères :** une page de test temporaire (non routée en production) montre les 8 primitives ; toutes tiennent 60 i/s ; en mouvement réduit, tout s'affiche sans déplacement.

### Tâche 1.6 — Boutons et éléments de base sans arrondis ni ombres

**Fichiers :** `src/ui/Button.tsx`, créer `src/ui/Section.tsx`, `src/ui/Eyebrow.tsx`, `src/ui/GridLines.tsx`

- [ ] `Button` : rayon 0, plus d'ombre teal ni de reflet ; variantes `primary` (fond teal, texte blanc), `outline` (filet `line-strong`), `ghost` (soulignement qui se trace). Au survol du `primary` : un aplat `ink` monte du bas (`clip-path`), le texte reste lisible. Garder l'API actuelle (`label`, `to`, `href`, `onClick`, `iconLeft`, `iconRight`) pour ne casser aucun appel. Enveloppé dans `Magnetic` en taille `lg`.
- [ ] `Section` : `<section>` avec rembourrage vertical standard, conteneur 1440 px, option `tone="alt" | "inverse"`.
- [ ] `Eyebrow` : numéro mono + libellé (« 01 — Services »).
- [ ] `GridLines` : 4 ou 12 lignes verticales 1 px `line`, en fond de section, optionnelles.

**Critères :** plus aucune classe `rounded-*`, `shadow-*`, `bg-gradient-*`, `blur-*` dans `src/ui/`.

### Tâche 1.7 — Curseur, ouverture, transitions de page, WhatsApp

**Fichiers :** créer `src/ui/Cursor.tsx`, `src/ui/Intro.tsx`, `src/motion/PageTransition.tsx`, `src/ui/WhatsAppFab.tsx` ; modifier `src/App.tsx`

- [ ] `Cursor` : point 6 px + anneau 36 px (carré pour rester dans la ligne « sans arrondi » — à valider visuellement, sinon anneau rond fin), qui suit avec ressort ; grossit et affiche un libellé quand un élément porte `data-cursor="Voir"` ou `data-cursor="Glisser"`. Masqué sur écran tactile.
- [ ] `Intro` : remplace l'attente imposée de 3,5 s. Le logo apparaît, un rideau teal puis `canvas` se lève (total 1,2 s), **une seule fois par session** (`sessionStorage`), ignorée en mouvement réduit. Le hero commence ses animations à la fin du rideau.
- [ ] `PageTransition` : à chaque changement de page, un panneau `canvas-inverse` traverse l'écran de bas en haut (500 ms), le titre de la nouvelle page apparaît en `SplitText`. Pages chargées par `React.lazy` + `Suspense`.
- [ ] `WhatsAppFab` : carré 52 px en bas à droite, icône WhatsApp, lien `https://wa.me/212781343642` avec message prérempli, apparaît après 30 % de défilement, masqué sur la page Contact.
- [ ] Retirer `ScrollProgress` actuel et le remplacer par un filet teal de 2 px en haut de l'écran (même rôle, nouveau style).

**Critères (fin de phase 1) :** site existant toujours complet et fonctionnel ; bascule clair/sombre parfaite partout (vérifier les 6 pages) ; ouverture et transitions fluides ; `npm run build` et `npm run lint` passent ; commit par tâche.

### Tâche 1.8 — Système d'animation automatique (« tout bouge » par défaut)

Pour que chaque élément bouge sans écrire l'animation à la main 500 fois, les éléments de base sont animés **par défaut**.

**Fichiers :** créer `src/motion/kit.tsx`, `src/motion/useScrollVelocity.ts`, `src/motion/AutoAnimate.tsx` ; modifier `src/ui/Button.tsx`, `src/ui/Section.tsx`

- [ ] `kit.tsx` exporte des composants prêts à l'emploi, qui appliquent les 4 couches du tableau 0.4 :
  - `M.H1`, `M.H2`, `M.H3` — `SplitText` à l'entrée + inclinaison liée à la vitesse de défilement.
  - `M.P` — lignes qui montent une à une (découpage par ligne recalculé au redimensionnement).
  - `M.Img` — rideau + zoom arrière à l'entrée, parallaxe interne, zoom et inclinaison 3D au survol ; `width`/`height` obligatoires.
  - `M.Link` — soulignement entrant/sortant.
  - `M.Icon` — enveloppe une icône lucide : tracé du trait à l'entrée, micro-rotation au survol.
  - `M.Card` — cascade d'entrée, filet et décalage au survol, `data-cursor`.
  - `M.Line` — filet horizontal ou vertical tracé à l'entrée.
  - `M.Marquee` — bandeau continu dont la vitesse et le sens suivent le défilement.
  - `M.Field` — champ avec libellé flottant et filet de focus.
- [ ] `useScrollVelocity` : vitesse de défilement lissée (`useVelocity` + `useSpring`), partagée par toute l'application (inclinaison des titres, bandeaux).
- [ ] `AutoAnimate` : chaque `Section` met en cascade ses enfants directs à l'entrée et applique la sortie (échelle 0,96 + voile) quand elle quitte l'écran. Désactivable par `animate={false}` pour les sections qui ont leur propre chorégraphie.
- [ ] Règle d'usage pour toute la suite du plan : **dans les pages, on n'écrit plus de `<h2>`, `<p>`, `<img>` nus**, toujours `M.H2`, `M.P`, `M.Img`, etc. Vérification : `grep -rn "<img \|<p \|<h[1-3] " src/components src/pages` ne doit renvoyer que des exceptions commentées.
- [ ] Performance : tous les déclencheurs passent par un seul `IntersectionObserver` partagé ; les animations hors écran sont suspendues ; vérifier 60 i/s avec 200 éléments animés sur une même page de test.

**Critères :** sur la page de test, chaque type d'élément du tableau 0.4 montre ses couches de mouvement ; aucune saccade dans l'onglet Performance ; mouvement réduit propre.

**Critères (fin de phase 1) :** toutes les tâches 1.1 à 1.8 validées ; site existant toujours complet.

---

## PHASE 2 — Données uniques et contenu de confiance

### Tâche 2.1 — `src/data/site.ts`

- [ ] Regrouper : nom, accroche, positionnement (« équipe de développeurs »), e-mail, téléphone, WhatsApp, ville, réseaux sociaux, domaine officiel, et **chiffres vérifiés** :

```ts
export const facts = [
  { value: 11, suffix: "", label: "projets en ligne", source: "liste /realisations" },
  { value: 0, suffix: "", label: "pays clients", source: "À FOURNIR" },
  { value: 0, suffix: "+", label: "années d'activité", source: "À FOURNIR" },
] as const;
```

- [ ] Un chiffre dont la `source` vaut `"À FOURNIR"` n'est pas affiché (filtre central).

### Tâche 2.2 — Équipe, témoignages, clients
- [ ] `team.ts` : nom, rôle, photo, bio courte (2 lignes), LinkedIn. Fondateur conservé (texte actuel de `About.tsx`).
- [ ] `testimonials.ts` : les 3 actuels (KonShop, Oralise, EEMCI) avec `consent: false` par défaut → non affichés tant que l'accord n'est pas confirmé.
- [ ] `clients.ts` : logos actuels sans doublon (Oralise, EEMCI, KFK, Active Rise, EEMSI) + Kone, Next, Dynamic présents dans `public/collaborators/` (à confirmer).

### Tâche 2.3 — Projets étendus
- [ ] `projects.ts` : ajouter `slug`, `cover` (capture 1440×900), `gallery`, `sector`, `year`, `caseStudy: { context, challenge, solution, result }`, `featured`.
- [ ] Ajouter Lucane CRM, Hermon Eximia, Panval Consilium, Kone Shop (descriptions reprises du portfolio).
- [ ] « Folio Francisco » : retiré des projets en vedette, conservé dans la liste complète catégorie « Interne ».

### Tâche 2.4 — Services, formules, secteurs, méthode, FAQ
- [ ] `services.ts` : les 7 expertises de la page Services (textes actuels) + les 6 de l'accueil fusionnés, chacun avec livrables et engagements mesurables (ex. « score Lighthouse ≥ 90 vérifié à la livraison », « code et accès remis au client »).
- [ ] `offers.ts` : Présence, Vitrine, Boutique en ligne, Application métier, Maintenance ; champ `priceFrom` facultatif (vide = non affiché).
- [ ] `sectors.ts` : écoles, santé, commerce, conseil, BTP, ONG, immobilier, tourisme — un besoin type chacun.
- [ ] `process.ts` : Découverte, Conception, Développement, Livraison, Suivi — durée indicative, livrable de chaque étape.
- [ ] `faq.ts` : les 12 questions actuelles (6 Services + 6 À propos) + paiement, Mobile Money, délais, propriété du code, maintenance, confidentialité.

**Critères (fin de phase 2) :** plus aucun chiffre ni texte de contenu écrit en dur dans un composant ; recherche `grep -rn "98%\|4.8\|99.9\|2400" src` → aucun résultat affiché.

---

## PHASE 3 — Accueil : l'effet « waouh »

Ordre des sections et moment signature de chacune. Chaque section = un fichier dans `src/components/home/`, une tâche, un commit.

| # | Section | Moment signature |
|---|---|---|
| 3.0 | **Scène 3D de fond (hero)** | Un champ de points en 3D (Three.js, couleur `primary` sur `canvas`, aucun dégradé) qui ondule lentement, se creuse autour du curseur et se réorganise en forme du logo Lucane quand l'ouverture se termine ; au défilement, la caméra recule et les points se dispersent vers la section suivante. Chargée à la demande après le premier affichage, rendue en pause hors écran, limitée à 30 000 points, désactivée sur mobile modeste et en mouvement réduit (remplacée par la grille animée). |
| 3.1 | **Hero** | Titre géant en `SplitText` lettre par lettre (« Nous construisons des [applications] qui propulsent votre business. ») ; le mot animé change par masque vertical. À droite, une **composition de 3 écrans** de vrais projets superposés en profondeur, qui suivent la souris (`Parallax mouse`, 3 vitesses). Grille de fond qui se dessine. Au défilement, le titre rétrécit et s'estompe pendant que les écrans glissent vers la section Réalisations. Phrase de positionnement claire sous le titre. Boutons : Démarrer un projet (magnétique) + WhatsApp. |
| 3.2 | **Bande de preuve** | « Ils nous font confiance » + logos en défilement continu sur un filet ; 3 chiffres vérifiés en mono, compteurs. |
| 3.3 | **Manifeste** | Une phrase immense qui s'allume mot à mot au défilement (`ScrollWords`) : qui nous sommes, pour qui, pourquoi. |
| 3.4 | **Services** | Section fixée : à gauche, la liste numérotée 01–06 en grand ; à droite, un visuel qui change à chaque service pendant le défilement (transition `clip-path`). |
| 3.5 | **Pour qui** | Noms de secteurs en typographie géante qui défilent ; au survol, le besoin type apparaît sous le curseur. |
| 3.6 | **Réalisations** | Défilement horizontal fixé de 3 grandes études de cas pleine hauteur ; image révélée par `clip-path`, curseur « Voir » ; chaque carte mène à sa page d'étude de cas. |
| 3.7 | **Méthode** | Frise verticale : le filet se trace au défilement (`DrawLine`), chaque étape s'allume quand le filet l'atteint. |
| 3.8 | **Studio design** | Mosaïque des 16 maquettes en 3 colonnes qui défilent à vitesses différentes (parallaxe). |
| 3.9 | **Équipe** | Portraits révélés par rideau, noms en grand ; galerie « en action » en bandeau dessous. |
| 3.10 | **Garanties** | 6 engagements en grille à filets (devis gratuit, accord de confidentialité, réponse 24 h, contrat écrit, paiement échelonné, code et accès remis au client), icônes au trait. |
| 3.11 | **Témoignages** | Citation en très grande typographie, fondu enchaîné, nom + poste + logo (seulement `consent: true`). |
| 3.12 | **Devis express** | Le mini-formulaire actuel (même envoi FormSubmit), sur fond `canvas-inverse`. |
| 3.13 | **Final** | « Parlons de votre projet. » sur toute la largeur, lettres qui montent ; bouton magnétique ; le pied de page dévoile le mot « LUCANE » géant au défilement. |

- [ ] Captures statiques à la place des `iframe` (supprime `LivePreview`).
- [ ] Balise `<h1>` unique dans le hero ; chaque section est un `<section aria-labelledby>`.

**Critères :** **aucun élément immobile** — parcourir l'accueil élément par élément avec le tableau 0.4, chaque élément montre au minimum son entrée et son interaction ; chargement de l'accueil sans saccade ; 60 i/s au défilement rapide (onglet Performance) ; LCP < 2,5 s ; vérifié clair/sombre, 1440 px, 1024 px, 390 px ; mouvement réduit propre.

---

## PHASE 4 — Navigation et pied de page

### Tâche 4.1 — Barre de navigation
- [ ] Logo (retour à l'accueil), 5 liens (Services, Réalisations, Technologies, À propos, Contact), bouton thème, bouton « Démarrer un projet ». Fond transparent sur le hero, puis `canvas` + filet bas au défilement ; se cache en descendant, réapparaît en remontant.
- [ ] Lien actif : filet teal sous le libellé (plus de point rond).
- [ ] Menu mobile plein écran : liens en typographie géante qui montent un par un, coordonnées en bas, bouton thème.
- [ ] Préchargement de la page au survol d'un lien.

### Tâche 4.2 — Pied de page
- [ ] 4 colonnes (présentation, services cliquables vers leurs ancres, liens, contact) + réseaux (LinkedIn réactivé) + mentions légales + confidentialité.
- [ ] Newsletter : branchée sur un service réel (à décider) ou retirée — jamais un formulaire qui ne fait rien.
- [ ] Mot « LUCANE » géant en bas, révélé au défilement.

---

## PHASE 5 — Réalisations et études de cas

### Tâche 5.1 — Page `/realisations` (l'adresse `/projets` redirige)
- [ ] Hero : titre `SplitText` + compteur de projets.
- [ ] Filtres (Tous, Web, Application, Mobile, Interne) : transition de grille animée (`layout` de Framer).
- [ ] Grille éditoriale alternant grandes et petites cartes ; survol : capture qui zoome dans son cadre, curseur « Voir ».
- [ ] Conservés et restylés : TechDNA, frise, chiffres d'impact (vérifiés uniquement), témoignages, carte (+ Maroc).
- [ ] Phrase anglaise du bas de page remplacée par du français.

### Tâche 5.2 — Page `/realisations/:slug`
- [ ] Hero plein écran : capture du projet qui se dévoile, titre, secteur, année, technologies.
- [ ] Sections : Contexte → Défi → Solution → Résultat (texte large, `Reveal`), galerie défilante, vidéo si `videoUrl` (Trip Manager, Lucane Filter), lien vers le site en ligne, témoignage lié.
- [ ] Navigation « Projet suivant » en bas, transition fluide vers la page suivante.
- [ ] 404 propre si le `slug` n'existe pas.

---

## PHASE 6 — Services, À propos, Contact, pages légales

### Tâche 6.1 — Services
- [ ] Hero ; défilé des technologies ; les 7 expertises en sections ancrées (`#web`, `#mobile`…) avec livrables et engagements ; **Formules** (cartes à filets, prix seulement si fournis) ; processus et méthodologie (restylés) ; « pourquoi nous » ; FAQ (accordéon Radix, sans arrondis) ; appel final.

### Tâche 6.2 — À propos
- [ ] Hero (chiffres vérifiés) ; mission (texte actuel) ; **équipe complète** ; valeurs (les 6 actuelles, animées en grille) ; **« Où nous sommes »** (Maroc + relais à Brazzaville) ; FAQ ; appel final (lien `#` corrigé vers `/contact`).

### Tâche 6.3 — Contact
- [ ] Conserver canaux et engagements ; formulaire enrichi (type de projet, budget indicatif, délai souhaité, secteur), validation claire, confirmation animée ; WhatsApp mis en avant ; horaires avec fuseau.

### Tâche 6.4 — Mentions légales et confidentialité
- [ ] `Legal.tsx` et `Privacy.tsx` : identité, hébergeur (Netlify), données collectées par les formulaires (FormSubmit) et leur usage. Contenu juridique **à faire relire** par l'équipe.

---

## PHASE 7 — Technologies, 404, maintenance

- [ ] Page Technologies : remplacer les couleurs codées en dur (`text-white`, `text-white/60`…) par les couleurs sémantiques ; retirer arrondis et effets ; conserver les 5 sections et leurs animations.
- [ ] 404 et maintenance : restylées dans la nouvelle direction (typographie géante, retour accueil).

---

## PHASE 8 — Référencement, performance, accessibilité, nettoyage

### Tâche 8.1 — Référencement
- [ ] `Seo.tsx` : titre et description propres à chaque page et étude de cas.
- [ ] `index.html` : retirer `geo.region=FR` / Paris ; description et données structurées alignées sur le positionnement réel ; un seul domaine canonique.
- [ ] `sitemap.xml` : toutes les pages + études de cas, `lastmod` à jour ; `robots.txt` vérifié.

### Tâche 8.2 — Performance et accessibilité
- [ ] Images converties en AVIF/WebP avec tailles déclarées ; lazy-loading ; préchargement de l'image du hero.
- [ ] Lighthouse : Performance ≥ 90 (ordinateur), Accessibilité ≥ 95, Bonnes pratiques ≥ 95, SEO = 100.
- [ ] Contrastes vérifiés dans les deux thèmes ; navigation complète au clavier ; focus visible ; textes alternatifs.

### Tâche 8.3 — Nettoyage
- [ ] Supprimer les fichiers listés en section 2, les alias de couleurs temporaires, DaisyUI, `react-intersection-observer`.
- [ ] `grep -rn "rounded-\|bg-gradient\|blur-\|shadow-" src` → seules les exceptions documentées restent.
- [ ] Ajouter au dépôt les 12 maquettes de `public/images/home/design/` ; réécrire `README.md` (lancement, structure, où modifier les contenus).

### Tâche 8.4 — Recette finale
- [ ] Parcourir le tableau de la section 3 : chaque contenu existant est présent.
- [ ] Parcourir chaque page avec le tableau 0.4 : aucun élément immobile, aucune saccade.
- [ ] Vérifier chaque page : clair/sombre × ordinateur/tablette/mobile × mouvement normal/réduit.
- [ ] `npm run build` et `npm run lint` sans erreur ; déploiement de prévisualisation Netlify validé par l'équipe avant mise en production.

---

## Ordre et suivi

| Phase | Dépend de | Bloquée par des informations ? |
|---|---|---|
| 1 Fondations et thème | — | Non |
| 2 Données | 1 | Partiellement (valeurs « À FOURNIR » posées) |
| 3 Accueil | 1, 2 | Partiellement (équipe, captures) |
| 4 Navigation, pied de page | 1 | Non |
| 5 Réalisations | 1, 2 | Oui (études de cas, captures) |
| 6 Services, À propos, Contact, légal | 1, 2 | Oui (formules, identité légale) |
| 7 Technologies, 404 | 1 | Non |
| 8 SEO, perf, nettoyage, recette | toutes | Non |

Chaque phase se termine par une démonstration dans le navigateur et un point de validation avec l'équipe.
