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
          // Typing complete - no restart, plays only once per page load
        }
      }, 30); // 30ms per character - comfortable reading speed
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      {/* Ornate Stitched/Sewed Outline */}
      <div className="absolute inset-4 border-2 border-dashed border-white/10 rounded-[2rem] pointer-events-none z-0"></div>
      <div className="absolute inset-6 border border-dashed border-yellow-500/20 rounded-[1.75rem] pointer-events-none z-0"></div>
      
      {/* Corner Decorative Stitches */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-dashed border-yellow-400/30 rounded-tl-xl pointer-events-none z-0"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-dashed border-yellow-400/30 rounded-tr-xl pointer-events-none z-0"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-dashed border-yellow-400/30 rounded-bl-xl pointer-events-none z-0"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-dashed border-yellow-400/30 rounded-br-xl pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">

          {/* Image Section - Royal Golden Frame */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end relative group">
            {/* Photo Section - No Background Cutout */}
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] flex items-end justify-center z-10 transition-all duration-700 hover:scale-[1.05]">
              {/* Subtle Glow behind the mayor */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-blue-400/30 blur-[100px] rounded-full -z-10 animate-pulse"></div>

              <img
                decoding="async"
                src="https://gensantos.gov.ph/wp-content/uploads/2024/01/mayora.png"
                srcSet="https://gensantos.gov.ph/wp-content/uploads/2024/01/mayora.png 749w, https://gensantos.gov.ph/wp-content/uploads/2024/01/mayora-200x288.png 200w"
                sizes="(max-width: 749px) 100vw, 749px"
                title="Mayor Lorelie G. Pacquiao"
                alt="Mayor Lorelie G. Pacquiao"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="max-h-full w-auto object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.6)]"
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