import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { X, Menu, Phone } from "lucide-react";
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

          {/* Burger Mobile */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[200] bg-dark flex flex-col lg:hidden"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Top row: logo + close button */}
            <div className="relative flex items-center justify-center pt-8 pb-6">
              <Link to="/" onClick={toggleMenu}>
                <img
                  src={logoLight}
                  alt="Logo lucane"
                  className="w-28 h-auto object-contain"
                />
              </Link>
              <button
                onClick={toggleMenu}
                className="absolute top-0 right-6 mt-6 p-2 text-white/70 hover:text-white transition"
                aria-label="Fermer le menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Nav links — vertically centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              {navItems.map((item, index) => {
                const isActive =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.to);
                return (
                  <motion.div
                    key={item.to}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.07, duration: 0.3 }}
                  >
                    <Link
                      to={item.to}
                      onClick={toggleMenu}
                      className={`text-3xl md:text-4xl font-bold transition-colors ${
                        isActive ? "text-primary" : "text-white hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="flex justify-center pb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.07 + 0.1, duration: 0.3 }}
            >
              <Button
                to="/contact"
                label="Contactez-nous"
                variant="primary"
                size="lg"
                onClick={toggleMenu}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
