import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import LivePreviewCard from './LivePreviewCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  date?: string;
  bgColor?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
    >
      {/* Live Preview ou image */}
      <LivePreviewCard
        liveUrl={project.liveUrl}
        image={project.image}
        title={project.title}
        bgColor={project.bgColor}
      />

      {/* Contenu */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <motion.h3
            whileHover={{ x: 3 }}
            className="text-lg font-bold text-slate-800 dark:text-white text-hover transition-colors cursor-pointer line-clamp-2 flex-1"
          >
            {project.title}
          </motion.h3>
          <div className="flex gap-1.5 flex-shrink-0">
            {project.githubUrl && project.githubUrl !== "#" && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </motion.a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed text-sm line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {project.date && (
          <div className="flex items-center text-slate-400 text-xs mt-auto">
            <Calendar className="w-3 h-3 mr-1.5" />
            <span>{project.date}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;