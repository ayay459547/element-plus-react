import VPDocContent from '@/components/VPDocContent.tsx'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import PopoverBasic from '@/examples/popover/Basic.tsx'
import PopoverBasic_code from '@/examples/popover/Basic.tsx?raw'

import PopoverPlacement_styles from '@/examples/popover/Placement.scss?raw'
import PopoverPlacement from '@/examples/popover/Placement.tsx'
import PopoverPlacement_code from '@/examples/popover/Placement.tsx?raw'

import PopoverRichContent from '@/examples/popover/RichContent.tsx'
import PopoverRichContent_code from '@/examples/popover/RichContent.tsx?raw'

import PopoverVirtualTrigger from '@/examples/popover/VirtualTrigger.tsx'
import PopoverVirtualTrigger_code from '@/examples/popover/VirtualTrigger.tsx?raw'

import PopoverNestedOperation from '@/examples/popover/NestedOperation.tsx'
import PopoverNestedOperation_code from '@/examples/popover/NestedOperation.tsx?raw'

const PopoverPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="popover">Popover</h1>
      <p>Display prompt information for mouse click/hover.</p>

      <h2 id="placement">Placement</h2>
      <p>Popover has 12 placements.</p>
      <VPDemo
        link="/src/examples/popover/Placement.tsx"
        code={
          <VPCode
            language={['Placement.tsx', 'Placement.scss']}
            code={{
              'Placement.tsx': PopoverPlacement_code,
              'Placement.scss': PopoverPlacement_styles
            }}
          />
        }
      >
        <PopoverPlacement />
      </VPDemo>

      <h2 id="basic-usage">Basic usage</h2>
      <p>Popover is built with <code>ElTooltip</code>.</p>
      <VPDemo
        link="/src/examples/popover/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': PopoverBasic_code
            }}
          />
        }
      >
        <PopoverBasic />
      </VPDemo>

      <h2 id="rich-content">Rich content</h2>
      <p>Other components/elements can be nested in popover.</p>
      <VPDemo
        link="/src/examples/popover/RichContent.tsx"
        code={
          <VPCode
            language={['RichContent.tsx']}
            code={{
              'RichContent.tsx': PopoverRichContent_code
            }}
          />
        }
      >
        <PopoverRichContent />
      </VPDemo>

      <h2 id="nested-operation">Nested operation</h2>
      <p>Of course, you can nest other operations. It's more light-weight than using a dialog.</p>
      <VPDemo
        link="/src/examples/popover/NestedOperation.tsx"
        code={
          <VPCode
            language={['NestedOperation.tsx']}
            code={{
              'NestedOperation.tsx': PopoverNestedOperation_code
            }}
          />
        }
      >
        <PopoverNestedOperation />
      </VPDemo>

      <h2 id="virtual-triggering">Virtual triggering</h2>
      <p>Popover can be triggered by virtual elements.</p>
      <VPDemo
        link="/src/examples/popover/VirtualTrigger.tsx"
        code={
          <VPCode
            language={['VirtualTrigger.tsx']}
            code={{
              'VirtualTrigger.tsx': PopoverVirtualTrigger_code
            }}
          />
        }
      >
        <PopoverVirtualTrigger />
      </VPDemo>
    </VPDocContent>
  )
}

export default PopoverPage
