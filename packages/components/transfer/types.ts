// import type { ElCheckboxGroupBaseProps } from '@ayay459547/element-plus-react/components/checkbox/types'
import type { CSSProperties, Dispatch, ReactNode, SetStateAction } from 'react'

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
  checked: TransferKey[]
  setChecked: Dispatch<SetStateAction<ElTransferPanelProps['checked']>>

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
  onChange?: (newValue: Array<string | number>) => void

  /**
   * @description data source
   */
  data?: Record<string, any>[]

  /**
   * @description whether Transfer is filterable
   */
  filterable?: ElTransferPanelProps['filterable']

  /**
   * @description placeholder for the filter input
   */
  filterPlaceholder?: ElTransferPanelProps['placeholder']

  /**
   * @description custom filter method
   */
  filterMethod?: ElTransferPanelProps['filterMethod']

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
  renderContent?: ElTransferPanelProps['optionRender']

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

  /**
   * @description Custom content for data items.
   */
  children?: ElTransferPanelProps['optionRender']

  /**
   * @description content of left list footer
   */
  leftFooter?: ReactNode

  /**
   * @description content of right list footer
   */
  rightFooter?: ReactNode

  /**
   * @description content when left panel is empty or when no data matches the filter
   */
  leftEmpty?: ReactNode

  /**
   * @description content when right panel is empty or when no data matches the filter
   */
  rightEmpty?: ReactNode
}

export type ElTransferInstance = React.ReactElement<ElTransferProps>
