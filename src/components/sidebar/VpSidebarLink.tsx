import { isActive } from '@/utils'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import styles from './VpSidebarLink.module.scss'

type VpSidebarLinkProps = {
  item: {
    text: string
    link: string
  }
}

const VpSidebarLink: React.FC<VpSidebarLinkProps> = ({ item }) => {
  const location = useLocation()

  const activeLink = isActive(location.pathname, item.link)

  return (
    <Link to={item.link} className={clsx(styles['link'], activeLink ? styles['active'] : '')}>
      <p className={styles['link-text']}>{item.text}</p>
    </Link>
  )
}

export default VpSidebarLink
