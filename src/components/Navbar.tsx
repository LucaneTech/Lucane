import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  X,
  Menu,
  Home,
  Info,

  Phone,
  Briefcase,
  Cpu,
  Settings

} from "lucide-react";
import Button from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "./Footer";
export const logo = "logo_color.png";
export const logoLight = "logoLight.png";

interface NavbarProps {
  className: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);


  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Définir le thème initial
    const initialTheme = darkMediaQuery.matches ? "dark" : "light";
    setTheme(initialTheme);

    // Écouter les changements du thème navigateur
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setTheme(e.matches ? "dark" : "light");
    };

    darkMediaQuery.addEventListener("change", handleChange);

    return () => {
      darkMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);



  return (
    <>

      <motion.nav
        className={`w-11/12 mx-auto items-center mt-3 md:mt-5 dark:bg-gray-900/70 shadow-xl ${className} rounded-lg transition-all duration-300 fixed top-4 z-50 left-0 right-0 py-1/2 md:py-3/2`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex justify-between lg:justify-around items-center px-4 sm:px-6 md:px-8 py-4 d">
          {/* Logo */}
          <Link to="/">
            <motion.img
              src={theme === "dark" ? logoLight : logo}
              alt="Logo lucane"
              className="w-24 sm:w-28 md:w-48 h-auto object-contain"
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
            {/* Accueil */}
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link to="/" className="hover:text-main-color transition relative group">
                Accueil
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-color transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>

            {/* Services */}
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link to="/services" className="hover:text-main-color transition relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-color transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>

            {/* Projets */}
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link to="/projects" className="hover:text-main-color transition relative group">
                Projets
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-color transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>

            {/* Technologies */}
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link to="/technologies" className="hover:text-main-color transition relative group">
                Technologies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-color transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>

            {/* À propos */}
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link to="/about" className="hover:text-main-color transition relative group">
                À propos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-main-color transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>

           


          </motion.div>
          {/* Contact */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                to="/contact"
                label="Contactez-nous"
                changeColor="secondary"
                icon={<Phone className="w-5 h-5 inline-block mr-2" />}
              />
            </motion.div>
          </div>



          {/* Bouton Burger (Mobile) */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-200 transition"
              aria-label="Ouvrir le menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
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

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900/70 backdrop-blur-lg shadow-lg z-60"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 40, stiffness: 150 }}
            >
              {/* Header du menu */}
              <div className="flex justify-between items-center px-4 py-3 border-b">

                {/* Logo */}
                <Link to="/">
                  <motion.img
                    src={theme === "dark" ? logoLight : logo}
                    alt="Logo lucane"
                    className="w-24 h-auto object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <motion.button
                  onClick={toggleMenu}
                  aria-label="Fermer le menu"
                  className="p-2 rounded-md hover:bg-gray-200 transition"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <X size={22} />
                </motion.button>
              </div>

              {/* Liens Mobile */}
              <motion.div
                className="flex flex-col px-6 py-4 gap-5 text-gray-700 dark:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { to: "/", label: "Accueil", icon: Home },              // Accueil → Home
                  { to: "/services", label: "Services", icon: Settings }, // Services → Settings
                  { to: "/projects", label: "Projets", icon: Briefcase }, // Projets → Briefcase
                  { to: "/technologies", label: "Technologies", icon: Cpu },  // Technologies → Cpu (tech)
                  { to: "/about", label: "À propos", icon: Info },     // À propos → Info
                ].map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      onClick={toggleMenu}
                      className="flex items-center gap-3 hover:text-main-color transition group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon size={20} className="main-color" />
                      </motion.div>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}

                {/* Actions */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="#"
                      onClick={toggleMenu}
                      className="mt-4 px-4 py-2 text-center border-btn text-[#008080]  dark:text-white rounded-lg shadow-md hover:opacity-90 transition block"
                    >
                      <Phone className="w-5 h-5 inline-block mr-2" />
                      Contactez-nous
                    </Link>
                  </motion.div>

                </motion.div>
              </motion.div>
            </motion.div>)}
        </AnimatePresence>
      </motion.nav>
      <Outlet />
      {/* <Footer/> */}
      <Footer />
    </>
  );
};

export default Navbar;