import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getWhatsAppUrl, getPhoneUrl } from '../../utils/whatsapp';

export default function MobileStickyBar({ productName = '' }) {
  const whatsappUrl = productName 
    ? getWhatsAppUrl(`Hello Global Offset, I am interested in ${productName}. Please share pricing and details.`)
    : getWhatsAppUrl("Hello Global Offset, I am looking for printing services in Patna. Please share details.");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={getPhoneUrl()}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-primary hover:bg-primary-light text-white text-xs font-semibold rounded-xl shadow-xs transition-colors active:scale-95"
          aria-label={`Call Global Offset at ${BUSINESS_INFO.contact.phone}`}
        >
          <Phone className="w-4 h-4 text-accent" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors active:scale-95"
          aria-label="Inquire via WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
