import React from "react";
import Button from "../../ui/Button";

const HeroSection: React.FC = () => {
    return (
        <section className="relative z-10 flex items-center justify-center h-[500px] md:h-[700px] overflow-hidden">
            {/* Image de fond */}
            <div
                className="hidden md:block absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage:
                        "url('images/bg.jpg')",
                }}
            >
                {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div> */}
            </div>
            <div
                className="md:hidden absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage:
                        "url('images/project.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/5 backdrop-blur-xs"></div>
            </div>

            {/* Contenu principal */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
                    <span className="bg-main-color p-2 rounded-lg">Projets Innovants pour un</span>
                    <br />
                    <span className="main-color mt-4 block">Avenir Meilleur</span>
                </h1>

                <p className="hidden md:block mt-4 text-base sm:text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed">
                    Nous transformons les idées ambitieuses en solutions numériques concrètes,
                    durables et prêtes pour le futur.
                </p>
                <p className="md:hidden mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
                    Nous transformons les idées ambitieuses en solutions numériques concrètes,
                    durables et prêtes pour le futur.
                </p>

                <div className="mt-8">
                    <Button label="Voir nos projets" changeColor="primary" to="/projects" />
                </div>

                {/**searching for projects */}
                <div className="flex flex-row items-center justify-center mt-6 gap-2">
                    <input
                        type="text"
                        placeholder="Rechercher des projets..."
                        className="px-4 py-2 rounded-lg w-full max-w-md focus:outline-none focus:ring-2 focus:ring-main-color border-btn text-white md:text-gray-"
                    />
                    <Button label="Rechercher" changeColor="primary" to="/projects" />
                </div>
            </div>

            {/* Dégradé décoratif bas */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
        </section>
    );
};

export default HeroSection;
