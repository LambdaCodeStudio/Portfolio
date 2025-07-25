import React from 'react';

const ContactForm = () => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
    <form className="relative bg-gray-900/30 backdrop-blur-xl p-8 rounded-xl border border-violet-500/20">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-black/50 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500 text-white"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-black/50 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500 text-white"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 bg-black/50 border border-violet-500/20 rounded-lg focus:outline-none focus:border-violet-500 text-white"
            placeholder="Tu mensaje"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-lg hover:from-violet-600 hover:to-fuchsia-600 transition-all duration-300"
        >
          Enviar Mensaje
        </button>
      </div>
    </form>
  </div>
);

export default ContactForm;
