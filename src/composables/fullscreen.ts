import { useCallback, useState } from 'react'

export function useFullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = useCallback((value?: boolean) => {
    if (typeof value === 'boolean') {
      setIsFullScreen(value)
    } else {
      setIsFullScreen((prev) => !prev)
    }
  }, [])

  return {
    isFullScreen,
    toggleFullScreen
  }
}
