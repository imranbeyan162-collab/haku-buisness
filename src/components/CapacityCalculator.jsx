import React, { useState, useId } from 'react';
import { Sliders, Clock, CheckCircle2, TrendingUp, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { COMMODITIES, COMPANY_INFO } from '../data/companyData';

export default function CapacityCalculator({ initialFilter, onOpenQuoteModal }) {
  const [commodity, setCommodity] = useState(initialFilter?.commodityId || 'sesame');
  const [tons, setTons] = useState(initialFilter?.tons || 35);
  const [cleanMechanical, setCleanMechanical] = useState(true);
  const [destoning, setDestoning] = useState(true);
  const [colorSort, setColorSort] = useState(true);
  const [polishing, setPolishing] = useState(true);
  const [bagging, setBagging] = useState(true);

  // Calculations based on 8-10 MT/hour average throughput (9 MT/hr baseline)
  const averageHourlyMT = 9.0;
  
  // Complexity factor based on modules
  let speedMultiplier = 1.0;
  if (colorSort && polishing) speedMultiplier = 0.95; // Optical fine pass
  else if (!colorSort && !polishing) speedMultiplier = 1.15; // Raw screen cleaning only

  const effectiveRate = (averageHourlyMT * speedMultiplier).toFixed(1);
  const totalHours = (tons / effectiveRate);
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  const selectedCommodityData = COMMODITIES.find(c => c.id === commodity) || COMMODITIES[0];

  const handleWhatsAppBooking = () => {
    const modules = [
      cleanMechanical ? "Mechanical Cleaning" : null,
      destoning ? "Gravity De-stoning" : null,
      colorSort ? "Optical Color Sorting" : null,
      polishing ? "Grain Polishing" : null,
      bagging ? "Automated Bagging" : null
    ].filter(Boolean).join(", ");

    const text = encodeURIComponent(
      `Hello Haku Business Group,\n\nI would like to inquire about grain processing capacity at your Adama 03 facility.\n\n` +
      `• Commodity: ${selectedCommodityData.name}\n` +
      `• Batch Volume: ${tons} Metric Tons\n` +
      `• Services Required: ${modules}\n` +
      `• Estimated Processing Time: ~${hours}h ${minutes}m\n\n` +
      `Please let me know your current line availability and commercial terms.`
    );

    window.open(`https://wa.me/251911613845?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="bg-gradient-to-br from-[#183a2b] to-[#0f251c] rounded-[36px] sm:rounded-[48px] p-6 sm:p-12 lg:p-16 text-white shadow-2xl border border-emerald-800/40 relative overflow-hidden">
        
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header */}
        <div className="relative z-10 max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Production Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Calculate Turnaround & Reserve Processing Line
          </h2>
          <p className="text-emerald-100/80 text-base sm:text-lg">
            Plan your harvest logistics with precision. See how quickly our 8–10 MT/hour line in Adama can clean, sort, and package your commodity for export.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
            
            {/* Commodity Select */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2">
                1. Select Agricultural Commodity
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {COMMODITIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCommodity(c.id)}
                    className={`p-3 rounded-2xl text-left text-xs font-semibold transition-all border ${
                      commodity === c.id
                        ? 'bg-emerald-500 text-white border-emerald-400 shadow-lg scale-[1.02]'
                        : 'bg-white/5 text-stone-200 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-lg mb-1">{c.icon}</div>
                    <div className="truncate">{c.name.split('(')[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tonnage Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                  2. Batch Volume (Metric Tons)
                </label>
                <span className="text-2xl font-black text-amber-300">
                  {tons} <span className="text-xs font-semibold text-emerald-200">MT</span>
                </span>
              </div>

              <input
                type="range"
                min="5"
                max="300"
                step="5"
                value={tons}
                onChange={(e) => setTons(Number(e.target.value))}
                className="w-full h-3 bg-white/15 rounded-full appearance-none cursor-pointer accent-emerald-400"
              />

              <div className="flex justify-between text-[11px] text-stone-400 mt-2">
                <span>5 MT (Small Batch)</span>
                <span>50 MT (Container Lot)</span>
                <span>150 MT</span>
                <span>300+ MT (Mega Bulk)</span>
              </div>
            </div>

            {/* Modular Processing Steps Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                3. Configure Processing Stages
              </label>
              <div className="space-y-2">
                {[
                  { id: 'mech', label: 'Mechanical Vibratory Pre-Cleaning & Dust Aspiration', state: cleanMechanical, setter: setCleanMechanical },
                  { id: 'destone', label: 'Specific Gravity De-Stoning (Heavy Foreign Matter Removal)', state: destoning, setter: setDestoning },
                  { id: 'color', label: 'High-Precision Optical CCD Color Sorting (Discoloration Ejection)', state: colorSort, setter: setColorSort },
                  { id: 'polish', label: 'Commercial Friction Polishing (Hull Luster Enhancement)', state: polishing, setter: setPolishing },
                  { id: 'bag', label: 'Automated Gravimetric Weighing & Machine Bag Stitching', state: bagging, setter: setBagging },
                ].map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer border border-white/5 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={item.state}
                      onChange={(e) => item.setter(e.target.checked)}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-500"
                    />
                    <span className="text-xs sm:text-sm font-medium text-stone-200">
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Results Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase text-stone-400 tracking-wider">Estimated Turnaround</span>
                  <h3 className="text-lg font-extrabold text-forest-900">
                    {selectedCommodityData.name.split('(')[0]}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  {selectedCommodityData.icon}
                </div>
              </div>

              {/* Big Stat: Estimated Time */}
              <div className="p-5 rounded-2xl bg-forest-50/80 border border-forest-100 mb-6 text-center">
                <div className="text-xs font-semibold text-forest-700 uppercase tracking-wider mb-1 flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Est. Facility Processing Time
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-forest-950">
                  {hours > 0 ? `${hours} hrs ` : ''}{minutes} min
                </div>
                <div className="text-xs text-forest-700 mt-2 font-medium">
                  Continuous operation at ~{effectiveRate} MT/Hour throughput
                </div>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm mb-6">
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Target Purity Spec:</span>
                  <span className="font-bold text-emerald-700">{selectedCommodityData.defaultPurity}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Handling Losses:</span>
                  <span className="font-bold text-stone-800">&lt; 0.2% minimal breakage</span>
                </div>
                <div className="flex justify-between py-2 border-b border-stone-100">
                  <span className="text-stone-500">Export Packaging:</span>
                  <span className="font-bold text-stone-800">25kg / 50kg Stitched Sacks</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-stone-500">Facility Location:</span>
                  <span className="font-bold text-stone-800">Adama 03 Industry Zone</span>
                </div>
              </div>
            </div>

            {/* Direct Booking Actions */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full py-3.5 px-5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send WhatsApp Order Request</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  if (onOpenQuoteModal) {
                    onOpenQuoteModal({
                      commodity: selectedCommodityData.name,
                      tons: tons,
                      hours: `${hours}h ${minutes}m`
                    });
                  }
                }}
                className="w-full py-3 px-5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs sm:text-sm transition-colors text-center"
              >
                Request Official Proforma / SLA
              </button>

              <p className="text-[11px] text-center text-stone-400">
                Direct phone inquiries: <a href="tel:+251911613845" className="text-forest-700 font-semibold underline">+251 911 613 845</a>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
