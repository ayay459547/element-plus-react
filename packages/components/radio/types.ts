import type { ChangeEventHandler, CSSProperties, ReactNode } from 'react'

interface CommonProps {
  /**
   * @description customize default content
   */
  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export interface ElRadioProps extends CommonProps {
  /**
   * @description the value of Radio
   */
  value?: string | number | boolean

  /**
   * @description the label of Radio. If there's no value, label will act as value
   */
  label?: string | number | boolean

  /**
   * @description whether Radio is disabled
   */
  disabled?: boolean

  /**
   * @description whether to add a border around Radio
   */
  border?: boolean

  /**
   * @description size of the Radio
   */
  size?: 'large' | 'default' | 'small'

  /**
   * @description native name attribute
   */
  name?: string

  /**
   * @description triggers when the bound value changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type RadioOptionProps = {
  value?: string
  label?: string
  disabled?: string
}

export interface ElRadioGroupProps extends CommonProps {
  /**
   * @description binding value
   */
  value?: ElRadioProps['value']

  /**
   * @description the size of radio buttons or bordered radios
   */
  size?: ElRadioProps['size']

  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean

  /**
   * @description whether the nesting radios are disabled
   */
  disabled?: boolean

  /**
   * @description font color when button is active
   */
  textColor?: string

  /**
   * @description border and background color when button is active
   */
  fill?: string

  /**
   * @description same as aria-label in RadioGroup
   */
  ariaLabel?: string

  /**
   * @description native name attribute
   */
  name?: string

  /**
   * @description native id attribute
   */
  id?: string

  /**
   * @description data of the options, the key of value and label and disabled can be customize by props
   */
  options?: Array<Partial<ElRadioProps> & Record<string, any>>

  /**
   * @description configuration options
   */
  props?: RadioOptionProps

  /**
   * @description component type to render options (e.g. 'button')
   */
  type?: 'radio' | 'button'

  /**
   * @description triggers when the bound value changes
   */
  onChange?: ElRadioProps['onChange']
}

export type ElRadioInstance = React.ReactElement<ElRadioProps>
export type ElRadioGroupInstance = React.ReactElement<ElRadioGroupProps>
