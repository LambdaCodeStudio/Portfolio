import React, { useState, useEffect } from 'react';
import {
  Sparkles, ArrowRight, Star,
  Zap, Users, Trophy, Code, Globe
} from 'lucide-react';
import StatsItem from './StatsItem';
import ProjectCard from './ProjectCard';

import { projects, stats } from '../../data/projects';
const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);


  useEffect(() => {
    // Mostrar proyectos de forma escalonada
    const timers = [];
    projects.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleProjects(prev => [...prev, index]);
      }, index * 200);
      timers.push(timer);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="bg-black py-20 relative border-t border-gray-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.03),transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 rounded-full border border-violet-500/20 mb-8">
            <Trophy className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-sm font-medium">Portfolio Destacado</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Proyectos que
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500">
              Transforman Negocios
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Cada proyecto es una historia de éxito. Descubre cómo hemos ayudado a empresas a 
            <span className="text-violet-400 font-semibold"> digitalizar sus procesos</span> y 
            <span className="text-fuchsia-400 font-semibold"> aumentar su productividad</span>.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <StatsItem key={index} Icon={Icon} value={value} label={label} />
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={visibleProjects.includes(index)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <a 
              href="/proyectos"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl font-medium hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-105 text-lg group"
            >
              <Globe className="w-6 h-6" />
              <span>Ver Portfolio Completo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo podemos ayudarte a llevarlo al siguiente nivel
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
