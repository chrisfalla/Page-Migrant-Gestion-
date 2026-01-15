'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { cn } from '../utils/cn';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nombre requerido';
    if (!formData.email.includes('@')) newErrors.email = 'Email inválido';
    if (!formData.phone.trim()) newErrors.phone = 'Teléfono requerido';
    if (!formData.service) newErrors.service = 'Selecciona un servicio';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const whatsappMessage = `🌟 *Nueva Consulta - MIGRANT GESTIÓN*\n\n👤 *Cliente:* ${formData.name}\n📧 *Email:* ${formData.email}\n📱 *Teléfono:* ${formData.phone}\n🎯 *Servicio:* ${formData.service}\n\n💬 *Mensaje:*\n${formData.message || 'Sin mensaje adicional'}`;
    
    window.open(`https://wa.me/573028077187?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const services = [
    'Asesoría de Visas',
    'Permisos de Trabajo',
    'Regularización PPT',
    'Creación de Empresas',
    'Convalidación de Títulos',
    'Apostillas y Legalizaciones',
    'Consultoría Corporativa',
    'Otro',
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+57 302 807 7187',
      href: 'https://wa.me/573028077187',
      color: 'text-green-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'migrantgestion@gmail.com',
      href: 'mailto:migrantgestion@gmail.com',
      color: 'text-gold-500',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Colombia - Sede Neiva',
      color: 'text-electric-500',
    },
  ];

  return (
    <section id="contacto" className="relative py-32 bg-void-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

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
              Inicia Tu Proceso
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-slate-100 mb-6">
            Conversemos{' '}
            <span className="gradient-text">Hoy</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Consulta personalizada con Alexis José Cedeño. Respuesta garantizada en menos de{' '}
            <span className="text-gold-500 font-semibold">24 horas</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={idx}
                    href={info.href}
                    target={info.href?.startsWith('http') ? '_blank' : undefined}
                    rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={cn(
                      'flex items-center gap-6 p-6 glass-card rounded-luxury',
                      'hover:border-gold-500/50 transition-all duration-500',
                      info.href && 'cursor-pointer hover:shadow-glow-gold'
                    )}
                  >
                    <div className={cn('p-4 glass-card rounded-xl', info.color)}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">{info.label}</div>
                      <div className="text-lg font-semibold text-slate-100">{info.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-8 rounded-luxury"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 glass-card rounded-xl">
                  <Clock className="w-6 h-6 text-gold-500" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-slate-100">Horario de Atención</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Lunes - Viernes</span>
                  <span className="font-semibold text-slate-200">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Sábados</span>
                  <span className="font-semibold text-slate-200">9:00 AM - 1:00 PM</span>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-slate-500">
                    *Consultas urgentes: Disponibilidad 24/7 vía WhatsApp
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-luxury"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={cn(
                      'w-full px-4 py-3 bg-void-800 border rounded-luxury',
                      'text-slate-100 placeholder:text-slate-500',
                      'focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20',
                      'outline-none transition-all',
                      errors.name && 'border-red-500'
                    )}
                    placeholder="Ej. Elon Musk"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={cn(
                      'w-full px-4 py-3 bg-void-800 border rounded-luxury',
                      'text-slate-100 placeholder:text-slate-500',
                      'focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20',
                      'outline-none transition-all',
                      errors.phone && 'border-red-500'
                    )}
                    placeholder="+57 300 000 0000"
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={cn(
                    'w-full px-4 py-3 bg-void-800 border rounded-luxury',
                    'text-slate-100 placeholder:text-slate-500',
                    'focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20',
                    'outline-none transition-all',
                    errors.email && 'border-red-500'
                  )}
                  placeholder="correo@empresa.com"
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                  Tipo de Servicio
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={cn(
                    'w-full px-4 py-3 bg-void-800 border rounded-luxury',
                    'text-slate-100',
                    'focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20',
                    'outline-none transition-all',
                    errors.service && 'border-red-500'
                  )}
                >
                  <option value="">Selecciona un servicio...</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Mensaje (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={cn(
                    'w-full px-4 py-3 bg-void-800 border rounded-luxury',
                    'text-slate-100 placeholder:text-slate-500',
                    'focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20',
                    'outline-none transition-all resize-none'
                  )}
                  placeholder="Describe brevemente tu situación migratoria..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  'w-full group relative px-8 py-4 bg-gradient-gold text-void-950 font-bold',
                  'rounded-luxury overflow-hidden transition-all duration-300',
                  'hover:shadow-glow-gold hover:scale-[1.02]',
                  'uppercase tracking-wider text-sm',
                  'flex items-center justify-center gap-3'
                )}
              >
                <span className="relative z-10">Enviar Solicitud</span>
                <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </button>

              <p className="text-xs text-center text-slate-500">
                Al enviar, aceptas nuestra política de privacidad. Tus datos están protegidos.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
