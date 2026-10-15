import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Check, Copy, MessageSquare, Building2, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function ContactPage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    commodity: 'Grain Cleaning & Processing',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_CONTENT.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Hello Haku Business Group,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService/Commodity: ${formData.commodity}\nMessage: ${formData.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/251911613845?text=${msg}`, '_blank');
    }, 1000);
  };

  return (
    <div className="page-enter py-6 sm:py-10 px-4 sm:px-8 max-w-6xl mx-auto space-y-10 sm:space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Phone className="w-3.5 h-3.5 text-brand-600" />
          <span>Section 10</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Contact Information
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          {COMPANY_CONTENT.closingNote}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Contact Details Card (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
              {COMPANY_CONTENT.name}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-brand-600">
              Business Activity: {COMPANY_CONTENT.businessActivity}
            </div>
          </div>

          <div className="space-y-3.5">
            {/* Location */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Location
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">
                  {COMPANY_CONTENT.location}
                </span>
              </div>
            </div>

            {/* Phone 1 */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Phone Line 1
                  </span>
                  <a
                    href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {COMPANY_CONTENT.phones[0].display}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
                className="px-3.5 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-sm"
              >
                Call
              </a>
            </div>

            {/* Phone 2 */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Phone Line 2
                  </span>
                  <a
                    href={`tel:${COMPANY_CONTENT.phones[1].raw}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {COMPANY_CONTENT.phones[1].display}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${COMPANY_CONTENT.phones[1].raw}`}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold"
              >
                Call
              </a>
            </div>

            {/* Email */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 truncate">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_CONTENT.email}`}
                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors truncate block"
                  >
                    {COMPANY_CONTENT.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold flex items-center gap-1 shrink-0"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-brand-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-brand-50 border border-brand-200 text-xs sm:text-sm text-brand-900 font-medium">
            "{COMPANY_CONTENT.slogan}"
          </div>
        </div>

        {/* Message / Inquiry Form (6 Cols) */}
        <div className="lg:col-span-6 bg-[#0B132B] text-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-800">
          <div className="mb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400 block mb-1">
              Direct Inquiries
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Send Us an Inquiry
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              {COMPANY_CONTENT.closingNote}
            </p>
          </div>

          {submitted ? (
            <div className="py-6 text-center animate-slide-up bg-slate-900 rounded-xl p-6 border border-slate-800">
              <div className="w-12 h-12 rounded-full bg-brand-400 text-brand-950 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Inquiry Prepared!</h4>
              <p className="text-xs text-brand-300">
                Opening WhatsApp to connect directly with Haku Business Group operations...
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-brand-300 mb-1">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Grain Exporter / Union Representative"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+251 9... / 09..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-300 mb-1">
                  Required Service
                </label>
                <select
                  value={formData.commodity}
                  onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-brand-500"
                >
                  <option value="Grain and Pulse Cleaning" className="text-slate-900">Grain and Pulse Cleaning</option>
                  <option value="Color Sorting Services" className="text-slate-900">Color Sorting Services</option>
                  <option value="Grain Polishing Services" className="text-slate-900">Grain Polishing Services</option>
                  <option value="Contract Cleaning Services" className="text-slate-900">Contract Cleaning Services</option>
                  <option value="General Processing Inquiry" className="text-slate-900">General Processing Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-300 mb-1">
                  Message / Specifications
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your grain specifications, volume, or delivery requirements..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Return to Home */}
      <div className="pt-4 border-t border-slate-200 text-center">
        <button
          onClick={() => setActivePage('home')}
          className="text-xs font-bold text-brand-600 hover:text-brand-800"
        >
          ← Return to Home
        </button>
      </div>

    </div>
  );
}
