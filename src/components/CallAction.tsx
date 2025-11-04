import Button from "../ui/Button";
import { motion } from "framer-motion";

interface CallActionProp {
  title: string;
  description: string;
  label: string;
  to: string;
}

const CallAction: React.FC<CallActionProp> = ({ title, description, label, to }) => {
  return (
    <section className="text-center mx-auto mt-8 md:mt-10 py-12 px-4">
      {/* Titre */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {title.split(" ").map((word, i) =>
          i === 1 ? (
            <span key={i} className="main-color"> {word} </span>
          ) : (
            word + " "
          )
        )}
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-base max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        {description}.
      </motion.p>

      {/* Bouton */}
      <motion.div
        className="mt-6 inline-block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <Button label={label} to={to} changeColor="primary" />
      </motion.div>
    </section>
  );
};

export default CallAction;
