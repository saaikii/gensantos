import React, { useState, useEffect } from 'react';
import { Search, Phone, Ambulance, Shield, Flame, ChevronLeft, ChevronRight } from 'lucide-react';

// Slide data configuration
const slides = [
  {
    id: 1,
    image: 'https://365deyz.wordpress.com/wp-content/uploads/2014/06/mg_0046.jpg',
    alt: 'Statue of General Paulino Santos',
    type: 'hero',
    position: 'object-top', // Aligns vertically to the top to show head/hand
    title: {
      welcome: 'Welcome',
      toThe: 'to the',
      home: 'HOME',
      ofThe: 'OF THE',
      champions: 'CHAMPIONS'
    },
    description: 'Experience the vibrant culture, booming economy, and the warm hospitality of the Tuna Capital of the Philippines.'
  },
  {
    id: 2,
    image: '/queen_tuna_park.jpg',
    alt: 'Queen Tuna Park - General Santos City',
    type: 'tourism',
    position: 'object-center',
    title: 'Queen Tuna Park',
    subtitle: 'Iconic Landmark',
    description: 'The famous Queen Tuna statue symbolizes General Santos City as the Tuna Capital of the Philippines.'
  },
  {
    id: 3,
    image: '/sanchez_peak.png',
    alt: 'Sanchez Peak',
    type: 'tourism',
    position: 'object-[50%_75%]',
    title: 'Sanchez Peak',
    subtitle: 'Majestic Views',
    description: 'Trek to the highest point of General Santos City and witness panoramic views of the landscape.'
  },
  {
    id: 4,
    image: '/emergency_bg.png',
    alt: 'Emergency Services',
    type: 'emergency',
    position: 'object-center',
    title: 'Emergency Hotlines',
    subtitle: 'Your Safety Matters',
    hotlines: [
      { name: 'Emergency Rescue (CDRRMO)', number: '(083) 552-8686', icon: 'ambulance' },
      { name: 'Philippine National Police', number: '(083) 552-2256', icon: 'shield' },
      { name: 'Bureau of Fire Protection', number: '(083) 553-5765', icon: 'flame' },
      { name: 'City Health Office', number: '(083) 552-3422', icon: 'phone' }
    ]
  }
];

interface HeroProps {
  onSearch?: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [localQuery, setLocalQuery] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedText, setDisplayedText] = useState({
    welcome: '',
    toThe: '',
    home: '',
    ofThe: '',
    champions: ''
  });
  const [showCursor, setShowCursor] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [hasTyped, setHasTyped] = useState(false);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for first slide (only runs once)
  useEffect(() => {
    if (hasTyped) return;
    
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
            if (nextPhase === 5) setHasTyped(true);
          }
        }, 50);
      }, delay);
    };

    if (animationPhase === 0) typeText('welcome', 300, 1);
    else if (animationPhase === 1) typeText('toThe', 200, 2);
    else if (animationPhase === 2) typeText('home', 200, 3);
    else if (animationPhase === 3) typeText('ofThe', 100, 4);
    else if (animationPhase === 4) typeText('champions', 200, 5);
  }, [animationPhase, hasTyped]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ambulance': return <Ambulance size={24} />;
      case 'shield': return <Shield size={24} />;
      case 'flame': return <Flame size={24} />;
      default: return <Phone size={24} />;
    }
  };

  const handleSearch = () => {
    if (onSearch && localQuery.trim()) {
      onSearch(localQuery);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const slide = slides[currentSlide];
  const showContent = currentSlide === 0 ? animationPhase >= 5 || hasTyped : true;

  return (
    <>
    <section className="relative z-40 h-[85vh] min-h-[600px] flex items-center bg-slate-900 pt-36">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <img 
                src={s.image}
                alt={s.alt}
                className={`w-full h-full object-cover ${s.position || 'object-center'}`}
                style={{ 
                  animation: index === currentSlide ? 'subtle-zoom 20s ease-in-out infinite alternate' : 'none',
                  transformOrigin: s.position === 'object-top' ? '50% 0%' : '50% 50%'
                }}
              />
            </div>
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40" />
      </div>

      {/* Slide Content */}
      <div className={`relative z-10 container mx-auto px-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-2xl text-white">
          
          {/* Slide 1: Hero with Typewriter */}
          {currentSlide === 0 && (
            <div>
              <p className="font-serif text-3xl md:text-5xl text-yellow-400 mb-2 font-light italic tracking-wide min-h-[1.2em]">
                {hasTyped ? 'Welcome' : displayedText.welcome}
                {!hasTyped && animationPhase === 0 && showCursor && <span className="animate-pulse">|</span>}
              </p>
              
              <div className="flex flex-col mb-8">
                <span className="text-lg md:text-2xl font-light tracking-[0.2em] uppercase mb-1 text-blue-200 min-h-[1.5em]">
                  {hasTyped ? 'to the' : displayedText.toThe}
                  {!hasTyped && animationPhase === 1 && showCursor && <span className="animate-pulse">|</span>}
                </span>
                
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
                  <span className="min-h-[1em] inline-block">
                    {hasTyped ? 'HOME' : displayedText.home}
                    {!hasTyped && animationPhase === 2 && showCursor && <span className="animate-pulse text-yellow-400">|</span>}
                  </span>
                  {' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 min-h-[1em] inline-block">
                    {hasTyped ? 'OF THE' : displayedText.ofThe}
                    {!hasTyped && animationPhase === 3 && showCursor && <span className="animate-pulse text-white">|</span>}
                  </span>
                  <br/>
                  <span className="text-yellow-400 relative inline-block">
                    {hasTyped ? 'CHAMPIONS' : displayedText.champions}
                    {!hasTyped && animationPhase === 4 && showCursor && <span className="animate-pulse">|</span>}
                    <span className={`absolute -bottom-2 left-0 h-2 bg-yellow-500/30 rounded-full blur-sm transition-all duration-500 ${showContent ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></span>
                  </span>
                </h1>
              </div>
              
              <div className={`h-1.5 bg-yellow-400 mb-8 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-700 ease-out ${showContent ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}></div>
              
              <p className={`text-lg md:text-xl text-slate-200 font-light max-w-xl leading-relaxed drop-shadow-md transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {slide.description}
              </p>
            </div>
          )}

          {/* Slide 2-3: Tourism Spots */}
          {slide.type === 'tourism' && (
            <div className="animate-fade-in-up">
              <span className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-4 block">{slide.subtitle}</span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                {slide.title}
              </h2>
              <div className="h-1.5 w-24 bg-yellow-400 mb-8 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
              <p className="text-lg md:text-xl text-slate-200 font-light max-w-xl leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
            </div>
          )}

          {/* Slide 4: Emergency Hotlines */}
          {slide.type === 'emergency' && (
            <div className="animate-fade-in-up max-w-3xl">
              <span className="text-red-400 font-bold tracking-widest uppercase text-sm mb-4 block">{slide.subtitle}</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
                {slide.title}
              </h2>
              <div className="h-1.5 w-24 bg-red-500 mb-8 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {slide.hotlines?.map((hotline, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white shrink-0">
                      {getIcon(hotline.icon)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{hotline.name}</p>
                      <p className="text-yellow-400 font-bold text-lg">{hotline.number}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slide Navigation */}
      {/* Left Arrow - Left Side */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-[55%] -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors p-2"
        aria-label="Previous slide"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      {/* Right Arrow - Right Side */}
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-[55%] -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors p-2"
        aria-label="Next slide"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      
      {/* Dots - Bottom Center, above search bar */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-6 h-2 bg-yellow-400 rounded-full' 
                : 'w-2.5 h-2.5 rounded-full border-2 border-white/60 hover:border-white bg-transparent'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>

    {/* Sticky Search Bar Container */}
    <div className="sticky top-[150px] md:top-[171px] z-[40] -mt-8 px-6 transition-all duration-300 pointer-events-none">
      <div className="container mx-auto">
        <div 
          className="mx-auto bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-2 flex items-center max-w-3xl border border-white/40 ring-4 ring-black/5 pointer-events-auto"
        >
          <Search className="text-blue-500 ml-3 w-5 h-5 shrink-0" />
          <input 
            type="text" 
            placeholder="I'm looking for services, departments, or news..." 
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none text-slate-800 placeholder-slate-400 px-3 py-2.5 focus:outline-none text-base min-w-0"
          />
          <button 
            onClick={handleSearch}
            className="shrink-0 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-2.5 px-5 md:px-6 rounded-lg transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 text-sm"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;