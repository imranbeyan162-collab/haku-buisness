import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Phone, Mail, MapPin, Gauge, Layers, FileCheck, Award, Zap, Cpu, Sparkles, Sliders, Clock, MessageSquare, ChevronRight } from 'lucide-react';

export default function HomePage({ setActivePage, t, currentLang }) {
  const [selectedCommodity, setSelectedCommodity] = useState('sesame');
  const [tonnage, setTonnage] = useState(30);

  // Turnaround calculation based on 8-10 MT/hour average
  const hours = (tonnage / 9).toFixed(1);

  const commodities = [
    { id: 'sesame', name: 'Sesame Seeds / ሰሊጥ / Saamunaa', icon: '🌱' },
    { id: 'coffee', name: 'Coffee Beans / ቡና / Buna', icon: '☕' },
    { id: 'teff', name: 'Teff / ጤፍ / Xaafii', icon: '🌾' },
    { id: 'soybeans', name: 'Soybeans & Pulses / አኩሪ አተር / Atara', icon: '🫘' },
    { id: 'chickpeas', name: 'Chickpeas / ሺምብራ / Shimbra', icon: '🥣' },
  ];

  const handleWhatsAppBooking = () => {
    const sel = commodities.find(c => c.id === selectedCommodity);
    const text = encodeURIComponent(
      `Hello Haku Business Group,\n\nI would like to inquire about grain processing capacity at your Adama 03 facility.\n\n` +
      `• Commodity: ${sel?.name}\n` +
      `• Batch Volume: ${tonnage} Metric Tons\n` +
      `• Est. Line Turnaround: ~${hours} Hours\n\n` +
      `Please provide commercial quotation and line availability.`
    );
    window.open(`https://wa.me/251911613845?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-20 py-8 sm:py-14 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* HERO SECTION (Inspired by Reference 1: Deep Navy, High Impact, Electric Blue Glow) */}
      <section className="relative text-center pt-6 sm:pt-10 pb-8">
        
        {/* Radiant Ambient Backlight Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        {/* Top Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-850/90 border border-brand-500/30 text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-glow-blue"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>{t.hero.facilityBadge}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] max-w-5xl mx-auto mb-6"
        >
          <span className="block">{t.hero.headline}</span>
          <span className="text-gradient-cyan block mt-2">
            HAKU BUSINESS GROUP
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          {t.overview.paragraphs[0]}
        </motion.p>

        {/* Slogan Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block p-4 rounded-2xl bg-dark-850/80 border border-white/10 text-slate-200 text-sm sm:text-base italic mb-10 shadow-lg"
        >
          "{t.slogan}"
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 max-w-xl mx-auto"
        >
          <button
            onClick={() => setActivePage('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-blue-600 to-cyan-500 hover:from-brand-500 hover:to-cyan-400 text-white font-extrabold text-sm sm:text-base shadow-glow-hero hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 group"
          >
            <span>{t.hero.exploreServices}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setActivePage('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-dark-800/90 hover:bg-dark-750 text-white font-bold text-sm sm:text-base border border-white/15 hover:border-brand-400 transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-brand-400" />
            <span>{t.hero.contactInfo}</span>
          </button>
        </motion.div>

        {/* CENTERPIECE PLANT SHOWCASE (Inspired by Device Showcase in Reference 1) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto mt-16 sm:mt-20"
        >
          {/* Intense Glow Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600/30 via-cyan-500/20 to-blue-700/30 rounded-3xl blur-2xl transform scale-95 pointer-events-none"></div>

          {/* High-tech Screen Bezel */}
          <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/20 shadow-2xl backdrop-blur-md">
            
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full bg-dark-950">
              <img
                src="/assets/factory-machinery.jpg"
                alt="Haku Business Group Modern Processing Plant in Adama 03 Industry Zone"
                className="w-full h-full object-cover object-center"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent"></div>

              {/* Top Industrial HUD Strip */}
              <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-xs text-white z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900/90 backdrop-blur-md border border-white/20 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>ADAMA 03 FACILITY • ACTIVE LINE</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900/90 backdrop-blur-md border border-brand-500/40 text-brand-300 font-extrabold">
                  <Zap className="w-3.5 h-3.5 text-brand-400" />
                  <span>8–10 MT / HOUR</span>
                </div>
              </div>

              {/* Bottom Showcase Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10">
                <div className="text-left">
                  <div className="text-xs uppercase font-extrabold text-cyan-400 tracking-wider mb-1">
                    {t.hero.machineryTitle}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-white">
                    {t.hero.machinerySub}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                    {t.hero.machineryCaption}
                  </p>
                </div>

                <button
                  onClick={() => setActivePage('services')}
                  className="px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm shadow-glow-blue transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>{t.hero.viewFullMachinery}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 FEATURE PILLARS (Directly matching Reference 1 layout beneath mockup!) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mt-12">
          
          <div className="p-5 rounded-2xl bg-dark-850/70 border border-white/10 hover:border-brand-500/40 transition-all text-left">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white">Optical AI Sorting</div>
            <div className="text-xs text-slate-400 mt-1">High-speed CCD cameras for discolored kernel ejection.</div>
          </div>

          <div className="p-5 rounded-2xl bg-dark-850/70 border border-white/10 hover:border-brand-500/40 transition-all text-left">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-cyan-400 flex items-center justify-center mb-3">
              <Gauge className="w-5 h-5" />
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white">8–10 MT/Hour</div>
            <div className="text-xs text-slate-400 mt-1">High-volume commercial processing for large export lots.</div>
          </div>

          <div className="p-5 rounded-2xl bg-dark-850/70 border border-white/10 hover:border-brand-500/40 transition-all text-left">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white">Export Quality</div>
            <div className="text-xs text-slate-400 mt-1">Certified ECX & international buyer cleanliness specs.</div>
          </div>

          <div className="p-5 rounded-2xl bg-dark-850/70 border border-white/10 hover:border-brand-500/40 transition-all text-left">
            <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-amber-400 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-sm sm:text-base font-extrabold text-white">Adama 03 Hub</div>
            <div className="text-xs text-slate-400 mt-1">Direct access to Addis-Adama Tollway & Djibouti corridor.</div>
          </div>

        </div>

      </section>

      {/* 3 CORE ENTERPRISE PORTALS (Glassmorphic Cards) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: About Us */}
        <div 
          onClick={() => setActivePage('about')}
          className="glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-400 border border-brand-500/20 flex items-center justify-center font-bold mb-5 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-brand-400 uppercase tracking-wider block mb-1">
              Company Profile
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-brand-300 transition-colors">
              {t.nav.about}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {t.overview.paragraphs[1]}
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>1. {t.overview.title}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>2. {t.vision.title}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>3. {t.mission.title}</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-brand-400 group-hover:text-cyan-300 transition-colors">
            <span>{t.nav.about}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>

        {/* Card 2: Our Services */}
        <div 
          onClick={() => setActivePage('services')}
          className="glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-cyan-400 border border-brand-500/20 flex items-center justify-center font-bold mb-5 group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-1">
              Industrial Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors">
              {t.nav.services}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {t.machinery.intro}
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>4. {t.coreServices.title}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>5. {t.machinery.title}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>6. {t.targetCustomers.title}</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-cyan-400 group-hover:text-brand-300 transition-colors">
            <span>{t.nav.services}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>

        {/* Card 3: Why Us */}
        <div 
          onClick={() => setActivePage('why-us')}
          className="glass-panel glass-panel-hover rounded-3xl p-7 sm:p-9 cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-emerald-400 border border-brand-500/20 flex items-center justify-center font-bold mb-5 group-hover:scale-105 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              Competitive Edge
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-emerald-300 transition-colors">
              {t.nav.whyUs}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {t.commitmentToQuality.paragraphs[1]}
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>7. {t.competitiveAdvantages.title}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>8. {t.commitmentToQuality.title}</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>9. {t.agriculturalContribution.title}</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-extrabold text-emerald-400 group-hover:text-cyan-300 transition-colors">
            <span>{t.nav.whyUs}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>

      </section>

      {/* INTERACTIVE PRODUCTION TURNAROUND CALCULATOR */}
      <section className="glass-panel rounded-3xl p-6 sm:p-12 relative overflow-hidden border border-white/15">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-500/15 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Production Turnaround Planner</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Estimate Processing Time for Your Commodity Batch
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Calculate how rapidly Haku's 8–10 MT/hour continuous line in Adama can process, optical color sort, and package your lot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <label className="block text-xs font-bold text-brand-300 uppercase tracking-wider mb-3">
                1. Select Commodity
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {commodities.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCommodity(c.id)}
                    className={`p-3 rounded-xl text-left text-xs font-bold transition-all border ${
                      selectedCommodity === c.id
                        ? 'bg-brand-600 text-white border-brand-400 shadow-glow-blue'
                        : 'bg-dark-850/80 text-slate-300 border-white/10 hover:border-white/25'
                    }`}
                  >
                    <span className="text-base mr-1.5">{c.icon}</span>
                    <span>{c.name.split('/')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-brand-300 uppercase tracking-wider">
                  2. Batch Tonnage (Metric Tons)
                </label>
                <span className="text-2xl font-black text-cyan-300">
                  {tonnage} <span className="text-sm font-medium text-slate-400">MT</span>
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="300"
                step="5"
                value={tonnage}
                onChange={(e) => setTonnage(Number(e.target.value))}
                className="w-full h-3 bg-dark-950 rounded-lg appearance-none cursor-pointer accent-cyan-400 border border-white/10"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                <span>5 MT</span>
                <span>50 MT (Container)</span>
                <span>150 MT</span>
                <span>300+ MT</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-dark-850 to-dark-900 rounded-2xl p-6 sm:p-8 border border-brand-500/30 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider">Estimated Facility Turnaround</span>
              <div className="text-4xl sm:text-5xl font-black text-white mt-2 mb-1 flex items-baseline gap-2">
                <span>~{hours}</span>
                <span className="text-lg text-brand-400 font-bold">Hours</span>
              </div>
              <p className="text-xs text-slate-300 mb-6">
                Based on continuous operation at ~9 Metric Tons/Hour line throughput in Adama 03 Zone.
              </p>

              <div className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-white/10 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Optical Color Sorting:</span>
                  <span className="font-bold text-white">Included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Mechanical Cleaning & De-stoning:</span>
                  <span className="font-bold text-white">Included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Export Bagging (25kg/50kg):</span>
                  <span className="font-bold text-white">Configurable</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsAppBooking}
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-xs sm:text-sm shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Proforma via WhatsApp</span>
            </button>
          </div>

        </div>
      </section>

      {/* DIRECT CONTACT & COMMERCIAL DISPATCH */}
      <section className="bg-gradient-to-r from-brand-900/60 via-dark-850 to-dark-900 rounded-3xl p-8 sm:p-12 border border-brand-500/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="space-y-2 text-left max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block">
            {t.businessActivity}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {t.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t.closingNote}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
          <a
            href={`tel:${t.phones[0].raw}`}
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-brand-600 to-blue-500 hover:from-brand-500 hover:to-blue-400 text-white text-xs sm:text-sm font-extrabold shadow-glow-blue transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>{t.contact.call}: {t.phones[0].display}</span>
          </a>

          <button
            onClick={() => setActivePage('contact')}
            className="px-7 py-4 rounded-xl bg-dark-800 hover:bg-dark-750 text-white text-xs sm:text-sm font-bold border border-white/15 transition-all text-center"
          >
            {t.contact.title}
          </button>
        </div>
      </section>

    </div>
  );
}
