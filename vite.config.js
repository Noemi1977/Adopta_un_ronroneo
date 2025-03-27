import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Habilita variables globales como `describe`, `it`, etc.
    environment: 'jsdom', // Simula un entorno de navegador
    setupFiles: './vitest.setup.js', // Archivo de configuración adicional
  },
});
