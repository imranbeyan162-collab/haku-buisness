import React from 'react';
import { Eye, Target, Building2, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUsPage({ setActivePage, t }) {
  return (
    <div className="py-8 sm:py-14 px-4 sm:px-8 max-w-5xl mx-auto space-y-10 sm:space-y-14">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0D6EFD] text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Building2 className="w-3.5 h-3.5 text-[#0D6EFD]" />
          <span>{t.nav.about}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight"
        >
          {t.nav.about} — <span className="text-[#0D6EFD]">{t.name}</span>
        </motion.h1>
        
        <p className="text-slate-500 text-xs sm:text-sm mt-3">
          {t.subtitle} • {t.location}
        </p>
      </div>

      {/* 1. Company Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="clean-card rounded-2xl sm:rounded-3xl p-7 sm:p-10 border border-slate-200"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center font-bold shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD]">
              {t.overview.sectionBadge}
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-slate-900">
              {t.overview.title}
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed border-l-2 border-[#0D6EFD] pl-4 sm:pl-6">
          {t.overview.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </motion.section>

      {/* 2. Our Vision & 3. Our Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Our Vision Card */}
        <motion.section 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="clean-card rounded-2xl sm:rounded-3xl p-7 sm:p-10 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center font-bold mb-5">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-1">
              {t.vision.sectionBadge}
            </span>
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              {t.vision.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic border-l-2 border-[#0D6EFD] pl-3">
              "{t.vision.text}"
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0D6EFD]">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Excellence, Quality & Customer Satisfaction</span>
          </div>
        </motion.section>

        {/* Our Mission Card */}
        <motion.section 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="clean-card rounded-2xl sm:rounded-3xl p-7 sm:p-10 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center font-bold mb-5">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-1">
              {t.mission.sectionBadge}
            </span>
            <h2 className="text-2xl font-black text-slate-900 mb-4">
              {t.mission.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic border-l-2 border-[#0D6EFD] pl-3">
              "{t.mission.text}"
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0D6EFD]">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Agricultural Value Chain Development</span>
          </div>
        </motion.section>

      </div>

      {/* Footer Navigation CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActivePage('services')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all"
        >
          <span>{t.nav.services}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
