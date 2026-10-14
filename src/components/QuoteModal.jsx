import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMMODITIES, COMPANY_INFO } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [commodity, setCommodity] = useState(initialData?.commodity || COMMODITIES[0].name);
  const [tonnage, setTonnage] = useState(initialData?.tons || '30');
  const [service, setService] = useState(initialData?.serviceTitle || 'Full Spectrum Processing');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2d774f', '#d99c2b', '#2b77ff', '#10b981']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    triggerConfetti();

    const text = encodeURIComponent(
      `Hello Haku Business Group,\n\nI submitted an inquiry via your website:\n` +
      `• Name: ${customerName}\n` +
      `• Phone: ${phone}\n` +
      `• Commodity: ${commodity}\n` +
      `• Volume: ${tonnage} MT\n` +
      `• Package: ${service}\n` +
      `• Notes: ${notes || 'Standard export processing'}\n\n` +
      `Please provide quotation and processing schedule.`
    );

    setTimeout(() => {
      window.open(`https://wa.me/251911613845?text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-md animate-slide-up">
      <div className="relative w-full max-w-lg bg-white rounded-[32px] p-6 sm:p-8 shadow-2xl border border-stone-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-stone-900 mb-2">
              Batch Reservation Sent!
            </h3>
            <p className="text-stone-600 text-sm mb-6 max-w-sm mx-auto">
              Connecting you directly to Haku's Adama operations desk on WhatsApp for fast contract confirmation.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-forest-800 text-white text-xs font-semibold"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                Official Processing Reservation
              </span>
            </div>
            
            <h3 className="text-2xl font-black text-stone-900 mb-1">
              Book Line Allocation
            </h3>
            <p className="text-stone-500 text-xs mb-6">
              Haku Business Group • Adama 03 Industry Zone (8–10 MT/Hour Capacity)
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Al-Habesha Export"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-forest-600"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+251 9... / 0911..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-forest-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                    Commodity
                  </label>
                  <select
                    value={commodity}
                    onChange={(e) => setCommodity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-forest-600 font-medium"
                  >
                    {COMMODITIES.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                    Batch Volume (MT)
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="500"
                    required
                    value={tonnage}
                    onChange={(e) => setTonnage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-forest-600 font-semibold text-forest-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Requested Service Package
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 focus:outline-none focus:border-forest-600 font-medium"
                >
                  <option value="Full Spectrum (Cleaning + Color Sort + Polish)">Full Spectrum (Cleaning + Color Sort + Polish)</option>
                  <option value="Optical Color Sorting Only">Optical Color Sorting Only</option>
                  <option value="Mechanical Cleaning & De-stoning Only">Mechanical Cleaning & De-stoning Only</option>
                  <option value="Commercial Grain Polishing Only">Commercial Grain Polishing Only</option>
                  <option value="Custom Bulk Contract Processing">Custom Bulk Contract Processing</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-600 uppercase mb-1">
                  Delivery Date or Quality Specifications
                </label>
                <textarea
                  rows="2"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. ECX export grade, 50kg bags needed by next Monday..."
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 focus:outline-none focus:border-forest-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#23583c] hover:bg-[#183e2b] text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm & Send via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                <Phone className="w-3.5 h-3.5" />
                <span>Direct Plant Inquiries: +251 911 613 845</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
