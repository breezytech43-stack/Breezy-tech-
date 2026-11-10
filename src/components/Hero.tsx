import React, { useState } from 'react';
import { Phone, MessageSquare, Calculator, Zap, ThermometerSnowflake, ShieldCheck, Clock, Award, Star, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [temperature, setTemperature] = useState<number>(18);
  const [isTurbo, setIsTurbo] = useState<boolean>(true);
  const [isEco, setIsEco] = useState<boolean>(false);

  const handleTempMinus = () => {
    if (temperature > 16) setTemperature((prev) => prev - 1);
  };

  const handleTempPlus = () => {
    if (temperature < 26) setTemperature((prev) => prev + 1);
  };

  const toggleTurbo = () => {
    setIsTurbo(!isTurbo);
    if (!isTurbo) setIsEco(false);
  };

  const toggleEco = () => {
    setIsEco(!isEco);
    if (!isEco) setIsTurbo(false);
  };

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#030712] via-[#061022] to-[#030712]">
      {/* Background radial ice-glow ambient mesh */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 ice-glow-sm animate-pulse" />
              <span>{t.locationTag}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 font-medium">Doorstep Service in 90 Mins</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance font-display">
              {t.hero.headline}
            </h1>

            {/* Subtitle / Brand Tagline */}
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent font-display">
              {t.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* CTAs Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Call Now */}
              <a
                href="tel:+919123528287"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 ice-glow transition-all duration-200 hover:-translate-y-0.5 text-base whitespace-nowrap shrink-0"
              >
                <Phone className="w-5 h-5 text-cyan-200" />
                <span>{t.hero.ctaCall}</span>
              </a>

              {/* WhatsApp Chat */}
              <a
                href={`https://wa.me/919123528287?text=${encodeURIComponent(t.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-950/40 text-base whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-5 h-5 text-emerald-200" />
                <span>{t.hero.ctaWhatsapp}</span>
              </a>

              {/* Quick Calculator Scroll */}
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-900/90 border border-slate-700 hover:border-cyan-400/50 transition-colors text-sm whitespace-nowrap shrink-0"
              >
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.ctaEstimate}</span>
              </a>
            </div>

            {/* Trust points */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-cyan-400" /> 100% Cooling Guarantee
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Clock className="w-4 h-4 text-cyan-400" /> 90 Min Arrival Window
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <Award className="w-4 h-4 text-cyan-400" /> Zero Mess Guarantee
              </span>
            </div>
          </div>

          {/* Right Column: 3D Interactive AC Simulator & Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer 3D Card Shell */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-slate-700/20 to-slate-900/80 shadow-2xl shadow-cyan-950/30">
              <div className="rounded-[15px] bg-[#071120] overflow-hidden border border-cyan-400/20">
                
                {/* Visual Header / Image Canvas */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                  <img
                    src="/src/assets/images/hero_ac_cooling_breeze_1794328263004.jpg"
                    alt="BREEZY TECH AC Air Conditioning Unit In Tiruppur"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-black/30" />

                  {/* Dynamic Airflow Overlay Effect when Turbo is ON */}
                  {isTurbo && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute bottom-4 left-1/4 right-1/4 h-24 bg-gradient-to-t from-cyan-400/20 via-sky-300/10 to-transparent blur-md animate-cool-flow" />
                    </div>
                  )}

                  {/* Temperature HUD on Image */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-cyan-400/40 rounded-xl px-3.5 py-2 flex items-center gap-2">
                    <ThermometerSnowflake className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Target Temp</div>
                      <div className="text-xl font-black text-cyan-300 font-display tabular-nums leading-none">
                        {temperature}°C
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 bg-cyan-950/80 backdrop-blur-md border border-cyan-400/40 rounded-lg px-2.5 py-1 text-[11px] font-bold text-cyan-300">
                    {isTurbo ? '⚡ TURBO JET COOL' : isEco ? '🌿 ECO INVERTER' : 'STANDARD ACTIVE'}
                  </div>
                </div>

                {/* Interactive AC Console Controls */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">{t.hero.liveSimulatorTitle}</span>
                    <span className="text-cyan-400 font-mono">BREEZY SMART-LOGIC</span>
                  </div>

                  {/* Temp Adjustment Slider & Buttons */}
                  <div className="bg-slate-900/80 rounded-xl p-3 border border-slate-800 flex items-center justify-between gap-4">
                    <button
                      onClick={handleTempMinus}
                      disabled={temperature <= 16}
                      className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xl flex items-center justify-center border border-slate-700 disabled:opacity-30 cursor-pointer"
                      aria-label="Decrease Temperature"
                    >
                      -
                    </button>

                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-black text-white font-display tabular-nums">
                        {temperature}°C
                      </div>
                      <div className="text-[11px] text-cyan-400 font-medium">
                        {temperature <= 18 ? 'Super Chill Fast Cooling' : 'Optimal Comfort Balance'}
                      </div>
                    </div>

                    <button
                      onClick={handleTempPlus}
                      disabled={temperature >= 26}
                      className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xl flex items-center justify-center border border-slate-700 disabled:opacity-30 cursor-pointer"
                      aria-label="Increase Temperature"
                    >
                      +
                    </button>
                  </div>

                  {/* Mode Toggles */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={toggleTurbo}
                      className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isTurbo
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>{t.hero.turboCool}</span>
                    </button>

                    <button
                      onClick={toggleEco}
                      className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isEco
                          ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/30'
                          : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{t.hero.ecoMode}</span>
                    </button>
                  </div>

                  {/* Real-time telemetry readout */}
                  <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-slate-400 text-[10px] uppercase font-semibold">Air Flow Rate</div>
                      <div className="text-white font-mono font-bold">{isTurbo ? '540 CFM (Maximum)' : '380 CFM (Balanced)'}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] uppercase font-semibold">Tiruppur Dispatch</div>
                      <div className="text-cyan-400 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Ready in 90 Mins</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Claim-to-Proof Adjacency: 4-Metric Proof Row Below Hero */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">90 Mins</div>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400">{t.metrics.speed}</div>
            <div className="text-xs text-slate-400">{t.metrics.speedSub}</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display flex items-center gap-1">
              <span>4.9</span>
              <Star className="w-5 h-5 text-amber-400 fill-amber-400 inline" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400">{t.metrics.rating}</div>
            <div className="text-xs text-slate-400">{t.metrics.ratingSub}</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">30 Days</div>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400">{t.metrics.warranty}</div>
            <div className="text-xs text-slate-400">{t.metrics.warrantySub}</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">10+ Years</div>
            <div className="text-xs sm:text-sm font-semibold text-cyan-400">{t.metrics.experience}</div>
            <div className="text-xs text-slate-400">{t.metrics.experienceSub}</div>
          </div>
        </div>

      </div>
    </section>
  );
};
