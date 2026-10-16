import React from 'react';
import { Factory, Sparkles, CheckCircle2, Users, ArrowRight, ShieldCheck, Gauge, Sliders, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPage({ setActivePage, t }) {
  return (
    <div className="py-8 sm:py-14 px-4 sm:px-8 max-w-6xl mx-auto space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Factory className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t.nav.services}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-black text-white tracking-tight"
        >
          {t.nav.services} & <span className="text-gradient-cyan">Industrial Infrastructure</span>
        </motion.h1>
        
        <p className="text-slate-400 text-xs sm:text-sm mt-3">
          {t.subtitle} • {t.location}
        </p>
      </div>

      {/* 4. Our Core Services */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
            {t.coreServices.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t.coreServices.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {t.coreServices.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-300 border border-brand-500/30 flex items-center justify-center font-bold text-xs">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 text-cyan-300 border border-white/10">
                    Industrial Core
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-4">
                  {service.name}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-400">
                <span>Haku Commercial Standard</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Machinery and Production Capacity */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-6 sm:p-10 space-y-8 border border-white/15"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400 block mb-1">
            {t.machinery.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
            {t.machinery.title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl">
            {t.machinery.intro}
          </p>
        </div>

        {/* Real Factory Machinery Photograph */}
        <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[16/10] sm:aspect-[16/9] w-full bg-dark-950">
          <img
            src="/assets/factory-machinery.jpg"
            alt="Haku Business Group Modern Grain Cleaning Machinery in Adama 03 Industry Zone"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-sm sm:text-base font-bold text-white">
                Haku Business Group Processing Facility — Adama 03 Industry Zone
              </div>
              <div className="text-xs text-slate-300">
                Operating live with multi-tier screen cleaners, optical color sorters, and automated packaging.
              </div>
            </div>
            <div className="px-3.5 py-1.5 rounded-lg bg-brand-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-blue shrink-0">
              8–10 MT/Hour
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {t.machinery.points.map((pt, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-dark-850 border border-white/10 hover:border-brand-500/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center mb-3 font-bold text-xs border border-brand-500/30">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {pt}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 6. Our Target Customers */}
      <section className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
            {t.targetCustomers.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
            {t.targetCustomers.title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            {t.targetCustomers.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {t.targetCustomers.customers.map((cust, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-dark-850/80 border border-white/10 flex items-start gap-3 hover:border-cyan-400/30 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">
                {cust}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
        <button
          onClick={() => setActivePage('about')}
          className="text-xs font-bold text-slate-400 hover:text-white"
        >
          ← {t.nav.about}
        </button>

        <button
          onClick={() => setActivePage('why-us')}
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-blue-500 hover:from-brand-500 hover:to-blue-400 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-glow-blue transition-all"
        >
          <span>{t.nav.whyUs}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
