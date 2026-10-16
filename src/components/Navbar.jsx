import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activePage, setActivePage, currentLang, setCurrentLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'why-us', label: t.nav.whyUs },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages = [
    { code: 'en', label: 'EN', fullName: 'English' },
    { code: 'om', label: 'ORO', fullName: 'Afaan Oromoo' },
    { code: 'am', label: 'አማ', fullName: 'አማርኛ' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top Operations Ribbon */}
      <div className="bg-slate-50 text-slate-600 text-xs py-2 px-4 sm:px-8 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="font-semibold text-slate-800 tracking-wide truncate">
              {t.hero.capacityBadge}
            </span>
            <span className="hidden md:inline text-slate-300">•</span>
            <span className="hidden md:inline text-slate-500">
              {t.location}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* 3-Language Segmented Switcher */}
            <div className="flex items-center bg-white rounded-lg p-0.5 border border-slate-200 shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#0D6EFD] ml-1.5 mr-1" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`px-2 py-0.5 text-[11px] font-bold rounded-md transition-all ${
                    currentLang === lang.code
                      ? 'bg-[#0D6EFD] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title={lang.fullName}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <a 
              href={`tel:${t.phones[0].raw}`} 
              className="font-semibold text-slate-700 hover:text-[#0D6EFD] transition-colors hidden sm:flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#0D6EFD]" />
              <span>{t.phones[0].display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6">
        
        {/* Brand Logo & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 text-left focus:outline-none group"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-xs group-hover:border-[#0D6EFD] transition-all">
            <img 
              src="/assets/haku-logo.png" 
              alt="Haku Business Group Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="text-base sm:text-xl font-black tracking-tight text-slate-900 leading-tight">
              HAKU <span className="text-[#0D6EFD]">BUSINESS GROUP</span>
            </div>
            <div className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-wider uppercase">
              {t.subtitle}
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-xl border border-slate-200">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-[#0D6EFD] rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-2 bg-[#0D6EFD] hover:bg-blue-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <span>{t.nav.commercialInquiries}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Quick Call Icon for Mobile */}
          <a
            href={`tel:${t.phones[0].raw}`}
            className="sm:hidden p-2.5 rounded-xl bg-slate-100 text-[#0D6EFD] border border-slate-200 hover:bg-slate-200 transition-colors"
            title={t.nav.callPlant}
            aria-label="Call Plant"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 px-5 py-4 shadow-xl space-y-3 overflow-hidden"
          >
            {/* Language Switcher in Mobile Drawer */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs border border-slate-200">
              <span className="font-bold text-slate-600 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#0D6EFD]" />
                Language:
              </span>
              <div className="flex gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
                      currentLang === lang.code
                        ? 'bg-[#0D6EFD] text-white'
                        : 'bg-white border border-slate-200 text-slate-700'
                    }`}
                  >
                    {lang.fullName}
                  </button>
                ))}
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                  activePage === item.id
                    ? 'bg-[#0D6EFD] text-white shadow-sm'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-xl bg-[#0D6EFD] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{t.nav.commercialInquiries}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${t.phones[0].raw}`}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#0D6EFD]" />
                <span>Call: {t.phones[0].display}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
