import clsx from 'clsx'
import type { CSSProperties } from 'react'
import styles from './ElContainer.module.scss'
import type { ElAsideProps } from './types'

const ElAside: React.FC<ElAsideProps> = ({ width = '300px', children, className, style }) => {
  const styleCSSVar: CSSProperties & Record<string, string> = {}
  if (typeof width === 'string') {
    styleCSSVar['--el-aside-width'] = `${width}`
  }

  return (
    <div
      className={clsx('el-aside', styles['el-aside'], className)}
      style={{ ...styleCSSVar, ...style }}
    >
      {children}
    </div>
  )
}

export default ElAside
