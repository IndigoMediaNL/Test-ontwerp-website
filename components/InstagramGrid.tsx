/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface InstagramPost {
  id: number;
  type: 'quote' | 'image' | 'fact' | 'review';
  text?: string;
  subtext?: string;
  imageUrl?: string;
  backgroundColorClass?: string;
  textColorClass?: string;
  likes: number;
  comments: number;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 1,
    type: 'quote',
    text: '“Slaapassociaties zijn geen misdaad. Het zijn biologische behoeftes naar nabijheid.”',
    subtext: 'Liefdevol slaapcoachen',
    backgroundColorClass: 'bg-[#C08169]',
    textColorClass: 'text-white',
    likes: 247,
    comments: 18
  },
  {
    id: 2,
    type: 'image',
    imageUrl: '/src/assets/images/philosophy_responsive_1781271430241.jpg',
    likes: 312,
    comments: 24
  },
  {
    id: 3,
    type: 'fact',
    text: '“92% van de baby’s slaapt beter bij een voorspelbare, prikkelarme wakkertijd-routine.”',
    subtext: 'Weten over wakkertijden',
    backgroundColorClass: 'bg-[#8D9B87]',
    textColorClass: 'text-white',
    likes: 189,
    comments: 12
  },
  {
    id: 4,
    type: 'image',
    imageUrl: '/src/assets/images/basis_slaapconsult_1781271470791.jpg',
    likes: 420,
    comments: 31
  },
  {
    id: 5,
    type: 'review',
    text: '“Lieve Claudia, dankzij jouw adviezen slaapt Saar eindelijk rustig in haar eigen bedje. Wij hebben onze avonden weer terug!”',
    subtext: '— Mama van Saar (4m)',
    backgroundColorClass: 'bg-[#EBE7E1]',
    textColorClass: 'text-[#2F2B27]',
    likes: 305,
    comments: 15
  },
  {
    id: 6,
    type: 'quote',
    text: '“Is oververmoeidheid eenmaal aanwezig? Dan blokkeert het stresshormoon cortisol de natuurlijke slaap.”',
    subtext: 'Biologie van baby-slaap',
    backgroundColorClass: 'bg-[#FAF8F5]',
    textColorClass: 'text-[#C08169] border border-[#DFD9CE]',
    likes: 277,
    comments: 29
  }
];

const InstagramGrid: React.FC = () => {
  return (
    <section id="instagram" className="py-24 px-6 md:px-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-[#798873] font-bold">Inspiratie &amp; Connectie</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#2F2B27]">
            Volg ons op <span className="italic text-[#C08169]">Instagram</span>
          </h2>
          <p className="text-xs text-[#5D5A53] tracking-wide">
            Dagelijkse baby-adviezen, droomritmes en verhalen. Volg <a href="https://instagram.com" target="_blank" rel="noreferrer" className="underline hover:text-[#C08169] transition-colors">@de.babyconsultant</a>
          </p>

          <a 
            id="insta-follow-btn"
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#2F2B27] border border-[#DFD9CE] py-2.5 px-6 rounded-full hover:bg-stone-100 transition-colors mt-4"
          >
            <span>✨ Volg @de.babyconsultant</span>
          </a>
        </div>

        {/* 3-Column Instagram Feed Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <div 
              id={`insta-post-${post.id}`}
              key={post.id}
              className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xs hover:shadow-md transition-all duration-500 cursor-pointer group flex flex-col justify-between"
            >
              
              {/* Type 1: Image Post */}
              {post.type === 'image' && post.imageUrl ? (
                <img 
                  src={post.imageUrl} 
                  alt="De Babyconsultant Instagram Post" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              ) : (
                /* Type 2: Text / Quote Post */
                <div className={`w-full h-full ${post.backgroundColorClass} ${post.textColorClass} p-8 flex flex-col justify-between items-center text-center`}>
                  <p className="font-serif italic text-lg sm:text-md leading-relaxed my-auto">
                    {post.text}
                  </p>
                  {post.subtext && (
                    <span className="text-[10px] uppercase tracking-wider font-sans font-bold opacity-75">
                      {post.subtext}
                    </span>
                  )}
                </div>
              )}

              {/* Instagram Like/Comment Overlay on Hover */}
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6 text-white text-sm font-semibold rounded-[2rem]">
                <div className="flex items-center gap-1.5">
                  <span>❤️</span> {post.likes}
                </div>
                <div className="flex items-center gap-1.5">
                  <span>💬</span> {post.comments}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default InstagramGrid;
