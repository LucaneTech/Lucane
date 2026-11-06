/** Liens de navigation + préchargement de la page au survol (le chunk est déjà prêt au clic). */
export interface NavLink {
  to: string;
  label: string;
  prefetch: () => Promise<unknown>;
}

export const NAV_LINKS: NavLink[] = [
  { to: "/services", label: "Services", prefetch: () => import("../../pages/Services") },
  { to: "/realisations", label: "Réalisations", prefetch: () => import("../../pages/Projects") },
  { to: "/technologies", label: "Technologies", prefetch: () => import("../../pages/Technologies") },
  { to: "/a-propos", label: "À propos", prefetch: () => import("../../pages/About") },
  { to: "/contact", label: "Contact", prefetch: () => import("../../pages/Contact") },
];

export const prefetchContact = () => import("../../pages/Contact");
