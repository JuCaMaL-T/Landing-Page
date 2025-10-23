// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'framer': ['framer-motion'],
            'icons': ['lucide-react'],
          }
        }
      }
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
    }
  },

  build: {
    inlineStylesheets: 'auto'
  },

  compressHTML: true,

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});