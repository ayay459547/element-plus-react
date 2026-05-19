import type { ReactNode } from 'react'

export type ElTeleportProps = {
  /**
   * 傳送的目標容器
   * 可以是 CSS 選擇器字串 (例如 "body", "#app")
   * 也可以直接是 HTMLElement
   * @default "body"
   */
  appendTo?: string | HTMLElement | null

  /**
   * 是否禁用傳送
   * 如果為 true，內容會渲染在目前的位置（原地渲染）
   * @default false
   */
  disabled?: boolean

  children: ReactNode
}

export type ElTeleportInstance = React.ReactElement<ElTeleportProps>
