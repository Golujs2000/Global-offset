import React, { useState } from 'react';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from '../common/FloatingWhatsApp';
import MobileStickyBar from '../common/MobileStickyBar';
import QuoteModal from '../common/QuoteModal';

export default function Layout({ children, currentProductName = '' }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-main font-sans selection:bg-secondary selection:text-white">
      {/* Top Bar for Address, Phone & Timings */}
      <TopBar />

      {/* Main Header & Navigation */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Body Content */}
      <main className="grow">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              onOpenQuote: () => setIsQuoteOpen(true)
            });
          }
          return child;
        })}
      </main>

      {/* SEO-Rich Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Call & WhatsApp Bar */}
      <MobileStickyBar productName={currentProductName} />

      {/* Quick Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)}
        preselectedProduct={currentProductName}
      />
    </div>
  );
}
