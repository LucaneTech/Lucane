import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { useLenis } from "lenis/react";
import ThemeToggle from "../../ui/ThemeToggle";
import Button from "../../ui/Button";
import { useTheme } from "../../theme/ThemeProvider";
import { NAV_LINKS, prefetchContact } from "./routes";
import { site, whatsappHref } from "../../data/site";
import { ease } from "../../motion/presets";

export const logo = "/logo_color.png";
export const logoLight = "/logoLight.png";

/** Bouton menu (mobile) : deux traits qui se croisent en X à l'ouverture. */
function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={open}
      className="relative flex h-11 w-11 items-center justify-center rounded-full bg-ink text-canvas lg:hidden"
    >
      <motion.span className="absolute h-[2px] w-5 rounded-full bg-current" animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }} />
      <motion.span className="absolute h-[2px] w-5 rounded-full bg-current" animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }} />
    </button>
  );
}

/** Menu mobile plein écran : panneau arrondi, liens géants qui montent un par un. */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { pathname } = useLocation();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-2 z-[60] flex flex-col overflow-hidden rounded-[36px] bg-canvas-inverse p-6 pt-24 text-on-inverse lg:hidden"
          initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
          transition={{ duration: 0.7, ease: ease.inOut }}
        >
          <nav className="flex flex-1 flex-col justify-center gap-1" aria-label="Navigation mobile">
            {[{ to: "/", label: "Accueil" }, ...NAV_LINKS].map((l, i) => (
              <div key={l.to} className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "110%" }}
                  transition={{ duration: 0.6, ease: ease.out, delay: 0.15 + i * 0.06 }}
                >
                  <Link
                    to={l.to}
                    onClick={onClose}
                    className={`flex items-center justify-between font-display text-[clamp(2.25rem,11vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] ${
                      pathname === l.to ? "text-primary-ink" : ""
                    }`}
                  >
                    {l.label}
                    <ArrowUpRight className="h-7 w-7 opacity-40" />
                  </Link>
                </motion.div>
              </div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3 border-t border-line pt-6 text-sm"
          >
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-primary-ink" /> WhatsApp
            </a>
            <a href={site.phone.href} className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary-ink" /> {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary-ink" /> {site.email}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * Barre de navigation (plan 4.1) : pilule vitrée flottante. Elle se cache quand on descend,
 * revient quand on remonte ; le lien actif est surligné par une pastille qui glisse d'un lien à l'autre.
 */
export default function SiteHeader() {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const last = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
    setHidden(y > last.current && y > 240 && !open);
    last.current = y;
  });

  // Fermer le menu et bloquer le défilement pendant qu'il est ouvert
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));
  const highlighted = hover ?? NAV_LINKS.find((l) => isActive(l.to))?.to ?? null;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 md:px-6 md:pt-4"
        initial={{ y: -120 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.6, ease: ease.out }}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500 md:px-4 ${
            scrolled && !open ? "border-glass-line bg-glass shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)] backdrop-blur-2xl" : "border-transparent"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="relative z-[61] flex items-center pl-2" aria-label="Lucane Tech, accueil">
            <motion.img
              src={(theme === "dark") !== open ? logoLight : logo}
              alt="Lucane"
              className="h-auto w-28 md:w-32"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Liens (ordinateur) */}
          <nav className="hidden items-center rounded-full border border-glass-line bg-glass p-1 backdrop-blur-xl lg:flex" aria-label="Navigation principale" onMouseLeave={() => setHover(null)}>
            {NAV_LINKS.filter((l) => l.to !== "/contact").map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onMouseEnter={() => {
                  setHover(l.to);
                  l.prefetch();
                }}
                onFocus={() => l.prefetch()}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  highlighted === l.to ? "text-on-primary" : "text-ink-muted hover:text-ink"
                }`}
              >
                {highlighted === l.to && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-primary" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">{l.label}</span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="relative z-[61] flex items-center gap-2">
            <ThemeToggle />
            <span className="hidden lg:block" onMouseEnter={() => prefetchContact()}>
              <Button to="/contact" label="Démarrer un projet" size="md" magnetic iconRight={<ArrowUpRight className="h-4 w-4" />} />
            </span>
            <MenuButton open={open} onClick={() => setOpen((o) => !o)} />
          </div>
        </div>
      </motion.header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
