import { motion, AnimatePresence } from 'framer-motion';

interface ThemeTransitionProps {
  isTransitioning: boolean;
  isDark: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

export default function ThemeTransition({ isTransitioning, isDark, buttonRef }: ThemeTransitionProps) {
  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {/* Fade overlay sutil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.03, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className={`fixed inset-0 z-[9999] pointer-events-none ${
              isDark ? 'bg-neutral-900' : 'bg-neutral-50'
            }`}
          />

          {/* Brillo sutil desde el botón */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 3, 5],
              opacity: [0.4, 0.2, 0],
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="fixed z-[9998] pointer-events-none"
            style={{
              top: buttonRef?.current ? `${buttonRef.current.getBoundingClientRect().top + 15}px` : '50%',
              left: buttonRef?.current ? `${buttonRef.current.getBoundingClientRect().left + 15}px` : '50%',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: isDark
                ? 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
