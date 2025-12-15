import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/layout.md?raw'
import VPDemo from '@/components/VPDemo.tsx'

import Alignment from '@/examples/layout/Alignment.tsx'
import BasicLayout from '@/examples/layout/BasicLayout.tsx'
import ColumnOffset from '@/examples/layout/ColumnOffset.tsx'
import ColumnSpacing from '@/examples/layout/ColumnSpacing.tsx'
import HybridLayout from '@/examples/layout/HybridLayout.tsx'
import ResponsiveLayout from '@/examples/layout/ResponsiveLayout.tsx'

const LayoutPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="layout">Layout</h1>
      <p>Quickly and easily create layouts with the basic 24-column.</p>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          The component uses flex layout by default, no need to set <code>type="flex"</code>{' '}
          manually.
        </p>
        <p>
          Please note that the parent container should avoid using <code>inline</code> related
          styles, which will cause the component to not fill up its width.
        </p>
        <p>The basic unit of a column is 1, with a maximum of 24 and a minimum of 0.</p>
      </div>

      <h2 id="basic-layout">Basic layout</h2>
      <p>Create basic grid layout using columns.</p>
      <p>
        With <code>row</code> and <code>col</code>, we can easily manipulate the layout using the{' '}
        <code>span</code> attribute.
      </p>
      <VPDemo>
        <BasicLayout />
      </VPDemo>

      <h2 id="column-spacing">Column spacing</h2>
      <p>Column spacing is supported.</p>
      <p>
        Row provides <code>gutter</code> attribute to specify spacings between columns, and its
        default value is 0.
      </p>
      <VPDemo>
        <ColumnSpacing />
      </VPDemo>

      <h2 id="hybrid-layout">Hybrid layout</h2>
      <p>Form a more complex hybrid layout by combining the basic 1/24 columns.</p>
      <VPDemo>
        <HybridLayout />
      </VPDemo>

      <h2 id="column-offset">Column offset</h2>
      <p>You can specify column offsets.</p>
      <p>
        You can specify the number of column offset by setting the value of <code>offset</code>{' '}
        attribute of Col.
      </p>
      <VPDemo>
        <ColumnOffset />
      </VPDemo>

      <h2 id="alignment">Alignment</h2>
      <p>Default use the flex layout to make flexible alignment of columns.</p>
      <p>
        You can define the layout of child elements by setting <code>justify</code> attribute with
        start, center, end, space-between, space-around or space-evenly.
      </p>
      <VPDemo>
        <Alignment />
      </VPDemo>

      <h2 id="responsive-layout">Responsive Layout</h2>
      <p>
        Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg
        and xl.
      </p>
      <VPDemo>
        <ResponsiveLayout />
      </VPDemo>
    </VPDocContent>
  )
}

export default LayoutPage
