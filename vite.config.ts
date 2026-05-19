import react from '@vitejs/plugin-react'
import { resolve } from 'path'

import { presetAttributify, presetIcons, presetMini } from 'unocss'
import UnoCSS from 'unocss/vite'
import type { BuildOptions, ConfigEnv, UserConfig } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import dts from 'vite-plugin-dts'
import svgr from 'vite-plugin-svgr'
// import { VitePWA } from 'vite-plugin-pwa'

import pkg from './package.json'

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
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

  const libBuildSettings: BuildOptions = {
    lib: {
      entry: {
        index: resolve(__dirname, 'packages/index.ts')
      },
      name: 'ElementPlusReact',
      formats: ['es']
    },
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      external: (id) => {
        const deps = [
          ...Object.keys(pkg.dependencies || {}),
          ...Object.keys(pkg.peerDependencies || {})
        ]
        return deps.some((dep) => id === dep || id.startsWith(`${dep}/`))
      },
      output: {
        preserveModules: true, // 保留 packages 結構
        preserveModulesRoot: resolve(__dirname, 'packages'),
        entryFileNames: '[name].js'
      }
    },
    emptyOutDir: true
  }

  return {
    root: '.',
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
        copyDtsFiles: true,
        cleanVueFileName: true,
        outDirs: resolve(__dirname, 'dist')
      })
    ],
    base: VITE_API_SYSTEM_URL,
    publicDir: isBuildLib ? false : 'public', // lib 不要使用 public 目錄
    build: isBuildLib
      ? libBuildSettings
      : {
          outDir: 'dist-demo',
          emptyOutDir: true
        },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@ayay459547/element-plus-react': resolve(__dirname, 'packages'),
        $: resolve(__dirname, 'public')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          api: 'modern-compiler',
          quietDeps: true
        }
      }
    },
    server: {
      port: 4000,
      host: '0.0.0.0',
      open: false,
      cors: false,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      historyApiFallback: true
    }
  }
})
