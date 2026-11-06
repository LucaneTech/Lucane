import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import Eyebrow from "../../../ui/Eyebrow";
import IrisOrb from "../../../ui/IrisOrb";
import { M } from "../../../motion/kit";
import { services } from "../../../data/services";
import type { Service } from "../../../data/services";
import { ease } from "../../../motion/presets";

const VISUALS: Record<string, string> = {
  web: "/images/services/web.webp",
  mobile: "/images/services/mobile.webp",
  design: "/images/services/frontend.webp",
  cloud: "/images/services/cloud.webp",
  marketing: "/images/services/service_developpement.webp",
  automatisation: "/images/services/clouding.webp",
  maintenance: "/images/services/service_developpement.webp",
};
const TONES = ["teal", "indigo", "sunset"] as const;

/** Une expertise : texte d'un côté, visuel irisé de l'autre (côtés alternés), le visuel monte en parallaxe. */
function Row({ s, i }: { s: Service; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [i % 2 ? 4 : -4, i % 2 ? -4 : 4]);
  const flip = i % 2 === 1;

  return (
    <div id={s.slug} ref={ref} className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-20">
      <div className={flip ? "lg:order-2" : ""}>
        <p className="font-mono text-sm text-primary-ink">
          0{i + 1} / 0{services.length}
        </p>
        <M.H2 className="mt-3 !text-[clamp(2.25rem,4.5vw,4.25rem)]">{s.title}</M.H2>
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
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-on-primary">
                <Check className="h-3.5 w-3.5" />
              </span>
              {c}
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.div style={{ y, rotate }} className={`relative ${flip ? "lg:order-1" : ""}`}>
        <div className="relative aspect-[5/4] overflow-hidden rounded-md border border-glass-line bg-panel shadow-glow" data-cursor="pointer">
          <IrisOrb className="-left-12 -top-12 h-64 w-64 opacity-80" tone={TONES[i % TONES.length]} />
          <IrisOrb className="-bottom-20 -right-10 h-56 w-56 opacity-60" tone={TONES[(i + 1) % TONES.length]} duration={18} />
          <motion.img
            src={VISUALS[s.slug]}
            alt=""
            loading="lazy"
            className="absolute inset-0 m-auto h-[78%] w-[78%] object-contain drop-shadow-2xl"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: ease.out }}
          />
        </div>
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
          <Eyebrow index="01">Nos expertises</Eyebrow>
          <M.H2 className="mt-6" id="expertises-title">
            Tout ce qu'il faut pour lancer et faire grandir votre produit.
          </M.H2>
        </div>
        <div className="space-y-28 md:space-y-40">
          {services.map((s, i) => (
            <Row key={s.slug} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
