import { isActive } from '@/utils'
import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'
import styles from './VPSidebarLink.module.scss'

type VPSidebarLinkProps = {
  item: {
    text: string
    link: string
  }
}

const VPSidebarLink: React.FC<VPSidebarLinkProps> = ({ item }) => {
  const location = useLocation()

  const activeLink = isActive(location.pathname, item.link)

  return (
    <Link to={item.link} className={clsx(styles['link'], activeLink ? styles['active'] : '')}>
      <p className={styles['link-text']}>{item.text}</p>
    </Link>
  )
}

export default VPSidebarLink
