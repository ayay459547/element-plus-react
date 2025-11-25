import { createContext, useContext } from 'react'

export interface ScrollbarContext {
  scrollbarElement: HTMLDivElement | null
  wrapElement: HTMLDivElement | null
}

// 預設值為 null
export const ScrollbarContext = createContext<ScrollbarContext>({
  scrollbarElement: null,
  wrapElement: null
})

export const useScrollbarContext = () => {
  return useContext(ScrollbarContext)
}

export type ScrollbarContextType = ScrollbarContext | null
