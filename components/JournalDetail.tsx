/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] animate-fade-in-up pb-24">
       {/* Hero Image for Article */}
       <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden bg-stone-100 border-b border-[#EBE7E1]">
          <img 
             src={article.image} 
             alt={article.title} 
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
       </div>

       <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-10">
          <div className="bg-white p-8 md:p-16 rounded-bl-[40px] rounded-tr-[40px] border border-[#EBE7E1] shadow-md">
             
             {/* Header and Back navigation */}
             <div className="flex justify-between items-center mb-10 border-b border-[#EBE7E1] pb-6">
                <button 
                  id="journal-detail-back-btn"
                  onClick={onBack}
                  className="group flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#798873] hover:text-[#C08169] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Terug naar Slaaptips
                </button>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#798873]">{article.date}</span>
             </div>

             {/* Title */}
             <h1 className="text-3xl md:text-5xl font-serif text-[#2F2B27] mb-8 leading-tight text-center">
               {article.title}
             </h1>

             {/* Excerpt */}
             <p className="text-sm font-sans italic text-[#798873] mb-10 text-center max-w-2xl mx-auto border-l-2 border-[#C08169]/40 pl-4 py-1.5">
               "{article.excerpt}"
             </p>

             {/* Article Content with nice typography rendering */}
             <div className="prose prose-stone max-w-none text-sm md:text-base leading-relaxed text-[#5D5A53] space-y-6">
                {article.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={index} className="text-lg md:text-xl font-serif font-semibold text-[#2F2B27] pt-4 mt-6">
                        {paragraph.replace('###', '').trim()}
                      </h3>
                    );
                  }
                  return (
                    <p key={index} className="font-normal text-justify">
                      {paragraph.trim()}
                    </p>
                  );
                })}
             </div>
             
             {/* Brand Emblem Sign-off */}
             <div className="mt-16 pt-8 border-t border-[#EBE7E1] flex flex-col items-center">
                  <span className="text-xl mb-1 text-[#C08169] opacity-80">🍃</span>
                  <span className="text-sm font-serif italic text-[#2F2B27]">De Babyconsultant</span>
                  <p className="text-[9px] uppercase tracking-widest text-[#798873] font-bold mt-1">Liefdevolle &amp; professionele slaapcoach</p>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;
