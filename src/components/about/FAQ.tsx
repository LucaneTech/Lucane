import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../ui/utils";

const faqs = [
  {
    q: "Depuis quand existe Lucane Tech ?",
    a: "Lucane Tech accompagne les entreprises depuis 2021 dans la conception de solutions digitales performantes, modernes et évolutives.",
  },
  {
    q: "Où se situe votre équipe ?",
    a: "Nos talents sont répartis entre Paris et Brazzaville afin d'offrir un accompagnement international tout en restant proches de nos clients.",
  },
  {
    q: "Quels profils composent votre équipe ?",
    a: "Développeurs, designers UX/UI et chefs de projet collaborent étroitement pour assurer la réussite de chaque mission.",
  },
  {
    q: "Travaillez-vous à distance ?",
    a: "Oui. Notre organisation est entièrement remote et s'appuie sur des outils collaboratifs performants garantissant réactivité et transparence.",
  },
  {
    q: "Quels types de projets réalisez-vous ?",
    a: "Nous concevons des sites web, applications mobiles, plateformes SaaS, solutions métier sur mesure et expériences digitales innovantes.",
  },
  {
    q: "Comment démarrer un projet avec vous ?",
    a: "Contactez-nous pour un premier échange gratuit. Nous analysons vos besoins et proposons une stratégie adaptée à vos objectifs.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white dark:bg-dark-surface">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-16 items-start">

          {/* Left — heading block */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              FAQ
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-ink dark:text-white">
              Tout ce que<br />
              vous devez<br />
              <span className="text-primary">savoir.</span>
            </h2>

            <p className="mt-6 text-sm md:text-base leading-relaxed text-ink-muted dark:text-ink-faint max-w-xs">
              Réponses aux questions fréquentes sur notre équipe, nos services et notre façon de travailler.
            </p>

            <div className="relative mt-10 text-[7rem] font-bold leading-none select-none text-ink-faint/20 dark:text-white/5">
              {String(faqs.length).padStart(2, "0")}
              <span className="absolute bottom-0 left-0 w-32 h-32 bg-primary/40 blur-3xl"/>
            </div>
          </motion.div>

          {/* Vertical separator */}
          <div className="hidden lg:block bg-primary/15 self-stretch" />

          {/* Right — accordion list */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="divide-y divide-base-300 dark:divide-slate-800"
          >
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start gap-4 py-5 text-left group cursor-pointer"
                >
                  <span className="font-mono text-[11px] text-ink-faint dark:text-ink-muted mt-1 w-6 shrink-0 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={cn(
                      "flex-1 text-sm md:text-[15px] font-medium leading-snug transition-colors duration-200",
                      open === i
                        ? "text-primary"
                        : "text-ink dark:text-white group-hover:text-primary"
                    )}
                  >
                    {faq.q}
                  </span>

                  <span
                    className={cn(
                      "shrink-0 mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-colors duration-200",
                      open === i
                        ? "border-primary text-primary"
                        : "border-ink-faint dark:border-slate-700 text-ink-muted dark:text-ink-muted"
                    )}
                  >
                    {open === i ? <Minus size={10} /> : <Plus size={10} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pl-10 text-sm leading-relaxed text-ink-muted dark:text-ink-faint">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
