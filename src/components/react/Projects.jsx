import React, { useState, useEffect } from 'react';
import { 
  Github, ExternalLink, Sparkles, ArrowRight, Star, 
  Zap, Users, Trophy, Eye, Code, Smartphone, Globe 
} from 'lucide-react';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: "🦷 Odonto Care",
      shortDescription: "Sistema integral para consultorios odontológicos",
      description: "Aplicación completa que revoluciona la gestión dental con historias clínicas digitales, odontogramas interactivos y sistema de turnos automatizado.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "https://picsum.photos/600/400?random=1",
      gradient: "from-blue-500 to-cyan-500",
      category: "Healthcare",
      status: "Producción",
      impact: "40% menos tiempo administrativo",
      clients: "5+ consultorios",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 2,
      title: "🛎️ CleanOrg",
      shortDescription: "Gestión inteligente de tareas empresariales",
      description: "Plataforma que automatiza la asignación de tareas en hoteles y empresas, con gamificación y redistribución inteligente de responsabilidades.",
      tags: ["React", "PWA", "Express.js", "WebSockets"],
      image: "https://picsum.photos/600/400?random=2",
      gradient: "from-green-500 to-emerald-500",
      category: "Enterprise",
      status: "Producción",
      impact: "30% aumento productividad",
      clients: "3+ hoteles",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      id: 3,
      title: "📄 Descargo Mi Factura",
      shortDescription: "Plataforma móvil de gestión de facturación",
      description: "App móvil que permite a empresas ofrecer acceso centralizado y seguro a la información de facturación de sus clientes.",
      tags: ["React Native", "Firebase", "Express.js"],
      image: "https://picsum.photos/600/400?random=3",
      gradient: "from-purple-500 to-pink-500",
      category: "FinTech",
      status: "App Store",
      impact: "24/7 acceso documentos",
      clients: "10+ empresas",
      github: "#",
      demo: "#",
      playStore: "#",
      featured: true
    },
     {
    id: 6,
    title: "Portfolio • Lambda Code Studio",
    shortDescription: "Sitio web open‑source del estudio, mostrando proyectos y contacto",
    description: "Portfolio open‑source creado con Astro, React y Tailwind; incluye galería de proyectos, sección de contacto y estadísticas.",
    tags: ["Astro", "React", "Tailwind", "TypeScript"],
    image: "https://picsum.photos/600/400?random=6",
    gradient: "from-indigo-500 to-blue-500",
    category: "Web / Portfolio",
    status: "Open Source",
    impact: "40+ visitas semanales",
    clients: "Lambda Code Studio",
    github: "https://github.com/LambdaCodeStudio/Portfolio",
    demo: "https://lambdacodestudio.com.ar",
    featured: true
  },
  {
    id: 7,
    title: "Convertidor de Audio",
    shortDescription: "Convertidor web open‑source para audio/vídeo con FFmpeg WASM",
    description: "Aplicación ligera que usa FFmpeg compilado a WebAssembly para convertir archivos de audio y video (máx 2 GB) directamente en el navegador.",
    tags: ["WebAssembly", "FFmpeg", "React", "TypeScript"],
    image: "https://picsum.photos/600/400?random=7",
    gradient: "from-purple-600 to-indigo-600",
    category: "Web / Utilidad",
    status: "Open Source",
    impact: "Convierte hasta 2 GB localmente",
    clients: "Público Open Source",
    github: "https://github.com/LambdaCodeStudio/convertidor-de-audio",
    demo: "https://convertidor-de-audio.vercel.app/",
    featured: false
  }
  ];

  const stats = [
    { icon: Code, value: "3", label: "Proyectos Destacados" },
    { icon: Users, value: "20+", label: "Clientes Satisfechos" },
    { icon: Star, value: "99%", label: "Satisfacción" },
    { icon: Zap, value: "2-8", label: "Semanas Entrega" }
  ];

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
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition-all duration-300">
                <Icon className="w-8 h-8 text-violet-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                {value}
              </div>
              <div className="text-gray-400">{label}</div>
            </div>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-violet-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 ${
                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-xs font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Destacado</span>
                  </div>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Producción' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                  project.status === 'App Store' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-violet-400 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-400">{project.clients}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>
                
                {/* Impact */}
                <div className="flex items-center gap-2 mb-4 text-green-400 text-sm">
                  <Zap className="w-4 h-4" />
                  <span className="font-medium">{project.impact}</span>
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className={`px-3 py-1 rounded-lg text-xs bg-gradient-to-r ${project.gradient} text-white font-medium opacity-90`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 rounded-lg text-xs bg-gray-700/50 text-gray-300">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                        title="Ver código"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                        title="Ver demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.playStore && (
                      <a 
                        href={project.playStore} 
                        className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
                        title="Ver en Play Store"
                      >
                        <Smartphone className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  
                  <a 
                    href="/proyectos"
                    className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors duration-300 text-sm font-medium group"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver más</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-500/30 rounded-2xl transition-colors duration-500"></div>
            </div>
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