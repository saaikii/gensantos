import React from 'react';
import { Eye, Target, ShieldCheck, Sparkles } from 'lucide-react';

const FeaturedBanners: React.FC = () => {
  return (
    <section className="relative z-20 pt-24 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles size={16} />
            <span>Official Government Principles</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Core <span className="text-blue-600">Values</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The guiding principles that shape every decision and action of the City Government of General Santos.
          </p>
        </div>

        {/* Unified Container - All Content in One Box */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl border-4 border-blue-600 shadow-2xl overflow-hidden">
            {/* Top Gold Accent Bar */}
            <div className="h-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-blue-200">

              {/* Vision Section */}
              <div className="p-8 bg-gradient-to-b from-white to-gray-50">
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg mb-3">
                    <Eye size={32} className="text-blue-900" />
                  </div>
                  <h3 className="text-xl font-extrabold text-blue-900 uppercase tracking-wide text-center">Vision</h3>
                  <div className="h-1 w-16 bg-yellow-400 mt-2 rounded-full"></div>
                </div>

                {/* Content */}
                <p className="text-gray-800 leading-relaxed text-sm text-justify px-2">
                  GENSAN.... Green City of the South, Financial Center of Region XII, Regional Agri-Industrial and Transshipment Hub of SOCCSKSARGEN and A Model of Harmonious Multi-Cultural city; with a healthy, disciplined, socially-protected, empowered and educated citizenry; driven by a diversified, competitive, resilient and inclusive economy; endowed with a balanced, sustainable and well-managed environment; equipped with efficient, hazard–resistant and world-class infrastructures; and governed by a visionary, responsive, participatory and transparent leadership.
                </p>
              </div>

              {/* Mission Section */}
              <div className="p-8 bg-gradient-to-b from-blue-50/30 to-gray-50">
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg mb-3">
                    <Target size={32} className="text-blue-900" />
                  </div>
                  <h3 className="text-xl font-extrabold text-blue-900 uppercase tracking-wide text-center">Mission</h3>
                  <div className="h-1 w-16 bg-yellow-400 mt-2 rounded-full"></div>
                </div>

                {/* Content */}
                <p className="text-gray-800 leading-relaxed text-sm text-justify px-2">
                  To pursue a stable local economy supportive of development and growth, environmental protection, and security for all people in General Santos City.
                </p>
              </div>

              {/* Quality Policy Section */}
              <div className="p-8 bg-gradient-to-b from-white to-gray-50">
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg mb-3">
                    <ShieldCheck size={32} className="text-blue-900" />
                  </div>
                  <h3 className="text-xl font-extrabold text-blue-900 uppercase tracking-wide text-center">Quality Policy</h3>
                  <div className="h-1 w-16 bg-yellow-400 mt-2 rounded-full"></div>
                </div>

                {/* Content */}
                <p className="text-gray-800 leading-relaxed text-sm text-justify px-2">
                  We, the Local Government of General Santos City, aspire to be globally competitive while enhancing the quality of life of our citizen towards a sustainable future. We are committed to providing quality services to all members of our society. We shall continually strive to improve our city, our people and our services while we foster the rule of law and equal opportunity for all.
                </p>
              </div>

            </div>

            {/* Bottom Decorative Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-5">
              <div className="flex justify-center items-center gap-6">
                <div className="w-10 h-10 rounded-full border-3 border-yellow-400 bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-3 border-yellow-400 bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-3 border-yellow-400 bg-white flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedBanners;