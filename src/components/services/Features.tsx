import React from "react";
import { BarChart3, ShieldCheck, FileChartColumn } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

const features: Feature[] = [
  {
    title: "Real-Time Analytics",
    description: "Get instant insights into your finances with live dashboards.",
    icon: <BarChart3 size={28} strokeWidth={2.5} className="text-violet-600" />,
    bgColor: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption, 2FA, compliance with GDPR standards.",
    icon: <ShieldCheck size={28} strokeWidth={2.5} className="text-green-600" />,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Customizable Reports",
    description:
      "Export professional, audit-ready financial reports for tax or internal review.",
    icon: (
      <FileChartColumn
        size={28}
        strokeWidth={2.5}
        className="text-orange-600"
      />
    ),
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24 px-6 md:px-12 lg:px-24 py-12 bg-secondary-color">
      {/* Image */}
      <div className="flex justify-center w-full md:w-1/2">
        <img
          className="w-full max-w-lg rounded-2xl object-cover shadow-lg"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/card-image-1.png"
          alt="Feature Illustration"
        />
      </div>

      {/* Feature list */}
      <div className="w-full md:w-1/2 space-y-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start sm:items-center gap-6 max-w-md mx-auto sm:mx-0"
          >
            <div
              className={`flex items-center justify-center p-5 sm:p-6 ${feature.bgColor} rounded-full`}
            >
              {feature.icon}
            </div>
            <div className="space-y-2 text-left">
              <h3
                className={`text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 ${feature.iconColor}`}
              >
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
