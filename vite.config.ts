import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { presetAttributify, presetIcons, presetMini } from 'unocss'
import UnoCSS from 'unocss/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const { VITE_API_BUILD_VERSION, VITE_API_VERSION, VITE_API_SYSTEM_URL, VITE_API_BUILD_TYPE } = env
  console.table({
    VITE_API_BUILD_VERSION,
    VITE_API_VERSION,
    VITE_API_SYSTEM_URL,
    VITE_API_BUILD_TYPE
  })

  const isBuildLib = command === 'build' && VITE_API_BUILD_TYPE === 'library'

  const buildSettings = isBuildLib
    ? {
        lib: {
          entry: resolve(__dirname, 'packages/index.ts'),
          name: 'ElementPlusReact',
          fileName: 'index'
        },
        rollupOptions: {
          external: ['react', 'react-dom']
        }
      }
    : {
        outDir: 'dist-demo',
        emptyOutDir: true
      }

  return {
    plugins: [
      react(),
      UnoCSS({
        presets: [
          presetMini(), // 核心原子化 preset
          presetAttributify(), // <div p="4" text="red-500"> 語法
          presetIcons() // i-xxx 圖標
        ]
      })
    ],
    base: VITE_API_SYSTEM_URL ?? '/',
    build: buildSettings,
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
      cors: false,
      historyApiFallback: true
    }
  }
})
