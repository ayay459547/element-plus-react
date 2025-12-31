import VPDemo from '@/components/VPDemo.tsx'
import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/container.md?raw'
import VPCode from '@/components/common/VPCode.tsx'

import CommonLayout_styles from '@/examples/container/common-layout.module.scss?raw'

import LayoutAHM from '@/examples/container/LayoutAHM.tsx'
import LayoutAHM_code from '@/examples/container/LayoutAHM.tsx?raw'

import LayoutAHMF from '@/examples/container/LayoutAHMF.tsx'
import LayoutAHMF_code from '@/examples/container/LayoutAHMF.tsx?raw'

import LayoutAM from '@/examples/container/LayoutAM.tsx'
import LayoutAM_code from '@/examples/container/LayoutAM.tsx?raw'

import LayoutHAM from '@/examples/container/LayoutHAM.tsx'
import LayoutHAM_code from '@/examples/container/LayoutHAM.tsx?raw'

import LayoutHAMF from '@/examples/container/LayoutHAMF.tsx'
import LayoutHAMF_code from '@/examples/container/LayoutHAMF.tsx?raw'

import LayoutHM from '@/examples/container/LayoutHM.tsx'
import LayoutHM_code from '@/examples/container/LayoutHM.tsx?raw'

import LayoutHMF from '@/examples/container/LayoutHMF.tsx'
import LayoutHMF_code from '@/examples/container/LayoutHMF.tsx?raw'

const ContainerPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="container">Container</h1>
      <p>Container components for scaffolding basic structure of the page:</p>
      <p>
        <code>&lt;el-container&gt;</code>: wrapper container. When nested with a{' '}
        <code>&lt;el-header&gt;</code> or <code>&lt;el-footer&gt;</code>, all its child elements
        will be vertically arranged. Otherwise horizontally.
      </p>
      <p>
        <code>&lt;el-header&gt;</code>: container for headers.
      </p>
      <p>
        <code>&lt;el-aside&gt;</code>: container for side sections (usually a side nav).
      </p>
      <p>
        <code>&lt;el-main&gt;</code>: container for main sections.
      </p>
      <p>
        <code>&lt;el-footer&gt;</code>: container for footers.
      </p>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          These components use flex for layout, so please make sure your browser supports it.
          Besides, <code>&lt;el-container&gt;</code>'s direct child elements have to be one or more
          of the latter four components. And father element of the latter four components must be a{' '}
          <code>&lt;el-container&gt;</code>.
        </p>
      </div>

      <h2 id="common-layouts">Common layouts</h2>
      <VPDemo
        link="/src/examples/container/LayoutHM.tsx"
        code={
          <VPCode
            language={['LayoutHM.tsx', 'common-layout.module.scss']}
            code={{
              'LayoutHM.tsx': LayoutHM_code,
              'common-layout.module.scss': CommonLayout_styles
            }}
          />
        }
      >
        <LayoutHM />
      </VPDemo>
      <br />
      <VPDemo
        link="/src/examples/container/LayoutHMF.tsx"
        code={
          <VPCode
            language={['LayoutHMF.tsx', 'common-layout.module.scss']}
            code={{
              'LayoutHMF.tsx': LayoutHMF_code,
              'common-layout.module.scss': CommonLayout_styles
            }}
          />
        }
      >
        <LayoutHMF />
      </VPDemo>
      <br />
      <VPDemo
        link="/src/examples/container/LayoutAM.tsx"
        code={
          <VPCode
            language={['LayoutAM.tsx', 'common-layout.module.scss']}
            code={{
              'LayoutAM.tsx': LayoutAM_code,
              'common-layout.module.scss': CommonLayout_styles
            }}
          />
        }
      >
        <LayoutAM />
      </VPDemo>
      <br />
      <VPDemo
        link="/src/examples/container/LayoutHAM.tsx"
        code={
          <VPCode
            language={['LayoutHAM.tsx', 'common-layout.module.scss']}
            code={{
              'LayoutHAM.tsx': LayoutHAM_code,
              'common-layout.module.scss': CommonLayout_styles
            }}
          />
        }
      >
        <LayoutHAM />
      </VPDemo>
      <br />
      <VPDemo
        link="/src/examples/container/LayoutHAMF.tsx"
        code={
          <VPCode
            language={['LayoutHAMF.tsx', 'common-layout.module.scss']}
            code={{
              'LayoutHAMF.tsx': LayoutHAMF_code,
              'common-layout.module.scss': CommonLayout_styles
            }}
          />
        }
      >
        <LayoutHAMF />
      </VPDemo>
      <br />
      <VPDemo
        link="/src/examples/container/LayoutAHM.tsx"
        code={
          <VPCode
            language={['LayoutAHM.tsx', 'common-layout.module.scss']}
            code={{
              'LayoutAHM.tsx': LayoutAHM_code,
              'common-layout.module.scss': CommonLayout_styles
            }}
          />
        }
      >
        <LayoutAHM />
      </VPDemo>
      <br />
      <VPDemo
        link="/src/examples/container/LayoutAHMF.tsx"
        code={
          <VPCode
            language={['LayoutAHMF.tsx', 'common-layout.module.scss']}
            code={{
              'LayoutAHMF.tsx': LayoutAHMF_code,
              'common-layout.module.scss': CommonLayout_styles
            }}
          />
        }
      >
        <LayoutAHMF />
      </VPDemo>
    </VPDocContent>
  )
}

export default ContainerPage
