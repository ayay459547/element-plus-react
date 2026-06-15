import VPDocContent from '@/components/VPDocContent.tsx'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import DatePickerPanelBasic from '@/examples/date-picker-panel/Basic.tsx'
import DatePickerPanelBasic_code from '@/examples/date-picker-panel/Basic.tsx?raw'

import DatePickerPanelBorder from '@/examples/date-picker-panel/Border.tsx'
import DatePickerPanelBorder_code from '@/examples/date-picker-panel/Border.tsx?raw'

import DatePickerPanelDisabled from '@/examples/date-picker-panel/Disabled.tsx'
import DatePickerPanelDisabled_code from '@/examples/date-picker-panel/Disabled.tsx?raw'

import DatePickerPanelRange from '@/examples/date-picker-panel/Range.tsx'
import DatePickerPanelRange_code from '@/examples/date-picker-panel/Range.tsx?raw'

const DatePickerPanelPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="date-picker-panel">DatePickerPanel</h1>
      <p>
        <code>DatePickerPanel</code> is the core component of <code>DatePicker</code>.
      </p>

      <h2 id="basic-usage">Basic usage</h2>
      <VPDemo
        link="/src/examples/date-picker-panel/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': DatePickerPanelBasic_code
            }}
          />
        }
      >
        <DatePickerPanelBasic />
      </VPDemo>

      <h2 id="border">Border</h2>
      <VPDemo
        link="/src/examples/date-picker-panel/Border.tsx"
        code={
          <VPCode
            language={['Border.tsx']}
            code={{
              'Border.tsx': DatePickerPanelBorder_code
            }}
          />
        }
      >
        <DatePickerPanelBorder />
      </VPDemo>

      <h2 id="disabled">Disabled</h2>
      <VPDemo
        link="/src/examples/date-picker-panel/Disabled.tsx"
        code={
          <VPCode
            language={['Disabled.tsx']}
            code={{
              'Disabled.tsx': DatePickerPanelDisabled_code
            }}
          />
        }
      >
        <DatePickerPanelDisabled />
      </VPDemo>

      <h2 id="range">Range Selection</h2>
      <VPDemo
        link="/src/examples/date-picker-panel/Range.tsx"
        code={
          <VPCode
            language={['Range.tsx']}
            code={{
              'Range.tsx': DatePickerPanelRange_code
            }}
          />
        }
      >
        <DatePickerPanelRange />
      </VPDemo>
    </VPDocContent>
  )
}

export default DatePickerPanelPage
