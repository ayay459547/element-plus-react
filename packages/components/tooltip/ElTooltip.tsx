// import ElPopper from '@ayay459547/element-plus-react/components/popper/ElPopper.tsx'
import ElTooltipContent from './ElTooltipContent.tsx'
// import ElTooltipTrigger from './ElTooltipTrigger.tsx'
// import ElPopperArrow from '@ayay459547/element-plus-react/components/popper/ElPopperArrow.tsx'
import type { ElTooltipProps } from './types'

import { useFloating, useHover, useInteractions } from '@floating-ui/react'
import { useState } from 'react'
// import { usePopper } from 'react-popper'

const ElTooltip: React.FC<ElTooltipProps> = ({ children, content }) => {
  // const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null)
  // const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  // const { styles, attributes } = usePopper(referenceElement, popperElement)

  const [isOpen, setIsOpen] = useState(false)
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen
  })
  const hover = useHover(context)
  const { getReferenceProps, getFloatingProps } = useInteractions([hover])

  return (
    <>
      <span
        ref={(element) => refs.setReference(element)}
        {...getReferenceProps()}
        style={{ display: 'inline-block' }}
      >
        {children}
      </span>

      {isOpen && (
        <ElTooltipContent>
          <div
            ref={(element) => refs.setFloating(element)}
            style={{
              ...floatingStyles,
              backgroundColor: '#333', // 範例樣式
              color: '#fff',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px'
            }}
            {...getFloatingProps()}
          >
            {content}
          </div>
        </ElTooltipContent>
      )}
    </>
  )

  // return (
  //   <ElPopper>
  //     <ElTooltipTrigger>{children}</ElTooltipTrigger>
  //     <ElTooltipContent>
  //       {showArrow && <ElPopperArrow />}
  //       {content}
  //     </ElTooltipContent>
  //   </ElPopper>
  // )
}

export default ElTooltip
