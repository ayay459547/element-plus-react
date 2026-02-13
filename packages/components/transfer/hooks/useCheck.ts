import { useState } from 'react'
import type { ElTransferPanelProps } from '../types'
import { usePropsAlias } from './usePropsAlias'

export const useCheck = (props: ElTransferPanelProps) => {
  const { checked, setChecked, data = [], filterMethod, format = {} } = props

  const checkedLength = checked?.length ?? 0
  const dataLength = data.length

  const propsAlias = usePropsAlias(props.propsAlias)

  const [query, setQuery] = useState('')

  // const [checkChangeByUser, setCheckChangeByUser] = useState(false)

  const filteredData = data.filter((item) => {
    if (typeof filterMethod === 'function') {
      return filterMethod(query, item)
    }
    const label = String(item[propsAlias.label] || item[propsAlias.key])
    return label.toLowerCase().includes(query.toLowerCase())
  })

  const checkableData = filteredData.filter((item) => !item[propsAlias.disabled])
  const disabledData = filteredData.filter((item) => item[propsAlias.disabled])
  const disabledLength = disabledData.length

  const handleAllCheckedChange = (isAllChecked: boolean) => {
    setChecked(() => {
      return isAllChecked ? checkableData.map((item) => item[propsAlias.key]) : []
    })
  }

  let checkedSummary = `${checkedLength}/${dataLength}`
  const { noChecked, hasChecked } = format
  if (noChecked && hasChecked) {
    checkedSummary =
      checkedLength > 0
        ? hasChecked
            .replace(/\${checked}/g, checkedLength.toString())
            .replace(/\${total}/g, dataLength.toString())
        : noChecked.replace(/\${total}/g, dataLength.toString())
  }

  const isIndeterminate = checkedLength > 0 && checkedLength < checkableData.length

  const isAllChecked = checkedLength > 0 && checkedLength === dataLength - disabledLength
  const [allChecked, setAllChecked] = useState(isAllChecked)

  return {
    filteredData,
    checkableData,
    checkedSummary,
    isIndeterminate,
    handleAllCheckedChange,
    // panelState
    isAllChecked,
    checked,
    setChecked,
    query,
    allChecked,
    setAllChecked,
    setQuery
  }
}
