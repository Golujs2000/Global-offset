import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  Check, 
  Printer
} from 'lucide-react';
import SeoHelmet from '../components/common/SeoHelmet';
import Breadcrumb from '../components/common/Breadcrumb';
import { PRODUCTS } from '../data/products';
import { getProductWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function ProductsPage({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Commercial & Paper',
    'Diaries & Registers',
    'Binding & Finishing',
    'Educational & Coaching',
    'Bills & Stationery'
  ];

  const filterMap = {
    'All': () => true,
    'Commercial & Paper': (p) => ['paper-printing', 'commercial-printing'].includes(p.slug),
    'Diaries & Registers': (p) => ['diary-printing', 'register-printing', 'notebook-printing'].includes(p.slug),
    'Binding & Finishing': (p) => ['book-binding-services', 'diary-printing', 'register-printing'].includes(p.slug),
    'Educational & Coaching': (p) => ['exam-copy-printing', 'study-material-printing', 'notebook-printing'].includes(p.slug),
    'Bills & Stationery': (p) => ['bill-book-printing', 'receipt-book-printing', 'office-stationery'].includes(p.slug)
  };

  const filteredProducts = PRODUCTS.filter(filterMap[activeCategory] || (() => true));

  const breadcrumbs = [
    { name: 'Products & Services', url: '/products' }
  ];

  return (
    <>
      <SeoHelmet
        title="Printing Products & Commercial Solutions in Patna | Global Offset"
        description="Explore Global Offset's complete printing product range in Patna: diary manufacturing, register printing, examination answer copies, study material, GST bill books, and bulk offset printing."
        canonical="/products"
        keywords="Printing Products Patna, Commercial Printing Services Patna, Diary Manufacturers Patna, Register Printing Bikna Pahari, Exam Copy Printing Bihar, Offset Press Products"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumb items={breadcrumbs} />

      {/* Header Banner */}
      <section className="bg-primary text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
              <Printer className="w-3.5 h-3.5" />
              <span>Direct Manufacturing from Bikna Pahari, Patna</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Commercial Printing Products & Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              From school exam booklets and corporate executive diaries to GST carbonless invoice books and high-volume offset sheets, browse our full industrial printing catalog.
            </p>
          </div>
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="py-16 md:py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-secondary text-white shadow-md scale-105'
                    : 'bg-white text-text-main hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => {
              const whatsappUrl = getProductWhatsAppUrl(product.name);

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-accent font-bold text-[11px] rounded-full shadow-xs">
                        {product.badge}
                      </span>
                    )}

                    <span className="absolute bottom-3 left-3 text-white text-xs font-semibold drop-shadow-sm">
                      Patna In-House Press
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col grow">
                    <h2 className="text-xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                      <Link to={`/products/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h2>

                    {product.hindiName && (
                      <div className="text-xs font-bold text-accent mb-1.5">
                        • {product.hindiName}
                      </div>
                    )}

                    <p className="text-xs font-semibold text-secondary mb-2">
                      {product.tagline}
                    </p>

                    {product.hindiTagline && (
                      <div className="text-xs font-medium text-gray-800 bg-amber-50/90 border border-amber-200/70 rounded-lg p-2.5 mb-3 leading-relaxed">
                        <span className="font-bold text-primary block text-[11px] uppercase tracking-wider mb-0.5">हिंदी विवरण:</span>
                        {product.hindiTagline}
                      </div>
                    )}

                    <p className="text-xs text-text-muted leading-relaxed mb-4 line-clamp-2">
                      {product.summary}
                    </p>

                    {/* Features summary */}
                    <div className="space-y-1.5 mb-6 text-xs text-text-main grow">
                      {product.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-2 mt-auto">
                      <Link
                        to={`/products/${product.slug}`}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-xl transition-colors"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bulk Inquiries Callout */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                Custom Orders & Paper Supply
              </span>
              <h3 className="text-2xl font-bold text-primary">
                Need a Custom Size, Non-Standard GSM, or Bulk Paper Supply?
              </h3>
              <p className="text-sm text-text-muted max-w-2xl">
                We also supply raw maplitho, art paper, bond sheets, and specialized binding materials to regional printing presses and trade bookbinders across Bihar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3.5 bg-secondary hover:bg-secondary-hover text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
              >
                Request Custom Specs
              </button>
              <a
                href={getPhoneUrl()}
                className="w-full sm:w-auto px-6 py-3.5 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-xl transition-colors"
              >
                Call: {BUSINESS_INFO.contact.phone}
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
