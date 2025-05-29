import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ _command, mode }) => {
  const config = {
    plugins: [react(), tailwindcss()],
  }

  // Only set base path for GitHub Pages deployment
  // For other deployments (Netlify, Vercel, custom domain), use root path
  if (mode === 'github-pages') {
    config.base = '/Taiyo-Tuition/'
  } else {
    config.base = '/'
  }

  return config
})
