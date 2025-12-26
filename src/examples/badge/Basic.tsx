import ElBadge from '@ayay/element-plus-react/components/badge/ElBadge.tsx'
import ElButton from '@ayay/element-plus-react/components/button/ElButton.tsx'
import styles from './Basic.module.scss'

const BadgeBasic: React.FC = () => {
  return (
    <>
      <ElBadge value={12} className={styles['item']}>
        <ElButton>comments</ElButton>
      </ElBadge>
      <ElBadge value={3} className={styles['item']}>
        <ElButton>replies</ElButton>
      </ElBadge>
      <ElBadge value={1} className={styles['item']} type="primary">
        <ElButton>comments</ElButton>
      </ElBadge>
      <ElBadge value={2} className={styles['item']} type="warning">
        <ElButton>replies</ElButton>
      </ElBadge>
      <ElBadge value={1} className={styles['item']} color="green">
        <ElButton>custom background</ElButton>
      </ElBadge>
    </>
  )
}

export default BadgeBasic
