import type { ElTeleportProps } from './types'

import { useMemo } from 'react'
import { createPortal } from 'react-dom'

const ElTeleport: React.FC<ElTeleportProps> = ({
  appendTo = document.body,
  disabled = false,
  children
}) => {
  const container = useMemo(() => {
    if (disabled) return null

    if (typeof appendTo === 'string') {
      return document.querySelector(appendTo)
    }

    return appendTo ?? null
  }, [appendTo, disabled])

  if (!container) {
    return <>{children}</>
  }

  return createPortal(children, container)
}

export default ElTeleport
