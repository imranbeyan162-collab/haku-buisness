import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Operations Ribbon (Responsive & No dangling punctuation) */}
      <div className="bg-[#0B132B] text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
            <span className="font-semibold text-brand-300 truncate">
              8–10 MT/Hour Processing Plant
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              {COMPANY_CONTENT.location}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a 
              href={`tel:${COMPANY_CONTENT.phones[0].raw}`} 
              className="font-bold text-white hover:text-brand-300 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-brand-400" />
              <span>{COMPANY_CONTENT.phones[0].display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name (Big, un-squashed and clearly visible on mobile) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none"
        >
          {/* Logo container with fixed aspect ratio so it is NEVER squished */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border-2 border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-sm">
            <img 
              src="/assets/haku-logo.png" 
              alt="Haku Business Group Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="text-base sm:text-xl font-black tracking-tight text-slate-900 leading-tight">
              HAKU <span className="text-brand-600">BUSINESS GROUP</span>
            </div>
            <div className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-wide uppercase">
              Grain Cleaning & Processing
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
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

        {/* Right CTA / Mobile Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop "Commercial Inquiries" Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden md:inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all"
          >
            <span>Commercial Inquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Quick Call Icon Button for Mobile */}
          <a
            href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
            className="md:hidden p-2.5 rounded-lg bg-brand-50 text-brand-600 hover:bg-brand-100 transition-colors"
            title="Call Facility Operations"
            aria-label="Call Plant"
          >
            <Phone className="w-5 h-5" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors border border-slate-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Smooth, high contrast & easy to tap) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-4 shadow-2xl animate-slide-up space-y-2">
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
              <ArrowRight className="w-4 h-4 opacity-80" />
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <span>Commercial Inquiries</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_CONTENT.phones[0].raw}`}
              className="flex items-center justify-center gap-2 p-3 rounded-lg bg-slate-100 text-slate-800 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-brand-600" />
              <span>Call: {COMPANY_CONTENT.phones[0].display}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
