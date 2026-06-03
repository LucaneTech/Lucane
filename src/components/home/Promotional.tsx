import React, { useState, useEffect } from "react";
import { Search, Palette, Rocket } from "lucide-react";
import { useInView } from "react-intersection-observer";

const steps = [
  { icon: Search, label: "Découverte" },
  { icon: Palette, label: "Conception" },
  { icon: Rocket, label: "Livraison" },
];

function useCountUp(target: number, trigger: boolean): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 40);
    return () => clearInterval(interval);
  }, [trigger, target]);

  return count;
}

const Promotional: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", besoin: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const { ref: counterRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const projectCount = useCountUp(50, inView);
  const clientCount = useCountUp(98, inView);

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
      // silent fail
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-dark py-20 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Counter stats band */}
        <div
          ref={counterRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16 text-center"
        >
          <div>
            <p className="text-5xl font-bold text-white mb-1">
              {projectCount}<span className="text-primary">+</span>
            </p>
            <p className="text-ink-muted text-sm uppercase tracking-wide">Projets livrés</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white mb-1">
              {clientCount}<span className="text-primary">%</span>
            </p>
            <p className="text-ink-muted text-sm uppercase tracking-wide">Satisfaction client</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-5xl font-bold text-white mb-1">
              3<span className="text-primary">+</span>
            </p>
            <p className="text-ink-muted text-sm uppercase tracking-wide">Années d'expérience</p>
          </div>
        </div>

        {/* Main promo block */}
        <div className="flex flex-col md:flex-row items-stretch rounded-md overflow-hidden bg-dark-surface border border-white/10">
          {/* Left: methodology */}
          <div className="flex flex-col justify-center p-10 md:p-14 md:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Avez-vous un projet en tête ?
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed text-base">
              De l'idée au produit final, nous vous accompagnons à chaque étape avec méthode, rigueur et expertise technique.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              {steps.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="bg-primary/20 rounded-md p-2.5 flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: mini-form */}
          <div className="md:w-1/2 p-8 md:p-12 flex items-center bg-dark-elevated">
            <div className="bg-dark-surface rounded-md p-6 w-full border border-white/10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-primary font-bold text-lg">Demande reçue !</p>
                  <p className="text-ink-muted text-sm mt-1">Nous vous répondons dans les 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-white mb-1">Demandez votre devis gratuit</h3>
                  <p className="text-sm text-ink-muted mb-2">Sans engagement. Réponse sous 24h.</p>

                  <input
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-white/10 rounded-md text-sm bg-dark-elevated text-white placeholder-ink-faint focus:ring-2 focus:ring-primary focus:outline-none transition"
                  />
                  <input
                    type="email"
                    placeholder="Votre email professionnel"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-white/10 rounded-md text-sm bg-dark-elevated text-white placeholder-ink-faint focus:ring-2 focus:ring-primary focus:outline-none transition"
                  />
                  <select
                    value={formData.besoin}
                    onChange={(e) => setFormData({ ...formData, besoin: e.target.value })}
                    required
                    className="w-full px-4 py-2.5 border border-white/10 rounded-md text-sm bg-dark-elevated text-white focus:ring-2 focus:ring-primary focus:outline-none transition"
                  >
                    <option value="">Votre besoin principal</option>
                    <option value="Site web">Site web</option>
                    <option value="Application mobile">Application mobile</option>
                    <option value="Application web">Application web</option>
                    <option value="Design UX/UI">Design UX/UI</option>
                    <option value="Cloud & Infrastructure">Cloud &amp; Infrastructure</option>
                    <option value="Autre">Autre</option>
                  </select>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full mt-1 inline-flex items-center justify-center gap-2 bg-primary text-white rounded-md px-6 py-3 font-semibold shadow-glow hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60"
                  >
                    {sending ? "Envoi en cours…" : "Envoyer ma demande"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotional;
