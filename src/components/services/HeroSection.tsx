import React from "react";
import Button from "../../ui/Button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-gray-700 px-4 overflow-hidden mt-12 ">
      {/* Tagline */}
      <div className="flex flex-row items-center justify-center md:gap-2.5 mb-6 border border-gray-500/30 rounded-full bg-gray-300/15  p-2 text-sm text-gray-800 dark:text-white backdrop-blur-md">
      
      <button className="flex items-center gap-1 md:gap-2 bg-main-color border border-gray-500/30 rounded-full px-3 py-2 whitespace-nowrap bg-main-color-hover ">
          <span className="text-white hidden md:block">Startup</span>
        <ArrowRight className="w-4 h-4 text-white" />
        </button>
        <p>Essayez nos services dès maintenant</p>
        
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-gray-800 dark:text-white">
       Le moyen le plus rapide de passer de l’idée à l’impact.
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl mt-6 text-gray-600 dark:text-gray-200">
        Notre plateforme vous aide à créer, tester et livrer plus rapidement, afin que vous puissiez vous concentrer sur ce qui compte.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
        <Button label="Découvrez nos services" changeColor="primary" to="/services" />
        <Button label="Contactez-nous" changeColor="secondary" to="/contact" />
      </div>

      {/* Image */}
      <div className="w-full max-w-4xl mt-10">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470"
          alt="Hero"
          loading="lazy"
          className="w-full h-[500px] object-cover rounded-lg shadow-lg duration-300 hover:scale-90"
        />
      </div>
    </section>
  );
};

export default HeroSection;
