import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

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
          <ContactForm />

          {/* Información de contacto */}
          <div className="space-y-6">
            <ContactInfoItem icon={MapPin} title="Ubicación">
              Ciudad, La Plata
            </ContactInfoItem>

            <ContactInfoItem icon={Mail} title="Email">
              lambdacodestudio@gmail.com
            </ContactInfoItem>

            <ContactInfoItem icon={Phone} title="Teléfono">
              +54-2227-478196 | +54-011-50220157
            </ContactInfoItem>

            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;