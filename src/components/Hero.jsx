import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Factory, Zap, ShieldCheck, ChevronDown, Sliders, Globe } from 'lucide-react';
import { COMMODITIES, SERVICES } from '../data/companyData';

export default function Hero({ onOpenQuoteModal, onQuickFilter }) {
  const [selectedCommodity, setSelectedCommodity] = useState(COMMODITIES[0].id);
  const [selectedService, setSelectedService] = useState('all');
  const [tonnage, setTonnage] = useState('25');

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    if (onQuickFilter) {
      onQuickFilter({
        commodityId: selectedCommodity,
        serviceId: selectedService,
        tons: Number(tonnage) || 25
      });
    }
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-4 sm:pt-6 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Hero Visual Card (Rounded organic container like reference) */}
      <div className="relative rounded-[32px] sm:rounded-[44px] overflow-hidden bg-gradient-to-br from-[#122e20] via-[#1a4430] to-[#0c1f16] text-white shadow-2xl border border-emerald-900/30">
        
        {/* Ambient Warm Golden Sunlight Glow Effect (matching reference sun lighting) */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-amber-400/20 via-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

        <div className="relative z-10 px-6 sm:px-12 pt-12 sm:pt-20 pb-28 sm:pb-36 max-w-5xl">
          
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs sm:text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Adama 03 Industry Zone, Oromia, Ethiopia</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-300 font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> 8–10 MT / Hour Line
            </span>
          </div>

          {/* Hero Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
            Elevating Ethiopian Grains to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
              World-Class Export Purity
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl leading-relaxed mb-8">
            Haku Business Group provides industrial mechanical cleaning, high-speed optical color sorting, and grain polishing. Built for exporters, cooperatives, and commodity traders demanding spotless cleanliness and maximum market value.
          </p>

          {/* Action Button & Trust indicators */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenQuoteModal}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2d774f] to-[#215739] hover:from-[#358a5c] hover:to-[#276644] text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-emerald-900/50 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2 group"
            >
              <span>Schedule Processing Batch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#machinery"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-medium text-sm sm:text-base transition-colors flex items-center gap-2"
            >
              <Factory className="w-4 h-4 text-emerald-300" />
              <span>Explore Factory Line</span>
            </a>
          </div>

          {/* Key Value Metrics strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 text-xs sm:text-sm">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">8–10 MT</div>
              <div className="text-emerald-100/70 font-medium">Hourly Throughput</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300">99.8%</div>
              <div className="text-emerald-100/70 font-medium">Optical Purity Target</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-300">4-in-1</div>
              <div className="text-emerald-100/70 font-medium">Sift, Destone, Sort & Polish</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">Adama 03</div>
              <div className="text-emerald-100/70 font-medium">Direct Djibouti Corridor</div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Pill Action / Estimator Bar Overlapping Hero (Direct signature from reference image!) */}
      <div className="relative -mt-14 sm:-mt-16 z-20 px-2 sm:px-6">
        <form 
          onSubmit={handleQuickEstimate}
          className="max-w-5xl mx-auto bg-white rounded-full p-2.5 sm:p-3 shadow-[0_20px_60px_-15px_rgba(24,58,43,0.18)] border border-stone-200/90 flex flex-col md:flex-row items-center gap-2 sm:gap-3"
        >
          {/* Commodity Selector */}
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-2 bg-stone-50 md:bg-transparent rounded-full border md:border-0 border-stone-200">
            <span className="text-xl">🌾</span>
            <div className="flex-1 text-left">
              <label className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                Select Commodity
              </label>
              <select
                value={selectedCommodity}
                onChange={(e) => setSelectedCommodity(e.target.value)}
                className="w-full bg-transparent font-semibold text-stone-800 text-xs sm:text-sm focus:outline-none cursor-pointer"
              >
                {COMMODITIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.icon} {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-stone-200"></div>

          {/* Service Option */}
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-2 bg-stone-50 md:bg-transparent rounded-full border md:border-0 border-stone-200">
            <Sliders className="w-4 h-4 text-forest-600" />
            <div className="flex-1 text-left">
              <label className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                Service Package
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-transparent font-semibold text-stone-800 text-xs sm:text-sm focus:outline-none cursor-pointer"
              >
                <option value="all">Full Spectrum (Clean + Sort + Polish)</option>
                <option value="cleaning">Mechanical Cleaning & De-stoning Only</option>
                <option value="sorting">Optical Color Sorting Only</option>
                <option value="polishing">Polishing & Finishing Only</option>
                <option value="contract">Bulk Contract / Continuous Supply</option>
              </select>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-stone-200"></div>

          {/* Tonnage Input */}
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-2 bg-stone-50 md:bg-transparent rounded-full border md:border-0 border-stone-200">
            <span className="text-forest-700 font-extrabold text-sm">MT</span>
            <div className="flex-1 text-left">
              <label className="block text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                Batch Tonnage (MT)
              </label>
              <input
                type="number"
                min="5"
                max="500"
                value={tonnage}
                onChange={(e) => setTonnage(e.target.value)}
                placeholder="e.g. 25"
                className="w-full bg-transparent font-semibold text-stone-800 text-xs sm:text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* CTA Submit Pill (matches dark green pill in reference design) */}
          <button
            type="submit"
            className="w-full md:w-auto px-7 py-3.5 bg-[#23583c] hover:bg-[#183e2b] text-white font-semibold text-xs sm:text-sm rounded-full transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Estimate & Reserve</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>

    </section>
  );
}
