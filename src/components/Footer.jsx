import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer({ setActivePage, t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page) => {
    setActivePage(page);
    scrollToTop();
  };

  return (
    <footer className="bg-slate-900 text-white pt-14 pb-10 px-4 sm:px-8 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 overflow-hidden shadow-sm shrink-0">
                <img
                  src="/assets/haku-logo.png"
                  alt="Haku Business Group Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-lg text-white tracking-tight block">
                  {t.name}
                </span>
                <span className="text-[11px] text-blue-400 block font-semibold uppercase tracking-wider">
                  {t.businessActivity}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed italic border-l-2 border-[#0D6EFD] pl-3">
              "{t.slogan}"
            </p>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              {t.footer.pagesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('why-us')} className="hover:text-white transition-colors">
                  {t.nav.whyUs}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services Listed */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              {t.footer.coreServicesTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {t.coreServices.services.map((s, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D6EFD] shrink-0"></span>
                  <span className="truncate">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0D6EFD] shrink-0 mt-0.5" />
                <span>{t.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0D6EFD] shrink-0" />
                <a href={`tel:${t.phones[0].raw}`} className="hover:text-white font-semibold">
                  {t.phones[0].display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0D6EFD] shrink-0" />
                <a href={`tel:${t.phones[1].raw}`} className="hover:text-white font-semibold">
                  {t.phones[1].display}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0D6EFD] shrink-0" />
                <a href={`mailto:${t.email}`} className="hover:text-white truncate">
                  {t.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {t.name}. {t.footer.rightsReserved}
          </div>

          <div className="flex items-center gap-4">
            <span>Adama 03 Industry Zone, Ethiopia</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-[#0D6EFD] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-colors"
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
