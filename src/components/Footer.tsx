import React, { useState } from 'react';
import { Snowflake, Phone, MessageSquare, Download, MapPin, CheckCircle, Shield } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { generateNetlifyZip } from '../utils/zipGenerator';
import { tiruppurLocalities } from '../data';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [downloading, setDownloading] = useState(false);

  const handleDownloadZip = async () => {
    try {
      setDownloading(true);
      await generateNetlifyZip();
    } catch (err) {
      console.error('Failed to generate ZIP:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <footer className="bg-[#020409] border-t border-slate-800 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Snowflake className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-xl font-black text-white font-display tracking-tight">
                BREEZY TECH
              </span>
            </div>

            <p className="text-xs font-bold text-cyan-300 font-display tracking-wide uppercase">
              {t.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.about}
            </p>

            {/* Netlify Deployment Bundle Exporter */}
            <div className="pt-2">
              <button
                onClick={handleDownloadZip}
                disabled={downloading}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 text-xs font-bold transition-colors cursor-pointer hover:border-cyan-400 disabled:opacity-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloading ? 'Packaging ZIP...' : t.footer.downloadZip}</span>
              </button>
              <div className="text-[10px] text-slate-500 mt-1">
                {t.footer.downloadDesc}
              </div>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Breezy Tech</a></li>
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">Cost Calculator</a></li>
              <li><a href="#gallery" className="hover:text-cyan-400 transition-colors">Work Gallery</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">Google Reviews</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.services}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AC Deep Cleaning (Jet Wash)</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AC Gas Filling & Leak Test</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AC Installation & Uninstallation</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Inverter PCB Board Repair</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Split & Window AC Servicing</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Commercial Cassette AC AMC</a></li>
            </ul>
          </div>

          {/* Contact & Tiruppur Hub (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.contactInfo}
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block">Phone Support:</span>
                <a href="tel:+919123528287" className="text-white font-bold hover:text-cyan-300">
                  +91 91235 28287
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">WhatsApp Direct:</span>
                <a
                  href="https://wa.me/919123528287?text=Hello%20Breezy%20Tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline"
                >
                  +91 91235 28287
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">Service Hours:</span>
                <span className="text-slate-300">8:00 AM – 9:00 PM (Monday – Sunday)</span>
              </div>
              <div>
                <span className="text-slate-500 block">Coverage Area:</span>
                <span className="text-slate-300">All Over Tiruppur, Tamil Nadu (PIN 641601 - 641608)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tiruppur Localities Index Row */}
        <div className="py-6 border-b border-slate-900 text-xs text-slate-500">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
            Areas Served in Tiruppur District:
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {tiruppurLocalities.map((loc, idx) => (
              <span key={loc.name} className="hover:text-slate-300">
                {loc.name}{idx < tiruppurLocalities.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 BREEZY TECH. {t.footer.rights}
          </div>
          <div className="flex items-center gap-6">
            <span>ISO 9001:2015 HVAC Certified Practice</span>
            <span>·</span>
            <span>100% Cooling Satisfaction</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
