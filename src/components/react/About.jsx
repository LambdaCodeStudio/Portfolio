import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import AboutFeature from './AboutFeature';

const features = [
  {
    icon: Code,
    gradient: 'from-violet-500 to-fuchsia-500',
    title: 'Experiencia Técnica',
    description: 'Nos especializamos en las últimas tecnologías web y nativas.'
  },
  {
    icon: Briefcase,
    gradient: 'from-fuchsia-500 to-pink-500',
    title: 'Experiencia Laboral',
    description:
      'Nuestra amplia cartilla de clientes nos avala el trabajo realizado a lo largo de estos años.'
  },
  {
    icon: GraduationCap,
    gradient: 'from-pink-500 to-rose-500',
    title: 'Educación',
    description: 'Formados universitariamente aptos para el mercado laboral.'
  }
];

const About = () => {
  return (
    <div className="bg-black py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            ¿Qué es Lambda Code Studio?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/30 backdrop-blur-xl p-8 rounded-xl border border-violet-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
              En Lambda Code Studio, transformamos ideas en soluciones digitales innovadoras.<br/> Nos especializamos en el desarrollo de páginas web, aplicaciones multiplataforma, web apps y landing pages diseñadas para hacer que tu empresa sea más eficiente y competitiva. <br /> Con un enfoque en calidad, rendimiento y experiencia de usuario, creamos herramientas digitales que potencian el crecimiento de tu negocio. 🚀
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <AboutFeature
                key={index}
                icon={feature.icon}
                gradient={feature.gradient}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
