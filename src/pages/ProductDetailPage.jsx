import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  Layers, 
  Sliders, 
  FileCheck,
  Building2
} from 'lucide-react';
import SeoHelmet from '../components/common/SeoHelmet';
import Breadcrumb from '../components/common/Breadcrumb';
import { PRODUCTS } from '../data/products';
import { getProductWhatsAppUrl, getPhoneUrl } from '../utils/whatsapp';

export default function ProductDetailPage({ onOpenQuote }) {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const breadcrumbs = [
    { name: 'Products & Services', url: '/products' },
    { name: product.name, url: `/products/${product.slug}` }
  ];

  const whatsappInquiryUrl = getProductWhatsAppUrl(product.name);
  const relatedProducts = PRODUCTS.filter(p => product.relatedSlugs?.includes(p.slug));

  return (
    <>
      <SeoHelmet
        title={`${product.name} in Patna | Global Offset Bihar`}
        description={`${product.summary} Located in Bikna Pahari, Patna. Direct factory rates, premium paper grades, and fast Bihar dispatch.`}
        canonical={`/products/${product.slug}`}
        keywords={`${product.name} in Patna, ${product.name} Bihar, ${product.name} Bikna Pahari, Commercial ${product.name}, Printing Press Patna`}
        breadcrumbs={breadcrumbs}
        faqs={product.faqs}
        product={product}
      />

      <Breadcrumb items={breadcrumbs} />

      {/* Hero Header Section */}
      <section className="bg-primary text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Patna Manufacturing • {product.badge || 'Commercial Grade'}</span>
              </div>

              {/* Clear SEO-friendly H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                {product.name} in Patna
              </h1>

              {product.hindiName && (
                <div className="text-base sm:text-lg font-bold text-accent">
                  {product.hindiName}
                </div>
              )}

              <p className="text-base sm:text-lg text-blue-200 font-semibold">
                {product.tagline}
              </p>

              {product.hindiTagline && (
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm text-gray-100 font-medium backdrop-blur-xs">
                  <span className="text-accent font-bold block text-[11px] uppercase tracking-wider mb-0.5">हिंदी विवरण:</span>
                  {product.hindiTagline}
                </div>
              )}

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
                {product.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenQuote}
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-accent hover:bg-accent-hover text-primary font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>Request Custom Quote</span>
                </button>

                <a
                  href={getPhoneUrl()}
                  className="flex items-center justify-center gap-2 py-3 px-5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call Press Desk</span>
                </a>
              </div>
            </div>

            {/* Product Hero Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] bg-primary-light">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs">
                  <div className="font-bold text-accent">{product.name}</div>
                  <div className="text-[11px] text-gray-200">Manufactured at Bikna Pahari, Patna</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Details & Technical Specifications */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content Area (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Description */}
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4 border-l-4 border-secondary pl-3">
                  Overview & Production Process
                </h2>
                <div className="text-sm sm:text-base text-text-muted leading-relaxed space-y-4 whitespace-pre-line">
                  {product.fullDescription}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-secondary" />
                  <span>Key Features & Quality Advantages</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-surface-light border border-gray-100">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-text-main font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-secondary" />
                  <span>Standard Specifications</span>
                </h3>
                <div className="rounded-2xl border border-gray-200 overflow-x-auto shadow-xs">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-primary text-white font-bold text-xs uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4 w-1/3">Parameter</th>
                        <th className="py-3 px-4">Standard & Custom Options</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {product.specifications.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-light'}>
                          <td className="py-3 px-4 font-bold text-primary">{spec.label}</td>
                          <td className="py-3 px-4 text-text-muted">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Customization Options */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-accent" />
                  <span>Customization Capabilities</span>
                </h3>
                <div className="p-6 rounded-2xl bg-surface-light border border-gray-200 space-y-2.5">
                  {product.customizationOptions.map((opt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-text-main">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0"></div>
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications & Industries */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-secondary" />
                  <span>Typical Applications & Use Cases</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((app, i) => (
                    <div key={i} className="p-3.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-text-muted flex items-start gap-2">
                      <span className="text-secondary font-bold">✓</span>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Specific FAQs */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-secondary" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  {product.faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-xl border border-gray-200 bg-surface-light space-y-1.5">
                      <div className="font-bold text-sm text-primary">{faq.question}</div>
                      <div className="text-xs sm:text-sm text-text-muted leading-relaxed">{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Instant WhatsApp Inquiry Box */}
              <div className="p-6 rounded-3xl bg-surface-light border border-secondary/20 shadow-lg space-y-4 sticky top-24">
                <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block">
                  Quick Commercial Inquiry
                </span>
                <h4 className="text-lg font-bold text-primary">
                  Order {product.name}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Connect directly with our printing specialists in Bikna Pahari, Patna. Share your quantities, page count, and paper specifications.
                </p>

                <div className="space-y-2.5 pt-1">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    onClick={onOpenQuote}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary-light text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Request Detailed Estimate</span>
                  </button>

                  <a
                    href={getPhoneUrl()}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-200 text-primary hover:text-secondary font-bold text-xs rounded-xl transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-accent" />
                    <span>Call: +91 93869 51081</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-gray-200/80 space-y-2 text-[11px] text-text-muted">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct Factory Rates • No Middlemen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sample Paper Swatches Available in Patna</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dispatch Across All 38 Bihar Districts</span>
                  </div>
                </div>
              </div>

              {/* Related Products Widget */}
              {relatedProducts.length > 0 && (
                <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-xs space-y-4">
                  <h4 className="font-bold text-primary text-sm uppercase tracking-wider">
                    Related Printing Categories
                  </h4>
                  <div className="space-y-3">
                    {relatedProducts.map(rel => (
                      <Link
                        key={rel.id}
                        to={`/products/${rel.slug}`}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                          <img
                            src={rel.image}
                            alt={rel.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="grow">
                          <div className="text-xs font-bold text-primary group-hover:text-secondary transition-colors">
                            {rel.name}
                          </div>
                          <div className="text-[11px] text-text-muted line-clamp-1">
                            {rel.tagline}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-secondary transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ready to order {product.name} in bulk?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            Visit our Bikna Pahari press or contact us via WhatsApp for instant quotation and sample requests.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#20bd5a] transition-colors"
            >
              Order on WhatsApp
            </a>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-secondary text-white text-xs font-bold rounded-xl shadow-md hover:bg-secondary-hover transition-colors cursor-pointer"
            >
              Request Custom Estimate
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
