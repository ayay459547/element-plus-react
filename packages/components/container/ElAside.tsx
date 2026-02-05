import clsx from 'clsx'
import type { CSSProperties } from 'react'
import { forwardRef } from 'react'
import styles from './ElContainer.module.scss'
import type { ElAsideProps } from './types'

const COMPONENT_NAME = 'ElAside'

const ElAside: React.FC<ElAsideProps> = forwardRef<HTMLDivElement, ElAsideProps>(
  ({ width = '300px', children, className, style, ...props }, ref) => {
    const styleCSSVar: CSSProperties & Record<string, string> = {}
    if (typeof width === 'string') {
      styleCSSVar['--el-aside-width'] = `${width}`
    }

    return (
      <div
        {...props}
        ref={ref}
        className={clsx('el-aside', styles['el-aside'], className)}
        style={{ ...styleCSSVar, ...style }}
      >
        {children}
      </div>
    )
  }
)

ElAside.displayName = COMPONENT_NAME

export default ElAside
