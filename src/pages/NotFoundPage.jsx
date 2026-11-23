import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Printer, MessageCircle } from 'lucide-react';
import SeoHelmet from '../components/common/SeoHelmet';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function NotFoundPage() {
  return (
    <>
      <SeoHelmet
        title="Page Not Found (404) | Global Offset Patna"
        description="The requested page could not be found on Global Offset Patna. Explore our printing products and services."
        noIndex={true}
      />

      <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 bg-surface-light">
        <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
            <Printer className="w-8 h-8 text-secondary" />
          </div>

          <div className="space-y-2">
            <span className="text-4xl sm:text-5xl font-black text-primary">404</span>
            <h1 className="text-xl font-bold text-primary">Page Not Found</h1>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              We couldn't locate the page you're searching for. It might have moved or the link may be outdated.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 py-3 px-5 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-xl transition-colors"
            >
              <Home className="w-4 h-4 text-accent" />
              <span>Back to Home</span>
            </Link>

            <Link
              to="/products"
              className="flex items-center justify-center gap-2 py-3 px-5 bg-secondary hover:bg-secondary-hover text-white text-xs font-bold rounded-xl transition-colors"
            >
              <span>View All Products</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100">
            <a
              href={getWhatsAppUrl("Hello Global Offset, I was searching for a printing service on your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-secondary font-bold hover:underline inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask our team directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
