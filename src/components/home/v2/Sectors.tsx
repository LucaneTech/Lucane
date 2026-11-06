import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { M } from "../../../motion/kit";
import Eyebrow from "../../../ui/Eyebrow";
import { sectors } from "../../../data/sectors";

/** Une pilule de secteur : au survol, le besoin type apparaît dans une bulle vitrée. */
function SectorPill({ name, need }: { name: string; need: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative mx-3" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} data-cursor="pointer">
      <div className="rounded-full border border-glass-line bg-panel px-8 py-4 font-display text-[clamp(1.75rem,4vw,3.5rem)] font-bold tracking-[-0.03em] text-ink transition-colors duration-500 hover:bg-primary hover:text-on-primary">
        {name}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="absolute left-1/2 top-full z-10 mt-3 w-64 -translate-x-1/2 whitespace-normal rounded-3xl border border-glass-line bg-glass p-4 text-sm text-ink shadow-glow backdrop-blur-xl"
          >
            {need}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Pour qui (plan 3.5) : deux rangées de secteurs en pilules géantes qui défilent en sens inverse. */
export default function Sectors() {
  const half = Math.ceil(sectors.length / 2);
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="sectors-title">
      <div className="mx-auto mb-12 w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <Eyebrow index="04">Pour qui</Eyebrow>
        <M.H2 className="mt-6 max-w-3xl" id="sectors-title">
          Des solutions pour chaque métier.
        </M.H2>
      </div>
      <div className="space-y-5 pb-24">
        <M.Marquee speed={2}>
          {sectors.slice(0, half).map((s) => (
            <SectorPill key={s.name} name={s.name} need={s.need} />
          ))}
        </M.Marquee>
        <M.Marquee speed={2} reverse>
          {sectors.slice(half).map((s) => (
            <SectorPill key={s.name} name={s.name} need={s.need} />
          ))}
        </M.Marquee>
      </div>
    </section>
  );
}
