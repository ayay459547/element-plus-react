import { useState } from 'react'
import type { ElTransferProps, TransferCheckedState } from '../types.ts'
// import type { ElCheckboxGroupBaseProps } from '@ayay459547/element-plus-react/components/checkbox/types'

export const useMove = (props: ElTransferProps) => {
  const { value, onChange, leftDefaultChecked, rightDefaultChecked } = props
  const [leftChecked, setLeftChecked] = useState<TransferCheckedState['leftChecked']>(
    () => leftDefaultChecked ?? []
  )
  const [rightChecked, setRightChecked] = useState<TransferCheckedState['rightChecked']>(
    () => rightDefaultChecked ?? []
  )

  const addToRight = () => {
    const newValue = Array.from(new Set([...(value ?? []), ...leftChecked]))
    if (typeof onChange === 'function') {
      onChange(newValue)
    }
    setLeftChecked([])
  }

  const addToLeft = () => {
    const newValue = (value ?? []).filter((key) => !rightChecked.includes(key))
    if (typeof onChange === 'function') {
      onChange(newValue)
    }
    setRightChecked([])
  }

  return {
    addToLeft,
    addToRight,
    // checkedState
    leftChecked,
    setLeftChecked,
    rightChecked,
    setRightChecked
  }
}
