/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      id={`product-card-${product.id}`}
      className="group flex flex-col h-full bg-white rounded-bl-[40px] rounded-tr-[40px] border border-[#EBE7E1]/50 overflow-hidden shadow-xs hover:shadow-md transition-all duration-500 cursor-pointer" 
      onClick={() => onClick(product)}
    >
      {/* Product Image Stage */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#FAF8F5]">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Category Badge on Top Left */}
        <span className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-md text-[#798873] border border-[#8D9B87]/20 text-[9px] uppercase tracking-widest font-extrabold py-1 px-3.5 rounded-full shadow-xs">
          {product.category}
        </span>
      </div>

      {/* Product Information Body */}
      <div className="p-8 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-serif font-medium text-[#2F2B27] group-hover:text-[#C08169] transition-colors duration-300 min-h-[56px] leading-tight mb-2">
          {product.name}
        </h3>
        
        <p className="text-xs text-[#798873] italic tracking-wide font-sans mb-4 min-h-[32px] overflow-hidden line-clamp-2">
          {product.tagline}
        </p>

        <p className="text-xs text-[#5D5A53] leading-relaxed mb-6 font-normal line-clamp-3">
          {product.description}
        </p>

        {/* Bullet previews */}
        <div className="mt-auto border-t border-[#EBE7E1]/60 pt-5 mb-6">
          <ul className="space-y-1.5 text-[11px] text-[#5D5A53] font-medium font-sans">
            {product.features.slice(0, 2).map((feature, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#8D9B87]"></span>
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing / CTA Row */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#798873] font-bold block leading-none">Vanaf</span>
            <span className="text-lg font-serif font-semibold text-[#2F2B27]">€ {product.price}</span>
          </div>
          
          <span className="text-[10px] uppercase font-bold tracking-widest text-white bg-[#8D9B87] group-hover:bg-[#C08169] transition-colors duration-300 py-2.5 px-5 rounded-full shadow-xs">
            Bekijk &amp; Boek
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
