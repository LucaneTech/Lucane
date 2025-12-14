import React from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button";

const HeroProject: React.FC = () => {
    return (
        <section className="relative z-10 flex items-center justify-center h-[500px] md:h-[700px] overflow-hidden">
            {/* Image de fond avec effet parallax */}
            <motion.div
                className="hidden md:block absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('images/bg.jpg')",
                }}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
            />

            <motion.div
                className="
    md:hidden
    absolute inset-0
    bg-gradient-to-br
    from-[#0f172a]
    via-[#111827]
    to-[#020617]
  "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                {/* léger overlay pour profondeur */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
            </motion.div>


            {/* Contenu principal animé */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <motion.span
                        className="bg-main-color p-2 rounded-lg inline-block"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Projets Innovants pour un
                    </motion.span>
                    <br />
                    <motion.span
                        className="main-color mt-4 block"
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        Avenir Meilleur
                    </motion.span>
                </motion.h1>

                <motion.p
                    className="mt-4 text-base sm:text-lg md:text-xl text-black dark:text-white max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    Nous transformons les idées ambitieuses en solutions numériques concrètes,
                    durables et prêtes pour le futur.
                </motion.p>

                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.6, ease: "easeOut" }}
                >
                    <Button label="Voir nos projets" changeColor="primary" to="/projects" />
                </motion.div>
            </div>

            {/* Dégradé décoratif bas */}
            <motion.div
                className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            />
        </section>
    );
};

export default HeroProject;
