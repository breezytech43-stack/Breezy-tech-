import React, { useState } from 'react';
import { 
  Droplets, 
  Gauge, 
  Wrench, 
  Hammer, 
  Wind, 
  LayoutGrid, 
  Square, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  X,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations } from '../translations';
import { servicesData } from '../data';

interface ServicesSectionProps {
  currentLang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets': return <Droplets className="w-6 h-6 text-cyan-400" />;
      case 'Gauge': return <Gauge className="w-6 h-6 text-sky-400" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-blue-400" />;
      case 'Hammer': return <Hammer className="w-6 h-6 text-cyan-300" />;
      case 'Wind': return <Wind className="w-6 h-6 text-teal-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-sky-300" />;
      case 'Square': return <Square className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Wind className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            {t.servicesSection.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            {t.servicesSection.title}
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            {t.servicesSection.subtitle}
          </p>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const isFeatured = service.id === 'deep-cleaning' || service.id === 'gas-filling';
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 glass-card glass-card-hover ${
                  isFeatured ? 'ice-border-glow bg-gradient-to-b from-slate-900/90 via-[#0a1528] to-[#040915]' : ''
                }`}
              >
                {/* Featured Badge if signature */}
                {isFeatured && (
                  <div className="absolute -top-3 right-5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Popular in Tiruppur</span>
                  </div>
                )}

                <div className="space-y-4">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div className="text-xs font-mono text-cyan-400/90 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                      {service.name[currentLang]}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {service.shortDesc[currentLang]}
                    </p>
                  </div>

                  {/* Key points preview */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 text-[12px] text-slate-300">
                    {service.features[currentLang].slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 line-clamp-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Actions */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      {t.servicesSection.startingFrom}
                    </span>
                    <span className="text-xl font-black text-cyan-300 font-display tabular-nums">
                      {service.priceStarts}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="py-2 px-2.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer text-center"
                    >
                      {t.servicesSection.viewDetails}
                    </button>

                    <a
                      href={`https://wa.me/919123528287?text=${encodeURIComponent(
                        `Hi Breezy Tech, I want to book: ${service.name.en} in Tiruppur.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-2.5 rounded-lg text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-1 shadow-sm"
                    >
                      <MessageSquare className="w-3 h-3 text-slate-950" />
                      <span>Book</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#091222] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Service Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 pr-10">
              <div className="w-14 h-14 rounded-xl bg-slate-900 border border-cyan-400/30 flex items-center justify-center shrink-0">
                {getServiceIcon(activeModalService.iconName)}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                  {activeModalService.name[currentLang]}
                </h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-cyan-400">
                  <span className="font-semibold">{t.servicesSection.duration}: {activeModalService.duration}</span>
                  <span>·</span>
                  <span className="font-semibold">{t.servicesSection.startingFrom}: {activeModalService.priceStarts}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeModalService.fullDesc[currentLang]}
              </p>

              {/* Scope Checklist */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  {t.servicesSection.whatsIncluded}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.features[currentLang].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200">
                <span className="font-bold text-cyan-400">Recommendation: </span>
                {activeModalService.recommendedFor[currentLang]}
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400">Fixed Upfront Estimate</div>
                <div className="text-2xl font-black text-white font-display">
                  {activeModalService.priceStarts}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href="tel:+919123528287"
                  className="flex-1 sm:flex-none py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs text-center border border-slate-700"
                >
                  Call: 91235 28287
                </a>
                <a
                  href={`https://wa.me/919123528287?text=${encodeURIComponent(
                    `Hello Breezy Tech, I would like to book ${activeModalService.name.en} in Tiruppur. Please dispatch a technician.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
