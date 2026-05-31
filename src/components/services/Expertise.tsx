import { Code, PenTool, Cloud, Cog, Wrench, Smartphone, TrendingUp } from "lucide-react";
import type React from "react";
import { motion, type Variants } from "framer-motion";

type ServiceProp = {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  bgColor: string;
  shadowColor?: string;
};

const expertise: ServiceProp[] = [
  {
    title: "Maintenance & Support Technique",
    description: "Maintenance évolutive, corrections, mises à jour et support continu pour garantir la stabilité de vos solutions.",
    features: ["Monitoring applicatif 24/7", "Corrections garanties < 24h", "Mises à jour de sécurité incluses"],
    icon: <Wrench className="w-10 h-10" />,
    color: "text-gray-600",
    borderColor: "border-gray-300",
    bgColor: "bg-gray-100",
    shadowColor: "shadow-gray-300/50",
  },
  {
    title: "Développement d'Applications Mobiles",
    description: "Applications iOS et Android performantes, sécurisées et pensées pour une expérience utilisateur optimale.",
    features: ["iOS & Android natif / cross-platform", "Push notifications & Offline-first", "Publication App Store & Google Play"],
    icon: <Smartphone className="w-10 h-10" />,
    color: "text-purple-500",
    borderColor: "border-purple-300",
    bgColor: "bg-purple-100",
    shadowColor: "shadow-purple-300/50",
  },
  {
    title: "UI/UX Design & Maquettage",
    description: "Conception de maquettes modernes et intuitives basées sur la recherche utilisateur et les meilleures pratiques UX.",
    features: ["Wireframes & prototypes interactifs", "Design system cohérent", "Tests utilisateurs & itérations"],
    icon: <PenTool className="w-10 h-10" />,
    color: "text-rose-500",
    borderColor: "border-rose-300",
    bgColor: "bg-rose-100",
    shadowColor: "shadow-rose-300/50",
  },
  {
    title: "Conception de Sites Web",
    description: "Sites vitrines et plateformes web modernes, rapides, responsives et optimisés pour la conversion.",
    features: ["SPA & SSR React / Next.js", "SEO technique & Core Web Vitals", "Responsive design mobile-first"],
    icon: <Code className="w-10 h-10" />,
    color: "text-indigo-500",
    borderColor: "border-indigo-300",
    bgColor: "bg-indigo-100",
    shadowColor: "shadow-indigo-300/50",
  },
  {
    title: "Marketing Digital",
    description: "Stratégies digitales pour accroître votre visibilité, générer des leads et renforcer votre présence en ligne.",
    features: ["SEO & SEM avancé", "Campagnes multi-canaux", "Analytics & reporting mensuel"],
    icon: <TrendingUp className="w-10 h-10" />,
    color: "text-emerald-500",
    borderColor: "border-emerald-300",
    bgColor: "bg-emerald-100",
    shadowColor: "shadow-emerald-300/50",
  },
  {
    title: "Cloud & Déploiement",
    description: "Hébergement cloud, déploiement scalable et optimisation des performances pour accompagner votre croissance.",
    features: ["AWS / GCP / Azure", "CI/CD automatisé", "Scalabilité & haute disponibilité"],
    icon: <Cloud className="w-10 h-10" />,
    color: "text-sky-500",
    borderColor: "border-sky-300",
    bgColor: "bg-sky-100",
    shadowColor: "shadow-sky-300/50",
  },
  {
    title: "Automatisation & Outils Métiers",
    description: "Automatisation de processus et développement d'outils sur mesure pour améliorer votre productivité.",
    features: ["Scripts & bots métiers", "Intégrations API tierces", "Tableaux de bord analytiques"],
    icon: <Cog className="w-10 h-10" />,
    color: "text-amber-500",
    borderColor: "border-amber-300",
    bgColor: "bg-amber-100",
    shadowColor: "shadow-amber-300/50",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Expertise: React.FC = () => {
  return (
    <motion.section
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
            Nos <span className="text-[#008080]">Expertises</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Nous concevons, développons et faisons évoluer des solutions digitales modernes, performantes et orientées résultats.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {expertise.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`relative p-8 rounded-2xl border ${service.borderColor} transition-all duration-300 shadow-2xl ${service.shadowColor} bg-white dark:bg-slate-800/50`}
            >
              <div className={`mb-6 inline-flex items-center justify-center ${service.color} ${service.bgColor} p-3 rounded-full`}>
                {service.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${service.color}`}>{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm">{service.description}</p>
              <ul className="space-y-1.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008080] flex-shrink-0 mt-1.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
