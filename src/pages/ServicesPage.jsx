import React from 'react';
import { Factory, Sparkles, CheckCircle2, Users, ArrowRight, ShieldCheck, Gauge, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPage({ setActivePage, t }) {
  return (
    <div className="py-8 sm:py-14 px-4 sm:px-8 max-w-6xl mx-auto space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0D6EFD] text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Factory className="w-3.5 h-3.5 text-[#0D6EFD]" />
          <span>{t.nav.services}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight"
        >
          {t.nav.services} & <span className="text-[#0D6EFD]">Processing Capacity</span>
        </motion.h1>
        
        <p className="text-slate-500 text-xs sm:text-sm mt-3">
          {t.subtitle} • {t.location}
        </p>
      </div>

      {/* 4. Our Core Services */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-1">
            {t.coreServices.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
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
              className="clean-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center font-bold text-xs">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    Core Service
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4">
                  {service.name}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#0D6EFD] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Haku Commercial Standard</span>
                <span className="text-[#0D6EFD] font-bold">Standard Processing</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Machinery and Production Capacity */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="clean-card rounded-3xl p-6 sm:p-10 space-y-8"
      >
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-1">
            {t.machinery.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
            {t.machinery.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-3xl">
            {t.machinery.intro}
          </p>
        </div>

        {/* Real Facility Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full bg-slate-100 border border-slate-200 shadow-md">
          <img
            src="/assets/factory-machinery.jpg"
            alt="Haku Business Group Modern Grain Cleaning Machinery"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
            <span className="inline-block px-3 py-1 rounded bg-[#0D6EFD] text-xs font-bold uppercase tracking-wider mb-1.5">
              Processing Facility
            </span>
            <p className="text-white/95 text-xs sm:text-sm font-medium">
              Adama 03 Industry Zone, Oromia Region, Ethiopia
            </p>
          </div>
        </div>

        {/* The 3 Specifications Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {t.machinery.points.map((point, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 6. Our Target Customers */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-1">
            {t.targetCustomers.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t.targetCustomers.title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            {t.targetCustomers.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.targetCustomers.customers.map((cust, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="clean-card rounded-2xl p-5 flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                {cust}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next CTA */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button
          onClick={() => setActivePage('why-us')}
          className="px-8 py-3.5 rounded-xl bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all flex items-center gap-2"
        >
          <span>{t.nav.whyUs}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => setActivePage('contact')}
          className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0D6EFD] font-bold text-sm border-2 border-[#0D6EFD] transition-all"
        >
          <span>{t.nav.contact}</span>
        </button>
      </div>

    </div>
  );
}
