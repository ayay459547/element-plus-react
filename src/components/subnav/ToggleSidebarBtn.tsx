import ToggleButton from '@/components/icons/ToggleButton.tsx'
import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import clsx from 'clsx'
import styles from './ToggleSidebarBtn.module.scss'

interface ToggleSidebarBtnProps {
  onClick: () => void
}

const ToggleSidebarBtn: React.FC<ToggleSidebarBtnProps> = ({ onClick }) => {
  return (
    <button
      className={clsx('reset-btn sidebar-button flex items-center', styles['sidebar-button'])}
      onClick={onClick}
    >
      <ElIcon size="20" className={clsx('mr-2', styles['icon'])}>
        <ToggleButton />
      </ElIcon>
      <span className="leading-6">Menu</span>
    </button>
  )
}

export default ToggleSidebarBtn
