/**
 * Page de remerciement après l'envoi d'un formulaire (/merci).
 * Indépendante de tout système : il suffit d'y rediriger (ex. champ « _next » de FormSubmit).
 * Non indexée par les moteurs de recherche (voir src/seo/pages.ts).
 */
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Mail, MessageCircle, PhoneCall, Search } from "lucide-react";
import Button from "../ui/Button";
import IrisOrb from "../ui/IrisOrb";
import SplitText from "../motion/SplitText";
import { M } from "../motion/kit";
import { MouseParallax } from "../motion/Parallax";
import { ease } from "../motion/presets";
import { site, whatsappHref } from "../data/site";
import { useSeo } from "../ui/useSeo";
import { PAGES } from "../seo/pages";

const NEXT_STEPS = [
  { icon: Search, title: "Nous lisons votre demande", desc: "Un membre de l'équipe étudie votre besoin, votre secteur et vos objectifs." },
  { icon: PhoneCall, title: `Nous revenons vers vous sous ${site.responseTime}`, desc: "Par e-mail, téléphone ou WhatsApp, selon ce qui vous arrange." },
  { icon: Mail, title: "Échange gratuit et devis", desc: "Un court échange pour cadrer le projet, puis un devis détaillé, sans engagement." },
];

/** Particules qui jaillissent autour de la coche (une seule fois, à l'arrivée). */
function Burst() {
  const dots = Array.from({ length: 14 });
  const colors = ["#3ce0d0", "#008080", "#5b6cff", "#ff7a3d"];
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map((_, i) => {
        const angle = (i / dots.length) * Math.PI * 2;
        const dist = 70 + (i % 3) * 18;
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full"
            style={{ backgroundColor: colors[i % colors.length] }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: [0, 1, 0], scale: [0, 1.2, 0.4] }}
            transition={{ duration: 1.1, ease: ease.out, delay: 0.55 }}
          />
        );
      })}
    </span>
  );
}

export default function Thanks() {
  useSeo(PAGES.thanks);

  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40" aria-labelledby="thanks-title">
      <MouseParallax depth={26} className="pointer-events-none absolute left-[4%] top-[14%]">
        <IrisOrb className="relative h-36 w-36 md:h-56 md:w-56" tone="teal" />
      </MouseParallax>
      <MouseParallax depth={-22} className="pointer-events-none absolute bottom-[10%] right-[5%]">
        <IrisOrb className="relative h-44 w-44 md:h-72 md:w-72" tone="sunset" duration={17} />
      </MouseParallax>

      <div className="relative mx-auto flex w-full max-w-[1100px] flex-col items-center px-5 text-center md:px-10">
        {/* Coche animée */}
        <div className="relative mb-10 flex h-28 w-28 items-center justify-center">
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-primary/15"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.25, 1] }}
            transition={{ duration: 0.9, ease: ease.out }}
          />
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full border border-primary/40"
            animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1 }}
          />
          <motion.span
            className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-on-primary shadow-glow"
            initial={{ scale: 0, rotate: -120 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.2 }}
          >
            <M.Icon delay={0.55}>
              <Check className="h-9 w-9" strokeWidth={2.4} />
            </M.Icon>
          </motion.span>
          <Burst />
        </div>

        <h1 id="thanks-title" className="mt-6 font-display text-[clamp(2.2rem,5.6vw,5.25rem)] leading-[1.02] tracking-[-0.045em] text-ink">
          <SplitText text="Merci, votre message" by="char" className="block font-light" stagger={0.02} immediate delay={0.3} />
          <SplitText text="est bien arrivé." by="char" className="block font-extrabold" stagger={0.02} immediate delay={0.6} />
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: ease.out, delay: 0.9 }}
        >
          Notre équipe a reçu votre demande et vous répond sous {site.responseTime}. Pour aller plus vite, écrivez-nous directement sur WhatsApp.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: ease.out, delay: 1.05 }}
        >
          <Button label="Retour à l'accueil" size="lg" to="/" iconLeft={<ArrowLeft className="h-4 w-4" />} />
          <Button label="Écrire sur WhatsApp" size="lg" variant="outline" href={whatsappHref()} iconLeft={<MessageCircle className="h-5 w-5" />} />
        </motion.div>

        {/* Et maintenant ? */}
        <div className="mt-14 w-full text-left md:mt-24">
          <p className="kicker mb-6 text-center text-base text-ink-muted">Et maintenant ?</p>
          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {NEXT_STEPS.map(({ icon: Icon, title, desc }, i) => (
              <M.Card key={title} index={i}>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-canvas-alt text-primary-ink">
                    <M.Icon delay={i * 0.1}>
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </M.Icon>
                  </span>
                  <span className="font-sans text-sm text-primary-ink">0{i + 1}</span>
                </div>
                <h2 className="mt-5 font-display text-lg font-bold tracking-[-0.02em] text-ink md:text-xl">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{desc}</p>
              </M.Card>
            ))}
          </div>
        </div>

        {/* En attendant */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <M.Link to="/realisations" className="text-ink">
            En attendant, découvrez nos réalisations <ArrowUpRight className="h-4 w-4" />
          </M.Link>
        </motion.div>
      </div>
    </section>
  );
}
