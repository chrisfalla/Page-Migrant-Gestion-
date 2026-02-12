// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        }
      }
    }
  },
  image: {
    // Configuración optimizada de imágenes
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Calidad de compresión para WebP (0-100)
        quality: 70,
        // Opciones específicas de WebP
        webp: {
          quality: 65,
          effort: 6, // 0-6, mayor = mejor compresión pero más lento
        },
        // Opciones para AVIF (mejor compresión que WebP)
        avif: {
          quality: 60,
          effort: 6,
        }
      }
    }
  },
  build: {
    // Inlinear assets pequeños y CSS crítico
    inlineStylesheets: 'always',
    assets: '_assets'
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});