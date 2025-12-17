import clsx from 'clsx'
import type { CSSProperties } from 'react'
import styles from './ElContainer.module.scss'
import type { ElFooterProps } from './types'

const ElFooter: React.FC<ElFooterProps> = ({ height, children, className, style }) => {
  const styleCSSVar: CSSProperties & Record<string, string> = {}
  if (typeof height === 'string') {
    styleCSSVar['--el-footer-height'] = `${height}`
  }

  return (
    <div
      className={clsx('el-footer', styles['el-footer'], className)}
      style={{ ...styleCSSVar, ...style }}
    >
      {children}
    </div>
  )
}

export default ElFooter
