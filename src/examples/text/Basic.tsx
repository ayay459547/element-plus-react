import ElText from '@ayay/element-plus-react/components/text/ElText.tsx'
import styles from './TextBasic.module.scss'

const TextBasic: React.FC = () => {
  return (
    <>
      <ElText className={styles['mx-1']}>Default</ElText>
      <ElText className={styles['mx-1']} type="primary">
        Primary
      </ElText>
      <ElText className={styles['mx-1']} type="success">
        Success
      </ElText>
      <ElText className={styles['mx-1']} type="info">
        Info
      </ElText>
      <ElText className={styles['mx-1']} type="warning">
        Warning
      </ElText>
      <ElText className={styles['mx-1']} type="danger">
        Danger
      </ElText>
    </>
  )
}

export default TextBasic
