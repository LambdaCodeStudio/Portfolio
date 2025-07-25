import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const SocialLinks = () => (
  <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20">
    <h3 className="text-xl font-semibold text-white mb-4">Redes Sociales</h3>
    <div className="flex gap-4 pl-2">
      <a href="https://github.com/lambdacodestudio" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
        <Github className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  </div>
);

export default SocialLinks;
