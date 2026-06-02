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
      {/* En-tête */}
      <section className="mt-32 sm:mt-40 px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-widest mb-4 px-4 py-1.5 rounded-pill bg-primary/10 border border-primary/20">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-ink mt-4 mb-6">
            Contactez-<span className="text-primary">nous</span>
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl mx-auto">
            N'hésitez pas à nous contacter. Soumettez vos questions et nous vous
            répondrons dans les meilleurs délais.
          </p>
        </motion.div>

        {/* Canaux de contact */}
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
