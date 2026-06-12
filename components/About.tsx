/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#FAF8F5]">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
        <div className="lg:w-1/3">
          <span className="text-[11px] uppercase tracking-widest text-[#798873] font-bold block mb-4">
            Het Gezicht Achter De Rust
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#2F2B27] leading-tight">
            Met liefde voor <br/>
            <span className="italic text-[#C08169]">de allerkleinsten.</span>
          </h2>
        </div>
        <div className="lg:w-2/3 max-w-2xl">
          <p className="text-md sm:text-lg text-[#5D5A53] font-normal leading-relaxed mb-6">
            Als gediplomeerd HBO kinderverpleegkundige en gecertificeerd babyconsultant zag ik dagelijks op de afdeling kindergeneeskunde hoe direct rust, ritme, voeding en slaap met elkaar verbonden zijn voor een baby – maar vooral ook voor het welzijn van de ouders.
          </p>
          <p className="text-md sm:text-lg text-[#5D5A53] font-normal leading-relaxed mb-8">
            Wanneer een kleintje overmatig huilt, onrustig is met voeding, of de nachten een strijd worden, raakt het hele spectrum van het gezinsleven uit balans. Mijn missie is om jonge ouders te ondersteunen met praktische, medisch-biologische kennis over slaap, voedingsschema\'s, darmkrampjes, babylichaamstaal en de ontwikkeling in het eerste jaar. Ik geloof in verbinding, milde ritmes begrijpen en het creëren van een veilige basis waarin jouw baby rustig kan groeien.
          </p>
          
          <div className="relative w-full h-[450px] rounded-bl-[60px] rounded-tr-[60px] overflow-hidden shadow-md mt-12 bg-stone-100">
            <img 
              src="/src/assets/images/about_kelly_1781271410519.jpg" 
              alt="Babyconsultant Claudia Lemmens" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[10px] uppercase font-bold tracking-widest text-[#798873] mt-4">
            — Claudia Lemmens, Oprichtster De Babyconsultant
          </p>
        </div>
      </div>

      {/* Two Pillars Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto overflow-hidden group bg-stone-200">
           <img 
             src="/src/assets/images/philosophy_responsive_1781271430241.jpg" 
             alt="Responsief Ouderschap - Slaaprituelen" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-103"
             referrerPolicy="no-referrer"
           />
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#FAF8F5] border-t border-b lg:border-t-0 lg:border-l border-[#EBE7E1]/60">
           <span className="text-[11px] font-bold uppercase tracking-widest text-[#798873] mb-4">Mijn Filosofie</span>
           <h3 className="text-2xl md:text-4xl font-serif mb-6 text-[#2F2B27] leading-tight">
             Geen strijd, <br/>
             <span className="italic text-[#C08169]">maar rustige verbinding.</span>
           </h3>
           <p className="text-sm md:text-base text-[#5D5A53] leading-relaxed mb-8">
             Klassieke slaaptrainingen dwingen baby\'s om stil te zijn via stress. Mijn adviezen richten zich juist op de biologie en neurologie van de baby. We optimaliseren de voedingstijden en wakkertijden overdag om stresshormonen af te breken. Het kindje valt daardoor veel gemakkelijker in slaap doordat zijn lichaam er klaar voor is.
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#EBE7E1]/50 text-[#2F2B27]">
           <span className="text-[11px] font-bold uppercase tracking-widest text-[#798873] mb-4">Medische achtergrond</span>
           <h3 className="text-2xl md:text-4xl font-serif mb-6 text-[#2F2B27] leading-tight">
             Waarom een verpleegkundige <br/>
             <span className="italic text-[#C08169]">het verschil maakt.</span>
           </h3>
           <p className="text-sm md:text-base text-[#5D5A53] leading-relaxed mb-8">
             Als kinderverpleegkundige kijk ik verder dan alleen de klok. Ik herken de alarmsignalen van stille reflux, koemelkallergie of fysieke onrust. Soms ligt de oorzaak van het weinige slapen op een medisch vlak. Dankzij mijn medische diploma\'s kunnen we deze factoren herkennen en indien nodig gericht doorverwijzen naar de huisarts of kinderarts.
           </p>
        </div>
        <div className="relative h-[400px] lg:h-auto overflow-hidden group bg-stone-200">
           <img 
             src="/src/assets/images/medical_difference_1781271447126.jpg" 
             alt="Warm comfort in de babykamer met medische achtergrond" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-103 shadow-inner"
             referrerPolicy="no-referrer"
           />
        </div>
      </div>
    </section>
  );
};

export default About;
