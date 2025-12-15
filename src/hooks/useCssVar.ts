import { useEffect, useRef, useState } from 'react'

interface UseCssVarOptions {
  initialValue?: string
  observe?: boolean
}

export function useCssVar(
  prop: string | undefined,
  target?: React.RefObject<HTMLElement | null>,
  options: UseCssVarOptions = {}
) {
  const { initialValue, observe = false } = options
  const [value, setValue] = useState<string | undefined>(initialValue)
  const isMounted = useRef(false)

  const getEl = () => target?.current ?? document.documentElement

  /* === 初始化：只讀一次 === */
  useEffect(() => {
    if (!prop) return
    const el = getEl()
    const cssValue = getComputedStyle(el).getPropertyValue(prop).trim()

    if (cssValue && cssValue !== value) {
      setValue(cssValue)
    }

    isMounted.current = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /* === React → CSS（單向） === */
  useEffect(() => {
    if (!prop || !isMounted.current) return
    const el = getEl()

    if (value === null || value === undefined) el.style.removeProperty(prop)
    else el.style.setProperty(prop, value)
  }, [value, prop])

  /* === CSS → React（僅 observer callback） === */
  useEffect(() => {
    if (!observe || !prop) return
    const el = getEl()

    const observer = new MutationObserver(() => {
      const cssValue = getComputedStyle(el).getPropertyValue(prop).trim()

      setValue((prev) => (prev === cssValue ? prev : cssValue || undefined))
    })

    observer.observe(el, {
      attributes: true,
      attributeFilter: ['style', 'class']
    })

    return () => observer.disconnect()
  }, [observe, prop])

  return [value, setValue] as const
}
