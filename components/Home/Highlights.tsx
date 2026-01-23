import React from 'react';

const Highlights: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 skew-x-12 transform translate-x-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-6">
              Discover GenSan
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Where Culture Meets <br/> <span className="text-blue-400">Economic Growth</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              General Santos City is more than just the Tuna Capital. It is a melting pot of cultures, a booming economic hub, and the gateway to the wonders of SOCCSKSARGEN. From the highlands of Sanchez Peak to the bustling Fish Port Complex.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-1">600K+</div>
                <div className="text-slate-400 text-sm">Happy Residents</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-1">Top 10</div>
                <div className="text-slate-400 text-sm">Most Competitive Cities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-1">98%</div>
                <div className="text-slate-400 text-sm">Literacy Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-1">ISO</div>
                <div className="text-slate-400 text-sm">Certified Governance</div>
              </div>
            </div>

            <button className="bg-white text-slate-900 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Explore Investment Opportunities
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
               <img 
                src="https://picsum.photos/id/1015/300/400" 
                alt="GenSan Scenery 1" 
                className="rounded-2xl w-full h-64 object-cover transform translate-y-8 shadow-2xl"
              />
              <img 
                src="https://picsum.photos/id/1036/300/400" 
                alt="GenSan Scenery 2" 
                className="rounded-2xl w-full h-64 object-cover shadow-2xl"
              />
              <img 
                src="https://picsum.photos/id/1011/300/400" 
                alt="GenSan Scenery 3" 
                className="rounded-2xl w-full h-64 object-cover transform translate-y-8 shadow-2xl"
              />
              <img 
                src="https://picsum.photos/id/1057/300/400" 
                alt="GenSan Scenery 4" 
                className="rounded-2xl w-full h-64 object-cover shadow-2xl"
              />
            </div>
            {/* Decorative Circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;