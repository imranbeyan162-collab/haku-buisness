import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Building2, Factory } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 transition-all duration-300 shadow-sm">
      {/* Industrial Operations Top Ribbon */}
      <div className="bg-[#0B132B] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 font-semibold text-brand-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              COMMERCIAL PROCESSING FACILITY (8–10 MT/HR)
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              {COMPANY_CONTENT.location}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-300">
            <span className="hidden sm:inline text-slate-400">Operations Desk:</span>
            <a 
              href={`tel:${COMPANY_CONTENT.phones[0].raw}`} 
              className="font-bold text-white hover:text-brand-300 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-brand-400" />
              <span>{COMPANY_CONTENT.phones[0].display}</span>
            </a>
            <span className="text-slate-600">/</span>
            <a 
              href={`tel:${COMPANY_CONTENT.phones[1].raw}`} 
              className="text-slate-300 hover:text-white transition-colors hidden sm:inline"
            >
              <span>{COMPANY_CONTENT.phones[1].display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-6">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 text-left group"
        >
          <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center overflow-hidden shadow-sm group-hover:border-brand-600 transition-colors">
            <img 
              src="/assets/haku-logo.png" 
              alt="Haku Business Group Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
              HAKU <span className="text-brand-600">BUSINESS GROUP</span>
            </div>
            <div className="text-[11px] font-semibold text-slate-500 tracking-wide uppercase">
              {COMPANY_CONTENT.subtitle}
            </div>
          </div>
        </button>

        {/* Industrial Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-brand-600 bg-brand-50 border border-brand-200'
                    : 'text-slate-700 hover:text-brand-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action CTA (B2B Commercial Inquiries) */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:border-brand-600 hover:text-brand-600 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-brand-600" />
            <span>Call Plant</span>
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
          >
            <span>Commercial Inquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
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
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-bold transition-colors flex items-center justify-between ${
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
            <div className="font-bold text-slate-400 uppercase tracking-wider">Direct Plant Inquiries</div>
            <a
              href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
              className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 text-slate-800 font-bold"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              {COMPANY_CONTENT.phones[0].display}
            </a>
            <a
              href={`tel:${COMPANY_CONTENT.phones[1].raw}`}
              className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 text-slate-800 font-bold"
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
