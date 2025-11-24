import React from 'react'
import { Link } from 'react-router-dom'
// import { isExternal } from '../../utils/isExternal'
// import { withBase } from '../../utils/withBase'
import { ElIcon } from '@element-plus/components/icon/ElIcon.tsx'

interface LinkItemProps extends React.HTMLAttributes<HTMLElement> {
  href?: string
  noIcon?: boolean
}

const VpLink: React.FC<LinkItemProps> = ({ href, noIcon, children, className, ...rest }) => {
  const isLink = Boolean(href)
  const Tag = isLink ? Link : 'span'

  // const external = isExternal(href)
  const external = false

  const withBase = (path: string) => path

  return (
    <Tag
      className={`link-item ${isLink ? 'link' : ''} ${className ?? ''}`}
      to={withBase(href || '')}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...rest}
    >
      {children}

      {external && !noIcon && (
        <ElIcon style={{ marginLeft: 4 }}>
          {/* <ExternalLinkIcon className="link-icon" /> */}
        </ElIcon>
      )}
    </Tag>
  )
}

export default VpLink
