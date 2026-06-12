/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Basis Baby & Slaapconsult',
    tagline: 'Liefdevolle rust & ritme binnen handbereik.',
    description: 'Een brede analyse van het dagschema, slaap, voeding en ritme van jouw baby, inclusief een persoonlijk plan op maat.',
    longDescription: 'Heeft jouw baby moeite met rust vinden, slapen, of is er onrust rond voeding en krampjes? Met het Basis Baby & Slaapconsult brengen we de rust stap voor stap terug. We starten met een uitgebreide online intake-vragenlijst over ritme, slaap, voeding en baby-signalen. Ik analyseer deze factoren grondig en we plannen een telefonisch- of adviesgesprek van 60 minuten. Binnen 48 uur na ons gesprek ontvang je een liefdevol en gepersonaliseerd Rust & Ritme Plan op maat.',
    price: 149,
    category: 'Consult',
    imageUrl: '/src/assets/images/basis_slaapconsult_1781271470791.jpg',
    gallery: [
      '/src/assets/images/basis_slaapconsult_1781271470791.jpg',
      '/src/assets/images/philosophy_responsive_1781271430241.jpg'
    ],
    features: ['Grondige intake over slaap, voeding & ritme', '60 minuten videobellen of telefoon', 'Gepersonaliseerd Rust & Ritme Plan (PDF)', 'Focus op responsief & liefdevol ouderschap']
  },
  {
    id: 'p2',
    name: 'Rust & Ritme Traject Intensief',
    tagline: 'Samen stap voor stap naar rust en dromen.',
    description: 'Onze meest gekozen coaching. Volledige begeleiding voor slaap, voeding, baby-signalen en milde ritmes, incl. 2 weken WhatsApp support.',
    longDescription: 'Hulp bij huilen, onrust en ritme vraagt tijd, troost en liefdevolle nabijheid. In dit twee weken durende intensieve traject sta ik dagelijks aan jouw zijde om je te coachen, gerust te stellen en te adviseren waar nodig. We optimaliseren de voedingstijden, wakkertijden en de maandelijkse ontwikkeling van je baby. Slaapdagboeken nemen we dagelijks live door via WhatsApp-support om direct te kunnen sturen. Perfect voor ouders die verlangen naar een professionele en vertrouwde gids.',
    price: 299,
    category: 'Coaching',
    imageUrl: '/src/assets/images/droomtraject_intensief_1781271486884.jpg',
    gallery: [
      '/src/assets/images/droomtraject_intensief_1781271486884.jpg',
      '/src/assets/images/about_kelly_1781271410519.jpg'
    ],
    features: ['Gepersonaliseerd Rust & Ritme Plan op maat', '14 dagen dagelijkse coaching & WhatsApp-support', '2x extra telefonisch evaluatiegesprek', 'Advies bij regressies, darmkrampjes en voeding']
  },
  {
    id: 'p3',
    name: 'Telefonisch Rust & Ritme Consult',
    tagline: 'Directe hulp bij acute babyvragen.',
    description: 'Een gericht telefonisch adviesgesprek van 45 minuten om antwoord te krijgen op specifieke baby slaap-, voedings- of ritmevragen.',
    longDescription: 'Soms heb je geen behoefte aan een uitgebreid traject, maar wil je gewoon sparren met een ervaren babyconsultant en verpleegkundige. Tijdens dit gerichte gesprek van 45 minuten bespreken we jouw specifieke situatie. Ik geef je concrete antwoorden over wakkertijden, krampjes, het afbouwen van inbakeren, voedingsintervallen of hoe je de dagindeling het beste kunt structureren. Snel te boeken en onmiddellijk toe te passen.',
    price: 79,
    category: 'Consult',
    imageUrl: '/src/assets/images/telefonisch_consult_1781271504154.jpg',
    gallery: [
      '/src/assets/images/telefonisch_consult_1781271504154.jpg'
    ],
    features: ['45 minuten 1-op-1 telefonisch advies', 'Direct advies bij krampjes, signalen of voeding', 'Focus op slaapsignaaltjes & biologische klok', 'Geschikt voor baby’s en peuters (0-3 jaar)']
  },
  {
    id: 'p4',
    name: 'Gids: Rust, Voeding & Slaap (0-12m)',
    tagline: 'Jouw digitale handleiding voor het eerste jaar.',
    description: 'Een prachtig vormgegeven e-book boordevol milde adviezen, biologische ritmes, voedingstips, de maandelijke babyontwikkeling en signalen.',
    longDescription: 'Jouw ultieme naslagwerk voor het turbulente eerste jaar met jouw baby. Geen rigide regels, maar zachte en wetenschappelijk onderbouwde handvatten over biologische slaapdruk, voedingstijden en de emotionele en motorische ontwikkeling per maand. Leer hoe je baby-lichaamstaal herkent, hoe je oververmoeidheid voorkomt, en hoe je een voorspelbaar dagschema opbouwt. Inclusief schema’s per maand (0 t/m 12 maanden).',
    price: 29,
    category: 'Gids',
    imageUrl: '/src/assets/images/slaapgids_1781271518929.jpg',
    gallery: [
      '/src/assets/images/slaapgids_1781271518929.jpg'
    ],
    features: ['Slaap- & voedingsritmes t/m 12 maanden', 'Uitleg over lichaamstaal & baby-signalen', 'Stappenplan voor ontspannen in slaap vallen', 'Direct te downloaden als interactieve PDF']
  },
  {
    id: 'p5',
    name: 'Consult aan Huis (Thuisbezoek)',
    tagline: 'Persoonlijke rustanalyse in de eigen omgeving.',
    description: 'Een huisbezoek van 2 uur waarbij we voeden, slapen en kalmeren bekijken, babylichaamstaal observeren en samen een fijn ritme creëren.',
    longDescription: 'De vertrouwde thuisomgeving van je baby is ontzettend bepalend voor de rust. Tijdens dit exclusieve huisbezoek kom ik bij jullie thuis. We analyseren de inrichting en prikkels van de babykamer, maar kijken ook mee bij een voeding, het kalmeren of het inslaapritueel van een middagdutje. Ik observeer darmkrampjes, inbakeren of troostbehoeften en geef direct praktische, verpleegkundige coaching. Een ontzettend rustgevende ervaring.',
    price: 249,
    category: 'Coaching',
    imageUrl: '/src/assets/images/consult_aan_huis_1781271535508.jpg',
    gallery: [
      '/src/assets/images/consult_aan_huis_1781271535508.jpg',
      '/src/assets/images/medical_difference_1781271447126.jpg'
    ],
    features: ['2 uur observatie, voeding- & advies aan huis', 'Lichaamstaal, signalen & troosten observeren', 'Oefenen met kalmerings- of baby-sustechnieken', 'Inclusief Rust & Ritme Plan + 1 week WhatsApp nazorg']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: "Waarom hazenslaapjes normaal zijn (en hoe ze langer worden)",
    date: "12 mei 2026",
    excerpt: "Dutjes van precies 30 of 45 minuten? Ontdek hoe slaapcycli bij een baby werken en hoe je ze zachtjes kunt verbinden.",
    image: "/src/assets/images/journal_hazenslaapjes_1781271558705.jpg",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-[#5D5A53] leading-relaxed" },
        "Het is een veelvoorkomend patroon: je legt je baby slaperig in zijn bedje, hij valt rustig in slaap, maar na exact 30 of 45 minuten gaan die oogjes wijd open. Dit fenomeen noemen we hazenslaapjes. Voor jonge baby's is dit biologisch gezien heel verklaarbaar, maar voor ouders kan het behoorlijk uitputtend zijn."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Een slaapcyclus van een baby tot ongeveer 6 maanden duurt namelijk precies 45 minuten. Aan het einde van die cyclus komt je baby in een lichte slaapfase en controleert hij intuïtief zijn omgeving. Als er iets is veranderd ten opzichte van het moment van inslapen (is de speen uit, of is mama ineens niet meer in de kamer?), wordt hij volledig wakker."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-[#C08169] pl-6 italic text-xl text-[#3C3833] my-10 font-serif" },
        "\"Het verbinden van slaapcycli is een vaardigheid die groeit door biologische rijpheid, rustige associaties en veel geduld.\""
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Om hazenslaapjes langer te maken, kunnen we sturen op 'responsief wachten' of 'shushing' direct voor de overgangsfase rond 35 minuten. Zo help je jouw kleintje de brug te slaan naar de volgende cyclus."
      )
    )
  },
  {
    id: 2,
    title: "De Magie van Wakkertijden per Leeftijd",
    date: "28 april 2026",
    excerpt: "Het perfecte moment vinden om je baby in bed te leggen is als een dans. Leer de wakkertijd van je baby begrijpen.",
    image: "/src/assets/images/journal_wakkertijden_1781271574717.jpg",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed animate-fade-in" },
        "Ben je wel eens uren bezig geweest om een huilende, vermoeide baby in slaap te sussen? Grote kans dat je baby al overprikkeld of oververmoeid was overgedragen aan his bedje. Bij baby's bouwt slaapdruk zich veel sneller op dan bij volwassenen. Dit maakt de 'wakkertijd' cruciaal."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Wakkertijd is de maximale tijd dat een baby comfortabel wakker kan zijn tussen twee slaapjes in. Leg je je baby te vroeg neer, dan is er onvoldoende slaapdruk. Leg je hem te laat neer, dan maakt zijn lichaam cortisol en adrenaline aan. Dit stresshormoon blokkeert de aanmaak van melatonine (het slaaphormoon), waardoor inslapen plotseling heel moeilijk wordt."
      ),
      React.createElement("div", { className: "my-12 p-8 bg-[#FAF8F5] rounded-3xl border border-[#EBE7E1] font-sans text-[#3C3833]" },
        React.createElement("h4", { className: "font-serif text-lg font-medium mb-4 text-[#C08169]" }, "Spelregels voor wakkertijden:"),
        React.createElement("ul", { className: "space-y-2 text-[#5D5A53]" },
          React.createElement("li", null, "• 0 - 6 weken: 45 / 60 minuten wakkertijd"),
          React.createElement("li", null, "• 3 - 4 maanden: 1,5 tot 2 uur wakkertijd"),
          React.createElement("li", null, "• 6 - 8 maanden: 2 tot 2,5 uur wakkertijd"),
          React.createElement("li", null, "• 9 - 12 maanden: 3 tot 4 uur wakkertijd")
        )
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Kijk altijd naar de unieke slaapsignalen van jouw kindje, zoals gapen, glansloze oogjes, of rode oortjes, in combinatie met deze richtlijnen."
      )
    )
  },
  {
    id: 3,
    title: "Rustige avonden: Een prikkelarm bedtijdritueel",
    date: "15 maart 2026",
    excerpt: "Hoe je een voorspelbare en kalmerende overgang creëert van de drukke dag naar een diepe, ontspannen slaap.",
    image: "/src/assets/images/journal_bedtijdritueel_1781271595203.jpg",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Een bedtijdritueel is niet zomaar een opeenvolging van handelingen als wassen, omkleden en voeden. Het is het belangrijkste signaal voor de hersenen van je baby dat de actieve dag voorbij is en de herstelfase aanbreekt. Hoe meer ontspannen en voorspelbaar dit ritueel verloopt, hoe sneller je baby zich overgrijpt aan de overgang naar de nacht."
      ),
      React.createElement("p", { className: "mb-6 text-[#5D5A53] leading-relaxed" },
        "Begin 30 minuten voor bedtijd al met het dimmen van de lichten in de huiskamer. Zet harde geluiden uit en spreek op een zachtere, lagere toon. Hiermee stimuleer je op natuurlijke wijze de melatonine-aanmaak."
      ),
      React.createElement("div", { className: "my-12 p-8 bg-[#8D9B87]/10 text-[#3C3833] rounded-3xl border border-[#8D9B87]/20 font-serif italic text-center" },
        React.createElement("p", { className: "mb-2" }, "Lampjes uit, de avond zacht,"),
        React.createElement("p", { className: "mb-2" }, "We sluiten de dag heel rustig af."),
        React.createElement("p", null, "Een kus, een knuffel, en slaap zacht.")
      )
    )
  }
];

export const BRAND_NAME = 'De Babyconsultant';
export const BRAND_TAGLINE = 'voor rust, voeding, slaap en begeleiding';
export const PRIMARY_COLOR = 'slate-900'; 
export const ACCENT_COLOR = 'stone-500';
