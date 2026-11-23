import React from 'react';
import { 
  Layers, 
  Award, 
  Truck, 
  Settings2, 
  Clock,
  Coins
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { BUSINESS_INFO } from '../../data/businessInfo';

export default function FeaturesSection() {
  const features = [
    {
      icon: Layers,
      title: "Complete In-House Infrastructure",
      desc: "From computerized prepress CTP to sheet-fed offset printing and automated bookbinding, every process is controlled under one roof in Bikna Pahari."
    },
    {
      icon: Coins,
      title: "Factory-Direct Wholesale Pricing",
      desc: "By cutting out intermediaries and purchasing raw paper reels in bulk, we offer competitive trade rates for high-volume commercial printing."
    },
    {
      icon: Settings2,
      title: "Custom Binding & Finishing",
      desc: "Full bespoke finishing capabilities including PU leatherette casing, section sewing, rexine corners, gold foil stamping, matte lamination, and UV spot."
    },
    {
      icon: Clock,
      title: "Dependable Turnaround Times",
      desc: "We respect your academic and commercial deadlines. Fast execution for weekly exam copies, syllabus modules, and urgent invoice books."
    },
    {
      icon: Award,
      title: "Consistent Color & Print Clarity",
      desc: "High-resolution dot reproduction and density control ensure razor-sharp mathematical formulas, fine tabular grids, and rich photo imagery."
    },
    {
      icon: Truck,
      title: "Patna Hub & Bihar-Wide Dispatch",
      desc: "Convenient local pickup near National Press in Bikna Pahari, plus express freight dispatch across all 38 districts of Bihar."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Why Choose Global Offset"
          title="Engineered for Commercial Quality, Scale & Reliability"
          subtitle="Discover why schools, colleges, coaching institutes, corporate brands, and local printing presses across Patna rely on us for their printing requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quick Location Callout Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-secondary uppercase tracking-wider">
              Patna's Printing Epicenter
            </span>
            <h4 className="text-lg md:text-xl font-bold text-primary">
              Located at Bikna Pahari, Near National Press, Patna
            </h4>
            <p className="text-xs sm:text-sm text-text-muted">
              Centrally accessible from Ashok Rajpath, Langar Toli, Bakarganj, and Gandhi Maidan.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.location.directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-xl shadow-xs transition-colors text-center"
            >
              Get Directions
            </a>
            <a
              href={`tel:${BUSINESS_INFO.contact.phone}`}
              className="px-5 py-2.5 bg-surface-light hover:bg-gray-200 text-primary text-xs font-bold rounded-xl border border-gray-200 transition-colors text-center"
            >
              Call Press Desk
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
