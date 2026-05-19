import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/color-picker-panel.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import ColorPickerPaneBasic from '@/examples/color-picker-pane/Basic.tsx'
import ColorPickerPaneBasic_code from '@/examples/color-picker-pane/Basic.tsx?raw'

const ColorPickerPanelPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="color-picker-panel">ColorPickerPanel</h1>
      <p>
        <code>ColorPickerPanel</code> is the core component of <code>ColorPicker</code>.
      </p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>ColorPickerPanel requires a string typed variable to be bound to v-model.</p>
      <VPDemo
        link="/src/examples/color-picker-pane/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': ColorPickerPaneBasic_code
            }}
          />
        }
      >
        <ColorPickerPaneBasic />
      </VPDemo>
    </VPDocContent>
  )
}

export default ColorPickerPanelPage
