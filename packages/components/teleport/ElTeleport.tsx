import type { ElTeleportProps } from './types'

import { useMemo } from 'react'
import { createPortal } from 'react-dom'

const ElTeleport: React.FC<ElTeleportProps> = ({
  to = document.body,
  disabled = false,
  children
}) => {
  const container = useMemo(() => {
    if (disabled) return null

    if (typeof to === 'string') {
      return document.querySelector(to)
    }

    return to ?? null
  }, [to, disabled])

  if (!container) {
    return <>{children}</>
  }

  return createPortal(children, container)
}

export default ElTeleport
