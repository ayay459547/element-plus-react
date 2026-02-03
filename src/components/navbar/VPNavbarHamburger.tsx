import clsx from 'clsx'

interface VPNavbarHamburgerProps {
  active: boolean
  className: string
  onClick: () => void
}

const VPNavbarHamburger: React.FC<VPNavbarHamburgerProps> = ({ active, className, onClick }) => {
  return (
    <button
      className={clsx('reset-btn', 'menu-hamburger', active ? 'active' : '', className)}
      aria-label="en"
      aria-expanded={active}
      aria-controls="full-screen"
      onClick={onClick}
    >
      <span className="hamburger-1" />
      <span className="hamburger-2" />
      <span className="hamburger-3" />
    </button>
  )
}

export default VPNavbarHamburger
