import ElIcon from '@ayay/element-plus-react/components/icon/ElIcon.tsx'
import { BrandGithub, Code, Copy, Flask } from '@ricons/tabler'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './VPDemo.module.scss'

type VPDemoProps = {
  className?: string

  children?: ReactNode
}

const VPDemo: React.FC<VPDemoProps> = ({ className, children }) => {
  return (
    <div className={clsx(styles['example'], className)}>
      <div className={styles['example-showcase']}>{children}</div>

      <div style={{ borderTop: '1px var(--el-border-color) var(--el-border-style)' }} />
      {/* <ElDivider></ElDivider> */}

      <div className={styles['op-btns']}>
        <ElIcon className={styles['op-btn']}>
          <Flask />
        </ElIcon>
        <ElIcon className={styles['op-btn']}>
          <BrandGithub />
        </ElIcon>
        <ElIcon className={styles['op-btn']}>
          <Copy />
        </ElIcon>
        <ElIcon className={styles['op-btn']}>
          <Code />
        </ElIcon>
      </div>
    </div>
  )
}

export default VPDemo
