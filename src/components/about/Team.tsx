import { motion, type Variants } from "framer-motion";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  socials?: { type: string; url: string }[];
}

type MeetOurPeopleProps = {
  member: TeamMember;
};

// Variants pour la carte
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120 } },
  hover: { scale: 1.05, boxShadow: "0px 15px 35px rgba(0,0,0,0.25)" },
};

const MeetOurFounder: React.FC<MeetOurPeopleProps> = ({ member }) => {
  return (
    <section className="py-20 px-4 flex flex-col items-center text-center bg-[#fafafa] dark:bg-gray-900">
      {/* Header */}
      <motion.h3
        className="text-xl font-medium text-gray-500 mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Fondateur
      </motion.h3>

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 max-w-3xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Rencontrez le fondateur de <span className="main-color">Lucane</span>
      </motion.h1>

      <motion.p
        className="mb-16 text-gray-500 dark:text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Découvrez la vision, la passion et l’expertise derrière notre startup. 
        Notre fondateur guide chaque projet avec rigueur et innovation.
      </motion.p>

      {/* Carte du fondateur */}
      <motion.div
        className="group flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-300 rounded-xl w-80 p-8 cursor-pointer"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-28 h-28 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700 mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <motion.img
            className="w-full h-full object-cover"
            src={member.image}
            alt={member.name}
          />
        </motion.div>

        <motion.h2 className="text-2xl font-semibold mb-1 text-slate-800 dark:text-white">
          {member.name}
        </motion.h2>

        <motion.p className="text-gray-600 dark:text-gray-300 mb-4">{member.role}</motion.p>

        <motion.p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          {member.description}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default MeetOurFounder;
