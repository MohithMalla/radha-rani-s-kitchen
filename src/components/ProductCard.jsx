import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

export default function ProductCard({ product }) {
  const [selectedPack, setSelectedPack] = useState(
    product.packOptions && product.packOptions.length > 0 ? product.packOptions[0] : ''
  );
  const [imgError, setImgError] = useState(false);

  // Fallback image generator / placeholder with pure vegetarian Indian food
  const fallbackImage = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80";

  const handleEnquire = () => {
    const url = getProductWhatsAppUrl(product, selectedPack, 1);
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-amber-200/80 shadow-traditional hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <img
          src={imgError ? fallbackImage : (product.image || fallbackImage)}
          alt={product.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-60"></div>

        {/* Veg Badge (Traditional Indian Green Dot) */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-sm p-1 sm:p-1.5 rounded-md shadow-sm border border-emerald-600/30 flex items-center justify-center" title="100% Pure Vegetarian">
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-emerald-600 flex items-center justify-center p-0.5">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-600"></div>
          </div>
        </div>

        {/* Badges: Bestseller / Featured */}
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex flex-col gap-1 items-end">
          {product.isBestseller && (
            <span className="bg-gold-500 text-maroon-950 text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-md flex items-center gap-1 border border-gold-300">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
              Bestseller
            </span>
          )}
          {product.isFeatured && !product.isBestseller && (
            <span className="bg-maroon-700 text-cream-100 text-[9px] sm:text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-md border border-maroon-600">
              Traditional Special
            </span>
          )}
        </div>

        {/* Category tag overlaid */}
        <div className="absolute bottom-2 left-2.5 right-2.5 sm:left-3 sm:right-3">
          <span className="text-[10px] sm:text-[11px] font-medium text-amber-200/90 tracking-wide uppercase drop-shadow">
            {product.categoryName}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3.5 sm:p-4 md:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="font-serif font-bold text-base sm:text-lg text-maroon-700 leading-snug line-clamp-2 group-hover:text-maroon-800 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-stone-600 mt-1 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {product.idealFor && (
            <div className="mt-2 text-[10px] sm:text-[11px] text-gold-700 bg-gold-50/80 px-2 py-1 rounded border border-gold-200/60 font-medium line-clamp-1">
              ✨ Ideal for: {product.idealFor}
            </div>
          )}
        </div>

        {/* Pack / Quantity Selection */}
        <div className="pt-2 border-t border-amber-100 space-y-2">
          {product.packOptions && product.packOptions.length > 0 && (
            <div>
              <label className="block text-[10px] sm:text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                Select Pack / Quantity:
              </label>
              {/* text-base sm:text-xs prevents iOS Safari from auto-zooming on focus */}
              <select
                value={selectedPack}
                onChange={(e) => setSelectedPack(e.target.value)}
                className="w-full text-base sm:text-xs font-medium text-stone-800 bg-cream-50 border border-amber-200 rounded-lg px-2.5 py-2 focus:ring-1 focus:ring-maroon-600 focus:outline-none transition-all cursor-pointer"
              >
                {product.packOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Full-width WhatsApp Enquiry CTA with authentic WhatsApp icon */}
          <button
            onClick={handleEnquire}
            className="w-full mt-2 bg-whatsapp hover:bg-whatsapp-hover active:scale-[0.98] text-white py-2.5 px-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white group-hover/btn:scale-110 transition-transform" />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
