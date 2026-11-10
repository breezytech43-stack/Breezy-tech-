import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { tiruppurLocalities } from '../data';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Avinashi Road');
  const [serviceNeeded, setServiceNeeded] = useState('AC Deep Cleaning (Jet Pump)');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    const msg = `Hello Breezy Tech Tiruppur! I need doorstep AC service:
- Name: ${name}
- Phone: ${phone}
- Locality: ${area}, Tiruppur
- Service Needed: ${serviceNeeded}

Please call or reply with technician availability!`;

    window.open(`https://wa.me/919123528287?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#030712] via-[#061122] to-[#02050e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            {t.contactSection.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight">
            {t.contactSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.contactSection.subtitle}
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Cards: Contact Channels & Location Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <a
              href="tel:+919123528287"
              className="block rounded-2xl p-6 glass-card border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    {t.contactSection.directCall}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white font-display tracking-tight group-hover:text-cyan-300 transition-colors">
                    +91 91235 28287
                  </div>
                  <div className="text-xs text-cyan-400 mt-0.5">Click to call immediately</div>
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/919123528287?text=Hello%20Breezy%20Tech!%20I%20want%20to%20book%20AC%20service%20in%20Tiruppur."
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-6 glass-card border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    {t.contactSection.whatsappDirect}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white font-display tracking-tight group-hover:text-emerald-300 transition-colors">
                    +91 91235 28287
                  </div>
                  <div className="text-xs text-emerald-400 mt-0.5">Chat with technician on WhatsApp</div>
                </div>
              </div>
            </a>

            {/* Operating Hours Card */}
            <div className="rounded-2xl p-6 glass-card border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Clock className="w-4 h-4" />
                <span>{t.contactSection.workingHours}</span>
              </div>
              <div className="text-base font-bold text-white">
                {t.contactSection.hoursDetail}
              </div>
              <div className="text-xs text-slate-400">
                Emergency breakdown support & Sunday servicing available across Tiruppur.
              </div>
            </div>

            {/* Location Coverage Card */}
            <div className="rounded-2xl p-6 glass-card border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <MapPin className="w-4 h-4" />
                <span>{t.contactSection.location}</span>
              </div>
              <div className="text-base font-bold text-white">
                All Over Tiruppur, Tamil Nadu
              </div>
              <div className="text-xs text-slate-400">
                Avinashi Rd, Palladam Rd, Dharapuram Rd, Kangeyam Rd, Perumanallur, Rayapuram, Mangalam, Angeripalayam (PIN: 641601 - 641608).
              </div>
            </div>

          </div>

          {/* Right Form: Quick Request / Dispatch */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 glass-card border border-cyan-500/30 ice-glow-sm">
            <h3 className="text-2xl font-black text-white font-display mb-2">
              {t.contactSection.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your details for prompt 90-minute mobile van dispatch across Tiruppur.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senthil Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91235 28287"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Select Your Area in Tiruppur *
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    {tiruppurLocalities.map((loc) => (
                      <option key={loc.name} value={loc.name}>
                        {loc.name} ({loc.tamilName})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Service Required *
                  </label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="AC Deep Cleaning (Jet Pump)">AC Deep Cleaning (Jet Pump Wash)</option>
                    <option value="AC Gas Filling & Leak Repair">AC Gas Filling & Nitrogen Test</option>
                    <option value="AC Installation or Uninstallation">AC Installation or Uninstallation</option>
                    <option value="AC Repair & PCB Diagnostic">AC Repair & Inverter PCB Diagnostic</option>
                    <option value="Cassette AC Commercial Service">Cassette AC Commercial Service</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 ice-glow cursor-pointer transition-transform hover:-translate-y-0.5 mt-2"
              >
                <Send className="w-4 h-4 text-cyan-200" />
                <span>{t.contactSection.submitBtn}</span>
              </button>

              {sentSuccess && (
                <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 text-center font-medium">
                  Service inquiry submitted! Opening WhatsApp for technician assignment...
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Google Maps Integration for Tiruppur */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 glass-card">
          <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>BREEZY TECH Service Coverage Area — Tiruppur, Tamil Nadu</span>
            </div>
            <div className="text-xs text-slate-400">
              Active Van Hubs: Avinashi Rd · Palladam Rd · Kumaran Rd · Dharapuram Rd
            </div>
          </div>

          <div className="relative h-80 sm:h-96 w-full bg-slate-950">
            <iframe
              title="BREEZY TECH Tiruppur Coverage Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173873427!2d77.2721644754746!3d11.108524177579893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0429f55e3%3A0x6b77ae4b4b27670e!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
