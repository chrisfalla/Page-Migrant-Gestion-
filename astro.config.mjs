// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    // Configuración optimizada de imágenes
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Calidad de compresión para WebP (0-100)
        quality: 75,
        // Opciones específicas de WebP
        webp: {
          quality: 72,
          effort: 6, // 0-6, mayor = mejor compresión pero más lento
        },
        // Opciones para AVIF (mejor compresión que WebP)
        avif: {
          quality: 65,
          effort: 6,
        }
      }
    }
  },
  build: {
    // Inlinear assets pequeños
    inlineStylesheets: 'auto'
  }
});