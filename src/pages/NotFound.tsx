import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-6 text-center">
      {/* Floating SVG illustration */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mb-12"
      >
        <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="80"
            fontWeight="800"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            opacity="0.3"
          >
            404
          </text>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="80"
            fontWeight="800"
            fill="white"
            opacity="0.05"
          >
            404
          </text>
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold text-white mb-4"
      >
        4<span className="text-primary">0</span>4
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl font-medium text-white/70 mb-4"
      >
        Page introuvable
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-white/40 max-w-md mb-10"
      >
        La page que vous cherchez n'existe pas ou a été déplacée.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Button variant="primary" size="lg" label="Retour à l'accueil" to="/" />
      </motion.div>
    </div>
  );
}
