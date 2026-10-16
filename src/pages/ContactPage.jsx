import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Check, Copy, MessageSquare, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage({ setActivePage, t }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    commodity: 'Grain Cleaning & Processing',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Hello ${t.name},\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService/Commodity: ${formData.commodity}\nMessage: ${formData.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/251911613845?text=${msg}`, '_blank');
    }, 1000);
  };

  return (
    <div className="py-8 sm:py-14 px-4 sm:px-8 max-w-6xl mx-auto space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Phone className="w-3.5 h-3.5 text-brand-400" />
          <span>{t.contact.sectionBadge}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-black text-white tracking-tight"
        >
          {t.contact.title}
        </motion.h1>
        
        <p className="text-slate-400 text-xs sm:text-sm mt-3">
          {t.closingNote}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Details Card (6 Cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-10 space-y-6 border border-white/10"
        >
          <div>
            <div className="text-2xl font-black text-white mb-1">
              {t.name}
            </div>
            <div className="text-xs sm:text-sm font-bold text-cyan-400">
              {t.businessActivity}
            </div>
          </div>

          <div className="space-y-4">
            {/* Location */}
            <div className="p-4 rounded-2xl bg-dark-850 border border-white/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Location
                </span>
                <span className="text-sm font-semibold text-white">
                  {t.location}
                </span>
              </div>
            </div>

            {/* Phone 1 */}
            <div className="p-4 rounded-2xl bg-dark-850 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {t.contact.phoneLine1}
                  </span>
                  <a
                    href={`tel:${t.phones[0].raw}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    {t.phones[0].display}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${t.phones[0].raw}`}
                className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-glow-blue transition-all"
              >
                {t.contact.call}
              </a>
            </div>

            {/* Phone 2 */}
            <div className="p-4 rounded-2xl bg-dark-850 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {t.contact.phoneLine2}
                  </span>
                  <a
                    href={`tel:${t.phones[1].raw}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    {t.phones[1].display}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${t.phones[1].raw}`}
                className="px-4 py-2 rounded-xl bg-dark-750 hover:bg-dark-700 text-white text-xs font-bold border border-white/10 transition-colors"
              >
                {t.contact.call}
              </a>
            </div>

            {/* Email */}
            <div className="p-4 rounded-2xl bg-dark-850 border border-white/10 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3.5 truncate">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {t.contact.emailLabel}
                  </span>
                  <a
                    href={`mailto:${t.email}`}
                    className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors truncate block"
                  >
                    {t.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2 rounded-xl bg-dark-750 hover:bg-dark-700 text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-colors shrink-0"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? t.contact.copied : t.contact.copy}</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-dark-850 border border-brand-500/20 text-xs sm:text-sm text-cyan-300 font-semibold italic">
            "{t.slogan}"
          </div>
        </motion.div>

        {/* Message / WhatsApp Proforma Form (6 Cols) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 glass-panel rounded-3xl p-6 sm:p-10 border border-brand-500/30 shadow-glow-hero"
        >
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              {t.contact.directInquiries}
            </span>
            <h3 className="text-2xl font-black text-white">
              {t.contact.sendInquiry}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              {t.closingNote}
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center animate-slide-up bg-dark-850 rounded-2xl p-6 border border-brand-500/30">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{t.contact.inquiryPrepared}</h4>
              <p className="text-xs text-slate-300">
                {t.contact.openingWhatsApp}
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.contact.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+251 9... / 09..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.serviceLabel}
                </label>
                <select
                  value={formData.commodity}
                  onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  {t.coreServices.services.map((s, idx) => (
                    <option key={idx} value={s.name} className="bg-dark-900 text-white">
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-brand-600 via-blue-600 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-glow-blue transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.submitWhatsApp}</span>
              </button>
            </form>
          )}
        </motion.div>

      </div>

      {/* Return to Home */}
      <div className="pt-4 border-t border-white/10 text-center">
        <button
          onClick={() => setActivePage('home')}
          className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          {t.contact.returnHome}
        </button>
      </div>

    </div>
  );
}
