import React from 'react';

const FeaturedBanners: React.FC = () => {
  return (
    <section className="relative z-20 pt-24 pb-8 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Vision - Bright Yellow Theme */}
          <div className="group relative flex flex-col h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-[2rem] transform translate-y-2 translate-x-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 opacity-30"></div>
            <div className="relative flex-1 bg-white rounded-[2rem] p-8 md:p-10 border-2 border-yellow-200 shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
               {/* Decorative Background Elements */}
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-yellow-100 mix-blend-multiply filter blur-3xl opacity-70"></div>
               <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-orange-100 mix-blend-multiply filter blur-2xl opacity-70"></div>
               
               <div className="relative z-10 flex flex-col h-full">
                   <div className="mb-6">
                       <h3 className="text-4xl font-black text-gray-900 uppercase tracking-tighter leading-none">Vision</h3>
                       <div className="h-2 w-24 bg-yellow-400 mt-4 rounded-full"></div>
                   </div>
                   
                   <div className="relative flex-1">
                        <p className="text-gray-700 leading-relaxed text-base font-medium text-justify relative z-10">
                             GENSAN.... Green City of the South, Financial Center of Region XII, Regional Agri-Industrial and Transshipment Hub of SOCCSKSARGEN and A Model of Harmonious Multi-Cultural city; with a healthy, disciplined, socially-protected, empowered and educated citizenry; driven by a diversified, competitive, resilient and inclusive economy; endowed with a balanced, sustainable and well-managed environment; equipped with efficient, hazard–resistant and world-class infrastructures; and governed by a visionary, responsive, participatory and transparent leadership.
                        </p>
                   </div>
               </div>
            </div>
          </div>

          {/* Mission - Dark Blue Theme */}
          <div className="group relative flex flex-col h-full lg:-mt-4 lg:mb-4">
             <div className="absolute inset-0 bg-blue-900 rounded-[2rem] transform translate-y-4 translate-x-4 transition-transform duration-300 opacity-20"></div>
             <div className="relative flex-1 bg-gradient-to-br from-blue-900 to-blue-800 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col text-white ring-4 ring-white">
                {/* Texture */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                   <div className="mb-6">
                       <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">Mission</h3>
                       <div className="h-2 w-24 bg-blue-400 mt-4 rounded-full"></div>
                   </div>

                   <div className="relative flex-1">
                       <p className="text-blue-50 leading-relaxed text-base font-medium text-justify relative z-10">
                         To pursue a stable local economy supportive of development and growth, environmental protection, and security for all people in General Santos City.
                       </p>
                   </div>
               </div>
             </div>
          </div>

          {/* Quality Policy - Bright Red Theme */}
          <div className="group relative flex flex-col h-full">
             <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-[2rem] transform translate-y-2 translate-x-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300 opacity-30"></div>
             <div className="relative flex-1 bg-white rounded-[2rem] p-8 md:p-10 border-2 border-red-200 shadow-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-red-100 mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-rose-100 mix-blend-multiply filter blur-2xl opacity-70"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                   <div className="mb-6">
                       <h3 className="text-4xl font-black text-gray-900 uppercase tracking-tighter leading-none">Quality Policy</h3>
                       <div className="h-2 w-24 bg-red-500 mt-4 rounded-full"></div>
                   </div>
                   
                   <div className="relative flex-1">
                        <p className="text-gray-700 leading-relaxed text-base font-medium text-justify relative z-10">
                            We, the Local Government of General Santos City, aspire to be globally competitive while enhancing the quality of life of our citizen towards a sustainable future. We are committed to providing quality services to all members of our society. We shall continually strive to improve our city, our people and our services while we foster the rule of law and equal opportunity for all.
                        </p>
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