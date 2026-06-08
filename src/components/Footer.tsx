import React, { useState } from "react";
import { Facebook, Github, Instagram, Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { logoLight } from "./Navbar";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/LucaneTech",
    icon: Github,
  },
  // {
  //   name: "LinkedIn",
  //   url: "https://www.linkedin.com/in/franciscomouanda579",
  //   icon: Linkedin,
  // },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61583245903926",
    icon: Facebook,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/lucane.tech/",
    icon: Instagram,
  },
  {
    name: "Email",
    url: "mailto:contact@lucane.tech",
    icon: Mail,
  },
];

const Footer: React.FC = () => {
  // Footer is always on dark bg — use logoLight unconditionally
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter submission placeholder
    setEmail("");
  };

  return (
    <footer className="w-full bg-dark text-white">
      {/* Teal gradient top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-14 pb-6">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Col 1 — Logo + description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/">
              <motion.img
                src={logoLight}
                alt="Logo lucane"
                className="w-28 md:w-36 h-auto object-contain mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            <p className="text-sm leading-7 text-white/60">
              Lucane, c'est une équipe de développeurs passionnés qui conçoit des
              applications web, mobiles et logicielles modernes pour booster votre
              business.
            </p>
            <p className="mt-4 text-xs text-primary font-semibold tracking-widest uppercase">
              Build. Launch. Grow.
            </p>
          </div>

          {/* Col 2 — Services */}
          <div className="flex flex-col">
            <h2 className="font-bold text-white text-base mb-5">Services</h2>
            <ul className="flex flex-col text-sm space-y-2.5 text-white/60">
              {[
                "Développement web",
                "Développement mobile",
                "UX/UI design",
                "Cloud & infrastructure",
                "Conseil et accompagnement digital",
                "Marketing digital",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-white transition-colors cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick links */}
          <div className="flex flex-col">
            <h2 className="font-bold text-white text-base mb-5">Liens rapides</h2>
            <ul className="flex flex-col text-sm space-y-2.5 text-white/60">
              {[
                { label: "Accueil", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Projets", to: "/projets" },
                { label: "Technologies", to: "/technologies" },
                { label: "À propos", to: "/a-propos" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact info */}
          <div className="flex flex-col">
            <h2 className="font-bold text-white text-base mb-5">Contact</h2>
            <div className="text-sm space-y-4 text-white/60">
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+212781343642"
                  className="hover:text-white transition-colors"
                >
                  (+212) 781 343 642
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Send size={15} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@lucane.tech"
                  className="hover:text-white transition-colors"
                >
                  contact@lucane.tech
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="border-t border-white/10 pt-10 pb-8">
          <div className="max-w-lg">
            <h3 className="text-white font-semibold text-sm mb-1">Newsletter</h3>
            <p className="text-white/40 text-xs mb-4">
              Recevez les dernières actus, astuces et ressources tech directement dans votre boîte mail.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email..."
                required
                className="flex-1 bg-dark-surface border border-white/10 text-white placeholder-white/30
                           rounded-md px-4 py-2 text-sm focus:outline-none focus:border-primary
                           transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-white rounded-md px-4 py-2 text-sm font-semibold
                           hover:bg-primary-hover transition-colors whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Bottom row — copyright + socials + tagline */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Lucane Tech. Tous droits réservés.
            </p>
            <p className="text-ink-faint text-[13px] italic font-light" style={{ fontFamily: "Sen, sans-serif" }}>
              "Built with passion. Shipped for impact."
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors hover:scale-[1.15] inline-block"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
