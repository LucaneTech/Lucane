import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  category: string;
  tag: string;
  tagColor: string;
  image: string;
  desc: string;
  stack: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Oralise",
    category: "Web",
    tag: "Web App",
    tagColor: "text-dev bg-dev/10",
    image: "/images/home/design1.jpg",
    desc: "Plateforme d'apprentissage pour professionnels de santé.",
    stack: ["React", "Node.js"],
    link: "#",
  },
  {
    title: "EEMCI",
    category: "Mobile",
    tag: "Mobile",
    tagColor: "text-design bg-design/10",
    image: "/images/home/design2.jpg",
    desc: "App mobile de gestion RH.",
    stack: ["React Native"],
    link: "#",
  },
  {
    title: "Kone Group",
    category: "SaaS",
    tag: "SaaS",
    tagColor: "text-growth bg-growth/10",
    image: "/images/home/design3.jpg",
    desc: "Solution SaaS de gestion commerciale.",
    stack: ["Next.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Dynamic",
    category: "Web",
    tag: "Web",
    tagColor: "text-dev bg-dev/10",
    image: "/images/home/design4.jpg",
    desc: "Site vitrine et catalogue produits.",
    stack: ["React", "Tailwind"],
    link: "#",
  },
  {
    title: "Oralise App",
    category: "Design",
    tag: "Design",
    tagColor: "text-design bg-design/10",
    image: "/images/home/second.avif",
    desc: "Refonte UX/UI de l'application mobile.",
    stack: ["Figma"],
    link: "#",
  },
  {
    title: "EEMSI",
    category: "Web",
    tag: "Web",
    tagColor: "text-cloud bg-cloud/10",
    image: "/images/home/design2.jpg",
    desc: "Plateforme de formation en ligne.",
    stack: ["Next.js", "PostgreSQL"],
    link: "#",
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
  >
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Live Preview overlay */}
      <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-pill bg-primary text-white px-5 py-2 text-sm font-medium"
        >
          Live Preview →
        </a>
      </div>
    </div>
    <div className="p-5">
      <span
        className={`text-xs font-semibold rounded-pill px-3 py-1 ${project.tagColor}`}
      >
        {project.tag}
      </span>
      <h3 className="text-lg font-bold text-ink mt-3 mb-2">{project.title}</h3>
      <p className="text-sm text-ink-muted mb-3">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-xs bg-surface-alt text-ink-muted rounded-pill px-2 py-0.5"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

interface AllProjectsProps {
  filter: string;
}

const AllProjects: React.FC<AllProjectsProps> = ({ filter }) => {
  const filtered =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            className="text-center text-ink-muted py-16 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Aucun projet dans cette catégorie.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
