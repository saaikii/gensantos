import React from 'react';
import { Quote } from 'lucide-react';

const MayorMessage: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
          
          {/* Image Section - Cropped to Torso */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end relative group">
             {/* Decorative glow behind image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-400/20 blur-3xl rounded-full transform scale-75 group-hover:bg-yellow-400/30 transition-colors duration-500"></div>
             
             {/* Cropped Container */}
             <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl bg-white">
               <img 
                decoding="async" 
                src="https://gensantos.gov.ph/wp-content/uploads/2024/01/mayora.png" 
                srcSet="https://gensantos.gov.ph/wp-content/uploads/2024/01/mayora.png 749w, https://gensantos.gov.ph/wp-content/uploads/2024/01/mayora-200x288.png 200w"
                sizes="(max-width: 749px) 100vw, 749px"
                title="Mayor Lorelie G. Pacquiao" 
                alt="Mayor Lorelie G. Pacquiao" 
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
               />
             </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="mb-6 text-yellow-400 flex justify-center md:justify-start">
               <Quote size={48} className="rotate-180" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold leading-relaxed mb-6 font-serif">
              "Message of the Mayor"
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-light italic mb-8">
              Digitalization in governance opens new avenues for transparency, efficiency, and citizen engagement. It empowers us to create more responsive, accessible, and effective public services. Let's embrace this digital revolution for a more progressive governance.
            </p>
            <div className="border-t border-white/10 pt-6 inline-block md:block">
              <p className="font-bold text-2xl text-white">Lorelie G. Pacquiao</p>
              <p className="text-sm text-yellow-400 font-bold uppercase tracking-widest mt-1">City Mayor</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MayorMessage;