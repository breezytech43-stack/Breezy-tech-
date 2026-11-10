import React, { useState } from 'react';
import { MessageSquare, Phone, X, ChevronUp, Sparkles, Droplets, Gauge, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FloatingWidgetsProps {
  currentLang: Language;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [conciergeOpen, setConciergeOpen] = useState(false);

  const quickQueries = [
    {
      label: currentLang === 'en' ? 'Deep Jet Wash Service (₹599)' : 'டீப் ஜெட் வாஷ் (₹599)',
      query: 'Hi Breezy Tech, I want to book AC Deep Cleaning Jet Wash in Tiruppur.',
      icon: <Droplets className="w-3.5 h-3.5 text-cyan-400" />,
    },
    {
      label: currentLang === 'en' ? 'Gas Refill & Leak Test (₹1,499)' : 'கேஸ் நிரப்புதல் & லீக் டெஸ்ட்',
      query: 'Hi Breezy Tech, my AC is not cooling. Need Gas Charging in Tiruppur.',
      icon: <Gauge className="w-3.5 h-3.5 text-sky-400" />,
    },
    {
      label: currentLang === 'en' ? 'Emergency Breakdown (90 Mins)' : 'அவசர ஏசி பழுதுநீக்கம் (90 Mins)',
      query: 'Emergency! My AC has stopped working. Need technician dispatch ASAP in Tiruppur.',
      icon: <AlertCircle className="w-3.5 h-3.5 text-rose-400" />,
    },
  ];

  return (
    <>
      {/* Desktop Floating WhatsApp Concierge Button */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        {/* Concierge Popup Box */}
        {conciergeOpen && (
          <div className="mb-3 w-80 rounded-2xl bg-[#091224] border border-cyan-500/40 p-4 shadow-2xl animate-in slide-in-from-bottom duration-200 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white">Breezy Tech Concierge</span>
              </div>
              <button
                onClick={() => setConciergeOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 my-3">
              {t.floating.chatPrompt}
            </p>

            <div className="space-y-2">
              {quickQueries.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/919123528287?text=${encodeURIComponent(item.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-200 transition-colors"
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>Average response: ~2 mins</span>
              <a
                href="tel:+919123528287"
                className="text-cyan-400 font-bold hover:underline"
              >
                Direct Call: 91235 28287
              </a>
            </div>
          </div>
        )}

        {/* Floating Action Trigger Button */}
        <button
          onClick={() => setConciergeOpen(!conciergeOpen)}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 flex items-center justify-center transition-all hover:scale-105 cursor-pointer relative group"
          aria-label="Open WhatsApp Chat Concierge"
        >
          <MessageSquare className="w-7 h-7 text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 border-2 border-[#030712] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Capped <= 15% viewport height per design rules) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#040914]/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href="tel:+919123528287"
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-cyan-500/40 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-cyan-400" />
          <span>Call: 91235 28287</span>
        </a>

        <a
          href={`https://wa.me/919123528287?text=${encodeURIComponent(t.whatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-white" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </>
  );
};
