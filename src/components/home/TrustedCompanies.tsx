import React from "react";
import {
  Github,
  Figma,
  Slack,
  Dribbble,
  Chrome,
 
  Apple,
  Linkedin,
} from "lucide-react";

const companies = [
  { name: "Github", icon: <Github className="w-12 h-12 main-color" /> },
  { name: "Figma", icon: <Figma className="w-12 h-12  main-color" /> },
  { name: "Slack", icon: <Slack className="w-12 h-12  main-color" /> },
  { name: "Dribbble", icon: <Dribbble className="w-12 h-12  main-color" /> },
  { name: "Chrome", icon: <Chrome className="w-12 h-12 t main-color" /> },
  { name: "AWS", icon: <Chrome className="w-12 h-12  main-color" /> },
  { name: "Apple", icon: <Apple className="w-12 h-12  main-color" /> },
  { name: "LinkedIn", icon: <Linkedin className="w-12 h-12  main-color" /> },
];

const TrustedCompanies: React.FC = () => {
  return (
    <section className="text-center py-10 px-4 bg-white">
      <h3 className="text-2xl md:text-4xl font-semibold main-color">
        Trusted by the world’s leading companies
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 max-w-5xl mx-auto ">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-24 w-40 md:w-48 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer "
          >
            {company.icon}
            <p className="main-color text-sm font-medium mt-2">
              {company.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;
