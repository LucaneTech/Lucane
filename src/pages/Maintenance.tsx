import React from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const Maintenance: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-dark px-4">
      <div className="flex flex-col items-center text-center max-w-md w-full">

        {/* ── Icône animée ─────────────────────────────────────────── */}
        <div className="relative mb-10 flex items-center justify-center">

          {/* Anneau orbit externe */}
          <motion.div
            className="absolute w-24 h-24 rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            {/* Point orbitant */}
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
          </motion.div>

          {/* Anneau orbit interne — sens inverse */}
          <motion.div
            className="absolute w-16 h-16 rounded-full border border-primary/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/60" />
          </motion.div>

          {/* Icône centrale — rotation lente */}
          <motion.div
            className="relative z-10 p-3.5 rounded-xl bg-primary/10 border border-primary/20"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <Settings className="w-7 h-7 text-primary" strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* ── Contenu textuel ───────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Badge statut */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wide dark:bg-amber-900/20 dark:border-amber-700/40 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            En maintenance
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-ink dark:text-white leading-tight">
            Nous revenons très bientôt
          </h1>

          <p className="text-ink-muted dark:text-slate-400 leading-relaxed max-w-sm">
            Des améliorations sont en cours de déploiement. Le service sera rétabli dans quelques instants.
          </p>

          {/* Barre de progression indéterminée */}
          <div className="w-full max-w-xs h-0.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mt-2">
            <motion.div
              className="h-full w-1/3 bg-primary rounded-full"
              animate={{ x: ["−100%", "400%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Maintenance;