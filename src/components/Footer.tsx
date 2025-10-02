import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const logo = "logo.webp";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 border-b border-gray-300/40">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo + description */}
          <div>
            <img
              src={logo}
              alt="Logo EEMCI"
              className="w-28 md:w-36 h-auto object-contain"
            />
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              L’EEMCI est une école supérieure reconnue offrant des formations de
              qualité en informatique, management et technologies, avec un
              accompagnement personnalisé pour préparer les leaders de demain.
            </p>
          </div>

          {/* Liens utiles */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800 text-lg">École</h2>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Accueil", link: "/" },
                { name: "À propos", link: "/a-propos" },
                { name: "Admissions", link: "/admissions" },
                { name: "Formations", link: "/formations" },
                { name: "Services", link: "/services" },
                { name: "Actualités / Événements", link: "/actualites" },
                { name: "Contact", link: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="hover:text-sky-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-5 text-gray-800 text-lg">Contactez-nous</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 main-color" />
                <span>+212 000 00 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 main-color" />
                <span>contact@eemci.ma</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 main-color" />
                <span>Meknes, Maroc</span>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 rounded-full font-bold border-main-color text-white hover:bg-sky-200 transition">
                <Facebook className="w-4 h-4 main-color" />
              </a>
              <a href="#" className="p-2 rounded-full font-bold border-main-color text-white hover:bg-sky-200 transition">
                <Twitter className="w-4 h-4 main-color" />
              </a>
              <a href="#" className="p-2 rounded-full font-bold border-main-color text-white hover:bg-sky-200 transition">
                <Linkedin className="w-4 h-4 main-color" />
              </a>
              <a href="#" className="p-2 rounded-full font-bold border-main-color text-white hover:bg-sky-200 transition">
                <Instagram className="w-4 h-4 main-color" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="bg-gradient-to-r from-[#042a64] to-[#00b7ff] z-20 py-4 text-center text-xs md:text-sm text-white">
        Copyright © {new Date().getFullYear()}{" "}
        <a href="https://eemci.ma" className="font-semibold hover:underline">
          EEMCI
        </a>{" "}
        . Tous droits réservés.
      </div>
    </footer>
  );
};

export { Footer };