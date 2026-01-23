import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState({
    welcome: '',
    toThe: '',
    home: '',
    ofThe: '',
    champions: ''
  });
  const [showCursor, setShowCursor] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const texts = {
      welcome: 'Welcome',
      toThe: 'to the',
      home: 'HOME',
      ofThe: 'OF THE',
      champions: 'CHAMPIONS'
    };

    const typeText = (key: keyof typeof texts, delay: number, nextPhase: number) => {
      const text = texts[key];
      let index = 0;
      
      setTimeout(() => {
        const interval = setInterval(() => {
          if (index <= text.length) {
            setDisplayedText(prev => ({ ...prev, [key]: text.slice(0, index) }));
            index++;
          } else {
            clearInterval(interval);
            setAnimationPhase(nextPhase);
          }
        }, 50); // Speed of typing
      }, delay);
    };

    // Sequence the animations
    if (animationPhase === 0) {
      typeText('welcome', 300, 1);
    } else if (animationPhase === 1) {
      typeText('toThe', 200, 2);
    } else if (animationPhase === 2) {
      typeText('home', 200, 3);
    } else if (animationPhase === 3) {
      typeText('ofThe', 100, 4);
    } else if (animationPhase === 4) {
      typeText('champions', 200, 5);
    }
  }, [animationPhase]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative z-40 h-[85vh] min-h-[600px] flex items-center bg-slate-900 pt-36">
      {/* Background Image with Slow Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="https://365deyz.wordpress.com/wp-content/uploads/2014/06/mg_0046.jpg"
            alt="Statue of General Paulino Santos" 
            className="w-full h-full object-cover object-[50%_0%] transform scale-100 animate-[subtle-zoom_20s_infinite_alternate]"
            style={{ 
              animation: 'subtle-zoom 20s ease-in-out infinite alternate',
              transformOrigin: '50% 0%'
            }}
          />
        </div>
        {/* Gradient Overlay - Optimized for text readability on left and image visibility on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent/20" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl text-white">
          <div>
            {/* Welcome - Typewriter */}
            <p className="font-serif text-3xl md:text-5xl text-yellow-400 mb-2 font-light italic tracking-wide min-h-[1.2em]">
              {displayedText.welcome}
              {animationPhase === 0 && showCursor && <span className="animate-pulse">|</span>}
            </p>
            
            <div className="flex flex-col mb-8">
              {/* "to the" - Typewriter */}
              <span className="text-lg md:text-2xl font-light tracking-[0.2em] uppercase mb-1 text-blue-200 min-h-[1.5em]">
                {displayedText.toThe}
                {animationPhase === 1 && showCursor && <span className="animate-pulse">|</span>}
              </span>
              
              {/* Main heading - Typewriter */}
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
                <span className="min-h-[1em] inline-block">
                  {displayedText.home}
                  {animationPhase === 2 && showCursor && <span className="animate-pulse text-yellow-400">|</span>}
                </span>
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 min-h-[1em] inline-block">
                  {displayedText.ofThe}
                  {animationPhase === 3 && showCursor && <span className="animate-pulse text-white">|</span>}
                </span>
                <br/>
                <span className="text-yellow-400 relative inline-block">
                  {displayedText.champions}
                  {animationPhase === 4 && showCursor && <span className="animate-pulse">|</span>}
                  {/* Decorative underline - appears after Champions is typed */}
                  <span 
                    className={`absolute -bottom-2 left-0 h-2 bg-yellow-500/30 rounded-full blur-sm transition-all duration-500 ${
                      animationPhase >= 5 ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                  ></span>
                </span>
              </h1>
            </div>
            
            {/* Yellow line - slides in after typing completes */}
            <div 
              className={`h-1.5 bg-yellow-400 mb-8 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-700 ease-out ${
                animationPhase >= 5 ? 'w-32 opacity-100' : 'w-0 opacity-0'
              }`}
            ></div>
            
            {/* Description - fades in after typing completes */}
            <p 
              className={`text-lg md:text-xl text-slate-200 font-light max-w-xl leading-relaxed drop-shadow-md transition-all duration-700 ${
                animationPhase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Experience the vibrant culture, booming economy, and the warm hospitality of the Tuna Capital of the Philippines.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="absolute bottom-0 left-0 w-full z-30 translate-y-1/2 px-6">
        <div className="container mx-auto">
          <div 
            className={`mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-3 flex items-center max-w-3xl transform hover:scale-[1.01] transition-all duration-500 border border-white/40 ring-4 ring-black/5 ${
              animationPhase >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Search className="text-blue-500 ml-4 w-6 h-6 shrink-0" />
            <input 
              type="text" 
              placeholder="I'm looking for services, departments, or news..." 
              className="flex-1 bg-transparent border-none text-slate-800 placeholder-slate-400 px-4 py-4 focus:outline-none text-lg min-w-0"
            />
            <button className="shrink-0 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 px-6 md:px-8 rounded-xl transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
              Search
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;