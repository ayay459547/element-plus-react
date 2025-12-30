import { isActive } from '@/utils'
import ElBadge from 'ayay-element-plus-react/components/badge/ElBadge.tsx'
import React from 'react'
import { useLocation } from 'react-router-dom'
import VPLink from '../common/VPLink.tsx'
import styles from './navbar.module.scss'

import type { Link } from '../types.ts'

// const USER_VISITED_NEW_RESOURCE_PAGE = 'USER_VISITED_NEW_RESOURCE_PAGE'

interface VPMenuLinkProps {
  item: Link
}

/** vp-menu-link.vue */
export const VPMenuLink: React.FC<VPMenuLinkProps> = ({ item }) => {
  const isVisited = false

  const isNewPage = (item: Link) => item.activeMatch === '/some_fake_path/'

  const location = useLocation()

  const active = isActive(location.pathname, item.activeMatch)

  return (
    <VPLink
      className={`${styles['is-menu-link']} ${active ? styles['active'] : ''}`}
      href={item.link}
      noIcon
    >
      {isNewPage(item) && !isVisited ? (
        <ElBadge isDot className="badge">
          {item.text}
        </ElBadge>
      ) : (
        item.text
      )}
    </VPLink>
  )
}

export default VPMenuLink
