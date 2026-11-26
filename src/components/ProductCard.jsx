import React, { useState } from 'react';
import { Sparkles, Plus, Check, ShoppingBag } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getProductWhatsAppUrl } from '../utils/whatsapp';
import { useOrder } from '../context/OrderContext';

export default function ProductCard({ product }) {
  const [selectedPack, setSelectedPack] = useState(
    product.packOptions && product.packOptions.length > 0 ? product.packOptions[0] : ''
  );
  const [imgError, setImgError] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const { addToOrder, items } = useOrder();

  // Fallback image generator / placeholder with pure vegetarian Indian food
  const fallbackImage = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80";

  // Dynamic price extraction from selectedPack (e.g. "250 g - ₹100" -> "₹100")
  const priceMatch = selectedPack ? selectedPack.match(/₹[\d,]+(\/piece)?/) : null;
  const currentPrice = priceMatch ? priceMatch[0] : (product.startingPrice ? `₹${product.startingPrice}` : '');
  const currentSize = selectedPack && selectedPack.includes(' - ') ? selectedPack.split(' - ')[0] : product.priceUnit;

  // Check if current pack is already in the tray
  const currentItemId = `${product.id}__${selectedPack}`;
  const existingInTray = items.find((i) => i.id === currentItemId);

  // Add to Multi-Product Order Tray
  const handleAddToTray = () => {
    addToOrder(product, selectedPack, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  // Direct 1-Click WhatsApp for single product
  const handleDirectWhatsApp = () => {
    const url = getProductWhatsAppUrl(product, selectedPack, 1);
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-amber-200/90 hover:border-amber-400/80 shadow-traditional hover:shadow-traditional-hover transition-[transform,box-shadow,border-color] duration-350 ease-out flex flex-col h-full group hover:-translate-y-1.5 transform-gpu will-change-transform">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <img
          src={imgError ? fallbackImage : (product.image || fallbackImage)}
          alt={product.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out transform-gpu will-change-transform"
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
        <div className="absolute bottom-2 left-2.5 right-2.5 sm:left-3 sm:right-3 flex items-center justify-between">
          <span className="text-[10px] sm:text-[11px] font-semibold text-amber-200/95 tracking-wide uppercase drop-shadow">
            {product.categoryName}
          </span>
          {existingInTray && (
            <span className="bg-emerald-600/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1 shadow-xs">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
              In Tray ({existingInTray.quantity})
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5">
        <div className="space-y-1.5">
          {/* Full Product Title without truncation */}
          <h3 className="font-serif font-bold text-base sm:text-lg text-maroon-800 leading-snug group-hover:text-maroon-900 transition-colors duration-200">
            {product.name}
          </h3>

          {/* Prominent Price Tag */}
          {currentPrice && (
            <div className="flex items-baseline gap-1.5 pt-0.5">
              <span className="text-xl sm:text-2xl font-sans font-bold text-maroon-800 tracking-tight">
                {currentPrice}
              </span>
              {currentSize && (
                <span className="text-xs text-stone-500 font-medium">
                  / {currentSize}
                </span>
              )}
            </div>
          )}

          {/* Small & compact description */}
          <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Small compact pairing note */}
          {product.idealFor && (
            <div className="text-[10px] sm:text-[11px] text-amber-900 bg-amber-50/90 px-2 py-1 rounded-md border border-amber-200/70 font-medium leading-tight flex items-start gap-1">
              <span className="text-gold-600 shrink-0 select-none">✨</span>
              <span className="leading-snug">{product.idealFor}</span>
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
              <select
                value={selectedPack}
                onChange={(e) => setSelectedPack(e.target.value)}
                className="w-full text-base sm:text-xs font-semibold text-stone-800 bg-cream-50 border border-amber-200 rounded-lg px-2.5 py-2 focus:ring-2 focus:ring-maroon-600/20 focus:border-maroon-600 focus:outline-none transition-all duration-200 cursor-pointer"
              >
                {product.packOptions.map((opt, idx) => (
                  <option key={idx} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Dual Action Buttons: Add to Multi-Item Tray + Direct WhatsApp Single Item */}
          <div className="flex items-center gap-1.5 sm:gap-2 pt-1">
            {/* Primary Multi-Item CTA: Add to Order Tray */}
            <button
              type="button"
              onClick={handleAddToTray}
              className={`flex-1 py-2.5 px-2.5 sm:px-3 rounded-xl font-bold text-xs shadow-xs hover:shadow-md transition-all duration-200 ease-out flex items-center justify-center gap-1.5 active:scale-95 hover:brightness-105 cursor-pointer transform-gpu ${
                justAdded
                  ? 'bg-emerald-700 text-white'
                  : 'bg-maroon-700 hover:bg-maroon-800 text-cream-100'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-gold-300 stroke-[3]" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 text-gold-300 stroke-[3]" />
                  <span>Add to Order</span>
                </>
              )}
            </button>

            {/* Direct 1-Click WhatsApp Button for Single Item */}
            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="bg-whatsapp hover:bg-whatsapp-hover text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow-xs hover:shadow-md hover:brightness-105 transition-all duration-200 ease-out flex items-center justify-center gap-1.5 active:scale-95 shrink-0 transform-gpu cursor-pointer"
              title="Buy only this item directly via WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-white shrink-0" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
