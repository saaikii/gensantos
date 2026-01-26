import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const MayorMessage: React.FC = () => {
  const fullMessage = "Digitalization in governance opens new avenues for transparency, efficiency, and citizen engagement. It empowers us to create more responsive, accessible, and effective public services. Let's embrace this digital revolution for a more progressive governance.";

  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const indexRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to center of section
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Sensitivity factor (higher = less movement)
    const factor = 40;
    
    const x = (clientX - centerX) / factor;
    const y = (clientY - centerY) / factor;

    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    // Reset position smoothly when mouse leaves
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden perspective-1000"
    >
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

          {/* Image Section - Royal Golden Frame with Parallax */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end relative group perspective-1000">
            {/* Photo Section - Animated Container */}
            <div 
              className="relative w-72 h-72 md:w-[400px] md:h-[400px] flex items-end justify-center z-10 transition-transform duration-100 ease-out"
              style={{
                transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) translateZ(20px)`
              }}
            >
              {/* Subtle Glow behind the mayor - Simple restore */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-blue-400/20 blur-[80px] rounded-full -z-10 transition-transform duration-100"
                style={{ transform: `translate(-50%, -50%) translateX(${-mousePos.x * 2}px) translateY(${-mousePos.y * 2}px)` }}
              ></div>

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
          <div 
            className="w-full md:w-2/3 text-center md:text-left"
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