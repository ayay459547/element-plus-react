import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { presetAttributify, presetIcons, presetMini } from 'unocss'
import UnoCSS from 'unocss/vite'
import type { BuildEnvironmentOptions } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const { VITE_API_BUILD_VERSION, VITE_API_VERSION, VITE_API_SYSTEM_URL, VITE_API_BUILD_TYPE } = env

  console.table({
    VITE_API_BUILD_VERSION,
    VITE_API_VERSION,
    VITE_API_SYSTEM_URL,
    VITE_API_BUILD_TYPE,
    command,
    mode
  })

  const isBuildLib = command === 'build' && VITE_API_BUILD_TYPE === 'library'

  const libBuildSettings: BuildEnvironmentOptions = {
    lib: {
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'ElementPlusReact',
      fileName: 'index',
      formats: ['es']
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: isBuildLib
        ? {
            preserveModules: true, // 保留 packages 結構
            preserveModulesRoot: 'packages',
            entryFileNames: '[name].js'
          }
        : {}
    },
    emptyOutDir: true
  }

  return {
    plugins: [
      react(),
      svgr(),
      // VitePWA(),
      UnoCSS({
        presets: [
          presetMini(), // 核心原子化 preset
          presetAttributify(), // <div p="4" text="red-500"> 語法
          presetIcons() // i-xxx 圖標
        ]
      }),
      dts({
        insertTypesEntry: true,
        copyDtsFiles: true
      })
    ],
    base: isBuildLib ? './' : (VITE_API_SYSTEM_URL ?? '/'),
    publicDir: isBuildLib ? false : 'public', // lib 不要使用 public 目錄
    build: isBuildLib
      ? libBuildSettings
      : {
          outDir: 'dist-demo',
          emptyOutDir: true
        },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@ayay459547/element-plus-react': fileURLToPath(new URL('./packages', import.meta.url)),
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
