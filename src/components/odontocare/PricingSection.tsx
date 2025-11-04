import { motion } from 'framer-motion';
import { useState } from 'react';

interface PricingPlan {
  name: string;
  badge: string;
  badgeColor: 'teal' | 'purple';
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  discount: number;
  features: string[];
  highlighted: boolean;
}

interface PricingSectionProps {
  plans: PricingPlan[];
}

const PricingSection = ({ plans }: PricingSectionProps) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getBadgeColor = (color: 'teal' | 'purple') => {
    return color === 'teal'
      ? 'bg-teal-500 text-white'
      : 'bg-purple-500 text-white';
  };

  const getAccentColor = (color: 'teal' | 'purple') => {
    return color === 'teal'
      ? 'text-teal-600 dark:text-teal-400'
      : 'text-purple-600 dark:text-purple-400';
  };

  const getGradientBorder = (color: 'teal' | 'purple') => {
    return color === 'teal'
      ? 'hover:border-teal-500 dark:hover:border-teal-400'
      : 'hover:border-purple-500 dark:hover:border-purple-400';
  };

  return (
    <section id="planes" className="relative py-20 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Floating Dental Elements Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
        {/* Tooth Left */}
        <motion.div
          className="absolute top-20 left-10 text-teal-500"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>

        {/* Tooth Right */}
        <motion.div
          className="absolute bottom-32 right-16 text-cyan-500"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <svg width="90" height="90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C9.24 2 7 4.24 7 7v3c0 1.1-.9 2-2 2v10h14V12c-1.1 0-2-.9-2-2V7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3v3c0 .35.06.68.17 1H8.83c.11-.32.17-.65.17-1V7c0-1.66 1.34-3 3-3z"/>
          </svg>
        </motion.div>

        {/* Sparkle Top Right */}
        <motion.div
          className="absolute top-40 right-20 text-teal-400"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z"/>
          </svg>
        </motion.div>

        {/* Dental Mirror Center */}
        <motion.div
          className="absolute top-1/2 left-1/4 text-blue-400"
          animate={{
            rotate: [0, 20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="8" cy="8" r="6"/>
            <line x1="12" y1="12" x2="22" y2="22"/>
          </svg>
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-2 mb-4 text-neutral-900 dark:text-neutral-100">
              Planes transparentes y escalables
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
              Elige el plan que mejor se adapte a tu consultorio
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-4 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-xl"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-lg'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 shadow-lg'
                  : 'text-neutral-600 dark:text-neutral-400'
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                Ahorra
              </span>
            </button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative h-full ${plan.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              <div
                className={`h-full p-8 rounded-3xl border-2 transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-teal-500 dark:border-teal-400 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 shadow-2xl shadow-teal-500/20'
                    : 'border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl'
                }`}
              >
                {/* Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {plan.description}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(
                      plan.badgeColor
                    )}`}
                  >
                    {plan.badge}
                  </span>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold text-neutral-900 dark:text-neutral-100">
                      {formatPrice(billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12))}
                    </span>
                    <span className="text-xl text-neutral-600 dark:text-neutral-400">/mes</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-bold ${getAccentColor(plan.badgeColor)}`}>
                        {formatPrice(plan.yearlyPrice)}
                      </span>
                      <span className="text-lg text-neutral-600 dark:text-neutral-400">/año</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                        {plan.discount}% OFF
                      </span>
                    </div>
                  )}
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-3">
                    {billingCycle === 'monthly' ? '+ 7 días de prueba gratuita' : '+ Migración de datos incluida'}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 + featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full ${plan.highlighted ? 'bg-teal-500' : 'bg-purple-500'} flex items-center justify-center mt-0.5`}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                        </svg>
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="/#contacto"
                  className={`w-full justify-center text-lg py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105'
                      : 'bg-neutral-900 dark:bg-neutral-700 text-white hover:bg-neutral-800 dark:hover:bg-neutral-600 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {plan.highlighted ? 'Comenzar ahora' : 'Solicitar cotización'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>

                {/* Highlight Glow */}
                {plan.highlighted && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-500 opacity-5 pointer-events-none" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                ¿Tienes dudas sobre qué plan elegir?
              </p>
              <a
                href="/#contacto"
                className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium inline-flex items-center gap-2 transition-colors duration-300"
              >
                Agenda una consulta gratuita con nuestro equipo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
