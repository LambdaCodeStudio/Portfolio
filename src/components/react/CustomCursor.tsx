import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ClickEffect {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clickEffects, setClickEffects] = useState<ClickEffect[]>([]);
  const rafRef = useRef<number>();
  const isInitialized = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isInitialized.current) {
        cursorX = mouseX;
        cursorY = mouseY;
        dotX = mouseX;
        dotY = mouseY;
        isInitialized.current = true;
        setIsVisible(true);
      }
    };

    // Optimized smooth cursor following with will-change
    const animate = () => {
      // Lag factor for smooth following
      const lagFactor = 0.2;
      const dotLagFactor = 0.5;

      cursorX += (mouseX - cursorX) * lagFactor;
      cursorY += (mouseY - cursorY) * lagFactor;

      dotX += (mouseX - dotX) * dotLagFactor;
      dotY += (mouseY - dotY) * dotLagFactor;

      // Offset to center: w-12 = 48px, center at 24px
      cursor.style.transform = `translate3d(${cursorX - 24}px, ${cursorY - 24}px, 0)`;
      // Offset to center: w-2 = 8px, center at 4px
      cursorDot.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    // Handle hovering over interactive elements
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Function to create click effect (used by both mouse and touch)
    const createClickEffect = (x: number, y: number) => {
      const newEffect: ClickEffect = {
        id: Date.now() + Math.random(),
        x,
        y,
      };
      setClickEffects(prev => [...prev, newEffect]);
      // Remove effect after animation
      setTimeout(() => {
        setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
      }, 1000);
    };

    // Handle clicks with effect
    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      createClickEffect(e.clientX, e.clientY);
    };
    const handleMouseUp = () => setIsClicking(false);

    // Handle touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        createClickEffect(touch.clientX, touch.clientY);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleTouchStart, { passive: true });

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleTouchStart);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Robotic cursor with corners */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10001] hidden md:block"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <motion.div
          className="w-12 h-12 relative"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isHovering ? 1.3 : isClicking ? 0.9 : 1,
            rotate: isHovering ? 45 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Top-left corner */}
          <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-blue-400 dark:border-blue-500" />
          {/* Top-right corner */}
          <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-blue-400 dark:border-blue-500" />
          {/* Bottom-left corner */}
          <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-blue-400 dark:border-blue-500" />
          {/* Bottom-right corner */}
          <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-blue-400 dark:border-blue-500" />

          {/* Center crosshair */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="w-0.5 h-4 bg-blue-400 dark:bg-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ height: isHovering ? 6 : 4 }}
            />
            <motion.div
              className="h-0.5 w-4 bg-blue-400 dark:bg-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ width: isHovering ? 6 : 4 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Center dot - scanning effect */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10002] hidden md:block"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <motion.div
          className="w-2 h-2 relative"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isVisible ? [0.6, 1, 0.6] : 0,
            scale: isClicking ? 0.5 : 1
          }}
          transition={{
            opacity: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 0.1 }
          }}
        >
          <div className="w-full h-full rounded-full bg-blue-400 dark:bg-blue-500 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
        </motion.div>
      </div>

      {/* Click effects with binary code */}
      <AnimatePresence>
        {clickEffects.map((effect) => (
          <div key={effect.id} aria-hidden="true">
            {/* Ripple effect */}
            <motion.div
              className="fixed rounded-full border-2 border-blue-400 dark:border-blue-500 pointer-events-none z-[10000]"
              style={{
                left: effect.x,
                top: effect.y,
              }}
              initial={{ width: 0, height: 0, opacity: 0.8, x: '-50%', y: '-50%' }}
              animate={{ width: 80, height: 80, opacity: 0, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />

            {/* Binary digits flying out */}
            {[...Array(6)].map((_, i) => {
              const angle = (i * 60) * (Math.PI / 180);
              const distance = 50;
              const isOne = Math.random() > 0.5;
              return (
                <motion.div
                  key={i}
                  className="fixed text-blue-400 dark:text-blue-500 font-mono font-bold text-lg pointer-events-none z-[10000]"
                  style={{
                    left: effect.x,
                    top: effect.y,
                  }}
                  initial={{ opacity: 1, x: 0, y: 0, scale: 0.5 }}
                  animate={{
                    opacity: 0,
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    scale: 1,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: i * 0.05,
                  }}
                >
                  {isOne ? '1' : '0'}
                </motion.div>
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </>
  );
}
