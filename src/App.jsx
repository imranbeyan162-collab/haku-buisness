import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';
import { TRANSLATIONS } from './data/translations';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [currentLang, setCurrentLang] = useState('en');

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} t={t} currentLang={currentLang} />;
      case 'about':
        return <AboutUsPage setActivePage={setActivePage} t={t} />;
      case 'services':
        return <ServicesPage setActivePage={setActivePage} t={t} />;
      case 'why-us':
        return <WhyUsPage setActivePage={setActivePage} t={t} />;
      case 'contact':
        return <ContactPage setActivePage={setActivePage} t={t} />;
      default:
        return <HomePage setActivePage={setActivePage} t={t} currentLang={currentLang} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 flex flex-col font-sans selection:bg-brand-600 selection:text-white">
      {/* High-Tech Glowing Navbar with Multi-Language Switcher */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        currentLang={currentLang} 
        setCurrentLang={setCurrentLang}
        t={t}
      />

      {/* Main Page Content with Ultra-Smooth Physics Animation */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activePage}-${currentLang}`}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Luxury Footer */}
      <Footer setActivePage={setActivePage} t={t} />
    </div>
  );
}
