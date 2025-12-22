import type { ChangeEventHandler, CSSProperties, ReactNode } from 'react'

export interface ElCheckboxProps {
  /**
   * @description value of the Checkbox when used inside a checkbox-group
   */
  value?: string | number | boolean

  /**
   * @description label of the Checkbox when used inside a checkbox-group. If there's no value, label will act as value
   */
  label?: string | number | boolean

  /**
   * @description value of the Checkbox if it's checked
   */
  trueValue?: string | number

  /**
   * @description value of the Checkbox if it's not checked
   */
  falseValue?: string | number

  /**
   * @description whether the Checkbox is disabled
   */
  disabled?: boolean

  /**
   * @description whether to add a border around Checkbox
   */
  border?: boolean

  /**
   * @description size of the Checkbox
   */
  size?: 'large' | 'default' | 'small'

  /**
   * @description native 'name' attribute
   */
  name?: string

  /**
   * @description if the Checkbox is checked
   */
  checked?: boolean

  /**
   * @description Set indeterminate state, only responsible for style control
   */
  indeterminate?: boolean

  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean

  /**
   * @description input tabindex
   */
  tabindex?: string | number

  /**
   * @description input id
   */
  id?: string

  /**
   * @description same as aria-controls, takes effect when indeterminate is true
   */
  ariaControls?: string

  /**
   * @description native aria-label attribute
   */
  ariaLabel?: string

  /**
   * @description customize default content
   */
  children?: ReactNode

  className?: string
  style?: CSSProperties

  /**
   * @description triggers when the binding value changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type ElCheckboxInstance = React.ReactElement<ElCheckboxProps>
