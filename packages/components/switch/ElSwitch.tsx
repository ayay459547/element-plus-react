import { forwardRef } from 'react'
import './ElSwitch.scss'
import type { ElSwitchProps } from './types'

const COMPONENT_NAME = 'ElSwitch'

const ElSwitch: React.FC<ElSwitchProps> = forwardRef<HTMLInputElement, ElSwitchProps>(
  (props, ref) => {
    return (
      <div>
        <input></input>
      </div>
    )
  }
)

ElSwitch.displayName = COMPONENT_NAME

export default ElSwitch
