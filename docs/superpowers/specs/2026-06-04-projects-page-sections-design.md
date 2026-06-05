# Spec — Projects Page: 4 New Sections

**Date:** 2026-06-04  
**Status:** Approved by user  
**Page:** `/projects` → `src/pages/Projects.tsx`

---

## Context

The Projects page currently has 4 sections: HeroProject, AllProjects, Testamonals, CallAction. The goal is to add 4 innovative, non-redundant sections that deepen engagement without repeating content from other pages (Home, Services, About, Technologies).

Design constraints: professional, modern, minimalist, dark-mode compatible, consistent with the Lucane design system (primary `#008080`, Tailwind + DaisyUI, Framer Motion).

---

## New Page Structure

```
HeroProject          (existing)
AllProjects          (existing)
TechDNA              ← NEW #1
ProjectTimeline      ← NEW #2
ImpactStrip          ← NEW #3
Testamonals          (existing)
GeographicReach      ← NEW #4
CallAction           (existing)
```

---

## Section 1 — TechDNA

**File:** `src/components/projects/TechDNA.tsx`

**Concept:** Constellation interactive de toutes les technologies utilisées à travers les projets. Chaque bulle représente une technologie, sa taille est proportionnelle à sa fréquence d'utilisation sur l'ensemble des projets.

**Data source:** Dérivé dynamiquement depuis le tableau `projects` dans `AllProjects.tsx`. Les technologies sont comptées et dédupliquées.

**Layout:**
- Titre de section centré : "Notre stack technique" / "TechDNA"
- Zone de bulles avec positionnement pseudo-aléatoire mais stable (seedé par index)
- Chaque bulle : fond `primary/10`, border `primary/30`, texte tech name
- Taille variable : petite (1 projet), moyenne (2), grande (3+)
- Hover : scale up + fond `primary/20` + tooltip "utilisé dans X projets"
- Animation d'entrée staggerée avec framer-motion (`whileInView`)
- Background : `bg-surface dark:bg-transparent`

**Responsive:** Wrap flex sur mobile, grille plus aérée sur desktop.

---

## Section 2 — ProjectTimeline

**File:** `src/components/projects/ProjectTimeline.tsx`

**Concept:** Frise chronologique horizontale des projets livrés, du plus ancien au plus récent. Crée une narration de la progression de l'agence.

**Data source:** Même tableau `projects`, trié par date. Dates au format "Mois YYYY".

**Layout:**
- Titre de section : "Notre parcours" ou "Projets livrés"
- Ligne horizontale centrale (1px, `primary/40`)
- Alternance haut/bas des items (pair en haut, impair en bas)
- Chaque item : point `●` sur la ligne, nom du projet, date, badge catégorie
- Connecteur vertical entre le point et l'item
- Sur mobile : layout vertical (liste)
- Scroll horizontal natif sur tablette si besoin
- Animation : items entrent en fadeUp au scroll (`whileInView`, stagger)
- Background : `bg-surface-alt dark:bg-dark-elevated` pour contraste avec la section précédente

---

## Section 3 — ImpactStrip

**File:** `src/components/projects/ImpactStrip.tsx`

**Concept:** Bande horizontale sombre avec métriques agrégées de développement, esthétique terminal/code. Renforce la crédibilité technique.

**Metrics (données statiques hardcodées):**
- `~2 400` — commits sur GitHub
- `6` — pays couverts
- `< 10 jours` — délai moyen de livraison
- `6` — repos open source actifs

**Layout:**
- Background toujours sombre : `bg-slate-900` (indépendant du thème)
- Police monospace pour les valeurs (`font-mono`)
- Chaque métrique : valeur large en `text-primary`, label en `text-slate-400`
- Séparateur vertical entre métriques sur desktop
- Compteurs animés au scroll avec framer-motion (`useInView` + animation de 0 à valeur)
- Prefix style terminal : `>_` ou `//` devant chaque valeur (optionnel)
- Full-width, pas de max-w contraignant

---

## Section 4 — GeographicReach

**File:** `src/components/projects/GeographicReach.tsx`

**Concept:** Carte SVG minimaliste du monde avec points pulsants sur les pays clients. Forte dimension visuelle, souligne la portée internationale.

**Client locations:**
- France (Paris ~46°N, 2°E)
- RDC Congo (Kinshasa ~-4°S, 15°E)
- Sénégal (Dakar ~15°N, -17°E) — implicite "Afrique"
- International (point générique ou 2-3 pays supplémentaires)

**Layout:**
- Fond de carte SVG simplifié (`fill-none stroke-slate-300 dark:stroke-slate-700`) — path des continents
- Points `●` sur chaque location : cercle primary avec animation `ping` (Tailwind ou framer-motion keyframes)
- Lignes de connexion SVG entre les points (stroke `primary/30`, dasharray animé)
- Label flottant sur hover ou toujours visible (nom du pays)
- Titre : "Notre empreinte internationale"
- Background : `bg-surface dark:bg-transparent`
- Responsive : SVG `viewBox` s'adapte, points repositionnés en %

**SVG Map:** Utiliser un SVG de world map simplifié intégré inline (pas de lib externe), chemins basiques des continents.

---

## Integration

`src/pages/Projects.tsx` — ordre final :

```tsx
<HeroProject />
<AllProjects />
<TechDNA />
<ProjectTimeline />
<ImpactStrip />
<Testamonals />
<GeographicReach />
<CallAction />
```

---

## Dependencies

- `framer-motion` — déjà installé
- `lucide-react` — déjà installé
- Aucune nouvelle dépendance

---

## Non-goals

- Pas de données live GitHub (API) — données statiques
- Pas de vraie carte interactive (Leaflet, Mapbox) — SVG inline suffit
- Pas de filtrage sur la timeline
