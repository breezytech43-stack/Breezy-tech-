import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  ThumbsUp, 
  Award, 
  MapPin, 
  Search, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Building2
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { tiruppurLocalities, brandSpecializations } from '../data';

interface WhyChooseUsProps {
  currentLang: Language;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState(tiruppurLocalities[0]);

  const filteredAreas = tiruppurLocalities.filter((loc) =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.tamilName.includes(searchTerm)
  );

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0: return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 1: return <Clock className="w-6 h-6 text-sky-400" />;
      case 2: return <ThumbsUp className="w-6 h-6 text-emerald-400" />;
      case 3: return <Award className="w-6 h-6 text-blue-400" />;
      case 4: return <MapPin className="w-6 h-6 text-cyan-300" />;
      default: return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-[#030712] via-[#060e1d] to-[#030712] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            {t.whySection.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            {t.whySection.title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {t.whySection.subtitle}
          </p>
        </div>

        {/* 5 Core Pillars in Asymmetric Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Pillar 1: Professional AC Care */}
          <div className="rounded-2xl p-7 glass-card glass-card-hover border border-slate-800 space-y-3 lg:col-span-2">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center">
              {getPillarIcon(0)}
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.whySection.pillars[0].title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.whySection.pillars[0].desc}
            </p>
            <div className="pt-3 flex flex-wrap gap-4 text-xs text-cyan-300">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> High-Pressure Jet Pumps</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> Wall Catch Jackets</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5" /> Micron Digital Vacuuming</span>
            </div>
          </div>

          {/* Pillar 2: Reliable Service */}
          <div className="rounded-2xl p-7 glass-card glass-card-hover border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-sky-500/30 flex items-center justify-center">
              {getPillarIcon(1)}
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.whySection.pillars[1].title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.whySection.pillars[1].desc}
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-sky-400">
              ⚡ 90 Min Doorstep Dispatch Guaranteed
            </div>
          </div>

          {/* Pillar 3: Customer Satisfaction */}
          <div className="rounded-2xl p-7 glass-card glass-card-hover border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-center">
              {getPillarIcon(2)}
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.whySection.pillars[2].title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.whySection.pillars[2].desc}
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-400">
              ✓ 30-Day Post-Service Cooling Warranty
            </div>
          </div>

          {/* Pillar 4: Expert Technicians */}
          <div className="rounded-2xl p-7 glass-card glass-card-hover border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-blue-500/30 flex items-center justify-center">
              {getPillarIcon(3)}
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.whySection.pillars[3].title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.whySection.pillars[3].desc}
            </p>
            <div className="pt-2 text-xs text-blue-300">
              ✓ 10+ Years HVAC & Inverter PCB Mastery
            </div>
          </div>

          {/* Pillar 5: All Over Tiruppur */}
          <div className="rounded-2xl p-7 glass-card glass-card-hover border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center">
              {getPillarIcon(4)}
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              {t.whySection.pillars[4].title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t.whySection.pillars[4].desc}
            </p>
            <div className="pt-2 text-xs text-cyan-300">
              ✓ Dedicated Mobile Service Units Everywhere
            </div>
          </div>

        </div>

        {/* Interactive Tiruppur Area Arrival Time Checker */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-[#071329] to-slate-900 border border-cyan-500/30 p-6 sm:p-8 ice-glow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Tiruppur City-Wide Coverage</span>
              </div>
              <h3 className="text-2xl font-black text-white font-display">
                {t.whySection.areaCheckerTitle}
              </h3>
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.whySection.areaCheckerPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 focus:border-cyan-400 text-sm text-white placeholder-slate-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Quick Click Badges for Popular Tiruppur Localities */}
          <div className="pt-6">
            <div className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">
              {currentLang === 'en' ? 'Popular Localities in Tiruppur:' : 'முக்கிய திருப்பூர் பகுதிகள்:'}
            </div>

            <div className="flex flex-wrap gap-2">
              {filteredAreas.slice(0, 10).map((area) => {
                const isSelected = selectedArea.name === area.name;
                return (
                  <button
                    key={area.name}
                    onClick={() => setSelectedArea(area)}
                    className={`py-1.5 px-3 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30 scale-105'
                        : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <span>{currentLang === 'en' ? area.name : area.tamilName}</span>
                    <span className="text-[10px] opacity-75 font-mono">{area.estimatedArrival}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Area Response Card */}
            {selectedArea && (
              <div className="mt-6 p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{t.whySection.areaFound}</span>
                    <span className="text-cyan-300 font-extrabold text-base underline underline-offset-4">
                      {selectedArea.estimatedArrival}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300">
                    Location: <strong className="text-white">{currentLang === 'en' ? selectedArea.name : selectedArea.tamilName}</strong> ({selectedArea.zone}) · Van Available
                  </div>
                </div>

                <a
                  href={`https://wa.me/919123528287?text=${encodeURIComponent(
                    `Hi Breezy Tech, please dispatch a technician to ${selectedArea.name}, Tiruppur for AC service.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>Book for {currentLang === 'en' ? selectedArea.name : selectedArea.tamilName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Brands Specialization Carousel / Grid */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            {currentLang === 'en' ? 'Factory-Trained Specialists for All Leading Brands' : 'அனைத்து முன்னணி பிராண்டுகளுக்கும் அங்கீகரிக்கப்பட்ட சர்வீஸ்'}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {brandSpecializations.map((brand) => (
              <div
                key={brand}
                className="py-2 px-4 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 text-xs sm:text-sm font-bold hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
