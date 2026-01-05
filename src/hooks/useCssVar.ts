import { useCallback, useEffect, useState } from 'react'

export function useCssVar(name: string, element: HTMLElement = document.documentElement) {
  const getValue = useCallback(() => {
    return getComputedStyle(element).getPropertyValue(name).trim()
  }, [name, element])

  const [value, setValue] = useState(getValue)

  const setCssVar = useCallback(
    (newValue: string) => {
      element.style.setProperty(name, newValue)
      setValue(newValue)
    },
    [name, element]
  )

  useEffect(() => {
    setValue(getValue())
  }, [getValue])

  return [value, setCssVar] as const
}
