import { motion } from 'framer-motion';

const FinalCTA = () => {
  const stats = [
    { value: '500+', label: 'Consultorios' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Soporte' },
    { value: '15+', label: 'Módulos' },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#010937] via-[#101f78] to-[#020f59]">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(28, 49, 165, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(58, 137, 201, 0.5) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(28,49,165,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(28,49,165,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container-custom relative z-10">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9cc4e4] to-[#3a89c9] mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA Content */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              ¿Listo para modernizar
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9cc4e4] to-[#3a89c9]">
                tu consultorio?
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed"
          >
            Únete a cientos de odontólogos que ya digitalizaron su práctica
            <br className="hidden md:block" />
            con <span className="font-semibold text-[#3a89c9]">OdontoCare</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="/#contacto"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[#f26c4f] rounded-xl shadow-2xl hover:shadow-[#f26c4f]/50 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
              Probar 7 días gratis
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1c31a5] to-[#3a89c9] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </a>
            <a
              href="#planes"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Ver planes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#3a89c9]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span>Configuración en minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#9cc4e4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
              <span>Soporte dedicado</span>
            </div>
          </motion.div>
        </div>

        {/* Decorative Dental Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          {/* Floating Tooth Top Left */}
          <motion.div
            className="absolute top-10 left-10 text-[#1c31a5]/50"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="70" height="70" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
            </svg>
          </motion.div>

          {/* Sparkle Bottom Right */}
          <motion.div
            className="absolute bottom-16 right-16 text-[#3a89c9]/40"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
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

          {/* Toothbrush Top Right */}
          <motion.div
            className="absolute top-20 right-20 text-[#9cc4e4]/30"
            animate={{
              rotate: [0, -10, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <svg width="65" height="65" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.22 11.29l7.07-7.07c.39-.39 1.02-.39 1.41 0l2.12 2.12c.39.39.39 1.02 0 1.41l-7.07 7.07c-.39.39-1.02.39-1.41 0L4.22 12.7c-.39-.39-.39-1.02 0-1.41zM18 15h-2v-2h2v2zm-2 2h2v2h-2v-2zm2-6h-2V9h2v2zm-2-4h2V5h-2v2z"/>
            </svg>
          </motion.div>

          {/* Dental Mirror Bottom Left */}
          <motion.div
            className="absolute bottom-24 left-20 text-[#3a89c9]/40"
            animate={{
              rotate: [0, 15, 0],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="8" cy="8" r="6"/>
              <line x1="12" y1="12" x2="22" y2="22"/>
            </svg>
          </motion.div>

          {/* Small Sparkles */}
          <motion.div
            className="absolute top-40 right-40 text-[#00c8ff]/25"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
