import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { BookingCalculator } from './components/BookingCalculator';
import { WorkGallery } from './components/WorkGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'en' ? 'ta' : 'en'));
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'ta') {
      document.body.classList.add('tamil-text');
    } else {
      document.body.classList.remove('tamil-text');
    }
  }, [currentLang]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navigation */}
      <Navbar currentLang={currentLang} onToggleLang={toggleLanguage} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with 3D Interactive AC Simulator */}
        <Hero currentLang={currentLang} />

        {/* 2. Our Services (8 Professional Services) */}
        <ServicesSection currentLang={currentLang} />

        {/* 3. Why Choose Breezy Tech (5 Pillars + Tiruppur Area Checker) */}
        <WhyChooseUs currentLang={currentLang} />

        {/* Interactive Instant Cost Estimator & Booking */}
        <BookingCalculator currentLang={currentLang} />

        {/* 4. Our Work Gallery (Verified On-Site AC Photos) */}
        <WorkGallery currentLang={currentLang} />

        {/* 5. Customer Reviews (Genuine Google Reviews with 4.9★ rating) */}
        <ReviewsSection currentLang={currentLang} />

        {/* 6. Contact Us & Google Maps */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* Professional Footer */}
      <Footer currentLang={currentLang} />

      {/* Floating Concierge & Mobile Sticky Action Bar */}
      <FloatingWidgets currentLang={currentLang} />
    </div>
  );
}
