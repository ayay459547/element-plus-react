import ElLink from 'ayay-element-plus-react/components/link/ElLink.tsx'
import styles from './Basic.module.scss'

const LinkUnderline: React.FC = () => {
  return (
    <div>
      <ElLink className={styles['el-link']}>default</ElLink>
      <ElLink className={styles['el-link']} underline="always">
        always
      </ElLink>
      <ElLink className={styles['el-link']} underline="hover">
        hover
      </ElLink>
      <ElLink className={styles['el-link']} underline="never">
        never
      </ElLink>
    </div>
  )
}

export default LinkUnderline
