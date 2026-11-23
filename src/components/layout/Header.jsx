import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageSquare, Sparkles } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { PRODUCTS } from '../../data/products';
import { getPhoneUrl } from '../../utils/whatsapp';

export default function Header({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors py-2 px-3 rounded-lg ${
      isActive 
        ? 'text-secondary bg-secondary/10' 
        : 'text-text-main hover:text-secondary hover:bg-gray-50'
    }`;

  return (
    <header className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
      scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Brand Logo: Icon + styled text */}
          <Link to="/" onClick={closeMenus} className="flex items-center group py-1" title="Global Offset Home">
            <BrandLogo variant="header" className="group-hover:opacity-95 transition-opacity" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <NavLink to="/" onClick={closeMenus} className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenus} className={navLinkClass}>
              About Us
            </NavLink>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 px-3 rounded-lg cursor-pointer ${
                  location.pathname.startsWith('/products') 
                    ? 'text-secondary bg-secondary/10' 
                    : 'text-text-main hover:text-secondary hover:bg-gray-50'
                }`}
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                aria-expanded={productsDropdownOpen}
              >
                <span>Products & Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 pt-2 mt-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-2 border-b border-gray-100 mb-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Printing Range</span>
                    <Link 
                      to="/products" 
                      onClick={closeMenus}
                      className="text-xs font-semibold text-secondary hover:underline"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="max-h-[380px] overflow-y-auto space-y-1 pr-1">
                    {PRODUCTS.map(product => (
                      <Link
                        key={product.id}
                        to={`/products/${product.slug}`}
                        onClick={closeMenus}
                        className={`flex items-start gap-2.5 p-2 rounded-xl transition-colors ${
                          location.pathname === `/products/${product.slug}`
                            ? 'bg-secondary/10 text-secondary'
                            : 'hover:bg-gray-50 text-text-main'
                        }`}
                      >
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                        <div>
                          <div className="text-xs font-semibold leading-snug">
                            {product.name}
                          </div>
                          <div className="text-[11px] text-text-muted line-clamp-1">
                            {product.tagline}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/gallery" onClick={closeMenus} className={navLinkClass}>
              Work Gallery
            </NavLink>

            <NavLink to="/contact" onClick={closeMenus} className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getPhoneUrl()}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-primary hover:text-secondary border border-gray-200 hover:border-secondary rounded-xl transition-all"
              title="Call for instant quote"
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>+91 93869 51081</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary-hover text-white text-xs font-bold rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 bg-secondary text-white text-xs font-bold rounded-lg shadow-xs"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary hover:bg-gray-100 rounded-xl transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[80vh] overflow-y-auto">
          <NavLink
            to="/"
            onClick={closeMenus}
            className={({ isActive }) => `block px-3 py-2 rounded-xl font-semibold text-sm ${isActive ? 'bg-secondary/10 text-secondary' : 'text-text-main hover:bg-gray-50'}`}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenus}
            className={({ isActive }) => `block px-3 py-2 rounded-xl font-semibold text-sm ${isActive ? 'bg-secondary/10 text-secondary' : 'text-text-main hover:bg-gray-50'}`}
          >
            About Us
          </NavLink>

          <div>
            <div className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-text-main">
              <Link to="/products" onClick={closeMenus} className="text-secondary font-bold">
                Products & Services
              </Link>
            </div>
            <div className="pl-3 pr-1 py-1 space-y-1 border-l-2 border-gray-100 ml-3">
              {PRODUCTS.map(product => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  onClick={closeMenus}
                  className="block px-2.5 py-1.5 text-xs text-text-muted hover:text-secondary rounded-lg hover:bg-gray-50"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          <NavLink
            to="/gallery"
            onClick={closeMenus}
            className={({ isActive }) => `block px-3 py-2 rounded-xl font-semibold text-sm ${isActive ? 'bg-secondary/10 text-secondary' : 'text-text-main hover:bg-gray-50'}`}
          >
            Work Gallery
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenus}
            className={({ isActive }) => `block px-3 py-2 rounded-xl font-semibold text-sm ${isActive ? 'bg-secondary/10 text-secondary' : 'text-text-main hover:bg-gray-50'}`}
          >
            Contact Us
          </NavLink>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={getPhoneUrl()}
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-white text-xs font-semibold rounded-xl"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span>Call: +91 93869 51081</span>
            </a>
            <button
              onClick={() => {
                closeMenus();
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-secondary text-white text-xs font-semibold rounded-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Custom Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
