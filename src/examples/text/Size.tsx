import ElText from '@ayay459547/element-plus-react/components/text/ElText.tsx'
import styles from './TextBasic.module.scss'

const TextSize: React.FC = () => {
  return (
    <>
      <ElText className={styles['mx-1']} size="large">
        Large
      </ElText>
      <ElText className={styles['mx-1']}>Default</ElText>
      <ElText className={styles['mx-1']} size="small">
        Small
      </ElText>
    </>
  )
}

export default TextSize
