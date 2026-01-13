import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/tooltip.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import TooltipBasic_styles from '@/examples/tooltip/Basic.module.scss?raw'
import TooltipBasic from '@/examples/tooltip/Basic.tsx'
import TooltipBasic_code from '@/examples/tooltip/Basic.tsx?raw'

const TooltipPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="tooltip">Tooltip</h1>
      <p>Display prompt information for mouse hover.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>Tooltip has 9 placements.</p>
      <p>
        Use attribute <code>content</code> to set the display content when hover. The attribute{' '}
        <code>placement</code> determines the position of the tooltip. Its value is{' '}
        <code>[orientation]-[alignment]</code> with four orientations <code>top</code>,{' '}
        <code>left</code>, <code>right</code>, <code>bottom</code> and three alignments{' '}
        <code>start</code>, <code>end</code>, <code>null</code>, and the default alignment is null.
        Take <code>placement="left-end"</code> for example, Tooltip will display on the left of the
        element which you are hovering and the bottom of the tooltip aligns with the bottom of the
        element.
      </p>

      <VPDemo
        link="/src/examples/link/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx', 'Basic.module.scss']}
            code={{
              'Basic.tsx': TooltipBasic_code,
              'Basic.module.scss': TooltipBasic_styles
            }}
          />
        }
      >
        <TooltipBasic />
      </VPDemo>
    </VPDocContent>
  )
}

export default TooltipPage
