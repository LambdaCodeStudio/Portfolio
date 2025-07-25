import React, { useState, useEffect, useRef } from 'react';
import {
  Code2, Palette, Gauge, Laptop, Smartphone, Shield,
  Database, Globe, Zap, Star, CheckCircle, ArrowRight,
  Layers, Box, Cpu, Brush, Lock, TestTube, Brain
} from 'lucide-react';
import ProgressBar from './ProgressBar';
import SkillCard from './SkillCard';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const skillsRef = useRef(null);

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code2,
      color: "from-violet-500 to-fuchsia-500",
      description: "Interfaces modernas y experiencias de usuario excepcionales"
    },
    backend: {
      title: "Backend Development", 
      icon: Database,
      color: "from-fuchsia-500 to-pink-500",
      description: "Arquitecturas robustas y APIs escalables"
    },
    mobile: {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500", 
      description: "Aplicaciones nativas y multiplataforma"
    },
    design: {
      title: "UI/UX Design",
      icon: Palette,
      color: "from-rose-500 to-red-500",
      description: "Diseños que convierten y deleitan usuarios"
    },
    tools: {
      title: "Tools & DevOps",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      description: "Herramientas que optimizan el desarrollo"
    }
  };

  const skills = {
    frontend: [
      {
        icon: <Code2 className="w-8 h-8" />,
        title: "React Ecosystem",
        description: "React 18, Next.js, Astro",
        technologies: ["React", "Next.js", "Astro", "Vite"],
        level: 95,
        experience: "5+ años",
        projects: 15
      },
      {
        icon: <Brush className="w-8 h-8" />,
        title: "Styling & Animation",
        description: "Tailwind CSS, Framer Motion",
        technologies: ["Tailwind", "CSS3", "Framer Motion", "SASS"],
        level: 90,
        experience: "4+ años", 
        projects: 20
      },
      {
        icon: <Layers className="w-8 h-8" />,
        title: "State Management",
        description: "Redux, Zustand, Context API",
        technologies: ["Redux", "Zustand", "Context", "React Query"],
        level: 88,
        experience: "3+ años",
        projects: 12
      }
    ],
    backend: [
      {
        icon: <Database className="w-8 h-8" />,
        title: "Node.js & APIs",
        description: "Express, Fastify, REST & GraphQL",
        technologies: ["Node.js", "Express", "GraphQL", "JWT"],
        level: 92,
        experience: "5+ años",
        projects: 18
      },
      {
        icon: <Box className="w-8 h-8" />,
        title: "Databases",
        description: "MongoDB, PostgreSQL, Redis",
        technologies: ["MongoDB", "PostgreSQL", "Redis", "Prisma"],
        level: 85,
        experience: "4+ años",
        projects: 15
      },
      {
        icon: <Lock className="w-8 h-8" />,
        title: "Security & Auth",
        description: "JWT, OAuth, Encryption",
        technologies: ["JWT", "OAuth", "Bcrypt", "HTTPS"],
        level: 87,
        experience: "3+ años",
        projects: 10
      }
    ],
    mobile: [
      {
        icon: <Smartphone className="w-8 h-8" />,
        title: "React Native",
        description: "iOS & Android Apps",
        technologies: ["React Native", "Expo", "Metro", "Flipper"],
        level: 89,
        experience: "4+ años",
        projects: 8
      },
      {
        icon: <Globe className="w-8 h-8" />,
        title: "PWA Development",
        description: "Progressive Web Apps",
        technologies: ["PWA", "Service Workers", "Workbox", "Offline"],
        level: 82,
        experience: "3+ años",
        projects: 6
      }
    ],
    design: [
      {
        icon: <Palette className="w-8 h-8" />,
        title: "UI/UX Design",
        description: "Figma, Adobe XD, Prototyping",
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
        level: 80,
        experience: "3+ años",
        projects: 12
      },
      {
        icon: <Brain className="w-8 h-8" />,
        title: "User Research",
        description: "Testing, Analytics, Optimization",
        technologies: ["Hotjar", "Google Analytics", "A/B Testing"],
        level: 75,
        experience: "2+ años",
        projects: 8
      }
    ],
    tools: [
      {
        icon: <Gauge className="w-8 h-8" />,
        title: "Performance",
        description: "Optimization, SEO, Web Vitals",
        technologies: ["Lighthouse", "Web Vitals", "SEO", "CDN"],
        level: 85,
        experience: "4+ años",
        projects: 20
      },
      {
        icon: <TestTube className="w-8 h-8" />,
        title: "Testing",
        description: "Jest, Cypress, Testing Library",
        technologies: ["Jest", "Cypress", "Testing Library", "Mocha"],
        level: 78,
        experience: "3+ años",
        projects: 10
      }
    ]
  };

  const currentSkills = skills[activeCategory] || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills(prev => {
              const newVisible = [...prev];
              currentSkills.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleSkills(prevState => [...new Set([...prevState, index])]);
                }, index * 100);
              });
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [activeCategory]);


  return (
    <section className="bg-black py-20 relative border-t border-gray-800" ref={skillsRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.03),transparent)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 rounded-full border border-fuchsia-500/20 mb-8">
            <Zap className="w-4 h-4 text-fuchsia-400" />
            <span className="text-fuchsia-300 text-sm font-medium">Tecnologías & Expertise</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestras
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500">
              Especialidades
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Dominamos las tecnologías más demandadas del mercado para crear 
            <span className="text-fuchsia-400 font-semibold"> soluciones de vanguardia</span> que 
            <span className="text-pink-400 font-semibold"> impulsan tu negocio</span>.
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 mx-auto rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveCategory(key);
                  setVisibleSkills([]);
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50 border border-gray-700/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-3">
            {skillCategories[activeCategory].title}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {skillCategories[activeCategory].description}
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentSkills.map((skill, index) => (
            <SkillCard
              key={`${activeCategory}-${index}`}
              skill={skill}
              index={index}
              color={skillCategories[activeCategory].color}
              isVisible={visibleSkills.includes(index)}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Código Limpio</h3>
            <p className="text-gray-400">Seguimos las mejores prácticas y estándares de la industria</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
              <Star className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Actualización Constante</h3>
            <p className="text-gray-400">Nos mantenemos al día con las últimas tecnologías</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Entrega Rápida</h3>
            <p className="text-gray-400">Desarrollamos con eficiencia sin comprometer la calidad</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas estas tecnologías para tu proyecto?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Tenemos la experiencia y las herramientas necesarias para llevar tu idea al siguiente nivel
          </p>
          
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-xl blur-lg opacity-30 hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <a 
              href="/contacto"
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white rounded-xl font-medium hover:from-fuchsia-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 text-lg group"
            >
              <Brain className="w-6 h-6" />
              <span>Hablemos de tu Proyecto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
