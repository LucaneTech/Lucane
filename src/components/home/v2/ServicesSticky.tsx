import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "../../../ui/Eyebrow";
import IrisOrb from "../../../ui/IrisOrb";
import { M } from "../../../motion/kit";
import { services } from "../../../data/services";
import { ease } from "../../../motion/presets";

const VISUALS: Record<string, string> = {
  web: "/images/services/web.png",
  mobile: "/images/services/mobile.png",
  design: "/images/services/frontend.png",
  cloud: "/images/services/cloud.png",
  marketing: "/images/services/service_developpement.png",
  automatisation: "/images/services/clouding.png",
  maintenance: "/images/services/service_developpement.png",
};
const TONES = ["teal", "indigo", "sunset"] as const;

/**
 * Services (plan 3.4) : sur ordinateur, la section reste fixée pendant qu'on fait défiler ;
 * la liste numérotée s'allume service par service et le panneau de droite change de visuel.
 * Sur mobile : cartes empilées.
 */
export default function ServicesSticky() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(services.length - 1, Math.max(0, Math.floor(v * services.length))));
  });
  const current = services[active];

  return (
    <>
      {/* Ordinateur : section fixée */}
      <section ref={ref} className="relative hidden lg:block" style={{ height: `${services.length * 70 + 30}vh` }} aria-labelledby="services-title">
        <div className="sticky top-0 flex h-screen items-center">
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[1fr_1.1fr] gap-14 px-10 lg:px-16">
            <div>
              <Eyebrow index="03">Ce que nous faisons</Eyebrow>
              <h2 id="services-title" className="display-3 mt-6 max-w-md text-ink">
                Sept expertises, une seule équipe.
              </h2>
              <ol className="mt-10 space-y-1">
                {services.map((s, i) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services#${s.slug}`}
                      className="group flex items-baseline gap-5 rounded-full py-1.5 pr-4 transition-colors"
                      data-cursor="pointer"
                    >
                      <span className={`font-mono text-xs transition-colors duration-500 ${i === active ? "text-primary-ink" : "text-ink-faint"}`}>
                        0{i + 1}
                      </span>
                      <motion.span
                        animate={{ x: i === active ? 12 : 0, opacity: i === active ? 1 : 0.32 }}
                        transition={{ duration: 0.6, ease: ease.out }}
                        className="font-display text-[clamp(1.15rem,1.9vw,1.85rem)] font-bold tracking-[-0.03em] text-ink"
                      >
                        {s.title}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ol>
              {/* progression */}
              <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-line">
                <motion.div className="h-full origin-left rounded-full bg-primary" style={{ scaleX: scrollYProgress }} />
              </div>
            </div>

            {/* Panneau visuel */}
            <div className="relative h-[72vh] overflow-hidden rounded-md border border-glass-line bg-panel shadow-glow">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={current.slug}
                  className="absolute inset-0 flex flex-col justify-between p-10"
                  initial={{ clipPath: "inset(100% 0% 0% 0% round 10px)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0% round 10px)" }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.9, ease: ease.out }}
                >
                  <IrisOrb className="-right-28 -top-28 h-64 w-64 opacity-70" tone={TONES[active % TONES.length]} />
                  <motion.img
                    src={VISUALS[current.slug]}
                    alt=""
                    className="pointer-events-none absolute bottom-0 right-0 h-[62%] w-auto max-w-[70%] object-contain"
                    initial={{ y: 60, opacity: 0, rotate: -4 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: ease.out, delay: 0.15 }}
                  />
                  <div className="relative max-w-md">
                    <p className="font-mono text-sm text-primary-ink">0{active + 1} / 0{services.length}</p>
                    <h3 className="display-3 mt-3 text-ink">{current.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink-muted">{current.desc}</p>
                  </div>
                  <div className="relative max-w-sm space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {current.features.map((f, i) => (
                        <motion.span
                          key={f}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.06 }}
                          className="rounded-full border border-glass-line bg-glass px-3.5 py-1.5 text-sm text-ink backdrop-blur-xl"
                        >
                          {f}
                        </motion.span>
                      ))}
                    </div>
                    <ul className="space-y-1.5">
                      {current.commitments.map((c) => (
                        <li key={c} className="flex items-center gap-2 text-sm text-ink-muted">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-on-primary">
                            <Check className="h-3 w-3" />
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile et tablette : cartes empilées */}
      <section className="px-5 py-20 md:px-10 lg:hidden" aria-labelledby="services-title-m">
        <Eyebrow index="03">Ce que nous faisons</Eyebrow>
        <h2 id="services-title-m" className="display-3 mt-6 text-ink">
          Sept expertises, une seule équipe.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <M.Card key={s.slug} index={i % 2}>
              <p className="font-mono text-xs text-primary-ink">0{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-ink-muted">{s.desc}</p>
              <Link to={`/services#${s.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-ink">
                En savoir plus <ArrowUpRight className="h-4 w-4" />
              </Link>
            </M.Card>
          ))}
        </div>
      </section>
    </>
  );
}
