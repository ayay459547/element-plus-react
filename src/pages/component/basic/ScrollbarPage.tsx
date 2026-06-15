import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/scrollbar.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import ScrollbarBasic from '@/examples/scrollbar/Basic.tsx'
import ScrollbarBasic_code from '@/examples/scrollbar/Basic.tsx?raw'

import ScrollbarHorizontal from '@/examples/scrollbar/Horizontal.tsx'
import ScrollbarHorizontal_code from '@/examples/scrollbar/Horizontal.tsx?raw'

const ScrollbarPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="scrollbar">Scrollbar</h1>
      <p>Used to replace the browser's native scrollbar.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>
        Use the <code>height</code> property to set the height of the scrollbar, if not set, it will
        scale according to the parent container.
      </p>
      <VPDemo
        link="/src/examples/scrollbar/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': ScrollbarBasic_code
            }}
          />
        }
      >
        <ScrollbarBasic />
      </VPDemo>

      <h2 id="horizontal-scroll">Horizontal scroll</h2>
      <p>
        When the width of the elements is greater than the width of the scrollbar, the horizontal
        scrollbar will be displayed.
      </p>
      <VPDemo
        link="/src/examples/scrollbar/Horizontal.tsx"
        code={
          <VPCode
            language={['Horizontal.tsx']}
            code={{
              'Horizontal.tsx': ScrollbarHorizontal_code
            }}
          />
        }
      >
        <ScrollbarHorizontal />
      </VPDemo>
    </VPDocContent>
  )
}

export default ScrollbarPage
