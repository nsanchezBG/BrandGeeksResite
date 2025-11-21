import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-6xl mb-4"
            >
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-400">Superpoderes</span>
            </motion.h2>
            <p className="text-gray-400 max-w-md">Soluciones integrales para la era digital moderna.</p>
          </div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-[1px] w-full md:w-48 bg-gradient-to-r from-brand-accent to-transparent origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <SpotlightCard key={service.id} index={idx}>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-accent group-hover:border-transparent transition-all duration-500">
                  <service.icon className="text-white w-7 h-7 transition-colors" />
                </div>
                
                <h3 className="font-display font-bold text-2xl mb-4 text-white group-hover:text-brand-highlight transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 flex-grow">
                  {service.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const SpotlightCard: React.FC<{ children: React.ReactNode; index: number }> = ({ children, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 overflow-hidden group hover:border-white/10 transition-colors duration-500"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139,92,246,0.15), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
};

export default Services;