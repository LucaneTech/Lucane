# Page Technologies — Design Spec

**Date :** 2026-06-05
**Approche retenue :** B — "Stack comme produit"
**Audience :** Dual (CTO / tech lead + founder / dirigeant non-technique)
**Niveau visuel cible :** Vercel / Linear / Stripe
**Langue :** Français

---

## Contexte

La page Technologies actuelle se limite à : Hero + liste de technos avec barres de progression (%) + CTA. Elle n'inspire pas confiance, ne démontre pas l'expertise et ne convertit pas.

L'objectif est de la transformer en page de référence en traitant le stack comme un produit — cohérent, argumenté, en production.

Toutes les sections sont **100% originales** (non réutilisées depuis d'autres pages du site).

---

## Structure de la page

```
01 HERO              — existant, conservé sans modification
02 TOPOGRAPHIE       — carte visuelle des 3 layers du stack
03 ARBITRAGES        — pourquoi pas X, pourquoi oui Y
04 TECH EN PROD      — preuves chiffrées par domaine (data sheet éditoriale)
05 VEILLE            — signal open source & engagement communauté
06 CTA               — existant, conservé sans modification
```

---

## Section 02 — TOPOGRAPHIE DU STACK

**Fond :** `bg-dark`
**Fichier :** `src/components/technologies/StackTopography.tsx`

### Layout

Trois bandes horizontales labellisées à gauche (`font-mono text-xs uppercase tracking-widest text-primary/60`), chacune contenant les chips des technologies correspondantes.

```
[ Surface ]        React · Tailwind CSS · React Native
[ Logique  ]       Node.js · Django · Python
[ Données & Infra] PostgreSQL · MongoDB · AWS · Docker
```

Des lignes SVG fines (`stroke="rgba(0,128,128,0.2)" strokeWidth="1"`) relient les chips entre layers pour visualiser les dépendances. Connexions à dessiner : React → Node.js, React → Django, Node.js → PostgreSQL, Node.js → MongoDB, Django → PostgreSQL, AWS → Docker (layer Infra).

### Éléments stylistiques

- **Chip technologie** : `rounded-md border border-primary/25 bg-primary/10 text-white/80 font-medium px-4 py-2 text-sm`
- **Hover chip** : tooltip compact 1 ligne d'explication du rôle dans l'écosystème — `bg-dark-elevated text-white text-[11px] px-3 py-1.5 rounded-md shadow-sm`
- **Lignes SVG** : `stroke-dashoffset` animé — se dessinent après l'apparition des chips
- **Label layer** : fixe à gauche, `w-36 text-primary/50 font-mono text-[10px] uppercase tracking-[0.25em]`

### Animations

1. Chips apparaissent layer par layer (stagger `delay: layerIndex * 0.2 + chipIndex * 0.05`)
2. Lignes SVG se dessinent après (`stroke-dashoffset: length → 0`, durée 0.8s, delay 0.6s)

### Pourquoi ça convertit

- Non-technique : voit un système cohérent, pas une liste
- CTO : voit une architecture pensée avec des dépendances assumées

---

## Section 03 — ARBITRAGES

**Fond :** `bg-dark-surface`
**Fichier :** `src/components/technologies/Arbitrages.tsx`
**Titre :** *"Nos choix, assumés."*

### Layout

Blocs horizontaux pleine largeur, séparés par `border-b border-white/8`. Pas de card, pas de box-shadow. Le contenu respire sur fond sombre.

Contenu par arbitrage (5–6 au total) :

| Domaine | Alternatif rejeté | VS | Choix retenu | Raison |
|---|---|---|---|---|
| Frontend | Vue.js | → | React | Maturité, ecosystem, React Native en bonus |
| Base de données | MySQL | → | PostgreSQL | JSON natif, transactions, performance |
| Backend | FastAPI | → | Django | Admin, ORM, ecosystem Python complet |
| Infra CI | Jenkins | → | GitHub Actions | DX et intégration native |
| Mobile | Flutter | → | React Native | Réutilisation du code React web |
| Styling | CSS Modules | → | Tailwind CSS | Vélocité, cohérence design system |

### Éléments stylistiques

- **Label domaine** : `font-mono text-xs uppercase tracking-widest text-primary` — style terminal
- **Alternatif rejeté** : `line-through text-white/30 italic` — le barré se dessine au scroll via un `<motion.span>` positionné en `absolute` sur le texte (`scaleX: 0 → 1`, transform-origin left, durée 0.6s) — pas de pseudo-élément CSS (incompatible avec Tailwind/framer-motion)
- **Séparateur "VS"** : `text-primary/40 font-mono text-xs` centré, flanqué de deux `<hr>` en `border-primary/15`
- **Choix retenu** : `text-white font-semibold` + pill `[RETENU]` en `bg-primary/15 text-primary border border-primary/30 rounded-full text-[10px] px-2`
- **Raison** : `text-white/60 text-sm`
- **Hover bloc entier** : `bg-white/[0.02]` transition 150ms — subtil

### Animations

Label domaine entre en `x: -20 → 0`. Contenu fade en dessous avec stagger 0.08s par bloc.

### Pourquoi ça convertit

- Non-technique : les choix ne sont pas hasardeux
- CTO : culture engineering mature, on assume ses décisions

---

## Section 04 — TECH EN PROD

**Fond :** `bg-dark`
**Fichier :** `src/components/technologies/TechInProd.tsx`
**Titre :** *(optionnel, peut être absent — les données parlent d'elles-mêmes)*

### Layout

Trois domaines en **lignes horizontales pleine largeur**. Séparées uniquement par `border-b border-white/8`. Aucun fond de colonne, aucun radius, aucune box.

```
FRONTEND   ·  < 1.5s  ── TTI moyen      ·  Lighthouse 95+  ·  React · Tailwind
BACKEND    ·  50k+    ── req/jour        ·  p95 < 120ms     ·  Node.js · Django
INFRA      ·  < 3min  ── deploy Docker   ·  Zero-downtime   ·  AWS · GitHub CI
```

### Éléments stylistiques par colonne

| Colonne | Contenu | Style |
|---|---|---|
| 1 — Domaine | `FRONTEND` | `font-mono text-[10px] uppercase tracking-[0.3em] text-primary w-28 flex-shrink-0` |
| 2 — Chiffre | `< 1.5s` | `font-mono text-5xl font-bold text-white tabular-nums` + AnimatedCounter |
| 3 — Libellé | `TTI moyen` | `text-sm text-white/40 max-w-[140px]` aligné en bas |
| 4 — Métrique sec. | `Lighthouse 95+` | `font-mono text-base text-white/55` séparé par `·` en `text-white/20` |
| 5 — Stack | `React · Tailwind` | `text-[11px] text-white/30 border border-white/10 px-2 py-0.5 rounded` |

- **Hover ligne** : `bg-white/[0.03]` sur toute la largeur, transition 150ms
- **AnimatedCounter** : déclenché au scroll (`useInView`), même pattern que `ImpactStrip.tsx`

### Animations

Chaque ligne entre en `opacity: 0 → 1` + `x: -8 → 0`, stagger 0.1s. Chiffres s'animent au scroll.

### Données à valider

Les métriques (`< 1.5s TTI`, `50k+ req/jour`, `Lighthouse 95+`, `p95 < 120ms`, `< 3min deploy`) sont des exemples à remplacer par des chiffres réels issus des projets en production avant la mise en ligne.

### Pourquoi ça convertit

- Non-technique : des preuves concrètes, pas des pourcentages abstraits
- CTO : des métriques production réelles, pas du marketing

---

## Section 05 — VEILLE & CONTRIBUTION

**Fond :** `bg-surface`
**Fichier :** `src/components/technologies/Veille.tsx`
**Titre :** *"On ne consomme pas les technos. On les pratique."*

### Layout

**Partie haute — Timeline horizontale**

Frise scrollable sur mobile (`overflow-x: auto`, `-webkit-overflow-scrolling: touch`, pas de scrollbar visible via `scrollbar-none`). Axe horizontal `border-t border-slate-200` avec points `◉` en `text-primary`. Années en `font-mono text-xs text-ink-faint` sur l'axe.

> **Données à valider avant implémentation :** les événements de la timeline (dates, titres, types) et les 3 chiffres statiques de la partie basse doivent être confirmés avec les vraies données de l'équipe. Les valeurs du spec sont des exemples.

Événements positionnés sous l'axe :

```
2022 ─────── 2023 ─────── 2024 ─────── 2025 ──▶

  ◉ Premier      ◉ Contribution   ◉ Package npm   ◉ Migration
  repo open      upstream         publié          vers TS strict
  source         Django REST      react-lucane    sur 3 projets
```

- **Type d'événement** : pill `[REPO]` / `[CONTRIB]` / `[PACKAGE]` / `[MIGRATION]` en `font-mono text-[9px] uppercase bg-primary/8 text-primary px-1.5 rounded`
- **Titre** : `text-sm text-ink font-semibold`
- **Description** : `text-xs text-ink-muted`
- **Connecteur vertical** : `border-l border-primary/30 h-4 mx-auto`

**Partie basse — 3 chiffres statiques**

```
15+                    2 400+                  4
repos GitHub      ·    commits             ·   technos évaluées / trimestre
```

- **Chiffre** : `font-mono text-3xl font-bold text-ink` — statique (pas d'AnimatedCounter, volontairement différent de Section 04)
- **Label** : `text-xs text-ink-muted font-mono`
- **Séparateur** : `·` en `text-ink-faint`

### Animations

La ligne de timeline se dessine de gauche à droite : `scaleX: 0 → 1`, `transform-origin: left`, durée 0.8s. Points `◉` apparaissent en cascade après.

### Pourquoi ça convertit

- Non-technique : l'équipe est active et engagée, pas juste consommatrice
- CTO : signaux concrets d'une équipe qui suit l'état de l'art

---

## Fichiers à créer

```
src/components/technologies/StackTopography.tsx
src/components/technologies/Arbitrages.tsx
src/components/technologies/TechInProd.tsx
src/components/technologies/Veille.tsx
```

## Fichier à modifier

```
src/pages/Technologies.tsx  — importer et câbler les 4 nouvelles sections
```

## Dépendances

- `framer-motion` — déjà installé
- `useInView` de framer-motion — déjà utilisé dans le projet
- Pas de nouvelle dépendance requise

## Design tokens utilisés

Tous issus de `src/styles/tokens.css` :
- `--color-primary: #008080`
- `--color-dark: #111110`
- `--color-dark-surface: #1C1C1A`
- `--color-dark-elevated: #242422`
- `--color-surface: #FAFAFA`
- `--color-ink: #2C2C2A`
- `--color-ink-muted: #888780`
- `--color-ink-faint: #C5C4BF`
- `--shadow-glow: 0 0 24px rgba(0,128,128,0.2)`
