import type { ElTransferProps, TransferPropsAlias } from '../types'

export const usePropsAlias = (props: ElTransferProps['props']) => {
  const initProps: Required<TransferPropsAlias> = {
    label: 'label',
    key: 'key',
    disabled: 'disabled'
  }

  const propsAlias = {
    ...initProps,
    ...(props ?? {})
  }

  return propsAlias
}
