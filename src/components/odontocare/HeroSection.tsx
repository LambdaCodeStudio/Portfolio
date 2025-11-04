import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-teal-950 to-neutral-900">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Floating Dental Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tooth 1 */}
        <motion.div
          className="absolute top-[10%] left-[5%] text-teal-500/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>

        {/* Tooth 2 */}
        <motion.div
          className="absolute top-[60%] right-[8%] text-cyan-500/20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>

        {/* Tooth 3 */}
        <motion.div
          className="absolute bottom-[15%] left-[12%] text-teal-400/15"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>

        {/* Dental Mirror */}
        <motion.div
          className="absolute top-[25%] right-[15%] text-blue-400/20"
          animate={{
            rotate: [0, 10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8" cy="8" r="6"/>
            <line x1="12" y1="12" x2="22" y2="22"/>
          </svg>
        </motion.div>

        {/* Toothbrush */}
        <motion.div
          className="absolute bottom-[30%] right-[20%] text-cyan-400/15"
          animate={{
            rotate: [0, -8, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.22 11.29l7.07-7.07c.39-.39 1.02-.39 1.41 0l2.12 2.12c.39.39.39 1.02 0 1.41l-7.07 7.07c-.39.39-1.02.39-1.41 0L4.22 12.7c-.39-.39-.39-1.02 0-1.41zM18 15h-2v-2h2v2zm-2 2h2v2h-2v-2zm2-6h-2V9h2v2zm-2-4h2V5h-2v2z"/>
          </svg>
        </motion.div>

        {/* Sparkle/Clean Tooth Effect */}
        <motion.div
          className="absolute top-[45%] left-[18%] text-teal-300/25"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z"/>
          </svg>
        </motion.div>

        {/* Another Sparkle */}
        <motion.div
          className="absolute top-[70%] left-[25%] text-cyan-300/20"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z"/>
          </svg>
        </motion.div>

        {/* Small Tooth Right Side */}
        <motion.div
          className="absolute top-[35%] right-[5%] text-teal-400/20"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container-custom relative z-10 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            Sistema Multi-Tenant SaaS
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-200 to-cyan-400">
              OdontoCare
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-300 mb-4 leading-relaxed"
          >
            Sistema integral de gestión odontológica en la nube
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-teal-400 mb-10"
          >
            Multi-tenant, seguro y escalable
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="/#contacto"
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              Probar 7 días gratis
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
            <a
              href="#planes"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Ver planes y precios
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-sm"
          >
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <span className="font-medium">100% Seguro</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <span className="font-medium">Escalable</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                </svg>
              </div>
              <span className="font-medium">Alta Performance</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-neutral-900 dark:text-neutral-900"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
