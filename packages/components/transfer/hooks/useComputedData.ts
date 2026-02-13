import { useMemo } from 'react'
import type { ElTransferProps, TransferDataItem, TransferKey } from '../types.ts'
import { usePropsAlias } from './usePropsAlias.ts'

export const useComputedData = (props: ElTransferProps) => {
  const { data = [], value: values = [], targetOrder } = props
  const propsAlias = usePropsAlias(props.props)

  const dataObj = useMemo(() => {
    return data.reduce(
      (o, cur) => {
        o[cur[propsAlias.key]] = cur
        return o
      },
      {} as Record<string | number, TransferDataItem>
    )
  }, [data, propsAlias.key])

  const sourceData = useMemo(() => {
    return data.filter((item) => !values.includes(item[propsAlias.key]))
  }, [data, values, propsAlias.key])

  const targetData = useMemo(() => {
    if (targetOrder === 'original') {
      return data.filter((item) => values.includes(item[propsAlias.key]))
    }
    return values.reduce((arr: TransferDataItem[], cur: TransferKey) => {
      const val = dataObj[cur]
      if (val) arr.push(val)
      return arr
    }, [])
  }, [targetOrder, values, propsAlias.key, dataObj, data])

  return { sourceData, targetData }
}
