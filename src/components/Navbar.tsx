import React, { useState } from 'react';
import { Snowflake, Phone, Menu, X, Globe, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#030712]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element Brand wordmark per Top Bar Contract */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform ice-glow-sm">
            <Snowflake className="w-5 h-5 text-cyan-400 animate-spin-slow" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-display group-hover:text-cyan-300 transition-colors">
              BREEZY TECH
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1">
            {t.nav.services}
          </a>
          <a href="#why-us" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1">
            {t.nav.whyUs}
          </a>
          <a href="#calculator" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1">
            {currentLang === 'en' ? 'Cost Calculator' : 'கட்டண கணக்கீடு'}
          </a>
          <a href="#gallery" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1">
            {t.nav.gallery}
          </a>
          <a href="#reviews" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1">
            {t.nav.reviews}
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1">
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: 1 primary action & Language switcher */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            title="Switch Language / மொழி மாற்றம்"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{currentLang === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          {/* Primary Action: Direct Call */}
          <a
            href="tel:+919123528287"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 rounded-lg ice-glow transition-all whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4 text-cyan-200" />
            <span>+91 91235 28287</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060d1a] border-b border-slate-800 px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              {t.nav.whyUs}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              {currentLang === 'en' ? 'Instant Cost Estimator' : 'கட்டண கணக்கீடு'}
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              {t.nav.reviews}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-cyan-400 transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <a
              href="tel:+919123528287"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +91 91235 28287</span>
            </a>
            <a
              href="https://wa.me/919123528287?text=Hello%20Breezy%20Tech!%20I%20want%20to%20book%20AC%20service%20in%20Tiruppur."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +91 91235 28287</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
