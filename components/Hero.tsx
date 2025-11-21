import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-24 md:py-0">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 bg-brand-dark">
        <img 
          src="https://www.brandgeeks.pe/wp-content/uploads/2023/04/Home.jpg" 
          alt="BrandGeeks Hero Background" 
          className="w-full h-full object-cover object-center opacity-70 transition-transform duration-700 ease-out" 
        />
        {/* Lighter Gradient Overlays to ensure image is visible but text remains readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Animated Blobs - Reduced opacity to not interfere with bg image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-brand-accent/5 rounded-full blur-[128px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[10%] w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[128px] animate-blob animation-delay-2000 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center pb-16 md:pb-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] md:leading-[0.9] mb-6 md:mb-8 break-words w-full max-w-[95vw] mx-auto"
        >
          Transformamos <br className="hidden md:block" />
          ideas en <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-accent via-purple-400 to-blue-400 animate-gradient-x">marcas</span>
          <br className="hidden md:block" />
          <span className="text-white block md:inline">inmortales.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-200 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-[1.15] md:leading-relaxed font-light px-4 drop-shadow-md"
        >
          Somos geeks del branding, el diseño y la tecnología. Ayudamos a empresas ambiciosas a destacar en un mundo ruidoso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 px-4 mb-8 md:mb-0"
        >
          <a
            href="#portfolio"
            className="w-full sm:w-auto group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] text-center"
          >
            <div className="absolute inset-0 w-full h-full bg-brand-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Ver Proyectos <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2 group text-center shadow-lg"
          >
            Contáctanos
            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full group-hover:scale-150 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Positioned lower and only on taller screens to avoid overlap */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-5 h-5 text-gray-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;