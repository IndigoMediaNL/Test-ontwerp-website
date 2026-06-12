/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="bg-[#FAF8F5] py-24 px-6 md:px-12 border-t border-[#DFD9CE]/30">
      <div className="max-w-7xl mx-auto col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-6 border-b border-[#EBE7E1]">
            <div>
                <span className="block text-[11px] font-bold uppercase tracking-widest text-[#798873] mb-3">Liefdevolle Kennis</span>
                <h2 className="text-3xl md:text-5xl font-serif text-[#2F2B27]">
                  Slaapadvies <span className="italic text-[#C08169]">&amp; Tips</span>
                </h2>
            </div>
            <p className="max-w-xs text-xs text-[#5D5A53] mt-4 md:mt-0 leading-relaxed">
              Lees onze blogs en ontdek hoe je met biochemie en ritmes op natuurlijke wijze rust in de slaapkamer brengt.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {JOURNAL_ARTICLES.map((article) => (
                <div 
                  id={`article-card-${article.id}`}
                  key={article.id} 
                  className="group cursor-pointer flex flex-col text-left bg-white rounded-bl-[30px] rounded-tr-[30px] border border-[#EBE7E1]/50 shadow-xs hover:shadow-md transition-all duration-500 overflow-hidden" 
                  onClick={() => onArticleClick(article)}
                >
                    <div className="w-full aspect-[16/10] overflow-hidden bg-stone-100">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="p-7 flex flex-col flex-1 text-left">
                        <span className="text-[10px] uppercase tracking-wider text-[#798873] font-bold mb-3 block">{article.date}</span>
                        <h3 className="text-xl font-serif text-[#2F2B27] mb-3 leading-tight group-hover:text-[#C08169] transition-colors duration-300 min-h-[56px] line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs text-[#5D5A53] font-normal leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>
                        
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[#C08169] mt-6 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Lees artikel 
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
