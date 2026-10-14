import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, Copy, Navigation, ArrowUpRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function FacilityLocation({ onOpenQuoteModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    commodity: 'Sesame Seeds',
    tonnage: '25',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormSent(true);
    // WhatsApp fallback
    const msg = encodeURIComponent(
      `Inquiry from Haku Website:\nName: ${formData.name}\nPhone: ${formData.phone}\nCommodity: ${formData.commodity}\nVolume: ${formData.tonnage} MT\nMessage: ${formData.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/251911613845?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-3">
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          <span>Strategic Export Gateway</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-4">
          Visit Our Processing Plant in Adama 03
        </h2>
        <p className="text-stone-600 text-base sm:text-lg">
          Directly positioned along the Addis Ababa – Djibouti trade corridor to facilitate smooth commodity aggregation and rapid container dispatch.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Information & Map Preview Card (6 Cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 shadow-soft-float border border-stone-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">Adama Logistics Advantage</h3>
                <span className="text-xs text-stone-500 font-medium">Oromia Region, 03 Industry Zone</span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              Adama is Ethiopia's central transportation nexus. Our facility is engineered with heavy-vehicle turnaround bays, clean dry staging docks, and direct access to the Addis-Adama Toll Expressway.
            </p>

            {/* Quick Contact Cards */}
            <div className="space-y-3 mb-8">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-forest-800 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-stone-400">Direct Operations Line</div>
                    <a href="tel:+251911613845" className="text-sm font-bold text-stone-900 hover:text-forest-700">
                      +251 911 613 845
                    </a>
                  </div>
                </div>
                <a
                  href="tel:+251911613845"
                  className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
                >
                  Call Now
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 text-forest-800 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-stone-400">Inquiries & Contracts</div>
                    <a href="tel:+251905606162" className="text-sm font-bold text-stone-900 hover:text-forest-700">
                      +251 905 606 162
                    </a>
                  </div>
                </div>
                <a
                  href="tel:+251905606162"
                  className="px-3 py-1.5 rounded-full bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold"
                >
                  Call
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-bold uppercase text-stone-400">Email Correspondence</div>
                    <span className="text-xs sm:text-sm font-bold text-stone-900 truncate block">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold flex items-center gap-1 shrink-0"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Operating hours */}
          <div className="pt-4 border-t border-stone-100 flex items-center gap-2.5 text-xs text-stone-500">
            <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Facility operates Mon–Sat 8:00 AM – 6:00 PM. 24/7 dedicated runs for bulk export deadlines.</span>
          </div>
        </div>

        {/* Right Contact / Fast Quotation Form (6 Cols) */}
        <div className="lg:col-span-6 bg-gradient-to-br from-[#183a2b] to-[#122e20] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-emerald-800/40 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct Commercial Inquiry</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Book Line Allocation
            </h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm mb-6">
              Submit your commodity specifications and our Adama plant manager will review capacity and respond promptly.
            </p>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-center animate-slide-up">
                <div className="w-12 h-12 rounded-full bg-emerald-400 text-forest-950 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Inquiry Dispatched!</h4>
                <p className="text-xs text-emerald-200">
                  Redirecting to WhatsApp to connect with our operations team immediately...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-emerald-200 mb-1">
                    Your Name / Company / Union
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Oromia Export Traders / Dawit Kebede"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-100/40 text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-emerald-200 mb-1">
                      Phone Number (Ethiopia)
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0911 ... or +251 9..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-100/40 text-sm focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-emerald-200 mb-1">
                      Commodity
                    </label>
                    <select
                      value={formData.commodity}
                      onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-emerald-400"
                    >
                      <option value="Sesame Seeds" className="text-stone-900">Sesame Seeds</option>
                      <option value="Coffee Beans" className="text-stone-900">Arabica Coffee Beans</option>
                      <option value="Teff" className="text-stone-900">Teff</option>
                      <option value="Soybeans" className="text-stone-900">Soybeans</option>
                      <option value="Chickpeas" className="text-stone-900">Chickpeas & Pulses</option>
                      <option value="Red Kidney Beans" className="text-stone-900">Red Kidney Beans</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-200 mb-1">
                    Estimated Batch Volume (Metric Tons)
                  </label>
                  <input
                    type="number"
                    min="5"
                    value={formData.tonnage}
                    onChange={(e) => setFormData({ ...formData, tonnage: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-emerald-200 mb-1">
                    Special Processing Notes
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Requires color sorting with 99.8% purity spec for Middle East export packaging..."
                    className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-100/40 text-sm focus:outline-none focus:border-emerald-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-bold text-sm shadow-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Inquiry to Plant Manager</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
