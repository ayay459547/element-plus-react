import { useMemo } from 'react'

export function useClamp(value: number, min: number, max: number) {
  return useMemo(() => {
    return Math.min(Math.max(value, min), max)
  }, [value, min, max])
}
