import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Store, 
  Briefcase, 
  Activity, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { INDUSTRIES } from '../../data/industries';

const iconMap = {
  GraduationCap,
  BookOpen,
  Store,
  Briefcase,
  Activity,
  Layers
};

export default function IndustriesServed() {
  return (
    <section className="py-16 md:py-24 bg-surface-light border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Sectors & Client Ecosystem"
          title="Industries We Empower Across Bihar"
          subtitle="From prestigious educational institutions and high-volume coaching centers to corporate offices and wholesale merchants, we provide tailored printing solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map(industry => {
            const IconComponent = iconMap[industry.icon] || Briefcase;

            return (
              <div
                key={industry.id}
                className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-secondary/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-2">
                    {industry.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-5">
                    {industry.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2">
                    Key Deliverables:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.products.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-surface-light text-primary text-[11px] font-medium rounded-lg border border-gray-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-secondary" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
