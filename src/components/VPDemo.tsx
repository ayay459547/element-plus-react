import ElIcon from '@ayay/element-plus-react/components/icon/ElIcon.tsx'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { TbBrandGithub, TbCode, TbCopy, TbFlask } from 'react-icons/tb'
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
          <TbFlask />
        </ElIcon>
        <ElIcon className={styles['op-btn']}>
          <TbBrandGithub />
        </ElIcon>
        <ElIcon className={styles['op-btn']}>
          <TbCopy />
        </ElIcon>
        <ElIcon className={styles['op-btn']}>
          <TbCode />
        </ElIcon>
      </div>
    </div>
  )
}

export default VPDemo
