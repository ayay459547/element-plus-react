import { createContext, useContext } from 'react'
import type { SplitterDirection } from './types'

export interface SplitterContextProps {
  direction: SplitterDirection
  isDragging: boolean
  activeBarIndex: number | null
}

export const SplitterContext = createContext<SplitterContextProps | undefined>(undefined)

export const useSplitterContext = () => {
  const context = useContext(SplitterContext)
  if (!context) {
    throw new Error('ElSplitterPanel must be used within ElSplitter')
  }
  return context
}
