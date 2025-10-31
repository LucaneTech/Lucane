import React from "react";
import Button from "../../ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-gray-700 px-4 overflow-hidden mt-48 ">
      {/* Tagline */}
    

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl main-color">
        <span className="text-black"> Le moyen le plus rapide </span> de passer de l’idée à l’impact...
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl mt-6 text-gray-600">
      Notre plateforme vous aide à créer, tester et livrer plus rapidement,afin que vous puissiez vous concentrer sur ce qui compte.
      </p>

      <div className="flex flex-row justify-center items-center gap-6 mt-8">
        <Button label = 'Découvrez nos projets' changeColor='primary'/>
        <Button label ='Nous contactez' changeColor="secondary"/>
      </div>

      {/* Image */}
      <div className="w-full max-w-7xl mt-10">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470"
          alt="Hero"
          loading="lazy"
          className="w-full h-[450px] object-cover rounded-lg  duration-300 hover:scale-95 shadow-2xl"
        />
      </div>

    </section>
  );
};

export default Hero;
