import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Printer, 
  Target, 
  Eye, 
  CheckCircle2,
  UserCheck,
  BookOpen,
  Award,
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import SeoHelmet from '../components/common/SeoHelmet';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import { BUSINESS_INFO } from '../data/businessInfo';
import { getPhoneUrl, getWhatsAppUrl } from '../utils/whatsapp';

export default function AboutPage({ onOpenQuote }) {
  const breadcrumbs = [
    { name: 'About Us', url: '/about' }
  ];

  return (
    <>
      <SeoHelmet
        title="About Global Offset | Commercial Printing & Paper Supplier in Patna"
        description="Learn about Global Offset, Patna's leading offset printing facility in Bikna Pahari. Delivering quality diary manufacturing, registers, school answer books, and commercial print solutions across Bihar."
        canonical="/about"
        keywords="About Global Offset, Printing Press Bikna Pahari Patna, Commercial Printers Bihar, Printing Equipment Supplier Patna, Offset Press Near National Press"
        breadcrumbs={breadcrumbs}
      />

      <Breadcrumb items={breadcrumbs} />

      {/* Hero Banner */}
      <section className="bg-primary text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-accent text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
              <Printer className="w-3.5 h-3.5" />
              <span>Patna's Commercial Printing Authority</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
              Pioneering High-Precision Printing Solutions in Patna
            </h1>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              From our landmark facility at Bikna Pahari near National Press, Global Offset combines state-of-the-art sheet-fed offset technology with artisan finishing to serve Bihar's premier commercial and academic enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story text */}
            <div className="lg:col-span-7 space-y-5">
              <SectionHeading
                badge="Who We Are"
                title="Your Dedicated Printing Partner in Bihar"
                subtitle="Rooted in the historic printing and book publishing district of Bikna Pahari, Patna."
                centered={false}
              />

              <div className="text-sm sm:text-base text-text-muted space-y-4 leading-relaxed">
                <p>
                  <strong>Global Offset</strong> was founded with a clear directive: to eliminate the compromises businesses and schools in Bihar had to make between print quality, turnaround speed, and fair wholesale pricing.
                </p>
                <p>
                  Located at <strong>Kunkun Singh Lane, Bikna Pahari, Near National Press</strong>, we operate at the cultural and commercial epicenter of Patna’s printing trade. Over more than 15 years, we have grown into a comprehensive printing equipment supplier, commercial printing house, and paper conversion facility.
                </p>
                <p>
                  Whether producing custom leatherette executive diaries for corporate annual gifting, secure examination booklets for academic boards, carbonless duplicate GST invoices for retail chains, or mass-run study materials for competitive coaching centers, we approach each job with rigorous technical precision.
                </p>
              </div>

              {/* Four pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-surface-light border border-gray-100">
                  <div className="font-bold text-primary text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>In-House Precision Prepress</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Computer-to-Plate (CTP) imaging technology ensuring razor-sharp typography and exact color trapping.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-light border border-gray-100">
                  <div className="font-bold text-primary text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Direct Mill Paper Sourcing</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Raw paper reels and sheets sourced directly from reputed mills to guarantee certified GSM and opacity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-light border border-gray-100">
                  <div className="font-bold text-primary text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>Specialized Finishing & Casing</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Section sewing, rexine cloth cornering, thermal gold foiling, and durable casing-in machinery.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-light border border-gray-100">
                  <div className="font-bold text-primary text-sm flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    <span>District Dispatch Support</span>
                  </div>
                  <p className="text-xs text-text-muted">
                    Organized freight packaging and logistics network catering to all 38 districts of Bihar.
                  </p>
                </div>
              </div>

            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
                  alt="Global Offset custom diary and register binding craft"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 bg-primary text-white">
                  <h4 className="font-bold text-base text-accent mb-1">
                    Craftsmanship Meets Industrial Capacity
                  </h4>
                  <p className="text-xs text-gray-300">
                    Combining multi-color high-speed offset printing with meticulous manual inspection on every print run.
                  </p>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="p-6 rounded-2xl bg-surface-light border border-gray-200 space-y-3">
                <h4 className="font-bold text-primary text-sm">Need to consult our Patna technical desk?</h4>
                <p className="text-xs text-text-muted">
                  Bring your sample or discuss your paper stock requirements directly with our press team in Bikna Pahari.
                </p>
                <div className="flex gap-3 pt-1">
                  <a
                    href={getPhoneUrl()}
                    className="flex-1 py-2.5 px-3 bg-primary text-white text-xs font-semibold rounded-xl text-center hover:bg-primary-light transition-colors"
                  >
                    Call: +91 93869 51081
                  </a>
                  <a
                    href={getWhatsAppUrl("Hello Global Offset, I would like to visit your press.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 bg-[#25D366] text-white text-xs font-semibold rounded-xl text-center hover:bg-[#20bd5a] transition-colors"
                  >
                    WhatsApp Desk
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership & Founder Spotlight: Abdul Arshad */}
      <section className="py-16 md:py-20 bg-surface-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Leadership & Ownership"
            title="Guided by Hands-On Printing Expertise"
            subtitle="Direct accountability, transparent trade dealings, and uncompromising press standards."
          />

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Profile Accent Card */}
              <div className="md:col-span-5 bg-gradient-to-br from-primary via-[#112445] to-primary p-8 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/15 rounded-full blur-2xl pointer-events-none"></div>
                <div className="relative space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-accent">
                    <UserCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-2 border border-accent/30">
                      Owner & Proprietor
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {BUSINESS_INFO.owner.name}
                    </h3>
                    <p className="text-xs text-blue-200 font-medium mt-0.5">
                      Proprietor, Global Offset
                    </p>
                    <p className="text-[11px] text-gray-300 mt-1">
                      Bikna Pahari, Patna, Bihar
                    </p>
                  </div>
                </div>

                <div className="relative pt-6 border-t border-white/15 mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-200">
                    <Award className="w-4 h-4 text-accent shrink-0" />
                    <span>15+ Years Press Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct Factory Price Assurance</span>
                  </div>
                </div>
              </div>

              {/* Right Content & Direct Commitment */}
              <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                    <span>Proprietor's Statement</span>
                  </div>
                  
                  <blockquote className="text-base sm:text-lg text-primary font-semibold italic leading-relaxed border-l-4 border-accent pl-4">
                    "{BUSINESS_INFO.owner.message}"
                  </blockquote>

                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    Under the direct stewardship of <strong>Abdul Arshad</strong>, Global Offset has eliminated the typical delays, broker markups, and paper quality substitutions often found in regional printing markets. Every commercial catalog, institutional exam paper batch, customized diary, and binding order is supervised with rigorous technical checkpoints.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-main font-medium pt-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Direct Owner Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Certified Mill Paper GSM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Strict Confidentiality for Exams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                      <span>Bulk Bihar Logistics Support</span>
                    </div>
                  </div>
                </div>

                {/* Direct Connect Buttons */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getPhoneUrl()}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call: {BUSINESS_INFO.contact.phone}</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(`Hello Abdul Arshad, I am contacting you directly from Global Offset's website.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Abdul Arshad</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Book & Paper Binding Services Highlight */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Specialized In-House Department</span>
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-primary tracking-tight leading-tight">
                Complete Book Binding & Post-Press Finishing
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Printing is only half the craft; binding provides lasting durability and elegance. In addition to commercial printing, Global Offset operates a dedicated binding facility in Bikna Pahari handling everything from single thesis binding to hundred-thousand book editions.
              </p>
              
              <div className="p-4 rounded-2xl bg-surface-light border border-gray-200 text-xs text-text-muted space-y-2">
                <div className="font-bold text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Trade Binding & Pre-Printed Sheet Support</span>
                </div>
                <p>
                  We welcome publishers, DTP centers, and printing press colleagues from Bikna Pahari, Langar Toli, and across Bihar who supply their own pre-printed sheets for professional binding.
                </p>
              </div>

              <div>
                <Link
                  to="/products/book-binding-services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary-hover text-white text-xs font-bold rounded-xl shadow-md transition-all group"
                >
                  <span>Explore Book Binding Services & Specs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-surface-light border border-gray-200 space-y-2">
                  <div className="text-secondary font-bold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span>Hardbound Case Binding</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Strawboard, binder board, PU leatherette, and cloth casing with golden/silver hot foil stamping. Essential for theses, ledgers, and corporate gifts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-light border border-gray-200 space-y-2">
                  <div className="text-secondary font-bold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span>Thermal Perfect Glue Binding</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Hot-melt spine adhesive binding with crease-free flexible square spine. Perfect for high-page-count coaching study material and novels.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-light border border-gray-200 space-y-2">
                  <div className="text-secondary font-bold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span>Section Thread Sewing</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Continuous thread sewn signatures that allow heavy registers, legal records, and diaries to lay completely 180° flat with zero page detachment.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-light border border-gray-200 space-y-2">
                  <div className="text-secondary font-bold text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span>Spiral & Twin-Loop Wiro Binding</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Heavy-gauge plastic spiral and metallic double-loop wiro binding with transparent PVC front guards for training manuals, calendars, and project decks.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 bg-surface-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            badge="Guiding Principles"
            title="Our Mission & Strategic Vision"
            subtitle="Committed to setting the benchmark for commercial printing excellence and customer transparency in Bihar."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                To deliver uncompromising commercial offset printing, diary manufacturing, and institutional paper products with guaranteed paper GSM, honest pricing, and strict adherence to delivery deadlines for businesses, educational institutions, and fellow printers throughout Patna and Bihar.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xs relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-accent-hover" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                To stand as Eastern India's most dependable and technologically forward printing solutions hub, continually innovating our finishing capabilities and remaining the first-choice manufacturing partner for commercial print buyers across the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {BUSINESS_INFO.stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            Have a Commercial Printing Requirement in Patna?
          </h2>
          <p className="text-sm text-text-muted">
            Connect with our team today for paper samples, technical advice, or an immediate competitive quote.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3 bg-secondary hover:bg-secondary-hover text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
            >
              Request Custom Quotation
            </button>
            <a
              href={`tel:${BUSINESS_INFO.contact.phone}`}
              className="px-7 py-3 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-xl transition-all"
            >
              Call Our Office
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
