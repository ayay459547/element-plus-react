import clsx from 'clsx'
import styles from './ElContainer.module.scss'
import type { ElMainProps } from './types'

const ElMain: React.FC<ElMainProps> = ({ children, className, style }) => {
  return (
    <div className={clsx('el-main', styles['el-main'], className)} style={style}>
      {children}
    </div>
  )
}

export default ElMain
