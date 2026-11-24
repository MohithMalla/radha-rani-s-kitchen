import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { BUSINESS_INFO } from '../data/products';
import { getCustomerWhatsAppUrl, PRIMARY_PHONE } from '../utils/whatsapp';

export default function About() {
  const handleWhatsApp = () => {
    window.open(getCustomerWhatsAppUrl("order_now"), '_blank');
  };

  const values = [
    {
      title: "100% Pure Vegetarian & Sattvic Discipline",
      desc: "Our kitchen is strictly pure vegetarian. We maintain sacred cleanliness (madi) especially when preparing temple prasadams and vratam naivedyams.",
      icon: "🌱"
    },
    {
      title: "Pure Desi Cow Ghee & Whole Grains",
      desc: "No compromises on ingredients. We use pure desi cow ghee, cold-pressed oils, organic aged jaggery, and stone-ground flours.",
      icon: "✨"
    },
    {
      title: "Zero Preservatives or Artificial Flavours",
      desc: "No commercial flavor enhancers, no tasting salt (ajinomoto), no food coloring, and no storage chemicals. What we feed your family is what we feed ours.",
      icon: "🛡️"
    },
    {
      title: "Authentic Telangana Heritage Recipes",
      desc: "From crispy sesame Sakinalu and ghee Ariselu to handmade Jowar rotis (Jonna Rotte), every item celebrates centuries of Telangana culinary heritage.",
      icon: "🥘"
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-14 md:space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white py-10 sm:py-14 md:py-16 px-4 border-b-4 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-3 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-gold-400/30">
            <Heart className="w-3.5 h-3.5 fill-gold-300" />
            <span>Our Heritage &amp; Tradition</span>
          </div>
          <h1 className="font-serif font-extrabold text-2xl sm:text-4xl md:text-5xl text-cream-100">
            About Radha Rani's Kitchen
          </h1>
          <p className="text-gold-400 font-serif italic text-base sm:text-xl">
            "{BUSINESS_INFO.tagline}"
          </p>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Warangal's proud homegrown kitchen preserving pure vegetarian Telugu culinary roots and serving everyday nourishment with genuine devotion.
          </p>
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image with traditional frame */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-400 aspect-[4/5] bg-stone-900 relative">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
                alt="Radha Rani's Kitchen Cooking Tradition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white bg-maroon-900/90 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-gold-400/40">
                <span className="text-gold-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider block">
                  Rooted in Warangal
                </span>
                <p className="text-xs text-stone-200 mt-1">
                  Arepally, Near Hanuman Temple — serving Warangal, Hanamkonda &amp; Kazipet.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gold-500 text-maroon-950 p-3.5 sm:p-4 rounded-2xl shadow-xl font-bold text-center border-2 border-white hidden sm:block">
              <span className="block text-2xl font-serif">100%</span>
              <span className="text-[10px] uppercase tracking-wider block">Pure Vegetarian</span>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="space-y-1.5">
              <span className="text-[10px] sm:text-xs font-bold text-gold-600 uppercase tracking-widest">
                Our Story &amp; Purpose
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-maroon-800 leading-tight">
                Born in Warangal, Rooted in Unconditional Purity
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Radha Rani's Kitchen began with a simple mother's conviction: wholesome food made without adulteration, chemicals, or haste is the greatest blessing a family can receive. Located in Arepally, Warangal, our kitchen brings the soulful culinary traditions of Telangana into everyday modern life.
            </p>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              Whether preparing a batch of 500 daily whole wheat phulkas for local college hostels and hotels, rolling delicate sesame Sakinalu for Sankranti, or simmering Chakkera Pongali for a temple pooja, our standards never waver. Every dish is 100% pure vegetarian, prepared with clean RO water, pure cow ghee, and unwavering respect for tradition.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-amber-200 text-center shadow-xs">
                <span className="font-serif font-bold text-lg sm:text-xl text-maroon-700 block">6:00 AM</span>
                <span className="text-[10px] sm:text-xs text-stone-500 font-medium">Daily Fresh Start</span>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-amber-200 text-center shadow-xs">
                <span className="font-serif font-bold text-lg sm:text-xl text-maroon-700 block">100%</span>
                <span className="text-[10px] sm:text-xs text-stone-500 font-medium">Desi Cow Ghee</span>
              </div>
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-amber-200 text-center shadow-xs col-span-2 sm:col-span-1">
                <span className="font-serif font-bold text-lg sm:text-xl text-maroon-700 block">Tri-Cities</span>
                <span className="text-[10px] sm:text-xs text-stone-500 font-medium">Warangal Coverage</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="bg-whatsapp hover:bg-whatsapp-hover text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
                <span>Connect with Us on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4 Core Pillars of Radha Rani's Kitchen */}
      <section className="bg-cream-200/80 py-10 sm:py-14 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center space-y-1.5 mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-600">
              Our Purity Code
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-maroon-800">
              Why Our Kitchen Is Different
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto">
              We hold our kitchen to the highest standards of cleanliness and traditional Telugu cooking ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-amber-200/90 shadow-traditional flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="text-2xl sm:text-3xl mb-2">{val.icon}</div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-maroon-800">
                    {val.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
                <div className="w-8 h-1 bg-gold-400 rounded-full mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
