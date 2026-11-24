import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Utensils, 
  Clock, 
  MapPin, 
  Star,
  CheckCircle2,
  Instagram,
  Phone
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { CATEGORIES, PRODUCTS, TESTIMONIALS, BUSINESS_INFO } from '../data/products';
import ProductCard from '../components/ProductCard';
import { getCustomerWhatsAppUrl, PRIMARY_PHONE } from '../utils/whatsapp';

export default function Home() {
  const navigate = useNavigate();
  const [selectedHomeCategory, setSelectedHomeCategory] = useState('all');

  // Filter 8 featured specialties
  const featuredProducts = PRODUCTS.filter((item) => {
    if (selectedHomeCategory === 'all') {
      return item.isFeatured || item.isBestseller;
    }
    return item.categoryId === selectedHomeCategory;
  }).slice(0, 8);

  const handleWhatsAppEnquiry = (type = "order_now") => {
    window.open(getCustomerWhatsAppUrl(type), '_blank');
  };

  return (
    <div className="space-y-8 sm:space-y-12 md:space-y-16 pb-12 sm:pb-16 overflow-x-hidden">
      
      {/* ========================================================
          1. CIRCULAR CATEGORY STRIP (100% Mobile, Tablet & Desktop Responsive)
          Smooth horizontal swipe on mobile with edge padding, centered on desktop
      ======================================================== */}
      <section className="bg-[#FAF3E5]/90 border-b border-amber-200/80 py-3 sm:py-5 shadow-xs relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-start justify-start md:justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto pb-2 pt-1 px-2 hide-scrollbar scroll-smooth">
            {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/menu?category=${cat.id}`)}
                className="flex flex-col items-center shrink-0 w-[74px] sm:w-[94px] md:w-[110px] lg:w-[120px] group cursor-pointer text-center focus:outline-none transition-transform hover:-translate-y-1"
              >
                {/* Circular Food Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 ring-2 ring-amber-300/70 group-hover:ring-maroon-700 bg-cream-200">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
                {/* Clean Responsive Label */}
                <span className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs md:text-sm font-semibold text-stone-800 group-hover:text-maroon-700 transition-colors leading-tight">
                  {cat.shortName}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HERO BANNER (Authentic Pure Vegetarian South Indian Feast)
          Optimized for all viewports: mobile, tablet, laptop, desktop
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-amber-200 bg-gradient-to-br from-[#FAF3E0] via-[#FDF8EE] to-[#F5EACD]">
          
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px] md:min-h-[480px] lg:min-h-[520px]">
            {/* Left Content Column */}
            <div className="md:col-span-7 p-4 sm:p-7 md:p-8 lg:p-12 xl:p-14 flex flex-col justify-center space-y-4 sm:space-y-6 z-10">
              
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-maroon-50 border border-maroon-200 text-maroon-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider w-fit shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>100% Pure Vegetarian • Warangal</span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <h1 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-maroon-800 tracking-tight leading-[1.18]">
                  Made with Tradition,<br />
                  <span className="text-gold-600 font-serif italic">Served with Love.</span>
                </h1>
                <p className="text-stone-700 text-xs sm:text-sm md:text-base lg:text-lg max-w-xl font-normal leading-relaxed">
                  Delicious homegrown Telugu &amp; Indian food, prepared traditionally with authentic recipes, pure cow ghee, and homemade love. From soft wholesale rotis to festive sweets and sacred prasadams.
                </p>
              </div>

              {/* CTAs with authentic WhatsApp icon */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 md:gap-4 pt-1 w-full sm:w-auto">
                <Link
                  to="/menu"
                  className="bg-maroon-700 hover:bg-maroon-800 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl shadow-md hover:shadow-maroon-800/30 transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base transform active:scale-98"
                >
                  <Utensils className="w-4 h-4 text-gold-300" />
                  <span>Explore Menu</span>
                </Link>

                <button
                  onClick={() => handleWhatsAppEnquiry("order_now")}
                  className="bg-whatsapp hover:bg-whatsapp-hover active:scale-98 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl shadow-md hover:shadow-green-500/30 transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
                >
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-3 sm:pt-4 border-t border-amber-200/90 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-medium text-stone-700">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Wholesale Roti Supply
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  100% Pure Vegetarian
                </span>
                <span className="flex items-center gap-1 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Daily 6 AM – 9 PM
                </span>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="md:col-span-5 relative min-h-[220px] sm:min-h-[280px] md:min-h-full overflow-hidden bg-stone-900">
              <img 
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80" 
                alt="Authentic Pure Vegetarian South Indian Thali Feast"
                className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#FAF3E0] via-transparent to-black/20"></div>
              
              {/* Floating Pure Veg Stamp */}
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xl border border-gold-300 max-w-[170px] sm:max-w-[210px]">
                <div className="flex items-center gap-1.5 text-maroon-700 font-bold text-[11px] sm:text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                  <span>Pure Telugu Tradition</span>
                </div>
                <p className="text-[9px] sm:text-[11px] text-stone-600 mt-0.5 leading-tight">
                  Hand-churned cow ghee, fresh spices, zero preservatives.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================
          3. "WHY CHOOSE RADHA RANI'S KITCHEN?" BAND
          Responsive grid for mobile (2 col) to desktop (5 col)
      ======================================================== */}
      <section className="bg-maroon-700 text-white py-8 sm:py-12 px-3 sm:px-4 shadow-xl relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-gold-300 tracking-wide">
              Why Choose Radha Rani's Kitchen?
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
              Rooted in sacred traditions of Telangana and committed to highest purity.
            </p>
          </div>

          {/* 5 White Circular Icon Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5 lg:gap-8 justify-center">
            
            {/* Badge 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-2.5 sm:p-3.5 transition-transform duration-200 group-hover:scale-105 border-2 sm:border-4 border-gold-400">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-maroon-700 fill-maroon-700/20" />
              </div>
              <span className="mt-2 font-serif font-bold text-xs sm:text-sm lg:text-base text-white tracking-wide">
                100% Homemade
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 mt-0.5">Mother's touch recipes</span>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-2.5 sm:p-3.5 transition-transform duration-200 group-hover:scale-105 border-2 sm:border-4 border-gold-400">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-maroon-700" />
              </div>
              <span className="mt-2 font-serif font-bold text-xs sm:text-sm lg:text-base text-white tracking-wide">
                Quality Ingredients
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 mt-0.5">Pure cow ghee &amp; grains</span>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-2.5 sm:p-3.5 transition-transform duration-200 group-hover:scale-105 border-2 sm:border-4 border-gold-400">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-maroon-700" />
              </div>
              <span className="mt-2 font-serif font-bold text-xs sm:text-sm lg:text-base text-white tracking-wide">
                Strict Hygiene
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 mt-0.5">Clean RO water &amp; oils</span>
            </div>

            {/* Badge 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-2.5 sm:p-3.5 transition-transform duration-200 group-hover:scale-105 border-2 sm:border-4 border-gold-400">
                <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-maroon-700" />
              </div>
              <span className="mt-2 font-serif font-bold text-xs sm:text-sm lg:text-base text-white tracking-wide">
                Authentic Taste
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 mt-0.5">Traditional Telugu aroma</span>
            </div>

            {/* Badge 5 */}
            <div className="flex flex-col items-center text-center group col-span-2 sm:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white shadow-lg flex items-center justify-center p-2.5 sm:p-3.5 transition-transform duration-200 group-hover:scale-105 border-2 sm:border-4 border-gold-400">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-maroon-700" />
              </div>
              <span className="mt-2 font-serif font-bold text-xs sm:text-sm lg:text-base text-white tracking-wide">
                Fresh Daily
              </span>
              <span className="text-[9px] sm:text-[10px] text-stone-300 mt-0.5">Prepared fresh everyday</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          4. "CRAFTED WITH CARE" 3-CARD BENTO SECTION
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center space-y-1 mb-6 sm:mb-8 md:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-600">
            Heritage &amp; Purity
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-maroon-800">
            Crafted with Care
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
            Three pillars of our kitchen that families and businesses across Warangal rely upon every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Card 1: Traditional Telugu Recipes */}
          <div className="bg-white rounded-2xl overflow-hidden border border-amber-200/80 shadow-traditional flex flex-col group hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
              <img 
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80" 
                alt="Traditional Telugu Recipes" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-gold-600 block mb-0.5">
                  Time-Honored Taste
                </span>
                <h3 className="font-serif font-bold text-base sm:text-lg lg:text-xl text-maroon-800">
                  Traditional Telugu Recipes
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  Every batch of Sakinalu, Ariselu, Chekkalu, and Sunnundalu follows age-old family recipes with zero artificial preservatives or shortcuts.
                </p>
              </div>
              <Link 
                to="/menu?category=snacks-sweets" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon-700 hover:text-gold-600 transition-colors group/link pt-1"
              >
                <span>Explore Snacks &amp; Sweets</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: Wholesale Roti Supply (Featured Deep Maroon Card) */}
          <div className="bg-maroon-700 text-white rounded-2xl overflow-hidden border-2 border-gold-400 shadow-xl flex flex-col group hover:-translate-y-1 transition-all duration-300 relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-maroon-900">
              <img 
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80" 
                alt="Wholesale Bulk Roti Supply" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                loading="lazy"
              />
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-gold-500 text-maroon-950 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow">
                Daily Bulk Supply
              </div>
            </div>
            <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-gold-300 block mb-0.5">
                  Daily Bulk Supply
                </span>
                <h3 className="font-serif font-bold text-base sm:text-lg lg:text-xl text-white">
                  Wholesale Roti Supply
                </h3>
                <p className="text-xs text-cream-200 mt-1.5 leading-relaxed">
                  Trusted by hostels, hotels, restaurants, and event organisers across Warangal &amp; Hanamkonda for soft, hygienic Wheat Phulkas, Chapatis &amp; Jowar Rotis.
                </p>
              </div>
              <button
                onClick={() => handleWhatsAppEnquiry("wholesale_rotis")}
                className="inline-flex items-center gap-2 text-xs font-bold text-gold-300 hover:text-white transition-colors group/link pt-1"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Enquire Bulk Rotis</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Prasadams & Pooja Essentials */}
          <div className="bg-white rounded-2xl overflow-hidden border border-amber-200/80 shadow-traditional flex flex-col group hover:-translate-y-1 transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden bg-cream-200">
              <img 
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80" 
                alt="Prasadams and Pooja Essentials" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-gold-600 block mb-0.5">
                  Sacred &amp; Pure
                </span>
                <h3 className="font-serif font-bold text-base sm:text-lg lg:text-xl text-maroon-800">
                  Prasadams &amp; Pooja Essentials
                </h3>
                <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                  Prepared with utmost purity for Satyanarayana Vratams, housewarmings, and temple offerings — along with pure cow ghee and pooja samagri.
                </p>
              </div>
              <Link 
                to="/menu?category=prasadams" 
                className="inline-flex items-center gap-1.5 text-xs font-bold text-maroon-700 hover:text-gold-600 transition-colors group/link pt-1"
              >
                <span>View Prasadams</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          5. "OUR SPECIALTIES" PREVIEW GRID (8 Featured Items)
          Responsive 1-col (mobile) -> 2-col (tablet) -> 3/4-col (desktop)
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 mb-5 sm:mb-7">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-600">
              Kitchen Highlights
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-maroon-800 mt-0.5">
              Our Specialties
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Freshly prepared daily with guaranteed pure vegetarian authenticity.
            </p>
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-maroon-700 hover:text-gold-600 transition-colors shrink-0"
          >
            <span>View Complete Menu (28+ Items)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 hide-scrollbar">
          {CATEGORIES.slice(0, 5).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedHomeCategory(cat.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedHomeCategory === cat.id
                  ? 'bg-maroon-700 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-cream-200 border border-amber-200'
              }`}
            >
              {cat.shortName}
            </button>
          ))}
          <Link
            to="/menu"
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap bg-gold-100 text-gold-800 border border-gold-300 hover:bg-gold-200 transition-colors"
          >
            + All Categories
          </Link>
        </div>

        {/* 8 Product Grid: 1 col on mobile, 2 on tablet, 3 on laptop, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8 md:mt-10">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-maroon-700 hover:bg-maroon-800 text-white px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-transform hover:-translate-y-0.5 active:scale-98"
          >
            <span>Explore All 7 Services on Menu</span>
            <ArrowRight className="w-4 h-4 text-gold-300" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          6. "FRESH FROM OUR KITCHEN" (Instagram Reels-Style Cards)
          2-column on mobile, 4-column on tablet and desktop
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center space-y-1 mb-6 sm:mb-8 md:mb-10">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-600">
            Instagram Glimpses
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-maroon-800">
            Fresh From Our Kitchen
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
            Watch our daily batches of soft wholesale rotis, festive Telugu sweets, temple-style prasadams &amp; pure veg catering setups.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          
          {/* Reel Card 1 */}
          <div className="group relative aspect-[9/14] sm:aspect-[9/15] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-amber-200/60 bg-stone-900 cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80" 
              alt="Soft Wholesale Rotis Reel" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white/90">
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-3 sm:right-3 text-white">
              <span className="text-[9px] sm:text-[10px] font-bold text-gold-400 uppercase tracking-wider block">
                Daily Batch
              </span>
              <h4 className="font-serif font-bold text-xs sm:text-sm leading-tight mt-0.5">
                Soft Wholesale Rotis
              </h4>
              <p className="text-[9px] sm:text-[10px] text-stone-300 mt-0.5 line-clamp-1 sm:line-clamp-2">
                Puffed phulkas &amp; chapatis for hostels &amp; hotels.
              </p>
            </div>
          </div>

          {/* Reel Card 2 */}
          <div className="group relative aspect-[9/14] sm:aspect-[9/15] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-amber-200/60 bg-stone-900 cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80" 
              alt="Traditional Sweets Reel" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white/90">
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-3 sm:right-3 text-white">
              <span className="text-[9px] sm:text-[10px] font-bold text-gold-400 uppercase tracking-wider block">
                Pure Ghee
              </span>
              <h4 className="font-serif font-bold text-xs sm:text-sm leading-tight mt-0.5">
                Traditional Sweets
              </h4>
              <p className="text-[9px] sm:text-[10px] text-stone-300 mt-0.5 line-clamp-1 sm:line-clamp-2">
                Hand-rolled Sunnundalu, Ariselu &amp; Laddus.
              </p>
            </div>
          </div>

          {/* Reel Card 3 */}
          <div className="group relative aspect-[9/14] sm:aspect-[9/15] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-amber-200/60 bg-stone-900 cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80" 
              alt="Festive Prasadams Reel" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white/90">
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-3 sm:right-3 text-white">
              <span className="text-[9px] sm:text-[10px] font-bold text-gold-400 uppercase tracking-wider block">
                Temple Style
              </span>
              <h4 className="font-serif font-bold text-xs sm:text-sm leading-tight mt-0.5">
                Festive Prasadams
              </h4>
              <p className="text-[9px] sm:text-[10px] text-stone-300 mt-0.5 line-clamp-1 sm:line-clamp-2">
                Pulihora, Chakkera Pongali &amp; Daddojanam.
              </p>
            </div>
          </div>

          {/* Reel Card 4 */}
          <div className="group relative aspect-[9/14] sm:aspect-[9/15] rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-amber-200/60 bg-stone-900 cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" 
              alt="Catering Setups Reel" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white/90">
              <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-3 sm:right-3 text-white">
              <span className="text-[9px] sm:text-[10px] font-bold text-gold-400 uppercase tracking-wider block">
                All Sizes
              </span>
              <h4 className="font-serif font-bold text-xs sm:text-sm leading-tight mt-0.5">
                Catering Setups
              </h4>
              <p className="text-[9px] sm:text-[10px] text-stone-300 mt-0.5 line-clamp-1 sm:line-clamp-2">
                Weddings, housewarmings &amp; family functions.
              </p>
            </div>
          </div>

        </div>

        {/* Instagram Follow CTA */}
        <div className="text-center mt-5 sm:mt-7">
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-maroon-700 hover:bg-maroon-800 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-md transition-all active:scale-95"
          >
            <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400" />
            <span>Follow {BUSINESS_INFO.instagram}</span>
          </a>
        </div>
      </section>

      {/* ========================================================
          7. CUSTOMER TESTIMONIALS (Warangal, Hanamkonda & Kazipet)
      ======================================================== */}
      <section className="bg-cream-200/70 py-8 sm:py-12 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center space-y-1 mb-6 sm:mb-8 md:mb-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-600">
              Real Stories &amp; Trust
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-maroon-800">
              Loved by Families in Tri-Cities
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
              Read how Radha Rani's Kitchen is bringing traditional taste and dependable wholesale service to homes and hostels across Warangal, Hanamkonda, and Kazipet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {TESTIMONIALS.map((testi) => (
              <div 
                key={testi.id} 
                className="bg-white p-4 sm:p-5 lg:p-6 rounded-2xl border border-amber-200/80 shadow-traditional flex flex-col justify-between space-y-3 sm:space-y-4"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gold-500">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-maroon-700 bg-maroon-50 px-2 py-0.5 rounded-full border border-maroon-100">
                      {testi.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="pt-2.5 border-t border-amber-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-maroon-800">
                      {testi.name}
                    </h4>
                    <span className="text-[10px] sm:text-[11px] text-stone-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-gold-500" />
                      {testi.location}
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-200">
                    Verified Customer
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. LOCATION & KITCHEN INFO BANNER
      ======================================================== */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-9 lg:p-10 border border-amber-200 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-7">
          <div className="space-y-2.5 sm:space-y-3 max-w-xl">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-600">
              Visit Our Kitchen &amp; Counter
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-3xl text-maroon-800">
              Arepally, Near Hanuman Temple, Warangal
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We are open every day from <strong>6:00 AM to 9:00 PM</strong>. Whether you need a daily batch of 50 hot phulkas, festive sweets for your family, or a complete catering quote, we are just a WhatsApp message or phone call away!
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 text-xs font-semibold text-stone-700 pt-1">
              <span className="flex items-center gap-1.5 bg-cream-100 px-2.5 py-1.5 rounded-lg border border-amber-200 text-[11px] sm:text-xs">
                <Clock className="w-3.5 h-3.5 text-gold-500" /> 6 AM – 9 PM Daily
              </span>
              <span className="flex items-center gap-1.5 bg-cream-100 px-2.5 py-1.5 rounded-lg border border-amber-200 text-[11px] sm:text-xs">
                <Phone className="w-3.5 h-3.5 text-gold-500" /> +91 {PRIMARY_PHONE}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full lg:w-auto">
            <Link
              to="/contact"
              className="bg-maroon-700 hover:bg-maroon-800 text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold text-center text-xs sm:text-sm shadow-md transition-colors active:scale-98"
            >
              Get Directions &amp; Contact
            </Link>
            <button
              onClick={() => handleWhatsAppEnquiry("location_visit")}
              className="bg-whatsapp hover:bg-whatsapp-hover text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-xl font-bold text-center text-xs sm:text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-98"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
              <span>WhatsApp Us Now</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
