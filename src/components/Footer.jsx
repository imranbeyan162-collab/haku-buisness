import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page) => {
    setActivePage(page);
    scrollToTop();
  };

  return (
    <footer className="bg-[#071739] text-white pt-16 pb-12 px-4 sm:px-8 border-t border-blue-950 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 overflow-hidden shadow-sm">
                <img
                  src="/assets/haku-logo.png"
                  alt="Haku Business Group Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  {COMPANY_CONTENT.name}
                </span>
                <span className="block text-xs text-brand-300">
                  {COMPANY_CONTENT.businessActivity}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic border-l-2 border-brand-500 pl-3">
              "{COMPANY_CONTENT.slogan}"
            </p>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-4">
              Website Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-brand-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-brand-300 transition-colors">
                  About Us (Overview, Vision, Mission)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-300 transition-colors">
                  Our Services (Core Services, Machinery, Target Customers)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('why-us')} className="hover:text-brand-300 transition-colors">
                  Why Us (Advantages, Quality, Agricultural Contribution)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-brand-300 transition-colors">
                  Contact Information
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services Listed */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-4">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {COMPANY_CONTENT.coreServices.services.map((s, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400"></span>
                  <span>{s.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300 mb-4">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{COMPANY_CONTENT.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`tel:${COMPANY_CONTENT.phones[0].raw}`} className="hover:text-white">
                  {COMPANY_CONTENT.phones[0].display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`tel:${COMPANY_CONTENT.phones[1].raw}`} className="hover:text-white">
                  {COMPANY_CONTENT.phones[1].display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href={`mailto:${COMPANY_CONTENT.email}`} className="hover:text-white truncate">
                  {COMPANY_CONTENT.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {COMPANY_CONTENT.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Adama 03 Industry Zone, Oromia, Ethiopia</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-blue-900/40 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
