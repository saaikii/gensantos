import React from 'react';
import { Eye, Target, ShieldCheck, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface EnvelopeProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  content: string;
  colorTheme: 'blue' | 'yellow' | 'red' | 'purple' | 'pink';
  delay: number;
}

const EnvelopeCard: React.FC<EnvelopeProps> = ({ title, subtitle, icon, content, colorTheme, delay }) => {
  
  // Theme configuration lookups
  const theme = {
    blue: {
      dark: 'bg-[#002878]', // Back inside
      flap: 'fill-[#0048D0]', // Top Flap
      frontLeft: 'fill-[#0038A8]', // Left Flap
      frontRight: 'fill-[#003090]', // Right Flap
      front: 'fill-[#0040C0]', // Bottom Flap
      text: 'text-[#0038A8]',
      bg: 'bg-blue-50',
      border: 'border-[#0038A8]',
    },
    yellow: {
      dark: 'bg-yellow-600',
      flap: 'fill-yellow-400',
      frontLeft: 'fill-yellow-600',
      frontRight: 'fill-yellow-700',
      front: 'fill-yellow-500',
      text: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-500',
    },
    red: {
      dark: 'bg-red-700',
      flap: 'fill-red-500',
      frontLeft: 'fill-red-700',
      frontRight: 'fill-red-800',
      front: 'fill-red-600',
      text: 'text-red-700',
      bg: 'bg-red-50',
      border: 'border-red-600',
    },
    purple: {
      dark: 'bg-purple-900',
      flap: 'fill-purple-600',
      frontLeft: 'fill-purple-800',
      frontRight: 'fill-purple-900',
      front: 'fill-purple-700',
      text: 'text-purple-800',
      bg: 'bg-purple-50',
      border: 'border-purple-700',
    },
    pink: {
      dark: 'bg-pink-900',
      flap: 'fill-pink-500',
      frontLeft: 'fill-pink-700',
      frontRight: 'fill-pink-800',
      front: 'fill-pink-600',
      text: 'text-pink-700',
      bg: 'bg-pink-50',
      border: 'border-pink-600',
    }
  };

  const t = theme[colorTheme];

  return (
    <ScrollReveal delay={delay} className="h-full w-full flex justify-center perspective-[1500px]" animation="fade-up" enableBounce duration={0.8}>
      <div 
        className="relative group w-full max-w-[380px] aspect-[1.5] cursor-pointer mt-20 focus:outline-none" 
        role="button"
        tabIndex={0}
        aria-label={`View ${title}`}
      > 
        
        {/* 1. The Letter */}
        <div className={`absolute left-4 right-4 bottom-2 bg-white rounded-t-lg shadow-md transition-all duration-700 ease-in-out group-hover:-translate-y-[45%] group-focus-within:-translate-y-[45%] z-10 p-6 border-t-4 ${t.border} flex flex-col h-[110%]`}>
           {/* Header */}
           <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-3">
              <div className={`p-2 rounded-full ${t.bg}`}>
                {icon}
              </div>
              <div className="flex-1">
                 <h4 className={`font-bold ${t.text} uppercase tracking-wider text-sm`}>{title}</h4>
                 {subtitle && <span className="text-[10px] text-gray-400 font-bold block">{subtitle}</span>}
              </div>
           </div>
           
           {/* Content */}
           <div className="overflow-y-auto custom-scrollbar flex-1 pr-1">
              <p className="text-sm text-slate-800 leading-relaxed text-left font-normal">
                {content}
              </p>
           </div>

           {/* Footer */}
           <div className="mt-3 flex justify-center opacity-30">
              <Sparkles size={12} className={t.text} />
           </div>
        </div>

        {/* 2. The Back of the Envelope (Dark background inside) */}
        <div className={`absolute bottom-0 w-full h-full ${t.dark} rounded-b-xl shadow-2xl z-0 overflow-hidden`}></div>

        {/* 3. The Front Body (SVG Overlay) 
            Contains Left, Right, and Bottom flaps.
        */}
        <svg 
            className="absolute bottom-0 left-0 w-full h-full z-20 pointer-events-none rounded-b-xl filter drop-shadow-lg"
            viewBox="0 0 100 80"
            preserveAspectRatio="none"
        >
             {/* Left Flap */}
            <path d="M0,0 L50,45 L0,80 Z" className={t.frontLeft} />
             
             {/* Right Flap */}
            <path d="M100,0 L50,45 L100,80 Z" className={t.frontRight} />

             {/* Bottom Flap */}
            <path d="M0,80 L50,45 L100,80 Z" className={t.front} />
        </svg>

        {/* 4. The Top Flap (SVG Animate) 
            Contains just the top triangle.
        */}
        <div 
            className="absolute top-0 left-0 w-full h-1/2 origin-top transition-transform duration-500 ease-in-out z-30 group-hover:rotate-x-180 group-focus-within:rotate-x-180 group-hover:z-0 group-focus-within:z-0"
            style={{ transformStyle: 'preserve-3d' }}
        >
             <svg 
                className={`w-full h-full drop-shadow-md`}
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
            >
                <path d="M0,0 L50,40 L100,0 Z" className={t.flap} />
             </svg>
        </div>

         {/* Seal */}
         <div className="absolute top-[40%] left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-in-out group-hover:rotate-x-180 group-focus-within:rotate-x-180 group-hover:opacity-0 group-focus-within:opacity-0 group-hover:delay-0 group-focus-within:delay-0 delay-100 pointer-events-none drop-shadow-xl">
              <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-sm">
                <defs>
                  {/* Main Body Gradient (Rich Gold) */}
                  <radialGradient id="goldBody" cx="40%" cy="40%" r="80%">
                    <stop offset="0%" stopColor="#FCD34D" />
                    <stop offset="40%" stopColor="#FBbf24" />
                    <stop offset="100%" stopColor="#92400e" />
                  </radialGradient>

                  {/* Inner Recessed Gradient (Darker) */}
                  <radialGradient id="goldInner" cx="50%" cy="50%" r="50%">
                    <stop offset="50%" stopColor="#B45309" />
                    <stop offset="100%" stopColor="#78350f" />
                  </radialGradient>

                  {/* Rim Highlight */}
                  <linearGradient id="rimLight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                
                {/* 1. Main Wax Blob - Alternative Irregular Shape (More 'melted' look) */}
                <path 
                  d="M50 5
                     C 65 2, 80 10, 90 20
                     C 98 30, 95 45, 92 55
                     C 90 70, 95 85, 80 92
                     C 65 98, 55 90, 40 95
                     C 25 98, 5 85, 8 65
                     C 10 45, 2 30, 10 15
                     C 18 5, 35 8, 50 5 Z" 
                  fill="url(#goldBody)" 
                  stroke="#92400e" 
                  strokeWidth="1"
                  filter="drop-shadow(0px 3px 6px rgba(0,0,0,0.4))"
                />
                
                {/* 2. Thick Rim Highlight (Matching new shape) */}
                <path 
                  d="M50 12
                     C 62 10, 75 16, 82 24
                     C 88 32, 86 42, 84 50
                     C 82 62, 86 74, 75 80
                     C 64 85, 56 78, 45 82
                     C 34 85, 12 76, 15 60
                     C 16 44, 10 32, 16 20
                     C 22 12, 38 14, 50 12 Z" 
                  fill="none" 
                  stroke="url(#rimLight)" 
                  strokeWidth="3"
                  className="opacity-60"
                />

                {/* 3. Recessed Inner Circle - Enlarged for better balance */}
                <circle cx="50" cy="50" r="34" fill="url(#goldInner)" className="shadow-inner" />
                <circle cx="50" cy="50" r="34" fill="none" stroke="#78350f" strokeWidth="1.5" opacity="0.5" />

                {/* 4. Text (Stamped Effect) - Scaled up */}
                <text x="50" y="56" textAnchor="middle" fill="#5F2509" fontSize="16" fontWeight="900" style={{ fontFamily: 'serif', letterSpacing: '2px', textShadow: '1px 1px 0px rgba(255,255,255,0.2)' }}>LGU</text>

                {/* 5. Specular Highlight on top lobe */}
                <path d="M35 25 Q 50 15, 65 25" stroke="white" strokeWidth="2" fill="none" opacity="0.4" strokeLinecap="round" />
              </svg>
         </div>

      </div>
    </ScrollReveal>
  );
};

export default EnvelopeCard;
