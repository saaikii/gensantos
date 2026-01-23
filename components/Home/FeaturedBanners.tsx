import React, { useState } from 'react';
import { Eye, Target, ShieldCheck, ArrowRight, Sparkles, X } from 'lucide-react';

interface ContentData {
  title: string;
  icon: React.ReactNode;
  content: string;
  color: string;
}

const contentData: Record<string, ContentData> = {
  vision: {
    title: 'Vision',
    icon: <Eye size={32} className="text-white" />,
    content: 'GENSAN.... Green City of the South, Financial Center of Region XII, Regional Agri-Industrial and Transshipment Hub of SOCCSKSARGEN and A Model of Harmonious Multi-Cultural city; with a healthy, disciplined, socially-protected, empowered and educated citizenry; driven by a diversified, competitive, resilient and inclusive economy; endowed with a balanced, sustainable and well-managed environment; equipped with efficient, hazard–resistant and world-class infrastructures; and governed by a visionary, responsive, participatory and transparent leadership.',
    color: 'yellow'
  },
  mission: {
    title: 'Mission',
    icon: <Target size={32} className="text-white" />,
    content: 'To pursue a stable local economy supportive of development and growth, environmental protection, and security for all people in General Santos City.',
    color: 'blue'
  },
  quality: {
    title: 'Quality Policy',
    icon: <ShieldCheck size={32} className="text-white" />,
    content: 'We, the Local Government of General Santos City, aspire to be globally competitive while enhancing the quality of life of our citizen towards a sustainable future. We are committed to providing quality services to all members of our society. We shall continually strive to improve our city, our people and our services while we foster the rule of law and equal opportunity for all.',
    color: 'red'
  }
};

const FeaturedBanners: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      yellow: { bg: 'from-yellow-400 to-yellow-500', text: 'text-yellow-600', border: 'border-yellow-200' },
      blue: { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600', border: 'border-blue-200' },
      red: { bg: 'from-red-500 to-red-600', text: 'text-red-600', border: 'border-red-200' }
    };
    return colors[color];
  };

  return (
    <section className="relative z-20 pt-24 pb-16 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles size={16} />
            <span>What We Stand For</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Core <span className="text-blue-600">Values</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            The guiding principles that shape every decision and action of the City Government of General Santos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Vision - Yellow Theme */}
          <div className="group relative flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-[2rem] transform translate-y-2 translate-x-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 opacity-30"></div>
            <div className="relative flex-1 bg-white rounded-[2rem] p-8 md:p-10 border-2 border-yellow-200 shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
               {/* Decorative Background Elements */}
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-yellow-100 mix-blend-multiply filter blur-3xl opacity-70"></div>
               <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-orange-100 mix-blend-multiply filter blur-2xl opacity-70"></div>
               
               <div className="relative z-10 flex flex-col h-full">
                   {/* Icon */}
                   <div className="mb-6 flex items-center gap-4">
                     <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                       <Eye size={32} className="text-white" />
                     </div>
                     <div>
                       <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight leading-none">Vision</h3>
                       <div className="h-1.5 w-16 bg-yellow-400 mt-2 rounded-full"></div>
                     </div>
                   </div>
                   
                   <div className="relative flex-1 mb-6">
                        <p className="text-gray-600 leading-relaxed text-sm font-medium text-justify relative z-10 line-clamp-6">
                             GENSAN.... Green City of the South, Financial Center of Region XII, Regional Agri-Industrial and Transshipment Hub of SOCCSKSARGEN and A Model of Harmonious Multi-Cultural city; with a healthy, disciplined, socially-protected, empowered and educated citizenry.
                        </p>
                   </div>

                   {/* Learn More Button */}
                   <button 
                     onClick={() => setActiveModal('vision')}
                     className="mt-auto flex items-center gap-2 text-yellow-600 font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all"
                   >
                     Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
               </div>
            </div>
          </div>

          {/* Mission - Blue Theme (Prominent Center Card) */}
          <div className="group relative flex flex-col h-full lg:-mt-4 lg:mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
             <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-[2rem] transform translate-y-2 translate-x-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 opacity-40"></div>
             <div className="relative flex-1 bg-white rounded-[2rem] p-8 md:p-10 border-2 border-blue-200 shadow-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col ring-4 ring-blue-100">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-indigo-100 mix-blend-multiply filter blur-2xl opacity-70"></div>
                
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Core Mission
                </div>

                <div className="relative z-10 flex flex-col h-full">
                   {/* Icon */}
                   <div className="mb-6 flex items-center gap-4">
                     <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                       <Target size={32} className="text-white" />
                     </div>
                     <div>
                       <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tight leading-none">Mission</h3>
                       <div className="h-1.5 w-16 bg-blue-500 mt-2 rounded-full"></div>
                     </div>
                   </div>

                   <div className="relative flex-1 mb-6">
                       <p className="text-gray-600 leading-relaxed text-sm font-medium text-justify relative z-10">
                         To pursue a stable local economy supportive of development and growth, environmental protection, and security for all people in General Santos City.
                       </p>
                   </div>

                   {/* Learn More Button */}
                   <button 
                     onClick={() => setActiveModal('mission')}
                     className="mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all"
                   >
                     Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
               </div>
             </div>
          </div>

          {/* Quality Policy - Red Theme */}
          <div className="group relative flex flex-col h-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
             <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-[2rem] transform translate-y-2 translate-x-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 opacity-30"></div>
             <div className="relative flex-1 bg-white rounded-[2rem] p-8 md:p-10 border-2 border-red-200 shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-red-100 mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-rose-100 mix-blend-multiply filter blur-2xl opacity-70"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                   {/* Icon */}
                   <div className="mb-6 flex items-center gap-4">
                     <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                       <ShieldCheck size={32} className="text-white" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight leading-none">Quality Policy</h3>
                       <div className="h-1.5 w-16 bg-red-500 mt-2 rounded-full"></div>
                     </div>
                   </div>
                   
                   <div className="relative flex-1 mb-6">
                        <p className="text-gray-600 leading-relaxed text-sm font-medium text-justify relative z-10 line-clamp-6">
                            We, the Local Government of General Santos City, aspire to be globally competitive while enhancing the quality of life of our citizen towards a sustainable future. We are committed to providing quality services to all members of our society.
                        </p>
                   </div>

                   {/* Learn More Button */}
                   <button 
                     onClick={() => setActiveModal('quality')}
                     className="mt-auto flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all"
                   >
                     Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                   </button>
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {activeModal && contentData[activeModal] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setActiveModal(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className={`bg-gradient-to-br ${getColorClasses(contentData[activeModal].color).bg} p-6 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    {contentData[activeModal].icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">
                    {contentData[activeModal].title}
                  </h3>
                </div>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6 md:p-8">
              <p className="text-gray-600 leading-relaxed text-base">
                {contentData[activeModal].content}
              </p>
            </div>
            
            {/* Footer */}
            <div className="px-6 pb-6 md:px-8 md:pb-8">
              <button 
                onClick={() => setActiveModal(null)}
                className={`w-full py-3 ${getColorClasses(contentData[activeModal].color).text} font-bold rounded-xl border-2 ${getColorClasses(contentData[activeModal].color).border} hover:bg-gray-50 transition-colors`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedBanners;