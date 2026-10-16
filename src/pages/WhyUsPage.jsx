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
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0D6EFD] text-xs font-bold uppercase tracking-wider mb-4"
        >
          <Award className="w-3.5 h-3.5 text-[#0D6EFD]" />
          <span>{t.nav.whyUs}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight"
        >
          {t.nav.whyUs} — <span className="text-[#0D6EFD]">{t.name}</span>
        </motion.h1>
        
        <p className="text-slate-500 text-xs sm:text-sm mt-3">
          {t.slogan}
        </p>
      </div>

      {/* 7. Our Competitive Advantages */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] block mb-1">
            {t.competitiveAdvantages.sectionBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {t.competitiveAdvantages.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {t.competitiveAdvantages.advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="clean-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black text-[#0D6EFD] mb-2 block">
                  0{idx + 1}
                </span>
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                  {adv}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-[#0D6EFD] font-bold">
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
        transition={{ duration: 0.5 }}
        className="clean-card rounded-3xl p-7 sm:p-10 space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center font-bold shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD]">
              {t.commitmentToQuality.sectionBadge}
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              {t.commitmentToQuality.title}
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed border-l-2 border-[#0D6EFD] pl-4 sm:pl-6">
          {t.commitmentToQuality.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </motion.section>

      {/* 9. Our Contribution to Agricultural Development */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="clean-card rounded-3xl p-7 sm:p-10 space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0D6EFD] border border-blue-200 flex items-center justify-center font-bold shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD]">
              {t.agriculturalContribution.sectionBadge}
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              {t.agriculturalContribution.title}
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed border-l-2 border-[#0D6EFD] pl-4 sm:pl-6">
          {t.agriculturalContribution.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </motion.section>

      {/* Action CTA */}
      <div className="text-center pt-4">
        <button
          onClick={() => setActivePage('contact')}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0D6EFD] hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all"
        >
          <span>{t.nav.contact}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
