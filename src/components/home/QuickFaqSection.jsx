import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { FAQS } from '../../data/faqs';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export default function QuickFaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-surface-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Common Questions About Our Patna Printing Services"
          subtitle="Everything you need to know about our commercial offset capabilities, corporate diary manufacturing, order minimums, and delivery across Bihar."
        />

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-primary">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-secondary text-white rotate-180' : 'bg-gray-100 text-text-muted'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-text-muted leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-gray-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-sm">Have a unique printing specification?</h4>
              <p className="text-xs text-text-muted">Our Patna printing press specialists are available to answer your technical questions.</p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Hello Global Offset, I have a specific question about your printing solutions in Patna.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
