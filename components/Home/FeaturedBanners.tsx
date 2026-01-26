import React from 'react';
import { Eye, Target, ShieldCheck, Sparkles } from 'lucide-react';

const FeaturedBanners: React.FC = () => {
  return (
    <section className="relative z-20 pt-24 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">


      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-[#0038A8] text-xs font-bold tracking-widest uppercase mb-4 border border-blue-200 shadow-sm">
            Official Government Principles
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0038A8] mb-6 uppercase tracking-tight drop-shadow-sm font-serif">
            Our Core Values
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#0038A8] to-yellow-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-900 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The guiding principles that shape every decision and action of the City Government of General Santos.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 max-w-7xl mx-auto px-4">

          {/* Vision Card */}
          <div className="relative group mt-4">
            {/* The 'Cup' Background - Blue */}
            <div className="absolute -bottom-4 -left-4 -right-4 h-48 bg-blue-600 rounded-b-[3rem] transform group-hover:scale-y-105 group-hover:translate-y-1 transition-transform duration-300 -z-10 shadow-xl shadow-blue-600/30"></div>
            {/* Main Card */}
            <div className="relative bg-white rounded-[2rem] p-8 pb-12 shadow-2xl h-full flex flex-col items-center text-center border-t border-blue-50">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye size={40} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6">Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                GENSAN.... Green City of the South, Financial Center of Region XII, Regional Agri-Industrial and Transshipment Hub of SOCCSKSARGEN and A Model of Harmonious Multi-Cultural city; with a healthy, disciplined, socially-protected, empowered and educated citizenry; driven by a diversified, competitive, resilient and inclusive economy; endowed with a balanced, sustainable and well-managed environment; equipped with efficient, hazard–resistant and world-class infrastructures; and governed by a visionary, responsive, participatory and transparent leadership.
              </p>
            </div>
            {/* Decorative Tab */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-blue-600 rounded-full"></div>
          </div>

          {/* Mission Card */}
          <div className="relative group mt-4">
            {/* The 'Cup' Background - Yellow */}
            <div className="absolute -bottom-4 -left-4 -right-4 h-48 bg-yellow-400 rounded-b-[3rem] transform group-hover:scale-y-105 group-hover:translate-y-1 transition-transform duration-300 -z-10 shadow-xl shadow-yellow-400/30"></div>
            {/* Main Card */}
            <div className="relative bg-white rounded-[2rem] p-8 pb-12 shadow-2xl h-full flex flex-col items-center text-center border-t border-yellow-50">
              <div className="w-20 h-20 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target size={40} className="text-yellow-500" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6">Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To pursue a stable local economy supportive of development and growth, environmental protection, and security for all people in General Santos City.
              </p>
            </div>
            {/* Decorative Tab */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-yellow-400 rounded-full"></div>
          </div>

          {/* Quality Policy Card */}
          <div className="relative group mt-4">
            {/* The 'Cup' Background - Red */}
            <div className="absolute -bottom-4 -left-4 -right-4 h-48 bg-red-600 rounded-b-[3rem] transform group-hover:scale-y-105 group-hover:translate-y-1 transition-transform duration-300 -z-10 shadow-xl shadow-red-600/30"></div>
            {/* Main Card */}
            <div className="relative bg-white rounded-[2rem] p-8 pb-12 shadow-2xl h-full flex flex-col items-center text-center border-t border-red-50">
              <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={40} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-widest mb-6 leading-none">Quality<br /><span className="text-lg text-red-600">Policy</span></h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We, the Local Government of General Santos City, aspire to be globally competitive while enhancing the quality of life of our citizen towards a sustainable future. We are committed to providing quality services to all members of our society. We shall continually strive to improve our city, our people and our services while we foster the rule of law and equal opportunity for all.
              </p>
            </div>
            {/* Decorative Tab */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-red-600 rounded-full"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedBanners;