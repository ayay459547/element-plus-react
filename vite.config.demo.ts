import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/element-plus-react/', // GitHub Pages repo 名稱
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@element-plus': fileURLToPath(new URL('./packages', import.meta.url)),
      $: fileURLToPath(new URL('./public', import.meta.url))
    }
  },
  server: {
    port: 4000,
    host: '0.0.0.0',
    open: true,
    cors: false
  }
})
