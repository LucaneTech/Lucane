import React from "react";
import HeroSectionHome from "../components/home/Hero";
import TrustedCompanies from "../components/home/TrustedCompanies";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Ourdesign from "../components/home/Ourdesign";
import MemoryGrid from "../components/home/MemoryGrid";
import Promotional from "../components/home/Promotional";
import Button from "../ui/Button";

// const teamAvatars = [
//   "images/team/ceo.jpeg",
//   "images/team/product_manager.jpeg",
//   "images/team/profil.jpeg",
// ];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSectionHome />

      {/* Social proof */}
      <TrustedCompanies />

      {/* Services */}
      <ServicesSection />

      {/* Projets en vedette */}
      <FeaturedProjects />

      {/* Nos designs */}
      <Ourdesign />

      {/* Galerie mémoire */}
      <MemoryGrid />

      {/* Bandeau devis + compteurs */}
      <Promotional />

      {/* CTA final */}
      <section className="py-24 px-6 bg-surface dark:bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          {/* Stacked team avatars */}
          {/* <div className="flex items-center justify-center -space-x-3 mb-6">
            {
              teamAvatars && teamAvatars.length > 0 ? (
                teamAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-slate-300 shadow-sm"
                  />
                ))
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-slate-300 flex items-center justify-center text-primary text-xs font-bold shadow-sm">
                  ?
                </div>
              )
            }
            <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-slate-300 flex items-center justify-center text-primary text-xs font-bold shadow-sm">
              +
            </div>
          </div> */}

          <p className="text-ink-muted dark:text-slate-300 text-sm mb-4">Notre équipe vous attend</p>

          <h2 className="text-4xl lg:text-5xl font-bold text-ink dark:text-primary mb-4">
            Prêt à lancer votre projet ?
          </h2>

          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />

          <p className="text-ink-muted dark:text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Discutons de votre vision. Nous transformons vos idées en produits digitaux qui ont un impact réel.
          </p>

          <Button variant="primary" size="lg" label="Démarrer un projet" to="/contact" />
        </div>
      </section>
    </div>
  );
};

export default Home;
