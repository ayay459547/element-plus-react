import React from 'react'
import VPDocContent from '@/components/VPDocContent.tsx'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'
import markdown from '@/en-US/component/space.md?raw'

import Basic from '@/examples/space/Basic.tsx'
import Basic_code from '@/examples/space/Basic.tsx?raw'

import Vertical from '@/examples/space/Vertical.tsx'
import Vertical_code from '@/examples/space/Vertical.tsx?raw'

import Size from '@/examples/space/Size.tsx'
import Size_code from '@/examples/space/Size.tsx?raw'

import Alignment from '@/examples/space/Alignment.tsx'
import Alignment_code from '@/examples/space/Alignment.tsx?raw'

import Spacer from '@/examples/space/Spacer.tsx'
import Spacer_code from '@/examples/space/Spacer.tsx?raw'

import Fill from '@/examples/space/Fill.tsx'
import Fill_code from '@/examples/space/Fill.tsx?raw'

const SpacePage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1 id="space">Space</h1>
      <p>Provides empty space.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>The basic use case is placing components closely, you can also use it to manage flex layouts.</p>
      <VPDemo
        link="/src/examples/space/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': Basic_code
            }}
          />
        }
      >
        <Basic />
      </VPDemo>

      <h2 id="vertical-layout">Vertical layout</h2>
      <p>Use <code>direction="vertical"</code> to place items vertically.</p>
      <VPDemo
        link="/src/examples/space/Vertical.tsx"
        code={
          <VPCode
            language={['Vertical.tsx']}
            code={{
              'Vertical.tsx': Vertical_code
            }}
          />
        }
      >
        <Vertical />
      </VPDemo>

      <h2 id="control-the-size-of-the-space">Control the size of the space</h2>
      <p>You can use the <code>size</code> property to set the spacing size.</p>
      <VPDemo
        link="/src/examples/space/Size.tsx"
        code={
          <VPCode
            language={['Size.tsx']}
            code={{
              'Size.tsx': Size_code
            }}
          />
        }
      >
        <Size />
      </VPDemo>

      <h2 id="custom-size">Custom size and alignment</h2>
      <p>You can also control the alignment of items.</p>
      <VPDemo
        link="/src/examples/space/Alignment.tsx"
        code={
          <VPCode
            language={['Alignment.tsx']}
            code={{
              'Alignment.tsx': Alignment_code
            }}
          />
        }
      >
        <Alignment />
      </VPDemo>

      <h2 id="custom-spacer">Custom Spacer</h2>
      <p>You can use the <code>spacer</code> property to set a custom spacer.</p>
      <VPDemo
        link="/src/examples/space/Spacer.tsx"
        code={
          <VPCode
            language={['Spacer.tsx']}
            code={{
              'Spacer.tsx': Spacer_code
            }}
          />
        }
      >
        <Spacer />
      </VPDemo>

      <h2 id="fill-container">Fill Container</h2>
      <p>By setting the <code>fill</code> property, the items will automatically fill the container. <code>fillRatio</code> controls the minimum width of the items as a percentage of the container's width.</p>
      <VPDemo
        link="/src/examples/space/Fill.tsx"
        code={
          <VPCode
            language={['Fill.tsx']}
            code={{
              'Fill.tsx': Fill_code
            }}
          />
        }
      >
        <Fill />
      </VPDemo>

    </VPDocContent>
  )
}

export default SpacePage
