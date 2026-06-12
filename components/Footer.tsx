/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <footer className="bg-[#FAF8F5] pt-24 pb-12 px-6 text-[#5D5A53] border-t border-[#DFD9CE]/70 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl bg-[#FAF8F5] px-4 text-[#8D9B87] opacity-80 select-none">🕊️</div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Branding & Mission */}
        <div className="md:col-span-4 flex flex-col justify-start text-left">
          <h4 className="text-2xl font-serif text-[#2F2B27] mb-4">De Babyconsultant</h4>
          <p className="text-xs font-normal leading-relaxed text-[#5D5A53]">
            Liefdevolle, responsieve begeleiding bij slaap-, ritme- en voedingsvragen. Gebaseerd op gedegen verpleegkundige expertise en biologische slaapwetenschap.
          </p>
          <div className="mt-6 space-y-1 text-[11px] text-[#798873]">
            <p><strong>KvK-nummer:</strong> 82345678</p>
            <p><strong>BIG-nummer:</strong> 49012345678 (Verpleegkunde)</p>
          </div>
        </div>

        {/* Column 1: Navigation */}
        <div className="md:col-span-2 text-left">
          <h4 className="font-bold text-[#2F2B27] mb-6 tracking-widest text-[11px] uppercase">Navigatie</h4>
          <ul className="space-y-4 font-sans text-xs">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#C08169] transition-colors">Diensten</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#C08169] transition-colors">Over mij</a></li>
            <li><a href="#guides" onClick={(e) => onLinkClick(e, 'guides')} className="hover:text-[#C08169] transition-colors">Gratis Gids</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#C08169] transition-colors font-semibold">Kennis &amp; inspiratie</a></li>
          </ul>
        </div>
        
        {/* Column 2: Tarieven */}
        <div className="md:col-span-2 text-left">
          <h4 className="font-bold text-[#2F2B27] mb-6 tracking-widest text-[11px] uppercase">Diensten</h4>
          <ul className="space-y-4 font-sans text-xs">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#C08169] transition-colors">Basis Slaapconsult</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#C08169] transition-colors font-semibold text-[#C08169]">Droomtraject Intensief</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#C08169] transition-colors">Telefonisch Advies</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#C08169] transition-colors">Consult aan Huis</a></li>
          </ul>
        </div>

        {/* Column 3: Newsletter SignUp */}
        <div className="md:col-span-4 text-left">
          <h4 className="font-bold text-[#2F2B27] mb-6 tracking-widest text-[11px] uppercase">Nieuwsbrief ontvangen?</h4>
          <p className="text-xs text-[#5D5A53] mb-4">
            Meld je aan voor onze tweewekelijkse e-mail boordevol respectvol advies over ritme, voeding, baby-signalen en de ontwikkeling.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input 
              id="newsletter-email-input"
              type="email" 
              placeholder="e-mailadres" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-white border border-[#DFD9CE] py-2 px-4 rounded-full text-xs outline-none focus:border-[#C08169] transition-colors placeholder-[#798873]/50 text-[#2F2B27] flex-grow disabled:opacity-50" 
              required
            />
            <button 
              id="newsletter-submit-btn"
              type="submit"
              disabled={subscribeStatus !== 'idle' || !email}
              className="text-[10px] font-bold uppercase tracking-widest bg-[#C08169] text-white py-2 px-5 rounded-full hover:bg-[#b0735b] transition-all disabled:opacity-50"
            >
              {subscribeStatus === 'idle' && 'Inschrijven'}
              {subscribeStatus === 'loading' && 'Laden...'}
              {subscribeStatus === 'success' && 'Gelukt!'}
            </button>
          </form>
          {subscribeStatus === 'success' && (
            <p className="text-[11px] text-[#798873] font-medium mt-2 animate-fade-in">Liefs! Welkom bij onze nieuwsbrief.</p>
          )}
        </div>
      </div>

      {/* Footer Bottom copyright and developer credit */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#EBE7E1] flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[#798873] font-bold gap-4">
        <p>© 2026 De Babyconsultant. Gerealiseerd door De Babyconsultant.</p>
        <p>Liefdevol, medisch en biologisch gecertificeerd.</p>
      </div>
    </footer>
  );
};

export default Footer;
