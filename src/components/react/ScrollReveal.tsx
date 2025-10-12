import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function ScrollReveal({
  children,
  animation = 'slideUp',
  delay = 0,
  duration = 1,
  stagger = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Animation configurations
    const animations = {
      fade: {
        opacity: 0,
      },
      slideUp: {
        opacity: 0,
        y: 60,
      },
      slideLeft: {
        opacity: 0,
        x: 60,
      },
      slideRight: {
        opacity: 0,
        x: -60,
      },
      scale: {
        opacity: 0,
        scale: 0.8,
      },
      rotate: {
        opacity: 0,
        rotation: 10,
        scale: 0.9,
      },
    };

    const endState = {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotation: 0,
    };

    // Check if element has children to stagger
    const children = element.children;
    const hasChildren = children.length > 0 && stagger > 0;

    if (hasChildren) {
      // Stagger animation for children
      gsap.fromTo(
        children,
        animations[animation],
        {
          ...endState,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    } else {
      // Single element animation
      gsap.fromTo(
        element,
        animations[animation],
        {
          ...endState,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration, stagger]);

  return <div ref={elementRef}>{children}</div>;
}
