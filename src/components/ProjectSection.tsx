import React from "react";
import { motion, type Variants, type Transition } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

// Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  date?: string;
  bgColor?: string;
}

interface ProjectSectionProps {
  title?: string;
  description?: string;
  projects: Project[];
  className?: string;
}

// Animation config
const transition: Transition = { duration: 0.6, ease: "easeOut" };

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

// Reusable component
const ProjectSection: React.FC<ProjectSectionProps> = ({
  title = "Projets Récents",
  description = "Découvrez une sélection de nos derniers projets, alliant innovation technique et design moderne pour créer des expériences utilisateur exceptionnelles.",
  projects,
  className = "",
}) => {
  return (
    <section  className={`py-20  dark:bg-gray-900 ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-6"
      >
        {/* Title + description */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {title.split(" ").map((word, i) =>
              i === 1 ? (
                <span key={i} className="main-color">
                  {" "}
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={cardVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {projects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </motion.div>

      
      </motion.div>
    </section>
  );
};

export default ProjectSection;
