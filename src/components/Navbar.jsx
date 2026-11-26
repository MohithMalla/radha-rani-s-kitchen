import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  ChevronDown, 
  Utensils,
  ShoppingBag
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getCustomerWhatsAppUrl, PRIMARY_PHONE, SECONDARY_PHONE } from '../utils/whatsapp';
import { BUSINESS_INFO, CATEGORIES } from '../data/products';
import { useOrder } from '../context/OrderContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const location = useLocation();

  const { totalCount, openOrderDrawer } = useOrder();

  // Close mobile drawer and dropdown when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMenuDropdownOpen(false);
  }, [location.pathname, location.search]);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setMenuDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
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
    <>
      <header className="sticky top-0 z-40 shadow-md bg-white">
        {/* 1. Top Announcement Bar (Deep Maroon) - Seamless Infinite Scrolling Single Line Marquee */}
        <div className="bg-maroon-700 text-cream-100 py-1.5 sm:py-2 border-b border-maroon-800 overflow-hidden relative select-none">
          <div className="flex animate-marquee">
            {[1, 2].map((repeatIdx) => (
              <div key={repeatIdx} className="flex items-center gap-6 sm:gap-8 text-[11px] sm:text-xs md:text-sm font-medium pr-6 sm:pr-8 shrink-0 whitespace-nowrap">
                <span className="flex items-center gap-1.5 text-gold-300">
                  <Clock className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Open Daily: 6:00 AM – 9:00 PM</span>
                </span>
                
                <span className="text-gold-500 font-bold text-xs">✦</span>
                
                <span className="flex items-center gap-1.5 text-stone-200">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Serving Warangal, Hanamkonda &amp; Kazipet</span>
                </span>
                
                <span className="text-gold-500 font-bold text-xs">✦</span>
                
                <span className="flex items-center gap-2 text-stone-200">
                  <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Call/WhatsApp:</span>
                  <a 
                    href={`tel:${PRIMARY_PHONE}`} 
                    className="font-bold text-white hover:text-gold-300 transition-colors"
                  >
                    {PRIMARY_PHONE}
                  </a>
                  <span className="text-maroon-400">|</span>
                  <a 
                    href={`tel:${SECONDARY_PHONE}`} 
                    className="font-bold text-white hover:text-gold-300 transition-colors"
                  >
                    {SECONDARY_PHONE}
                  </a>
                </span>
                
                <span className="text-gold-500 font-bold text-xs">✦</span>
                
                <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>100% Pure Vegetarian Traditional Telugu Food &amp; Wholesale Rotis</span>
                </span>

                <span className="text-gold-500 font-bold text-xs">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Main Sticky Navbar */}
        <nav className="bg-white border-b border-amber-100 shadow-xs relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-15 sm:h-18 md:h-20 lg:h-22">
              
              {/* Brand Logo Only */}
              <Link to="/" className="flex items-center group focus:outline-none shrink-0 py-1">
                <img 
                  src="/logo.png" 
                  alt="Radha Rani's Kitchen" 
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[150px] sm:max-w-[190px] md:max-w-none object-contain transition-transform duration-200 group-hover:scale-102 drop-shadow-xs"
                />
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
                {navLinks.map((link) => {
                  if (link.name === 'Menu') {
                    return (
                      <div 
                        key={link.path}
                        className="relative"
                        onMouseEnter={() => setMenuDropdownOpen(true)}
                        onMouseLeave={() => setMenuDropdownOpen(false)}
                      >
                        <NavLink
                          to="/menu"
                          className={({ isActive }) =>
                            `px-2.5 xl:px-3.5 py-2 rounded-md font-medium text-xs xl:text-sm transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${
                              isActive
                                ? 'text-maroon-700 font-bold bg-maroon-50 border-b-2 border-maroon-700 shadow-xs'
                                : 'text-stone-700 hover:text-maroon-700 hover:bg-stone-50'
                            }`
                          }
                        >
                          <span>Menu</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${menuDropdownOpen ? 'rotate-180 text-maroon-700' : 'text-stone-400'}`} />
                        </NavLink>

                        {/* Interactive Desktop Menu Dropdown */}
                        {menuDropdownOpen && (
                          <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-2xl border border-amber-200 p-2.5 z-50 animate-fadeIn">
                            <div className="p-2 border-b border-amber-100 mb-1">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-gold-600 block">
                                Quick Category Jump
                              </span>
                              <Link 
                                to="/menu" 
                                className="text-xs font-bold text-maroon-700 hover:underline flex items-center gap-1 mt-0.5"
                                onClick={() => setMenuDropdownOpen(false)}
                              >
                                <Utensils className="w-3 h-3" />
                                <span>View All Menu Items (65+)</span>
                              </Link>
                            </div>
                            <div className="space-y-0.5">
                              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                                <Link
                                  key={cat.id}
                                  to={`/menu?category=${cat.id}`}
                                  onClick={() => setMenuDropdownOpen(false)}
                                  className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-stone-700 hover:bg-cream-100 hover:text-maroon-700 transition-colors"
                                >
                                  <span className="font-medium">{cat.name}</span>
                                  <span className="text-gold-500 font-bold text-sm">›</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
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
                  );
                })}
              </div>

              {/* Order Tray, WhatsApp CTA & Mobile Toggle */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                {/* Order Tray Button - Desktop & Mobile */}
                <button
                  type="button"
                  onClick={openOrderDrawer}
                  className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 rounded-full text-maroon-800 hover:bg-amber-100/70 border border-amber-200/90 transition-all font-semibold text-xs md:text-sm active:scale-95 cursor-pointer bg-cream-50"
                  title="View Order Tray"
                  aria-label="View Order Tray"
                >
                  <div className="relative">
                    <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-maroon-700" />
                    {totalCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-gold-500 text-maroon-950 text-[10px] font-extrabold w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full flex items-center justify-center shadow-xs">
                        {totalCount}
                      </span>
                    )}
                  </div>
                  <span className="hidden sm:inline">Tray</span>
                </button>

                {/* Tablet & Desktop WhatsApp CTA */}
                <button
                  onClick={handleWhatsAppClick}
                  className="hidden sm:inline-flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white px-3.5 md:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs md:text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shrink-0 cursor-pointer"
                  aria-label="Order on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5 fill-white shrink-0" />
                  <span className="hidden md:inline">Order on WhatsApp</span>
                  <span className="md:hidden">WhatsApp</span>
                </button>

                {/* Mobile Direct 1-Tap WhatsApp CTA */}
                <button
                  onClick={handleWhatsAppClick}
                  className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white shadow-md active:scale-90 transition-all shrink-0 cursor-pointer"
                  aria-label="Chat on WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                </button>

                {/* Mobile & Tablet Drawer Hamburger Toggle Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg text-maroon-700 hover:bg-maroon-50 active:bg-maroon-100 focus:outline-none transition-colors shrink-0 cursor-pointer"
                  aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
        </nav>
      </header>

      {/* 3. Fully Bulletproof Mobile Navigation Drawer Teleported to document.body via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <>
          {/* Backdrop Overlay */}
          <div 
            className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
              mobileMenuOpen 
                ? 'opacity-100 pointer-events-auto z-[99998]' 
                : 'opacity-0 pointer-events-none -z-10'
            }`}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <div 
            className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
              mobileMenuOpen 
                ? 'translate-x-0 z-[99999] pointer-events-auto' 
                : 'translate-x-full z-[99999] pointer-events-none'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Drawer Header */}
            <div className="p-4 border-b border-amber-200 bg-cream-50 flex items-center justify-between sticky top-0 bg-cream-50/98 backdrop-blur-xs z-10">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/logo.png" 
                  alt="Radha Rani's Kitchen" 
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl text-stone-600 hover:text-maroon-700 hover:bg-cream-200 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Body: Links & Details */}
            <div className="p-4 sm:p-5 space-y-4 flex-1">
              {/* Order Tray Quick Access in Drawer */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openOrderDrawer();
                }}
                className="w-full bg-amber-50 hover:bg-amber-100/80 border border-amber-300/80 p-3 rounded-xl flex items-center justify-between text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-maroon-700 text-gold-300 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-maroon-900">Your Order Tray</div>
                    <div className="text-[10px] text-stone-600">
                      {totalCount > 0 ? `${totalCount} items in tray` : 'Tray is empty'}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-maroon-700">
                  <span>View</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>

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
                      `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-maroon-700 text-white shadow-sm'
                          : 'text-stone-700 hover:bg-cream-100 hover:text-maroon-700'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </NavLink>
                ))}
              </div>

              {/* Quick Menu Categories on Mobile */}
              <div className="pt-2 border-t border-amber-100">
                <span className="text-[10px] font-bold text-gold-600 uppercase tracking-widest block mb-2">
                  Browse by Category:
                </span>
                <div className="grid grid-cols-2 gap-1.5 text-xs">
                  {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/menu?category=${cat.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-lg bg-cream-50 hover:bg-cream-200 text-stone-700 text-left font-medium line-clamp-1 border border-amber-100/60"
                    >
                      {cat.shortName}
                    </Link>
                  ))}
                </div>
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
            <div className="p-4 sm:p-5 border-t border-amber-200 bg-stone-50 space-y-2.5 sticky bottom-0 bg-stone-50/98 backdrop-blur-xs">
              <button
                type="button"
                onClick={() => {
                  handleWhatsAppClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-hover text-white py-3 rounded-xl font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                <span>Order on WhatsApp</span>
              </button>
              
              <a
                href={`tel:${PRIMARY_PHONE}`}
                className="w-full flex items-center justify-center gap-2 bg-maroon-700 hover:bg-maroon-800 text-white py-2.5 rounded-xl font-medium text-sm transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-gold-300" />
                <span>Call: {PRIMARY_PHONE}</span>
              </a>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
