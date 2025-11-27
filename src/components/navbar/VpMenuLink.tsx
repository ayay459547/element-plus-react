import Badge from '@element-plus/components/badge/Badge.tsx'
import React from 'react'
import { useLocation } from 'react-router-dom'
import VPLink from '../common/VpLink'
import styles from './navbar.module.scss'

import type { Link } from '../types'

// const USER_VISITED_NEW_RESOURCE_PAGE = 'USER_VISITED_NEW_RESOURCE_PAGE'

interface VpMenuLinkProps {
  item: Link
}

/** vp-menu-link.vue */
export const VpMenuLink: React.FC<VpMenuLinkProps> = ({ item }) => {
  const isVisited = false

  const isNewPage = (item: Link) => item.activeMatch === '/some_fake_path/'

  const location = useLocation()

  let active = false
  if (typeof location.pathname === 'string' && location.pathname !== '/') {
    active = location.pathname.startsWith(item.activeMatch)
  }

  return (
    <VPLink
      className={`${styles['is-menu-link']} ${active ? styles['active'] : ''}`}
      href={item.link}
      noIcon
    >
      {isNewPage(item) && !isVisited ? (
        <Badge isDot className="badge">
          {item.text}
        </Badge>
      ) : (
        item.text
      )}
    </VPLink>
  )
}

export default VpMenuLink
