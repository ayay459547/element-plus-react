import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface ElAlertProps {
  /**
   * @description alert title.
   */
  title?: ReactNode | string
  /**
   * @description	alert type.
   */
  type?: 'primary' | 'success' | 'warning' | 'info' | 'error'
  /**
   * @description descriptive text.
   */
  description?: string
  /**
   * @description whether alert can be dismissed.
   */
  closable?: boolean
  /**
   * @description whether content is placed in the center.
   */
  center?: boolean
  /**
   * @description customized close button text.
   */
  closeText?: string
  /**
   * @description whether a type icon is displayed.
   */
  showIcon?: boolean
  /**
   * @description content of the alert icon.
   */
  icon?: ReactNode
  /**
   * @description theme style.
   */
  effect?: 'light' | 'dark'

  /**
   * @description trigger when alert is closed.
   */
  onClose?: MouseEventHandler<HTMLElement | HTMLDivElement>

  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export type ElAlertInstance = React.ReactElement<ElAlertProps>
