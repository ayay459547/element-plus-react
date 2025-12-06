import type { ReactNode } from 'react'

type VPDemoProps = {
  title?: string

  children?: ReactNode

  className?: string
}

const VPDemo: React.FC<VPDemoProps> = ({ title, children, className }) => {
  return (
    <div className={className}>
      {title && <h1>{title}</h1>}
      {children}
    </div>
  )
}

export default VPDemo
