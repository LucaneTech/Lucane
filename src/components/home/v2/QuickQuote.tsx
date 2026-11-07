import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Palette, Rocket, Search } from "lucide-react";
import Button from "../../../ui/Button";
import Eyebrow from "../../../ui/Eyebrow";
import IrisOrb from "../../../ui/IrisOrb";
import { M } from "../../../motion/kit";
import { site } from "../../../data/site";

const NEEDS = ["Site web", "Application web", "Application mobile", "Boutique en ligne", "Design UX/UI", "Autre"];
const STEPS = [
  { icon: Search, label: "Découverte" },
  { icon: Palette, label: "Conception" },
  { icon: Rocket, label: "Livraison" },
];

/** Point d'envoi Formspree (identifiant public du formulaire, visible côté client par nature). */
const FORM_ENDPOINT = "https://formspree.io/f/meaawlza";
const MAX_LEN = 200;
const clean = (v: string) => v.trim().slice(0, MAX_LEN);

/** Devis express (plan 3.12) : envoi vers Formspree, avec champ piège anti-robots. */
export default function QuickQuote() {
  const [form, setForm] = useState({ name: "", email: "", besoin: "" });
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    // Champ piège rempli : c'est un robot. On simule un succès sans rien envoyer.
    if (honeypot) {
      setSent(true);
      return;
    }
    const name = clean(form.name);
    const email = clean(form.email);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      return;
    }
    setSending(true);
    setError(false);
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("besoin", NEEDS.includes(form.besoin) ? form.besoin : "Non précisé");
    data.append("_subject", "Demande de devis rapide — Lucane");
    data.append("_gotcha", "");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
        referrerPolicy: "strict-origin-when-cross-origin",
      });
      // Formspree répond { ok: true } en cas de succès, { errors: [...] } sinon.
      const json = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !json?.ok) throw new Error(String(res.status));
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative px-3 py-10 md:px-6 md:py-24" aria-labelledby="quote-title">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-md bg-canvas-inverse px-6 py-16 text-on-inverse md:px-14 md:py-24">
        <IrisOrb className="-left-24 -top-24 h-80 w-80 opacity-70" tone="sunset" />
        <IrisOrb className="-bottom-32 -right-16 h-96 w-96 opacity-60" tone="teal" duration={20} />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow index="11">Devis express</Eyebrow>
            <h2 id="quote-title" className="display-2 mt-6">
              Un projet en tête ?
            </h2>
            <p className="mt-6 max-w-md text-lg opacity-70">
              De l'idée au produit final, nous vous accompagnons à chaque étape avec méthode, rigueur et expertise technique.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {STEPS.map(({ icon: Icon, label }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl dark:border-black/10 dark:bg-black/5"
                >
                  <Icon className="h-4 w-4 text-primary-ink" />
                  {label}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-panel p-6 text-ink md:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[20rem] flex-col items-center justify-center text-center">
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary"
                  >
                    <Check className="h-7 w-7" />
                  </motion.span>
                  <p className="mt-6 font-display text-2xl font-bold">Demande reçue !</p>
                  <p className="mt-2 text-ink-muted">Nous vous répondons sous {site.responseTime}.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="space-y-6" exit={{ opacity: 0, y: -10 }}>
                  <p className="font-display text-2xl font-bold">Demandez votre devis gratuit!</p>
                  <M.Field label="Votre nom" name="q-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <M.Field label="Votre e-mail professionnel" name="q-email" type="email" required index={1} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  <fieldset>
                    <legend className="eyebrow mb-3 text-primary">Votre besoin principal</legend>
                    <div className="flex flex-wrap gap-2">
                      {NEEDS.map((n) => {
                        const on = form.besoin === n;
                        return (
                          <motion.button
                            key={n}
                            type="button"
                            whileTap={{ scale: 0.94 }}
                            onClick={() => setForm({ ...form, besoin: n })}
                            aria-pressed={on}
                            className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                              on ? "border-primary bg-primary text-on-primary" : "border-field-line bg-canvas-alt text-ink hover:border-primary"
                            }`}
                          >
                            {n}
                          </motion.button>
                        );
                      })}
                    </div>
                  </fieldset>
                  {/* Champ piège : invisible pour les humains, rempli par les robots. Doit rester vide. */}
                  <input
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    hidden
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                  {error && (
                    <p role="alert" className="text-center text-sm text-red-500">
                      Envoi impossible. Vérifiez vos informations ou écrivez-nous à {site.email}.
                    </p>
                  )}
                  <Button type="submit" size="lg" label={sending ? "Envoi en cours…" : "Envoyer ma demande"} disabled={sending} className="w-full" />
                  <p className="text-center text-xs text-primary">Sans engagement · Réponse sous {site.responseTime}</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
