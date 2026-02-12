import type { CSSProperties, ReactNode } from 'react'

export type TransferKey = string | number
export type TransferDirection = 'left' | 'right'

export interface TransferPanelState {
  checked: TransferKey[]
  allChecked: boolean
  query: string
  checkChangeByUser: boolean
}

export type TransferDataItem = Record<string, any>

export interface TransferFormat {
  noChecked?: string
  hasChecked?: string
}

export interface TransferPropsAlias {
  label?: string
  key?: string
  disabled?: string
}

export interface TransferCheckedState {
  leftChecked: TransferKey[]
  rightChecked: TransferKey[]
}

interface Common {
  className?: string
  style?: CSSProperties
}

export interface ElTransferPanelProps extends Common {
  data?: Record<string, any>[]

  title?: string

  filterable?: boolean

  placeholder?: string

  filterMethod?: (query: string, item: Record<string, any>) => boolean

  format?: TransferFormat

  propsAlias: Required<TransferPropsAlias>

  optionRender?: (option: TransferDataItem) => ReactNode

  empty?: ReactNode

  children?: ReactNode
}

export type ElTransferPanelInstance = React.ReactElement<ElTransferPanelProps>

export interface ElTransferProps extends Common {
  /**
   * @description binding value
   */
  value?: Array<string | number>

  /**
   * @description setting value
   */
  onChange?: (newValue: ElTransferProps['value']) => void

  /**
   * @description data source
   */
  data?: Record<string, any>[]

  /**
   * @description whether Transfer is filterable
   */
  filterable?: boolean

  /**
   * @description placeholder for the filter input
   */
  filterPlaceholder?: string

  /**
   * @description custom filter method
   */
  filterMethod?: (query: string, item: Record<string, any>) => boolean

  /**
   * @description order strategy for elements in the target list.
   * - If set to original, the elements will keep the same order as the data source.
   * - If set to push, the newly added elements will be pushed to the bottom.
   * - If set to unshift, the newly added elements will be inserted on the top.
   */
  targetOrder?: 'original' | 'push' | 'unshift'

  /**
   * @description custom list titles
   */
  titles?: [string, string] | Array<string>

  /**
   * @description custom button texts
   */
  buttonTexts?: [string, string] | Array<string>

  /**
   * @description custom render function for data items
   */
  renderContent?: (option: TransferDataItem) => React.ReactNode

  /**
   * @description 	texts for checking status in list header
   */
  format?: TransferFormat

  /**
   * @description prop aliases for data source
   */
  props?: TransferPropsAlias

  /**
   * @description key array of initially checked data items of the left list
   */
  leftDefaultChecked?: ElTransferProps['value']

  /**
   * @description key array of initially checked data items of the left list
   */
  rightDefaultChecked?: ElTransferProps['value']

  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean

  children?: (args: { option: TransferDataItem }) => ReactNode
}

export type ElTransferInstance = React.ReactElement<ElTransferProps>
