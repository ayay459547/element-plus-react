import clsx from 'clsx'
import styles from './ElAnchor.module.scss'
import type { ElAnchorProps } from './types'

const ElAnchor: React.FC<ElAnchorProps> = ({ className, style, children }) => {
  return (
    <div className={clsx(styles['el-anchor'], className)} style={{ ...style }}>
      {children}
    </div>
  )
}

export default ElAnchor
