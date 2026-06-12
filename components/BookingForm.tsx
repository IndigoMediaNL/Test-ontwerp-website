/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    babyAge: '',
    struggle: 'hazenslaapjes',
    date: '',
    timeSlot: '09:30',
    email: '',
    phone: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.email || !formData.phone) {
      setError('Vul aDynamic je naam, e-mail en telefoonnummer in.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#DFD9CE]/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-[#798873] font-extrabold bg-[#8D9B87]/10 px-4 py-1.5 rounded-full">
            Eerste stap naar rust
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#2F2B27]">
            Plan een gratis <span className="italic text-[#C08169]">kennismaking</span>
          </h2>
          <p className="max-w-xl text-[#5D5A53] text-xs md:text-sm leading-relaxed">
            Samen verkennen we jullie situatie tijdens een vrijblijvend telefoongesprek van 15 minuten. Ik leg je uit hoe we rust kunnen brengen.
          </p>
        </div>

        <div className="bg-white rounded-bl-[40px] rounded-tr-[40px] border border-[#EBE7E1] shadow-xs p-8 md:p-12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              
              {/* Row 1: Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="booking-parent-name" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-2">Jouw Naam</label>
                  <input 
                    id="booking-parent-name"
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="bijv. Annelies"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="booking-baby-age" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-2">Leeftijd van je baby</label>
                  <input 
                    id="booking-baby-age"
                    type="text"
                    name="babyAge"
                    value={formData.babyAge}
                    onChange={handleInputChange}
                    placeholder="bijv. 4 maanden"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]"
                  />
                </div>
              </div>

              {/* Row 2: Struggles list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="booking-struggle-select" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-2">Grootste uitdaging</label>
                  <select 
                    id="booking-struggle-select"
                    name="struggle"
                    value={formData.struggle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169] appearance-none cursor-pointer"
                  >
                    <option value="slaap">Slaapgedrag (hazenslaapjes, nachtwaken)</option>
                    <option value="voeding">Voedingsritmes &amp; darmkrampjes</option>
                    <option value="signalen">Baby-signalen &amp; lichaamstaal lezen</option>
                    <option value="ontwikkeling">Ontwikkeling &amp; sprongetjes eerste jaar</option>
                    <option value="organisatie">Organisatorische vragen / Coaching op locatie</option>
                    <option value="anders">Iets anders</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="booking-phone-input" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-2">Telefoonnummer</label>
                  <input 
                    id="booking-phone-input"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="bijv. 0612345678"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]"
                    required
                  />
                </div>
              </div>

              {/* Row 3: Contacts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="booking-email-input" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-2">E-mailadres</label>
                  <input 
                    id="booking-email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="bijv. annelies@dromenland.nl"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="booking-time-select" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-2">Voorkeurstijdstip</label>
                  <select 
                    id="booking-time-select"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169] appearance-none cursor-pointer"
                  >
                    <option value="09:30">Ochtend (09:00 - 12:00)</option>
                    <option value="13:30">Middag (12:00 - 15:00)</option>
                    <option value="15:30">Einde middag (15:00 - 17:00)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="booking-message-area" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-2">Korte toelichting (optioneel)</label>
                <textarea 
                  id="booking-message-area"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Beschrijf kort de situatie van jouw baby..."
                  className="w-full p-4 bg-[#FAF8F5] border border-[#DFD9CE] rounded-2xl text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]"
                />
              </div>

              {error && <p className="text-[11px] text-red-500 font-bold">{error}</p>}

              <button
                id="booking-submit-btn"
                type="submit"
                className="w-full py-4 bg-[#C08169] hover:bg-[#b0735b] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-xs"
              >
                Vrijblijvend gesprek boeken
              </button>
            </form>
          ) : (
            <div className="text-center py-12 animate-fade-in space-y-6">
              <span className="text-5xl block">👶🏼💫</span>
              <h3 className="font-serif text-[#2F2B27] text-2xl font-medium">Kennismaking aangevraagd!</h3>
              <p className="text-sm text-[#5D5A53] max-w-md mx-auto leading-relaxed">
                Bedankt, lieve <strong>{formData.parentName}</strong>! Ik heb je aanvraag voor een gratis kennismakingsgesprek goed ontvangen.
              </p>
              <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-[#EBE7E1] max-w-xs mx-auto text-left text-xs text-[#5D5A53] space-y-2">
                <p>📍 <strong>Uitdaging:</strong> {formData.struggle}</p>
                <p>📞 <strong>Samen bellen op:</strong> Omtrent gekozen tijdstip</p>
                <p>💌 <strong>Bevestiging gestuurd naar:</strong> {formData.email}</p>
              </div>
              <p className="text-xs text-[#798873] italic">
                Ik neem binnen 24 uur persoonlijk contact met je op via {formData.phone} om het exacte moment te prikken. Liefs, Claudia!
              </p>
              <button
                id="booking-reset-btn"
                onClick={() => setSubmitted(false)}
                className="text-[10px] uppercase font-bold tracking-wider text-[#C08169] hover:opacity-75 transition-opacity pt-4 decoration-1 underline underline-offset-4"
              >
                Nieuwe boeking starten
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
