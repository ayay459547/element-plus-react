import { isExternal } from '@/utils'
import { ElIcon } from '@element-plus/components/icon/ElIcon.tsx'
import React from 'react'
import { Link } from 'react-router-dom'

interface LinkItemProps extends React.HTMLAttributes<HTMLElement> {
  href?: string
  noIcon?: boolean
}

const VpLink: React.FC<LinkItemProps> = ({ href, noIcon, children, className, ...rest }) => {
  const isLink = Boolean(href)
  const Tag = isLink ? Link : 'span'

  const external = isExternal(href)

  return (
    <Tag
      className={`link-item ${isLink ? 'link' : ''} ${className ?? ''}`}
      to={href || ''}
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
