import React from "react";
import { motion } from "framer-motion";
import { Globe, Sparkles } from "lucide-react";

const Mission: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Notre raison d'être
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mt-3">
            Mission &amp; Vision
          </h2>
        </motion.div>

        {/* 2-col grid with teal separator */}
        <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-12 items-start">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Globe className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-ink mb-4">Notre Mission</h3>
            <p className="text-ink-muted leading-relaxed">
              Rendre la technologie accessible aux entreprises d'Afrique et de la
              diaspora. Nous concevons des solutions digitales sur mesure qui
              répondent aux défis concrets des marchés africains et internationaux,
              avec un niveau d'excellence comparable aux meilleures agences mondiales.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Innover sans compromis sur la qualité",
                "Livrer des produits utiles et durables",
                "Accompagner chaque client de A à Z",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Separator */}
          <div className="w-px bg-primary/30 self-stretch hidden lg:block" />

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold text-ink mb-4">Notre Vision</h3>
            <p className="text-ink-muted leading-relaxed">
              Devenir la référence tech africaine à l'échelle internationale.
              Nous croyons que l'Afrique est le continent de la prochaine
              révolution numérique, et Lucane Tech ambitionne d'en être un
              acteur central — en bâtissant des produits qui inspirent et
              transforment.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Être le partenaire tech de demain",
                "Inspirer une génération de builders africains",
                "Créer de la valeur à l'échelle continentale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
