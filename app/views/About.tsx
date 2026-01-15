'use client';

import { motion, useInView } from 'framer-motion';
import { Target, Rocket, Eye, Heart, Award, Users } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { cn } from '../utils/cn';

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const stats = [
    { icon: Users, label: 'Años de Experiencia', value: 5, suffix: '+' },
    { icon: Target, label: 'Cumplimiento Legal', value: 100, suffix: '%' },
    { icon: Award, label: 'Atención al Cliente', value: 24, suffix: '/7' },
    { icon: Heart, label: 'Alcance', value: 0, suffix: '', text: 'Global' },
  ];

  const values = [
    { icon: Award, title: 'Excelencia', description: 'Estándares de calidad superiores' },
    { icon: Heart, title: 'Empatía', description: 'Comprensión profunda de cada caso' },
    { icon: Target, title: 'Puntualidad', description: 'Cumplimiento de tiempos garantizado' },
    { icon: Rocket, title: 'Honestidad', description: 'Transparencia en cada etapa' },
  ];

  return (
    <section id="nosotros" className="relative py-32 bg-void-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 glass-card rounded-full mb-6">
            <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
              Nuestra Esencia
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Agentes de{' '}
            <span className="gradient-text">Cambio</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            En <span className="text-gold-500 font-semibold">MIGRANT GESTIÓN SAS</span>, no solo procesamos trámites; diseñamos estrategias de vida y negocios. Construimos un legado de empatía y excelencia.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className={cn(
                  'glass-card p-8 rounded-luxury text-center',
                  'hover:border-gold-500/50 transition-all duration-500',
                  'hover:shadow-glow-gold group'
                )}
              >
                <IconComponent className="w-8 h-8 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-serif text-4xl font-bold text-slate-100 mb-2">
                  {stat.text || (
                    <>
                      <AnimatedCounter end={stat.value} />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-10 rounded-luxury group hover:border-gold-500/50 transition-all duration-500"
          >
            <div className="inline-flex p-4 glass-card rounded-xl mb-6 group-hover:bg-gold-500/10 transition-colors">
              <Rocket className="w-8 h-8 text-gold-500" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-slate-100 mb-4">Misión</h3>
            <p className="text-slate-400 leading-relaxed">
              Ser la fuerza impulsora detrás de una movilidad global fluida y ética, facilitando la realización de sueños a través de procesos migratorios <span className="text-gold-500">transparentes y respetuosos</span> con los derechos humanos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-10 rounded-luxury group hover:border-gold-500/50 transition-all duration-500"
          >
            <div className="inline-flex p-4 glass-card rounded-xl mb-6 group-hover:bg-gold-500/10 transition-colors">
              <Eye className="w-8 h-8 text-gold-500" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-slate-100 mb-4">Visión</h3>
            <p className="text-slate-400 leading-relaxed">
              Ser una empresa sólida reconocida como líder en consultorías migratorias, construyendo un <span className="text-gold-500">legado de empatía y excelencia</span> donde cada interacción sea una experiencia transformadora.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="font-serif text-3xl font-bold text-slate-100 mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-luxury group hover:border-gold-500/50 transition-all duration-500 hover:shadow-glow-gold"
                >
                  <IconComponent className="w-6 h-6 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-slate-100 mb-2">{value.title}</h4>
                  <p className="text-sm text-slate-400">{value.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
