import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const formStartTime = useRef<number>(Date.now());

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🛑 Anti-bot : soumission trop rapide (< 2s)
    const elapsedTime = Date.now() - formStartTime.current;
    if (elapsedTime < 2000) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(
        'https://formsubmit.co/contact@lucane.tech',
        {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(formRef.current as HTMLFormElement)
        }
      );

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        formStartTime.current = Date.now();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200/50 dark:border-slate-700/50 max-w-2xl mx-auto mt-12 mb-8"
    >
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span>Message envoyé avec succès.</span>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
          <span>Erreur lors de l’envoi. Réessaie plus tard.</span>
        </motion.div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/*Honeypot anti-spam */}
        <input type="text" name="_honey" style={{ display: 'none' }} />

        {/* Configuration FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_limit" value="1" />
        <input type="hidden" name="_template" value="table" />

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nom complet *"
            required
            value={formData.name}
            onChange={handleChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Sujet *"
          required
          value={formData.subject}
          onChange={handleChange}
          className="input"
        />

        <textarea
          name="message"
          placeholder="Ton message *"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="input resize-none"
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-main-color text-white font-semibold rounded-lg shadow-md"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              />
              <span>Envoi…</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Envoyer</span>
            </>
          )}
        </motion.button>

        <p className="text-xs text-center text-slate-500 mt-2">
          Champs obligatoires — réponse sous 24h.
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;
