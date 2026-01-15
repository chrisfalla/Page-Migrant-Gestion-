'use client';

import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Asesoría de Visas',
    'Permisos de Trabajo',
    'Regularización PPT',
    'Apostillas',
    'Convalidación de Títulos',
  ];

  return (
    <footer className="relative bg-void-950 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gold-500/20 rounded-xl blur-md" />
                <div className="relative w-12 h-12 glass-card rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-gold-500" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-slate-100">MIGRANT</span>
                <span className="text-sm gradient-text font-medium">GESTIÓN SAS</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Consultoría migratoria de elite para corporaciones, ejecutivos y ciudadanos del mundo.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/573028077187"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:border-gold-500 transition-all group"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 text-slate-400 group-hover:text-gold-500 transition-colors" />
              </a>
              <a
                href="mailto:migrantgestion@gmail.com"
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:border-gold-500 transition-all group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-gold-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-slate-100 mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold text-slate-100 mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  <span className="text-slate-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold text-slate-100 mb-6">Contacto Directo</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-400">Colombia - Sede Neiva</p>
                  <p className="text-xs text-slate-500 mt-1">Huila, Colombia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://wa.me/573028077187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-gold-500 transition-colors"
                  >
                    +57 302 807 7187
                  </a>
                  <p className="text-xs text-slate-500 mt-1">WhatsApp disponible</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:migrantgestion@gmail.com"
                    className="text-sm text-slate-400 hover:text-gold-500 transition-colors break-all"
                  >
                    migrantgestion@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500 text-center md:text-left">
              © {new Date().getFullYear()} MIGRANT GESTIÓN SAS. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-gold-500 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-gold-500 transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-slate-600">
              Diseño & Desarrollo de Nivel God-Tier • Construido con Next.js, TypeScript & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
