import React from "react";
import HeroSectionHome from "../components/home/Hero";
import TrustedCompanies from "../components/home/TrustedCompanies";
import ServicesSection from "../components/home/ServicesSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Ourdesign from "../components/home/Ourdesign";
import MemoryGrid from "../components/home/MemoryGrid";
import Promotional from "../components/home/Promotional";
import Button from "../ui/Button";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <HeroSectionHome />

      {/* Social proof — juste après le hero */}
      <TrustedCompanies />

      {/* Services */}
      <ServicesSection />

      {/* Projets en vedette */}
      <FeaturedProjects />

      {/* Nos designs */}
      <Ourdesign />

      {/* Galerie mémoire */}
      <MemoryGrid />

      {/* Bandeau devis */}
      <div className="flex justify-center w-full">
        <Promotional />
      </div>

      {/* CTA final */}
      <section className="flex flex-col items-center justify-center mx-auto w-full text-center rounded-xl md:py-10 md:mt-20 px-4 md:px-0 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 dark:text-[#008080] max-w-3xl">
          Prêt à construire quelque chose d'extraordinaire ?
        </h1>
        <div className="h-[3px] w-32 my-1 bg-[#008080] mb-4" />
        <p className="text-sm md:text-base text-slate-600 dark:text-white max-w-xl">
          Nous sommes une agence de développement logiciel passionnée par la création de solutions numériques innovantes qui accélèrent la croissance de nos clients.
        </p>
        <Button label="Commençons aujourd'hui" changeColor="white" className="mt-8 md:mt-10" to="/contact" />
      </section>
    </div>
  );
};

export default Home;
