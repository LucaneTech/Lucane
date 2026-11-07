import { motion } from "framer-motion";
import { ArrowUpRight, Check, Clock3, Compass, Globe2, MapPin, Minus, Sparkles, Target, Video, Wifi, X } from "lucide-react";
import { Link } from "react-router-dom";
import Eyebrow from "../../../ui/Eyebrow";
import Button from "../../../ui/Button";
import IrisOrb from "../../../ui/IrisOrb";
import SplitText from "../../../motion/SplitText";
import ScrollWords from "../../../motion/ScrollWords";
import Counter from "../../../motion/Counter";
import { M } from "../../../motion/kit";
import { dur, ease } from "../../../motion/presets";
import { projects } from "../../../data/projects";
import { services } from "../../../data/services";
import { values } from "../../../data/process";
import { site } from "../../../data/site";
import { AfricaMap, ChatIllustration, MissionIllustration, TeamConstellation, ValueScene, VisionIllustration } from "./AboutIllustrations";

const WRAP = "mx-auto w-full max-w-[1440px] px-5 md:px-10 lg:px-16";

/* ── 1. En-tête ───────────────────────────────────────────────────────────── */

export function AboutHero() {
  const pills = [
    { icon: MapPin, label: "Équipe au Maroc" },
    { icon: Globe2, label: "Relais à Brazzaville" },
    { icon: Clock3, label: `Réponse sous ${site.responseTime}` },
  ];
  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40" aria-labelledby="page-title">
      <IrisOrb className="-left-24 top-24 h-56 w-56 opacity-50 blur-2xl" tone="indigo" />
      <div className={`${WRAP} grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]`}>
        <div className="relative">
          <Eyebrow>À propos de Lucane</Eyebrow>
          <h1 id="page-title" className="mt-8 font-display text-[clamp(2.4rem,5.6vw,5.6rem)] leading-[0.94] tracking-[-0.045em] text-ink">
            <SplitText text="Une équipe passionnée," by="char" className="block font-light" stagger={0.02} immediate />
            <SplitText text="un impact réel." by="char" className="block font-extrabold" delay={0.3} stagger={0.02} immediate />
          </h1>
          <motion.p
            className="lead mt-8 max-w-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.slow, ease: ease.out, delay: 0.7 }}
          >
            Nous sommes une équipe de développeurs basée au Maroc, avec un relais à Brazzaville. Nous concevons des sites, des
            applications et des logiciels pour les entreprises qui veulent grandir, en Afrique comme ailleurs.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur.slow, ease: ease.out, delay: 0.85 }}
          >
            <Button to="/contact" label="Travaillons ensemble" size="lg" iconRight={<ArrowUpRight className="h-5 w-5" />} />
            <Button to="/realisations" label="Voir nos réalisations" size="lg" variant="outline" />
          </motion.div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {pills.map((p, i) => (
              <motion.li
                key={p.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: ease.out, delay: 1 + i * 0.1 }}
                className="inline-flex items-center gap-2 rounded-full border border-glass-line bg-glass px-4 py-2 text-sm font-medium text-ink backdrop-blur-xl"
              >
                <p.icon className="h-4 w-4 text-primary-ink" />
                {p.label}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: ease.out, delay: 0.3 }}
        >
          <TeamConstellation />
        </motion.div>
      </div>
    </section>
  );
}

/* ── 2. Raison d'être : manifeste, mission, vision ────────────────────────── */

const PURPOSE = [
  {
    icon: Target,
    kicker: "Notre mission",
    title: "Rendre la technologie accessible.",
    text:
      "Rendre la technologie accessible aux entreprises d'Afrique et de la diaspora. Nous concevons des solutions digitales sur mesure qui répondent aux défis concrets des marchés africains et internationaux, avec un niveau d'exigence comparable aux meilleures agences.",
    points: ["Innover sans compromis sur la qualité", "Livrer des produits utiles et durables", "Accompagner chaque client de A à Z"],
    Illustration: MissionIllustration,
  },
  {
    icon: Compass,
    kicker: "Notre vision",
    title: "Devenir la référence tech africaine.",
    text:
      "Nous croyons que l'Afrique est le continent de la prochaine révolution numérique. Lucane Tech veut en être un acteur central, à l'échelle internationale, en bâtissant des produits qui inspirent et transforment.",
    points: ["Être le partenaire tech de demain", "Inspirer une génération de bâtisseurs africains", "Créer de la valeur à l'échelle du continent"],
    Illustration: VisionIllustration,
  },
];

export function Purpose() {
  return (
    <section className="relative py-20 md:py-28" aria-labelledby="purpose-title">
      <div className={WRAP}>
        <Eyebrow index="01">Notre raison d'être</Eyebrow>
        <h2 id="purpose-title" className="sr-only">Mission et vision</h2>
        <ScrollWords
          className="mt-8 max-w-5xl font-display text-[clamp(1.8rem,3.6vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink"
          text="La technologie est le meilleur levier pour développer l'Afrique. Notre métier : la rendre simple, utile et accessible à chaque entrepreneur."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {PURPOSE.map((p, i) => (
            <M.Card key={p.kicker} index={i} className="flex flex-col !p-0">
              <div className="border-b border-line bg-canvas-alt p-4 md:p-6">
                <p.Illustration />
              </div>
              <div className="p-7 md:p-8">
                <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-primary-ink">
                  <p.icon className="h-4 w-4" /> {p.kicker}
                </p>
                <h3 className="mt-3 font-display text-[clamp(1.5rem,2.2vw,2.1rem)] font-bold tracking-[-0.03em] text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{p.text}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-ink">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </M.Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. Repères (uniquement des chiffres vérifiables) ─────────────────────── */

export function Landmarks() {
  const sectors = new Set(projects.map((p) => p.sector).filter(Boolean));
  const items = [
    { value: projects.length, label: "projets en ligne", hint: "consultables dans nos réalisations" },
    { value: sectors.size, label: "secteurs d'activité", hint: [...sectors].slice(0, 3).join(", ") + "…" },
    { value: services.length, label: "expertises réunies", hint: "du design à la maintenance" },
    { value: 24, suffix: " h", label: "pour vous répondre", hint: "au plus tard, jours ouvrés" },
  ];
  return (
    <section className="px-3 md:px-5" aria-label="Lucane Tech en quelques repères">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-md bg-canvas-inverse px-6 py-14 text-on-inverse md:px-14 md:py-20">
        <IrisOrb className="-right-20 -top-28 h-72 w-72 opacity-40 blur-2xl" tone="teal" />
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: ease.out, delay: i * 0.1 }}
              className="border-l border-line pl-6"
            >
              <Counter value={it.value} suffix={it.suffix} className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-extrabold leading-none tracking-[-0.04em]" />
              <p className="mt-3 text-lg font-semibold">{it.label}</p>
              <p className="mt-1 text-sm text-ink-muted">{it.hint}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 4. Pourquoi une équipe à taille humaine ──────────────────────────────── */

type Level = "yes" | "partial" | "no";
const ROWS: { label: string; freelance: [Level, string]; agency: [Level, string]; us: [Level, string] }[] = [
  { label: "Continuité si quelqu'un est absent", freelance: ["no", "Fragile"], agency: ["yes", "Oui"], us: ["yes", "L'équipe prend le relais"] },
  { label: "Un interlocuteur direct, joignable sur WhatsApp", freelance: ["yes", "Oui"], agency: ["partial", "Rarement"], us: ["yes", "Oui"] },
  { label: "Web, mobile, design et cloud au même endroit", freelance: ["partial", "Limité"], agency: ["yes", "Oui"], us: ["yes", "Oui"] },
  { label: "Tarifs pensés pour les PME", freelance: ["yes", "Souvent"], agency: ["no", "Rarement"], us: ["yes", "Paiement échelonné"] },
  { label: "Contrat écrit et devis détaillé", freelance: ["partial", "Variable"], agency: ["yes", "Oui"], us: ["yes", "Toujours"] },
  { label: "Code, domaine et hébergement à votre nom", freelance: ["partial", "Variable"], agency: ["partial", "Variable"], us: ["yes", "Toujours"] },
];

function Mark({ level, text, strong = false }: { level: Level; text: string; strong?: boolean }) {
  const Icon = level === "yes" ? Check : level === "partial" ? Minus : X;
  const tone = level === "yes" ? (strong ? "bg-primary text-on-primary" : "bg-primary/15 text-primary-ink") : level === "partial" ? "bg-canvas-alt text-ink-muted" : "bg-canvas-alt text-ink-faint";
  return (
    <span className="inline-flex items-center gap-2 text-sm">
      <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${tone}`}>
        <Icon className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span className={strong ? "font-semibold text-ink" : "text-ink-muted"}>{text}</span>
    </span>
  );
}

export function WhyTeam() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="why-title">
      <div className={WRAP}>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Eyebrow index="02">Notre modèle</Eyebrow>
            <M.H2 className="mt-6 max-w-2xl" id="why-title">
              Une équipe à taille humaine.
            </M.H2>
          </div>
          <p className="lead max-w-xl lg:justify-self-end">
            Ni freelance isolé, ni grosse agence : 2 à 3 développeurs qui se relaient sur votre projet, avec la souplesse d'un
            interlocuteur direct.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: ease.out }}
          className="mt-14 overflow-hidden rounded-md border border-glass-line bg-panel"
        >
          {/* en-têtes (ordinateur) */}
          <div className="hidden grid-cols-[1.5fr_1fr_1fr_1.15fr] border-b border-line md:grid">
            <span className="px-6 py-5" />
            <span className="px-6 py-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Freelance seul</span>
            <span className="px-6 py-5 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Grande agence</span>
            <span className="relative bg-primary/10 px-6 py-5 font-display text-base font-bold text-primary-ink">
              <Sparkles className="mr-1.5 inline h-4 w-4" />
              Lucane Tech
            </span>
          </div>
          {ROWS.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: ease.out, delay: i * 0.05 }}
              className="grid gap-3 border-b border-line px-5 py-5 last:border-b-0 md:grid-cols-[1.5fr_1fr_1fr_1.15fr] md:items-stretch md:gap-0 md:p-0"
            >
              <p className="font-semibold text-ink md:flex md:h-full md:items-center md:px-6 md:py-5">{r.label}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 md:contents">
                <span className="md:flex md:h-full md:items-center md:px-6 md:py-5">
                  <span className="mr-2 text-xs text-ink-faint md:hidden">Freelance :</span>
                  <Mark level={r.freelance[0]} text={r.freelance[1]} />
                </span>
                <span className="md:flex md:h-full md:items-center md:px-6 md:py-5">
                  <span className="mr-2 text-xs text-ink-faint md:hidden">Agence :</span>
                  <Mark level={r.agency[0]} text={r.agency[1]} />
                </span>
                <span className="w-full rounded-md bg-primary/10 px-3 py-2 md:flex md:h-full md:w-auto md:items-center md:rounded-none md:px-6 md:py-5">
                  <span className="mr-2 text-xs font-semibold text-primary-ink md:hidden">Lucane Tech :</span>
                  <Mark level={r.us[0]} text={r.us[1]} strong />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-4 text-sm text-ink-faint">Comparaison indicative : chaque freelance et chaque agence travaille différemment.</p>
      </div>
    </section>
  );
}

/* ── 5. Travailler ensemble à distance ────────────────────────────────────── */

const RITUALS = [
  { icon: Video, title: "Atelier de cadrage en visio", text: "On définit ensemble le périmètre, les objectifs et les contraintes. Vous recevez un cahier des charges et un devis détaillé." },
  { icon: Wifi, title: "WhatsApp au quotidien", text: `Une question, une validation, une photo à ajouter : vous écrivez, l'équipe répond sous ${site.responseTime} au plus tard.` },
  { icon: Sparkles, title: "Une version de test à chaque étape", text: "Vous voyez votre projet avancer sur un lien privé, et vous validez avant la mise en ligne." },
  { icon: Check, title: "Mise en ligne, accès et documentation", text: "Code source, domaine et hébergement vous sont remis, avec une documentation pour la suite." },
];

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" aria-labelledby="how-title">
      <IrisOrb className="-right-24 bottom-10 h-64 w-64 opacity-30 blur-2xl" tone="sunset" />
      <div className={`${WRAP} grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]`}>
        <div>
          <Eyebrow index="03">Travailler ensemble</Eyebrow>
          <M.H2 className="mt-6 max-w-2xl" id="how-title">
            À distance, jamais loin.
          </M.H2>
          <p className="lead mt-6 max-w-xl">
            Que vous soyez à Brazzaville, Casablanca, Paris ou ailleurs, vous suivez votre projet comme si nous étions dans le même bureau.
          </p>
          <ol className="relative mt-12 space-y-8 before:absolute before:bottom-3 before:left-[19px] before:top-3 before:w-px before:bg-line">
            {RITUALS.map((r, i) => (
              <motion.li
                key={r.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: ease.out, delay: i * 0.08 }}
                className="relative flex gap-5"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-panel text-primary-ink shadow-glow">
                  <r.icon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{r.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-muted">{r.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
        <ChatIllustration />
      </div>
    </section>
  );
}

/* ── 6. Valeurs ───────────────────────────────────────────────────────────── */

export function Values() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="values-title">
      <div className={WRAP}>
        <Eyebrow index="04">Nos valeurs</Eyebrow>
        <M.H2 className="mt-6 max-w-3xl" id="values-title">
          Ce qui guide chaque ligne de code.
        </M.H2>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const last = i === values.length - 1;
            return (
              <M.Card key={v.title} index={i % 3} className={`!p-0 ${i === 0 ? "lg:col-span-2" : ""} ${last ? "md:col-span-2 lg:col-span-3" : ""}`}>
                <div className={last ? "lg:flex lg:items-stretch" : ""}>
                  <div
                    className={`relative flex items-center justify-center border-b border-line bg-canvas-alt px-6 py-6 ${i === 0 ? "lg:py-8" : ""} ${
                      last ? "lg:w-1/2 lg:border-b-0 lg:border-r" : ""
                    }`}
                  >
                    <div className={i === 0 ? "w-full max-w-md" : "w-full max-w-xs"}>
                      <ValueScene title={v.title} />
                    </div>
                  </div>
                  <div className={`flex items-baseline gap-4 p-6 md:p-7 ${last ? "lg:items-center lg:p-10" : ""}`}>
                    <span className="font-mono text-xs text-primary-ink">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">{v.title}</h3>
                      <p className="mt-1.5 text-ink-muted">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </M.Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── 7. Où nous sommes ────────────────────────────────────────────────────── */

const PLACES = [
  {
    icon: MapPin,
    title: "Équipe au Maroc",
    desc: "Nos développeurs travaillent depuis le Maroc.",
    detail: site.location.city === "À FOURNIR" ? "Maroc" : `${site.location.city}, Maroc`,
  },
  {
    icon: Globe2,
    title: "Relais à Brazzaville",
    desc: "Un partenaire local nous représente au Congo : rendez-vous, démonstrations et accompagnement sur place.",
    detail: "Brazzaville, Congo",
  },
  {
    icon: Clock3,
    title: "La même heure que vous",
    desc: "Le Maroc et le Congo sont sur le même fuseau horaire (UTC+1) la plus grande partie de l'année : on travaille aux mêmes heures.",
    detail: site.hours,
  },
  {
    icon: Wifi,
    title: "À distance, partout",
    desc: "Visioconférences, WhatsApp et outils collaboratifs : nous suivons des projets en Afrique, en Europe et dans la diaspora.",
    detail: "En ligne",
  },
];

export function WhereWeAre() {
  return (
    <section className="relative py-24 md:py-32" aria-labelledby="where-title">
      <div className={WRAP}>
        <Eyebrow index="05">Où nous sommes</Eyebrow>
        <M.H2 className="mt-6 max-w-3xl" id="where-title">
          Proches de vous, où que vous soyez.
        </M.H2>
        <div className="mt-14 grid gap-6 xl:grid-cols-2 xl:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: ease.out }}
            className="relative overflow-hidden rounded-md border border-glass-line bg-panel p-6 md:p-10"
          >
            <div aria-hidden className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_20%,rgba(0,128,128,0.10),transparent_55%)]" />
            <div className="relative">
              <AfricaMap />
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {PLACES.map((p, i) => (
              <M.Card key={p.title} index={i % 2} className="!p-6">
                <motion.span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-on-primary"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p.icon className="h-5 w-5" />
                </motion.span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">{p.desc}</p>
                <span className="mt-4 inline-flex rounded-full border border-glass-line bg-canvas-alt px-3.5 py-1 font-mono text-xs text-ink">{p.detail}</span>
              </M.Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 8. Déjà en ligne ─────────────────────────────────────────────────────── */

export function Delivered() {
  const bySector = new Map<string, typeof projects>();
  projects.forEach((p) => {
    if (!p.sector) return;
    bySector.set(p.sector, [...(bySector.get(p.sector) ?? []), p]);
  });
  return (
    <section className="relative py-20 md:py-28" aria-labelledby="delivered-title">
      <div className={WRAP}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow index="06">Déjà en ligne</Eyebrow>
            <M.H2 className="mt-6 max-w-3xl" id="delivered-title">
              Des projets réels, dans des métiers variés.
            </M.H2>
          </div>
          <Button to="/realisations" label="Toutes nos réalisations" variant="outline" iconRight={<ArrowUpRight className="h-4 w-4" />} />
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...bySector.entries()].map(([sector, list], i) => (
            <motion.div
              key={sector}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: ease.out, delay: i * 0.07 }}
              className="group rounded-md border border-glass-line bg-panel p-6 transition-shadow duration-500 hover:shadow-glow"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">Secteur</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">{sector}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {list.map((p) => (
                  <li key={p.slug}>
                    <Link
                      to={`/realisations/${p.slug}`}
                      className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary-ink"
                      data-cursor="Voir"
                    >
                      {p.title} <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: ease.out, delay: 0.35 }}
            className="flex flex-col justify-between gap-6 rounded-md border border-dashed border-primary/50 bg-primary/5 p-6"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary-ink">Votre secteur ?</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">Le prochain projet pourrait être le vôtre.</h3>
            </div>
            <Link to="/contact" className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary" data-cursor="pointer">
              Parlons-en <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
