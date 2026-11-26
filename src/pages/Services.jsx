import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { SERVICES_DETAILED } from '../data/products';
import { getCustomerWhatsAppUrl } from '../utils/whatsapp';

export default function Services() {
  const handleServiceWhatsApp = (serviceTitle) => {
    window.open(getCustomerWhatsAppUrl("service_category", serviceTitle), '_blank');
  };

  return (
    <div className="space-y-10 sm:space-y-14 md:space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white py-10 sm:py-14 md:py-16 px-4 border-b-4 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-3 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Pure Veg Services</span>
          </div>
          <h1 className="font-serif font-extrabold text-2xl sm:text-4xl md:text-5xl text-cream-100">
            Our 7 Core Culinary Services
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            From daily bulk roti supply for hostels to sacred vratam prasadams and grand wedding catering, explore how Radha Rani's Kitchen serves homes and institutions in Warangal, Hanamkonda &amp; Kazipet.
          </p>
        </div>
      </section>

      {/* Services Showcase Cards */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {SERVICES_DETAILED.map((service, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 hover:border-amber-300 shadow-traditional hover:shadow-traditional-hover transition-[transform,box-shadow,border-color] duration-350 ease-out hover:-translate-y-1 scroll-mt-28 transform-gpu group"
            >
              <div className={`grid grid-cols-1 md:grid-cols-12 gap-0 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual Image Column */}
                <div className={`md:col-span-5 relative min-h-[240px] sm:min-h-[280px] md:min-h-full ${isReversed ? 'md:order-2' : ''} overflow-hidden`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  
                  {/* Service Number Tag */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-maroon-700 text-gold-300 font-serif font-bold text-xs sm:text-sm px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-gold-400 shadow-md">
                    Service #{index + 1}
                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-gold-300 uppercase tracking-wider block">
                      {service.subtitle}
                    </span>
                    <span className="text-xs text-stone-200 line-clamp-1">
                      {service.tagline}
                    </span>
                  </div>
                </div>

                {/* Content Details Column */}
                <div className={`md:col-span-7 p-4 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-between space-y-5 sm:space-y-6 ${isReversed ? 'md:order-1' : ''}`}>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] sm:text-xs font-bold text-gold-600 uppercase tracking-widest">
                        {service.subtitle}
                      </span>
                      <h2 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-maroon-800">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-stone-500 italic">
                        "{service.tagline}"
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="pt-1">
                      <h4 className="text-[11px] sm:text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                        Key Highlights &amp; Inclusions:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5 bg-cream-50 p-2 rounded-lg border border-amber-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="bg-gold-50/70 p-2.5 sm:p-3 rounded-xl border border-gold-200 text-xs text-stone-700">
                      <strong className="text-maroon-800">✨ Best Suited For:</strong> {service.idealFor}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-3 sm:pt-4 border-t border-amber-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <Link
                      to={`/menu?category=${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-maroon-700 hover:text-gold-600 transition-colors"
                    >
                      <span>Browse Products in this Category</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => handleServiceWhatsApp(service.title)}
                      className="bg-whatsapp hover:bg-whatsapp-hover text-white px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
