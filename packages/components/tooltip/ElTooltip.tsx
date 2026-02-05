import ElPopper from '@ayay459547/element-plus-react/components/popper/ElPopper.tsx'

import './ElTooltip.scss'
import ElTooltipContent from './ElTooltipContent.tsx'
import ElTooltipTrigger from './ElTooltipTrigger.tsx'
import type { ElTooltipProps } from './types'

const ElTooltip: React.FC<ElTooltipProps> = ({
  appendTo = document.body,
  effect = 'dark',
  content,
  rawContent = false,
  placement = 'bottom',
  fallbackPlacements,
  visible,
  onVisible,
  disabled = false,
  offset = 12,
  transition,
  showArrow = true,
  popperClass,
  popperStyle,
  enterable = true,
  teleported = true,
  trigger = 'hover',
  virtualTriggering = false,
  virtualRef,
  children
}) => {
  const isInnerHTML = rawContent && typeof content === 'string'

  return (
    <ElPopper
      appendTo={appendTo}
      effect={effect}
      rawContent={rawContent}
      placement={placement}
      fallbackPlacements={fallbackPlacements}
      visible={visible}
      onVisible={onVisible}
      disabled={disabled}
      offset={offset}
      transition={transition}
      showArrow={showArrow}
      popperClass={popperClass}
      popperStyle={popperStyle}
      enterable={enterable}
      teleported={teleported}
      trigger={trigger}
      virtualTriggering={virtualTriggering}
      virtualRef={virtualRef}
    >
      <ElTooltipTrigger>{children}</ElTooltipTrigger>
      <ElTooltipContent>
        {isInnerHTML && <div dangerouslySetInnerHTML={{ __html: content }} />}
        {!isInnerHTML && (typeof content === 'string' ? <span>{content}</span> : content)}
      </ElTooltipContent>
    </ElPopper>
  )
}

export default ElTooltip
