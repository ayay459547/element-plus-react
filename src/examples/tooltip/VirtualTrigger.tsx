import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import type { ReferenceType } from '@floating-ui/react'
import { useEffect, useState } from 'react'

const TooltipVirtualTrigger: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const [position, setPosition] = useState<DOMRect>(new DOMRect(0, 0, 0, 0))

  const virtualRef: ReferenceType = {
    getBoundingClientRect: () => position
  }

  useEffect(() => {
    const mousemoveHandler = (e: MouseEvent) => {
      const { clientX, clientY } = e

      setPosition(
        DOMRect.fromRect({
          x: clientX,
          y: clientY
        })
      )
    }

    document.addEventListener('mousemove', mousemoveHandler)

    return () => {
      document.removeEventListener('mousemove', mousemoveHandler)
    }
  }, [visible])

  return (
    <>
      <ElTooltip
        visible={visible}
        content="Bottom center"
        placement="bottom"
        effect="light"
        trigger="click"
        virtualTriggering
        virtualRef={virtualRef}
        onVisible={setVisible}
      />
      <ElButton onClick={() => setVisible((isVisible) => !isVisible)}>test</ElButton>
    </>
  )
}

export default TooltipVirtualTrigger
