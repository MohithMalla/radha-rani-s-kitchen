import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { SERVICES_DETAILED } from '../data/products';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export default function Services() {
  const handleServiceWhatsApp = (serviceTitle) => {
    window.open(getGeneralWhatsAppUrl(`Enquiry for Service: ${serviceTitle}`), '_blank');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white py-12 sm:py-16 px-4 border-b-4 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-gold-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Pure Veg Services</span>
          </div>
          <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-cream-100">
            Our 7 Core Culinary Services
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
            From daily bulk roti supply for hostels to sacred vratam prasadams and grand wedding catering, explore how Radha Rani's Kitchen serves homes and institutions in Warangal, Hanamkonda &amp; Kazipet.
          </p>
        </div>
      </section>

      {/* Services Showcase Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES_DETAILED.map((service, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-traditional hover:shadow-2xl transition-all duration-300 scroll-mt-28"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Image Column */}
                <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-full ${isReversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  
                  {/* Service Number Tag */}
                  <div className="absolute top-4 left-4 bg-maroon-700 text-gold-300 font-serif font-bold text-sm px-3.5 py-1.5 rounded-full border border-gold-400 shadow-md">
                    Service #{index + 1}
                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-gold-300 uppercase tracking-wider block">
                      {service.subtitle}
                    </span>
                    <span className="text-xs text-stone-200 line-clamp-1">
                      {service.tagline}
                    </span>
                  </div>
                </div>

                {/* Content Details Column */}
                <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
                        {service.subtitle}
                      </span>
                      <h2 className="font-serif font-bold text-2xl sm:text-3xl text-maroon-800">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-stone-500 italic">
                        "{service.tagline}"
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-2">
                        Key Highlights &amp; Inclusions:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 bg-cream-50 p-2 rounded-lg border border-amber-100">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="bg-gold-50/70 p-3 rounded-xl border border-gold-200 text-xs text-stone-700">
                      <strong className="text-maroon-800">✨ Best Suited For:</strong> {service.idealFor}
                    </div>
                  </div>

                  {/* Bottom Action Strip */}
                  <div className="pt-4 border-t border-amber-100 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      to={`/menu?category=${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-maroon-700 hover:text-gold-600 transition-colors"
                    >
                      <span>Browse Products in this Category</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => handleServiceWhatsApp(service.title)}
                      className="bg-whatsapp hover:bg-whatsapp-hover text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
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

      {/* Bulk & Custom Requirement CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-maroon-700 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 border-2 border-gold-400 shadow-2xl relative overflow-hidden">
          <span className="text-xs font-bold text-gold-300 uppercase tracking-widest">
            Need a Custom Combination or Long-Term Contract?
          </span>
          <h3 className="font-serif font-bold text-2xl sm:text-4xl text-cream-100 max-w-2xl mx-auto">
            We Create Tailored Pure Veg Packages for Hostels, Hotels &amp; Family Functions
          </h3>
          <p className="text-xs sm:text-sm text-stone-200 max-w-xl mx-auto leading-relaxed">
            Whether you require a daily supply of 300 chapatis delivered hot to your hostel in Hanamkonda or a traditional 7-course wedding dinner, talk to us directly on WhatsApp for prompt quotations.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/catering"
              className="bg-white hover:bg-cream-100 text-maroon-800 font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-colors"
            >
              Catering &amp; Bulk Booking Form
            </Link>
            <button
              onClick={() => handleServiceWhatsApp("Custom Bulk Requirement")}
              className="bg-whatsapp hover:bg-whatsapp-hover text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
