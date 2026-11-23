import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import brandLogoIcon from '../../assets/layered-paper-g-logo.png';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const defaultUrl = getWhatsAppUrl("Hello Global Offset, I need assistance with printing services in Patna.");

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Pop-up Quick Prompt */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-primary text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden shadow-xs border border-white/20">
                  <img 
                    src={brandLogoIcon} 
                    alt="Global Offset" 
                    className="w-full h-full object-contain"
                    width="36"
                    height="36"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-primary"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight">Global Offset</h4>
                <p className="text-[11px] text-gray-300">Patna • Online for Inquiries</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white p-1 rounded-full transition-colors cursor-pointer"
              aria-label="Close chat prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="p-3.5 bg-gray-50 text-xs text-text-main space-y-2">
            <p className="bg-white p-2.5 rounded-xl rounded-tl-none shadow-xs border border-gray-100">
              👋 Hi! Welcome to Global Offset Patna. Looking for custom diaries, bill books, registers, or commercial offset printing?
            </p>
            <p className="text-[11px] text-text-muted text-right">Typically replies within 15 minutes</p>
          </div>

          <div className="p-3 bg-white border-t border-gray-100">
            <a
              href={defaultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs rounded-xl shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 z-10">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat with Global Offset on WhatsApp"
          className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-hidden focus:ring-4 focus:ring-green-300 cursor-pointer"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </button>

        {/* Floating Tooltip (Desktop) */}
        {!isOpen && (
          <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-primary text-white text-xs font-medium py-1.5 px-3 rounded-lg shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Chat on WhatsApp
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rotate-45"></div>
          </div>
        )}
      </div>
    </div>
  );
}
