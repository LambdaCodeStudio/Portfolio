import React, { useEffect, useState } from 'react';
import { 
  ArrowRight, Rocket, Star, Code, Zap, Users, Award, 
  Play, CheckCircle, Sparkles, MessageCircle 
} from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = ['React', 'Node.js', 'React Native', 'MongoDB', 'TypeScript', "Astro"];
  const achievements = [
    { number: '20+', label: 'Proyectos Exitosos' },
    { number: '99%', label: 'Satisfacción Cliente' },
    { number: '5+', label: 'Años Experiencia' },
    { number: '<24h', label: 'Tiempo Respuesta' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotating technologies
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-fuchsia-900/20 to-pink-900/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent)]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-1/3 text-violet-500/20 text-6xl font-mono animate-float">{'{ }'}</div>
      <div className="absolute bottom-1/4 right-1/3 text-fuchsia-500/20 text-6xl font-mono animate-float delay-1000">{'< />'}</div>
      <div className="absolute top-1/3 right-1/5 text-pink-500/20 text-5xl font-mono animate-float delay-500">{'[ ]'}</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 rounded-full border border-violet-500/20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
            <span className="text-violet-300 text-sm font-medium">Soluciones Digitales Innovadoras</span>
          </div>

          {/* Main Title */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white mb-4">Transformamos</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 animate-gradient-x">
                Ideas en Código
              </span>
            </h1>
            <div className="h-2 w-32 sm:w-48 mx-auto mt-6 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"></div>
          </div>

          {/* Subtitle with rotating tech */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4 font-light max-w-4xl mx-auto leading-relaxed">
              Desarrollamos aplicaciones web y móviles de vanguardia con{' '}
              <span className="relative inline-block">
                <span className="text-violet-400 font-semibold transition-all duration-500">
                  {technologies[currentTech]}
                </span>
              </span>
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Especialistas en crear soluciones digitales que impulsan el crecimiento de tu negocio
            </p>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {achievements.map((achievement) => (
                <div key={achievement.label} className="group">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">{achievement.label}</div>
                </div>
              ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Primary CTA */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-xl blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <a 
                href="/proyectos"
                className="relative px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-white font-medium hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg"
              >
                <Rocket className="w-6 h-6" />
                <span>Ver Nuestros Proyectos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Secondary CTA */}
            <a 
              href="/contacto"
              className="px-8 py-4 bg-gray-900/50 text-white rounded-xl font-medium border border-violet-500/20 hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-300 flex items-center gap-3 text-lg backdrop-blur-sm"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Hablemos de tu Proyecto</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Garantía de Calidad</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              <span>5+ Años Experiencia</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <div className="w-px h-16 bg-gradient-to-b from-violet-500 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-30"></div>
    </div>
  );
};

export default Hero;