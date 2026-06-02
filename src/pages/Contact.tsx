import { Clock, FileText, Gift, Mail, MessageCircle, Phone } from "lucide-react";
import React from "react";
import ContactForm from "../components/contact/Formular";
import { motion } from "framer-motion";

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
    value: "Chat en direct",
    href: "/contact",
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

const Contact: React.FC = () => {
  return (
    <>
      {/* Hero Contact */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <motion.img
          src="/images/bg.jpg"
          alt="Contactez Lucane Tech"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ opacity: { duration: 0.6 }, scale: { duration: 8, ease: "easeOut" } }}
        />
        <motion.div
          className="absolute inset-0 bg-[rgba(0,128,128,0.72)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        <motion.svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <circle cx="80%" cy="20%" r="200" stroke="white" strokeWidth="1" fill="none" />
          <circle cx="80%" cy="20%" r="360" stroke="white" strokeWidth="0.6" fill="none" />
          <circle cx="20%" cy="80%" r="150" stroke="white" strokeWidth="0.8" fill="none" />
          <circle cx="50%" cy="50%" r="420" stroke="white" strokeWidth="0.4" fill="none" />
        </motion.svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-white w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="inline-block text-xs uppercase tracking-[0.2em] font-medium mb-4 text-white/70"
              >
                Contact
              </motion.span>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              >
                Parlons de votre projet
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-lg text-white/80 max-w-md"
              >
                Notre équipe est disponible pour répondre à toutes vos questions et transformer votre vision en réalité.
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col gap-4"
            >
              {[
                { label: "Email", value: "contact@lucane.tech", href: "mailto:contact@lucane.tech" },
                { label: "Réponse sous", value: "24 heures" },
                { label: "Disponibilité", value: "Lun–Ven, 9h–18h" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 text-white/90">
                  <span className="text-sm text-white/50 w-28">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="font-semibold hover:text-white transition-colors">{item.value}</a>
                  ) : (
                    <span className="font-semibold">{item.value}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Canaux de contact */}
      <section className="px-4 sm:px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto mb-16">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-glow transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <channel.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-ink">{channel.label}</p>
                <p className="text-sm text-ink-muted">{channel.desc}</p>
                <a
                  href={channel.href}
                  className="text-sm text-primary font-medium mt-1 inline-block hover:text-primary-hover transition-colors"
                >
                  {channel.value}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section formulaire — layout 2 colonnes */}
      <section className="mb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          {/* Gauche (2/5) */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-ink mb-4 leading-tight">
              Parlons de votre projet
            </h3>
            <p className="text-ink-muted leading-relaxed mb-8">
              Chaque projet commence par une conversation. Nous prenons le temps
              de comprendre vos objectifs, vos contraintes et votre vision pour
              vous proposer la solution la plus adaptée.
            </p>

            {/* Engagements */}
            <div className="space-y-5">
              {commitments.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">{title}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Droite (3/5) */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-ink mb-6">
                Envoyez votre message
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
