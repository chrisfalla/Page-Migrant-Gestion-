'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass-card py-4 shadow-luxury'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gold-500/20 rounded-xl blur-md group-hover:blur-lg transition-all" />
              <div className="relative w-12 h-12 glass-card rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-gold-500" />
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-xl font-bold leading-tight text-slate-100">
                MIGRANT
              </span>
              <span className="text-sm font-medium leading-tight gradient-text">
                GESTIÓN
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  'relative px-6 py-2.5 text-sm font-medium rounded-luxury transition-all',
                  'hover:text-gold-500 group',
                  scrolled ? 'text-slate-300' : 'text-slate-200'
                )}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-white/5 rounded-luxury opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/573028077187"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group relative px-6 py-3 bg-gradient-gold text-void-950 font-bold',
                'rounded-luxury overflow-hidden transition-all duration-300',
                'hover:shadow-glow-gold hover:scale-105',
                'uppercase tracking-wider text-xs'
              )}
            >
              <span className="relative z-10">Agendar Consulta</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 glass-card rounded-lg text-slate-200 hover:text-gold-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="glass-card rounded-luxury mt-4 p-6 space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-slate-200 hover:text-gold-500 hover:bg-white/5 rounded-lg font-medium transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  href="https://wa.me/573028077187"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block mt-4 px-6 py-3 bg-gradient-gold text-void-950 rounded-luxury font-bold text-center uppercase tracking-wider text-sm"
                >
                  Contactar
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
