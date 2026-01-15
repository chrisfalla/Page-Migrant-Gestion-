'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="orb w-96 h-96 bg-gold-500/20 absolute top-0 right-0"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="orb w-[500px] h-[500px] bg-electric-500/10 absolute bottom-0 left-0"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{ opacity, scale, y }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass-card rounded-full"
        >
          <Sparkles className="w-4 h-4 text-gold-500" />
          <span className="text-sm font-medium text-slate-300">
            Elite Immigration Consulting Since 2019
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1]"
        >
          <span className="gradient-text">
            Movilidad Global
          </span>
          <br />
          <span className="text-slate-200">
            Sin Fronteras
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Consultoría migratoria estratégica para corporaciones, ejecutivos y ciudadanos del mundo.{' '}
          <span className="text-gold-500 font-medium">Eficiencia legal</span>, ética y visión global desde Colombia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/573028077187"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative px-8 py-4 bg-gradient-gold text-void-950 font-semibold",
              "rounded-luxury overflow-hidden transition-all duration-300",
              "hover:shadow-glow-gold hover:scale-105",
              "uppercase tracking-wider text-sm"
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

          <a
            href="#servicios"
            className={cn(
              "group px-8 py-4 glass-card text-slate-200 font-semibold",
              "rounded-luxury transition-all duration-300",
              "hover:border-gold-500 hover:text-gold-500",
              "uppercase tracking-wider text-sm"
            )}
          >
            Ver Servicios
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-500" />
            <span>+5 Años de Experiencia</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-500" />
            <span>100% Cumplimiento Legal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-500" />
            <span>Alcance Internacional</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#servicios"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-500 cursor-pointer hover:text-gold-500 transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </section>
  );
}
