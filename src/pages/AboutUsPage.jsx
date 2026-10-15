import React from 'react';
import { Eye, Target, Building2, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function AboutUsPage({ setActivePage }) {
  return (
    <div className="page-enter py-6 sm:py-10 px-4 sm:px-8 max-w-5xl mx-auto space-y-8 sm:space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
          <Building2 className="w-3.5 h-3.5 text-brand-600" />
          <span>About Us</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          About Haku Business Group
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          {COMPANY_CONTENT.subtitle} • {COMPANY_CONTENT.location}
        </p>
      </div>

      {/* 1. Company Overview */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold shrink-0">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
              Section 1
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {COMPANY_CONTENT.overview.title}
            </h2>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed border-l-2 border-brand-200 pl-4 sm:pl-6">
          {COMPANY_CONTENT.overview.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* 2. Our Vision & 3. Our Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Our Vision Card */}
        <section className="bg-[#0B132B] text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 text-brand-300 flex items-center justify-center font-bold mb-4">
              <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-400 block mb-1">
              Section 2
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
              {COMPANY_CONTENT.vision.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
              "{COMPANY_CONTENT.vision.text}"
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-semibold text-brand-300">
            <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
            <span>Excellence, Quality & Customer Satisfaction</span>
          </div>
        </section>

        {/* Our Mission Card */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-4">
              <Target className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
              Section 3
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
              {COMPANY_CONTENT.mission.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              "{COMPANY_CONTENT.mission.text}"
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-600">
            <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Modern Machinery • Skilled Personnel • Market Access</span>
          </div>
        </section>

      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          onClick={() => setActivePage('home')}
          className="text-xs font-bold text-slate-600 hover:text-brand-600"
        >
          ← Return to Home
        </button>

        <button
          onClick={() => setActivePage('services')}
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
        >
          <span>Next: Explore Our Services</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
