import ElBadge from 'ayay-element-plus-react/components/badge/ElBadge.tsx'
import ElButton from 'ayay-element-plus-react/components/button/ElButton.tsx'
import styles from './Max.module.scss'

const BadgeMax: React.FC = () => {
  return (
    <>
      <ElBadge value={200} max={99} className={styles['item']}>
        <ElButton>comments</ElButton>
      </ElBadge>
      <ElBadge value={100} max={10} className={styles['item']}>
        <ElButton>replies</ElButton>
      </ElBadge>
    </>
  )
}

export default BadgeMax
