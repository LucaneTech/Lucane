import { CircleQuestionMark, MessageSquareMore, Phone, Send } from "lucide-react";
import React from "react";
import ContactForm from "../components/contact/Formular";
import { motion } from "framer-motion";

interface ContactElementProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  border?: string;
  color?: string;
  bgColor?: string;
}

const contactElements: ContactElementProps[] = [
  {
    icon: <CircleQuestionMark />,
    title: "Centre d'aide",
    description: "Des questions ? Nous avons les réponses.",
    border: "border-blue-500",
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    icon: <MessageSquareMore />,
    title: "Chattez avec nous",
    description: "Notre équipe est prête à vous aider 24h/24 et 7j/7.",
    border: "border-green-500",
    color: "text-green-500",
    bgColor: "bg-green-100"
  },
  {
    icon: <Phone />,
    title: "Appelez-nous",
    description: "Contactez-nous directement par téléphone.",
    border: "border-red-500",
    color: "text-red-500",
    bgColor: "bg-red-100"
  },
  {
    icon: <Send />,
    title: "Envoyez un message",
    description: "Envoyez-nous un message et nous répondrons rapidement.",
    border: "border-yellow-500",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100"
  }
];

const Contact: React.FC = () => {
  const title = 'Contactez-nous'
  return (
    <>
      <section className="mt-32 sm:mt-42 px-4 sm:px-6 ">
       
         <motion.div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold main-color mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
           N’hésitez pas à nous contacter ! Soumettez vos questions ici et nous vous répondrons rapidement.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {contactElements.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center sm:items-start p-6 sm:p-8 border ${item.border} rounded-2xl hover:shadow-lg transition gap-4 sm:gap-8 dark:bg-slate-800 hover:scale-90 duration-300`}
            >
              <div className={`text-4xl ${item.color} ${item.bgColor} shadow-lg duration-300 transition ease-in-out hover:scale-90  p-4  rounded-full font-bold flex-shrink-0`}>
                {item.icon}
              </div>
              <div className="text-center sm:text-left">
                <h3 className={`font-semibold text-xl mb-1 ${item.color}`}>{item.title}</h3>
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
