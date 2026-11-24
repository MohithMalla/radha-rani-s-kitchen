import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { BUSINESS_INFO, CATEGORIES } from '../data/products';
import { getCustomerWhatsAppUrl, PRIMARY_PHONE, SECONDARY_PHONE } from '../utils/whatsapp';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open(getCustomerWhatsAppUrl("order_now"), '_blank');
  };

  return (
    <footer className="bg-maroon-700 text-stone-200 border-t-4 border-gold-500 relative overflow-hidden">
      {/* Subtle traditional pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4A017_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      {/* Trust Banner inside footer */}
      <div className="border-b border-maroon-800 bg-maroon-800/60 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center mb-2">
              <span className="w-4 h-4 rounded-full border-2 border-emerald-400 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white text-sm">100% Pure Veg</span>
            <span className="text-xs text-stone-300">Telugu Sattvic Kitchen</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
            </span>
            <span className="font-semibold text-white text-sm">Strict Hygiene</span>
            <span className="text-xs text-stone-300">Clean RO Water &amp; Oils</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center mb-2">
              <CheckCircle2 className="w-5 h-5 text-gold-400" />
            </span>
            <span className="font-semibold text-white text-sm">Fresh Everyday</span>
            <span className="text-xs text-stone-300">Zero Artificial Preservatives</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5 text-gold-400" />
            </span>
            <span className="font-semibold text-white text-sm">Heritage Taste</span>
            <span className="text-xs text-stone-300">Authentic Family Recipes</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Logo Only - Balanced & Professional */}
          <div className="space-y-4">
            <div className="inline-block bg-white/95 p-2 rounded-2xl shadow-lg border border-gold-300">
              <img 
                src="/logo.png" 
                alt="Radha Rani's Kitchen" 
                className="h-16 sm:h-18 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gold-400 text-sm font-medium italic">
              "{BUSINESS_INFO.tagline}"
            </p>
            <p className="text-xs text-stone-300 leading-relaxed">
              Warangal's beloved homegrown kitchen dedicated to bringing authentic Telugu flavours, wholesome wholesale rotis, sacred prasadams, and festival sweets crafted with pure ingredients and traditional care.
            </p>
            <div className="pt-2">
              <a 
                href={BUSINESS_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white text-xs px-3.5 py-2 rounded-full font-medium transition-all shadow"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow {BUSINESS_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-gold-300 border-b border-maroon-600 pb-2 mb-4 tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <span className="text-gold-500">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <span className="text-gold-500">›</span> Our 7 Services
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <span className="text-gold-500">›</span> Explore Full Menu
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <span className="text-gold-500">›</span> Bulk &amp; Catering Enquiries
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <span className="text-gold-500">›</span> About Our Tradition
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-300 transition-colors flex items-center gap-2">
                  <span className="text-gold-500">›</span> Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Services Categories */}
          <div>
            <h4 className="font-serif text-lg font-bold text-gold-300 border-b border-maroon-600 pb-2 mb-4 tracking-wide">
              Our 7 Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/menu?category=${cat.id}`} 
                    className="hover:text-gold-300 text-stone-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-gold-500 text-sm">✦</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Kitchen Timings */}
          <div>
            <h4 className="font-serif text-lg font-bold text-gold-300 border-b border-maroon-600 pb-2 mb-4 tracking-wide">
              Kitchen &amp; Order Enquiries
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-white font-medium">{BUSINESS_INFO.businessTimings}</span>
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <a 
                  href={`tel:${PRIMARY_PHONE}`}
                  className="flex items-center gap-2 text-white hover:text-gold-300 font-semibold"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call: {PRIMARY_PHONE}</span>
                </a>
                <a 
                  href={`tel:${SECONDARY_PHONE}`}
                  className="flex items-center gap-2 text-white hover:text-gold-300 font-semibold"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call: {SECONDARY_PHONE}</span>
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleWhatsApp("Footer Quick Enquiry")}
                  className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white py-2.5 px-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-maroon-800/80 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-stone-400 gap-4 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Radha Rani's Kitchen. All rights reserved. Handcrafted in Warangal, Telangana.
          </p>
          <div className="flex items-center gap-4 text-gold-400">
            <span>Arepally, Near Hanuman Temple, Warangal</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Pure Vegetarian
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
