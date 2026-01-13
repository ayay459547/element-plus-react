import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import styles from './Basic.module.scss'

const TooltipBasic: React.FC = () => {
  return (
    <div className={styles['tooltip-base-box']}>
      <ElTooltip content="Top Left prompts info">
        <ElButton>top-start</ElButton>
      </ElTooltip>

      <ElTooltip content="Top Left prompts info">
        <ElButton>top-start</ElButton>
      </ElTooltip>
    </div>
  )
}

export default TooltipBasic
