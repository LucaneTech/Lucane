import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Eyebrow from "../../../ui/Eyebrow";
import Button from "../../../ui/Button";
import { M } from "../../../motion/kit";
import { offers } from "../../../data/offers";
import { ease } from "../../../motion/presets";

/** Formules (plan 6.1) : cartes arrondies, la formule mise en avant en fond inversé. Prix affiché seulement s'il est fourni. */
export default function Offers() {
  return (
    <section id="formules" className="relative scroll-mt-28 py-24 md:py-32" aria-labelledby="offers-title">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Eyebrow index="02">Nos formules</Eyebrow>
          <M.H2 className="mt-6" id="offers-title">
            Une formule pour chaque étape.
          </M.H2>
          <M.P className="mx-auto mt-5 max-w-xl">Chaque projet reste sur mesure : la formule sert de point de départ au devis gratuit.</M.P>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {offers.map((o, i) => {
            const hi = o.highlighted;
            return (
              <motion.article
                key={o.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: ease.out, delay: i * 0.08 }}
                whileHover={{ y: -10 }}
                className={`group relative flex flex-col overflow-hidden rounded-[36px] border p-7 ${
                  hi ? "border-transparent bg-canvas-inverse text-on-inverse shadow-glow xl:-mt-6 xl:mb-6" : "border-glass-line bg-panel text-ink"
                }`}
              >
                {hi && (
                  <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-on-primary">La plus choisie</span>
                )}
                <p className={`font-mono text-sm ${hi ? "text-primary-ink" : "text-primary-ink"}`}>0{i + 1}</p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-[-0.03em]">{o.name}</h3>
                <p className={`mt-2 ${hi ? "opacity-70" : "text-ink-muted"}`}>{o.pitch}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {o.includes.map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-ink" />
                      <span className={hi ? "opacity-85" : ""}>{x}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-display text-xl font-bold">{o.priceFrom ? `À partir de ${o.priceFrom}` : "Sur devis gratuit"}</p>
                <div className="mt-5">
                  <Button
                    to={`/contact?formule=${o.slug}#formulaire`}
                    label="Choisir"
                    variant={hi ? "primary" : "outline"}
                    size="sm"
                    iconRight={<ArrowUpRight className="h-4 w-4" />}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
