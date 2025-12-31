import ElBadge from '@ayay459547/element-plus-react/components/badge/ElBadge.tsx'
import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import styles from './Basic.module.scss'

const BadgeOffset: React.FC = () => {
  return (
    <ElBadge className={styles['item']} value={1} offset={[10, 5]}>
      <ElButton>offset</ElButton>
    </ElBadge>
  )
}

export default BadgeOffset
