import { Clock, FileText, Gift, Mail, MessageCircle, MessageSquareMore, Phone, Send } from "lucide-react";
import React from "react";
import ContactForm from "../components/contact/Formular";
import { motion } from "framer-motion";

interface ContactElementProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  border?: string;
  color?: string;
  bgColor?: string;
}

const contactElements: ContactElementProps[] = [
  {
    icon: <MessageCircle />,
    title: "Centre d'aide",
    description: "Des questions ? Nous avons les réponses.",
    border: "border-blue-500",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    icon: <MessageSquareMore />,
    title: "Chattez avec nous",
    description: "Notre équipe est prête à vous aider 24h/24 et 7j/7.",
    border: "border-green-500",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    icon: <Phone />,
    title: "Appelez-nous",
    description: "Contactez-nous directement par téléphone.",
    border: "border-red-500",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    icon: <Send />,
    title: "Envoyez un message",
    description: "Envoyez-nous un message et nous répondrons rapidement.",
    border: "border-yellow-500",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#008080] mb-6">Contactez-nous</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
            N'hésitez pas à nous contacter. Soumettez vos questions et nous vous répondrons dans les meilleurs délais.
          </p>
        </motion.div>

        {/* Canaux de contact */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {contactElements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`flex flex-col sm:flex-row items-center sm:items-start p-6 sm:p-8 border ${item.border} rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 gap-4 sm:gap-8 dark:bg-slate-800`}
            >
              <div className={`text-4xl ${item.color} ${item.bgColor} shadow-lg p-4 rounded-full flex-shrink-0`}>
                {item.icon}
              </div>
              <div className="text-center sm:text-left">
                <h3 className={`font-semibold text-xl mb-1 ${item.color}`}>{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-200">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section formulaire — layout 2 colonnes */}
      <section className="mt-20 mb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
          {/* Gauche (2/5) */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
              Parlons de votre projet
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Chaque projet commence par une conversation. Nous prenons le temps de comprendre vos objectifs, vos contraintes et votre vision pour vous proposer la solution la plus adaptée.
            </p>

            {/* Engagements */}
            <div className="space-y-5 mb-10">
              {commitments.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="p-2 bg-[#008080]/10 rounded-lg flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#008080]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-white text-sm">{title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coordonnées */}
            <div className="space-y-3">
              <a
                href="tel:+212781343642"
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-[#008080] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#008080] flex-shrink-0" />
                <span className="text-sm">(+212) 781 343 642</span>
              </a>
              <a
                href="mailto:contact@lucane.tech"
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-[#008080] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#008080] flex-shrink-0" />
                <span className="text-sm">contact@lucane.tech</span>
              </a>
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
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
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
