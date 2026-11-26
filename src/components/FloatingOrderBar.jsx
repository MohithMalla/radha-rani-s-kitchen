import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useOrder } from '../context/OrderContext';

export default function FloatingOrderBar() {
  const { totalCount, totalAmount, openOrderDrawer, isOrderDrawerOpen } = useOrder();

  if (totalCount === 0 || isOrderDrawerOpen) {
    return null;
  }

  return (
    <aside 
      aria-label="Order Tray Quick Access"
      className="fixed bottom-4 left-3 right-18 sm:left-auto sm:right-24 sm:bottom-6 z-40 max-w-sm pointer-events-auto"
    >
      <button
        type="button"
        onClick={openOrderDrawer}
        className="w-full bg-maroon-800 hover:bg-maroon-900 active:scale-98 text-white px-3 sm:px-4 py-2.5 sm:py-2.5 rounded-2xl shadow-2xl border border-gold-400 flex items-center justify-between gap-2.5 sm:gap-4 transition-all duration-300 group cursor-pointer"
      >
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-maroon-700 flex items-center justify-center text-gold-400 border border-gold-400/40">
              <ShoppingBag className="w-5 h-5 fill-current/20" />
            </div>
            <span className="absolute -top-1.5 -right-1.5 bg-gold-400 text-maroon-950 font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md">
              {totalCount}
            </span>
          </div>

          <div className="text-left">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Order Tray</span>
              <span className="text-gold-300 font-mono">({totalCount} {totalCount === 1 ? 'item' : 'items'})</span>
            </div>
            <div className="text-[11px] text-cream-200">
              {totalAmount > 0 ? `Subtotal: ₹${totalAmount}` : 'Ready for WhatsApp'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 bg-gold-400 text-maroon-950 px-3 py-1.5 rounded-xl font-bold text-xs shadow-xs group-hover:bg-gold-300 transition-colors">
          <span>View Tray</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </button>
    </aside>
  );
}
