import React from 'react';
import { Award, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function WhyUsPage({ setActivePage }) {
  return (
    <div className="page-enter py-6 sm:py-10 px-4 sm:px-8 max-w-6xl mx-auto space-y-10 sm:space-y-14">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Award className="w-3.5 h-3.5 text-brand-600" />
          <span>Why Us</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Why Choose Haku Business Group
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          {COMPANY_CONTENT.slogan}
        </p>
      </div>

      {/* 7. Our Competitive Advantages */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {COMPANY_CONTENT.competitiveAdvantages.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPANY_CONTENT.competitiveAdvantages.advantages.map((adv, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-400 hover:bg-brand-50/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black text-brand-600 mb-1.5 block">
                  0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {adv}
                </p>
              </div>
              <div className="mt-4 pt-2.5 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-brand-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span>Verified Advantage</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Our Commitment to Quality */}
      <section className="bg-[#0B132B] text-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-800">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 text-brand-300 flex items-center justify-center font-bold shrink-0">
            <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
              Section 8
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {COMPANY_CONTENT.commitmentToQuality.title}
            </h2>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed border-l-2 border-brand-500 pl-4 sm:pl-6">
          {COMPANY_CONTENT.commitmentToQuality.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* 9. Our Contribution to Agricultural Development */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold shrink-0">
            <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
              Section 9
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {COMPANY_CONTENT.agriculturalContribution.title}
            </h2>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed border-l-2 border-brand-200 pl-4 sm:pl-6">
          {COMPANY_CONTENT.agriculturalContribution.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={() => setActivePage('services')}
          className="text-xs font-bold text-slate-600 hover:text-brand-600"
        >
          ← Previous: Our Services
        </button>

        <button
          onClick={() => setActivePage('contact')}
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
        >
          <span>Next: Contact Information</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
