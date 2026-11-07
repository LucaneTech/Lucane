import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "../../../ui/Eyebrow";
import IrisOrb from "../../../ui/IrisOrb";
import { M } from "../../../motion/kit";
import { services } from "../../../data/services";
import type { Service } from "../../../data/services";
import { projectBySlug } from "../../../data/projects";
import { ease } from "../../../motion/presets";
import { ServiceScene } from "../../home/v2/ServiceScenes";

const TONES = ["teal", "indigo", "sunset"] as const;
const pad = (n: number) => String(n).padStart(2, "0");

/** Illustration animée du métier, posée sur une grille fine ; montée à l'approche de l'écran. */
function Visual({ slug, i }: { slug: string; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const near = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  return (
    <div ref={ref} className="relative aspect-[16/10] overflow-hidden rounded-md border border-glass-line bg-canvas-alt shadow-glow">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
      />
      <IrisOrb className="-right-16 -top-20 h-56 w-56 opacity-25 blur-2xl" tone={TONES[i % TONES.length]} />
      <div className="relative h-full w-full p-3 md:p-5">{near && <ServiceScene slug={slug} />}</div>
    </div>
  );
}

/** Une expertise : texte d'un côté, illustration du métier de l'autre (côtés alternés), en légère parallaxe. */
function Row({ s, i }: { s: Service; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const flip = i % 2 === 1;
  const proofs = (s.projects ?? []).map(projectBySlug).filter((p) => p !== undefined);

  return (
    <div id={s.slug} ref={ref} className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div className={flip ? "lg:order-2" : ""}>
        <p className="kicker text-base text-primary-ink">
          {pad(i + 1)} / {pad(services.length)}
        </p>
        <M.H2 className="mt-3 !text-[clamp(2rem,4vw,3.6rem)]">{s.title}</M.H2>
        <M.P className="mt-5 max-w-xl">{s.desc}</M.P>
        <div className="mt-7 flex flex-wrap gap-2">
          {s.features.map((f, k) => (
            <motion.span
              key={f}
              initial={{ opacity: 0, y: 14, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + k * 0.06, duration: 0.5, ease: ease.out }}
              className="rounded-full border border-glass-line bg-panel px-4 py-2 text-sm text-ink"
            >
              {f}
            </motion.span>
          ))}
        </div>
        <ul className="mt-7 space-y-2.5">
          {s.commitments.map((c, k) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + k * 0.08 }}
              className="flex items-center gap-3 text-ink"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                <Check className="h-3.5 w-3.5" />
              </span>
              {c}
            </motion.li>
          ))}
        </ul>
        {proofs.length > 0 && (
          <div className="mt-8 border-l-2 border-primary pl-4">
            <p className="kicker text-sm text-ink-muted">Déjà réalisé pour</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {proofs.map((p) => (
                <Link
                  key={p.slug}
                  to={`/realisations/${p.slug}`}
                  data-cursor="Voir"
                  className="inline-flex items-center gap-1 rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary-ink"
                >
                  {p.title}
                  {p.sector && <span className="text-ink-faint">· {p.sector}</span>}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <motion.div style={{ y }} className={flip ? "lg:order-1" : ""}>
        <Visual slug={s.slug} i={i} />
      </motion.div>
    </div>
  );
}

/** Les 7 expertises en sections ancrées (/services#web, #mobile…) — liens du pied de page et de l'accueil. */
export default function ExpertiseRows() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="expertises-title">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="mb-20 max-w-3xl">
          <Eyebrow>Nos expertises</Eyebrow>
          <M.H2 className="mt-6" id="expertises-title">
            Tout ce qu'il faut pour lancer et faire grandir votre produit.
          </M.H2>
        </div>
        <div className="space-y-28 md:space-y-36">
          {services.map((s, i) => (
            <Row key={s.slug} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
