import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment: 'jsdom',
    setupFiles:'./src/setupTest.js',
    mockReset: true, //Reinicia los test antes de cada pruba
    css:true } ,
})
