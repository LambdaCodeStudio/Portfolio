import React from 'react';

const ProgressBar = ({ level, visible, delay = 0 }) => (
  <div className="w-full bg-gray-700/50 rounded-full h-2 mb-4">
    <div
      className="h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-1000 ease-out"
      style={{
        width: visible ? `${level}%` : '0%',
        transitionDelay: `${delay}ms`
      }}
    />
  </div>
);

export default ProgressBar;
