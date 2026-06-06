import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../ui/utils";

const faqs = [
  {
    q: "Quels types de projets réalisez-vous ?",
    a: "Nous développons des sites vitrines, applications web et mobiles, plateformes SaaS, outils métiers et solutions cloud. Chaque projet est traité sur mesure, de la conception au déploiement.",
  },
  {
    q: "Quels sont vos délais habituels ?",
    a: "Un MVP peut être livré en 2 à 8 semaines selon la complexité. Un site vitrine prend généralement 1 à 3 semaines. Nous établissons un planning détaillé avec des jalons clairs dès la phase de découverte.",
  },
  {
    q: "Travaillez-vous avec des clients à l'international ?",
    a: "Oui, nous travaillons avec des clients en France, en Afrique et dans la diaspora africaine. Nos outils collaboratifs et notre organisation permettent une collaboration fluide à distance.",
  },
  {
    q: "Comment se déroule la collaboration ?",
    a: "Nous utilisons une approche agile avec des sprints bimensuels. Vous bénéficiez d'un accès direct à votre chef de projet, de points d'avancement hebdomadaires et de démonstrations régulières.",
  },
  {
    q: "Proposez-vous de la maintenance ?",
    a: "Oui, nous proposons des contrats de maintenance évolutive : corrections de bugs, mises à jour de sécurité, évolutions fonctionnelles et monitoring applicatif. La maintenance peut être incluse dès le départ.",
  },
  {
    q: "Quelles sont vos technologies de prédilection ?",
    a: "React, TypeScript, Node.js, Django, React Native pour le développement. AWS, GCP, Docker pour le cloud. PostgreSQL et MongoDB pour les bases de données. Nous choisissons la stack la plus adaptée à vos besoins.",
  },
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 bg-surface-alt dark:bg-dark overflow-hidden">

      {/* ── Decorative geometry ─────────────────────────── */}

      {/* Node top-left — single ring + dot */}
      <div className="absolute left-10 top-12 pointer-events-none" aria-hidden>
        <div className="w-20 h-20 rounded-full border border-primary/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/20" />
      </div>

      {/* Concentric rings — anchored right-center */}
      <div
        className="absolute pointer-events-none"
        style={{ right: "-80px", top: "50%", transform: "translateY(-50%)" }}
        aria-hidden
      >
        {[72, 136, 200, 264].map((r, i) => (
          <div
            key={r}
            className="absolute rounded-full border border-primary"
            style={{
              width: r * 2,
              height: r * 2,
              top: -r,
              left: -r,
              opacity: 0.04 + i * 0.025,
            }}
          />
        ))}
        {/* Center dot */}
        <div className="absolute w-4 h-4 rounded-full bg-primary/20 -top-2 -left-2" />
      </div>

      {/* Arc bottom-left — large single ring, clipped by overflow-hidden */}
      <div
        className="absolute pointer-events-none"
        style={{ left: "-120px", bottom: "-120px" }}
        aria-hidden
      >
        <div className="w-[360px] h-[360px] rounded-full border border-primary/[0.08]" />
        <div
          className="absolute rounded-full border border-primary/[0.06]"
          style={{ width: 240, height: 240, top: 60, left: 60 }}
        />
      </div>

      {/* Dot row — aligned to FAQ items mid-axis */}
      <div className="absolute left-6 top-0 h-full pointer-events-none" aria-hidden>
        {[38, 54, 70].map((pct) => (
          <div
            key={pct}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/15"
            style={{ top: `${pct}%`, left: 0 }}
          />
        ))}
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              FAQ
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-ink dark:text-white leading-tight">
              Questions <span className="text-primary">fréquentes</span>
            </h2>
          </div>
          <p className="text-ink-muted dark:text-ink-faint text-sm leading-relaxed max-w-[260px] sm:text-right">
            Tout ce que vous devez savoir avant de démarrer votre projet avec nous.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-base-300 dark:divide-slate-800">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start gap-5 py-6 text-left group cursor-pointer"
              >
                <span className="font-mono text-[11px] text-ink-faint dark:text-ink-muted mt-1 w-6 shrink-0 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={cn(
                    "flex-1 text-base md:text-[17px] font-semibold leading-snug transition-colors duration-200",
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
                    <p className="pb-6 pl-11 text-sm leading-relaxed text-ink-muted dark:text-ink-faint max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
