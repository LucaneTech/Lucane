import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Check } from "lucide-react";
import Button from "../../ui/Button";

const inputClass =
  "w-full bg-transparent border-0 border-b border-base-300 dark:border-slate-600/30 " +
  "px-0 py-3 text-ink dark:text-white text-sm " +
  "placeholder:text-ink-faint focus:outline-none focus:border-primary " +
  "dark:focus:border-primary focus:ring-0 transition-colors";

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const formStartTime = useRef<number>(Date.now());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    pays: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot: soumission trop rapide (< 2 secondes)
    const elapsedTime = Date.now() - formStartTime.current;
    if (elapsedTime < 2000) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formsubmit.co/contact@lucane.tech", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(formRef.current as HTMLFormElement),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", telephone: "", pays: "", service: "", message: "" });
        formStartTime.current = Date.now();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state
  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Check className="w-8 h-8 text-primary" />
        </motion.div>
        <h3 className="text-xl font-bold text-ink mb-2">Message envoyé !</h3>
        <p className="text-ink-muted">Nous vous répondrons dans les 24 heures.</p>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot anti-spam */}
      <input type="text" name="_honey" style={{ display: "none" }} />

      {/* Configuration FormSubmit */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_limit" value="1" />
      <input type="hidden" name="_template" value="table" />

      {/* Error banner */}
      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3 text-sm"
        >
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="text-red-700">Erreur lors de l'envoi. Veuillez réessayer.</span>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-widest font-medium text-ink-muted mb-2">
            Votre nom <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="François Dupont"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-medium text-ink-muted mb-2">
            Email <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="votre@email.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-medium text-ink-muted mb-2">
            Téléphone <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
            placeholder="(+212) 000 000 000"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-medium text-ink-muted mb-2">
            Pays <span className="text-primary ">*</span>
          </label>
          <input
            type="text"
            name="pays"
            value={formData.pays}
            onChange={handleChange}
            required
            placeholder="Maroc"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        {/* <label className="block text-sm font-medium text-ink mb-2">
          Service souhaité
        </label> */}
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className=" bg-primary/50 border-0  px-3 py-2 text-sm text-ink rounded-md dark:text-white focus:outline-none  focus:ring-offset-1 focus:ring-offset-accent/50 dark:focus:ring-offset-dark/50 w-full"
        >
          <option value="">Sélectionner un service</option>
          <option>Développement Web</option>
          <option>Développement Mobile</option>
          <option>UX/UI Design</option>
          <option>Cloud &amp; Infrastructure</option>
          <option>Conseil &amp; Stratégie</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-ink-muted  mb-2">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Décrivez votre projet ou votre demande..."
          className={`${inputClass} resize-y min-h-[120px]`}
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-ink-faint">
          * Champs obligatoires. Réponse garantie sous 24h.
        </p>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          label={isSubmitting ? "Envoi en cours…" : "Envoyer le message"}
          disabled={isSubmitting}
        />
      </div>
    </form>
  );
};

export default ContactForm;
