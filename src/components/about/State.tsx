import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Users, Globe } from "lucide-react";

const StatsSection: React.FC = () => {
  const stats = [
    { label: "Projets livrés", value: 120, icon: <Code2 size={40} className="text-indigo-500" /> },
    { label: "Clients satisfaits", value: 85, icon: <Users size={40} className="text-emerald-500" /> },
    { label: "Pays couverts", value: 15, icon: <Globe size={40} className="text-orange-500" /> },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-[#008080] mb-6 "
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nos Chiffres Clés
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-200 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Nous transformons les idées en produits digitaux puissants. Voici quelques statistiques qui montrent notre impact et notre expertise.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 0.3} />
          ))}
        </div>
      </div>
    </section>
  );
};

type StatCardProps = {
  stat: { label: string; value: number; icon: React.ReactNode };
  delay: number;
};

const StatCard: React.FC<StatCardProps> = ({ stat, delay }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = stat.value;
      const duration = 1200; 
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-900/70 border border-gray-500 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center  hover:shadow-2xl hover:scale-90 cursor-pointer  transition duration-300 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-4">{stat.icon}</div>
      <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">+{count}</h3>
      <p className="text-gray-600 text-center dark:text-gray-200">{stat.label}</p>
    </motion.div>
  );
};

export default StatsSection;
