/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

const GuideCoverSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Vul aDynamic een geldig e-mailadres in.');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="guides" className="py-24 px-6 md:px-12 bg-[#EBE7E1]/40 border-t border-b border-[#DFD9CE]/40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Interactive Cover Presentation */}
        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
          {/* Cover Container styled inside a luxurious sand/cream background and double frame borders */}
          <div className="w-[320px] h-[440px] bg-[#FAF8F5] p-6 rounded-tr-[40px] rounded-bl-[40px] shadow-lg border border-[#DFD9CE] relative flex flex-col justify-between transition-transform duration-500 hover:rotate-2">
            
            {/* Elegant Double Border Frame inside */}
            <div className="absolute inset-4 border-2 border-[#DFD9CE] rounded-tr-[30px] rounded-bl-[30px] opacity-70 pointer-events-none"></div>
            <div className="absolute inset-[20px] border border-[#DFD9CE] rounded-tr-[28px] rounded-bl-[28px] opacity-40 pointer-events-none"></div>
            
            {/* Cover Header */}
            <div className="relative text-center z-10 mt-6">
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#798873] font-extrabold block">Gids &amp; Ritmes</span>
              <div className="w-6 h-[1px] bg-[#C08169] mx-auto mt-2 opacity-60"></div>
            </div>

            {/* Emblem / Logo style in the center */}
            <div className="relative text-center z-10 py-4 flex flex-col items-center">
              <span className="text-3xl mb-1 text-[#C08169] opacity-80">🍃</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#2F2B27] tracking-tight leading-tight px-4">
                De Eerste <br />
                <span className="italic text-[#C08169]">Dromen</span>
              </h3>
              <p className="text-[9px] uppercase tracking-wider text-[#798873] font-bold mt-3">Slaapgids 0 t/m 12 maanden</p>
            </div>

            {/* Cover Footer */}
            <div className="relative text-center z-10 mb-6 flex flex-col items-center">
              <div className="w-8 h-[1px] bg-[#DFD9CE] mb-2"></div>
              <p className="text-[8px] uppercase tracking-widest text-[#798873] font-bold">De Babyconsultant</p>
              <p className="text-[7px] text-[#5D5A53] tracking-wide mt-1">Liefde • Rust • Wetenschap</p>
            </div>
            
            {/* Abstract pages look in the card corner */}
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-stone-300 rounded-bl-sm"></div>
          </div>
        </div>

        {/* Right: Pitch & Request form */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
          <span className="text-[11px] uppercase tracking-widest text-[#798873] font-extrabold bg-[#8D9B87]/10 px-4 py-1.5 rounded-full mb-6">
            Gratis Publicatie
          </span>
          
          <h2 className="text-3xl md:text-5xl font-serif text-[#2F2B27] mb-6 leading-tight">
            Ontvang gratis onze <br />
            <span className="italic text-[#C08169]">Slaapgids (0-12m)</span>
          </h2>

          <p className="text-sm md:text-base text-[#5D5A53] leading-relaxed mb-8 max-w-xl">
            Slaaptekort kan voor intensieve dagen en nachten zorgen. In deze handgeschreven e-gids deel ik mijn belangrijkste inzichten om oververmoeidheid tijdig te herkennen, biologische slaapvensters te berekenen en een fijn bedtijdritueel in te stellen.
          </p>

          <div className="w-full max-w-md bg-white p-6 rounded-2xl border border-[#DFD9CE]/60 shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="guide-email-input" className="block text-[11px] uppercase tracking-wider text-[#798873] font-bold mb-2">
                    E-mailadres voor verzending
                  </label>
                  <input
                    id="guide-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="bijvoorbeeld: mama@dromenland.nl"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DFD9CE] rounded-full text-xs text-[#2F2B27] focus:outline-none focus:border-[#C08169] transition-all"
                  />
                  {error && <p className="text-[10px] text-red-500 font-bold mt-1.5">{error}</p>}
                </div>
                
                <button
                  id="guide-submit-btn"
                  type="submit"
                  className="w-full py-3.5 bg-[#8D9B87] hover:bg-[#798873] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-xs"
                >
                  Gids gratis aanvragen
                </button>
                <p className="text-[9px] text-[#798873] text-center italic mt-1 leading-normal">
                  * Je ontvangt de interactieve PDF direct per e-mail. Geen spam.
                </p>
              </form>
            ) : (
              <div className="text-center py-6 animate-fade-in">
                <span className="text-3xl mb-3 block">✉️</span>
                <h4 className="font-serif text-[#2F2B27] text-lg font-medium mb-2">Het dromenboekje is onderweg!</h4>
                <p className="text-xs text-[#5D5A53] leading-relaxed mb-4">
                  Ik heb de Slaapgids 0 t/m 12 maanden verzonden naar jouw mailbox. Controleer eventueel ook je ongewenste e-mail (Spam).
                </p>
                <button
                  id="guide-reset-btn"
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] uppercase font-bold tracking-wider text-[#C08169] hover:opacity-75 transition-opacity"
                >
                  Nog een e-mail verzenden
                </button>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default GuideCoverSection;
