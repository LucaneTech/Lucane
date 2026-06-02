import { motion } from "framer-motion";

interface Tech {
  label: string;
  icon: string;
  level: number;
}

interface Category {
  name: string;
  color: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    name: "Frontend",
    color: "text-dev",
    techs: [
      { label: "React", icon: "/icons/react.png", level: 95 },
      { label: "TypeScript", icon: "/icons/typescript.png", level: 90 },
      { label: "Tailwind CSS", icon: "/icons/tailwindcss.png", level: 95 },
    ],
  },
  {
    name: "Backend",
    color: "text-growth",
    techs: [
      { label: "Node.js", icon: "/icons/nodejs.png", level: 88 },
      { label: "Django", icon: "/icons/django.png", level: 85 },
      { label: "Python", icon: "/icons/python.png", level: 85 },
    ],
  },
  {
    name: "Base de données",
    color: "text-design",
    techs: [
      { label: "PostgreSQL", icon: "/icons/postgresql.png", level: 88 },
      { label: "MongoDB", icon: "/icons/mongodb.png", level: 85 },
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "text-cloud",
    techs: [
      { label: "AWS", icon: "/icons/aws.png", level: 80 },
      { label: "Docker", icon: "/icons/docker.png", level: 85 },
      { label: "GitHub", icon: "/icons/github.png", level: 95 },
    ],
  },
  {
    name: "Mobile",
    color: "text-dev",
    techs: [
      { label: "React Native", icon: "/icons/react.png", level: 88 },
    ],
  },
];

const TechCard: React.FC<{ tech: Tech; delay: number }> = ({ tech, delay }) => (
  <div className="flex items-center gap-4 bg-white border border-slate-100 rounded-xl p-4 hover:shadow-sm transition-shadow">
    <img
      src={tech.icon}
      alt={tech.label}
      className="w-10 h-10 object-contain flex-shrink-0"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = "none";
      }}
    />
    <div className="flex-1 min-w-0">
      <p className="font-medium text-ink text-sm mb-1">{tech.label}</p>
      <div className="h-1.5 bg-surface-alt rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${tech.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay }}
        />
      </div>
    </div>
    <span className="text-xs text-ink-muted font-mono flex-shrink-0">
      {tech.level}%
    </span>
  </div>
);

const OurTechnologies: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Notre pile technologique
          </h2>
          <p className="text-ink-muted max-w-2xl mx-auto">
            Des outils choisis pour leur robustesse, leur adoption dans
            l'industrie et leur capacité à évoluer avec vos besoins.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-widest mb-4 ${category.color}`}>
                {category.name}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.techs.map((tech, techIdx) => (
                  <TechCard
                    key={tech.label}
                    tech={tech}
                    delay={techIdx * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTechnologies;
