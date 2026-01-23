import React from 'react';
import { Eye, Target, Award } from 'lucide-react';

const FeaturedBanners: React.FC = () => {
  return (
    <section className="relative z-20 pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {/* Vision - Yellow */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-yellow-400 p-8 flex flex-col h-full">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Eye size={120} className="text-blue-900" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4 text-blue-900">
                <div className="p-2 bg-blue-900/10 rounded-lg">
                    <Eye size={24} />
                </div>
                <span className="font-bold tracking-widest uppercase text-xs md:text-sm">Our Path</span>
              </div>
              <h3 className="text-2xl font-black text-blue-900 mb-6 uppercase tracking-tight">Development Vision</h3>
              <p className="text-blue-900/90 leading-relaxed text-sm font-medium flex-1 text-justify">
                "GENSAN... Green City of the South, Financial Center of Region XII, Regional Agri-Industrial and Transshipment Hub of SOCCSKSARGEN and A Model of Harmonious Multi-Cultural city; with a healthy, disciplined, socially-protected, empowered and educated citizenry; driven by a diversified, competitive, resilient and inclusive economy; endowed with a balanced, sustainable and well-managed environment; equipped with efficient, hazard-resistant and world-class infrastructures; and governed by a visionary, responsive, participatory and transparent leadership."
              </p>
            </div>
          </div>

          {/* Mission - Blue */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-blue-600 p-8 flex flex-col h-full">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target size={120} className="text-white" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
               <div className="flex items-center gap-3 mb-4 text-blue-100">
                <div className="p-2 bg-white/10 rounded-lg">
                    <Target size={24} />
                </div>
                <span className="font-bold tracking-widest uppercase text-xs md:text-sm">Our Goal</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Mission</h3>
              <p className="text-blue-50 leading-relaxed text-sm font-medium flex-1 text-justify">
                "To pursue a stable local economy supportive of development and growth, environmental protection, and security for all people in General Santos City."
              </p>
            </div>
          </div>

          {/* Quality Policy - Red */}
          <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-red-600 p-8 flex flex-col h-full">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award size={120} className="text-white" />
            </div>
            <div className="relative z-10 flex flex-col h-full">
               <div className="flex items-center gap-3 mb-4 text-red-100">
                <div className="p-2 bg-white/10 rounded-lg">
                    <Award size={24} />
                </div>
                <span className="font-bold tracking-widest uppercase text-xs md:text-sm">Our Commitment</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Quality Policy</h3>
              <p className="text-red-50 leading-relaxed text-sm font-medium flex-1 text-justify">
                "We, the Local Government of General Santos City, aspire to be globally competitive while enhancing the quality of life of our citizen towards a sustainable future. We are committed to providing quality services to all members of our society. We shall continually strive to improve our city, our people and our services while we foster the rule of law and equal opportunity for all."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedBanners;