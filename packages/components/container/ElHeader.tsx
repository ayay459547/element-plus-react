import clsx from 'clsx'
import type { CSSProperties } from 'react'
import styles from './ElContainer.module.scss'
import type { ElHeaderProps } from './types'

const ElHeader: React.FC<ElHeaderProps> = ({ height, children, className, style }) => {
  const styleCSSVar: CSSProperties & Record<string, string> = {}
  if (typeof height === 'string') {
    styleCSSVar['--el-header-height'] = `${height}`
  }

  return (
    <div
      className={clsx('el-header', styles['el-header'], className)}
      style={{ ...styleCSSVar, ...style }}
    >
      {children}
    </div>
  )
}

export default ElHeader
