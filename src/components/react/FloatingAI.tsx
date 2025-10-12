import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingAI() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial random position
    const setRandomTarget = () => {
      const maxX = window.innerWidth - 100;
      const maxY = window.innerHeight - 100;

      setTargetPosition({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      });
    };

    // Initialize position
    setRandomTarget();
    setPosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    // Change target position every 8-12 seconds
    const intervalId = setInterval(() => {
      setRandomTarget();
    }, 8000 + Math.random() * 4000);

    // Smooth movement animation
    const animate = () => {
      setPosition(prev => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > 1) {
          const speed = 0.01;
          return {
            x: prev.x + dx * speed,
            y: prev.y + dy * speed,
          };
        }
        return prev;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    // Handle window resize
    const handleResize = () => {
      setRandomTarget();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, [targetPosition.x, targetPosition.y]);

  return (
    <div
      ref={containerRef}
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* AI Robot */}
        <div className="relative w-16 h-16">
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-blue-400 dark:bg-blue-500 rounded-full blur-xl opacity-50"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Robot body */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 rounded-lg shadow-lg">
            {/* Antenna */}
            <motion.div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-blue-400 dark:bg-blue-300"
              animate={{
                scaleY: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-300 dark:bg-blue-200 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Eyes */}
            <div className="absolute top-4 left-3 right-3 flex justify-between items-center">
              <motion.div
                className="w-2.5 h-2.5 bg-white rounded-full"
                animate={{
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-2.5 h-2.5 bg-white rounded-full"
                animate={{
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Mouth/Display */}
            <motion.div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"
              animate={{
                scaleX: [1, 0.8, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Corner accents */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 border-l-2 border-t-2 border-white/50 rounded-tl" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 border-r-2 border-t-2 border-white/50 rounded-tr" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-l-2 border-b-2 border-white/50 rounded-bl" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-r-2 border-b-2 border-white/50 rounded-br" />
          </div>

          {/* Scanning line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent rounded-lg"
            animate={{
              y: [-20, 80],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Binary trail */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 text-blue-400 dark:text-blue-300 text-xs font-mono opacity-60"
              style={{
                top: `${(i + 1) * 20}px`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                y: [0, 20],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
