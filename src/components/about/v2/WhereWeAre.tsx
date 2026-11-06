import { motion } from "framer-motion";
import { Globe2, MapPin, Wifi } from "lucide-react";
import Eyebrow from "../../../ui/Eyebrow";
import { M } from "../../../motion/kit";
import { site } from "../../../data/site";

const PLACES = [
  {
    icon: MapPin,
    title: "Équipe au Maroc",
    desc: "Nos développeurs travaillent depuis le Maroc, sur le fuseau horaire de l'Afrique de l'Ouest et du Centre.",
    detail: site.location.city === "À FOURNIR" ? "Maroc" : `${site.location.city}, Maroc`,
  },
  {
    icon: Globe2,
    title: "Relais à Brazzaville",
    desc: "Un partenaire local nous représente au Congo : rendez-vous, démonstrations et accompagnement sur place.",
    detail: "Brazzaville, Congo",
  },
  {
    icon: Wifi,
    title: "À distance, partout",
    desc: "Visioconférences, WhatsApp et outils collaboratifs : nous suivons des projets en Afrique, en Europe et dans la diaspora.",
    detail: "En ligne",
  },
];

/** Où nous sommes (plan 6.2) : équipe au Maroc, relais à Brazzaville, accompagnement à distance. */
export default function WhereWeAre() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="where-title">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16">
        <Eyebrow index="04">Où nous sommes</Eyebrow>
        <M.H2 className="mt-6 max-w-3xl" id="where-title">
          Proches de vous, où que vous soyez.
        </M.H2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PLACES.map((p, i) => (
            <M.Card key={p.title} index={i}>
              <motion.span
                className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                <p.icon className="h-6 w-6" />
              </motion.span>
              <h3 className="mt-6 font-display text-2xl font-bold text-ink">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{p.desc}</p>
              <span className="mt-6 inline-flex rounded-full border border-glass-line bg-canvas-alt px-4 py-1.5 font-mono text-xs text-ink">
                {p.detail}
              </span>
            </M.Card>
          ))}
        </div>
      </div>
    </section>
  );
}
