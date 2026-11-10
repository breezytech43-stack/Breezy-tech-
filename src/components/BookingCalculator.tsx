import React, { useState } from 'react';
import { Calculator, MessageSquare, CheckCircle2, Shield, Calendar, Clock, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { tiruppurLocalities } from '../data';

interface BookingCalculatorProps {
  currentLang: Language;
}

export const BookingCalculator: React.FC<BookingCalculatorProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const [acType, setAcType] = useState<'split' | 'window' | 'cassette'>('split');
  const [serviceType, setServiceType] = useState<string>('deep-cleaning');
  const [quantity, setQuantity] = useState<number>(1);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerArea, setCustomerArea] = useState(tiruppurLocalities[0].name);
  const [preferredSlot, setPreferredSlot] = useState('Today (Within 90 Mins)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Price matrix based on AC type and service
  const calculatePrice = () => {
    let basePrice = 599;

    if (serviceType === 'deep-cleaning') {
      basePrice = acType === 'cassette' ? 1199 : acType === 'window' ? 499 : 599;
    } else if (serviceType === 'gas-filling') {
      basePrice = acType === 'cassette' ? 2499 : 1499;
    } else if (serviceType === 'installation') {
      basePrice = acType === 'cassette' ? 2999 : acType === 'window' ? 699 : 999;
    } else if (serviceType === 'routine-service') {
      basePrice = acType === 'cassette' ? 899 : acType === 'window' ? 399 : 449;
    } else if (serviceType === 'repair-diagnostic') {
      basePrice = 349;
    } else if (serviceType === 'amc-annual') {
      basePrice = acType === 'cassette' ? 3499 : 1899;
    }

    // Volume discount for 2+ units
    const subtotal = basePrice * quantity;
    const discount = quantity >= 2 ? Math.round(subtotal * 0.1) : 0;
    return {
      basePrice,
      subtotal,
      discount,
      total: subtotal - discount,
    };
  };

  const pricing = calculatePrice();

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const serviceLabels: Record<string, string> = {
      'deep-cleaning': 'AC Deep Cleaning (Jet Pump Wash)',
      'gas-filling': 'AC Gas Filling & Nitrogen Leak Test',
      'repair-diagnostic': 'AC Repair & Diagnostics',
      'installation': 'AC Installation / Shift',
      'routine-service': 'Routine AC Service',
      'amc-annual': 'AC Annual Maintenance Contract (AMC)',
    };

    const typeLabels: Record<string, string> = {
      split: 'Split AC (1.0 - 2.0 Ton)',
      window: 'Window AC',
      cassette: 'Commercial Cassette AC',
    };

    const message = `Hello BREEZY TECH Tiruppur! I want to confirm my AC service booking:
- AC Type: ${typeLabels[acType]}
- Service: ${serviceLabels[serviceType]}
- Number of Units: ${quantity}
- Estimated Total: ₹${pricing.total.toLocaleString('en-IN')}
- Name: ${customerName || 'Customer'}
- Phone: ${customerPhone || '+91 91235 28287'}
- Locality / Area: ${customerArea}, Tiruppur
- Preferred Slot: ${preferredSlot}

Please confirm my technician dispatch.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919123528287?text=${encoded}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-[#030712] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            {t.calcSection.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-display tracking-tight">
            {t.calcSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            {t.calcSection.subtitle}
          </p>
        </div>

        {/* Calculator Body */}
        <div className="rounded-2xl p-6 sm:p-10 glass-card border border-cyan-500/30 ice-glow-sm">
          <form onSubmit={handleWhatsAppBooking} className="space-y-8">
            
            {/* Step 1: AC Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                {t.calcSection.acType}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'split', label: 'Split / Inverter AC', sub: 'Home & Office' },
                  { id: 'window', label: 'Window AC', sub: 'Compact Rooms' },
                  { id: 'cassette', label: 'Ceiling Cassette', sub: 'Showrooms / Mills' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setAcType(type.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      acType === type.id
                        ? 'border-cyan-400 bg-cyan-950/60 text-white shadow-md shadow-cyan-950/50'
                        : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm">{type.label}</div>
                    <div className="text-[11px] text-slate-400">{type.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Service Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                {t.calcSection.serviceType}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { id: 'deep-cleaning', label: 'AC Deep Jet Wash', price: 'From ₹599' },
                  { id: 'gas-filling', label: 'AC Gas Filling & Leak Test', price: 'From ₹1,499' },
                  { id: 'repair-diagnostic', label: 'Repair & PCB Diagnostic', price: 'From ₹349' },
                  { id: 'installation', label: 'AC Installation / Shift', price: 'From ₹999' },
                  { id: 'routine-service', label: 'Routine Inspection & Wash', price: 'From ₹449' },
                  { id: 'amc-annual', label: 'Yearly AMC (3 Services)', price: 'From ₹1,899/yr' },
                ].map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setServiceType(srv.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      serviceType === srv.id
                        ? 'border-cyan-400 bg-cyan-950/60 text-white shadow-md shadow-cyan-950/50'
                        : 'border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs sm:text-sm">{srv.label}</div>
                      <div className="text-[11px] text-cyan-400">{srv.price}</div>
                    </div>
                    {serviceType === srv.id && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Quantity Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                {t.calcSection.quantity}
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setQuantity(num)}
                    className={`w-12 h-12 rounded-xl font-extrabold text-sm border transition-all cursor-pointer ${
                      quantity === num
                        ? 'border-cyan-400 bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                        : 'border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                {quantity >= 2 && (
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                    🎉 10% Multi-Unit Discount Applied!
                  </span>
                )}
              </div>
            </div>

            {/* Price Output Breakdown */}
            <div className="p-6 rounded-xl bg-slate-950/80 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  {t.calcSection.estimatedTotal}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-cyan-300 font-display tabular-nums">
                  ₹{pricing.total.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Base: ₹{pricing.subtotal.toLocaleString('en-IN')} {pricing.discount > 0 ? `(-₹${pricing.discount} discount)` : ''} · No hidden diagnostic fees
                </div>
              </div>

              <div className="text-xs text-slate-300 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>30-Day Cooling Performance Guarantee included</span>
              </div>
            </div>

            {/* Customer Contact Details Form */}
            <div className="pt-4 border-t border-slate-800 space-y-4">
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                {currentLang === 'en' ? 'Doorstep Service Details (Tiruppur)' : 'சேவை முகவரி விவரங்கள் (திருப்பூர்)'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.calcSection.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Senthil Kumar"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.calcSection.phoneLabel} *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91235 28287"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {t.calcSection.addressLabel} *
                  </label>
                  <select
                    value={customerArea}
                    onChange={(e) => setCustomerArea(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    {tiruppurLocalities.map((loc) => (
                      <option key={loc.name} value={loc.name}>
                        {loc.name} ({loc.tamilName}) - {loc.estimatedArrival}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Today (Within 90 Mins)">Today (Within 90 Mins - Immediate)</option>
                    <option value="Today Afternoon (2:00 PM - 5:00 PM)">Today Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Today Evening (5:00 PM - 8:30 PM)">Today Evening (5:00 PM - 8:30 PM)</option>
                    <option value="Tomorrow Morning (9:00 AM - 12:00 PM)">Tomorrow Morning (9:00 AM - 12:00 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 max-w-sm">
                {t.calcSection.note}
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 cursor-pointer transition-transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 text-emerald-200" />
                <span>{t.calcSection.btnBookNow}</span>
              </button>
            </div>

            {isSubmitted && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 text-center font-medium">
                {t.calcSection.bookingSuccess}
              </div>
            )}

          </form>
        </div>

      </div>
    </section>
  );
};
