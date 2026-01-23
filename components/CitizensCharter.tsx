import React from 'react';
import { Calculator, Home } from 'lucide-react';

const CitizensCharter: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Guides Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {/* Business Tax */}
          <a href="#" className="group bg-white border-2 border-gray-100 p-10 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl">
            <div className="text-blue-900 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calculator size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-900 uppercase tracking-wide border-b-2 border-transparent group-hover:border-yellow-400 pb-1 transition-all">
              How To Pay Your Business Tax
            </h3>
          </a>

          {/* Real Property Tax */}
          <a href="#" className="group bg-white border-2 border-gray-100 p-10 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-xl">
            <div className="text-blue-900 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Home size={56} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-900 uppercase tracking-wide border-b-2 border-transparent group-hover:border-yellow-400 pb-1 transition-all">
              How To Pay Your Real Property Tax
            </h3>
          </a>
        </div>

        {/* Title and Logo */}
        <div className="text-center mt-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-blue-900 mb-10 tracking-widest uppercase">
            CITIZENS GUIDES
          </h2>
          
          <div className="flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40">
               <img 
                  decoding="async"
                  src="https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo.png" 
                  srcSet="https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo.png 225w, https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo-150x150.png 150w, https://gensantos.gov.ph/wp-content/uploads/2024/01/cropped-lgulogo-200x200.png 200w"
                  sizes="(max-width: 225px) 100vw, 225px"
                  alt="General Santos City Official Seal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain drop-shadow-xl"
                  loading="lazy"
               />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CitizensCharter;