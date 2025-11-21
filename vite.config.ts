import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']]
      }
    })
  ],
  server: {
    port: 4000,
    host: '0.0.0.0',
    open: true,
    cors: false
  }
})
