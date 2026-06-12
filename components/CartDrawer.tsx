/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        id="cart-overlay-shadow"
        className={`fixed inset-0 bg-[#2F2B27]/40 backdrop-blur-xs z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div 
        id="cart-drawer-sheet"
        className={`fixed inset-y-0 right-0 w-full sm:w-[450px] bg-[#FAF8F5] z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out border-l border-[#EBE7E1] flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 border-b border-[#EBE7E1]">
          <h2 className="text-lg font-serif italic text-[#2F2B27]">Mijn Winkelwagen ({items.length})</h2>
          <button 
            id="cart-close-btn"
            onClick={onClose} 
            className="text-[#798873] hover:text-[#C08169] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Selected consultation items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-75 py-20">
              <span className="text-4xl">👜</span>
              <p className="font-serif italic text-sm text-[#5D5A53]">Je winkelwagen is nog leeg.</p>
              <button 
                id="cart-empty-cta"
                onClick={onClose}
                className="text-[10px] uppercase font-bold tracking-widest text-[#C08169] border border-[#C08169] py-2 px-6 rounded-full"
              >
                Bekijk consulten
              </button>
            </div>
          ) : (
            items.map((item, idx) => (
              <div id={`cart-item-${idx}`} key={`${item.id}-${idx}`} className="flex gap-4 p-4 bg-white rounded-2xl border border-[#EBE7E1]/50 shadow-xs animate-fade-in-up">
                <div className="w-16 h-20 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0 border border-[#EBE7E1]/30">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                        <h3 className="font-serif text-sm font-semibold text-[#2F2B27] leading-tight line-clamp-1">{item.name}</h3>
                        <span className="text-xs font-semibold text-[#2F2B27] shrink-0">€ {item.price}</span>
                    </div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#798873] mt-1 block">{item.category}</span>
                  </div>
                  <button 
                    id={`cart-remove-btn-${idx}`}
                    onClick={() => onRemoveItem(idx)}
                    className="text-[10px] text-red-400 hover:text-red-600 font-bold tracking-wider uppercase self-start transition-colors mt-2"
                  >
                    Verwijderen
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total Calculations & Booking Checkout */}
        <div className="p-6 border-t border-[#EBE7E1] bg-[#EBE7E1]/20">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#798873]">Totaalbedrag</span>
            <span className="text-xl font-serif font-semibold text-[#2F2B27]">€ {total}</span>
          </div>
          <p className="text-[10px] text-[#798873] mb-6 text-center italic">
            * Direct veilig boeken. We nemen binnen 24 uur contact op.
          </p>
          <button 
            id="cart-checkout-btn"
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full py-4 bg-[#8D9B87] hover:bg-[#798873] text-white uppercase tracking-widest text-xs font-bold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
          >
            Direct afrekenen &amp; inplannen
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
