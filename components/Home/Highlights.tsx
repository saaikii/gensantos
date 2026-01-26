import React from 'react';
import { TrendingUp, Users, Award, Building2, ArrowRight } from 'lucide-react';

const Highlights: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50/50 via-white to-orange-50/30 overflow-hidden">
      {/* Subtle Section Outline/Frame */}
      <div className="absolute inset-4 md:inset-8 border-2 border-blue-200 rounded-[3rem] pointer-events-none z-0"></div>
      <div className="absolute inset-6 md:inset-10 border-2 border-dashed border-blue-300/50 rounded-[2.5rem] pointer-events-none z-0"></div>

      {/* Background Decorations */}
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent skew-x-12 transform translate-x-20 opacity-60 pointer-events-none"></div>
      
      {/* Restored Original Colorful Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-blob"></div>
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-yellow-300/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-0 right-20 w-80 h-80 bg-orange-300/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/50 text-blue-600 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Discover GenSan
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight text-slate-900">
              Where <span className="font-serif italic text-blue-600">Culture</span> Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Economic Growth</span>
            </h2>

            <p className="text-slate-600 text-xl mb-10 leading-relaxed max-w-xl font-light">
              General Santos City is a melting pot of vibrant cultures and a booming economic hub. From the highlands of Sanchez Peak to the bustling Fish Port Complex, experience the gateway to SOCCSKSARGEN.
            </p>

            <button className="group bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20 flex items-center gap-2">
              Invest in GenSan <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats / Visuals */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {/* Main Card */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden group hover:shadow-3xl transition-shadow duration-500">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-12 relative z-10">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110 duration-500">
                    <Users size={28} />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 tracking-tight">600K+</div>
                    <div className="text-slate-500 text-sm font-bold uppercase tracking-wide mt-1">Happy Residents</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center text-yellow-600 transition-transform group-hover:scale-110 duration-500 delay-75">
                    <Award size={28} />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 tracking-tight">Top 10</div>
                    <div className="text-slate-500 text-sm font-bold uppercase tracking-wide mt-1">Competitiveness</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 transition-transform group-hover:scale-110 duration-500 delay-100">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 tracking-tight">9.2%</div>
                    <div className="text-slate-500 text-sm font-bold uppercase tracking-wide mt-1">Economic Growth</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 transition-transform group-hover:scale-110 duration-500 delay-150">
                    <Building2 size={28} />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 tracking-tight">ISO</div>
                    <div className="text-slate-500 text-sm font-bold uppercase tracking-wide mt-1">Certified LGU</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-8 -right-8 md:-right-12 bg-white p-2 rounded-3xl shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300 ring-4 ring-blue-50/50">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 md:p-6 flex items-center gap-4 text-white">
                <div className="text-4xl filter drop-shadow-md">🐟</div>
                <div className="text-left">
                  <div className="text-xs text-blue-200 font-bold uppercase tracking-wider mb-1">Tuna Capital</div>
                  <div className="text-lg md:text-xl font-black leading-none">of the Philippines</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Highlights;