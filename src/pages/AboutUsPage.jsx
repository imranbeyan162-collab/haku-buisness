import React from 'react';
import { Eye, Target, Building2, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function AboutUsPage({ setActivePage }) {
  return (
    <div className="page-enter py-10 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Building2 className="w-3.5 h-3.5 text-brand-600" />
          <span>About Us</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          About Haku Business Group
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3">
          {COMPANY_CONTENT.subtitle} • {COMPANY_CONTENT.location}
        </p>
      </div>

      {/* 1. Company Overview */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
              Section 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {COMPANY_CONTENT.overview.title}
            </h2>
          </div>
        </div>

        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed border-l-2 border-brand-200 pl-4 sm:pl-6">
          {COMPANY_CONTENT.overview.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </section>

      {/* 2. Our Vision & 3. Our Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Our Vision Card */}
        <section className="bg-gradient-to-br from-[#0a255c] to-[#0d47a1] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-900/40 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-200 flex items-center justify-center font-bold mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-300 block mb-1">
              Section 2
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              {COMPANY_CONTENT.vision.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
              "{COMPANY_CONTENT.vision.text}"
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-brand-200">
            <CheckCircle2 className="w-4 h-4 text-brand-400" />
            <span>Excellence, Quality & Customer Satisfaction</span>
          </div>
        </section>

        {/* Our Mission Card */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
              Section 3
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
              {COMPANY_CONTENT.mission.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              "{COMPANY_CONTENT.mission.text}"
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-600">
            <CheckCircle2 className="w-4 h-4 text-brand-600" />
            <span>Modern Machinery • Skilled Personnel • Market Access</span>
          </div>
        </section>

      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={() => setActivePage('home')}
          className="text-xs font-bold text-slate-600 hover:text-brand-600"
        >
          ← Return to Home
        </button>

        <button
          onClick={() => setActivePage('services')}
          className="px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-colors"
        >
          <span>Next: Explore Our Services</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
