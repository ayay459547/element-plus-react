import type { ChangeEventHandler, CSSProperties, FocusEventHandler, ReactNode } from 'react'

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
   * @description whether show word count, only works when type is 'text' or 'textarea'
   */
  showWordLimit?: boolean

  /**
   * @description word count position, valid when show-word-limit is true
   */
  wordLimitPosition?: 'inside' | 'outside'

  /**
   * @description placeholder of Input
   */
  placeholder?: string

  /**
   * @description whether to show clear button, only works when type is not 'textarea'
   */
  clearable?: boolean

  /**
   * @description custom clear icon component
   */
  clearIcon?: ReactNode | string

  /**
   * @description specifies the format of the value presented input.(only works when type is 'text')
   * @param {string | number} value
   * @returns {string}
   */
  formatter?: (value: string | number) => string

  /**
   * @description specifies the value extracted from formatter input.(only works when type is 'text')
   * @param {string} value
   * @returns {string}
   */
  parser?: (value: string) => string

  /**
   * @description whether to show toggleable password input
   */
  showPassword?: boolean

  /**
   * @description whether Input is disabled
   */
  disabled?: boolean

  /**
   * @description size of Input, works when type is not 'textarea'
   */
  size?: 'large' | 'default' | 'small'

  /**
   * @description same as readonly in native input
   */
  readonly?: boolean

  /**
   * @description content as Input prefix, only works when type is not 'textarea'
   */
  prefix?: ReactNode
  /**
   * @description prefix icon component
   */
  prefixIcon?: ReactNode | string
  /**
   * @description content as Input suffix, only works when type is not 'textarea'
   */
  suffix?: ReactNode
  /**
   * @description suffix icon component
   */
  suffixIcon?: ReactNode | string
  /**
   * @description content to prepend before Input, only works when type is not 'textarea'
   */
  prepend?: ReactNode
  /**
   * @description content to append after Input, only works when type is not 'textarea'
   */
  append?: ReactNode

  className?: string
  style?: CSSProperties

  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  // onInput?: FormEventHandler<HTMLInputElement>
  onInput?: ChangeEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type ElInputInstance = React.ReactElement<ElInputProps>
