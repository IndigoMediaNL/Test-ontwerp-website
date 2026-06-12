/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

const categories = ['Alles', 'Consult', 'Coaching', 'Gids'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('Alles');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Alles') return PRODUCTS;
    const catMap: { [key: string]: string } = {
      'Alles': 'Alles',
      'Consult': 'Consult',
      'Coaching': 'Coaching',
      'Gids': 'Gids'
    };
    return PRODUCTS.filter(p => p.category === catMap[activeCategory]);
  }, [activeCategory]);

  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#DFD9CE]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-[#798873] font-extrabold bg-[#8D9B87]/10 px-4 py-1.5 rounded-full">
            Professionele Begeleiding
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#2F2B27]">
            Diensten &amp; <span className="italic text-[#C08169]">Slaapopties</span>
          </h2>
          <p className="max-w-xl text-[#5D5A53] text-sm md:text-md leading-relaxed h-[40px]">
            Van snelle adviezen tot intensieve trajecten en gidsen: kies wat past bij jullie gezin.
          </p>
          
          {/* Filter Pills with elegant rounded borders */}
          <div className="flex flex-wrap justify-center gap-3 pt-6 w-full max-w-2xl">
            {categories.map(cat => (
              <button
                id={`cat-filter-${cat.toLowerCase()}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] uppercase font-bold tracking-widest py-2 px-6 rounded-full transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-[#C08169] border-[#C08169] text-white shadow-xs' 
                    : 'bg-[#FAF8F5] border-[#DFD9CE] text-[#5D5A53] hover:border-[#C08169] hover:text-[#C08169]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Grid showing customized service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
