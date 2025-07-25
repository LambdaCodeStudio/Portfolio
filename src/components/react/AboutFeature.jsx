import React from 'react';

const AboutFeature = ({ icon: Icon, gradient, title, description }) => (
  <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20 group hover:bg-gray-900/50 transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient}`}> 
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default AboutFeature;
