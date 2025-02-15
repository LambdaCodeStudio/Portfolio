import React from 'react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "✨ Proyecto Awesome",
      description: "Una aplicación web increíble con efectos visuales únicos",
      tags: ["React", "Three.js", "GSAP"],
      image: "https://picsum.photos/600/400",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      title: "🎮 Game Project",
      description: "Videojuego desarrollado con las últimas tecnologías",
      tags: ["Unity", "C#", "Blender"],
      image: "https://picsum.photos/600/400",
      gradient: "from-fuchsia-500 to-pink-500"
    },
    {
      title: "🎨 Arte Digital",
      description: "Colección de arte digital generativo",
      tags: ["P5.js", "Canvas", "WebGL"],
      image: "https://picsum.photos/600/400",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="bg-black py-20 relative">
      <div className="absolute inset-0 "></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Sparkles className="w-10 h-10 text-violet-400 mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl font-bold text-white mb-6">
            Proyectos Destacados
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/30 backdrop-blur-xl rounded-xl overflow-hidden hover:scale-105 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} text-white shadow-lg shadow-violet-500/20`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-500/20 rounded-xl transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;