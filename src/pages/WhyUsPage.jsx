import React from 'react';
import { Award, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyUsPage({ setActivePage, t }) {
  return (
    <div className="py-8 sm:py-14 px-4 sm:px-8 max-w-6xl mx-auto space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Award className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t.nav.whyUs}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-black text-white tracking-tight"
        >
          {t.nav.whyUs} — <span className="text-gradient-cyan">{t.name}</span>
        </motion.h1>
        
        <p className="text-slate-400 text-xs sm:text-sm mt-3">
          {t.slogan}
        </p>
      </div>

      {/* 7. Our Competitive Advantages */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
            {t.competitiveAdvantages.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t.competitiveAdvantages.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {t.competitiveAdvantages.advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black text-cyan-400 mb-2 block">
                  0{idx + 1}
                </span>
                <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                  {adv}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Verified Advantage</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. Our Commitment to Quality */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-7 sm:p-10 border border-brand-500/20 space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-500/15 text-brand-400 border border-brand-500/30 flex items-center justify-center font-bold shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {t.commitmentToQuality.sectionBadge}
            </span>
            <h2 className="text-2xl font-black text-white">
              {t.commitmentToQuality.title}
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-brand-500 pl-4 sm:pl-6">
          {t.commitmentToQuality.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </motion.section>

      {/* 9. Our Contribution to Agricultural Development */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-7 sm:p-10 border border-emerald-500/20 space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {t.agriculturalContribution.sectionBadge}
            </span>
            <h2 className="text-2xl font-black text-white">
              {t.agriculturalContribution.title}
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed border-l-2 border-emerald-500 pl-4 sm:pl-6">
          {t.agriculturalContribution.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </motion.section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
        <button
          onClick={() => setActivePage('services')}
          className="text-xs font-bold text-slate-400 hover:text-white"
        >
          ← {t.nav.services}
        </button>

        <button
          onClick={() => setActivePage('contact')}
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-blue-500 hover:from-brand-500 hover:to-blue-400 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-glow-blue transition-all"
        >
          <span>{t.nav.contact}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
