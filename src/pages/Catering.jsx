import React, { useState } from 'react';
import { 
  Users, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { getCateringWhatsAppUrl, PRIMARY_PHONE } from '../utils/whatsapp';

export default function Catering() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    serviceType: 'Traditional Telugu Wedding Feast (Vivaha Bhojanam)',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = getCateringWhatsAppUrl(formData);
    window.open(url, '_blank');
  };

  const cateringPackages = [
    {
      title: "Vivaha Bhojanam (Grand Wedding Feast)",
      subtitle: "Banana Leaf Royal Pure Veg Spread",
      guests: "100 to 1,500+ Guests",
      features: [
        "Welcome Fresh Fruit Juices / Badam Milk",
        "3 Traditional Sweets (Ariselu, Sunnundalu, Gulab Jamun)",
        "2 Hot Snacks (Sakinalu / Veg Pakoda)",
        "Gutti Vankaya / Paneer Butter Masala",
        "Telangana Mudda Pappu with Pure Desi Cow Ghee",
        "Temple Chintapandu Pulihora, Veg Dum Biryani & Bagara Annam",
        "Authentic Telangana Sambar, Mirchi Ka Salan, Rasam, Curd & Paan",
        "Full buffet counter setup & polite uniformed service staff"
      ],
      popular: true
    },
    {
      title: "Satyanarayana Vratam & Pooja Bhojanam",
      subtitle: "Sacred Sattvic (No Onion, No Garlic) Menu",
      guests: "25 to 200 Guests",
      features: [
        "Rava Kesari / Chakkera Pongali Naivedyam",
        "Temple-style Chintapandu Pulihora with roasted groundnuts",
        "Traditional Dosakaya Pappu & Bendakaya/Potato Vepudu",
        "Authentic Pepper-Cumin Rasam & Sweet Pachadi",
        "Ghee Phulkas & Steamed Sona Masoori Rice",
        "Thick Daddojanam (Curd Rice) with ginger and pomegranate",
        "Cooked in sacred madi with pure cow ghee and fresh ingredients"
      ],
      popular: false
    },
    {
      title: "Gruhapravesam (Housewarming) Banquet",
      subtitle: "Auspicious Celebrations for Your New Home",
      guests: "50 to 300 Guests",
      features: [
        "Morning Telugu Tiffin Station (Idli, Vada, Upma & Poori)",
        "Live Hot Phulka & Chapati Counter with Paneer Gravy",
        "Special Telangana Bagara Rice with Dalcha",
        "2 Sweets including Bellam Bobbatlu / Boondi Laddu",
        "Eco-friendly dining setups or buffet counters",
        "Early morning timely delivery tailored to Muhurtham timings"
      ],
      popular: false
    },
    {
      title: "Daily Wholesale Roti Contract",
      subtitle: "For Hostels, Messes, Hotels & Cloud Kitchens",
      guests: "50 to 2,000+ Rotis Daily",
      features: [
        "100% Whole Wheat Oil-Free Phulkas (Puffed over flame)",
        "Layered Soft Chapatis (Light oil/ghee brush)",
        "Authentic hand-patted Jowar Rotis (Jonna Rotte)",
        "Scheduled morning & evening hot delivery in Warangal, Hanamkonda & Kazipet",
        "Consistent weight, thickness, and extreme softness",
        "Competitive wholesale tier pricing with monthly billing options"
      ],
      popular: true
    }
  ];

  const faqs = [
    {
      q: "Do you cater for events outside Warangal?",
      a: "Our primary service areas are Warangal, Hanamkonda, Kazipet, and immediate surrounding areas in Telangana. For large events beyond these areas, please contact us directly on WhatsApp."
    },
    {
      q: "Can you provide strictly no-onion, no-garlic (Sattvic) food?",
      a: "Yes, absolutely! We specialize in Sattvic food for temple rituals, Satyanarayana Swamy Vratams, and religious observances prepared in a dedicated madi manner."
    },
    {
      q: "How many days in advance should we book catering?",
      a: "For weddings and large gatherings (100+ guests), we recommend booking 1-2 weeks in advance. For smaller pooja gatherings (25-50 guests), 48-72 hours notice is usually sufficient."
    },
    {
      q: "How does the wholesale roti delivery work?",
      a: "We deliver twice daily (morning for lunch and evening for dinner) in insulated thermal containers ensuring the rotis arrive steaming hot and soft."
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-14 md:space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white py-10 sm:py-14 md:py-16 px-4 border-b-4 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-3 sm:space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider border border-gold-400/30">
            <Users className="w-3.5 h-3.5" />
            <span>Pure Veg Catering &amp; Wholesale Rotis</span>
          </div>
          <h1 className="font-serif font-extrabold text-2xl sm:text-4xl md:text-5xl text-cream-100">
            Catering &amp; Bulk Roti Orders
          </h1>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Traditional Telugu hospitality for your sacred family celebrations, and reliable daily wholesale roti supply for hostels and hotels across Warangal.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Packages */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive WhatsApp Enquiry Form */}
          <div className="lg:col-span-5 bg-white p-4 sm:p-6 md:p-8 rounded-3xl border border-amber-200/90 shadow-traditional lg:sticky lg:top-28">
            <div className="space-y-1.5 mb-5 sm:mb-6">
              <span className="text-[10px] sm:text-[11px] font-bold text-gold-600 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" /> Instant Quote via WhatsApp
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-maroon-800">
                Book Catering / Bulk Order
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                Fill in your event details below. Submitting automatically opens WhatsApp with a neatly formatted quotation request.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Chandra"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 focus:ring-1 focus:ring-maroon-700 text-base sm:text-sm text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9879687856"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 focus:ring-1 focus:ring-maroon-700 text-base sm:text-sm text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none"
                />
              </div>

              {/* Event Date & Guest Count Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 text-base sm:text-sm text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Guest Count / Qty *
                  </label>
                  <input
                    type="text"
                    name="guestCount"
                    required
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="e.g. 150 guests / 300 rotis"
                    className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 text-base sm:text-sm text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              {/* Service Type Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Service / Occasion Type *
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 text-base sm:text-sm text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none cursor-pointer"
                >
                  <option value="Traditional Telugu Wedding Feast (Vivaha Bhojanam)">
                    Wedding Feast (Vivaha Bhojanam)
                  </option>
                  <option value="Satyanarayana Swamy Vratam (Sattvic No Onion-Garlic)">
                    Satyanarayana Vratam (Sattvic / No Onion-Garlic)
                  </option>
                  <option value="Gruhapravesam (Housewarming) Breakfast/Lunch">
                    Gruhapravesam (Housewarming) Feast
                  </option>
                  <option value="Daily Wholesale Roti Supply Contract (Hostels/Hotels)">
                    Daily Wholesale Roti Contract (Hostels/Hotels)
                  </option>
                  <option value="Traditional Sweets & Snacks Bulk Order (Sakinalu/Ariselu)">
                    Festive Snacks &amp; Sweets Bulk (Sakinalu/Ariselu)
                  </option>
                  <option value="Birthday / Mini Party Meal Box Catering">
                    Mini Party / Birthday Pure Veg Catering
                  </option>
                  <option value="Other Custom Requirement">
                    Other Custom Requirement
                  </option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Specific Requirements / Menu Requests
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Include Gutti Vankaya, Temple Pulihora, and Jowar rotis. Deliver near Subedari, Hanamkonda."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 text-base sm:text-sm text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button with authentic WhatsApp icon */}
              <button
                type="submit"
                className="w-full bg-whatsapp hover:bg-whatsapp-hover active:scale-[0.98] text-white py-3 sm:py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                <span>Submit &amp; Enquire on WhatsApp</span>
              </button>

              <div className="text-[10px] sm:text-[11px] text-stone-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>No advance payment needed to enquire. Instant WhatsApp response.</span>
              </div>
            </form>

            {/* Direct Phone Assistance */}
            <div className="mt-5 pt-4 border-t border-amber-200 flex items-center justify-between text-xs text-stone-600">
              <span>Prefer to discuss over phone?</span>
              <a 
                href={`tel:${PRIMARY_PHONE}`}
                className="font-bold text-maroon-700 hover:text-gold-600 flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {PRIMARY_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Dedicated Packages Showcase */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gold-600">
                Tailored Occasions
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-3xl text-maroon-800">
                Our Signature Packages
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Designed to honour the authenticity of Telugu traditions with pure ingredients, strict hygiene, and punctual delivery.
              </p>
            </div>

            <div className="space-y-5">
              {cateringPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-4 sm:p-6 border transition-all duration-300 shadow-traditional hover:shadow-xl ${
                    pkg.popular ? 'border-2 border-gold-400' : 'border border-amber-200/90'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-100 pb-3">
                    <div>
                      {pkg.popular && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider text-maroon-700 bg-gold-100 px-2.5 py-0.5 rounded-full mb-1">
                          <Sparkles className="w-3 h-3 text-gold-600 fill-current" />
                          Most Requested
                        </span>
                      )}
                      <h3 className="font-serif font-bold text-base sm:text-lg text-maroon-800">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-gold-700 font-medium">
                        {pkg.subtitle}
                      </p>
                    </div>
                    <span className="bg-cream-100 text-maroon-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200 self-start sm:self-auto shrink-0">
                      👥 {pkg.guests}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="py-3">
                    <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-2">
                      Menu Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct WhatsApp button for this specific package */}
                  <div className="pt-3 border-t border-amber-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500">Custom menus available</span>
                    <button
                      onClick={() => {
                        const url = getCateringWhatsAppUrl({
                          ...formData,
                          serviceType: pkg.title
                        });
                        window.open(url, '_blank');
                      }}
                      className="bg-maroon-700 hover:bg-maroon-800 text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold shadow-sm transition-colors flex items-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                      <span>Enquire This Package</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQs Accordion / List */}
            <div className="bg-cream-100/90 rounded-2xl p-4 sm:p-6 border border-amber-200 space-y-4">
              <div className="flex items-center gap-2 text-maroon-800 font-serif font-bold text-base sm:text-lg">
                <HelpCircle className="w-5 h-5 text-gold-600" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="bg-white p-3.5 rounded-xl border border-amber-100 text-xs space-y-1">
                    <strong className="text-maroon-800 block text-xs sm:text-sm">
                      Q: {faq.q}
                    </strong>
                    <p className="text-stone-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
