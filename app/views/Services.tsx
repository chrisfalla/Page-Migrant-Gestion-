'use client';

import { motion } from 'framer-motion';
import {
  FileCheck2,
  Briefcase,
  Shield,
  Building2,
  GraduationCap,
  FileCheck,
  Globe,
  Users,
  Scale,
  Plane,
  FileText,
  Award,
} from 'lucide-react';
import { cn } from '../utils/cn';

const serviceCategories = [
  {
    category: 'Gestión Migratoria Elite',
    icon: FileCheck2,
    services: [
      'Análisis estratégico de visas corporativas',
      'Permiso por Protección Temporal (PPT)',
      'Regularización RUMV para venezolanos',
      'Prórrogas y renovaciones',
      'Salvoconductos SC2',
    ],
    gridClass: 'col-span-1 md:col-span-2 md:row-span-2',
  },
  {
    category: 'Corporate & Legal',
    icon: Briefcase,
    services: [
      'Contratación internacional de talento',
      'Creación de empresas SIRE',
      'Compliance migratorio',
      'Consultoría tributaria para extranjeros',
    ],
    gridClass: 'col-span-1 md:col-span-1',
  },
  {
    category: 'Académico & Profesional',
    icon: GraduationCap,
    services: [
      'Convalidación de títulos (MinEducación)',
      'Licencias temporales profesionales',
      'Validación de bachiller',
      'Educación no formal',
    ],
    gridClass: 'col-span-1 md:col-span-1',
  },
  {
    category: 'Documentación Legal',
    icon: FileCheck,
    services: [
      'Apostilla de documentos',
      'Antecedentes penales internacionales',
      'Acciones de tutela',
      'Derechos de petición',
    ],
    gridClass: 'col-span-1 md:col-span-1',
  },
  {
    category: 'Integración Social',
    icon: Globe,
    services: [
      'Afiliación al sistema de salud',
      'Bolsas de empleo autorizadas',
      'Asesoría refugiados y migrantes',
      'Socialización normativa',
    ],
    gridClass: 'col-span-1 md:col-span-1 md:row-span-1',
  },
  {
    category: 'Capacitación Empresarial',
    icon: Award,
    services: [
      'Talleres de compliance migratorio',
      'Capacitación en contratación extranjera',
      'Eventos de alto impacto',
      'Representación ante autoridades',
    ],
    gridClass: 'col-span-1 md:col-span-2',
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

export default function Services() {
  return (
    <section id="servicios" className="relative py-32 bg-void-900 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-900 to-void-800 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 glass-card rounded-full mb-6">
            <span className="text-sm font-semibold text-gold-500 uppercase tracking-wider">
              Nuestra Expertise
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Soluciones{' '}
            <span className="gradient-text">Integrales</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Más de 20 servicios especializados organizados en{' '}
            <span className="text-gold-500">6 categorías estratégicas</span> para cubrir todas tus necesidades migratorias.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {serviceCategories.map((category, idx) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                className={cn(
                  'group relative glass-card p-8 rounded-luxury overflow-hidden',
                  'hover:border-gold-500/50 transition-all duration-500',
                  'hover:shadow-glow-gold',
                  category.gridClass
                )}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 glass-card rounded-xl group-hover:bg-gold-500/10 transition-colors duration-500">
                    <IconComponent className="w-8 h-8 text-gold-500" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-bold text-slate-100 mb-4 group-hover:text-gold-500 transition-colors duration-300">
                  {category.category}
                </h3>

                <ul className="space-y-3">
                  {category.services.map((service, serviceIdx) => (
                    <li
                      key={serviceIdx}
                      className="flex items-start gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Corner */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-colors duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative glass-card p-10 md:p-12 rounded-luxury overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(245,158,11,0.5) 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-3xl font-bold text-slate-100 mb-2">
                ¿No encuentras tu servicio?
              </h3>
              <p className="text-slate-400 text-lg">
                Ofrecemos soluciones personalizadas para casos complejos.{' '}
                <span className="text-gold-500">Consulta sin compromiso.</span>
              </p>
            </div>

            <a
              href="https://wa.me/573028077187"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group relative px-8 py-4 bg-gradient-gold text-void-950 font-bold',
                'rounded-luxury overflow-hidden transition-all duration-300',
                'hover:shadow-glow-gold hover:scale-105',
                'uppercase tracking-wider text-sm whitespace-nowrap'
              )}
            >
              <span className="relative z-10">Consultar Ahora</span>
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
