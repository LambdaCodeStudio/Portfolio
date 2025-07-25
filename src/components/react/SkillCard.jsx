import React from 'react';
import ProgressBar from './ProgressBar';

const SkillCard = ({ skill, index, color, isVisible }) => (
  <div
    className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-fuchsia-500/50 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* Gradient Top Border */}
    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`}></div>

    <div className="p-8">
      {/* Icon & Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${color} transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-fuchsia-400 transition-colors duration-300">
            {skill.title}
          </h3>
          <p className="text-gray-400 text-sm">{skill.description}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-300 text-sm">Nivel de Expertise</span>
          <span className="text-fuchsia-400 font-bold">{skill.level}%</span>
        </div>
        <ProgressBar level={skill.level} delay={index * 100} visible={isVisible} />
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-gray-300 text-sm font-medium mb-3">Tecnologías</h4>
        <div className="flex flex-wrap gap-2">
          {skill.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-fuchsia-500/10 text-fuchsia-300 rounded-lg text-sm border border-fuchsia-500/20 hover:bg-fuchsia-500/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700/50">
        <div className="text-center">
          <div className="text-lg font-bold text-white">{skill.experience}</div>
          <div className="text-xs text-gray-400">Experiencia</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-white">{skill.projects}</div>
          <div className="text-xs text-gray-400">Proyectos</div>
        </div>
      </div>
    </div>

    {/* Hover Effect Border */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-500/30 rounded-2xl transition-colors duration-500"></div>
  </div>
);

export default SkillCard;
