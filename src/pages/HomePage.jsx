import React from 'react';
import SeoHelmet from '../components/common/SeoHelmet';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProductGrid from '../components/home/ProductGrid';
import IndustriesServed from '../components/home/IndustriesServed';
import LocalSeoBlock from '../components/home/LocalSeoBlock';
import TestimonialsSection from '../components/home/TestimonialsSection';
import QuickFaqSection from '../components/home/QuickFaqSection';
import CtaSection from '../components/home/CtaSection';
import { FAQS } from '../data/faqs';

export default function HomePage({ onOpenQuote }) {
  return (
    <>
      <SeoHelmet
        title="Global Offset | Premier Commercial Printing Press & Paper Solutions in Patna"
        description="Global Offset is Patna's trusted printing equipment supplier & commercial printing partner in Bikna Pahari. Specializing in diary manufacturing, register printing, exam answer copies, bill books, and bulk offset printing."
        canonical="/"
        keywords="Printing Press in Patna, Printing Services in Patna, Printing Shop in Patna, Commercial Printing in Patna, Diary Printing in Patna, Register Printing in Patna, Bill Book Printing Patna, Bikna Pahari Patna printing, Offset Printing Bihar"
        faqs={FAQS.slice(0, 6)}
      />

      <HeroSection onOpenQuote={onOpenQuote} />
      <FeaturesSection />
      <ProductGrid />
      <IndustriesServed />
      <TestimonialsSection />
      <LocalSeoBlock />
      <QuickFaqSection />
      <CtaSection onOpenQuote={onOpenQuote} />
    </>
  );
}
