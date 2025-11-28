import { Link } from 'react-router-dom'
import styles from './VpSidebarLink.module.scss'

type VpSidebarLinkProps = {
  item: {
    text: string
    link: string
  }
}

const VpSidebarLink: React.FC<VpSidebarLinkProps> = ({ item }) => {
  return (
    <Link to={item.link} className={styles['link']}>
      <p className={styles['link-text']}>{item.text}</p>
    </Link>
  )
}

export default VpSidebarLink
