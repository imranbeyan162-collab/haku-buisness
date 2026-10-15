import React from 'react';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Phone, Mail, MapPin, Gauge, Layers, FileCheck, Award, Zap } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function HomePage({ setActivePage }) {
  return (
    <div className="page-enter space-y-10 sm:space-y-16 py-6 sm:py-10 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* Modern Industrial Hero Section (Bright, high-contrast, clean mobile typography) */}
      <section className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-sm border border-slate-200">
        <div className="max-w-4xl space-y-6">
          
          {/* Location & Facility Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-brand-700 text-xs font-bold uppercase tracking-wide">
            <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span>Adama 03 Industry Zone, Oromia, Ethiopia</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Professional Grain Cleaning, Color Sorting & Processing Services
          </h1>

          {/* Subtitle & Value Proposition */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
            {COMPANY_CONTENT.overview.paragraphs[0]}
          </p>

          {/* Official Slogan Quote */}
          <div className="border-l-4 border-brand-600 pl-4 py-1 bg-slate-50 rounded-r-xl p-3">
            <p className="text-sm sm:text-base font-semibold text-slate-800 italic">
              "{COMPANY_CONTENT.slogan}"
            </p>
          </div>

          {/* Operational Metrics Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xl sm:text-2xl font-black text-brand-600">8–10 MT/h</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">Processing Capacity</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xl sm:text-2xl font-black text-slate-900">4-in-1 Line</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">Clean, Sift, Sort & Polish</div>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xl sm:text-2xl font-black text-slate-900">Adama 03</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">Industrial Zone Facility</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
            <button
              onClick={() => setActivePage('services')}
              className="py-3.5 px-6 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActivePage('why-us')}
              className="py-3 px-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-colors text-center"
            >
              Why Choose Haku
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="py-3 px-6 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 transition-colors text-center"
            >
              Contact Information
            </button>
          </div>

        </div>
      </section>

      {/* Real Machinery & Factory Section */}
      <section className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
              <Factory className="w-4 h-4" />
              <span>Facility Infrastructure</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Modern Grain Cleaning Machinery
            </h2>
          </div>
          <button
            onClick={() => setActivePage('services')}
            className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-800 flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View Full Services & Machinery Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Real Factory Machinery Photo */}
        <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/10] sm:aspect-[16/9] w-full">
          <img
            src="/assets/factory-machinery.jpg"
            alt="Haku Business Group Modern Grain Cleaning Machinery in Adama 03 Industry Zone"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent text-white">
            <div className="text-xs sm:text-sm font-bold text-white">
              Haku Business Group Processing Facility — Adama 03 Industry Zone
            </div>
            <div className="text-[11px] sm:text-xs text-slate-300">
              Commercial-grade cleaning, optical color sorting, and automated packing equipment.
            </div>
          </div>
        </div>

        {/* Machinery Specs Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {COMPANY_CONTENT.machinery.points.map((pt, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="text-xs font-bold text-brand-600 mb-1 uppercase">
                Specification 0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {pt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Core Enterprise Gateways (Clean, high contrast cards) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: About Us */}
        <div 
          onClick={() => setActivePage('about')}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              About Us
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Company Overview, Vision, and Mission supporting Ethiopian agricultural development.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>1. Company Overview</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>2. Our Vision</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>3. Our Mission</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
            <span>Read About Us</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 2: Our Services */}
        <div 
          onClick={() => setActivePage('services')}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center font-bold mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Our Services
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Core grain cleaning, optical sorting, polishing, and bulk contract capabilities.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>4. Our Core Services</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>5. Machinery & Capacity (8–10 MT/h)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>6. Our Target Customers</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 3: Why Us */}
        <div 
          onClick={() => setActivePage('why-us')}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center font-bold mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
              Why Us
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              Competitive advantages, commitment to quality, and value chain development.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>7. Our Competitive Advantages</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>8. Our Commitment to Quality</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                <span>9. Agricultural Contribution</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
            <span>Review Why Us</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

      </section>

      {/* Direct Contact Banner */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400 block mb-1">
            Commercial Processing Inquiries
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            Haku Business Group — Adama Facility
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            {COMPANY_CONTENT.closingNote}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <a
            href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
            className="px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call {COMPANY_CONTENT.phones[0].display}</span>
          </a>

          <button
            onClick={() => setActivePage('contact')}
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold border border-slate-700 transition-colors text-center"
          >
            View Contact Information
          </button>
        </div>
      </section>

    </div>
  );
}
