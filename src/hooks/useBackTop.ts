import { throttleAndDebounce } from '@/utils'
import { useCallback, useEffect, useRef, useState } from 'react'

const threshold = 960

const cubic = (value: number): number => value ** 3
const easeInOutCubic = (value: number): number =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2

export const useBackTop = (offset = 200) => {
  const [shouldShow, setShouldShow] = useState(false)

  // 避免 handler identity 變動
  const offsetRef = useRef(offset)
  // offsetRef.current = offset

  const onScroll = useCallback(() => {
    setShouldShow(document.documentElement.scrollTop > offsetRef.current)
  }, [])

  const onResize = useCallback(() => {
    const { clientWidth } = document.body

    if (clientWidth < threshold) {
      window.addEventListener('scroll', throttleScroll)
    } else {
      window.removeEventListener('scroll', throttleScroll)
    }
  }, [])

  // const throttleScroll = useRef(throttleAndDebounce(onScroll, 160)).current
  const throttleScroll = throttleAndDebounce(onScroll, 160)

  // const throttleResize = useRef(throttleAndDebounce(onResize, 300)).current
  const throttleResize = throttleAndDebounce(onResize, 300)

  useEffect(() => {
    if (typeof window === 'undefined') return

    onResize()
    onScroll()

    window.addEventListener('resize', throttleResize)

    return () => {
      window.removeEventListener('resize', throttleResize)
      window.removeEventListener('scroll', throttleScroll)
    }
  }, [onResize, onScroll, throttleResize, throttleScroll])

  const scrollToTop = useCallback(() => {
    const beginTime = Date.now()
    const beginValue = document.documentElement.scrollTop
    const rAF = window.requestAnimationFrame

    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 500

      if (progress < 1) {
        document.documentElement.scrollTop = beginValue * (1 - easeInOutCubic(progress))
        rAF(frameFunc)
      } else {
        document.documentElement.scrollTop = 0
      }
    }

    rAF(frameFunc)
  }, [])

  return {
    shouldShow,
    scrollToTop
  }
}
