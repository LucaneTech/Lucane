import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../ui/ProjectCard";
import { projects } from "../../data/projects";

interface AllProjectsProps {
  filter: string;
}

const AllProjects: React.FC<AllProjectsProps> = ({ filter }) => {
  const filtered =
    filter === "Tous"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 px-6 bg-surface dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
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
