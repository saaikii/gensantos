import React from 'react';
import { Calculator, Home, ArrowRight } from 'lucide-react';

const CitizensGuides: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Background Seal Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.15] pointer-events-none select-none">
        <img
          src="/gensan_seal_large.jpg"
          alt="Watermark"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-[#0038A8] text-xs font-bold tracking-widest uppercase mb-4 border border-blue-200 shadow-sm animate-fade-in-up">
            Transparency & Efficiency
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0038A8] mb-6 uppercase tracking-tight drop-shadow-sm font-serif animate-fade-in-up">
            Citizen's Guides
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#0038A8] to-yellow-500 mx-auto rounded-full mb-8 animate-fade-in-up"></div>
          <p className="text-black text-lg leading-relaxed animate-fade-in-up">
            Comprehensive guides to help you navigate government services. Detailed steps, requirements, and procedures for a hassle-free experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

          {/* Business Tax Card */}
          <a href="#" className="group relative bg-white rounded-[2rem] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:-translate-y-2 flex flex-col items-start overflow-hidden animate-fade-in-up">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

            <div className="relative w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-600/30 group-hover:rotate-6 transition-transform duration-300">
              <Calculator size={32} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
              Business Tax Payment
            </h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Step-by-step guide on assessment, billing, and payment schedules for new and renewing business owners.
            </p>

            <div className="mt-auto flex items-center gap-2 text-blue-800 font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all">
              View Guide <ArrowRight size={18} />
            </div>
          </a>

          {/* Real Property Tax Card */}
          <a href="#" className="group relative bg-white rounded-[2rem] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:-translate-y-2 flex flex-col items-start overflow-hidden animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-bl-[100px] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

            <div className="relative w-16 h-16 bg-yellow-400 text-blue-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-yellow-400/30 group-hover:-rotate-6 transition-transform duration-300">
              <Home size={32} />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
              Real Property Tax
            </h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Understand your tax declaration, assessment levels, and payment deadlines for land and building properties.
            </p>

            <div className="mt-auto flex items-center gap-2 text-yellow-600 font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all">
              View Guide <ArrowRight size={18} />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default CitizensGuides;
