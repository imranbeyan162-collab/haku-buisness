import React from 'react';
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Phone, Mail, MapPin, Gauge } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function HomePage({ setActivePage }) {
  return (
    <div className="page-enter space-y-16 py-8 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* Hero Section */}
      <section className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0a255c] via-[#0d47a1] to-[#081e4b] text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-blue-900/40">
        
        {/* Ambient Haku Blue Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          {/* Top pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-200 text-xs sm:text-sm font-semibold mb-6">
            <MapPin className="w-3.5 h-3.5 text-brand-300" />
            <span>{COMPANY_CONTENT.location}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-4">
            HAKU BUSINESS GROUP
          </h1>

          <div className="text-lg sm:text-2xl font-bold text-brand-200 mb-6 tracking-wide">
            {COMPANY_CONTENT.subtitle}
          </div>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8 italic border-l-4 border-brand-400 pl-4 py-1">
            "{COMPANY_CONTENT.slogan}"
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActivePage('services')}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-brand-50 text-brand-900 font-extrabold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-brand-600 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActivePage('why-us')}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm sm:text-base transition-colors"
            >
              Why Choose Haku
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="px-6 py-3.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm sm:text-base shadow-md transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">8–10 MT / Hr</div>
              <div className="text-xs text-brand-200 font-medium">Estimated Processing Capacity</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">Adama 03</div>
              <div className="text-xs text-brand-200 font-medium">Oromia Region Industry Zone</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white">Commercial</div>
              <div className="text-xs text-brand-200 font-medium">Local & International Trade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Machinery Image Feature */}
      <section className="bg-white rounded-[32px] p-6 sm:p-10 shadow-soft border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 block mb-1">
              Production Line
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Modern Grain Cleaning Machinery
            </h2>
          </div>
          <button
            onClick={() => setActivePage('services')}
            className="text-xs sm:text-sm font-bold text-brand-600 hover:text-brand-800 flex items-center gap-1.5"
          >
            <span>View Full Machinery & Capacity Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/9] w-full max-h-[500px]">
          <img
            src="/assets/factory-machinery.jpg"
            alt="Haku Business Group Modern Grain Cleaning Machinery in Adama 03 Industry Zone"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent text-white">
            <div className="text-sm sm:text-base font-bold">
              Haku Business Group Processing Facility — Adama 03 Industry Zone
            </div>
            <div className="text-xs text-slate-300">
              Equipped with modern grain cleaning machinery for mechanical cleaning, optical color sorting, and polishing.
            </div>
          </div>
        </div>
      </section>

      {/* 3 Main Pages Gateway Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Gateway Card 1: About Us */}
        <div 
          onClick={() => setActivePage('about')}
          className="haku-card rounded-3xl p-8 cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
              About Us
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Learn about our company overview, vision, and mission in supporting Ethiopian agricultural development.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Company Overview
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Our Vision
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Our Mission
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
            <span>Read About Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Gateway Card 2: Our Services */}
        <div 
          onClick={() => setActivePage('services')}
          className="haku-card rounded-3xl p-8 cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
              Our Services
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Explore our core processing services, modern machinery capacity (8–10 MT/hour), and target customer sectors.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Our Core Services
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Machinery & Production Capacity
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Our Target Customers
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Gateway Card 3: Why Us */}
        <div 
          onClick={() => setActivePage('why-us')}
          className="haku-card rounded-3xl p-8 cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center font-bold mb-4 group-hover:scale-105 transition-transform">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
              Why Us
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Discover our competitive advantages, commitment to quality, and contribution to Ethiopia's agricultural sector.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Our Competitive Advantages
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Our Commitment to Quality
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Agricultural Contribution
              </li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-600">
            <span>Learn Why Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </section>

      {/* Direct Contact Banner */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-400 block mb-1">
            Ready to Process Your Grain?
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            Contact Haku Business Group
          </h3>
          <p className="text-sm text-slate-300 max-w-xl">
            {COMPANY_CONTENT.closingNote}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
            className="px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-xs sm:text-sm font-bold transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call {COMPANY_CONTENT.phones[0].display}</span>
          </a>

          <button
            onClick={() => setActivePage('contact')}
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            View Contact Information
          </button>
        </div>
      </section>

    </div>
  );
}
