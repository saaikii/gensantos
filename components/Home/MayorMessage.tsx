import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const MayorMessage: React.FC = () => {
  const fullMessage = "Digitalization in governance opens new avenues for transparency, efficiency, and citizen engagement. It empowers us to create more responsive, accessible, and effective public services. Let's embrace this digital revolution for a more progressive governance.";

  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => {
      setIsTyping(true);
      indexRef.current = 0;
      setDisplayedText('');

      typingInterval = setInterval(() => {
        if (indexRef.current <= fullMessage.length) {
          setDisplayedText(fullMessage.slice(0, indexRef.current));
          indexRef.current++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 30);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section 
      className="pt-20 pb-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden"
    >
      {/* Texture: Noise Grain + Geometric Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.3" />
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
            <circle cx="0" cy="0" r="1.5" fill="white" opacity="0.4" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Subtle large sweeping arcs for depth */}
          <circle cx="10%" cy="10%" r="40%" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
          <circle cx="90%" cy="90%" r="50%" fill="none" stroke="white" strokeWidth="1" opacity="0.08" />
        </svg>
      </div>

      {/* Ornate Stitched/Sewed Outline */}
      <div className="absolute inset-4 border-2 border-dashed border-white/10 rounded-[2rem] pointer-events-none z-0"></div>
      <div className="absolute inset-6 border border-dashed border-yellow-500/20 rounded-[1.75rem] pointer-events-none z-0"></div>
      
      {/* Corner Decorative Stitches */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-dashed border-yellow-400/30 rounded-tl-xl pointer-events-none z-0"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-dashed border-yellow-400/30 rounded-tr-xl pointer-events-none z-0"></div>
      <div className="absolute bottom-4 left-8 w-12 h-12 border-b-2 border-l-2 border-dashed border-yellow-400/30 rounded-bl-xl pointer-events-none z-0"></div>
      <div className="absolute bottom-4 right-8 w-12 h-12 border-b-2 border-r-2 border-dashed border-yellow-400/30 rounded-br-xl pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end gap-10 md:gap-16 max-w-6xl mx-auto">

          {/* Image Section - Standing at the bottom */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-end relative group">
            {/* Photo Section - Static Container */}
            <div 
              className="relative w-full h-[400px] md:h-[550px] flex items-end justify-center z-10"
            >
              {/* Subtle Glow behind the mayor */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-blue-400/20 blur-[80px] rounded-full -z-10"
              ></div>

              <img
                decoding="async"
                src="https://gensantos.gov.ph/wp-content/uploads/2024/01/mayora.png"
                alt="Mayor Lorelie G. Pacquiao"
                title="Mayor Lorelie G. Pacquiao"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="max-h-full w-auto object-contain drop-shadow-[20px_-10px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div 
            className="w-full md:w-3/5 text-center md:text-left pb-20"
          >
            <div className="mb-6 text-yellow-400 flex justify-center md:justify-start">
              <Quote size={48} className="rotate-180" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold leading-relaxed mb-6 font-serif">
              "Message of the Mayor"
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-light italic mb-8 min-h-[120px] md:min-h-[100px]">
              {displayedText}
              <span
                className={`inline-block ml-1 text-yellow-400 font-normal transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                |
              </span>
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