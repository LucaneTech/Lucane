import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "../../../ui/Eyebrow";
import IrisOrb from "../../../ui/IrisOrb";
import { M } from "../../../motion/kit";
import { services, type Service } from "../../../data/services";
import { ease } from "../../../motion/presets";
import { ServiceScene } from "./ServiceScenes";

const TONES = ["teal", "indigo", "sunset"] as const;
const pad = (n: number) => String(n).padStart(2, "0");

/** Scène illustrée posée sur une grille fine, avec un halo irisé derrière. */
function Stage({ slug, tone, className = "" }: { slug: string; tone: (typeof TONES)[number]; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-md border border-line bg-canvas-alt ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
      />
      <IrisOrb className="-right-20 -top-24 h-56 w-56 opacity-25 blur-2xl" tone={tone} />
      <div className="relative h-full w-full p-3 md:p-4">
        <ServiceScene slug={slug} />
      </div>
    </div>
  );
}

/** Savoir-faire (pastilles) et engagements (coches). */
function Details({ service, animate = true }: { service: Service; animate?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-[1.25fr_1fr]">
      <div>
        <p className="kicker text-sm text-ink-faint">Savoir-faire</p>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {service.features.map((f, i) => (
            <motion.span
              key={f}
              initial={animate ? { opacity: 0, y: 8 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.05, duration: 0.5, ease: ease.out }}
              className="rounded-full border border-line bg-canvas px-3 py-1 text-xs font-medium text-ink"
            >
              {f}
            </motion.span>
          ))}
        </div>
      </div>
      <div>
        <p className="kicker text-sm text-ink-faint">Nos engagements</p>
        <ul className="mt-2.5 space-y-1.5">
          {service.commitments.map((c, i) => (
            <motion.li
              key={c}
              initial={animate ? { opacity: 0, x: -8 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45 + i * 0.08, duration: 0.5, ease: ease.out }}
              className="flex items-start gap-2 text-sm leading-snug text-ink-muted"
            >
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              {c}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Carte mobile : la scène ne se monte qu'à l'approche de l'écran (animations jouées à ce moment-là). */
function MobileCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const near = useInView(ref, { once: true, margin: "200px 0px" });
  return (
    <M.Card index={index % 2} className="!p-0 overflow-hidden">
      <div ref={ref} className="p-3">
        <Stage slug={near ? service.slug : ""} tone={TONES[index % TONES.length]} className="aspect-[16/10]" />
      </div>
      <div className="px-5 pb-6 pt-2">
        <div className="flex items-center justify-between">
          <p className="font-sans text-xs text-primary-ink">
            {pad(index + 1)} / {pad(services.length)}
          </p>
          <Link
            to={`/services#${service.slug}`}
            className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink"
          >
            Détails <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em] text-ink">{service.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{service.desc}</p>
        <div className="mt-5 border-t border-line pt-5">
          <Details service={service} animate={false} />
        </div>
      </div>
    </M.Card>
  );
}

/**
 * Services (plan 3.4) : sur ordinateur, la section reste fixée pendant qu'on fait défiler ;
 * la liste numérotée s'allume service par service et la carte de droite montre
 * l'illustration animée du métier, son texte, ses savoir-faire et nos engagements.
 * Sur mobile et tablette : la même carte, empilée.
 */
export default function ServicesSticky() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(services.length - 1, Math.max(0, Math.floor(v * services.length))));
  });
  const current = services[active];
  const tone = TONES[active % TONES.length];

  return (
    <>
      {/* Ordinateur : section fixée */}
      <section ref={ref} className="relative hidden lg:block" style={{ height: `${services.length * 70 + 30}vh` }} aria-labelledby="services-title">
        <div className="sticky top-0 flex h-screen items-center pt-16">
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[0.85fr_1.15fr] items-center gap-12 px-10 lg:px-16">
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
                      <span className={`font-sans text-xs transition-colors duration-500 ${i === active ?"text-primary-ink" : "text-ink-faint"}`}>
                        {pad(i + 1)}
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

            {/* Carte de l'expertise active */}
            <article className="relative flex h-[min(80vh,780px)] min-h-[540px] flex-col overflow-hidden rounded-md border border-glass-line bg-panel shadow-glow">
              {/* en-tête : numéro, segments de progression, lien */}
              <header className="flex items-center gap-4 border-b border-line px-7 py-3.5">
                <span className="font-sans text-xs text-primary-ink">
                  {pad(active + 1)} / {pad(services.length)}
                </span>
                <div className="flex flex-1 gap-1" aria-hidden>
                  {services.map((s, i) => (
                    <span key={s.slug} className="h-1 flex-1 overflow-hidden rounded-full bg-line">
                      <motion.span
                        className="block h-full origin-left rounded-full bg-primary"
                        animate={{ scaleX: i <= active ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: ease.out }}
                      />
                    </span>
                  ))}
                </div>
                <Link
                  to={`/services#${current.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-primary hover:text-primary-ink"
                  data-cursor="pointer"
                >
                  Voir le détail <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </header>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.slug}
                  className="flex min-h-0 flex-1 flex-col"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  {/* titre et description */}
                  <div className="px-7 pt-5">
                    <motion.h3
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: ease.out }}
                      className="font-display text-[clamp(1.5rem,2.2vw,2.15rem)] font-bold tracking-[-0.03em] text-ink"
                    >
                      {current.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: ease.out, delay: 0.08 }}
                      className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink-muted"
                    >
                      {current.desc}
                    </motion.p>
                  </div>

                  {/* illustration du métier */}
                  <motion.div
                    className="mx-7 mt-4 min-h-0 flex-1"
                    initial={{ opacity: 0, scale: 0.97, clipPath: "inset(8% 4% 8% 4% round 10px)" }}
                    animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 10px)" }}
                    transition={{ duration: 0.8, ease: ease.out, delay: 0.05 }}
                  >
                    <Stage slug={current.slug} tone={tone} className="h-full" />
                  </motion.div>

                  {/* savoir-faire et engagements */}
                  <div className="px-7 pb-6 pt-5">
                    <Details service={current} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </article>
          </div>
        </div>
      </section>

      {/* Mobile et tablette : la même carte, empilée */}
      <section className="px-5 py-20 md:px-10 lg:hidden" aria-labelledby="services-title-m">
        <Eyebrow index="03">Ce que nous faisons</Eyebrow>
        <h2 id="services-title-m" className="display-3 mt-6 text-ink">
          Sept expertises, une seule équipe.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <MobileCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
