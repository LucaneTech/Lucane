import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, MessageCircle, Sparkles, Timer, Layers } from "lucide-react";
import Button from "../../../ui/Button";
import SplitText from "../../../motion/SplitText";
import { MouseParallax } from "../../../motion/Parallax";
import { useIntroDone } from "../../../motion/useIntroDone";
import { dur, ease, prefersReducedMotion } from "../../../motion/presets";
import { useTheme } from "../../../theme/ThemeProvider";
import { site, whatsappHref } from "../../../data/site";
import { projects } from "../../../data/projects";
import IrisOrb from "../../../ui/IrisOrb";

const HeroScene = lazy(() => import("./HeroScene"));

const ROTATING = ["applications", "plateformes", "logiciels", "expériences"];

/** Pilule vitrée flottante (chiffre ou engagement), qui entre après le titre puis flotte. */
function FloatPill({ icon, value, label, className, delay, play }: { icon: React.ReactNode; value: string; label: string; className: string; delay: number; play: boolean }) {
  return (
    <MouseParallax depth={18} className={`absolute z-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={play ? { opacity: 1, scale: 1, y: 0 } : undefined}
        transition={{ type: "spring", stiffness: 160, damping: 16, delay }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 rounded-full border border-glass-line bg-glass py-2 pl-2 pr-5 shadow-glow backdrop-blur-xl"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-on-primary">{icon}</span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-ink">{value}</span>
            <span className="block text-xs text-ink-muted">{label}</span>
          </span>
        </motion.div>
      </motion.div>
    </MouseParallax>
  );
}

/** Hero de l'accueil : typographie géante + scène 3D de particules en forme de logo. */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroDone();
  const { theme } = useTheme();
  const [word, setWord] = useState(0);
  const [use3d] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    const id = setInterval(() => setWord((w) => (w + 1) % ROTATING.length), 2600);
    return () => clearInterval(id);
  }, []);

  // Défilement du hero : le titre recule et s'efface, les particules se dispersent.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const titleY = useTransform(smooth, [0, 1], [0, -160]);
  const titleScale = useTransform(smooth, [0, 1], [1, 0.86]);
  const titleOpacity = useTransform(smooth, [0, 0.8], [1, 0]);
  const sceneScale = useTransform(smooth, [0, 1], [1, 1.25]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32" aria-labelledby="hero-title">
      {/* Scène 3D (ou repli irisé en mouvement réduit) */}
      <motion.div style={{ scale: sceneScale }} className="pointer-events-none absolute inset-0 opacity-40 lg:left-[44%] lg:opacity-100 xl:left-[38%]">
        {use3d ? (
          <Suspense fallback={null}>
            <HeroScene scrollProgress={scrollYProgress} dark={theme === "dark"} className="pointer-events-auto absolute inset-0" />
          </Suspense>
        ) : (
          <IrisOrb className="right-[10%] top-[20%] h-[50vh] w-[50vh]" />
        )}
      </motion.div>

      {/* Halo lumineux derrière le logo */}
      <div className="pointer-events-none absolute right-[8%] top-1/2 hidden h-[60vh] w-[60vh] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,163,163,0.18),transparent_65%)] blur-2xl lg:block" />

      <motion.div
        style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
        className="relative z-10 mx-auto flex min-h-[calc(100svh-8rem)] w-full max-w-[1440px] origin-top-left flex-col justify-center px-5 md:px-10 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : undefined}
          transition={{ duration: dur.base, ease: ease.out }}
          className="eyebrow mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-glass-line bg-glass px-4 py-2 text-primary-ink backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Équipe de développement · Web · Mobile · Logiciels
        </motion.div>

        <h1 id="hero-title" className="max-w-[14ch] font-display text-[clamp(3rem,8.4vw,8.5rem)] leading-[0.95] tracking-[-0.045em] text-ink">
          <SplitText text="Nous construisons des" by="char" play={ready} className="block font-light" stagger={0.025} />
          <span className="relative block h-[1.02em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING[word]}
                className="block bg-[linear-gradient(100deg,#008080_0%,#3ce0d0_30%,#5b6cff_65%,#ff7a3d_100%)] bg-clip-text pb-[0.08em] font-extrabold text-transparent"
                initial={{ y: "105%", rotate: 3 }}
                animate={ready ? { y: "0%", rotate: 0 } : undefined}
                exit={{ y: "-105%", rotate: -3 }}
                transition={{ duration: 0.75, ease: ease.out }}
              >
                {ROTATING[word]}
              </motion.span>
            </AnimatePresence>
          </span>
          <SplitText text="qui propulsent" by="char" play={ready} delay={0.35} className="block font-light" stagger={0.025} />
          <SplitText text="votre business." by="char" play={ready} delay={0.6} className="block font-extrabold" stagger={0.025} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: dur.slow, ease: ease.out, delay: 0.9 }}
          className="lead mt-8 max-w-xl"
        >
          {site.positioning}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: dur.slow, ease: ease.out, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button label="Démarrer un projet" size="lg" to="/contact" />
          <Button
            label="Écrire sur WhatsApp"
            size="lg"
            variant="outline"
            href={whatsappHref()}
            iconLeft={<MessageCircle className="h-5 w-5" />}
          />
        </motion.div>
      </motion.div>

      {/* Pilules flottantes : chiffres vérifiés et engagements */}
      <div className="pointer-events-none absolute inset-0 hidden xl:block">
        <FloatPill play={ready} delay={1.2} className="right-[6%] top-[20%]" icon={<Layers className="h-4 w-4" />} value={`${projects.length}`} label="projets en ligne" />
        <FloatPill play={ready} delay={1.35} className="right-[2%] top-[56%]" icon={<Timer className="h-4 w-4" />} value="24 h" label="pour vous répondre" />
        <FloatPill play={ready} delay={1.5} className="bottom-[10%] right-[24%]" icon={<Sparkles className="h-4 w-4" />} value="0 €" label="devis et étude du besoin" />
      </div>

      {/* Indicateur de défilement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-glass-line bg-glass px-4 py-2 text-xs text-ink-muted backdrop-blur-xl"
      >
        <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
        Défiler pour découvrir
      </motion.div>
    </section>
  );
}
