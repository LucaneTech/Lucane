import { CircleQuestionMark, MessageSquareMore, Phone, Send } from "lucide-react";
import React from "react";
import ContactForm from "../components/contact/Formular";
import { motion } from "framer-motion";

interface ContactElementProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const contactElements: ContactElementProps[] = [
  {
    icon: <CircleQuestionMark />,
    title: "Centre d'aide",
    description: "Des questions ? Nous avons les réponses."
  },
  {
    icon: <MessageSquareMore />,
    title: "Chattez avec nous",
    description: "Notre équipe est prête à vous aider 24h/24 et 7j/7."
  },
  {
    icon: <Phone />,
    title: "Appelez-nous",
    description: "Contactez-nous directement par téléphone."
  },
  {
    icon: <Send />,
    title: "Envoyez un message",
    description: "Envoyez-nous un message et nous répondrons rapidement."
  }
];

const Contact: React.FC = () => {
  const title = 'Contactez-nous'
  return (
    <>
      <section className="mt-24 sm:mt-42 px-4 sm:px-6">
       
         <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            {title.split(" ").map((word, i) =>
              i === 1 ? (
                <span key={i} className="text-[#008080]">
                  {" "}
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
           N’hésitez pas à nous contacter ! Soumettez vos questions ici et nous vous répondrons rapidement.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {contactElements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start p-6 sm:p-8 border border-gray-400 rounded-lg hover:shadow-lg transition gap-4 sm:gap-8 dark:bg-slate-800"
            >
              <div className="text-4xl bg-gray-200 shadow-lg duration-300 transition ease-in-out hover:scale-90 main-color p-4 rounded-lg font-bold flex-shrink-0">
                {item.icon}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-xl mb-1 main-color">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="mt-12 px-4 sm:px-6">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
