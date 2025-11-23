import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  isDot?: boolean
}
export type { BadgeProps }

export const Badge: React.FC<BadgeProps> = ({ isDot, children, className, ...rest }) => {
  return (
    <span className={`badge ${isDot ? 'is-dot' : ''} ${className ?? ''}`} {...rest}>
      {children}
    </span>
  )
}
export default Badge
