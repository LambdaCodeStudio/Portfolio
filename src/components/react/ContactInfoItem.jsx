import React from 'react';

const ContactInfoItem = ({ icon: Icon, title, children }) => (
  <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20">
    <div className="flex items-center gap-4 mb-2">
      <Icon className="w-6 h-6 text-violet-400" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    {typeof children === 'string' ? (
      <p className="text-gray-400 pl-10">{children}</p>
    ) : (
      <div className="pl-10">{children}</div>
    )}
  </div>
);

export default ContactInfoItem;
