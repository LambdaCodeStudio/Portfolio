import React from 'react';

const StatsItem = ({ number, label }) => (
  <div className="group">
    <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
      {number}
    </div>
    <div className="text-gray-400 text-sm sm:text-base">{label}</div>
  </div>
);

export default StatsItem;
