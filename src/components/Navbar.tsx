import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { X, Menu, Phone, Home, Settings2, Briefcase, Cpu, Info } from "lucide-react";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "./Footer";

export const logo = "logo_color.png";
export const logoLight = "logoLight.png";

interface NavbarProps {
  className?: string;
}

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/projets", label: "Projets" },
  { to: "/technologies", label: "Technologies" },
  { to: "/a-propos", label: "À propos" },
];

const navLinks = [
  { to: "/",             label: "Accueil",      Icon: Home,      color: "#008080" },
  { to: "/services",     label: "Services",     Icon: Settings2, color: "#185FA5" },
  { to: "/projets",      label: "Projets",      Icon: Briefcase, color: "#D85A30" },
  { to: "/technologies", label: "Technologies", Icon: Cpu,       color: "#3B6D11" },
  { to: "/a-propos",     label: "À propos",     Icon: Info,      color: "#BA7517" },
];

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const initialTheme = darkMediaQuery.matches ? "dark" : "light";
    setTheme(initialTheme);
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setTheme(e.matches ? "dark" : "light");
    };
    darkMediaQuery.addEventListener("change", handleChange);
    return () => darkMediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-white/70 dark:bg-dark/80 border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.img
              src={theme === "dark" ? logoLight : logo}
              alt="Logo lucane"
              className="w-24 sm:w-28 md:w-36 h-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Menu Desktop */}
          <motion.div
            className="hidden lg:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {navItems.map((item) => {
              const isActive =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <motion.div
                  key={item.to}
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.to}
                    className={`font-medium text-sm tracking-wide transition-colors relative group ${
                      isActive
                        ? "text-primary"
                        : "text-ink/70 dark:text-white/70 hover:text-primary"
                    }`}
                  >
                    {item.label}
                    {/* Animated underline on hover (non-active) */}
                    {!isActive && (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    )}
                  </Link>
                  {/* Active dot indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <Button
              to="/contact"
              label="Contactez-nous"
              variant="primary"
              size="md"
              iconLeft={<Phone className="w-4 h-4" />}
            />
          </div>

          {/* Hamburger button — visible uniquement mobile */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-base-200 transition-colors"
              aria-label="Ouvrir le menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu size={24} className="text-base-content" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Drawer mobile avec AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay blur */}
            <motion.div
              className="fixed inset-0 backdrop-blur-md bg-black/30 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-base-100 z-50 lg:hidden overflow-hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* SVG motifs circulaires */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]">
                <circle cx="-10%" cy="110%" r="220" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
                <circle cx="-10%" cy="110%" r="350" stroke="currentColor" strokeWidth="0.7" fill="none" className="text-primary" />
                <circle cx="110%" cy="-10%" r="180" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
                <circle cx="110%" cy="-10%" r="300" stroke="currentColor" strokeWidth="0.6" fill="none" className="text-primary" />
              </svg>

              {/* Contenu du drawer */}
              <div className="relative z-10 flex flex-col h-full px-6 py-5">
                {/* Header */}
                <div className="flex justify-between items-center mb-8 border-b border-base-300 pb-4">
                  <Link to="/" onClick={toggleMenu}>
                    <img
                      src={theme === "dark" ? logoLight : logo}
                      alt="Lucane"
                      className="w-28 h-auto object-contain"
                    />
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md hover:bg-base-200 transition-colors"
                  >
                    <X size={22} className="text-base-content" />
                  </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-1 flex-1">
                  {navLinks.map((item, i) => (
                    <motion.div
                      key={item.to}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <Link
                        to={item.to}
                        onClick={toggleMenu}
                        className="flex items-center gap-4 px-3 py-3 rounded-md hover:bg-base-200 transition-colors group"
                      >
                        {/* Icône avec fond coloré */}
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${item.color}1A` }}
                        >
                          <item.Icon size={18} style={{ color: item.color }} />
                        </div>
                        <span className="text-base-content font-medium text-[15px] group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.35 }}
                  className="mt-auto pt-6 border-t border-base-300"
                >
                  <Link
                    to="/contact"
                    onClick={toggleMenu}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary hover:bg-[#006666] text-white font-semibold text-sm rounded-md transition-colors duration-200"
                  >
                    <Phone size={16} />
                    Contactez-nous
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
