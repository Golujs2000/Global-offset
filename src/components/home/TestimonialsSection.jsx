import React from 'react';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { TESTIMONIALS } from '../../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Client Perspectives"
          title="Trusted by Educational Institutions & Businesses Across Patna"
          subtitle="Read feedback from school administrators, coaching directors, and wholesale business partners who depend on Global Offset for their commercial printing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map(item => (
            <div
              key={item.id}
              className="bg-surface-light p-7 sm:p-8 rounded-3xl border border-gray-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-16 h-16" />
              </div>

              <div>
                <div className="flex items-center gap-1 text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent" />
                  ))}
                  <span className="text-[11px] font-bold text-text-muted ml-2">Verified Client</span>
                </div>

                <p className="text-sm sm:text-base text-text-main leading-relaxed italic mb-6 relative z-10">
                  "{item.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-primary text-sm sm:text-base">
                    {item.client}
                  </h4>
                  <p className="text-xs text-text-muted">
                    {item.organization} • {item.location}
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-white text-secondary text-[11px] font-semibold rounded-lg border border-gray-200 shrink-0">
                  {item.serviceUsed}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Disclaimer / Transparency Note */}
        <p className="text-center text-[11px] text-text-muted mt-8">
          Reviews from verified commercial and institutional client partnerships in Patna and Bihar.
        </p>
      </div>
    </section>
  );
}
