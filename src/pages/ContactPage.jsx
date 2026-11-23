import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  Navigation, 
  CheckCircle2,
  UserCheck,
  BookOpen
} from 'lucide-react';
import SeoHelmet from '../components/common/SeoHelmet';
import Breadcrumb from '../components/common/Breadcrumb';
import { BUSINESS_INFO } from '../data/businessInfo';
import { PRODUCTS } from '../data/products';
import { getPhoneUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: PRODUCTS[0]?.name || 'Diary Printing & Manufacturing',
    quantity: '500',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbs = [
    { name: 'Contact Us', url: '/contact' }
  ];

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please provide your name and contact phone number.");
      return;
    }

    const text = `*New Contact Inquiry - Global Offset Patna*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      (formData.email ? `✉️ *Email:* ${formData.email}\n` : '') +
      `📦 *Requirement:* ${formData.product}\n` +
      `🔢 *Quantity:* ${formData.quantity}\n` +
      (formData.message ? `📝 *Message:* ${formData.message}\n` : '') +
      `\n📍 *Source:* Website Contact Page`;

    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <>
      <SeoHelmet
        title="Contact Global Offset | Printing Press in Bikna Pahari, Patna"
        description="Contact Global Offset in Patna: +91 93869 51081. Located at Kunkun Singh Lane, Bikna Pahari, Near National Press, Patna, Bihar – 800004. Get quotes for diary manufacturing, registers, bill books & commercial printing."
        canonical="/contact"
        keywords="Contact Printing Press Patna, Global Offset Phone Number, Bikna Pahari Printing Press, Patna Offset Press Address, Printing Shop Near National Press Patna"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumb items={breadcrumbs} />

      {/* Header Banner */}
      <section className="bg-primary text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bikna Pahari, Patna – 800004</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Get in Touch with Global Offset
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Whether you need sample approval, technical guidance on paper GSM, or a competitive commercial quote, our Patna sales desk is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Official Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Owner & Proprietor Direct Desk Card */}
              <div className="p-5 rounded-3xl bg-gradient-to-br from-primary via-[#112445] to-primary text-white border border-white/10 shadow-md relative overflow-hidden">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                      Owner & Proprietor
                    </span>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {BUSINESS_INFO.owner.name}
                    </h3>
                    <p className="text-[11px] text-gray-300">
                      Direct Commercial Quotations & Institutional Tenders
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-200 mt-3.5 italic border-l-2 border-accent pl-3 leading-relaxed">
                  "{BUSINESS_INFO.owner.message}"
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Direct Contact Channels
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mt-1">
                    Press & Sales Office
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-text-main">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Office & Facility Address:</div>
                      <p className="text-text-muted mt-0.5 leading-relaxed text-xs sm:text-sm">
                        {BUSINESS_INFO.location.fullAddress}
                      </p>
                      <p className="text-[11px] text-secondary font-semibold mt-1">
                        Landmark: Near National Press, Bikna Pahari
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Phone Number:</div>
                      <a 
                        href={getPhoneUrl()} 
                        className="text-secondary font-bold text-base hover:underline block mt-0.5"
                      >
                        {BUSINESS_INFO.contact.phone}
                      </a>
                      <p className="text-[11px] text-text-muted">Direct call for orders & urgent consultations</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">WhatsApp Official:</div>
                      <a 
                        href={getWhatsAppUrl("Hello Global Offset, I am contacting you from your website.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 font-bold hover:underline block mt-0.5 text-sm"
                      >
                        {BUSINESS_INFO.contact.whatsapp}
                      </a>
                      <p className="text-[11px] text-text-muted">Instant catalog sharing, quotations & digital proofing</p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-full">
                      <div className="font-bold text-primary">Working Hours:</div>
                      <div className="text-xs text-text-muted mt-1 space-y-1">
                        <div className="flex justify-between">
                          <span>Monday – Saturday:</span>
                          <span className="font-semibold text-primary">9:30 AM – 8:30 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span className="font-semibold text-secondary">10:00 AM – 4:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Driving directions button */}
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.location.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-accent" />
                    <span>Get Navigation Directions in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Local Serving Area Pill */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-3">
                <h3 className="font-bold text-primary text-sm">
                  Patna Local Access & Bihar Delivery
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  Easily accessible from Langar Toli, Ashok Rajpath, Patna University, Bakarganj, and Gandhi Maidan. We organize safe door delivery for bulk printing across all districts of Bihar.
                </p>
              </div>

              {/* Book Binding Service Desk */}
              <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <BookOpen className="w-4 h-4 text-secondary" />
                  <span>In-House Book Binding & Trade Desk</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  We provide professional hardbound thesis binding, thermal perfect binding, section thread sewing, and metallic wiro binding. Pre-printed customer sheets and publisher stock are welcomed.
                </p>
              </div>

            </div>

            {/* Right Column: Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Online Inquiry & Quote Request
                  </span>
                  <h2 className="text-2xl font-bold text-primary mt-1">
                    Send Us Your Requirements
                  </h2>
                  <p className="text-xs text-text-muted mt-1">
                    Fill out the form below. We will immediately review your specs and connect via WhatsApp or phone.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center space-y-4 bg-surface-light rounded-2xl border border-gray-100">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">Requirement Forwarded!</h3>
                    <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your requirement has been forwarded to our Patna sales team on WhatsApp. We will provide pricing and paper sample details shortly.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-light transition-colors cursor-pointer"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-primary mb-1.5">
                          Full Name / Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Anand Sharma / Modern School"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-primary mb-1.5">
                          Phone Number / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 93869 51081"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-primary mb-1.5">
                          Product / Service Required
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all bg-white"
                        >
                          {PRODUCTS.map(p => (
                            <option key={p.id} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                          <option value="Custom Paper Printing & Other Solutions">Custom Paper Printing & Other Solutions</option>
                          <option value="Paper Stock & Printing Material Supply">Paper Stock & Printing Material Supply</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-primary mb-1.5">
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          placeholder="e.g. 500 copies / 50 books"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-primary mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="yourname@organization.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-primary mb-1.5">
                        Project Specifications & Details
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Please describe paper GSM, dimensions, binding style, delivery location in Bihar, or any deadline..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send Inquiry via WhatsApp</span>
                      </button>
                      <p className="text-[11px] text-text-muted text-center mt-2">
                        Fast response • Direct factory estimates • Verified Patna printing facility
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>

          {/* Embedded Google Map Section */}
          <div className="mt-16 bg-white rounded-3xl p-4 sm:p-6 border border-gray-200 shadow-md overflow-hidden">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-primary">
                  Interactive Map: Visit Global Offset in Bikna Pahari
                </h3>
                <p className="text-xs text-text-muted">
                  Kunkun Singh Lane, Bikna Pahari, Near National Press, Patna, Bihar – 800004
                </p>
              </div>
              <a
                href={BUSINESS_INFO.location.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps App →</span>
              </a>
            </div>

            <div className="aspect-[21/9] min-h-[320px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              <iframe
                title="Global Offset Location Map"
                src={BUSINESS_INFO.location.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
