import React from 'react';

const Organisaties: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('booking');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="organisaties" className="py-24 px-6 md:px-12 bg-[#EBE7E1]/30 border-t border-b border-[#DFD9CE]/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-[#798873] font-extrabold bg-[#8D9B87]/10 px-4 py-1.5 rounded-full inline-block">
            Voor Organisaties &amp; Professionals
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#2F2B27] leading-tight">
            Samenwerken aan een <br />
            <span className="italic text-[#C08169]">ontspannen basis</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5D5A53] leading-relaxed">
            Als gediplomeerd HBO kinderverpleegkundige en babyconsultant adviseer en train ik professionals binnen de kinderopvang, kraamzorg, jeugdgezondheidszorg en bedrijven. Van interactieve workshops tot inspirerende webinars.
          </p>
        </div>

        {/* 3-Column Bento/Grid Layout for Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          
          {/* Card 1: Kinderopvang */}
          <div className="bg-white p-8 rounded-bl-[40px] rounded-tr-[40px] border border-[#EBE7E1]/60 shadow-xs flex flex-col justify-between h-full group hover:shadow-md transition-all duration-300">
            <div>
              <div className="text-3xl mb-4 text-[#8D9B87]">🧸</div>
              <h3 className="font-serif text-[#2F2B27] text-xl font-medium mb-3">Kinderopvang &amp; PM\'ers</h3>
              <p className="text-xs text-[#5D5A53] leading-relaxed mb-6">
                Gerichte Scholing en training over wakkertijden, overprikkeling signalen, slaapomgevingen en responsieve troosttechnieken. Zorg voor rust en stabiliteit op de babygroep.
              </p>
            </div>
            <ul className="space-y-2 text-[11px] text-[#798873] border-t border-[#EBE7E1]/50 pt-4 mb-4">
              <li className="flex items-center gap-2">✔ Workshops op locatie</li>
              <li className="flex items-center gap-2">✔ Slaapprotocollen advies</li>
            </ul>
          </div>

          {/* Card 2: Kraamzorg & Verlossing */}
          <div className="bg-white p-8 rounded-bl-[40px] rounded-tr-[40px] border border-[#EBE7E1]/60 shadow-xs flex flex-col justify-between h-full group hover:shadow-md transition-all duration-300">
            <div>
              <div className="text-3xl mb-4 text-[#C08169]">🌸</div>
              <h3 className="font-serif text-[#2F2B27] text-xl font-medium mb-3">Kraamzorg &amp; Geboortezorg</h3>
              <p className="text-xs text-[#5D5A53] leading-relaxed mb-6">
                Versterk de overdracht met actuele, milde en biologisch onderbouwde adviezen over de eerste weken. Help jonge ouders direct vanaf de geboorte oververmoeidheid te voorkomen.
              </p>
            </div>
            <ul className="space-y-2 text-[11px] text-[#798873] border-t border-[#EBE7E1]/50 pt-4 mb-4">
              <li className="flex items-center gap-2">✔ Gastcolleges &amp; Webinars</li>
              <li className="flex items-center gap-2">✔ Deskundigheidsbevordering</li>
            </ul>
          </div>

          {/* Card 3: Bedrijven & Ouderschap */}
          <div className="bg-white p-8 rounded-bl-[40px] rounded-tr-[40px] border border-[#EBE7E1]/60 shadow-xs flex flex-col justify-between h-full group hover:shadow-md transition-all duration-300">
            <div>
              <div className="text-3xl mb-4 text-[#798873]">💼</div>
              <h3 className="font-serif text-[#2F2B27] text-xl font-medium mb-3">Zakelijk &amp; Corporate Wellness</h3>
              <p className="text-xs text-[#5D5A53] leading-relaxed mb-6">
                Werken en een baby opvoeden kan pittig zijn. Ondersteun jonge werkende ouders binnen uw organisatie met lunch-and-learn sessies of exclusieve consult-pakketten om verzuim te minimaliseren.
              </p>
            </div>
            <ul className="space-y-2 text-[11px] text-[#798873] border-t border-[#EBE7E1]/50 pt-4 mb-4">
              <li className="flex items-center gap-2">✔ Corporate Webinars</li>
              <li className="flex items-center gap-2">✔ Exclusieve medewerker deals</li>
            </ul>
          </div>

        </div>

        {/* Dynamic CTA Banner */}
        <div className="bg-white p-8 md:p-12 rounded-bl-[60px] rounded-tr-[60px] border border-[#DFD9CE]/60 flex flex-col md:flex-row items-center justify-between text-left gap-8">
          <div>
            <h3 className="font-serif text-[#2F2B27] text-2xl md:text-3xl mb-2">Interesse in een programma op maat?</h3>
            <p className="text-xs text-[#5D5A53] max-w-xl leading-relaxed">
              We bespreken graag jullie wensen en uitdagingen om een programma op maat samen te stellen (webinar, ouderavond of daglicentie). Neem direct vrijblijvend contact op.
            </p>
          </div>
          <button
            id="organizaties-contact-btn"
            onClick={scrollToContact}
            className="px-8 py-3.5 bg-[#C08169] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#b0735b] transition-all duration-300 shadow-xs hover:shadow-md whitespace-nowrap"
          >
            Samenwerking bespreken
          </button>
        </div>

      </div>
    </section>
  );
};

export default Organisaties;
