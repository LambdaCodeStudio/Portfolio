import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#010937] via-[#101f78] to-[#020f59]">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1c31a5] rounded-full mix-blend-multiply filter blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3a89c9] rounded-full mix-blend-multiply filter blur-3xl"
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
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-[#f26c4f] rounded-full mix-blend-multiply filter blur-3xl"
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

      {/* Floating Dental Icons - Larger and more prominent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Tooth 1 - Larger */}
        <motion.div
          className="absolute top-[10%] left-[5%] text-[#3a89c9]/40"
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
          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>

        {/* Tooth 2 - Larger */}
        <motion.div
          className="absolute top-[60%] right-[8%] text-[#1c31a5]/40"
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
          <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>

        {/* Tooth 3 */}
        <motion.div
          className="absolute bottom-[15%] left-[12%] text-[#9cc4e4]/30"
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
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>

        {/* Dental Mirror - Larger */}
        <motion.div
          className="absolute top-[25%] right-[15%] text-[#3a89c9]/50"
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
          <svg width="75" height="75" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8" cy="8" r="6"/>
            <line x1="12" y1="12" x2="22" y2="22"/>
          </svg>
        </motion.div>

        {/* Toothbrush - Larger */}
        <motion.div
          className="absolute bottom-[30%] right-[20%] text-[#1b325f]/30"
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
          <svg width="65" height="65" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.22 11.29l7.07-7.07c.39-.39 1.02-.39 1.41 0l2.12 2.12c.39.39.39 1.02 0 1.41l-7.07 7.07c-.39.39-1.02.39-1.41 0L4.22 12.7c-.39-.39-.39-1.02 0-1.41zM18 15h-2v-2h2v2zm-2 2h2v2h-2v-2zm2-6h-2V9h2v2zm-2-4h2V5h-2v2z"/>
          </svg>
        </motion.div>

        {/* Sparkle/Clean Tooth Effect - Larger */}
        <motion.div
          className="absolute top-[45%] left-[18%] text-[#00c8ff]/40"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z"/>
          </svg>
        </motion.div>

        {/* Another Sparkle - Larger */}
        <motion.div
          className="absolute top-[70%] left-[25%] text-[#3a89c9]/35"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z"/>
          </svg>
        </motion.div>

        {/* Dental Chair Icon */}
        <motion.div
          className="absolute bottom-[45%] right-[12%] text-[#1c31a5]/35"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <svg width="55" height="55" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 3.18l7 3.12V11c0 4.52-3.17 8.71-7 9.82-3.83-1.11-7-5.3-7-9.82V7.3l7-3.12z"/>
          </svg>
        </motion.div>

        {/* Small Tooth Right Side */}
        <motion.div
          className="absolute top-[35%] right-[5%] text-[#9cc4e4]/40"
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
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>
      </div>

      {/* Grid Pattern Overlay - Medical Blueprint Style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(28,49,165,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(28,49,165,0.15)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container-custom relative z-10 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c31a5]/30 border border-[#3a89c9] text-[#9cc4e4] text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
            </svg>
            Sistema Multi-Tenant SaaS de Gestión Odontológica
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#9cc4e4] to-[#3a89c9]">
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
            className="text-2xl md:text-3xl font-semibold text-[#3a89c9] mb-10"
          >
            Pacientes, agenda, odontograma, pagos y más
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
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#f26c4f] to-[#f26c4f] rounded-xl shadow-xl hover:shadow-2xl hover:shadow-[#f26c4f]/50 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              Probar 7 días gratis
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3a89c9] to-[#1c31a5] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
            <a
              href="#planes"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Ver Planes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
          </motion.div>

          {/* Trust Indicators - Maestro Obras Style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-sm"
          >
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-12 h-12 rounded-full bg-[#1c31a5]/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-[#3a89c9]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">500+</div>
                <div className="text-xs">Consultorios</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">99.9%</div>
                <div className="text-xs">Uptime</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-neutral-300">
              <div className="w-12 h-12 rounded-full bg-[#f26c4f]/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-6 h-6 text-[#f26c4f]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold text-lg">24/7</div>
                <div className="text-xs">Soporte</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-[#010937]"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
