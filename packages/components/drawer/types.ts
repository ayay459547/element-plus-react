import type { CSSProperties, ReactNode } from 'react'

export type TransferKey = string | number

export type TransferDirection = 'left' | 'right'

export interface ElDrawerProps {
  /**
   * @description Should Drawer be displayed
   */
  visible?: boolean
  onVisible?: (value: boolean) => void

  /**
   * @description Controls should Drawer be inserted to DocumentBody Element, nested Drawer must assign this param to true
   */
  appendToBody?: boolean

  /**
   * @description which element the Drawer appends to. Will override appendToBody
   */
  appendTo?: string | HTMLElement | null

  /**
   * @description whether scroll of body is disabled while Drawer is displayed
   */
  lockScroll?: boolean

  /**
   * @description 	If set, closing procedure will be halted
   */
  beforeClose?: (done: (cancel?: boolean) => void) => void

  /**
   * @description whether the Drawer can be closed by clicking the mask
   */
  closeOnClickModal?: boolean

  /**
   * @description Indicates whether Drawer can be closed by pressing ESC
   */
  closeOnPressEscape?: boolean

  /**
   * @description Time(milliseconds) before open
   */
  openDelay?: number

  /**
   * @description Time(milliseconds) before close
   */
  closeDelay?: number

  /**
   * @description Indicates whether children should be destroyed after Drawer closed
   */
  destroyOnClose?: boolean

  /**
   * @description Should show shadowing layer
   */
  modal?: boolean

  /**
   * @description whether the mask is penetrable. The modal attribute must be false.
   */
  modalPenetrable?: boolean

  /**
   * @description Drawer's opening direction
   */
  direction?: string | 'rtl' | 'ltr' | 'ttb' | 'btt'

  /**
   * @description enable resizable feature for Drawer
   */
  resizable?: boolean

  /**
   * @description Should show close button at the top right of Drawer
   */
  showClose?: boolean

  /**
   * @description Drawer's size
   */
  size?: number | string

  /**
   * @description Drawer's title, can also be set by named slot, detailed descriptions can be found in the slot form
   */
  title?: string

  /**
   * @description Flag that controls the header section's existence, default to true, when withHeader set to false, both title attribute and title slot won't work
   */
  withHeader?: boolean

  /**
   * @description Extra class names for shadowing layer
   */
  modalClass?: string

  /**
   * @description custom class names for header wrapper
   */
  headerClass?: string

  /**
   * @description custom class names for body wrapper
   */
  bodyClass?: string

  /**
   * @description custom class names for footer wrapper
   */
  footerClass?: string

  /**
   * @description set z-index
   */
  zIndex?: number

  /**
   * @description header's aria-level attribute
   */
  headerAriaLevel?: string

  /**
   * @description Drawer header section; Replacing this removes the title, but does not remove the close button.
   */
  header?: ReactNode

  /**
   * @description Drawer footer Section
   */
  footer?: ReactNode

  children?: ReactNode

  className?: string
  style?: CSSProperties
}

export type ElAlertInstance = React.ReactElement<ElDrawerProps>
