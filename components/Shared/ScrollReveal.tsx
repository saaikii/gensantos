import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-in' | 'slide-in' | 'zoom-in';
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
  threshold?: number;
  enableBounce?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.5,
  className = '',
  staggerChildren = false,
  staggerDelay = 100,
  threshold = 0.1,
  enableBounce = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing to keep it visible
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate-y-10';
      case 'fade-down':
        return '-translate-y-10';
      case 'fade-in':
        return 'opacity-0';
      case 'slide-in':
        return '-translate-x-10';
      case 'zoom-in':
        return 'scale-95';
      default:
        return 'translate-y-10';
    }
  };

  const baseStyle = {
    transitionDuration: `${duration}s`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: enableBounce ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' : 'cubic-bezier(0.4, 0, 0.2, 1)',
  };

  {/* Removed staggerChildren logic to prevent layout breakage - simplicity first */}

  return (
    <div
      ref={ref}
      style={baseStyle}
      className={`transform transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : `opacity-0 ${getAnimationClass()}`
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
