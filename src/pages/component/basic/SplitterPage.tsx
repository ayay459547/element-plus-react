import React from 'react'
import VPDocContent from '@/components/VPDocContent.tsx'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'
import markdown from '@/en-US/component/splitter.md?raw'

import Basic from '@/examples/splitter/Basic.tsx'
import Basic_code from '@/examples/splitter/Basic.tsx?raw'

import Vertical from '@/examples/splitter/Vertical.tsx'
import Vertical_code from '@/examples/splitter/Vertical.tsx?raw'

const SplitterPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1 id="splitter">Splitter</h1>
      <p>Splits a view into two or more resizable panels.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>Use <code>ElSplitter</code> and <code>ElSplitterPanel</code> to create resizable views. <code>ElSplitterPanel</code> supports setting initial <code>size</code> (string or number), and constraints like <code>min</code> and <code>max</code>.</p>
      <VPDemo
        link="/src/examples/splitter/Basic.tsx"
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

      <h2 id="vertical-layout">Vertical Layout</h2>
      <p>Set <code>direction="vertical"</code> on <code>ElSplitter</code> to create top/bottom split panels.</p>
      <VPDemo
        link="/src/examples/splitter/Vertical.tsx"
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

    </VPDocContent>
  )
}

export default SplitterPage
