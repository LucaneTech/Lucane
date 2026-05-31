import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { X, Menu, Home, Info, Phone, Briefcase, Cpu, Settings } from "lucide-react";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "./Footer";

export const logo = "logo_color.png";
export const logoLight = "logoLight.png";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-gray-700/50 py-3"
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
            {[
              { to: "/", label: "Accueil" },
              { to: "/services", label: "Services" },
              { to: "/projets", label: "Projets" },
              { to: "/technologies", label: "Technologies" },
              { to: "/a-propos", label: "À propos" },
            ].map((item) => (
              <motion.div key={item.to} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  to={item.to}
                  className="text-slate-700 dark:text-slate-200 hover:text-[#008080] transition-colors relative group font-medium"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#008080] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Desktop */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                to="/contact"
                label="Contactez-nous"
                changeColor="primary"
                icon={<Phone className="w-4 h-4" />}
              />
            </motion.div>
          </div>

          {/* Burger Mobile */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition"
              aria-label="Ouvrir le menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Overlay Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              onClick={toggleMenu}
              className="fixed inset-0 backdrop-blur-lg bg-black/40 z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Drawer Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl z-[60]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 40, stiffness: 150 }}
            >
              <div className="flex justify-between items-center px-4 py-4 border-b border-slate-200 dark:border-gray-700">
                <Link to="/" onClick={toggleMenu}>
                  <img src={theme === "dark" ? logoLight : logo} alt="Logo lucane" className="w-24 h-auto object-contain" />
                </Link>
                <motion.button
                  onClick={toggleMenu}
                  className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={22} />
                </motion.button>
              </div>

              <motion.div
                className="flex flex-col px-6 py-4 gap-5 text-gray-700 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {[
                  { to: "/", label: "Accueil", icon: Home },
                  { to: "/services", label: "Services", icon: Settings },
                  { to: "/projets", label: "Projets", icon: Briefcase },
                  { to: "/technologies", label: "Technologies", icon: Cpu },
                  { to: "/a-propos", label: "À propos", icon: Info },
                ].map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                  >
                    <Link
                      to={item.to}
                      onClick={toggleMenu}
                      className="flex items-center gap-3 hover:text-[#008080] transition-colors group"
                    >
                      <item.icon size={20} className="text-[#008080]" />
                      <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.75 }}
                  className="mt-4"
                >
                  <Button
                    to="/contact"
                    label="Contactez-nous"
                    changeColor="primary"
                    icon={<Phone className="w-4 h-4" />}
                    className="w-full justify-center"
                    onClick={toggleMenu}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
