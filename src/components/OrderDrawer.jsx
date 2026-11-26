import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  MapPin, 
  User, 
  FileText, 
  ShieldCheck, 
  Sparkles,
  Phone
} from 'lucide-react';
import { useOrder } from '../context/OrderContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function OrderDrawer() {
  const {
    items,
    customerDetails,
    setCustomerDetails,
    isOrderDrawerOpen,
    closeOrderDrawer,
    updateQuantity,
    removeFromOrder,
    clearOrder,
    totalCount,
    totalAmount,
    checkoutWhatsApp,
    toastMessage,
  } = useOrder();

  const [showDetailsForm, setShowDetailsForm] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOrderDrawerOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOrderDrawerOpen]);

  // Close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOrderDrawerOpen) {
        closeOrderDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOrderDrawerOpen, closeOrderDrawer]);

  const handleInputChange = (field, value) => {
    setCustomerDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <>
      {/* 1. Global Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[9999999] pointer-events-none animate-bounce">
          <div className="bg-maroon-900/95 text-cream-100 text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full shadow-2xl border border-gold-400/80 backdrop-blur-md flex items-center gap-2 max-w-[90vw] text-center">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* 2. Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOrderDrawerOpen
            ? 'opacity-100 pointer-events-auto z-[999998]'
            : 'opacity-0 pointer-events-none -z-10'
        }`}
        onClick={closeOrderDrawer}
        aria-hidden="true"
      />

      {/* 3. Slide-over Right Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[460px] max-w-full bg-[#FCFBF7] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out z-[999999] overflow-hidden ${
          isOrderDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Order Tray"
      >
        {/* Drawer Header */}
        <div className="bg-maroon-700 text-cream-100 px-4 sm:px-6 py-4 flex items-center justify-between border-b border-maroon-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-maroon-800 flex items-center justify-center text-gold-400 border border-gold-500/30">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif font-bold text-base sm:text-lg text-white">Your Order Tray</h2>
                <span className="bg-gold-500 text-maroon-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {totalCount} {totalCount === 1 ? 'Item' : 'Items'}
                </span>
              </div>
              <p className="text-[11px] text-cream-200">Radha Rani's Kitchen • Warangal</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {items.length > 0 && (
              <button
                type="button"
                onClick={clearOrder}
                className="text-cream-300 hover:text-red-200 p-2 rounded-lg text-xs flex items-center gap-1 transition-colors cursor-pointer"
                title="Clear tray"
              >
                <Trash2 className="w-4 h-4" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            )}
            <button
              type="button"
              onClick={closeOrderDrawer}
              className="p-2 text-cream-200 hover:text-white rounded-lg hover:bg-maroon-600 transition-colors cursor-pointer"
              aria-label="Close tray"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Drawer Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            /* Empty Tray State */
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 my-auto">
              <div className="w-20 h-20 rounded-full bg-amber-100/80 border-2 border-dashed border-amber-300 flex items-center justify-center text-maroon-700">
                <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="space-y-1.5 max-w-xs">
                <h3 className="font-serif font-bold text-lg text-maroon-800">Your Tray is Empty</h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Add your favorite traditional sweets, crispy snacks, homemade pickles, or wholesale rotis to send a unified order!
                </p>
              </div>
              <Link
                to="/menu"
                onClick={closeOrderDrawer}
                className="inline-flex items-center gap-2 bg-maroon-700 hover:bg-maroon-800 text-cream-100 text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Browse Menu (65+ Items)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ) : (
            <>
              {/* Added Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-500 uppercase tracking-wider pb-1 border-b border-amber-200">
                  <span>Selected Delicacies</span>
                  <span>{items.length} Varieties</span>
                </div>

                {items.map((item) => {
                  const sizeOnly = item.pack.includes(' - ') ? item.pack.split(' - ')[0] : item.pack;
                  const itemLineTotal = (item.unitPrice || 0) * (item.quantity || 1);

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl p-3 border border-amber-200/80 shadow-xs flex items-center gap-3 transition-all hover:border-amber-300"
                    >
                      {/* Thumbnail */}
                      <img
                        src={item.image || "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=150&q=80"}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover bg-amber-100 shrink-0 border border-amber-200"
                      />

                      {/* Info & Quantity */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-serif font-bold text-sm text-stone-900 truncate">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeFromOrder(item.id)}
                            className="text-stone-400 hover:text-red-600 p-1 transition-colors cursor-pointer"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-[11px] text-stone-500 flex items-center gap-1.5 mt-0.5">
                          <span className="bg-amber-100 text-maroon-800 font-semibold px-1.5 py-0.2 rounded text-[10px]">
                            {sizeOnly}
                          </span>
                          {item.unitPrice > 0 && (
                            <span>@ ₹{item.unitPrice}</span>
                          )}
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Stepper */}
                          <div className="flex items-center border border-amber-300 rounded-lg bg-cream-50 overflow-hidden">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 text-stone-700 hover:bg-amber-200 transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-bold text-maroon-900 min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 text-stone-700 hover:bg-amber-200 transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Line Total */}
                          <div className="font-sans font-bold text-sm text-maroon-700">
                            {itemLineTotal > 0 ? `₹${itemLineTotal}` : 'Pricing on WA'}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Optional Delivery & Contact Details Accordion */}
              <div className="bg-white rounded-xl border border-amber-200/80 p-3.5 space-y-3">
                <button
                  type="button"
                  onClick={() => setShowDetailsForm(!showDetailsForm)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-maroon-700" />
                    <span className="text-xs font-bold text-stone-800">
                      Delivery Details (Optional)
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-maroon-700 hover:underline">
                    {showDetailsForm ? 'Hide' : '+ Add Location / Name'}
                  </span>
                </button>

                {showDetailsForm && (
                  <div className="space-y-2.5 pt-2 border-t border-amber-100 text-xs animate-fadeIn">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-stone-500 mb-1">
                        Your Name:
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          value={customerDetails.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="e.g. Ramesh Reddy"
                          className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-amber-200 focus:border-maroon-600 focus:outline-none bg-cream-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-stone-500 mb-1">
                        Delivery Locality (Warangal / Hanamkonda / Kazipet):
                      </label>
                      <div className="relative">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          value={customerDetails.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          placeholder="e.g. Subedari / Kazipet / Hanamkonda"
                          className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-amber-200 focus:border-maroon-600 focus:outline-none bg-cream-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-stone-500 mb-1">
                        Special Instructions / Notes:
                      </label>
                      <div className="relative">
                        <FileText className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
                        <input
                          type="text"
                          value={customerDetails.notes}
                          onChange={(e) => handleInputChange('notes', e.target.value)}
                          placeholder="e.g. Needs delivery by 4 PM, less spicy"
                          className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-amber-200 focus:border-maroon-600 focus:outline-none bg-cream-50/50"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Vegetarian & Hygiene Assurance */}
              <div className="bg-emerald-50 rounded-xl p-2.5 border border-emerald-200/70 flex items-center gap-2 text-[11px] text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>100% Pure Vegetarian</strong> • Prepared fresh daily with traditional recipes &amp; wood cold-pressed hygiene.
                </span>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer - Always fixed at bottom */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-white border-t border-amber-200 space-y-3 shrink-0 shadow-lg">
            {/* Price Breakdown */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span>Items Selected</span>
                <span className="font-semibold text-stone-800">{totalCount} items</span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-600">
                <span>Estimated Items Subtotal</span>
                <span className="font-sans font-bold text-stone-900">
                  {totalAmount > 0 ? `₹${totalAmount}` : 'Confirm on WA'}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-500 pt-1 border-t border-amber-100">
                <span>Delivery / Pickup Charges</span>
                <span className="text-[11px] text-emerald-700 font-medium">Calculated by locality on WA</span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="font-sans font-bold text-sm text-stone-900">Estimated Total:</span>
                <span className="font-sans font-extrabold text-xl text-maroon-700">
                  {totalAmount > 0 ? `₹${totalAmount}` : 'WhatsApp Quote'}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Multi-Order Button */}
            <button
              type="button"
              onClick={checkoutWhatsApp}
              className="w-full bg-whatsapp hover:bg-whatsapp-hover active:scale-[0.98] text-white py-3 px-4 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
              <span>
                {totalAmount > 0 ? `Send Order on WhatsApp (₹${totalAmount})` : 'Send Order on WhatsApp'}
              </span>
            </button>

            <p className="text-[10px] text-center text-stone-500">
              Opens WhatsApp with itemized breakdown for instant confirmation with Radha Rani's Kitchen team.
            </p>
          </div>
        )}
      </div>
    </>,
    document.body
  );
}
