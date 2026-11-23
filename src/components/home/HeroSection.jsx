import React from 'react';
import { Phone, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight, Printer, Sparkles, MapPin } from 'lucide-react';
import brandLogoIcon from '../../assets/layered-paper-g-logo.png';
import heroPrintingImage from '../../assets/hero-commercial-printing.webp';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getPhoneUrl, getWhatsAppUrl } from '../../utils/whatsapp';

export default function HeroSection({ onOpenQuote }) {
  const whatsappHeroUrl = getWhatsAppUrl("Hello Global Offset, I am interested in printing solutions in Patna. Please share your catalog and bulk rates.");

  return (
    <section className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center bg-white border-b border-gray-200">
      {/* 3D Photorealistic Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPrintingImage}
          alt="Global Offset Commercial Printing and Paper Solutions in Patna"
          className="w-full h-full object-cover object-right lg:object-center"
          loading="eager"
        />
        {/* Directional gradient wash: Clean white/soft-grey overlay on left for typography, crystal-clear transparency on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:from-white/95 lg:via-white/70 lg:to-transparent pointer-events-none"></div>
        {/* Soft bottom gradient for smooth transition into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (45-55%): Headlines, Value Proposition & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Local Badge with Verified Landmark */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/5 border border-primary/15 text-xs text-secondary font-bold tracking-wide shadow-xs backdrop-blur-xs">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>Bikna Pahari, Near National Press, Patna – 800004</span>
            </div>

            {/* Main Primary SEO Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.12] text-primary">
              Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-blue-600 to-accent">Printing &amp; Paper Solutions</span> Partner in Patna
            </h1>

            {/* Prominent Hindi Sentence & Motto for Patna / Bihar Clients */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/85 border border-secondary/20 shadow-xs backdrop-blur-xs text-left space-y-1">
              <p className="text-sm sm:text-base md:text-lg font-bold text-primary leading-snug">
                पटना एवं पूरे बिहार में विश्वसनीय कमर्शियल ऑफसेट प्रिंटिंग, डायरी व बाइंडिंग समाधान — सीधे फैक्ट्री दर पर।
              </p>
              <p className="text-xs sm:text-sm font-semibold text-secondary flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>✓ सीधे फैक्ट्री दर</span>
                <span>•</span>
                <span>✓ पक्की क्वालिटी व सही GSM</span>
                <span>•</span>
                <span>✓ समय पर तेज डिलीवरी</span>
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-text-main max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Complete commercial offset printing, corporate diary manufacturing, customized registers, professional book &amp; thesis binding, examination copies, and GST bill books. Direct factory pricing for businesses, educational institutions, and printing presses across Bihar.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-text-main font-semibold max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom Executive Diaries &amp; Registers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hardbound, Thesis &amp; Wiro Binding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bulk Commercial Sheet-Fed Offset</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Exam Answer Sheets &amp; Study Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Carbonless NCR Bill &amp; Invoice Books</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                <span>Proprietor Oversight (Abdul Arshad)</span>
              </div>
            </div>

            {/* Call Now, WhatsApp Inquiry, and Request Quote CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href={getPhoneUrl()}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 bg-primary hover:bg-primary-light text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-white text-primary" />
                <span>Call Now: {BUSINESS_INFO.contact.phone}</span>
              </a>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </a>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-gray-50 text-primary font-bold text-sm rounded-xl border border-gray-300 shadow-sm transition-colors cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4 text-secondary" />
              </button>
            </div>

            {/* Trust Assurance Bar */}
            <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-text-muted font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-text-main font-semibold">Direct Factory Rates</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-text-main font-semibold">Prompt Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Printer className="w-4 h-4 text-secondary" />
                <span className="text-text-main font-semibold">Bihar-wide Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column (55%): Showcases the 3D Background Machinery with Floating Glassmorphic Badges */}
          <div className="lg:col-span-5 flex flex-col justify-end lg:justify-center items-center lg:items-end space-y-4">
            
            {/* Floating Live Facility Pill */}
            <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-2xl p-4 sm:p-5 shadow-xl text-primary max-w-sm w-full transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                  <Printer className="w-3.5 h-3.5" />
                  <span>Commercial Press Line</span>
                </span>
                <span className="text-[10px] bg-primary text-white px-2.5 py-0.5 rounded-full font-bold">
                  Bikna Pahari
                </span>
              </div>
              <h3 className="font-bold text-sm text-primary">
                Multi-Color Sheet-Fed Offset &amp; Casing
              </h3>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Computer-to-Plate (CTP) imaging, precision dot reproduction, and automated bookbinding serving all 38 districts of Bihar.
              </p>
            </div>

            {/* Quick Stat Group */}
            <div className="grid grid-cols-3 gap-2.5 max-w-sm w-full">
              <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-xl p-3 text-center shadow-md">
                <div className="text-xl sm:text-2xl font-black text-accent">15+</div>
                <div className="text-[10px] text-text-muted font-bold">Years in Patna</div>
              </div>
              <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-xl p-3 text-center shadow-md">
                <div className="text-xl sm:text-2xl font-black text-secondary">25k+</div>
                <div className="text-[10px] text-text-muted font-bold">Jobs Delivered</div>
              </div>
              <div className="bg-white/90 backdrop-blur-md border border-gray-200/80 rounded-xl p-3 text-center shadow-md">
                <div className="text-xl sm:text-2xl font-black text-emerald-600">54-400</div>
                <div className="text-[10px] text-text-muted font-bold">GSM Stocks</div>
              </div>
            </div>

            {/* Floating Brand Badge */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl py-2 px-4 shadow-xl border border-gray-200 flex items-center gap-2.5">
              <img 
                src={brandLogoIcon} 
                alt="Global Offset Brand Mark" 
                className="w-7 h-7 object-contain"
              />
              <div className="text-left">
                <div className="text-xs font-black text-primary leading-tight">Global Offset</div>
                <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified Press Hub</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
