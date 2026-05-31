import React, { useState } from "react";
import { Search, Palette, Rocket } from "lucide-react";

const steps = [
  { icon: Search, label: "Découverte" },
  { icon: Palette, label: "Conception" },
  { icon: Rocket, label: "Livraison" },
];

const Promotional: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", besoin: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("besoin", formData.besoin);
    form.append("_captcha", "false");
    form.append("_subject", "Demande de devis rapide — Lucane");
    try {
      await fetch("https://formsubmit.co/contact@lucane.tech", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
      setSubmitted(true);
    } catch {
      // silent fail — formulaire contact complet disponible
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-stretch rounded-2xl m-4 max-w-7xl w-full bg-[#008080] overflow-hidden md:mt-12">
      {/* Gauche : méthodologie */}
      <div className="flex flex-col justify-center p-10 md:p-14 md:w-1/2 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Avez-vous un projet en tête ?
        </h2>
        <p className="text-white/80 mb-10 leading-relaxed text-base">
          De l'idée au produit final, nous vous accompagnons à chaque étape avec méthode, rigueur et expertise technique.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          {steps.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2.5 flex-shrink-0">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Droite : mini-formulaire */}
      <div className="md:w-1/2 p-8 md:p-12 flex items-center">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full shadow-2xl">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-[#008080]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-[#008080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[#008080] font-bold text-lg">Demande reçue !</p>
              <p className="text-slate-500 text-sm mt-1">Nous vous répondons dans les 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">Demandez votre devis gratuit</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">Sans engagement. Réponse sous 24h.</p>

              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#008080] focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Votre email professionnel"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#008080] focus:outline-none transition"
              />
              <select
                value={formData.besoin}
                onChange={(e) => setFormData({ ...formData, besoin: e.target.value })}
                required
                className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#008080] focus:outline-none transition"
              >
                <option value="">Votre besoin principal</option>
                <option value="Site web">Site web</option>
                <option value="Application mobile">Application mobile</option>
                <option value="Application web">Application web</option>
                <option value="Design UX/UI">Design UX/UI</option>
                <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
                <option value="Autre">Autre</option>
              </select>

              <button
                type="submit"
                disabled={sending}
                className="w-full mt-1 inline-flex items-center justify-center gap-2 bg-[#008080] text-white rounded-lg px-6 py-3 font-semibold shadow-[0_4px_14px_rgba(0,128,128,0.35)] hover:shadow-[0_6px_20px_rgba(0,128,128,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60"
              >
                {sending ? "Envoi en cours…" : "Envoyer ma demande"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Promotional;
