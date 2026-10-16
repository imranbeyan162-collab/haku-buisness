import React from 'react';
import { Eye, Target, Building2, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUsPage({ setActivePage, t }) {
  return (
    <div className="py-8 sm:py-14 px-4 sm:px-8 max-w-5xl mx-auto space-y-10 sm:space-y-14">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Building2 className="w-3.5 h-3.5 text-brand-400" />
          <span>{t.nav.about}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-black text-white tracking-tight"
        >
          {t.nav.about} — <span className="text-gradient-cyan">{t.name}</span>
        </motion.h1>
        
        <p className="text-slate-400 text-xs sm:text-sm mt-3">
          {t.subtitle} • {t.location}
        </p>
      </div>

      {/* 1. Company Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-7 sm:p-12 border border-white/10"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/15 text-brand-400 border border-brand-500/30 flex items-center justify-center font-bold shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {t.overview.sectionBadge}
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-white">
              {t.overview.title}
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-brand-500 pl-4 sm:pl-6">
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
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel rounded-3xl p-7 sm:p-10 border border-brand-500/20 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-500/15 text-cyan-400 border border-brand-500/20 flex items-center justify-center font-bold mb-5">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
              {t.vision.sectionBadge}
            </span>
            <h2 className="text-2xl font-black text-white mb-4">
              {t.vision.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic border-l-2 border-cyan-400 pl-3">
              "{t.vision.text}"
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-cyan-400">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Excellence, Quality & Customer Satisfaction</span>
          </div>
        </motion.section>

        {/* Our Mission Card */}
        <motion.section 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-3xl p-7 sm:p-10 border border-brand-500/20 flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-500/15 text-emerald-400 border border-brand-500/20 flex items-center justify-center font-bold mb-5">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              {t.mission.sectionBadge}
            </span>
            <h2 className="text-2xl font-black text-white mb-4">
              {t.mission.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed border-l-2 border-emerald-400 pl-3">
              "{t.mission.text}"
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-emerald-400">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Modern Machinery • Skilled Personnel • Market Access</span>
          </div>
        </motion.section>

      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
        <button
          onClick={() => setActivePage('home')}
          className="text-xs font-bold text-slate-400 hover:text-white"
        >
          {t.contact.returnHome}
        </button>

        <button
          onClick={() => setActivePage('services')}
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-blue-500 hover:from-brand-500 hover:to-blue-400 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-glow-blue transition-all"
        >
          <span>{t.nav.services}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
