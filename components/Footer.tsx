import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Big Background Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
        <span className="text-[15vw] font-display font-bold leading-none text-white">BRANDGEEKS</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <a href="#" className="block mb-8">
               <img 
                  src="https://brandgeeks.pe/wp-content/uploads/2022/06/logo-li%CC%81nea.png" 
                  alt="BrandGeeks Logo" 
                  className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert"
                />
            </a>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed mb-8 font-light">
              Diseñamos el futuro de tu marca combinando creatividad estratégica y tecnología de vanguardia.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-300 group"
                  aria-label={link.platform}
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-bold text-white mb-8 text-xl font-display">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-brand-highlight transition-colors text-lg">Inicio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-highlight transition-colors text-lg">Servicios</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-brand-highlight transition-colors text-lg">Portafolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-highlight transition-colors text-lg">Nosotros</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-white mb-8 text-xl font-display">Contacto</h4>
            <ul className="space-y-4 text-gray-400 text-lg">
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                hola@brandgeeks.pe
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                +51 999 999 999
              </li>
              <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                <span className="w-2 h-2 bg-brand-accent rounded-full"></span>
                Lima, Perú
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} BrandGeeks. Hecho con 💜 y código.
          </p>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;