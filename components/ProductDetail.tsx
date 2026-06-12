/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  return (
    <div className="pt-28 min-h-screen bg-[#FAF8F5] animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* Breadcrumb / Back Link */}
        <button 
          id="detail-back-btn"
          onClick={onBack}
          className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#798873] hover:text-[#C08169] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Terug naar Diensten
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Main Image with Asymmetric styling */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="w-full aspect-[4/3] sm:aspect-[16/11] bg-stone-100 rounded-bl-[50px] rounded-tr-[50px] overflow-hidden border border-[#EBE7E1] shadow-xs">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: Details / Pricing / Feature checkout */}
          <div className="lg:col-span-6 flex flex-col justify-start max-w-xl text-left">
             <span className="text-[10px] uppercase font-bold tracking-widest text-[#798873] bg-[#8D9B87]/10 px-3.5 py-1 rounded-full w-fit mb-4">
               {product.category}
             </span>
             
             <h1 className="text-3xl sm:text-4xl font-serif font-medium text-[#2F2B27] leading-tight mb-4">{product.name}</h1>
             <span className="text-2xl font-serif font-semibold text-[#C08169] mb-6 block">€ {product.price}</span>
             
             <div className="text-sm md:text-base text-[#5D5A53] leading-relaxed mb-8 border-b border-[#EBE7E1] pb-8 space-y-4">
               <p className="font-semibold text-[#2F2B27] italic font-sans">{product.tagline}</p>
               <p className="font-normal">{product.longDescription || product.description}</p>
             </div>

             <div className="flex flex-col gap-6">
               <button 
                 id="detail-add-to-cart"
                 onClick={() => onAddToCart(product)}
                 className="w-full py-4 bg-[#8D9B87] hover:bg-[#798873] text-white uppercase tracking-widest text-xs font-bold rounded-full shadow-xs hover:shadow-md transition-all duration-300"
               >
                 In winkelwagen leggen — € {product.price}
               </button>
               
               <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EBE7E1]/50 text-left">
                 <h4 className="text-[10px] uppercase tracking-wider text-[#798873] font-bold mb-3.5">Wat is inbegrepen:</h4>
                 <ul className="space-y-2.5 text-xs text-[#5D5A53] font-sans">
                   {product.features.map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-3">
                       <span className="w-1.5 h-1.5 bg-[#C08169] rounded-full mt-1.5 shrink-0"></span>
                       <span>{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
