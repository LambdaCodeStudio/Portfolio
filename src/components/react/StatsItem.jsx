import React from 'react';

const StatsItem = ({ Icon, value, label }) => (
  <div className="text-center group">
    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center group-hover:from-violet-500/30 group-hover:to-fuchsia-500/30 transition-all duration-300">
      <Icon className="w-8 h-8 text-violet-400" />
    </div>
    <div className="text-3xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
      {value}
    </div>
    <div className="text-gray-400">{label}</div>
  </div>
);

export default StatsItem;
