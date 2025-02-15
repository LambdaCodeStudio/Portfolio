import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Sobre Mí
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/30 backdrop-blur-xl p-8 rounded-xl border border-violet-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Soy un desarrollador Full Stack apasionado por crear experiencias digitales únicas. Con más de 5 años de experiencia en el desarrollo web, me especializo en construir aplicaciones modernas y eficientes.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Mi objetivo es combinar diseño y funcionalidad para entregar productos que no solo se vean bien, sino que también proporcionen una excelente experiencia de usuario.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20 group hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Experiencia Técnica</h3>
              </div>
              <p className="text-gray-400">Especializado en React, Node.js, y las últimas tecnologías web.</p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20 group hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-pink-500">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Experiencia Laboral</h3>
              </div>
              <p className="text-gray-400">Más de 5 años trabajando en proyectos innovadores.</p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20 group hover:bg-gray-900/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Educación</h3>
              </div>
              <p className="text-gray-400">Formación continua en desarrollo web y nuevas tecnologías.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;