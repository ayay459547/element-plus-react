import type { Link as ItemLink } from '@/types'
import { isActive } from '@/utils'
import ElTag from '@ayay459547/element-plus-react/components/tag/ElTag.tsx'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import styles from './VPSidebarLink.module.scss'

type VPSidebarLinkProps = {
  item: ItemLink

  onClick: () => void
}

const VPSidebarLink: React.FC<VPSidebarLinkProps> = ({ item, onClick }) => {
  const location = useLocation()

  const activeLink = isActive(location.pathname, item.link)

  return (
    <Link
      to={item.link}
      className={clsx(styles['link'], 'flex items-center', activeLink ? styles['active'] : '')}
      onClick={() => onClick()}
    >
      <p className={styles['link-text']}>{item.text}</p>
      {item?.promotion && (
        <ElTag effect="plain" round>
          {item?.promotion}
        </ElTag>
      )}
    </Link>
  )
}

export default VPSidebarLink
