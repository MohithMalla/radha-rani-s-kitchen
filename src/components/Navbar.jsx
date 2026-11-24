import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu as MenuIcon, 
  X, 
  ChevronRight 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getGeneralWhatsAppUrl, PRIMARY_PHONE, SECONDARY_PHONE } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/products';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleWhatsAppClick = () => {
    window.open(getGeneralWhatsAppUrl("Website Header Enquiry"), "_blank");
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 1. Top Announcement Bar (Deep Maroon) */}
      <div className="bg-maroon-700 text-cream-100 text-xs sm:text-sm py-2 px-4 border-b border-maroon-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 text-center md:text-left">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium text-gold-300">
              <Clock className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.businessTimings}</span>
            </span>
            <span className="hidden sm:inline text-maroon-300">•</span>
            <span className="flex items-center gap-1 text-stone-200">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Serving Warangal, Hanamkonda &amp; Kazipet</span>
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-stone-300 hidden sm:inline">Call/WhatsApp:</span>
            <a 
              href={`tel:${PRIMARY_PHONE}`} 
              className="font-semibold text-white hover:text-gold-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              {PRIMARY_PHONE}
            </a>
            <span className="text-maroon-400">|</span>
            <a 
              href={`tel:${SECONDARY_PHONE}`} 
              className="font-semibold text-white hover:text-gold-300 transition-colors"
            >
              {SECONDARY_PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navbar (Crisp White / Warm Cream) */}
      <nav className="bg-white/98 backdrop-blur-md border-b border-amber-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 sm:h-28 md:h-32 py-2">
            
            {/* Brand Logo Only - Extra Large, Bold & Prominent */}
            <Link to="/" className="flex items-center group py-1 focus:outline-none shrink-0">
              <img 
                src="/logo.png" 
                alt="Radha Rani's Kitchen" 
                className="h-20 sm:h-24 md:h-28 lg:h-32 max-h-32 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-md font-medium text-sm transition-all duration-200 relative ${
                      isActive
                        ? 'text-maroon-700 font-bold bg-maroon-50 border-b-2 border-maroon-700 shadow-sm'
                        : 'text-stone-700 hover:text-maroon-700 hover:bg-stone-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* WhatsApp CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleWhatsAppClick}
                className="hidden sm:inline-flex items-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
                aria-label="Order on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                <span>Order on WhatsApp</span>
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-maroon-700 hover:bg-maroon-50 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-amber-200 shadow-xl animate-fadeIn">
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="bg-cream-100 p-3 rounded-lg border border-gold-200 mb-3 text-xs text-stone-700 flex items-center justify-between">
                <span>📍 Arepally, Warangal, Telangana</span>
                <span className="font-semibold text-maroon-700">6 AM – 9 PM</span>
              </div>

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-maroon-700 text-white font-semibold shadow-sm'
                        : 'text-stone-700 hover:bg-cream-100 hover:text-maroon-700'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-70" />
                </NavLink>
              ))}

              <div className="pt-3 border-t border-stone-200 space-y-2">
                <button
                  onClick={() => {
                    handleWhatsAppClick();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white py-3 rounded-xl font-bold shadow-md transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                  <span>Order on WhatsApp</span>
                </button>
                
                <a
                  href={`tel:${PRIMARY_PHONE}`}
                  className="w-full flex items-center justify-center gap-2 bg-maroon-700 hover:bg-maroon-800 text-white py-2.5 rounded-xl font-medium text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-300" />
                  <span>Call Us: {PRIMARY_PHONE}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
