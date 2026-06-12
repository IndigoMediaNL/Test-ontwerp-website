/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  const scrollToId = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[#FAF8F5] pt-28 pb-16 px-6 overflow-hidden flex items-center">
      {/* Abstract warm organic blobs in the background for a soft vibe */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8D9B87]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-[#C08169]/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Brand Statement & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left animate-fade-in-up">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#798873] bg-[#8D9B87]/10 px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#8D9B87] rounded-full animate-pulse"></span>
            Gecertificeerd Babyconsultant & Slaapcoach
          </span>

          {/* Majestic Typography, beautiful serif pairing */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-normal text-[#2F2B27] tracking-tight leading-[1.1] mb-6">
            Voor meer <span className="italic text-[#C08169]">rust</span>, <br />
            warm ritme &amp; balans.
          </h1>

          <p className="max-w-xl text-base md:text-lg text-[#5D5A53] leading-relaxed mb-10 font-normal">
            Als gediplomeerd kinderverpleegkundige en babyconsultant help ik jonge gezinnen rust en ritme te vinden. Samen kijken we met een milde, respectvolle blik naar <strong>slaap, voeding, baby-signalen en de ontwikkeling</strong> in het eerste jaar.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button 
              id="hero-cta-primary"
              onClick={() => scrollToId('products')}
              className="px-8 py-3.5 bg-[#C08169] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#b0735b] transition-all duration-300 shadow-xs hover:shadow-md text-center"
            >
              Bekijk onze diensten
            </button>
            <button 
              id="hero-cta-secondary"
              onClick={() => scrollToId('booking')}
              className="px-8 py-3.5 bg-[#FAF8F5] text-[#2F2B27] border border-[#DFD9CE] text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#EBE7E1]/30 transition-all duration-300 text-center"
            >
              Vrijblijvend Kennismaken
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-[#EBE7E1]/80 w-full grid grid-cols-3 gap-4">
            <div>
              <p className="text-2xl font-serif italic text-[#C08169] font-medium">100%</p>
              <p className="text-[10px] uppercase tracking-wider text-[#798873] font-bold mt-1">Liefdevolle methode</p>
            </div>
            <div>
              <p className="text-2xl font-serif italic text-[#2F2B27] font-medium">150+</p>
              <p className="text-[10px] uppercase tracking-wider text-[#798873] font-bold mt-1">Gezinnen herenigd</p>
            </div>
            <div>
              <p className="text-2xl font-serif italic text-[#798873] font-medium">HBO</p>
              <p className="text-[10px] uppercase tracking-wider text-[#798873] font-bold mt-1">Gediplomeerd verpleegkundige</p>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Archetype & Live Stats Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[500px] sm:h-[580px] w-full">
          {/* Subtle circle shape in background */}
          <div className="absolute inset-4 rounded-full border border-[#DFD9CE]/60 -z-10 bg-[#FAF8F5]"></div>
          
          {/* The visual Arch (Boog) displaying sleeping baby */}
          <div className="w-full max-w-[360px] h-full rounded-t-full overflow-hidden border-8 border-white shadow-xl relative transition-transform duration-500 hover:scale-[1.01] bg-stone-100">
            <img 
              src="/src/assets/images/hero_baby_consultant_1781271392702.jpg" 
              alt="Te dromen baby in een liefdevol ingericht warm bedje" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Soft gradient bottom darkener for text clarity if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent"></div>
          </div>

          {/* Floating Organic Tip Widget */}
          <div className="absolute bottom-12 -left-6 sm:-left-12 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#EBE7E1]/50 max-w-[220px] transition-all duration-300 hover:translate-y-[-5px]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C08169]"></span>
              <p className="text-[9px] uppercase tracking-widest font-bold text-[#C08169]">Baby gids preview</p>
            </div>
            <p className="text-sm font-serif italic text-[#2F2B27] leading-tight mb-2">
              "Bedtijdrituelen duren idealiter exact 20 tot 30 minuten."
            </p>
            <p className="text-[10px] text-[#798873] font-medium">— Claudia, De Babyconsultant</p>
          </div>

          {/* Floating badge for warm security indicators */}
          <div className="absolute top-16 -right-6 bg-white py-3 px-5 rounded-full shadow-md border border-[#EBE7E1]/30 flex items-center gap-2.5">
            <span className="text-xl">💤</span>
            <div className="text-left">
              <p className="text-[8px] uppercase tracking-wider font-bold text-[#798873] leading-none">Mijn Missie</p>
              <p className="text-xs font-serif text-[#2F2B27] font-medium">Rust in de babykamer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
