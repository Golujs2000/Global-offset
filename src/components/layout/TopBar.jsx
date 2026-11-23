import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { getPhoneUrl, getWhatsAppUrl } from '../../utils/whatsapp';

export default function TopBar() {
  return (
    <div className="bg-primary text-gray-200 text-xs py-2 px-4 border-b border-primary-light hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="truncate">
              Bikna Pahari, Near National Press, Patna, Bihar
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-gray-300">
            <Clock className="w-3.5 h-3.5 text-secondary shrink-0" />
            <span>Mon - Sat: 9:30 AM - 8:30 PM</span>
          </div>
        </div>

        {/* Right: Phone & WhatsApp */}
        <div className="flex items-center gap-4 ml-auto">
          <a 
            href={getPhoneUrl()}
            className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-gray-200"
            title="Call Global Offset Sales Desk"
          >
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>{BUSINESS_INFO.contact.phone}</span>
          </a>

          <span className="text-gray-600">|</span>

          <a 
            href={getWhatsAppUrl("Hello Global Offset, I have a printing inquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            title="Instant WhatsApp Inquiry"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
