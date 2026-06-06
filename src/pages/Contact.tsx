import { Clock, FileText, Gift, Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";
import ContactForm from "../components/contact/Formular";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@lucane.tech",
    href: "mailto:contact@lucane.tech",
    desc: "Réponse sous 24h",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "(+212) 781 343 642",
    href: "tel:+212781343642",
    desc: "Lun–Ven, 9h–18h",
  },
  {
    icon: MessageCircle,
    label: "Chat",
    value: "Chat en direct sur Whatsapp",
    href: "https://wa.me/212781343642",
    desc: "Disponible maintenant",
  },
];

const commitments = [
  {
    icon: Clock,
    title: "Réponse sous 24h",
    desc: "Chaque demande reçoit une réponse personnalisée dans la journée.",
  },
  {
    icon: FileText,
    title: "NDA disponible",
    desc: "Accord de confidentialité signable avant tout échange sensible.",
  },
  {
    icon: Gift,
    title: "Devis 100% gratuit",
    desc: "Estimation détaillée sans engagement, après session de découverte.",
  },
];

const infoRows = [
  { label: "Email", value: "contact@lucane.tech", href: "mailto:contact@lucane.tech" },
  { label: "Téléphone", value: "(+212) 781 343 642", href: "tel:+212781343642" },
  { label: "Réponse sous", value: "24 heures" },
];

const Contact: React.FC = () => {
  const scrollToForm = () => {
    document.getElementById("formulaire")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative pt-28 md:pt-36 pb-16 px-4 md:px-8 lg:px-16 xl:px-24 overflow-hidden">
        {/* Background SVG circles — mirrors home */}
        <svg
          className="absolute -z-10 inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 720"
          fill="none"
        >
          <circle cx="711.819" cy="372.562" r="308.334" stroke="var(--color-primary)" strokeOpacity={0.12} strokeWidth={3} />
          <circle cx="16.942" cy="20.834" r="308.334" stroke="var(--color-primary)" strokeOpacity={0.12} strokeWidth={2} />
          <circle cx="782.595" cy="411.166" r="308.334" stroke="var(--color-primary)" strokeOpacity={0.12} strokeWidth={3} />
          <circle cx="1300" cy="600" r="280" stroke="var(--color-primary)" strokeOpacity={0.08} strokeWidth={2} />
        </svg>

        <div className="grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* Left — image */}
          <motion.div
            className="relative block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Offset border decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-md border border-primary/20 -z-10" />

            <div className="relative rounded-md overflow-hidden aspect-[4/3] sm:aspect-[4/5]">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 dark:bg-dark-elevated border-b border-slate-200 dark:border-slate-700/50">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="flex-1 mx-3 bg-surface-alt dark:bg-dark-elevated rounded-sm h-5 py-2 border border-slate-200 dark:border-slate-700/50 px-3 flex items-center">
              <span className="text-[10px] text-slate-500 dark:text-slate-300">
                https://lucane.tech/contact
              </span>
            </div>
          </div>
              <img
                src="/images/bg.jpg"
                alt="Contactez Lucane Tech"
                className="w-full h-full object-cover duration-300 hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/15 to-transparent" />

              {/* Floating availability chip */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/90 dark:bg-dark-elevated backdrop-blur-sm rounded-md px-4 py-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <p className="text-xs font-medium text-ink dark:text-white">
                    Disponible · Lun–Ven, 9h–18h
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>

          {/* Right — text */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-primary">
              Contact
            </span>

            <h1 className="mt-4 text-4xl lg:text-5xl font-bold text-ink dark:text-white leading-tight">
              Parlons de<br />
              votre <span className="text-primary">projet.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-ink-muted dark:text-slate-300 max-w-md mx-auto lg:mx-0">
              Notre équipe est disponible pour répondre à toutes vos questions
              et transformer votre vision en réalité.
            </p>

            {/* Info table */}
            <div className="mt-8 divide-y divide-base-300 dark:divide-slate-200/30 w-full max-w-md mx-auto lg:mx-0">
              {infoRows.map((item) => (
                <div key={item.label} className="flex items-center justify-between py-3.5">
                  <span className="text-xs uppercase tracking-widest text-ink-muted dark:text-slate-300 font-medium">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-ink dark:text-white hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-ink dark:text-primary">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                label="Envoyer un message"
                onClick={scrollToForm}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Channels ────────────────────────────────────────── */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-24 py-14 border-y border-base-300 dark:border-slate-500/10 bg-surface-alt dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-base-300 dark:divide-slate-200/10">
            {channels.map(({ icon: Icon, label, value, href, desc }, i) => (
              <motion.div
                key={label}
                className="flex flex-col gap-3 px-0 sm:px-10 first:pl-0 last:pr-0 py-8 sm:py-0"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink-muted font-medium mb-1">
                    {label}
                  </p>
                  <a
                    href={href}
                    className="text-base font-semibold text-ink dark:text-white hover:text-primary transition-colors block"
                  >
                    {value}
                  </a>
                  <p className="text-sm text-ink-muted dark:text-slate-400 mt-0.5">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form section ────────────────────────────────────── */}
      <section id="formulaire" className="px-4 md:px-8 lg:px-16 xl:px-24 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-xs uppercase tracking-widest text-primary font-medium">
              Formulaire
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink dark:text-white leading-tight">
              Envoyez votre<br />message
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted dark:text-slate-300 max-w-xs">
              Chaque projet commence par une conversation. Nous prenons le temps
              de comprendre vos objectifs et votre vision.
            </p>

            <div className="mt-10 divide-y divide-base-300 dark:divide-slate-600/30">
              {commitments.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 py-4">
                  <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-ink dark:text-white">{title}</p>
                    <p className="text-xs text-ink-muted dark:text-slate-400 mt-0.5 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bare form, no card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
