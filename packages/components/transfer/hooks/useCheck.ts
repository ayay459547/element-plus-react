import type { ElCheckboxGroupBaseProps } from '@ayay459547/element-plus-react/components/checkbox/types'
import { useState } from 'react'
import type { ElTransferPanelProps } from '../types'
import { usePropsAlias } from './usePropsAlias'

export const useCheck = (props: ElTransferPanelProps) => {
  const { data = [], filterMethod } = props
  const propsAlias = usePropsAlias(props.propsAlias)

  const [checked, setChecked] = useState<ElCheckboxGroupBaseProps['value']>([])

  const [allChecked, setAllChecked] = useState(false)

  const [query, setQuery] = useState('')

  const [checkChangeByUser, setCheckChangeByUser] = useState(false)

  const filteredData = data.filter((item) => {
    if (typeof filterMethod === 'function') {
      return filterMethod(query, item)
    } else {
      const label = String(item[propsAlias.label] || item[propsAlias.key])
      return label.toLowerCase().includes(query.toLowerCase())
    }
  })

  const checkableData = filteredData.filter((item) => !item[propsAlias.disabled])

  const handleAllCheckedChange = (isChecked: boolean) => {
    setChecked(() => {
      return isChecked ? checkableData.map((item) => item[propsAlias.key]) : []
    })
  }

  const checkedLength = checked?.length ?? 0
  const dataLength = data.length
  const checkedSummary = `${checkedLength}/${dataLength}`

  const isIndeterminate = checkedLength > 0 && checkedLength < checkableData.length

  return {
    filteredData,
    checkableData,
    checkedSummary,
    isIndeterminate,
    handleAllCheckedChange,
    // panelState
    checked,
    setChecked,
    query,
    allChecked,
    setAllChecked,
    setQuery
  }
}
