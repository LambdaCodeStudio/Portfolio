import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ThemeTransition from './ThemeTransition';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    // Cargar preferencia guardada
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = saved === 'dark' || (!saved && prefersDark);

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Escuchar cambios de tema de otras instancias
    const handleThemeChange = (e: CustomEvent) => {
      const newTheme = e.detail.isDark;
      setIsDark(newTheme);

      // Sincronizar el DOM también
      if (newTheme) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);

    return () => {
      window.removeEventListener('themeChange', handleThemeChange as EventListener);
    };
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);

    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Notificar a otras instancias
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { isDark: newTheme } }));

    // Terminar la transición después de la animación
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  if (!mounted) return null;

  return (
    <>
      <ThemeTransition isTransitioning={isTransitioning} isDark={!isDark} buttonRef={buttonRef} />

      <motion.button
        ref={buttonRef}
        onClick={toggleTheme}
        className="relative p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {/* Efecto de brillo al hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />

        <div className="relative w-6 h-6 flex items-center justify-center">
          {/* Sol */}
          <motion.svg
            className="absolute w-6 h-6 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            initial={false}
            animate={{
              scale: isDark ? 0 : 1,
              rotate: isDark ? 90 : 0,
              opacity: isDark ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </motion.svg>

          {/* Luna */}
          <motion.svg
            className="absolute w-6 h-6 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            initial={false}
            animate={{
              scale: isDark ? 1 : 0,
              rotate: isDark ? 0 : -90,
              opacity: isDark ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
          </motion.svg>
        </div>

        {/* Partículas decorativas al hacer hover */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-blue-400' : 'bg-yellow-400'
            }`}
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ scale: 0, x: 0, y: 0 }}
            whileHover={{
              scale: [0, 1, 0],
              x: [0, Math.cos((i * 60 * Math.PI) / 180) * 20],
              y: [0, Math.sin((i * 60 * Math.PI) / 180) * 20],
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
            }}
          />
        ))}
      </motion.button>
    </>
  );
}
