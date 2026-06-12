/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
  onClearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, onClearCart }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    babyName: '',
    babyDob: '',
    message: '',
    newsletter: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.email || !formData.phone) {
      setError('Vul aDynamic de verplichte velden in (Naam, E-mail, Telefoonummer).');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleFinish = () => {
    onClearCart();
    onBack();
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 bg-[#FAF8F5] animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Link */}
        <button 
          id="checkout-back-link"
          onClick={onBack}
          className="group flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#798873] hover:text-[#C08169] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Terug naar Diensten
        </button>

        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form details */}
            <div className="lg:col-span-7 text-left">
              <h1 className="text-3xl font-serif text-[#2F2B27] mb-2">Boeking Gegevens</h1>
              <p className="text-xs text-[#5D5A53] mb-8 font-normal">
                Vul het intake-formulier in. Claudia neemt binnen 24 uur contact met je op om de consult-afspraken en tijden in te plannen.
              </p>
              
              <form onSubmit={handleFormSubmit} className="space-y-8">
                
                {/* Contactdetails */}
                <div className="bg-white p-6 rounded-3xl border border-[#EBE7E1]/60 shadow-xs space-y-4">
                  <h2 className="text-sm uppercase font-bold tracking-wider text-[#798873] border-b border-[#EBE7E1] pb-2">1. Jouw Contactgegevens</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="checkout-parent-name" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-1.5">Naam Ouder</label>
                      <input 
                        id="checkout-parent-name"
                        type="text" 
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Annelies Lemmens" 
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-phone-input" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-1.5">Telefoonnummer</label>
                      <input 
                        id="checkout-phone-input"
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="0612345678" 
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="checkout-email-input" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-1.5">E-mailadres</label>
                    <input 
                      id="checkout-email-input"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="annelies@gmail.com" 
                      className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]" 
                      required 
                    />
                  </div>
                </div>

                {/* Baby details onboarding */}
                <div className="bg-white p-6 rounded-3xl border border-[#EBE7E1]/60 shadow-xs space-y-4">
                  <h2 className="text-sm uppercase font-bold tracking-wider text-[#798873] border-b border-[#EBE7E1] pb-2">2. Gegevens van de kleine</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="checkout-baby-name" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-1.5">Naam van de Baby</label>
                      <input 
                        id="checkout-baby-name"
                        type="text" 
                        name="babyName"
                        value={formData.babyName}
                        onChange={handleInputChange}
                        placeholder="bijv. Saar" 
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]" 
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-baby-dob" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-1.5">Geboortedatum / Verwacht</label>
                      <input 
                        id="checkout-baby-dob"
                        type="text" 
                        name="babyDob"
                        value={formData.babyDob}
                        onChange={handleInputChange}
                        placeholder="bijv. 12-11-2025" 
                        className="w-full px-4 py-2.5 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="checkout-message-area" className="block text-[10px] uppercase font-bold tracking-wider text-[#798873] mb-1.5">Eventuele toelichting of slaapuitdaging</label>
                    <textarea 
                      id="checkout-message-area"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Is er reflux? Slaapt de baby alleen bij wiegen? Laat het me hier alvast weten." 
                      className="w-full p-4 bg-[#FAF8F5] border border-[#DFD9CE] rounded-2xl text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169]" 
                    />
                  </div>
                </div>

                {/* Consent & Newsletter */}
                <div className="flex flex-col gap-2.5 px-2">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="accent-[#8D9B87] h-4 w-4 rounded-sm cursor-pointer" 
                    />
                    <label htmlFor="newsletter" className="text-[11px] text-[#5D5A53] cursor-pointer">
                      Ik meld mij aan voor de tweewekelijkse nieuwsbrief met gratis baby-adviezen.
                    </label>
                  </div>
                </div>

                {error && <p className="text-xs text-red-500 font-bold">{error}</p>}

                <div>
                  <button 
                    id="checkout-submit-final"
                    type="submit"
                    className="w-full py-4 bg-[#C08169] hover:bg-[#b0735b] text-white uppercase tracking-widest text-xs font-bold rounded-full transition-all duration-300 shadow-xs hover:shadow-md"
                  >
                    Boeking afronden — € {total}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Reservation overview */}
            <div className="lg:col-span-5 lg:pl-12 lg:border-l border-[#EBE7E1] text-left">
              <h2 className="text-xl font-serif text-[#2F2B27] mb-6">Mijn Reservering</h2>
              
              <div className="space-y-4 mb-8">
                 {items.map((item, idx) => (
                   <div key={idx} className="flex gap-4 p-3 bg-white rounded-2xl border border-[#EBE7E1]/50 shadow-xs">
                      <div className="w-12 h-16 bg-stone-100 rounded-lg overflow-hidden shrink-0 border border-[#EBE7E1]/30">
                         <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between text-left">
                         <h3 className="font-serif text-[#2F2B27] text-xs font-semibold leading-tight">{item.name}</h3>
                         <p className="text-[9px] uppercase tracking-wider text-[#798873] font-bold mt-1">{item.category}</p>
                      </div>
                      <span className="text-xs font-semibold text-[#2F2B27] align-middle mt-1 shrink-0">€ {item.price}</span>
                   </div>
                 ))}
              </div>

              <div className="border-t border-[#EBE7E1] pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-[#5D5A53]">
                   <span>Subtotaal</span>
                   <span>€ {total}</span>
                </div>
                <div className="flex justify-between text-[#798873] font-bold">
                   <span>Reservering &amp; Intake</span>
                   <span>Gratis</span>
                </div>
              </div>
              
              <div className="border-t border-[#EBE7E1] mt-4 pt-4">
                 <div className="flex justify-between items-center">
                   <span className="font-serif text-lg text-[#2F2B27]">Totaal</span>
                   <span className="font-serif text-xl font-semibold text-[#2F2B27]">€ {total}</span>
                 </div>
              </div>
            </div>
            
          </div>
        ) : (
          /* Submission success view */
          <div className="max-w-xl mx-auto bg-white p-10 md:p-14 rounded-bl-[50px] rounded-tr-[50px] border border-[#EBE7E1] shadow-lg text-center space-y-6 animate-fade-in">
             <span className="text-5xl block">🕊️✨👶🏼</span>
             <h2 className="font-serif text-[#2F2B27] text-2xl md:text-3xl font-medium">Je boeking is ontvangen!</h2>
             <p className="text-xs sm:text-sm text-[#5D5A53] leading-relaxed">
               Lieve <strong>{formData.parentName}</strong>, hartelijk dank voor je vertrouwen. Ik ben ontzettend dankbaar dat ik met jullie gezin mee op reis mag gaan naar meer dromen en rustige nachten.
             </p>
             
             <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-[#DFD9CE]/70 text-left text-xs text-[#5D5A53] space-y-3.5">
               <h4 className="font-serif italic text-sm text-[#2F2B27] border-b border-[#EBE7E1] pb-2 font-semibold">Boeking overzicht:</h4>
               <ul className="space-y-1.5 font-medium">
                 {items.map((item, idx) => (
                   <li key={idx} className="flex justify-between">
                     <span>• {item.name}</span>
                     <strong>€ {item.price}</strong>
                   </li>
                 ))}
               </ul>
               <div className="border-t border-[#EBE7E1] pt-3 text-[11px] space-y-1 text-[#798873]">
                 <p>👤 <strong>Ingetekend voor:</strong> {formData.babyName || 'Jullie kleintje'} ({formData.babyDob || 'Nog onbekend'})</p>
                 <p>📞 <strong>Samen bellen op:</strong> Ik stuur je direct een WhatsApp of SMS om de consult-dag in te plannen.</p>
                 <p>✉️ <strong>E-mailadres:</strong> {formData.email}</p>
               </div>
             </div>

             <p className="text-xs text-[#798873] italic">
               Ik neem binnen 24 uur persoonlijk contact met je op. Heb je al dringende vragen? Stuur gerust een e-mail naar info@debabyconsultant.nl.
             </p>

             <button 
               id="checkout-btn-finish"
               onClick={handleFinish}
               className="w-full py-4 bg-[#8D9B87] hover:bg-[#798873] text-white uppercase tracking-widest text-xs font-bold rounded-full transition-all duration-300 shadow-xs"
             >
               Terug naar de Startpagina
             </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Checkout;
