import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Check, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { PRODUCTS } from '../../data/products';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';

export default function ProductGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Featured Printing Products"
          badgeLink="/products"
          title="Comprehensive Commercial Printing Solutions"
          titleLink="/products"
          subtitle="Explore our specialized range of custom diaries, registers, examination copies, GST bill books, and bulk paper printing manufactured right here in Patna."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(product => {
            const whatsappInquiryUrl = getProductWhatsAppUrl(product.name);

            return (
              <div
                key={product.id}
                className="flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-secondary/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image & Badge - Clickable */}
                <Link
                  to={`/products/${product.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden bg-gray-100 cursor-pointer"
                  title={`View details for ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-accent font-bold text-[11px] rounded-full backdrop-blur-xs border border-white/15">
                      {product.badge}
                    </span>
                  )}
                  
                  <span className="absolute bottom-3 left-3 text-white font-semibold text-xs drop-shadow-sm">
                    Patna Manufacturing
                  </span>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <Link 
                    to={`/products/${product.slug}`} 
                    className="block group/title cursor-pointer"
                    title={`View details for ${product.name}`}
                  >
                    <h3 className="text-xl font-bold text-primary mb-1 group-hover/title:text-secondary group-hover:text-secondary hover:underline transition-colors">
                      {product.name}
                    </h3>
                  </Link>

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

                  <p className="text-xs text-text-muted line-clamp-2 leading-relaxed mb-4">
                    {product.summary}
                  </p>

                  {/* Top 3 Quick Highlights */}
                  <ul className="space-y-1.5 mb-6 text-xs text-text-main grow">
                    {product.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-2 mt-auto">
                    <Link
                      to={`/products/${product.slug}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gray-50 hover:bg-primary hover:text-white text-primary text-xs font-bold rounded-xl transition-colors border border-gray-200"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>

                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                      title={`Inquire about ${product.name} on WhatsApp`}
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

        {/* Bottom Catalog CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary hover:bg-secondary-hover text-white text-sm font-bold rounded-xl shadow-md transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span>View All Printing Categories & Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
