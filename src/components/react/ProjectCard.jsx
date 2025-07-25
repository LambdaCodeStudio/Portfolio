import React from 'react';
import { Github, ExternalLink, Star, Zap, Smartphone, Eye, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index, isVisible }) => {
  const visibility = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';
  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-violet-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/20 ${visibility}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-xs font-bold">
            <Star className="w-3 h-3 fill-current" />
            <span>Destacado</span>
          </div>
        </div>
      )}

      <div className="absolute top-4 left-4 z-20">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Producción'
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : project.status === 'App Store'
              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      </div>

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

        <div className="flex items-center gap-2 mb-4 text-green-400 text-sm">
          <Zap className="w-4 h-4" />
          <span className="font-medium">{project.impact}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
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

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-violet-500/30 rounded-2xl transition-colors duration-500"></div>
    </div>
  );
};

export default ProjectCard;
