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
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white py-12 sm:py-16 px-4 border-b-4 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-gold-400/30">
            <Heart className="w-3.5 h-3.5 fill-gold-300" />
            <span>Our Heritage &amp; Tradition</span>
          </div>
          <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-cream-100">
            About Radha Rani's Kitchen
          </h1>
          <p className="text-gold-400 font-serif italic text-lg sm:text-xl">
            "{BUSINESS_INFO.tagline}"
          </p>
          <p className="text-stone-300 text-xs sm:text-sm max-w-2xl mx-auto">
            Warangal's proud homegrown kitchen preserving pure vegetarian Telugu culinary roots and serving everyday nourishment with genuine devotion.
          </p>
        </div>
      </section>

      {/* Brand Story Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image with traditional frame */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gold-400 aspect-[4/5] bg-stone-900 relative">
              <img
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
                alt="Radha Rani's Kitchen Cooking Tradition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white bg-maroon-900/90 backdrop-blur-md p-4 rounded-2xl border border-gold-400/40">
                <span className="text-gold-400 text-xs font-bold uppercase tracking-wider block">
                  Rooted in Warangal
                </span>
                <p className="text-xs text-stone-200 mt-1">
                  Arepally, Near Hanuman Temple — serving Warangal, Hanamkonda &amp; Kazipet.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gold-500 text-maroon-950 p-4 rounded-2xl shadow-xl font-bold text-center border-2 border-white hidden sm:block">
              <span className="block text-2xl font-serif">100%</span>
              <span className="text-[10px] uppercase tracking-wider block">Pure Vegetarian</span>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest">
                Our Story &amp; Purpose
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-4xl text-maroon-800 leading-tight">
                Born From A Mother's Sacred Kitchen
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                In a fast-paced world dominated by mass-produced foods, chemical flavor enhancers, and impersonal delivery apps, <strong>Radha Rani's Kitchen</strong> was created with a heartfelt promise: to keep alive the sacred warmth, purity, and authenticity of traditional Telugu home cooking.
              </p>
              <p>
                Operating from Arepally in Warangal, our journey began with crafting festive sweets like <em>Sakinalu</em> and <em>Ariselu</em> for family functions and supplying soft, oil-free phulkas to nearby students and working professionals. Seeing how deeply families cherished our uncompromised hygiene and pure desi ghee aroma, we expanded into 7 specialized culinary services.
              </p>
              <p>
                Today, Radha Rani's Kitchen proudly stands as a dependable culinary partner for hundreds of households, hostels, wedding celebrations, and temple vratams across Warangal, Hanamkonda, and Kazipet.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-amber-200">
              <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-center">
                <span className="block font-serif font-bold text-xl sm:text-2xl text-maroon-700">7</span>
                <span className="text-[11px] text-stone-600 font-medium">Core Services</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-center">
                <span className="block font-serif font-bold text-xl sm:text-2xl text-maroon-700">6 AM – 9 PM</span>
                <span className="text-[11px] text-stone-600 font-medium">Open Everyday</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-center col-span-2 sm:col-span-1">
                <span className="block font-serif font-bold text-xl sm:text-2xl text-maroon-700">Tri-Cities</span>
                <span className="text-[11px] text-stone-600 font-medium">Daily Delivery</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Values & Quality Commitments */}
      <section className="bg-cream-200/60 py-12 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Our Non-Negotiables
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-maroon-800">
              The Radha Rani Purity Promise
            </h2>
            <p className="text-stone-600 text-sm max-w-xl mx-auto">
              Every single meal, sweet, and batch of rotis leaving our kitchen follows these sacred quality benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-amber-200/90 shadow-traditional flex items-start gap-4">
                <span className="text-3xl p-3 bg-cream-100 rounded-2xl border border-amber-200 shrink-0">
                  {val.icon}
                </span>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-maroon-800">
                    {val.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Timings, Service Areas & CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-maroon-700 text-white rounded-3xl p-8 sm:p-12 border-2 border-gold-400 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold text-gold-300 uppercase tracking-widest">
              Ready to Taste the Difference?
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-cream-100">
              Connect With Radha Rani's Kitchen Today
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              We serve Warangal, Hanamkonda, Kazipet and surrounding areas every day from 6:00 AM to 9:00 PM. Enquire about wholesale rotis, prasadams, sweets, or catering packages.
            </p>
            <div className="flex items-center gap-4 text-xs text-gold-300 pt-1 font-semibold">
              <span>📍 Arepally, Warangal</span>
              <span>•</span>
              <span>📞 +91 {PRIMARY_PHONE}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2.5"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
              <span>Message on WhatsApp</span>
            </button>
            <Link
              to="/menu"
              className="w-full sm:w-auto bg-white hover:bg-cream-100 text-maroon-800 px-6 py-3.5 rounded-xl font-bold text-sm text-center shadow-md transition-colors"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
