import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle, Phone } from 'lucide-react';
import brandLogoIcon from '../../assets/layered-paper-g-logo.png';
import { PRODUCTS } from '../../data/products';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { BUSINESS_INFO } from '../../data/businessInfo';

export default function QuoteModal({ isOpen, onClose, preselectedProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: preselectedProduct || PRODUCTS[0]?.name || 'Diary Printing & Manufacturing',
    quantity: '500',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = `*New Printing Quote Request - Global Offset Patna*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📦 *Product:* ${formData.product}\n` +
      `🔢 *Estimated Quantity:* ${formData.quantity}\n` +
      (formData.notes ? `📝 *Requirements:* ${formData.notes}\n` : '') +
      `\n📍 *Source:* Website Inquiry Modal`;

    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Official Logo Mark */}
        <div className="bg-primary text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
              <img 
                src={brandLogoIcon} 
                alt="Global Offset" 
                className="w-full h-full object-contain"
                width="40"
                height="40"
              />
            </div>
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-wider block">Fast Quotation</span>
              <h3 className="text-base sm:text-lg font-bold leading-tight">Request a Printing Quote</h3>
              <p className="text-[11px] text-gray-300">Direct factory pricing from Bikna Pahari, Patna</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-primary">Inquiry Forwarded!</h4>
              <p className="text-sm text-text-muted max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Your requirement has been forwarded to our Patna sales desk via WhatsApp. Our team will share quotation and sample details shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary-light transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call Us Directly</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 border border-gray-200 text-text-main text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-text-main mb-1.5">
                  Your Full Name / Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Ramesh Kumar / ABC Academy"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1.5">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-main mb-1.5">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    placeholder="e.g. 500 copies / 50 books"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-main mb-1.5">
                  Select Product or Service <span className="text-red-500">*</span>
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all bg-white"
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Custom Paper Printing & Other Solutions">Custom Paper Printing & Other Solutions</option>
                  <option value="Printing Materials & Paper Supply">Printing Materials & Paper Supply</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-main mb-1.5">
                  Specifications / Additional Notes (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  placeholder="Mention paper GSM, size (A4, A5), binding type, or delivery location in Bihar..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-200 focus:outline-hidden focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold rounded-xl shadow-md transition-all active:scale-[0.99] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Request via WhatsApp</span>
                </button>
                <p className="text-[11px] text-text-muted text-center mt-2">
                  Immediate quote calculation & samples assistance via WhatsApp.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
