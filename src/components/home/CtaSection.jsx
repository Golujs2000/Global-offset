import React from 'react';
import { Phone, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getPhoneUrl, getWhatsAppUrl } from '../../utils/whatsapp';

export default function CtaSection({ onOpenQuote }) {
  const whatsappUrl = getWhatsAppUrl("Hello Global Offset, I would like to get a quote for bulk printing.");

  return (
    <section className="py-16 md:py-20 bg-primary text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-accent font-bold text-xs uppercase tracking-wider border border-white/15">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Factory Printing in Patna</span>
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Elevate Your Print Quality & Reduce Commercial Costs?
        </h2>

        <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Partner with Global Offset for guaranteed paper quality, sharp registration, and timely delivery. Connect directly with our Patna sales desk for customized quotations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={getPhoneUrl()}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-accent hover:bg-accent-hover text-primary font-black text-sm rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-4 h-4 fill-primary" />
            <span>Call: {BUSINESS_INFO.contact.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Quotation</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 backdrop-blur-xs transition-colors cursor-pointer"
          >
            <span>Request Custom Spec</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-gray-400 pt-2">
          Fast turnarounds • Free paper sample consultation in Patna • Bulk transport to all Bihar districts
        </p>
      </div>
    </section>
  );
}
