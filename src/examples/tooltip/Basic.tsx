import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import clsx from 'clsx'
import styles from './Basic.module.scss'

const TooltipBasic: React.FC = () => {
  return (
    <div className={styles['tooltip-base-box']}>
      <div className={clsx(styles['row'], styles['center'])}>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Top Left prompts info"
          placement="top-start"
        >
          <ElButton>top-start</ElButton>
        </ElTooltip>

        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Top Center prompts info"
          placement="top"
        >
          <ElButton>top</ElButton>
        </ElTooltip>

        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Top Right prompts info"
          placement="top-end"
        >
          <ElButton>top-end</ElButton>
        </ElTooltip>
      </div>

      <div className={styles['row']}>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Left Top prompts info"
          placement="left-start"
        >
          <ElButton>left-start</ElButton>
        </ElTooltip>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Right Top prompts info"
          placement="right-start"
        >
          <ElButton>right-start</ElButton>
        </ElTooltip>
      </div>

      <div className={styles['row']}>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Left Center prompts info"
          placement="left"
        >
          <ElButton className="mt-3 mb-3">left</ElButton>
        </ElTooltip>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Right Center prompts info"
          placement="right"
        >
          <ElButton className="mt-3 mb-3">right</ElButton>
        </ElTooltip>
      </div>

      <div className={styles['row']}>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Left Bottom prompts info"
          placement="left-end"
        >
          <ElButton>left-end</ElButton>
        </ElTooltip>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Right Bottom prompts info"
          placement="right-end"
        >
          <ElButton>right-end</ElButton>
        </ElTooltip>
      </div>

      <div className={clsx(styles['row'], styles['center'])}>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Bottom Left prompts info"
          placement="bottom-start"
        >
          <ElButton>bottom-start</ElButton>
        </ElTooltip>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Bottom Center prompts info"
          placement="bottom"
        >
          <ElButton>bottom</ElButton>
        </ElTooltip>
        <ElTooltip
          className={styles['box-item']}
          effect="dark"
          content="Bottom Right prompts info"
          placement="bottom-end"
        >
          <ElButton>bottom-end</ElButton>
        </ElTooltip>
      </div>
    </div>
  )
}

export default TooltipBasic
