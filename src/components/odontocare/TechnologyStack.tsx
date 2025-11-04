import { motion } from 'framer-motion';

interface TechnologyStackProps {
  technologies: string[];
}

const techIcons: Record<string, string> = {
  'Astro': '🚀',
  'React': '⚛️',
  'Redux': '🔄',
  'Tailwind CSS': '🎨',
  'TypeScript': '📘',
  'Node.js': '🟢',
  'MongoDB': '🍃',
  'Express': '⚡',
  'JWT': '🔐',
};

const TechnologyStack = ({ technologies }: TechnologyStackProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-4 text-neutral-900 dark:text-neutral-100">
              Tecnología de vanguardia
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400">
              Construido con las mejores herramientas del mercado
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
            >
              <div className="h-full p-6 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 text-center">
                {/* Tech Icon */}
                <div className="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110">
                  {techIcons[tech] || '💻'}
                </div>

                {/* Tech Name */}
                <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                  {tech}
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              ),
              title: 'Alto Rendimiento',
              description: 'Optimizado para velocidad y eficiencia'
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              ),
              title: 'Seguridad Robusta',
              description: 'Protección de datos nivel enterprise'
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              ),
              title: 'Actualizaciones Continuas',
              description: 'Mejoras constantes sin interrupciones'
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {benefit.icon}
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyStack;
