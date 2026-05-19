import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/color-picker-panel.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import ColorPickerPaneBasic from '@/examples/color-picker-pane/Basic.tsx'
import ColorPickerPaneBasic_code from '@/examples/color-picker-pane/Basic.tsx?raw'

import ColorPickerPaneAlpha from '@/examples/color-picker-pane/Alpha.tsx'
import ColorPickerPaneAlpha_code from '@/examples/color-picker-pane/Alpha.tsx?raw'

import PredefinedColors from '@/examples/color-picker-pane/PredefinedColors.tsx'
import PredefinedColors_code from '@/examples/color-picker-pane/PredefinedColors.tsx?raw'

const ColorPickerPanelPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="color-picker-panel">ColorPickerPanel</h1>
      <p>
        <code>ColorPickerPanel</code> is the core component of <code>ColorPicker</code>.
      </p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>ColorPickerPanel requires a string typed variable to be bound to value.</p>
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

      <h2 id="alpha">Alpha</h2>
      <p>
        ColorPickerPanel supports alpha channel selecting. To activate alpha selecting, just add the{' '}
        <code>showAlpha</code> attribute.
      </p>
      <VPDemo
        link="/src/examples/color-picker-pane/Alpha.tsx"
        code={
          <VPCode
            language={['Alpha.tsx']}
            code={{
              'Alpha.tsx': ColorPickerPaneAlpha_code
            }}
          />
        }
      >
        <ColorPickerPaneAlpha />
      </VPDemo>

      <h2 id="predefined-colors">Predefined colors</h2>
      <p>ColorPickerPanel supports predefined color options</p>
      <VPDemo
        link="/src/examples/color-picker-pane/PredefinedColors.tsx"
        code={
          <VPCode
            language={['PredefinedColors.tsx']}
            code={{
              'PredefinedColors.tsx': PredefinedColors_code
            }}
          />
        }
      >
        <PredefinedColors />
      </VPDemo>
    </VPDocContent>
  )
}

export default ColorPickerPanelPage
