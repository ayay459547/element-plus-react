// import ElOnlyChild from '@ayay459547/element-plus-react/components/slot/ElOnlyChild.tsx'
import { cloneElement, isValidElement } from 'react'
import type { ElPopperTriggerProps } from './types'
import { usePopperContext } from './usePopper'

const ElPopperTrigger: React.FC<ElPopperTriggerProps> = ({ children }) => {
  const { setReferenceEl } = usePopperContext()

  // 檢查 children 是否為合法元件，解決 "Type 'undefined' is not assignable..." 錯誤
  if (!isValidElement(children)) {
    return children
  }

  // 現在 TS 知道 children 是 ReactElement，且 cloneElement 可以被呼叫
  return cloneElement(children, {
    ref: setReferenceEl
  } as any)
  // return <ElOnlyChild>{children}</ElOnlyChild>
}

export default ElPopperTrigger
