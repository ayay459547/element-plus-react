import React from 'react'
// import { useLocalStorage } from 'react-use'
// import { usePlaygroundPreview } from '../../composables/usePlayground'
// import { isActive } from '../../utils/isActive'
import Badge from '@element-plus/components/badge/Badge.tsx'
import VPLink from '../common/VpLink'
import styles from './navbar.module.scss'

import type { Link } from '../types'

// const USER_VISITED_NEW_RESOURCE_PAGE = 'USER_VISITED_NEW_RESOURCE_PAGE'

interface VpMenuLinkProps {
  item: Link
}

/** vp-menu-link.vue */
export const VpMenuLink: React.FC<VpMenuLinkProps> = ({ item }) => {
  // const location = useLocation()
  // const [isVisited, setIsVisited] = useLocalStorage<string | boolean>(
  //   USER_VISITED_NEW_RESOURCE_PAGE,
  //   false
  // )
  const isVisited = false

  // const targetLink = usePlaygroundPreview(item)

  const isNewPage = (item: Link) => item.activeMatch === '/some_fake_path/'

  // const onNavClick = useCallback(
  //   (item: Link) => {
  //     if (isNewPage(item) && !isVisited) {
  //       setIsVisited(Date.now().toString())
  //     }
  //   },
  //   [isVisited, setIsVisited]
  // )

  // const active = isActive(location.pathname, item.activeMatch || item.link, !!item.activeMatch)
  const active = false

  return (
    <VPLink
      className={`${styles['is-menu-link']} ${active ? 'active' : ''}`}
      href={item.link}
      noIcon
      // onClick={() => onNavClick(item)}
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
