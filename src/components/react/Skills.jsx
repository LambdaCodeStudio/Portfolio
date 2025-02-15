import React from 'react';
import { Code2, Palette, Gauge, Laptop, Smartphone, Brain } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Desarrollo Frontend",
      description: "React, Vue, Astro",
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Diseño UI/UX",
      description: "Figma, Adobe XD",
      color: "from-fuchsia-500 to-pink-500"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Optimización",
      description: "Performance, SEO",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "Desarrollo Backend",
      description: "Node.js, Python",
      color: "from-rose-500 to-red-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "React Native, Flutter",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "TensorFlow, PyTorch",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <div className="bg-black py-20 relative">
      <div className="absolute inset-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-5xl font-bold text-center text-white mb-6">
          Mis Habilidades
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 mx-auto rounded-full mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gray-900/30 backdrop-blur-xl rounded-xl overflow-hidden hover:bg-gray-900/50 transition-all duration-500"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color}`}></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-violet-500/20`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                  {skill.title}
                </h3>
              </div>
              
              <p className="text-gray-400">
                {skill.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
              <div className="absolute inset-0 border border-transparent group-hover:border-violet-500/20 rounded-xl transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;