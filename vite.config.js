import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({
    manifest: {
      name: 'Jesus Youth ke',
      short_name: 'JAM',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#61dafb',
      icons: [
        {
          src: '/image.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/image.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  }),],
})
