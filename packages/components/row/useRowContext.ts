import { createContext, useContext } from 'react'

export type RowContextType = {
  gutter: number
}

export const RowContext = createContext<RowContextType>({ gutter: 0 })

export const useRowContext = () => useContext(RowContext)
