import React, { useState,useEffect } from "react";
import { Facebook, Github, Linkedin, Instagram, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { logo, logoLight } from "./Navbar";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/LucaneTech',
    icon: Github,
    color: 'hover:text-gray-400'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/franciscomouanda579',
    icon: Linkedin,
    color: 'hover:text-blue-400'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61583245903926',
    icon: Facebook,
    color: 'hover:text-blue-400'
  },
   {
    name: 'Instagram',
    url: 'https://www.instagram.com/lucane.tech/',
    icon: Instagram,
    color: 'hover:text-red-400'
  },
  {
    name: 'Email',
    url: 'mailto:profrancisco579@gmail.com',
    icon: Mail,
    color: 'hover:text-red-400'
  },
 
];
 

const Footer: React.FC = () => {

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
  return (
    <footer className="px-6 md:px-16 bg-[#fafafa] lg:px-24 xl:px-32 w-full text-sm text-slate-500 dark:text-white dark:bg-gray-800 pt-10 ">
      {/* GRID MAIN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
        {/* LOGO & DESCRIPTION */}
        <div className="sm:col-span-2 lg:col-span-1">

          <Link to="/">
            <motion.img
              src={theme === "dark" ? logoLight : logo}
              alt="Logo lucane"
              className="w-24 sm:w-28 md:w-48 h-auto object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          <p className="text-sm leading-7 mt-6">
            Lucane, c’est une équipe de développeurs passionnés qui conçoit des
            applications web, mobiles et logicielles modernes pour booster votre
            business.
          </p>
          {/* Social Links */}

        </div>

        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col  text-sm space-y-2.5">
            <h2 className="font-bold mb-5 main-color text-lg">Liens rapides</h2>
            <Link className="hover:text-slate-600 transition" to={'/'}>
              Accueil
            </Link>
            <Link
              className="hover:text-slate-600 transition flex items-center gap-2"
              to="/services"
            >
              Services
              {/* <span className="text-xs text-white bg-indigo-600 rounded-md px-2 py-0.5">
                On recrute !
              </span> */}
            </Link>
            <Link className="hover:text-slate-600 transition" to="/projets">
              Projets
            </Link>
            <Link className="hover:text-slate-600 transition" to="/technologies">
              Technologies
            </Link>
            <Link className="hover:text-slate-600 transition" to= "/a-propos">
              À propos
            </Link>
           
          </div>
        </div>
        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-bold mb-5 main-color text-lg">Services</h2>
            <span className="hover:text-slate-600 transition cursor-default">
              Développement web
            </span>
            <span className="hover:text-slate-600 transition cursor-default">
              Développement mobile
            </span>
            <span className="hover:text-slate-600 transition cursor-default">
              UX/UI design
            </span>
            <span className="hover:text-slate-600 transition cursor-default">
              Cloud & infrastructure
            </span>
            <span className="hover:text-slate-600 transition cursor-default">
              Conseil et accompagnement digital
            </span>
            <span className="hover:text-slate-600 transition cursor-default">
              Marketing digital
            </span>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="font-bold main-color text-lg mb-5">
            Contacts
          </h2>
          <div className="text-sm space-y-6 max-w-sm">
            <p>
              Recevez les dernières actus, astuces et ressources tech
              directement dans votre boîte mail.
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="main-color" />
              <a href="tel:+212781343642">(+212) 781343642</a>
            </p>
            <p className="flex items-center gap-2">
              <Send size={16} className="main-color" />
              <a href="mailto:contact@lucane.tech">contact@lucane.tech</a>
            </p>
            <Button label="Demander un devis" icon={<Phone />} to="/contact" />

          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="flex border-t mt-6 border-slate-200  py-4 justify-between items-center flex-col md:flex-row gap-4">
        <p className="text-gray-600 dark:text-white xl:text-center">
          Copyright © {new Date().getFullYear()}{" "}
          <a href="/" className="main-color font-semibold">
            Lucane
          </a>{" "}
          — Tous droits réservés.
        </p>
        <motion.div className="space-y-4">
          <div className="flex space-x-4 ">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:scale-105`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };

