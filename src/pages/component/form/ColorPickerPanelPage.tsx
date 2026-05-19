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

import ColorPickerPaneBorder from '@/examples/color-picker-pane/Border.tsx'
import ColorPickerPaneBorder_code from '@/examples/color-picker-pane/Border.tsx?raw'

import ColorPickerPaneDisabled from '@/examples/color-picker-pane/Disabled.tsx'
import ColorPickerPaneDisabled_code from '@/examples/color-picker-pane/Disabled.tsx?raw'

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

      <h2 id="border">Border</h2>
      <p>By default the color-picker-panel is bordered but in some case you don't want it.</p>
      <VPDemo
        link="/src/examples/color-picker-pane/Border.tsx"
        code={
          <VPCode
            language={['Border.tsx']}
            code={{
              'Border.tsx': ColorPickerPaneBorder_code
            }}
          />
        }
      >
        <ColorPickerPaneBorder />
      </VPDemo>

      <h2 id="disabled">Disabled</h2>
      <p>
        The <code>disabled</code> attribute determines if the color picker is fully disabled.
      </p>
      <VPDemo
        link="/src/examples/color-picker-pane/Disabled.tsx"
        code={
          <VPCode
            language={['Disabled.tsx']}
            code={{
              'Disabled.tsx': ColorPickerPaneDisabled_code
            }}
          />
        }
      >
        <ColorPickerPaneDisabled />
      </VPDemo>
    </VPDocContent>
  )
}

export default ColorPickerPanelPage
