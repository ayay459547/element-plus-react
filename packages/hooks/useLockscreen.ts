import { useEffect, useRef } from 'react'

type UseLockScreenOptions = {
  namespace?: string // 對應 ns.namespace.value
  hiddenClass?: string
}

// function getScrollBarWidth() {
//   const outer = document.createElement('div')
//   outer.style.visibility = 'hidden'
//   outer.style.overflow = 'scroll'
//   outer.style.position = 'absolute'
//   outer.style.top = '-9999px'
//   outer.style.width = '100px'
//   document.body.appendChild(outer)

//   const inner = document.createElement('div')
//   inner.style.width = '100%'
//   outer.appendChild(inner)

//   const width = outer.offsetWidth - inner.offsetWidth
//   outer.parentNode?.removeChild(outer)

//   return width
// }

export function useLockScreen(trigger: boolean, options: UseLockScreenOptions = {}) {
  const { namespace = 'popup', hiddenClass } = options

  const hiddenCls = hiddenClass ?? `${namespace}-parent--hidden`

  const bodyWidthRef = useRef<string>('0')
  const withoutHiddenClassRef = useRef(false)
  const cleanedRef = useRef(false)

  useEffect(() => {
    if (typeof document === 'undefined') return

    const body = document.body

    const cleanup = () => {
      if (cleanedRef.current) return
      cleanedRef.current = true

      setTimeout(() => {
        if (withoutHiddenClassRef.current) {
          body.style.width = bodyWidthRef.current
          body.classList.remove(hiddenCls)
          body.style.overflow = 'auto'
        }
      }, 0)
    }

    if (!trigger) {
      cleanup()
      return
    }

    cleanedRef.current = false

    const hasHidden = body.classList.contains(hiddenCls)
    withoutHiddenClassRef.current = !hasHidden

    if (!hasHidden) {
      bodyWidthRef.current = body.style.width
      body.classList.add(hiddenCls)
    }

    // const scrollBarWidth = getScrollBarWidth()
    // const bodyHasOverflow = document.documentElement.clientHeight < body.scrollHeight
    // const bodyOverflowY = getComputedStyle(body).overflowY

    // if (
    //   scrollBarWidth > 0 &&
    //   (bodyHasOverflow || bodyOverflowY === 'scroll') &&
    //   withoutHiddenClassRef.current
    // ) {
    //   body.style.width = `calc(100% - ${scrollBarWidth}px)`
    // }

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    // document.body.style.paddingRight = scrollBarWidth + 'px'
    document.body.style.width = `calc(100% - ${scrollBarWidth}px)`

    return cleanup
  }, [trigger, hiddenCls])
}
