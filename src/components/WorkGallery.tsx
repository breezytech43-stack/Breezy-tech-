import React, { useState } from 'react';
import { ZoomIn, X, CheckCircle, ExternalLink, Shield } from 'lucide-react';
import { Language, GalleryItem } from '../types';
import { translations } from '../translations';
import { workGalleryData } from '../data';

interface WorkGalleryProps {
  currentLang: Language;
}

export const WorkGallery: React.FC<WorkGalleryProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeFilter, setActiveFilter] = useState<'all' | 'cleaning' | 'repair' | 'installation' | 'commercial'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? workGalleryData
    : workGalleryData.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#030712] via-[#050c1a] to-[#030712] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            {t.gallerySection.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            {t.gallerySection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.gallerySection.subtitle}
          </p>
        </div>

        {/* Filter Segmented Control (Functional Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: t.gallerySection.filterAll },
            { id: 'cleaning', label: t.gallerySection.filterCleaning },
            { id: 'installation', label: t.gallerySection.filterInstall },
            { id: 'repair', label: t.gallerySection.filterRepair },
            { id: 'commercial', label: t.gallerySection.filterCommercial },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-2xl overflow-hidden glass-card border border-slate-800 hover:border-cyan-500/40 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Measured Scrim for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Category kicker */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-slate-950/80 border border-cyan-400/30 px-3 py-1 rounded-md backdrop-blur-md">
                    {item.categoryLabel[currentLang]}
                  </span>
                </div>

                {/* Click to expand hint */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-cyan-300" />
                </div>

                {/* Bottom text overlay */}
                <div className="absolute bottom-5 left-5 right-5 space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {item.title[currentLang]}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.description[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#071120] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/70 hover:bg-black/90 text-white transition-colors cursor-pointer border border-white/20"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="relative max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title[currentLang]}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            {/* Description & Action Footer */}
            <div className="p-6 bg-[#081326] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
                  {selectedPhoto.categoryLabel[currentLang]} · Verified Tiruppur On-Site
                </span>
                <h4 className="text-lg font-bold text-white font-display">
                  {selectedPhoto.title[currentLang]}
                </h4>
                <p className="text-xs text-slate-300 max-w-xl">
                  {selectedPhoto.description[currentLang]}
                </p>
              </div>

              <a
                href={`https://wa.me/919123528287?text=${encodeURIComponent(
                  `Hi Breezy Tech! I saw your work on ${selectedPhoto.title.en} and want to book similar service in Tiruppur.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-md"
              >
                <span>Book Similar Service</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
