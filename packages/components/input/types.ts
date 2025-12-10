import type {
  ChangeEventHandler,
  CSSProperties,
  FocusEventHandler,
  FormEventHandler,
  ReactNode
} from 'react'

export interface ElInputProps {
  /**
   * @description type of input, see more in MDN
   */
  type?: string

  /**
   * @description binding value
   */
  value?: string | number

  /**
   *@description v-model modifiers, reference Vue modifiers
   */
  modelModifier?: {
    lazy?: boolean
    number?: boolean
    trim?: boolean
  }

  /**
   * @description same as maxlength in native input
   */
  maxlength?: string | number
  /**
   * @description same as minlength in native input
   */
  minlength?: string | number

  /**
   * @description placeholder of Input
   */
  placeholder?: string

  /**
   * @description whether Input is disabled
   */
  disabled?: boolean

  /**
   * @description size of Input, works when type is not 'textarea'
   */
  size?: 'large' | 'default' | 'small'

  prefix?: ReactNode
  suffix?: ReactNode
  prepend?: ReactNode
  append?: ReactNode

  className?: string
  style?: CSSProperties

  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onInput?: FormEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type ElInputInstance = React.ReactElement<ElInputProps>
