import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, Sparkles, AlertCircle } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { getCustomerWhatsAppUrl } from '../utils/whatsapp';

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(12); // Items per page for "Load More"

  // Sync category state with URL parameter if it changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
      setVisibleCount(12);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setVisibleCount(12);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.categoryId === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.idealFor && product.idealFor.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const currentCategoryObj = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <div className="space-y-6 sm:space-y-10 md:space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white py-10 sm:py-14 md:py-16 px-4 border-b-4 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-3 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>100% Pure Vegetarian Homemade Menu</span>
          </div>
          <h1 className="font-serif font-extrabold text-2xl sm:text-4xl md:text-5xl text-cream-100">
            Our Kitchen Menu &amp; Offerings
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Handcrafted daily in Warangal with traditional recipes, pure cow ghee, and zero preservatives. Select your favorites and enquire directly on WhatsApp for instant confirmation.
          </p>

          {/* Quick Notice Pill */}
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm text-gold-300 text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full border border-gold-400/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Wholesale bulk orders and custom festive pack sizes available on request</span>
          </div>
        </div>
      </section>

      {/* Main Content Area: Search, Filters & Product Grid */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Search Bar & Category Filter Pills */}
        <div className="space-y-4 bg-white p-3.5 sm:p-5 md:p-6 rounded-2xl border border-amber-200/80 shadow-traditional">
          
          {/* Top row: Search input & stats */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            
            {/* Search Input (text-base sm:text-sm prevents iOS auto-zoom) */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12);
                }}
                placeholder="Search phulkas, sakinalu, pulihora, ghee..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 focus:ring-1 focus:ring-maroon-700 text-base sm:text-sm text-stone-800 placeholder-stone-400 bg-cream-50 focus:bg-white transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Showing Count */}
            <div className="text-xs text-stone-500 font-medium self-start sm:self-auto">
              Showing <span className="font-bold text-maroon-700">{filteredProducts.length}</span> items
              {selectedCategory !== 'all' && (
                <span> in <strong className="text-stone-800">{currentCategoryObj.name}</strong></span>
              )}
            </div>

          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 pt-1 hide-scrollbar">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-maroon-700 text-white shadow-md border border-maroon-800 scale-102'
                      : 'bg-cream-100 text-stone-700 hover:bg-cream-200 border border-amber-200/90'
                  }`}
                >
                  <span>{cat.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Category Description Banner */}
          {currentCategoryObj && currentCategoryObj.id !== 'all' && (
            <div className="bg-cream-100/90 border-l-4 border-gold-500 p-3 rounded-r-xl text-xs text-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p>
                <strong>{currentCategoryObj.name}:</strong> {currentCategoryObj.description}
              </p>
              <button
                onClick={() => {
                  window.open(getCustomerWhatsAppUrl("service_category", currentCategoryObj.name), '_blank');
                }}
                className="shrink-0 text-maroon-700 hover:text-maroon-900 font-bold underline flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-maroon-700" />
                <span>Bulk WhatsApp Enquiry</span>
              </button>
            </div>
          )}

        </div>

        {/* Product Grid: 1 col (mobile) -> 2 col (tablet) -> 3 col (laptop) -> 4 col (desktop) */}
        {filteredProducts.length > 0 ? (
          <div className="space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* "Load More" Pagination System */}
            {hasMore ? (
              <div className="text-center pt-4 sm:pt-6">
                <button
                  onClick={handleLoadMore}
                  className="bg-white hover:bg-maroon-50 text-maroon-700 border-2 border-maroon-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-98"
                >
                  Load More Items ({filteredProducts.length - visibleCount} remaining)
                </button>
                <p className="text-[11px] sm:text-xs text-stone-500 mt-2">
                  Easily scalable to accommodate 60+ products without slowing down.
                </p>
              </div>
            ) : (
              <div className="text-center pt-6 sm:pt-8 text-xs text-stone-500 border-t border-amber-200">
                You've viewed all {filteredProducts.length} items in this selection. Looking for something custom?
                <button
                  onClick={() => window.open(getCustomerWhatsAppUrl("order_now"), "_blank")}
                  className="text-maroon-700 font-bold ml-1 underline hover:text-maroon-900 inline-flex items-center gap-1"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-maroon-700 inline" />
                  <span>Ask us on WhatsApp!</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-amber-200 shadow-traditional max-w-lg mx-auto space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cream-200 text-maroon-700 flex items-center justify-center mx-auto">
              <AlertCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-maroon-800">
              No Items Found
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              We couldn't find any dishes matching "{searchQuery}". Try searching for roti, sakinalu, pulihora, laddu, or reset filters.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="bg-maroon-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow hover:bg-maroon-800 transition-colors"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => window.open(getCustomerWhatsAppUrl("order_now"), "_blank")}
                className="bg-whatsapp text-white px-4 py-2 rounded-xl text-xs font-semibold shadow hover:bg-whatsapp-hover transition-colors flex items-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                <span>Custom Order Inquiry</span>
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
