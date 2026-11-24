import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu as MenuIcon, 
  X, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getCustomerWhatsAppUrl, PRIMARY_PHONE, SECONDARY_PHONE } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/products';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Menu', path: '/menu' },
    { name: 'Catering', path: '/catering' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleWhatsAppClick = () => {
    window.open(getCustomerWhatsAppUrl("header_order"), "_blank");
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 1. Top Announcement Bar (Deep Maroon) - Responsive wrap on small mobile */}
      <div className="bg-maroon-700 text-cream-100 text-[11px] sm:text-xs md:text-sm py-1.5 sm:py-2 px-3 sm:px-4 border-b border-maroon-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-1 text-center md:text-left">
          
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 font-medium text-gold-300">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>{BUSINESS_INFO.businessTimings}</span>
            </span>
            <span className="hidden sm:inline text-maroon-300">•</span>
            <span className="flex items-center gap-1 text-stone-200">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-400 shrink-0" />
              <span>Warangal, Hanamkonda &amp; Kazipet</span>
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-stone-300 flex-wrap">
            <span className="hidden sm:inline">Call/WhatsApp:</span>
            <a 
              href={`tel:${PRIMARY_PHONE}`} 
              className="font-semibold text-white hover:text-gold-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-400 shrink-0" />
              <span>{PRIMARY_PHONE}</span>
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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-15 sm:h-18 md:h-20 lg:h-22">
            
            {/* Brand Logo Only - Proportionally scaled for 320px mobile up to 4K monitors */}
            <Link to="/" className="flex items-center group focus:outline-none shrink-0 py-1">
              <img 
                src="/logo.png" 
                alt="Radha Rani's Kitchen" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[150px] sm:max-w-[190px] md:max-w-none object-contain transition-transform duration-200 group-hover:scale-102 drop-shadow-xs"
              />
            </Link>

            {/* Desktop Navigation Links (Visible on large laptops & desktops) */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2.5 xl:px-3.5 py-2 rounded-md font-medium text-xs xl:text-sm transition-all duration-200 relative whitespace-nowrap ${
                      isActive
                        ? 'text-maroon-700 font-bold bg-maroon-50 border-b-2 border-maroon-700 shadow-xs'
                        : 'text-stone-700 hover:text-maroon-700 hover:bg-stone-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* WhatsApp CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Tablet & Desktop WhatsApp CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="hidden sm:inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-3.5 md:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shrink-0"
                aria-label="Order on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5 fill-white shrink-0" />
                <span className="hidden md:inline">Order on WhatsApp</span>
                <span className="md:hidden">WhatsApp</span>
              </button>

              {/* Mobile Direct 1-Tap WhatsApp CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-md active:scale-90 transition-all shrink-0"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
              </button>

              {/* Mobile & Tablet Drawer Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-maroon-700 hover:bg-maroon-50 focus:outline-none transition-colors shrink-0"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
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

        {/* 3. Fully Responsive Slide-Over Mobile & Tablet Navigation Drawer */}
        {/* Backdrop Overlay */}
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-over Drawer Panel */}
        <div 
          className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="p-4 border-b border-amber-200 bg-cream-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Radha Rani's Kitchen" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-stone-600 hover:text-maroon-700 hover:bg-cream-200 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Body: Links & Details */}
          <div className="p-4 sm:p-5 space-y-4 flex-1">
            {/* Quick Pure Veg Badge */}
            <div className="bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0"></span>
              <span className="font-semibold">100% Pure Vegetarian • Warangal</span>
            </div>

            {/* Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
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
            </div>

            {/* Quick Info Box */}
            <div className="bg-cream-100/80 p-3 rounded-xl border border-amber-200 text-xs text-stone-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span><strong>Timings:</strong> 6:00 AM – 9:00 PM Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                <span>Arepally, Near Hanuman Temple, Warangal</span>
              </div>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-amber-200 bg-stone-50 space-y-2.5">
            <button
              onClick={() => {
                handleWhatsAppClick();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>Order on WhatsApp</span>
            </button>
            
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="w-full flex items-center justify-center gap-2 bg-maroon-700 hover:bg-maroon-800 text-white py-2.5 rounded-xl font-medium text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-300" />
              <span>Call: {PRIMARY_PHONE}</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
