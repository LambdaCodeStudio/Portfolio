import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative">
        <div className="text-center">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 animate-gradient-x">
                LambdaCodeStudio
              </span>
            </h1>
            <div className="h-1 w-24 sm:w-32 mx-auto mt-4 sm:mt-6 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"></div>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 sm:mb-12 font-light max-w-2xl mx-auto">
            Desarrollador Full Stack & Diseñador UI/UX
          </p>
          
          <div className="relative inline-flex group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg blur-lg opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <button className="relative px-6 sm:px-8 py-3 sm:py-4 bg-gray-900/30 backdrop-blur-xl rounded-lg leading-none flex items-center space-x-2 border border-violet-500/20">
              <span className="text-base sm:text-lg text-gray-300 group-hover:text-white transition duration-200">
                Ver Proyectos
              </span>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;