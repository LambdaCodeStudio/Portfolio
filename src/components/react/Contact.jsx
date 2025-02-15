import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-black py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Contacto
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de contacto */}
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

          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20">
              <div className="flex items-center gap-4 mb-2">
                <MapPin className="w-6 h-6 text-violet-400" />
                <h3 className="text-xl font-semibold text-white">Ubicación</h3>
              </div>
              <p className="text-gray-400 pl-10">Ciudad, País</p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20">
              <div className="flex items-center gap-4 mb-2">
                <Mail className="w-6 h-6 text-violet-400" />
                <h3 className="text-xl font-semibold text-white">Email</h3>
              </div>
              <p className="text-gray-400 pl-10">contacto@lambdacodestudio.com</p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20">
              <div className="flex items-center gap-4 mb-2">
                <Phone className="w-6 h-6 text-violet-400" />
                <h3 className="text-xl font-semibold text-white">Teléfono</h3>
              </div>
              <p className="text-gray-400 pl-10">+1234567890</p>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-xl p-6 rounded-xl border border-violet-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Redes Sociales</h3>
              <div className="flex gap-4 pl-2">
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;