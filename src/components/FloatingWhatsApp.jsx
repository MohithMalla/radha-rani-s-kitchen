import React, { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getCustomerWhatsAppUrl } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    window.open(getCustomerWhatsAppUrl("floating_chat"), "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 flex-col sm:flex-row">
      {/* Tooltip greeting */}
      {showTooltip && (
        <div className="bg-white text-stone-800 text-xs px-3.5 py-2 rounded-xl shadow-xl border border-amber-200 hidden sm:flex items-center gap-2 animate-bounce animate-duration-1000">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Order or Enquire on <strong>WhatsApp</strong>!</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }} 
            className="text-stone-400 hover:text-stone-600 ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button with authentic WhatsApp icon */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Chat on WhatsApp with Radha Rani's Kitchen"
      >
        <span className="absolute inset-0 rounded-full bg-whatsapp opacity-75 animate-ping -z-10 group-hover:opacity-100"></span>
        <WhatsAppIcon className="w-8 h-8 fill-white" />
      </button>
    </div>
  );
}
