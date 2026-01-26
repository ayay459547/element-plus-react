import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import { useState } from 'react'
import './Singleton.scss'

const TooltipSingleton: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const [buttonRef, setButtonRef] = useState<HTMLElement | null>(null)

  return (
    <>
      <div>
        {Array.from({ length: 3 }).map((_, i) => (
          <ElButton
            key={i}
            onMouseOver={(e: any) => {
              setButtonRef(e.currentTarget)
            }}
            onClick={() => {
              setVisible((v) => !v)
            }}
          >
            Click to open tooltip
          </ElButton>
        ))}
      </div>
      <ElTooltip
        visible={visible}
        placement="bottom"
        virtualTriggering
        virtualRef={buttonRef}
        onVisible={setVisible}
        popperClass="singleton-tooltip"
        content={<span> Some content </span>}
      />
    </>
  )
}

export default TooltipSingleton
