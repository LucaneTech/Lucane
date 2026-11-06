import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Eyebrow from "../../../ui/Eyebrow";
import { M } from "../../../motion/kit";

const DESIGNS = [
  "design1.jpg",
  "design/1786719789931.jpg",
  "design3.jpg",
  "design/1786923689800.jpg",
  "design/1786924528520.jpg",
  "design2.jpg",
  "design/1786924574729.jpg",
  "design/1786924715198.jpg",
  "design4.jpg",
  "design/1787080776144.jpg",
  "design/1787182220219.jpg",
  "design/1787185679563.jpg",
  "design/1787185866221.jpg",
  "design/1787431233552.jpg",
  "design/1787678834840.jpg",
  "design/1791323853065.jpg",
].map((f) => `/images/home/${f}`);

/** Studio design (plan 3.8) : mosaïque des 16 maquettes en 3 colonnes qui défilent à vitesses différentes. */
export default function DesignStudio() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const c1 = useTransform(scrollYProgress, [0, 1], [80, -220]);
  const c2 = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const c3 = useTransform(scrollYProgress, [0, 1], [120, -320]);
  const cols = [c1, c2, c3];

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-36" aria-labelledby="studio-title">
      <div className="mx-auto mb-16 w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <Eyebrow index="07">Studio design</Eyebrow>
        <M.H2 className="mt-6 max-w-3xl" id="studio-title">
          Des interfaces pensées pour séduire.
        </M.H2>
      </div>
      <div className="mx-auto grid h-[120vh] w-full max-w-[1440px] grid-cols-2 gap-4 overflow-hidden px-5 md:grid-cols-3 md:gap-6 md:px-10 lg:px-16 [mask-image:linear-gradient(180deg,transparent,black_12%,black_88%,transparent)]">
        {cols.map((y, ci) => (
          <motion.div key={ci} style={{ y }} className={`flex flex-col gap-4 md:gap-6 ${ci === 2 ? "hidden md:flex" : ""}`}>
            {DESIGNS.filter((_, i) => i % 3 === ci).map((src, i) => (
              <M.Img key={src} src={src} alt={`Maquette d'interface ${ci * 6 + i + 1}`} width={1200} height={900} className="aspect-[4/3]" parallax={0.04} cursor="Voir" />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
