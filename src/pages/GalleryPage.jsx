import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Eye, 
  Printer, 
  Tag 
} from 'lucide-react';
import SeoHelmet from '../components/common/SeoHelmet';
import Breadcrumb from '../components/common/Breadcrumb';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function GalleryPage({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const breadcrumbs = [
    { name: 'Work Gallery', url: '/gallery' }
  ];

  return (
    <>
      <SeoHelmet
        title="Printing Work Gallery & Portfolio | Global Offset Patna"
        description="View our commercial printing portfolio in Patna: custom executive diaries, hardbound registers, school examination copies, GST invoice bill books, and study modules."
        canonical="/gallery"
        keywords="Printing Portfolio Patna, Printing Gallery Patna, Diary Samples Patna, Register Binding Samples, Bill Book Printing Examples Bihar"
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
              <span>Commercial Print Portfolio</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Our Printing Work & Production Gallery
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Take an inside look at recent commercial offset print runs, custom executive diaries, durable registers, and institutional answer sheets manufactured at our Bikna Pahari facility.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {GALLERY_CATEGORIES.map((cat, idx) => (
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

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white rounded-3xl border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/90 rounded-full text-primary shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>

                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-accent font-bold text-[11px] rounded-full backdrop-blur-xs border border-white/10">
                    {item.category}
                  </span>
                </div>

                {/* Meta details */}
                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <h3 className="font-bold text-base text-primary mb-2 group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-light text-[11px] font-medium text-text-muted border border-gray-200"
                      >
                        <Tag className="w-2.5 h-2.5 text-secondary" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Quote Trigger Banner */}
          <div className="mt-16 bg-white rounded-3xl p-8 border border-gray-200 text-center space-y-4">
            <h3 className="text-xl font-bold text-primary">
              Inspired by our work? Let's print your project next!
            </h3>
            <p className="text-xs sm:text-sm text-text-muted max-w-xl mx-auto">
              Send us your design file or sample specifications and receive a transparent, competitive quote within hours.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 bg-secondary hover:bg-secondary-hover text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
              >
                Request Quotation
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-gray-900 relative shrink-0">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-4 overflow-y-auto">
              <div>
                <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="text-xl font-bold text-primary mt-1">
                  {selectedItem.title}
                </h3>
              </div>

              <p className="text-sm text-text-muted leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedItem.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-surface-light text-primary text-xs font-semibold rounded-lg border border-gray-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={getWhatsAppUrl(`Hello Global Offset, I saw the "${selectedItem.title}" in your website gallery. Please share pricing for similar printing.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-xs hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire about this on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSelectedItem(null);
                    onOpenQuote();
                  }}
                  className="px-5 py-3 border border-gray-200 text-primary text-xs font-bold rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
