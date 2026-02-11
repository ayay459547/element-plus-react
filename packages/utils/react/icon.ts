import CircleCheck from '@ayay459547/element-plus-react/icons-svg/circle-check.svg?react'
import CircleCloseFilled from '@ayay459547/element-plus-react/icons-svg/circle-close-filled.svg?react'
import CircleClose from '@ayay459547/element-plus-react/icons-svg/circle-close.svg?react'
import Close from '@ayay459547/element-plus-react/icons-svg/close.svg?react'
import InfoFilled from '@ayay459547/element-plus-react/icons-svg/info-filled.svg?react'
import Loading from '@ayay459547/element-plus-react/icons-svg/loading.svg?react'
import SuccessFilled from '@ayay459547/element-plus-react/icons-svg/success-filled.svg?react'
import WarningFilled from '@ayay459547/element-plus-react/icons-svg/warning-filled.svg?react'

// import { definePropType } from './props'

import type { ReactNode } from 'react'

export type IconPropType = string | ReactNode

// export const iconPropType = definePropType<string | ReactNode>([
//   String,
//   Object,
//   Function,
// ])

export const CloseComponents = {
  Close
}

export const TypeComponents = {
  Close,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled
}

export const TypeComponentsMap = {
  primary: InfoFilled,
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled
}

export const ValidateComponentsMap = {
  validating: Loading,
  success: CircleCheck,
  error: CircleClose
}

// All icon components have the same type, so we can pick any one of them to get the type
export type IconComponent = typeof Loading
