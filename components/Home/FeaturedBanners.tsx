import React from 'react';
import { Eye, Target, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../Shared/ScrollReveal';
import EnvelopeCard from '../Shared/EnvelopeCard';

const FeaturedBanners: React.FC = () => {
  return (
    <section className="relative z-20 pt-24 pb-12 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-0 md:mb-8">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-[#0038A8] text-xs font-bold tracking-widest uppercase mb-4 border border-blue-200 shadow-sm">
              Official Mandate
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0038A8] mb-6 uppercase tracking-tight drop-shadow-sm font-serif">
              Our Core Values
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#0038A8] to-yellow-500 mx-auto rounded-full mb-8"></div>
            <p className="text-slate-900 text-lg max-w-2xl mx-auto leading-relaxed">
              Hover over each envelope to reveal the official statements.
            </p>
          </div>
        </ScrollReveal>

        {/* Envelopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto px-4 mt-8 pb-12">
            
            <EnvelopeCard 
                title="Vision" 
                icon={<Eye size={18} className="text-[#0038A8]" />}
                colorTheme="blue"
                delay={100}
                content="GENSAN.... Green City of the South, Financial Center of Region XII, Regional Agri-Industrial and Transshipment Hub of SOCCSKSARGEN and A Model of Harmonious Multi-Cultural city; with a healthy, disciplined, socially-protected, empowered and educated citizenry; driven by a diversified, competitive, resilient and inclusive economy; endowed with a balanced, sustainable and well-managed environment."
            />

            <EnvelopeCard 
                title="Mission" 
                icon={<Target size={18} className="text-yellow-700" />}
                colorTheme="yellow"
                delay={200}
                content="To pursue a stable local economy supportive of development and growth, environmental protection, and security for all people in General Santos City."
            />

            <EnvelopeCard 
                title="Quality Policy" 
                subtitle="Commitment"
                icon={<ShieldCheck size={18} className="text-red-700" />}
                colorTheme="red"
                delay={300}
                content="We, the Local Government of General Santos City, aspire to be globally competitive while enhancing the quality of life of our citizen towards a sustainable future. We are committed to providing quality services to all members of our society. We shall continually strive to improve our city, our people and our services while we foster the rule of law and equal opportunity for all."
            />

        </div>

      </div>
    </section>
  );
};

export default FeaturedBanners;