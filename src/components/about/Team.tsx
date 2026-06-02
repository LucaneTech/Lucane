import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  socials?: { type: string; url: string }[];
}

interface MeetOurFounderProps {
  member: TeamMember;
}

const MeetOurFounder: React.FC<MeetOurFounderProps> = ({ member }) => {
  const linkedIn = member.socials?.find((s) => s.type === "linkedin")?.url;

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">
            Fondateur
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mt-3">
            Rencontrez le fondateur de{" "}
            <span className="text-primary">Lucane</span>
          </h2>
        </motion.div>

        {/* Founder card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="bg-white rounded-xl shadow-sm border border-surface-alt p-8 flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-primary/20"
            />

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-ink mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-ink-muted leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Quote */}
              <blockquote className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-6 py-4 italic text-ink-muted">
                "La technologie est le meilleur levier pour développer l'Afrique.
                Notre mission est de la rendre accessible."
              </blockquote>

              {/* LinkedIn */}
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-primary font-medium hover:text-primary-hover transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Voir le profil LinkedIn
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetOurFounder;
