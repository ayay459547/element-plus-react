import type { ChangeEventHandler, CSSProperties, ReactNode } from 'react'

interface CommonProps {
  /**
   * @description customize default content
   */
  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export interface ElCheckboxProps extends CommonProps {
  /**
   * @description value of the Checkbox when used inside a checkbox-group
   */
  value?: string | number

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
  tabIndex?: string | number

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
   * @description triggers when the binding value changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type ElCheckboxInstance = React.ReactElement<ElCheckboxProps>

export type CheckboxOptionProps = {
  value?: string
  label?: string
  disabled?: string
}

export interface ElCheckboxGroupBaseProps extends CommonProps {
  /**
   * @description binding value
   */
  value?: Array<string | number>

  /**
   * @description size of checkbox
   */
  size?: ElCheckboxProps['size']

  /**
   * @description whether the nesting checkboxes are disabled
   */
  disabled?: ElCheckboxProps['disabled']

  /**
   * @description minimum number of checkbox checked
   */
  min?: number

  /**
   * @description maximum number of checkbox checked
   */
  max?: number

  /**
   * @description native aria-label attribute
   */
  ariaLabel?: string

  /**
   * @description font color when button is active
   */
  textColor?: string

  /**
   * @description border and background color when button is active
   */
  fill?: string

  /**
   * @description whether to trigger form validation
   */
  validateEvent?: ElCheckboxProps['validateEvent']

  /**
   * @description data of the options, the key of value and label and disabled can be customize by props
   */
  options?: Array<Partial<ElCheckboxProps> & Record<string, any>>

  /**
   * @description configuration options
   */
  props?: CheckboxOptionProps

  /**
   * @description component type to render options (e.g. 'button')
   */
  type?: 'checkbox' | 'button'

  /**
   * @description triggers when the binding value changes
   */
  onChange?: (newValue: ElCheckboxGroupProps['value']) => void
}

// T = tag 元素，例如 'div' | 'a'
export type ElCheckboxGroupProps<T extends React.ElementType = 'div'> = ElCheckboxGroupBaseProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ElCheckboxGroupBaseProps> & {
    /**
     * @description custom element tag
     */
    tag?: T
  }

export type ElCheckboxGroupInstance = React.ReactElement<ElCheckboxGroupProps>
