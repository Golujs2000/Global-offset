import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { PRODUCTS } from '../../data/products';
import { getPhoneUrl, getWhatsAppUrl } from '../../utils/whatsapp';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-24 md:pb-12 border-t border-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Business Overview with Official Brand Logo */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group" title="Global Offset Home">
              <BrandLogo variant="footer" className="group-hover:opacity-95 transition-opacity" />
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed pt-1">
              Global Offset is Patna's dependable commercial printing company and printing equipment supplier located in Bikna Pahari. Specializing in corporate diaries, registers, examination copies, GST bill books, and bulk offset printing.
            </p>

            <div className="pt-2 space-y-2">
              <div className="flex items-start gap-2.5 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.location.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-gray-300">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={getPhoneUrl()} className="hover:text-white transition-colors font-medium">
                  {BUSINESS_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-gray-300">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span>Mon – Sat: 9:30 AM – 8:30 PM</span>
              </div>
            </div>

            <div className="pt-1 flex gap-2">
              <a
                href={getWhatsAppUrl("Hello Global Offset, I am looking for a quick printing quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-xl shadow-sm transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Col 2: Products & Printing Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-accent pl-2.5">
              Printing Products
            </h3>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.slice(0, 6).map(prod => (
                <li key={prod.id}>
                  <Link 
                    to={`/products/${prod.slug}`} 
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <ArrowRight className="w-3 h-3 text-secondary" />
                    <span>{prod.name} in Patna</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Solutions & Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-accent pl-2.5">
              Specialized Solutions
            </h3>
            <ul className="space-y-2 text-xs mb-6">
              {PRODUCTS.slice(6).map(prod => (
                <li key={prod.id}>
                  <Link 
                    to={`/products/${prod.slug}`} 
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                  >
                    <ArrowRight className="w-3 h-3 text-secondary" />
                    <span>{prod.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 text-gray-200">
              Company
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link to="/products" className="hover:text-white transition-colors">All Products</Link>
              <Link to="/gallery" className="hover:text-white transition-colors">Portfolio Gallery</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Col 4: Local Patna Printing Network */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-accent pl-2.5">
              Patna Local Printing Hub
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              We cater to businesses, coaching institutes, schools, and press partners across key commercial zones in Patna and Bihar:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Bikna Pahari",
                "Kunkun Singh Lane",
                "Near National Press",
                "Langar Toli",
                "Bakarganj",
                "Gandhi Maidan",
                "Ashok Rajpath",
                "Patna City",
                "Boring Road",
                "Kankarbagh",
                "All Bihar Districts"
              ].map((locality, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] text-gray-300"
                >
                  {locality}
                </span>
              ))}
            </div>

            <div className="pt-2 p-3 bg-white/5 rounded-xl border border-white/10 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Direct Factory Pricing</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Bulk institutional orders with doorstep delivery support across Bihar.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal, SEO Keywords & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            <p>© {currentYear} <strong>Global Offset</strong> (Proprietor: <strong>Abdul Arshad</strong>). All rights reserved. Commercial Printing & Paper Solutions, Bikna Pahari, Patna, Bihar.</p>
            <p className="text-[11px] text-gray-400 mt-1">
              Printing Press in Patna • Diary Printing in Patna • Register Printing in Patna • Book Binding Services in Patna • Examination Copy Printing Patna • Bill Book Printing Patna
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Locate Press</Link>
            <span>•</span>
            <a href="/sitemap.xml" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">XML Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
