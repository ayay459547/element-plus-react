import { useState } from 'react'
import type { ElTransferPanelProps, TransferPanelState } from '../types'
import { usePropsAlias } from './usePropsAlias'

export const useCheck = (props: ElTransferPanelProps, panelState: TransferPanelState) => {
  const { data = [], filterMethod } = props
  const propsAlias = usePropsAlias(props.propsAlias)

  const [isIndeterminate, setIsIndeterminate] = useState(false)

  const handleAllCheckedChange = () => {}

  const checkedSummary = '0/15'

  const filteredData = data.filter((item) => {
    if (typeof filterMethod === 'function') {
      return filterMethod(panelState.query, item)
    } else {
      const label = String(item[propsAlias.label] || item[propsAlias.key])
      return label.toLowerCase().includes(panelState.query.toLowerCase())
    }
  })

  return {
    filteredData,
    checkedSummary,
    isIndeterminate,
    handleAllCheckedChange
  }
}
