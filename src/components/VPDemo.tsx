import ElIcon from '@ayay/element-plus-react/components/icon/ElIcon.tsx'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { TbBrandGithub, TbCode } from 'react-icons/tb'
import styles from './VPDemo.module.scss'

type VPDemoProps = {
  className?: string

  children?: ReactNode

  link?: string

  code?: ReactNode
}

const VPDemo: React.FC<VPDemoProps> = ({ className, children, link, code }) => {
  const [showCode, setShowCode] = useState(false)

  const GithubLink = `https://github.com/ayay459547/element-plus-react/blob/dev${link ?? ''}`
  const openGithubLink = () => {
    if (link) {
      window.open(GithubLink, '_blank')
    }
  }

  const onClickHandler = () => {
    setShowCode((prev) => !prev)
  }

  return (
    <div className={clsx(styles['example'], className)}>
      <div className={styles['example-showcase']}>{children}</div>

      <div style={{ borderTop: '1px var(--el-border-color) var(--el-border-style)' }} />
      {/* <ElDivider></ElDivider> */}

      <div className={styles['op-btns']}>
        <ElIcon className={styles['op-btn']} onClick={openGithubLink}>
          <TbBrandGithub />
        </ElIcon>
        <ElIcon className={styles['op-btn']} onClick={onClickHandler}>
          <TbCode />
        </ElIcon>
      </div>

      {showCode && code && (
        <>
          <div className={styles['example-source-wrapper']}>{code}</div>
          <div
            className={styles['example-float-control']}
            tabIndex={0}
            role="button"
            onClick={() => setShowCode(false)}
          >
            <ElIcon size={16}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path fill="currentColor" d="M512 320 192 704h639.936z"></path>
              </svg>
            </ElIcon>
            <span>Hide source</span>
          </div>
        </>
      )}
    </div>
  )
}

export default VPDemo
