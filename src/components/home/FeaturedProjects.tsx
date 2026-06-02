import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Edusco",
    tag: "Web App",
    tagColor: "text-dev bg-dev/10",
    image: "images/home/edusco.avif",
    desc: "Plateforme e-learning complète pour les institutions modernes. Gestion des cours, suivi de performance et tableaux de bord analytiques.",
    stack: ["Django", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    link: "/projets",
  },
  {
    title: "NovaShop",
    tag: "E-commerce",
    tagColor: "text-cloud bg-cloud/10",
    image: "images/home/second.avif",
    desc: "Solution e-commerce scalable pensée pour la conversion. Catalogue intelligent, paiement sécurisé Stripe et back-office optimisé.",
    stack: ["Django", "Stripe", "PostgreSQL", "JavaScript"],
    link: "/projets",
  },
  {
    title: "CoreAPI",
    tag: "Backend",
    tagColor: "text-growth bg-growth/10",
    image: "images/home/info.avif",
    desc: "API REST haute performance pour applications web et mobiles. Architecture sécurisée, auth JWT et documentation Swagger.",
    stack: ["FastAPI", "Python", "MongoDB", "Docker"],
    link: "/projets",
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-surface-alt">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Notre travail
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4">
            Projets <span className="text-primary">en vedette</span>
          </h2>
          <p className="text-ink-muted max-w-xl mx-auto leading-relaxed">
            Des solutions concrètes livrées pour des clients exigeants. Voici une sélection de nos réalisations.
          </p>
        </motion.div>

        {/* Zigzag layout */}
        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`flex flex-col lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} gap-12 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Mockup */}
              <div className="lg:w-3/5 w-full">
                <motion.div
                  className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-surface border-b border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="flex-1 mx-3 bg-surface-alt rounded-pill h-4 border border-slate-200 px-3 flex items-center">
                      <span className="text-[10px] text-ink-faint">{project.title.toLowerCase()}.app</span>
                    </div>
                  </div>
                  <div className="hover:shadow-glow transition-shadow duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Info */}
              <div className="lg:w-2/5 w-full">
                <span className={`text-xs font-semibold uppercase tracking-wide rounded-pill px-3 py-1 ${project.tagColor}`}>
                  {project.tag}
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-ink mt-3 mb-3">{project.title}</h3>
                <p className="text-ink-muted leading-relaxed mb-4">{project.desc}</p>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((s) => (
                    <span key={s} className="text-xs bg-surface text-ink-muted rounded-pill px-3 py-1 border border-slate-200">
                      {s}
                    </span>
                  ))}
                </div>

                <Link to={project.link} className="inline-flex items-center gap-2 text-primary font-medium group">
                  Voir le projet{" "}
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
