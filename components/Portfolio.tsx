import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants.ts';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-black relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-6xl mb-6"
            >
              Trabajos <span className="italic font-light text-brand-accent">Recientes</span>
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-md font-light">
              Una selección de proyectos donde la creatividad y la estrategia colisionan.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
          >
            Ver todo el portafolio
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer group bg-gray-900 ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                project.size === 'medium' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </div>
              
              {/* Modern Glass Overlay */}
              <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${hoveredId === project.id ? 'opacity-60 backdrop-blur-[2px]' : 'opacity-0 group-hover:opacity-20'}`} />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className={`transition-all duration-500 ${hoveredId === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-brand-accent/90 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <h3 className="text-white font-display font-bold text-3xl leading-none">
                      {project.title}
                    </h3>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transform hover:scale-110 transition-transform duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;