import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Globe, Sparkles } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-[#060B18]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all">
      {/* Top Operations Ribbon */}
      <div className="bg-[#030712] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="font-semibold text-brand-400 tracking-wide truncate">
              {t.hero.capacityBadge}
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-400">
              {t.location}
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* 3-Language Segmented Switcher */}
            <div className="flex items-center bg-dark-800 rounded-lg p-0.5 border border-white/10">
              <Globe className="w-3.5 h-3.5 text-brand-400 ml-1.5 mr-1" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`px-2 py-0.5 text-[11px] font-bold rounded-md transition-all ${
                    currentLang === lang.code
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title={lang.fullName}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <a 
              href={`tel:${t.phones[0].raw}`} 
              className="font-bold text-white hover:text-brand-300 transition-colors hidden sm:flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-brand-400" />
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
          {/* Logo container with glow */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-blue-400/30 p-1 flex items-center justify-center shrink-0 shadow-lg group-hover:border-brand-400 group-hover:shadow-glow-blue transition-all">
            <img 
              src="/assets/haku-logo.png" 
              alt="Haku Business Group Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="text-base sm:text-xl font-black tracking-tight text-white leading-tight flex items-center gap-1.5">
              <span>HAKU</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                BUSINESS GROUP
              </span>
            </div>
            <div className="text-[10px] sm:text-xs font-semibold text-slate-400 tracking-wider uppercase">
              {t.subtitle}
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links with animated active indicator */}
        <nav className="hidden lg:flex items-center gap-1 bg-dark-850/80 p-1.5 rounded-xl border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-brand-600 rounded-lg shadow-glow-blue"
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
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-blue-500 hover:from-brand-500 hover:to-blue-400 text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-glow-blue hover:shadow-lg transition-all active:scale-95"
          >
            <span>{t.nav.commercialInquiries}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Quick Call Icon for Mobile */}
          <a
            href={`tel:${t.phones[0].raw}`}
            className="sm:hidden p-2.5 rounded-xl bg-dark-800 text-brand-400 border border-white/10 hover:bg-dark-750 transition-colors"
            title={t.nav.callPlant}
            aria-label="Call Plant"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-200 hover:bg-white/10 transition-colors border border-white/10"
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
            className="lg:hidden bg-dark-900 border-t border-white/10 px-5 py-4 shadow-2xl space-y-3 overflow-hidden"
          >
            {/* Language Switcher in Mobile Drawer */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-dark-800 text-xs border border-white/5">
              <span className="font-bold text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-brand-400" />
                Language:
              </span>
              <div className="flex gap-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                      currentLang === lang.code
                        ? 'bg-brand-600 text-white'
                        : 'bg-dark-750 text-slate-300'
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
                    ? 'bg-brand-600 text-white shadow-glow-blue'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            ))}

            <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-blue-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-glow-blue"
              >
                <span>{t.nav.commercialInquiries}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${t.phones[0].raw}`}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-dark-800 border border-white/10 text-white font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-brand-400" />
                <span>Call: {t.phones[0].display}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
