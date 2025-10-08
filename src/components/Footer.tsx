import React from "react";
import { Facebook, Github, Linkedin, Mail, Send } from "lucide-react";
import { motion} from "framer-motion";
import { logo } from "./Navbar";
import { Link } from "react-router-dom";
const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/6code579',
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
      url: 'https://web.facebook.com/profile.php?id=61574184786834',
      icon: Facebook,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:profrancisco579@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400'
    }
  ];
   
const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10 ">
      {/* GRID MAIN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {/* LOGO & DESCRIPTION */}
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="/" className="flex items-center gap-2">
            <Link to="/">
              <motion.img
                src={logo}
                alt="Logo"
                className="w-24 sm:w-28 md:w-48 h-auto object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>          </a>
          <p className="text-sm leading-7 mt-6">
            Lucane, c’est une équipe de développeurs passionnés qui conçoit des
            applications web, mobiles et logicielles modernes pour booster votre
            business.
          </p>
           {/* Social Links */}
          <motion.div  className="space-y-4">
            <h3 className="text-lg font-bold mt-4">Suivez-moi</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-200 shadow-md border border-gray-200 ${social.color} hover:scale-105`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* COMPANY LINKS */}
        <div className="flex flex-col lg:items-center lg:justify-center">
          <div className="flex flex-col text-sm space-y-2.5">
            <h2 className="font-bold mb-5 text-gray-800">Entreprise</h2>
            <a className="hover:text-slate-600 transition" href="#">
              À propos
            </a>
            <a
              className="hover:text-slate-600 transition flex items-center gap-2"
              href="#"
            >
              Carrières
              <span className="text-xs text-white bg-indigo-600 rounded-md px-2 py-0.5">
                On recrute !
              </span>
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Contact
            </a>
            <a className="hover:text-slate-600 transition" href="#">
              Politique de confidentialité
            </a>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="font-bold text-gray-800 mb-5">
            Abonnez-vous à notre newsletter
          </h2>
          <div className="text-sm space-y-6 max-w-sm">
            <p>
              Recevez les dernières actus, astuces et ressources tech
              directement dans votre boîte mail.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50"
            >
              <div className="relative w-full max-w-64">
                <Mail
                  size={18}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-indigo-600"
                />
                <input
                  type="email"
                  placeholder="Entrez votre email"
                  className="focus:ring-2 ring-indigo-600 outline-none w-full py-2 rounded pl-8 pr-2 text-gray-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 text-white rounded flex items-center gap-1"
              >
                <Send size={16} />
                S’abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className="py-4 text-center border-t mt-6 border-slate-200 text-gray-600">
        Copyright © {new Date().getFullYear()}{" "}
        <a href="/" className="text-indigo-600 font-medium">
          Lucane
        </a>{" "}
        — Tous droits réservés.
      </p>
    </footer>
  );
};

export { Footer };