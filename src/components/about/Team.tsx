import React, { type JSX } from "react";
import { motion, type Variants } from "framer-motion";
import { Linkedin, Facebook, Twitter } from "lucide-react";

type SocialLink = {
  type: "linkedin" | "facebook" | "twitter";
  url: string;
};

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  socials: SocialLink[];
};

type MeetOurPeopleProps = {
  members: TeamMember[];
};

// Icônes sociales
const socialIcons: Record<string, JSX.Element> = {
  linkedin: <Linkedin size={16} className="text-sky-400 duration-300 hover:text-white" />,
  facebook: <Facebook size={16} className="text-blue-800 duration-300 hover:text-white" />,
  twitter: <Twitter size={16} className="text-red-700 duration-300 hover:text-white" />,
};

// Variants pour les cartes de l’équipe
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
  }),
  hover: { scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" },
};

const MeetOurPeople: React.FC<MeetOurPeopleProps> = ({ members }) => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12">
      <motion.h3
        className="text-lg font-medium main-color mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contactez-nous!
      </motion.h3>

      <motion.h1
        className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Rencontrez notre équipe talentueuse
      </motion.h1>

      <motion.p
        className="w-3/5 mb-14 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
      </motion.p>

      <div className="flex flex-wrap gap-6 items-center justify-center">
        {members.map((member, idx) => (
          <motion.div
            key={idx}
            className="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer bg-main-color-hover"
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover="hover"
          >
            <motion.img
              className="w-32 rounded-full border-btn"
              src={member.image}
              alt={member.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 150 }}
            />

            <motion.h2 className="main-color group-hover:text-white text-lg font-medium mt-2">
              {member.name}
            </motion.h2>

            <motion.p className="text-gray-700 group-hover:text-white/80">{member.role}</motion.p>

            <motion.p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">
              {member.description}
            </motion.p>

            <motion.div className="flex items-center space-x-4 mt-6 text-gray-500">
              {member.socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="border p-1 rounded-full"
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  {socialIcons[social.type]}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurPeople;
