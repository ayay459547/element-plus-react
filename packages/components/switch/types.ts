import type { CSSProperties, FocusEventHandler, InputEventHandler, ReactNode } from 'react'

export type SwitchSize = 'large' | 'default' | 'small'

export interface ElSwitchProps {
  /**
   * @description binding value, it should be equivalent to either activeValue or inactiveValue
   * @default false
   */
  value?: boolean | string | number

  /**
   * @description whether Switch is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * @description whether Switch is in loading state
   * @default false
   */
  loading?: boolean

  /**
   * @description size of Switch
   * @default ''
   */
  size?: SwitchSize

  /**
   * @description width of Switch
   * @default ''
   */
  width?: string | number

  /**
   * @description whether icon or text is displayed inside dot, only the first character will be rendered for text
   * @default false
   */
  inlinePrompt?: boolean

  /**
   * @description component of the icon displayed when in on state, overrides activeText
   */
  activeIcon?: string | ReactNode

  /**
   * @description component of the icon displayed when in off state, overrides inactiveText
   */
  inactiveIcon?: string | ReactNode

  /**
   * @description component of the icon displayed in action when in on state
   * @since 2.3.9
   */
  activeActionIcon?: string | ReactNode

  /**
   * @description component of the icon displayed in action when in off state
   * @since 2.3.9
   */
  inactiveActionIcon?: string | ReactNode

  /**
   * @description text displayed when in on state
   * @default ''
   */
  activeText?: string

  /**
   * @description text displayed when in off state
   * @default ''
   */
  inactiveText?: string

  /**
   * @description switch value when in on state
   * @default true
   */
  activeValue?: boolean | string | number

  /**
   * @description switch value when in off state
   * @default false
   */
  inactiveValue?: boolean | string | number

  /**
   * @description input name of Switch
   * @default ''
   */
  name?: string

  /**
   * @description whether to trigger form validation
   * @default true
   */
  validateEvent?: boolean

  /**
   * @description before-change hook before the switch state changes. If false is returned or a Promise is returned and then is rejected, will stop switching
   */
  beforeChange?: (val: boolean | string | number) => boolean | Promise<boolean>

  /**
   * @description id for input
   */
  id?: string

  /**
   * @description tabindex for input
   */
  tabIndex?: string | number

  /**
   * @description aria-label for accessibility
   * @since 2.7.2
   */
  ariaLabel?: string

  /**
   * @deprecated use CSS var --el-switch-on-color instead
   */
  activeColor?: string

  /**
   * @deprecated use CSS var --el-switch-off-color instead
   */
  inactiveColor?: string

  /**
   * @deprecated use CSS var --el-switch-border-color instead
   */
  borderColor?: string

  className?: string
  style?: CSSProperties

  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onInput?: InputEventHandler<HTMLInputElement>
  // onChange?: ChangeEventHandler<HTMLInputElement>
  onChange?: (checked: ElSwitchProps['value']) => void
}

export type ElSwitchInstance = React.ReactElement<ElSwitchProps>
