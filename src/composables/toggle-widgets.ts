import { useEffect } from 'react'

export function useToggleWidgets(watchSource: boolean, handler: (e: Event) => void) {
  useEffect(() => {
    // 避免 SSR / 非瀏覽器環境
    if (typeof window === 'undefined') return

    if (watchSource) {
      window.addEventListener('resize', handler)
    } else {
      window.removeEventListener('resize', handler)
    }

    // 清除邏輯（等同 Vue 卸載）
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [watchSource, handler])
}
