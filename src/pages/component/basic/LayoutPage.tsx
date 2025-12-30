import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/layout.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import Alignment from '@/examples/layout/Alignment.tsx'
import Alignment_code from '@/examples/layout/Alignment.tsx?raw'

import BasicLayout_styles from '@/examples/layout/BasicLayout.module.scss?raw'
import BasicLayout from '@/examples/layout/BasicLayout.tsx'
import BasicLayout_code from '@/examples/layout/BasicLayout.tsx?raw'

import ColumnOffset from '@/examples/layout/ColumnOffset.tsx'
import ColumnOffset_code from '@/examples/layout/ColumnOffset.tsx?raw'

import ColumnSpacing from '@/examples/layout/ColumnSpacing.tsx'
import ColumnSpacing_code from '@/examples/layout/ColumnSpacing.tsx?raw'

import HybridLayout from '@/examples/layout/HybridLayout.tsx'
import HybridLayout_code from '@/examples/layout/HybridLayout.tsx?raw'

import ResponsiveLayout from '@/examples/layout/ResponsiveLayout.tsx'
import ResponsiveLayout_code from '@/examples/layout/ResponsiveLayout.tsx?raw'

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
      <VPDemo
        link="/src/examples/layout/BasicLayout.tsx"
        code={
          <VPCode
            language={['BasicLayout.tsx', 'BasicLayout.module.scss']}
            code={{
              'BasicLayout.tsx': BasicLayout_code,
              'BasicLayout.module.scss': BasicLayout_styles
            }}
          />
        }
      >
        <BasicLayout />
      </VPDemo>

      <h2 id="column-spacing">Column spacing</h2>
      <p>Column spacing is supported.</p>
      <p>
        Row provides <code>gutter</code> attribute to specify spacings between columns, and its
        default value is 0.
      </p>
      <VPDemo
        link="/src/examples/layout/ColumnSpacing.tsx"
        code={
          <VPCode
            language={['ColumnSpacing.tsx', 'BasicLayout.module.scss']}
            code={{
              'ColumnSpacing.tsx': ColumnSpacing_code,
              'BasicLayout.module.scss': BasicLayout_styles
            }}
          />
        }
      >
        <ColumnSpacing />
      </VPDemo>

      <h2 id="hybrid-layout">Hybrid layout</h2>
      <p>Form a more complex hybrid layout by combining the basic 1/24 columns.</p>
      <VPDemo
        link="/src/examples/layout/HybridLayout.tsx"
        code={
          <VPCode
            language={['HybridLayout.tsx', 'BasicLayout.module.scss']}
            code={{
              'HybridLayout.tsx': HybridLayout_code,
              'BasicLayout.module.scss': BasicLayout_styles
            }}
          />
        }
      >
        <HybridLayout />
      </VPDemo>

      <h2 id="column-offset">Column offset</h2>
      <p>You can specify column offsets.</p>
      <p>
        You can specify the number of column offset by setting the value of <code>offset</code>{' '}
        attribute of Col.
      </p>
      <VPDemo
        link="/src/examples/layout/ColumnOffset.tsx"
        code={
          <VPCode
            language={['ColumnOffset.tsx', 'BasicLayout.module.scss']}
            code={{
              'ColumnOffset.tsx': ColumnOffset_code,
              'BasicLayout.module.scss': BasicLayout_styles
            }}
          />
        }
      >
        <ColumnOffset />
      </VPDemo>

      <h2 id="alignment">Alignment</h2>
      <p>Default use the flex layout to make flexible alignment of columns.</p>
      <p>
        You can define the layout of child elements by setting <code>justify</code> attribute with
        start, center, end, space-between, space-around or space-evenly.
      </p>
      <VPDemo
        link="/src/examples/layout/Alignment.tsx"
        code={
          <VPCode
            language={['Alignment.tsx', 'BasicLayout.module.scss']}
            code={{
              'Alignment.tsx': Alignment_code,
              'BasicLayout.module.scss': BasicLayout_styles
            }}
          />
        }
      >
        <Alignment />
      </VPDemo>

      <h2 id="responsive-layout">Responsive Layout</h2>
      <p>
        Taking example by Bootstrap's responsive design, five breakpoints are preset: xs, sm, md, lg
        and xl.
      </p>
      <VPDemo
        link="/src/examples/layout/ResponsiveLayout.tsx"
        code={
          <VPCode
            language={['ResponsiveLayout.tsx', 'BasicLayout.module.scss']}
            code={{
              'ResponsiveLayout.tsx': ResponsiveLayout_code,
              'BasicLayout.module.scss': BasicLayout_styles
            }}
          />
        }
      >
        <ResponsiveLayout />
      </VPDemo>

      <h2 id="utility-classes-for-hiding-elements">Utility classes for hiding elements</h2>
      <p>
        Additionally, Element Plus provides a series of classes for hiding elements under certain
        conditions. These classes can be added to any DOM elements or custom components. You need to
        import the following CSS file to use these classes:
      </p>
      <VPCode
        language="js"
        code="import 'ayay-element-plus-react/theme-chalk/display.css'"
      ></VPCode>

      <p>The classes are:</p>
      <ul>
        <li>
          <code>hidden-xs-only</code> - hide when on extra small viewports only
        </li>
        <li>
          <code>hidden-sm-only</code> - hide when on small viewports only
        </li>
        <li>
          <code>hidden-sm-and-down</code> - hide when on small viewports and down
        </li>
        <li>
          <code>hidden-sm-and-up</code> - hide when on small viewports and up
        </li>
        <li>
          <code>hidden-md-only</code> - hide when on medium viewports only
        </li>
        <li>
          <code>hidden-md-and-down</code> - hide when on medium viewports and down
        </li>
        <li>
          <code>hidden-md-and-up</code> - hide when on medium viewports and up
        </li>
        <li>
          <code>hidden-lg-only</code> - hide when on large viewports only
        </li>
        <li>
          <code>hidden-lg-and-down</code> - hide when on large viewports and down
        </li>
        <li>
          <code>hidden-lg-and-up</code> - hide when on large viewports and up
        </li>
        <li>
          <code>hidden-xl-only</code> - hide when on extra large viewports only
        </li>
      </ul>
    </VPDocContent>
  )
}

export default LayoutPage
