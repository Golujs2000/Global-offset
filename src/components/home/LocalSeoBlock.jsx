import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, MessageCircle, UserCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getPhoneUrl, getWhatsAppUrl } from '../../utils/whatsapp';

export default function LocalSeoBlock() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-10 lg:p-12 overflow-hidden shadow-2xl relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Address, Local SEO Text & Timings */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider border border-white/15">
                <MapPin className="w-3.5 h-3.5" />
                <span>Patna Printing Solutions Hub</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Patna's Established Commercial Printing & Paper Supplier
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Strategically located at <strong>Kunkun Singh Lane, Bikna Pahari (Near National Press)</strong> in Patna – 800004, Global Offset serves as the focal point for all commercial offset printing, diary manufacturing, register printing, and institutional stationery supply throughout Patna and surrounding Bihar districts.
              </p>

              {/* Verified Location & Contact Details */}
              <div className="space-y-3.5 pt-2 text-sm text-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Official Facility Address:</span>
                    <span>{BUSINESS_INFO.location.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-accent shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Proprietor & Ownership:</span>
                    <span>{BUSINESS_INFO.owner.name} ({BUSINESS_INFO.owner.title})</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-accent shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Direct Inquiry & Order Desk:</span>
                    <a href={getPhoneUrl()} className="text-accent hover:underline font-bold">
                      {BUSINESS_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Operating Hours:</span>
                    <span>Mon – Sat: 9:30 AM to 8:30 PM | Sun: 10:00 AM to 4:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Local Serving Areas tags */}
              <div className="pt-2">
                <div className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Serving Key Commercial Zones:
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/10 rounded-lg text-gray-200 border border-white/10"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-3">
                <a
                  href={BUSINESS_INFO.location.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-secondary hover:bg-secondary-hover text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={getWhatsAppUrl("Hello Global Offset, I want to visit your press in Bikna Pahari Patna.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Column: Embedded Google Map & Verification Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-2 shadow-xl overflow-hidden border border-white/20">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <iframe
                    title="Global Offset Location Map - Bikna Pahari Patna"
                    src={BUSINESS_INFO.location.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                  ></iframe>
                </div>

                <div className="p-3 text-text-main text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-primary">Verified Location in Patna</span>
                  </div>
                  <a
                    href={BUSINESS_INFO.location.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary font-bold hover:underline"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
