import { motion } from 'framer-motion';

interface TechnologyStackProps {
  technologies: string[];
}

const techIcons: Record<string, string> = {
  'React': '⚛️',
  'Node.js': '🟢',
  'Express': '🚂',
  'MongoDB': '🍃',
  'Tailwind CSS': '💨',
  'Chart.js': '📊',
  'TypeScript': '🔷',
  'Astro': '🚀',
  'Recharts': '📈',
};

const TechnologyStack = ({ technologies }: TechnologyStackProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  // Statistics about the project
  const stats = [
    { label: 'Líneas de Código', value: '42,500+' },
    { label: 'Endpoints API', value: '116' },
    { label: 'Componentes React', value: '45+' },
    { label: 'Capas de Seguridad', value: '12' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-4 text-neutral-900 dark:text-neutral-100">
              Tecnología de punta
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Construido con las mejores herramientas del mercado para garantizar rendimiento y escalabilidad
            </p>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border-2 border-neutral-200 dark:border-neutral-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 text-center">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="px-6 py-4 bg-white dark:bg-neutral-800 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {techIcons[tech] || '🔧'}
                  </span>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {tech}
                  </span>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Architecture */}
            <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Arquitectura Escalable
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Diseño modular que permite crecer con tu negocio sin limitaciones técnicas
              </p>
            </div>

            {/* Security */}
            <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Seguridad Multicapa
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                12 capas de protección con auditoría completa de todas las operaciones
              </p>
            </div>

            {/* Performance */}
            <div className="p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                Alta Performance
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Optimizado para gestionar miles de registros con respuesta instantánea
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
