import React from 'react';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Phone, Mail, MapPin, Gauge, Cpu, Layers, Disc3, FileCheck } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function HomePage({ setActivePage }) {
  return (
    <div className="page-enter space-y-16 py-8 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* Industrial Hero Banner */}
      <section className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0B132B] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-800">
        
        {/* Subtle technical grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl">
          {/* Facility Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-900/60 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Factory className="w-3.5 h-3.5 text-brand-400" />
            <span>Commercial Processing Plant • Adama 03 Industry Zone, Ethiopia</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-4 text-white">
            HAKU BUSINESS GROUP
          </h1>

          <div className="text-lg sm:text-2xl font-bold text-brand-400 mb-6 tracking-wide">
            {COMPANY_CONTENT.subtitle}
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8 border-l-4 border-brand-500 pl-4 py-1 italic">
            "{COMPANY_CONTENT.slogan}"
          </p>

          {/* Action CTAs for B2B Clients */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActivePage('services')}
              className="px-7 py-3.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-sm sm:text-base shadow-md transition-all flex items-center gap-2"
            >
              <span>Explore Core Services & Capacity</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActivePage('why-us')}
              className="px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm sm:text-base transition-colors"
            >
              Competitive Advantages
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="px-6 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm sm:text-base shadow transition-colors"
            >
              Contact Operations Desk
            </button>
          </div>

          {/* Industrial Specifications Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white">8–10 MT / Hr</div>
              <div className="text-xs text-brand-300 font-semibold uppercase tracking-wider mt-1">Estimated Line Capacity</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white">Adama 03</div>
              <div className="text-xs text-brand-300 font-semibold uppercase tracking-wider mt-1">Oromia Industrial Zone</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white">Multi-Stage</div>
              <div className="text-xs text-brand-300 font-semibold uppercase tracking-wider mt-1">Clean, Color Sort & Polish</div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Machinery & Processing Plant Showcase */}
      <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
              <Gauge className="w-4 h-4" />
              <span>Plant Equipment & Industrial Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Modern Commercial Grain Cleaning Machinery
            </h2>
          </div>
          <button
            onClick={() => setActivePage('services')}
            className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-800 flex items-center gap-1.5"
          >
            <span>Full Machinery & Technical Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Real Factory Machinery Photo */}
        <div className="relative rounded-xl overflow-hidden shadow border border-slate-200 aspect-[16/9] w-full max-h-[520px]">
          <img
            src="/assets/factory-machinery.jpg"
            alt="Haku Business Group Modern Grain Cleaning Machinery in Adama 03 Industry Zone"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-sm sm:text-base font-bold">
                Haku Business Group Processing Facility — Adama 03 Industry Zone
              </div>
              <div className="text-xs text-slate-300">
                Continuous high-volume processing line for mechanical cleaning, optical color sorting, and commercial grain polishing.
              </div>
            </div>
            <div className="px-3 py-1 rounded bg-brand-600 text-white font-bold text-xs uppercase tracking-wider shrink-0">
              8–10 MT/Hour
            </div>
          </div>
        </div>

        {/* Technical Stations Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-brand-600 uppercase mb-1">Station 1</div>
            <div className="text-sm font-bold text-slate-900 mb-1">Surge Silo & Elevation</div>
            <div className="text-xs text-slate-600">Multi-tier galvanized hopper and vertical bucket elevator for continuous dust-controlled feed.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-brand-600 uppercase mb-1">Station 2</div>
            <div className="text-sm font-bold text-slate-900 mb-1">Mechanical Cleaning</div>
            <div className="text-xs text-slate-600">Multi-screen vibratory grading and negative-pressure cyclone air aspiration for dust and chaff.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-brand-600 uppercase mb-1">Station 3</div>
            <div className="text-sm font-bold text-slate-900 mb-1">Optical Color Sorting</div>
            <div className="text-xs text-slate-600">High-resolution CCD optical sensors with pneumatic micro-nozzles for defect ejection.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-bold text-brand-600 uppercase mb-1">Station 4</div>
            <div className="text-sm font-bold text-slate-900 mb-1">Commercial Polishing</div>
            <div className="text-xs text-slate-600">Friction polishing drums to eliminate surface micro-dust and enhance export presentation.</div>
          </div>
        </div>
      </section>

      {/* 3 Core Enterprise Gateways (Clean Corporate Cards) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: About Us */}
        <div 
          onClick={() => setActivePage('about')}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-brand-600 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              About Us
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Learn about our company background in Adama, our vision for quality leadership, and our mission supporting the agricultural value chain.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>1. Company Overview</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>2. Our Vision</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>3. Our Mission</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
            <span>Read Company Profile</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 2: Our Services */}
        <div 
          onClick={() => setActivePage('services')}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-brand-600 flex items-center justify-center font-bold mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Our Services
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Comprehensive processing capabilities, 8–10 MT/hour machinery specifications, and the wide spectrum of customers we serve.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>4. Our Core Services</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>5. Machinery & Production Capacity</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>6. Our Target Customers</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
            <span>Inspect Processing Services</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Card 3: Why Us */}
        <div 
          onClick={() => setActivePage('why-us')}
          className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-brand-500 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-brand-600 flex items-center justify-center font-bold mb-4">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Why Us
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Discover why agricultural exporters, unions, and traders choose Haku Business Group for quality, efficiency, and reliability.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>7. Our Competitive Advantages</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>8. Our Commitment to Quality</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                <span>9. Agricultural Contribution</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
            <span>Review Advantages</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

      </section>

      {/* Industrial Commercial Inquiry Banner */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400 block mb-1">
            Commercial Commodity Processing
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            Contract Processing & Inquiries
          </h3>
          <p className="text-sm text-slate-300 max-w-xl">
            {COMPANY_CONTENT.closingNote}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
            className="px-6 py-3 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs sm:text-sm font-bold transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call {COMPANY_CONTENT.phones[0].display}</span>
          </a>

          <button
            onClick={() => setActivePage('contact')}
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold border border-slate-700 transition-colors"
          >
            Contact Information
          </button>
        </div>
      </section>

    </div>
  );
}
