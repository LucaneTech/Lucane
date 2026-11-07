import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import Eyebrow from "../../../ui/Eyebrow";
import { M } from "../../../motion/kit";
import { process } from "../../../data/process";

/** Une étape : sa pastille s'allume et sa carte glisse quand la ligne lumineuse l'atteint. */
function Step({ step, index, total, progress }: { step: (typeof process)[number]; index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total;
  const on = useTransform(progress, [start - 0.02, start + 0.06], [0, 1]);
  const scale = useTransform(on, [0, 1], [0.6, 1]);
  const x = useTransform(on, [0, 1], [index % 2 ? -40 : 40, 0]);
  const dotOpacity = useTransform(on, [0, 1], [0.35, 1]);
  const left = index % 2 === 0;

  return (
    <div className="relative grid items-center gap-6 md:grid-cols-2 md:gap-16">
      {/* pastille sur la ligne */}
      <motion.span
        style={{ scale, opacity: dotOpacity }}
        className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary font-sans text-xs text-on-primary shadow-glow md:left-1/2"
      >
        {step.step}
      </motion.span>
      <motion.div
        style={{ opacity: on, x }}
        className={`ml-14 rounded-md border border-glass-line bg-panel p-7 md:ml-0 md:p-9 ${left ? "md:col-start-1 md:mr-10" : "md:col-start-2 md:ml-10"}`}
      >
        <p className="kicker text-base text-primary-ink">{step.tag}</p>
        <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] text-ink">{step.title}</h3>
        <p className="mt-3 leading-relaxed text-ink-muted">{step.detail}</p>
        <span className="mt-5 inline-flex rounded-full border border-glass-line bg-canvas-alt px-4 py-1.5 text-sm text-ink">
          Livrable : {step.deliverable}
        </span>
      </motion.div>
    </div>
  );
}

/** Méthode (plan 3.7) : une ligne lumineuse se trace au défilement et allume chaque étape. */
export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section className="relative overflow-x-clip py-20 md:py-28" aria-labelledby="process-title">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow index="06">Notre méthode</Eyebrow>
          <M.H2 className="mt-6" id="process-title">
            Cinq étapes, zéro surprise.
          </M.H2>
        </div>

        <div ref={ref} className="relative mx-auto mt-20 max-w-5xl space-y-14 md:space-y-20">
          {/* ligne de fond + ligne lumineuse */}
          <div className="absolute bottom-0 left-5 top-0 w-[3px] -translate-x-1/2 rounded-full bg-line md:left-1/2" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-0 left-5 top-0 w-[3px] origin-top -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#3ce0d0,#008080,#5b6cff,#ff7a3d)] md:left-1/2"
          />
          {process.map((s, i) => (
            <Step key={s.step} step={s} index={i} total={process.length} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}
