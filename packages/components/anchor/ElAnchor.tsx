import clsx from 'clsx'
import styles from './ElAnchor.module.scss'
import type { ElAnchorProps } from './types'

const ElAnchor: React.FC<ElAnchorProps> = ({ children, className, style, ...props }) => {
  return (
    <div {...props} className={clsx(styles['el-anchor'], className)} style={{ ...style }}>
      {children}
    </div>
  )
}

export default ElAnchor
