// import { isExternal } from 'vitepress/dist/client/shared'

// export * from './colors'

// export { isActive, isExternal } from 'vitepress/dist/client/shared'
// export { ensureStartingSlash } from 'vitepress/dist/client/theme-default/support/utils'

// const endingSlashRE = /\/$/
// export function utoa(data: string): string {
//   return btoa(unescape(encodeURIComponent(data)))
// }

// export const throttleAndDebounce = (fn: () => any, delay: number) => {
//   let timeout: ReturnType<typeof setTimeout>
//   let called = false
//   return () => {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     if (!called) {
//       fn()
//       called = true
//       setTimeout(() => {
//         called = false
//       }, delay)
//     } else {
//       timeout = setTimeout(fn, delay)
//     }
//   }
// }

// export function createGitHubUrl(
//   docsRepo: string,
//   docsDir: string,
//   docsBranch: string,
//   path: string,
//   folder = 'examples/',
//   ext = '.vue'
// ) {
//   const base = isExternal(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`
//   return `${base.replace(endingSlashRE, '')}/edit/${docsBranch}/${
//     docsDir ? `${docsDir.replace(endingSlashRE, '')}/` : ''
//   }${folder || ''}${path}${ext || ''}`
// }

// export function createCrowdinUrl(/** zh-CN、es-ES... */ targetLang: string) {
//   // example: https://crowdin.com/project/element-plus/zh-CN
//   return `https://crowdin.com/project/element-plus/${targetLang}`
// }

export const isActive = (routePath: string, path: string): boolean => {
  if (typeof routePath !== 'string' || typeof path !== 'string' || routePath === '/') return false

  const isChildren = /^\/.*\//.test(path)
  if (isChildren) return path === routePath
  return routePath.startsWith(path) || path === routePath
}

export const isExternal = (path: string | undefined): boolean => {
  return typeof path === 'string' && /^https/.test(path)
}

/**
 * @author Caleb
 * @description 下載路徑轉換
 * 1. 路徑依據 BASE_URL
 * 2. url是 // 取代變成 /
 *
 * 如果
 * 1. VITE_API_SYSTEM_URL(vite.config.ts 中的 base) 是 '' 或 '/', BASE_URL = '/'
 * 2. filePath = /...
 * 結果
 * fetchPath = //... (無法取得檔案)
 *
 * @param {String} filePath 檔案路徑
 */
export const getPublicFileUrl = (filePath: string): string => {
  const baseUrl = `${window.location.origin}`
  const url = `${import.meta.env.BASE_URL}${filePath}`
  const fetchPath = new URL(url.replace(/\/\//g, '/'), baseUrl).href
  return fetchPath
}

export const withBase = (path: string) => {
  return getPublicFileUrl(path)
}

/**
 * @author Caleb
 * @description 複製文字
 * @param text 文字
 */
export const copyText = async (text: string): Promise<string> => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
    } else {
      const input = document.createElement('input')
      document.body.appendChild(input)
      input.setAttribute('value', text)
      input.select()

      if (document.execCommand('copy')) {
        document.execCommand('copy')
      }
      document.body.removeChild(input)
    }

    return text
  } catch (e) {
    console.trace(e)

    return text
  }
}
