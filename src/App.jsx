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
    <div className="min-h-screen bg-[#FAFAFB] text-slate-900 flex flex-col font-sans selection:bg-[#0D6EFD] selection:text-white">
      {/* Clean Modern Navbar with Multi-Language Switcher */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        currentLang={currentLang} 
        setCurrentLang={setCurrentLang}
        t={t}
      />

      {/* Main Page Content with Ultra-Smooth Transitions */}
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activePage}-${currentLang}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Clean Corporate Footer */}
      <Footer setActivePage={setActivePage} t={t} />
    </div>
  );
}
