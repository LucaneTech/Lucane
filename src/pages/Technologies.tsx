import React from "react";
import Hero from "../components/technologies/Hero";
import StackTopography from "../components/technologies/StackTopography";
import Arbitrages from "../components/technologies/Arbitrages";
import TechInProd from "../components/technologies/TechInProd";
import Veille from "../components/technologies/Veille";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Technologies: React.FC = () => {
  return (
    <>
      <Hero />
      <StackTopography />
      <Arbitrages />
      <TechInProd />
      <Veille />

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 bg-transparent">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à construire quelque chose d'extraordinaire ?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Nous combinons ces technologies pour livrer des solutions robustes,
            évolutives et adaptées à votre vision.
          </p>
          <Button
            variant="primary"
            size="lg"
            label="Commençons aujourd'hui"
            to="/contact"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Technologies;
