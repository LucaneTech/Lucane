import { CircleQuestionMark, MessageSquareMore, Phone, Send } from "lucide-react";
import React from "react";
import ContactForm from "../components/contact/Formular";

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
  return (
    <>
      <section className="mt-24 sm:mt-32 px-4 sm:px-6">
        <div className="text-center py-6 sm:py-8">
          <h1 className="main-color text-3xl sm:text-4xl font-semibold mb-3">Contactez-nous</h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            N’hésitez pas à nous contacter ! Soumettez vos questions ici et nous vous répondrons rapidement.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {contactElements.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start p-6 sm:p-8 border-btn rounded-lg hover:shadow-lg transition gap-4 sm:gap-8"
            >
              <div className="text-4xl bg-secondary-color shadow-md main-color p-4 rounded-lg font-bold flex-shrink-0">
                {item.icon}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-xl mb-1 main-color">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
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
