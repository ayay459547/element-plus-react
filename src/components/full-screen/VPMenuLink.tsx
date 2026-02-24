// import { isActive } from '@/utils'
import React from 'react'
// import { useLocation } from 'react-router-dom'
import VPLink from '../common/VPLink.tsx'

import type { Link } from '../types.ts'

type VPMenuLinkProps = {
  item: Link
} & React.HTMLAttributes<HTMLElement>

export const VPMenuLink: React.FC<VPMenuLinkProps> = ({ item, ...props }) => {
  // const location = useLocation()
  // const active = isActive(location.pathname, item.activeMatch)

  return (
    <VPLink className="is-menu-link full-screen-menu__item" href={item.link} noIcon {...props}>
      {item.text}
    </VPLink>
  )
}

export default VPMenuLink
