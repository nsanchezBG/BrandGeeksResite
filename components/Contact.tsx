import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-brand-gray relative overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Text Side */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-accent font-medium tracking-widest text-sm mb-4 block">CONTACTO</span>
              <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-tight">
                ¿Listo para <br />
                <span className="text-white/50">hacer historia?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg font-light">
                Cuéntanos sobre tu proyecto. Ya sea una startup buscando su identidad o una empresa establecida buscando renovarse, estamos listos para el reto.
              </p>
              
              <div className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-white">Aceptando nuevos proyectos para 2024</span>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-dark/50 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-brand-accent transition-colors">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg placeholder-white/20 focus:outline-none focus:border-brand-accent transition-all"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-brand-accent transition-colors">Email</label>
                  <input 
                    type="email" 
                    placeholder="hola@empresa.com"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg placeholder-white/20 focus:outline-none focus:border-brand-accent transition-all"
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-brand-accent transition-colors">Servicio de interés</label>
                <select className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg focus:outline-none focus:border-brand-accent transition-all appearance-none cursor-pointer">
                  <option className="bg-brand-dark" value="">Selecciona una opción</option>
                  <option className="bg-brand-dark" value="branding">Branding & Identidad</option>
                  <option className="bg-brand-dark" value="web">Desarrollo Web</option>
                  <option className="bg-brand-dark" value="marketing">Marketing Digital</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-brand-accent transition-colors">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="Cuéntanos los detalles..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg placeholder-white/20 focus:outline-none focus:border-brand-accent transition-all resize-none"
                />
              </div>

              <button 
                type="button"
                className="w-full bg-white text-black hover:bg-brand-accent hover:text-white font-bold text-lg py-5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.01] shadow-xl"
              >
                Enviar Propuesta <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;