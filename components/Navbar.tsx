import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants.ts';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          width: isScrolled ? 'auto' : '100%',
          top: isScrolled ? '1.5rem' : '0',
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          isScrolled ? 'px-4' : 'px-0'
        }`}
      >
        <div 
          className={`
            flex items-center justify-between transition-all duration-500 relative
            ${isScrolled 
              ? 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] w-full max-w-5xl' 
              : 'w-full container mx-auto py-6 px-6 md:px-8 bg-transparent'
            }
          `}
        >
          {/* Logo Image - Contained to prevent overlapping */}
          <a href="#" className="block relative z-50 flex-shrink-0 mr-4 max-w-[140px] md:max-w-[180px]">
            <img 
              src="https://brandgeeks.pe/wp-content/uploads/2022/06/logo-li%CC%81nea.png" 
              alt="BrandGeeks Logo" 
              className={`transition-all duration-300 object-contain filter brightness-0 invert ${isScrolled ? 'h-6 md:h-7' : 'h-8 md:h-10'}`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4" />
              </a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap
                ${isScrolled 
                  ? 'bg-brand-accent text-white hover:bg-brand-highlight' 
                  : 'bg-white text-black hover:bg-brand-accent hover:text-white'
                }
              `}
            >
              Hablemos
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors relative z-50 ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:to-brand-accent transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;