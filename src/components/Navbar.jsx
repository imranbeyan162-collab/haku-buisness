import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_CONTENT } from '../data/companyContent';

export default function Navbar({ activePage, setActivePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact Information' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 shadow-sm">
      {/* Top Info Strip */}
      <div className="bg-[#0a255c] text-white text-xs py-2 px-4 sm:px-8 border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-200 text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#4c99fc]" />
            <span className="font-medium">{COMPANY_CONTENT.location}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-200">
            <a 
              href={`tel:${COMPANY_CONTENT.phones[0].raw}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#4c99fc]" />
              <span className="font-semibold">{COMPANY_CONTENT.phones[0].display}</span>
            </a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <a 
              href={`tel:${COMPANY_CONTENT.phones[1].raw}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>{COMPANY_CONTENT.phones[1].display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Logo & Company Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-11 h-11 rounded-full bg-white border-2 border-brand-600/30 p-1 flex items-center justify-center overflow-hidden shadow-sm group-hover:border-brand-600 transition-colors">
            <img 
              src="/assets/haku-logo.png" 
              alt="Haku Business Group Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="text-base sm:text-lg font-black tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
              HAKU <span className="text-brand-600 font-extrabold">BUSINESS GROUP</span>
            </div>
            <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              {COMPANY_CONTENT.subtitle}
            </div>
          </div>
        </button>

        {/* Desktop Nav Items with smooth active indicators */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-full border border-slate-200">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 relative ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-white/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Call CTA */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
            className="hidden sm:inline-flex items-center gap-2 bg-brand-50 hover:bg-brand-100 text-brand-700 border border-brand-200 text-xs font-bold px-4 py-2 rounded-full transition-all duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-brand-600" />
            <span>{COMPANY_CONTENT.phones[0].display}</span>
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-brand-600/30 transition-all active:scale-95"
          >
            <span>Inquire Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-5 shadow-2xl animate-slide-up space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                activePage === item.id
                  ? 'bg-brand-600 text-white'
                  : 'text-slate-800 hover:bg-slate-100'
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </button>
          ))}

          <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
            <div className="font-semibold text-slate-400 uppercase tracking-wider">Direct Contacts</div>
            <a
              href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
              className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 text-slate-800 font-bold"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              {COMPANY_CONTENT.phones[0].display}
            </a>
            <a
              href={`tel:${COMPANY_CONTENT.phones[1].raw}`}
              className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 text-slate-800 font-bold"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              {COMPANY_CONTENT.phones[1].display}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
