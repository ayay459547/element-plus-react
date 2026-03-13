import type { CSSProperties, ChangeEventHandler, FocusEventHandler, InputEventHandler } from 'react'

export interface ElSwitchProps {
  className?: string
  style?: CSSProperties

  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: FocusEventHandler<HTMLInputElement>
  onInput?: InputEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export type ElSwitchInstance = React.ReactElement<ElSwitchProps>
