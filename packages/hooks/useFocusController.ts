import { useCallback, useEffect, useRef, useState } from 'react'

export interface UseFocusControllerOptions {
  disabled?: boolean
  /**
   * return true to cancel focus
   */
  beforeFocus?: (event: FocusEvent) => boolean | undefined
  afterFocus?: (event: FocusEvent) => void
  /**
   * return true to cancel blur
   */
  beforeBlur?: (event: FocusEvent) => boolean | undefined
  afterBlur?: (event: FocusEvent) => void
}

export function useFocusController<
  Target extends { focus: () => void },
  Wrapper extends HTMLElement = HTMLElement
>(
  targetRef: React.RefObject<Target | null>,
  {
    disabled = false,
    beforeFocus,
    afterFocus,
    beforeBlur,
    afterBlur
  }: UseFocusControllerOptions = {}
) {
  const wrapperRef = useRef<Wrapper | null>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback(
    (event: FocusEvent) => {
      if (disabled || isFocused) return

      const cancel = beforeFocus?.(event)
      if (cancel) return

      setIsFocused(true)
      afterFocus?.(event)
    },
    [disabled, isFocused, beforeFocus, afterFocus]
  )

  const handleBlur = useCallback(
    (event: FocusEvent) => {
      if (disabled) return

      const cancel = beforeBlur?.(event)
      if (cancel) return

      // focus 還在 wrapper 裡面就不算 blur
      if (event.relatedTarget && wrapperRef.current?.contains(event.relatedTarget as Node)) {
        return
      }

      setIsFocused(false)
      afterBlur?.(event)
    },
    [disabled, beforeBlur, afterBlur]
  )

  const handleClick = useCallback(
    (event: Event) => {
      if (disabled) return

      const target = event.target as HTMLElement

      // 點到本來就可 focus 的元素就不處理
      if (target?.tabIndex >= 0 || wrapperRef.current?.contains(document.activeElement)) {
        return
      }

      targetRef.current?.focus()
    },
    [disabled, targetRef]
  )

  /** tabindex 控制（對齊 Vue watch） */
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    if (disabled) {
      el.removeAttribute('tabindex')
    } else {
      el.setAttribute('tabindex', '-1')
    }
  }, [disabled])

  /** event listeners（capture = true） */
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    el.addEventListener('focus', handleFocus, true)
    el.addEventListener('blur', handleBlur, true)
    el.addEventListener('click', handleClick, true)

    return () => {
      el.removeEventListener('focus', handleFocus, true)
      el.removeEventListener('blur', handleBlur, true)
      el.removeEventListener('click', handleClick, true)
    }
  }, [handleFocus, handleBlur, handleClick])

  return {
    isFocused,
    wrapperRef,
    handleFocus,
    handleBlur
  }
}
