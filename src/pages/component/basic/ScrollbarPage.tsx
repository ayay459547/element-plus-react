import VPDocContent from '@/components/VPDocContent.tsx'
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
      <p>Use the <code>height</code> property to set the height of the scrollbar, if not set, it will scale according to the parent container.</p>
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
      <p>When the width of the elements is greater than the width of the scrollbar, the horizontal scrollbar will be displayed.</p>
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

      <h2 id="api">API</h2>
      <h3>Scrollbar Attributes</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>height</td>
            <td>Height of scrollbar</td>
            <td><code>string | number</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>maxHeight</td>
            <td>Max height of scrollbar</td>
            <td><code>string | number</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>native</td>
            <td>Whether to use the native scrollbar</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>wrapStyle</td>
            <td>Style of wrap</td>
            <td><code>CSSProperties</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>wrapClass</td>
            <td>Class of wrap</td>
            <td><code>string | string[]</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>viewClass</td>
            <td>Class of view</td>
            <td><code>string | string[]</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>viewStyle</td>
            <td>Style of view</td>
            <td><code>CSSProperties</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>noresize</td>
            <td>Do not respond to container size changes, optimize performance</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>tag</td>
            <td>Element tag of the view</td>
            <td><code>string</code></td>
            <td><code>div</code></td>
          </tr>
          <tr>
            <td>always</td>
            <td>Always show the scrollbar</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td>minSize</td>
            <td>Minimum size of scrollbar</td>
            <td><code>number</code></td>
            <td><code>20</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Scrollbar Events</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>onScroll</td>
            <td>Triggers when scrolling</td>
            <td><code>(scroll: &#123; scrollTop: number, scrollLeft: number &#125;) =&gt; void</code></td>
          </tr>
        </tbody>
      </table>
    </VPDocContent>
  )
}

export default ScrollbarPage
