/**
 * Banc d'essai des animations (tâches 1.5 à 1.8). Accessible en développement seulement,
 * à l'adresse /__motion. Chaque bloc montre une primitive ou un élément du kit.
 */
import { useState } from "react";
import { Code2, Smartphone, Palette, Cloud, Rocket, ShieldCheck } from "lucide-react";
import Section from "../ui/Section";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";
import { M } from "../motion/kit";
import Counter from "../motion/Counter";
import ScrollWords from "../motion/ScrollWords";
import HorizontalScroll from "../motion/HorizontalScroll";
import DrawLine from "../motion/DrawLine";
import Reveal from "../motion/Reveal";
import { MouseParallax, Parallax } from "../motion/Parallax";

const icons = [
  { Icon: Code2, label: "Web" },
  { Icon: Smartphone, label: "Mobile" },
  { Icon: Palette, label: "Design" },
  { Icon: Cloud, label: "Cloud" },
  { Icon: Rocket, label: "Lancement" },
  { Icon: ShieldCheck, label: "Fiabilité" },
];

const designs = ["design1.jpg", "design2.jpg", "design3.jpg", "design4.jpg"];

export default function MotionLab() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="pt-24">
      {/* Titres et paragraphe */}
      <Section animate={false}>
        <Eyebrow index="01">Titres et texte</Eyebrow>
        <div className="mt-8">
          <M.H1 by="char">Tout bouge.</M.H1>
        </div>
        <div className="mt-6 max-w-2xl">
          <M.P>
            Chaque titre monte lettre par lettre, chaque paragraphe se lève en vague, et les titres penchent légèrement quand on fait défiler vite.
          </M.P>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Button label="Démarrer un projet" size="lg" to="/contact" />
          <Button label="Voir les réalisations" variant="outline" size="lg" to="/projets" />
          <Button label="Lien discret" variant="ghost" to="/services" />
          <M.Link to="/a-propos">Lien du kit</M.Link>
          <M.Link to="/a-propos" underlined>
            Lien souligné
          </M.Link>
        </div>
      </Section>

      {/* Bandeau */}
      <section className="border-y border-line py-8">
        <M.Marquee speed={3}>
          {["Développement web", "Applications mobiles", "UX/UI", "Cloud", "Conseil", "Maintenance"].map((t) => (
            <span key={t} className="display-3 px-8 text-ink">
              {t} <span className="text-primary">/</span>
            </span>
          ))}
        </M.Marquee>
      </section>

      {/* Phrase qui s'allume */}
      <Section animate={false} tone="alt">
        <Eyebrow index="02">Phrase au défilement</Eyebrow>
        <ScrollWords
          className="display-3 mt-8 max-w-5xl"
          text="Nous sommes une équipe de développeurs qui conçoit des sites, des applications web et mobiles et des logiciels sur mesure pour les entreprises qui veulent grandir."
        />
      </Section>

      {/* Icônes et cartes */}
      <Section>
        <Eyebrow index="03">Icônes et cartes</Eyebrow>
        <M.H2>Six services, six cartes.</M.H2>
        <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {icons.map(({ Icon, label }, i) => (
            <M.Card key={label} index={i} cursor="Voir" className="py-8">
              <M.Icon delay={i * 0.1} className="text-primary-ink">
                <Icon size={32} strokeWidth={1.5} />
              </M.Icon>
              <p className="display-3 mt-6 text-2xl">{label}</p>
              <p className="mt-2 text-ink-muted">Survolez : le filet se trace, le contenu glisse.</p>
            </M.Card>
          ))}
        </div>
      </Section>

      {/* Chiffres */}
      <Section tone="inverse">
        <Eyebrow index="04">Compteurs</Eyebrow>
        <div className="mt-10 grid gap-10 font-mono sm:grid-cols-3">
          <div>
            <Counter value={11} className="display-2 font-mono" />
            <p className="mt-2 opacity-60">projets en ligne</p>
          </div>
          <div>
            <Counter value={2400} suffix="+" className="display-2 font-mono" />
            <p className="mt-2 opacity-60">valeur de test</p>
          </div>
          <div>
            <Counter value={48} suffix=" h" className="display-2 font-mono" />
            <p className="mt-2 opacity-60">survolez pour rejouer</p>
          </div>
        </div>
      </Section>

      {/* Images */}
      <Section>
        <Eyebrow index="05">Images</Eyebrow>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {designs.map((d, i) => (
            <M.Img key={d} src={`/images/home/${d}`} alt={`Maquette ${i + 1}`} width={1200} height={900} className="aspect-[4/3]" cursor="Voir" />
          ))}
        </div>
      </Section>

      {/* Parallaxe */}
      <Section tone="alt" animate={false}>
        <Eyebrow index="06">Parallaxe</Eyebrow>
        <div className="relative mt-10 grid h-[60vh] grid-cols-3 gap-6">
          <Parallax speed={0.3}>
            <div className="h-64 border border-line-strong p-6">Défilement lent</div>
          </Parallax>
          <Parallax speed={-0.3}>
            <div className="h-64 bg-primary p-6 text-on-primary">Défilement rapide</div>
          </Parallax>
          <MouseParallax depth={40}>
            <div className="h-64 bg-ink p-6 text-canvas">Suit la souris</div>
          </MouseParallax>
        </div>
      </Section>

      {/* Défilement horizontal */}
      <HorizontalScroll className="bg-canvas" trackClassName="gap-6 px-16">
        {designs.concat(designs).map((d, i) => (
          <div key={i} className="w-[70vw] shrink-0 snap-start md:w-[45vw]">
            <M.Img src={`/images/home/${d}`} alt={`Projet ${i + 1}`} width={1200} height={900} className="aspect-[4/3]" cursor="Glisser" />
            <p className="eyebrow mt-4 text-ink-muted">0{i + 1} — Défilement horizontal</p>
          </div>
        ))}
      </HorizontalScroll>

      {/* Filets et formulaire */}
      <Section>
        <Eyebrow index="07">Filets et formulaire</Eyebrow>
        <div className="mt-10 text-line-strong">
          <DrawLine />
        </div>
        <div className="mt-6 h-40 text-primary">
          <DrawLine orientation="vertical" mode="scroll" />
        </div>
        <Reveal mask className="mt-10">
          <p className="display-3">Texte révélé dans un masque.</p>
        </Reveal>
        <form className="mt-12 grid max-w-3xl gap-8 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <M.Field label="Votre nom" name="lab-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <M.Field label="Votre e-mail" name="lab-email" type="email" index={1} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <M.Field label="Votre projet" name="lab-message" multiline index={2} className="md:col-span-2" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <div>
            <Button type="submit" label="Envoyer" size="lg" />
          </div>
        </form>
      </Section>
    </div>
  );
}
