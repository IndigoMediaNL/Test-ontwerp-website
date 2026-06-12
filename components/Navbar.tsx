/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onOpenCart();
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled || mobileMenuOpen 
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md py-3 shadow-xs border-b border-[#EBE7E1]/50' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with delicate aesthetic accent */}
          <a 
            id="nav-logo"
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavClick(e, '');
            }}
            className="flex flex-col items-start gap-0.5 group z-50"
          >
            <span className="text-2xl font-serif italic font-medium tracking-wide text-[#2F2B27] group-hover:text-[#C08169] transition-colors duration-300">
              {BRAND_NAME}
            </span>
            <span className="text-[9px] uppercase tracking-widest font-sans font-medium text-[#798873]">
              {BRAND_TAGLINE}
            </span>
          </a>
          
          {/* Center Links - Desktop */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-[#2F2B27]">
            <a 
              id="link-home"
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="hover:text-[#C08169] transition-colors duration-300"
            >
              Home
            </a>
            <a 
              id="link-parents"
              href="#parents" 
              onClick={(e) => handleLinkClick(e, 'products')} 
              className="hover:text-[#C08169] transition-colors duration-300"
            >
              Voor ouders
            </a>
            <a 
              id="link-organisaties"
              href="#organisaties" 
              onClick={(e) => handleLinkClick(e, 'organisaties')} 
              className="hover:text-[#C08169] transition-colors duration-300"
            >
              Organisaties
            </a>
            <a 
              id="link-kennis"
              href="#journal" 
              onClick={(e) => handleLinkClick(e, 'journal')} 
              className="hover:text-[#C08169] transition-colors duration-300"
            >
              Kennis &amp; inspiratie
            </a>
            <a 
              id="link-about"
              href="#about" 
              onClick={(e) => handleLinkClick(e, 'about')} 
              className="hover:text-[#C08169] transition-colors duration-300"
            >
              Over mij
            </a>
            <a 
              id="link-contact"
              href="#booking"
              onClick={(e) => handleLinkClick(e, 'booking')}
              className="hover:text-[#C08169] transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Right Actions - Shopping cart bag icon & CTA */}
          <div className="flex items-center gap-4 z-50">
            <button 
              id="cart-trigger-btn"
              onClick={handleCartClick}
              className="relative flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#2F2B27] hover:text-[#C08169] transition-colors duration-300 py-2.5 px-3.5 rounded-full hover:bg-[#8D9B87]/5"
              aria-label="Winkelwagen openen"
            >
              <ShoppingBag className="w-4 h-4 text-[#2F2B27]" />
              <span>({cartCount})</span>
            </button>
            <a 
              id="nav-cta-btn"
              href="#booking"
              onClick={(e) => handleLinkClick(e, 'booking')}
              className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-widest text-white bg-[#C08169] hover:bg-[#b0735b] transition-all duration-300 py-2.5 px-6 rounded-full shadow-xs"
            >
              Gratis Kennismaking
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              id="mobile-menu-toggle"
              className="block md:hidden focus:outline-none text-[#2F2B27] hover:text-[#C08169] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu openen"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with beautiful staggered list */}
      <div 
        className={`fixed inset-0 bg-[#FAF8F5] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 text-lg font-serif">
          <a href="#" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-[#2F2B27] hover:text-[#C08169] italic transition-colors">Home</a>
          <a href="#parents" onClick={(e) => handleLinkClick(e, 'products')} className="text-[#2F2B27] hover:text-[#C08169] italic transition-colors">Voor ouders</a>
          <a href="#organisaties" onClick={(e) => handleLinkClick(e, 'organisaties')} className="text-[#2F2B27] hover:text-[#C08169] italic transition-colors">Organisaties</a>
          <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="text-[#2F2B27] hover:text-[#C08169] italic transition-colors">Kennis &amp; inspiratie</a>
          <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-[#2F2B27] hover:text-[#C08169] italic transition-colors">Over mij</a>
          <a href="#booking" onClick={(e) => handleLinkClick(e, 'booking')} className="text-[#2F2B27] hover:text-[#C08169] italic transition-colors">Contact</a>
          
          <button 
            id="mobile-cart-btn"
            onClick={handleCartClick} 
            className="hover:text-[#C08169] text-xs uppercase tracking-widest font-sans font-bold text-[#798873] border-t border-[#EBE7E1] pt-6 mt-4 w-40 text-center flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4 text-[#798873]" />
            Winkelwagen ({cartCount})
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
