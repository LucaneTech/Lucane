import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Button from "../ui/Button";
import IrisOrb from "../ui/IrisOrb";
import { MouseParallax } from "../motion/Parallax";
import { whatsappHref } from "../data/site";
import { ease } from "../motion/presets";

/** 404 : « 404 » géant irisé qui flotte entre deux formes, retour à l'accueil ou WhatsApp. */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-canvas px-6 pt-24 text-center">
      <MouseParallax depth={30} className="pointer-events-none absolute left-[10%] top-[18%]">
        <IrisOrb className="relative h-40 w-40 md:h-64 md:w-64" tone="sunset" />
      </MouseParallax>
      <MouseParallax depth={-24} className="pointer-events-none absolute bottom-[12%] right-[10%]">
        <IrisOrb className="relative h-48 w-48 md:h-72 md:w-72" tone="teal" duration={16} />
      </MouseParallax>

      <div className="relative">
        <motion.h1
          className="bg-[linear-gradient(100deg,#008080_0%,#3ce0d0_35%,#5b6cff_70%,#ff7a3d_100%)] bg-clip-text font-display text-[clamp(6rem,22vw,15rem)] font-extrabold leading-[0.85] tracking-[-0.06em] text-transparent"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: [0, -14, 0], scale: 1 }}
          transition={{ opacity: { duration: 0.8 }, scale: { duration: 1, ease: ease.out }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        >
          404
        </motion.h1>
        <motion.p
          className="mt-6 font-display text-3xl font-bold text-ink md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: ease.out }}
        >
          Cette page s'est envolée.
        </motion.p>
        <motion.p
          className="mx-auto mt-3 max-w-md text-ink-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: ease.out }}
        >
          La page que vous cherchez n'existe pas ou a été déplacée.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: ease.out }}
        >
          <Button to="/" label="Retour à l'accueil" size="lg" iconLeft={<ArrowLeft className="h-5 w-5" />} />
          <Button href={whatsappHref()} label="Nous écrire" size="lg" variant="outline" iconLeft={<MessageCircle className="h-5 w-5" />} />
        </motion.div>
      </div>
    </section>
  );
}
