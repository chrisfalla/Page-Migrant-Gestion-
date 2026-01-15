'use client';

import { motion } from 'framer-motion';
import { Clock, CheckCircle, Scale, Zap, Eye, Users2, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

export default function WhyUs() {
  const reasons = [
    {
      icon: Clock,
      title: '+5 Años de Experiencia',
      description: 'Trayectoria comprobada en el sector migratorio colombiano.',
    },
    {
      icon: CheckCircle,
      title: 'Eficaces y Efectivos',
      description: 'Resultados tangibles con gestión confiable y transparente.',
    },
    {
      icon: Scale,
      title: 'Legal y Transparente',
      description: '100% cumplimiento normativo en todos nuestros servicios.',
    },
    {
      icon: Zap,
      title: 'Proactivos',
      description: 'Anticipamos soluciones antes de que surjan problemas.',
    },
    {
      icon: Eye,
      title: 'Seguimiento Completo',
      description: 'Acompañamiento personalizado desde el inicio hasta el final.',
    },
    {
      icon: Users2,
      title: 'Equipo Experto',
      description: 'Profesionales actualizados en las últimas normativas.',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="por-que-elegirnos" className="relative py-32 bg-void-800 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(245,158,11,1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-block px-4 py-2 glass-card rounded-full mb-6">
            <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
              ¿Por Qué Elegirnos?
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            La Decisión{' '}
            <span className="gradient-text">Inteligente</span>
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Si no tienes tiempo ni expertise en temas migratorios, déjalo en manos de quienes realmente saben. Con{' '}
            <span className="text-gold-500 font-semibold">+5 años de experiencia</span> y un historial impecable.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {reasons.map((reason, idx) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                className={cn(
                  'glass-card p-8 rounded-luxury group',
                  'hover:border-gold-500/50 transition-all duration-500',
                  'hover:shadow-glow-gold'
                )}
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 glass-card rounded-xl group-hover:bg-gold-500/10 transition-colors">
                    <IconComponent className="w-8 h-8 text-gold-500" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-slate-100 mb-3 group-hover:text-gold-500 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative glass-card p-12 rounded-luxury overflow-hidden group"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-3xl font-bold text-slate-100 mb-2">
                ¿Listo para Empezar?
              </h3>
              <p className="text-slate-400 text-lg">
                Agenda una <span className="text-gold-500">consulta gratuita</span> y descubre cómo podemos ayudarte.
              </p>
            </div>

            <a
              href="https://wa.me/573028077187?text=Hola,%20necesito%20asesoría%20migratoria"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group/btn relative px-8 py-4 bg-gradient-gold text-void-950 font-bold',
                'rounded-luxury overflow-hidden transition-all duration-300',
                'hover:shadow-glow-gold hover:scale-105',
                'uppercase tracking-wider text-sm whitespace-nowrap',
                'inline-flex items-center gap-3'
              )}
            >
              <span className="relative z-10">Asesoría Gratuita</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
