import React from 'react';
import { Factory, Sparkles, CheckCircle2, Users, ArrowRight, ShieldCheck, Gauge, Sliders } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function ServicesPage({ setActivePage }) {
  return (
    <div className="page-enter py-10 px-4 sm:px-8 max-w-6xl mx-auto space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Factory className="w-3.5 h-3.5 text-brand-600" />
          <span>Our Services</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Services, Machinery & Customers
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3">
          {COMPANY_CONTENT.subtitle} • {COMPANY_CONTENT.location}
        </p>
      </div>

      {/* 4. Our Core Services */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
            Section 4
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {COMPANY_CONTENT.coreServices.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPANY_CONTENT.coreServices.services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-soft border border-slate-200 hover:border-brand-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-sm">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                    Service
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.name}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
                <span>Haku Standard Service</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Machinery and Production Capacity */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-soft border border-slate-200 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
            Section 5
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
            {COMPANY_CONTENT.machinery.title}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg">
            {COMPANY_CONTENT.machinery.intro}
          </p>
        </div>

        {/* Real Factory Machinery Photograph */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-[16/9] w-full max-h-[500px]">
          <img
            src="/assets/factory-machinery.jpg"
            alt="Haku Business Group Modern Grain Cleaning Machinery in Adama 03 Industry Zone"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {COMPANY_CONTENT.machinery.points.map((pt, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-3">
                {idx === 0 ? <Gauge className="w-5 h-5" /> : idx === 1 ? <Sliders className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {pt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Our Target Customers */}
      <section className="bg-gradient-to-br from-[#0a255c] to-[#0d47a1] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-900/40">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-300 block mb-1">
            Section 6
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            {COMPANY_CONTENT.targetCustomers.title}
          </h2>
          <p className="text-brand-100 text-base">
            {COMPANY_CONTENT.targetCustomers.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMPANY_CONTENT.targetCustomers.customers.map((cust, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-300 shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-white">
                {cust}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={() => setActivePage('about')}
          className="text-xs font-bold text-slate-600 hover:text-brand-600"
        >
          ← Previous: About Us
        </button>

        <button
          onClick={() => setActivePage('why-us')}
          className="px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-colors"
        >
          <span>Next: Why Us</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
