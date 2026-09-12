import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: necessário para o projeto funcionar no GitHub Pages
// (https://<usuario>.github.io/vitrine-games/)
export default defineConfig({
  plugins: [react()],
  base: '/vitrine-games/',
})
