import VPDemo from '@/components/VPDemo.tsx'
import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/container.md?raw'

import LayoutAHM from '@/examples/container/LayoutAHM.tsx'
import LayoutAHMF from '@/examples/container/LayoutAHMF.tsx'
import LayoutAM from '@/examples/container/LayoutAM.tsx'
import LayoutHAM from '@/examples/container/LayoutHAM.tsx'
import LayoutHAMF from '@/examples/container/LayoutHAMF.tsx'
import LayoutHM from '@/examples/container/LayoutHM.tsx'
import LayoutHMF from '@/examples/container/LayoutHMF.tsx'

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
      <VPDemo>
        <LayoutHM />
      </VPDemo>
      <br />
      <VPDemo>
        <LayoutHMF />
      </VPDemo>
      <br />
      <VPDemo>
        <LayoutAM />
      </VPDemo>
      <br />
      <VPDemo>
        <LayoutHAM />
      </VPDemo>
      <br />
      <VPDemo>
        <LayoutHAMF />
      </VPDemo>
      <br />
      <VPDemo>
        <LayoutAHM />
      </VPDemo>
      <br />
      <VPDemo>
        <LayoutAHMF />
      </VPDemo>
    </VPDocContent>
  )
}

export default ContainerPage
