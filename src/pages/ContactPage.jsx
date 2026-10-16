import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Check, Copy, MessageSquare, Building2, CheckCircle2 } from 'lucide-react';
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
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0D6EFD] text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Phone className="w-3.5 h-3.5 text-[#0D6EFD]" />
          <span>{t.contact.sectionBadge}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight"
        >
          {t.contact.title}
        </motion.h1>
        
        <p className="text-slate-500 text-xs sm:text-sm mt-3">
          {t.closingNote}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Details Card (6 Cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 clean-card rounded-3xl p-6 sm:p-10 space-y-6"
        >
          <div>
            <div className="text-2xl font-black text-slate-900 mb-1">
              {t.name}
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#0D6EFD]">
              {t.businessActivity}
            </div>
          </div>

          <div className="space-y-4">
            {/* Location */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Location
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  {t.location}
                </span>
              </div>
            </div>

            {/* Phone 1 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {t.contact.phoneLine1}
                  </span>
                  <a href={`tel:${t.phones[0].raw}`} className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#0D6EFD] transition-colors">
                    {t.phones[0].display}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${t.phones[0].raw}`}
                className="px-3 py-1.5 rounded-lg bg-[#0D6EFD] hover:bg-blue-700 text-white text-xs font-bold transition-colors"
              >
                {t.contact.call}
              </a>
            </div>

            {/* Phone 2 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {t.contact.phoneLine2}
                  </span>
                  <a href={`tel:${t.phones[1].raw}`} className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#0D6EFD] transition-colors">
                    {t.phones[1].display}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${t.phones[1].raw}`}
                className="px-3 py-1.5 rounded-lg bg-[#0D6EFD] hover:bg-blue-700 text-white text-xs font-bold transition-colors"
              >
                {t.contact.call}
              </a>
            </div>

            {/* Email */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3.5 truncate mr-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    {t.contact.emailLabel}
                  </span>
                  <a href={`mailto:${t.email}`} className="text-sm sm:text-base font-bold text-slate-900 hover:text-[#0D6EFD] transition-colors truncate block">
                    {t.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1 shrink-0"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? t.contact.copied : t.contact.copy}</span>
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs text-slate-600 leading-relaxed font-medium">
            "{t.slogan}"
          </div>
        </motion.div>

        {/* Send Inquiry Form Card (6 Cols) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 clean-card rounded-3xl p-6 sm:p-10 border border-slate-200"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0D6EFD]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD]">
              {t.contact.directInquiries}
            </span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 mb-6">
            {t.contact.sendInquiry}
          </h2>

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.contact.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0D6EFD] focus:ring-1 focus:ring-[#0D6EFD] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {t.contact.phoneLabel}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+251 9..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0D6EFD] focus:ring-1 focus:ring-[#0D6EFD] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {t.contact.serviceLabel}
              </label>
              <select
                value={formData.commodity}
                onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0D6EFD] focus:ring-1 focus:ring-[#0D6EFD] transition-all"
              >
                {t.coreServices.services.map((s, idx) => (
                  <option key={idx} value={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {t.contact.messageLabel}
              </label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t.contact.messagePlaceholder}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#0D6EFD] focus:ring-1 focus:ring-[#0D6EFD] transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{t.contact.submitWhatsApp}</span>
            </button>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold"
            >
              {t.contact.inquiryPrepared}
            </motion.div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
