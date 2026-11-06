/**
 * Contact (phase 6.3) : canaux (WhatsApp en avant), engagements, formulaire enrichi
 * (type de projet, secteur, budget indicatif, délai) envoyé par FormSubmit vers contact@.
 * Une formule choisie sur la page Services arrive pré-sélectionnée (?formule=…).
 */
import { useState } from "react";
import type { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, Clock, FileText, Gift, Mail, MessageCircle, Phone } from "lucide-react";
import PageHero from "../ui/PageHero";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { M } from "../motion/kit";
import { site, whatsappHref } from "../data/site";
import { offers } from "../data/offers";
import { sectors } from "../data/sectors";
import { ease } from "../motion/presets";

const BUDGETS = ["À définir ensemble", "< 500 €", "500 – 2 000 €", "2 000 – 5 000 €", "> 5 000 €"];
const DELAYS = ["Urgent (< 2 semaines)", "Dans le mois", "2 à 3 mois", "Pas pressé"];

const COMMITMENTS = [
  { icon: Clock, title: "Réponse sous 24 h", desc: "Chaque demande reçoit une réponse personnalisée dans la journée." },
  { icon: FileText, title: "NDA disponible", desc: "Accord de confidentialité signable avant tout échange sensible." },
  { icon: Gift, title: "Devis 100 % gratuit", desc: "Estimation détaillée sans engagement, après session de découverte." },
];

/** Groupe de pilules à choix unique. */
function Pills({ legend, options, value, onChange }: { legend: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="eyebrow mb-3 text-ink-muted">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o;
          return (
            <motion.button
              key={o}
              type="button"
              whileTap={{ scale: 0.94 }}
              onClick={() => onChange(on ? "" : o)}
              aria-pressed={on}
              className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                on ? "border-primary bg-primary text-on-primary" : "border-glass-line bg-canvas-alt text-ink hover:border-primary"
              }`}
            >
              {o}
            </motion.button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const preset = offers.find((o) => o.slug === params.get("formule"))?.name ?? "";
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [choice, setChoice] = useState({ type: preset, sector: "", budget: "", delay: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const data = new FormData();
    Object.entries({ ...form, ...choice }).forEach(([k, v]) => data.append(k, v || "Non précisé"));
    data.append("_subject", `Nouveau projet — ${form.name || "site Lucane"}`);
    data.append("_captcha", "false");
    data.append("_template", "table");
    try {
      const res = await fetch(`https://formsubmit.co/${site.email}`, { method: "POST", headers: { Accept: "application/json" }, body: data });
      if (!res.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <PageHero eyebrow="Contact" light="Parlons de" bold="votre projet." lead="Chaque projet commence par une conversation. Choisissez le canal qui vous convient : nous répondons sous 24 heures." tone="sunset">
        <div className="flex flex-wrap gap-4">
          <Button href={whatsappHref()} label="Écrire sur WhatsApp" size="lg" iconLeft={<MessageCircle className="h-5 w-5" />} />
          <Button to="/contact#formulaire" label="Remplir le formulaire" size="lg" variant="outline" />
        </div>
      </PageHero>

      {/* Canaux */}
      <section className="relative pb-10" aria-label="Nous joindre">
        <div className="mx-auto grid w-full max-w-[1440px] gap-5 px-5 md:grid-cols-3 md:px-10 lg:px-16">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: "Discuter maintenant", href: whatsappHref(), desc: "Le plus rapide", accent: true },
            { icon: Phone, label: "Téléphone", value: site.phone.display, href: site.phone.href, desc: site.hours },
            { icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}`, desc: `Réponse sous ${site.responseTime}` },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.8, ease: ease.out, delay: i * 0.08 }}
              className={`group flex items-center justify-between gap-4 rounded-[32px] border p-6 md:p-7 ${
                c.accent ? "border-transparent bg-primary text-on-primary shadow-glow" : "border-glass-line bg-panel text-ink"
              }`}
              data-cursor="pointer"
            >
              <span className="flex items-center gap-4">
                <span className={`flex h-14 w-14 items-center justify-center rounded-full ${c.accent ? "bg-white/20" : "bg-canvas-alt text-primary-ink"}`}>
                  <c.icon className="h-6 w-6" />
                </span>
                <span>
                  <span className={`eyebrow block ${c.accent ? "opacity-80" : "text-ink-muted"}`}>{c.label}</span>
                  <span className="mt-1 block font-display text-lg font-bold">{c.value}</span>
                  <span className={`block text-sm ${c.accent ? "opacity-80" : "text-ink-muted"}`}>{c.desc}</span>
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* Formulaire */}
      <section id="formulaire" className="relative scroll-mt-28 py-20 md:py-28" aria-labelledby="form-title">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:px-16">
          <div className="space-y-8 lg:sticky lg:top-32 lg:self-start">
            <div>
              <Eyebrow>Formulaire</Eyebrow>
              <M.H2 className="mt-6" id="form-title">
                Décrivez votre projet.
              </M.H2>
              <M.P className="mt-5 max-w-md">Plus vous nous en dites, plus notre première réponse sera précise. Seuls le nom et l'e-mail sont obligatoires.</M.P>
            </div>
            <div className="space-y-3">
              {COMMITMENTS.map(({ icon: Icon, title, desc }, i) => (
                <M.Card key={title} index={i} className="flex items-start gap-4 p-5 md:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-canvas-alt text-primary-ink">
                    <M.Icon>
                      <Icon className="h-5 w-5" />
                    </M.Icon>
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{title}</span>
                    <span className="block text-sm text-ink-muted">{desc}</span>
                  </span>
                </M.Card>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] border border-glass-line bg-panel p-6 md:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-on-primary shadow-glow"
                  >
                    <Check className="h-9 w-9" />
                  </motion.span>
                  <p className="mt-8 font-display text-3xl font-bold text-ink">Message bien reçu !</p>
                  <p className="mt-3 max-w-sm text-ink-muted">Nous revenons vers vous sous {site.responseTime}. Pour aller plus vite, écrivez-nous aussi sur WhatsApp.</p>
                  <div className="mt-8">
                    <Button href={whatsappHref()} label="Continuer sur WhatsApp" variant="outline" iconLeft={<MessageCircle className="h-4 w-4" />} />
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="space-y-8" exit={{ opacity: 0, y: -10 }}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <M.Field label="Votre nom" name="c-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    <M.Field label="Votre e-mail" name="c-email" type="email" required index={1} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    <M.Field label="Téléphone / WhatsApp" name="c-phone" type="tel" index={2} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    <M.Field label="Entreprise" name="c-company" index={3} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                  </div>
                  <Pills legend="Type de projet" options={offers.map((o) => o.name)} value={choice.type} onChange={(v) => setChoice({ ...choice, type: v })} />
                  <Pills legend="Votre secteur" options={sectors.map((s) => s.name)} value={choice.sector} onChange={(v) => setChoice({ ...choice, sector: v })} />
                  <div className="grid gap-8 md:grid-cols-2">
                    <Pills legend="Budget indicatif" options={BUDGETS} value={choice.budget} onChange={(v) => setChoice({ ...choice, budget: v })} />
                    <Pills legend="Délai souhaité" options={DELAYS} value={choice.delay} onChange={(v) => setChoice({ ...choice, delay: v })} />
                  </div>
                  <M.Field label="Votre projet en quelques mots" name="c-message" multiline value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  {error && (
                    <p className="rounded-2xl bg-[#ff7a3d]/10 px-5 py-3 text-sm text-ink">
                      L'envoi n'a pas abouti. Réessayez, ou écrivez-nous directement sur WhatsApp ou à {site.email}.
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-4">
                    <Button type="submit" size="lg" label={sending ? "Envoi en cours…" : "Envoyer ma demande"} disabled={sending} iconRight={<ArrowUpRight className="h-5 w-5" />} />
                    <p className="text-sm text-ink-muted">Sans engagement · {site.hours}</p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
