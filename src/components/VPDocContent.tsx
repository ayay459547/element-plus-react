import styles from './VPDocContent.module.scss'

interface VPDocContentProps {
  fullScreen: boolean
  onToggle?: () => void
}

const VPDocContent: React.FC<VPDocContentProps> = () => {
  return (
    <div className={styles['doc-content-wrapper']}>
      <div className={styles['doc-content-container']}>
        <div className={styles['doc-content']}></div>
      </div>
    </div>
  )
}

export default VPDocContent
