import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  CheckCircle2, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { BUSINESS_INFO } from '../data/products';
import { getGeneralWhatsAppUrl, PRIMARY_PHONE, SECONDARY_PHONE } from '../utils/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceInterest: 'Wholesale Roti Supply',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleQuickWhatsAppSubmit = (e) => {
    e.preventDefault();
    const msg = `Namaste Radha Rani's Kitchen! 🙏\n\n*CONTACT FORM MESSAGE*\n━━━━━━━━━━━━━━━━━━━━\n👤 *Name:* ${formData.name || 'Customer'}\n📞 *Phone:* ${formData.phone || 'Not provided'}\n🍲 *Interest:* ${formData.serviceInterest}\n💬 *Message:* ${formData.message || 'Please contact me regarding your offerings.'}\n━━━━━━━━━━━━━━━━━━━━\nLooking forward to your response!`;
    window.open(getGeneralWhatsAppUrl(msg), '_blank');
  };

  const handleDirectWhatsApp = () => {
    window.open(getGeneralWhatsAppUrl("Direct Contact Enquiry"), '_blank');
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 text-white py-12 sm:py-16 px-4 border-b-4 border-gold-500 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-gold-500/20 text-gold-300 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-gold-400/30">
            <MapPin className="w-3.5 h-3.5" />
            <span>Warangal • Hanamkonda • Kazipet</span>
          </div>
          <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-cream-100">
            Contact Radha Rani's Kitchen
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto">
            We are here to assist you with daily wholesale roti orders, pooja prasadams, festive snacks, or catering bookings. Reach us on WhatsApp or call us directly!
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards + WhatsApp Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-amber-200/90 shadow-traditional space-y-4">
              <div className="flex items-center gap-3 border-b border-amber-100 pb-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 text-maroon-700 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-maroon-800">
                    Call or WhatsApp
                  </h3>
                  <p className="text-xs text-stone-500">Quick response within minutes</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-cream-50 border border-amber-200">
                  <div>
                    <span className="text-[11px] font-semibold text-stone-500 block uppercase">
                      Primary Line &amp; WhatsApp:
                    </span>
                    <a 
                      href={`tel:${PRIMARY_PHONE}`}
                      className="font-bold text-maroon-700 hover:text-gold-600 text-base flex items-center gap-1.5"
                    >
                      +91 {PRIMARY_PHONE}
                    </a>
                  </div>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="bg-whatsapp hover:bg-whatsapp-hover text-white px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-white shrink-0" />
                    <span>WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-cream-50 border border-amber-200">
                  <div>
                    <span className="text-[11px] font-semibold text-stone-500 block uppercase">
                      Secondary Line:
                    </span>
                    <a 
                      href={`tel:${SECONDARY_PHONE}`}
                      className="font-bold text-maroon-700 hover:text-gold-600 text-base flex items-center gap-1.5"
                    >
                      +91 {SECONDARY_PHONE}
                    </a>
                  </div>
                  <a
                    href={`tel:${SECONDARY_PHONE}`}
                    className="bg-maroon-700 hover:bg-maroon-800 text-white px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Timings Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-amber-200/90 shadow-traditional space-y-4">
              <div className="flex items-center gap-3 border-b border-amber-100 pb-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 text-maroon-700 flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-maroon-800">
                    Kitchen Address &amp; Hours
                  </h3>
                  <p className="text-xs text-stone-500">Visit our kitchen in Arepally</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide block">
                    Physical Address:
                  </span>
                  <p className="font-medium text-stone-800 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-amber-100">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide block">
                    Business Hours:
                  </span>
                  <p className="font-bold text-maroon-700 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold-500" />
                    {BUSINESS_INFO.businessTimings}
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-amber-100">
                  <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wide block">
                    Service Coverage:
                  </span>
                  <p className="text-stone-600">
                    Warangal, Hanamkonda, Kazipet and surrounding nearby localities.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-maroon-700 hover:text-gold-600 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-gradient-to-r from-maroon-700 to-maroon-800 text-white p-6 rounded-2xl border border-gold-400 shadow-traditional flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-gold-300 tracking-wider">
                  Follow Our Journey
                </span>
                <h4 className="font-serif font-bold text-lg">
                  Instagram @radha.raniskitchen
                </h4>
                <p className="text-xs text-stone-300">
                  Watch behind-the-scenes reels and festive sweet batches.
                </p>
              </div>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-maroon-800 p-3 rounded-full hover:bg-gold-200 transition-colors shrink-0 shadow-md"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
            </div>

          </div>

          {/* Right Column: Quick WhatsApp Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/90 shadow-traditional space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-500" /> Direct Messaging
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-maroon-800">
                Send a Quick WhatsApp Message
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Have a question about hostel roti contracts, festive sweets, or want a custom menu quote? Fill this quick form to initiate an instant WhatsApp chat with our kitchen managers.
              </p>
            </div>

            <form onSubmit={handleQuickWhatsAppSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sridhar Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 focus:ring-1 focus:ring-maroon-700 text-xs text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9879687856"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 focus:ring-1 focus:ring-maroon-700 text-xs text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Service You Are Inquiring About
                </label>
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 text-xs text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none cursor-pointer"
                >
                  <option value="Wholesale Roti Supply (Hostels/Hotels)">
                    Wholesale Roti Supply (Hostels/Hotels)
                  </option>
                  <option value="Traditional Snacks & Sweets (Sakinalu/Ariselu)">
                    Traditional Snacks &amp; Sweets (Sakinalu/Ariselu)
                  </option>
                  <option value="Homemade Prasadams (Vratam/Temple Offerings)">
                    Homemade Prasadams (Vratam/Temple Offerings)
                  </option>
                  <option value="Catering Services (Weddings/Housewarming)">
                    Catering Services (Weddings/Housewarming)
                  </option>
                  <option value="Vegetarian Daily Meals & Tiffins">
                    Vegetarian Daily Meals &amp; Tiffins
                  </option>
                  <option value="Fresh Juices & Summer Coolers">
                    Fresh Juices &amp; Summer Coolers
                  </option>
                  <option value="Pooja Essentials & Pure Cow Ghee">
                    Pooja Essentials &amp; Pure Cow Ghee
                  </option>
                  <option value="General Enquiry">
                    General Enquiry / Other
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Your Message / Requirement Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need, your approximate quantity or dates, and any delivery preferences..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-maroon-700 text-xs text-stone-800 bg-cream-50 focus:bg-white transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                <span>Send to WhatsApp (+91 {PRIMARY_PHONE})</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Opens directly in your WhatsApp app or WhatsApp Web</span>
              </div>
            </form>
          </div>

        </div>

        {/* Google Maps Location Section */}
        <div className="mt-12 bg-white rounded-3xl overflow-hidden border border-amber-200/90 shadow-traditional">
          <div className="p-6 bg-cream-100/90 border-b border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold text-gold-600 uppercase tracking-widest block">
                Find Our Location
              </span>
              <h3 className="font-serif font-bold text-xl text-maroon-800">
                Arepally, Near Hanuman Temple, Warangal
              </h3>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-maroon-700 hover:bg-maroon-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2 self-start sm:self-auto shadow-sm"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-80 sm:h-96 relative bg-stone-200">
            <iframe
              title="Radha Rani's Kitchen Location - Arepally, Warangal"
              src="https://maps.google.com/maps?q=Arepally,+Warangal,+Telangana,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

    </div>
  );
}
