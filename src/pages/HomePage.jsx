import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Phone, Mail, MapPin, Gauge, Layers, Eye, Target, Award, Sparkles } from 'lucide-react';

export default function HomePage({ setActivePage, t, currentLang }) {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-14 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* HERO SECTION */}
      <section className="text-center pt-4 sm:pt-8 pb-4">
        
        {/* Top Facility Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-[#0D6EFD] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#0D6EFD]"></span>
          <span>{t.hero.capacityBadge}</span>
          <span className="text-blue-300">•</span>
          <span>{t.location}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15] max-w-5xl mx-auto mb-6"
        >
          {t.hero.headline}
          <span className="block text-[#0D6EFD] mt-2">
            HAKU BUSINESS GROUP
          </span>
        </motion.h1>

        {/* Subtext from Company Overview */}
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6"
        >
          {t.overview.paragraphs[0]}
        </motion.p>

        {/* Slogan Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block px-5 py-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-sm sm:text-base font-medium italic mb-8"
        >
          "{t.slogan}"
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            onClick={() => setActivePage('services')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <span>{t.hero.exploreServices}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setActivePage('contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0D6EFD] font-bold text-sm sm:text-base border-2 border-[#0D6EFD] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>{t.hero.contactInfo}</span>
          </button>
        </motion.div>

        {/* CENTERPIECE PLANT & MACHINERY SHOWCASE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative max-w-5xl mx-auto mt-12 sm:mt-16"
        >
          <div className="rounded-2xl sm:rounded-3xl p-3 bg-white border border-slate-200 shadow-xl overflow-hidden">
            <div className="relative rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-100">
              <img
                src="/assets/factory-machinery.jpg"
                alt="Haku Business Group Processing Facility - Adama 03 Industry Zone"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-8 text-left text-white">
                <span className="inline-block px-3 py-1 rounded-md bg-[#0D6EFD] text-white text-xs font-bold uppercase tracking-wider mb-2">
                  {t.machinery.sectionBadge}: {t.machinery.title}
                </span>
                <p className="text-white/90 text-sm sm:text-base max-w-2xl font-medium">
                  {t.machinery.intro}
                </p>
              </div>
            </div>

            {/* Machinery Production Capacity Bullets */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {t.machinery.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#0D6EFD] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </section>

      {/* CORE SERVICES OVERVIEW (SECTION 4) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-2">
            {t.coreServices.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.coreServices.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.coreServices.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="clean-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center font-bold text-sm">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-bold text-[#0D6EFD] uppercase tracking-wider">
                    Service
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.name}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-[#0D6EFD] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Haku Business Group</span>
                <span className="text-[#0D6EFD] font-bold">Standard Processing</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => setActivePage('services')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            <span>{t.hero.exploreServices}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* VISION & MISSION PREVIEW (SECTIONS 2 & 3) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="clean-card rounded-2xl p-6 sm:p-8"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center mb-4">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-1">
            {t.vision.sectionBadge}
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            {t.vision.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base italic border-l-2 border-[#0D6EFD] pl-3">
            "{t.vision.text}"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="clean-card rounded-2xl p-6 sm:p-8"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center mb-4">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-1">
            {t.mission.sectionBadge}
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            {t.mission.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base italic border-l-2 border-[#0D6EFD] pl-3">
            "{t.mission.text}"
          </p>
        </motion.div>
      </section>

      {/* COMPETITIVE ADVANTAGES HIGHLIGHT (SECTION 7) */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-2">
            {t.competitiveAdvantages.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.competitiveAdvantages.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.competitiveAdvantages.advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="clean-card rounded-xl p-5 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0D6EFD] font-bold flex items-center justify-center shrink-0 text-xs">
                {idx + 1}
              </div>
              <p className="text-sm font-semibold text-slate-800 leading-snug">
                {adv}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT & DIRECT ACTION (SECTION 10) */}
      <section className="clean-card rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto bg-gradient-to-b from-white to-blue-50/40 border border-blue-100">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-2">
          {t.contact.sectionBadge}
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
          {t.contact.title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-8">
          {t.closingNote}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-8">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-bold text-slate-400 block mb-1">Facility Location</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-800">{t.location}</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-bold text-slate-400 block mb-1">Telephone</span>
            <a href={`tel:${t.phones[0].raw}`} className="text-xs sm:text-sm font-bold text-[#0D6EFD] block hover:underline">
              {t.phones[0].display}
            </a>
            <a href={`tel:${t.phones[1].raw}`} className="text-xs sm:text-sm font-bold text-[#0D6EFD] block hover:underline">
              {t.phones[1].display}
            </a>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-bold text-slate-400 block mb-1">Email</span>
            <a href={`mailto:${t.email}`} className="text-xs sm:text-sm font-bold text-[#0D6EFD] block hover:underline truncate">
              {t.email}
            </a>
          </div>
        </div>

        <button
          onClick={() => setActivePage('contact')}
          className="px-8 py-3.5 rounded-xl bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-sm transition-all"
        >
          {t.contact.sendInquiry}
        </button>
      </section>

    </div>
  );
}
