import VPDocContent from '@/components/VPDocContent.tsx'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import SplitterBasic from '@/examples/splitter/Basic.tsx'
import SplitterBasic_code from '@/examples/splitter/Basic.tsx?raw'

import SplitterVertical from '@/examples/splitter/Vertical.tsx'
import SplitterVertical_code from '@/examples/splitter/Vertical.tsx?raw'

const SplitterPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="splitter">Splitter</h1>
      <p>
        Used to divide a container into resizable panes that users can adjust by dragging.
      </p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>The default direction is horizontal.</p>
      <VPDemo
        link="/src/examples/splitter/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': SplitterBasic_code
            }}
          />
        }
      >
        <SplitterBasic />
      </VPDemo>

      <h2 id="vertical">Vertical</h2>
      <p>Set <code>direction="vertical"</code> to divide vertically.</p>
      <VPDemo
        link="/src/examples/splitter/Vertical.tsx"
        code={
          <VPCode
            language={['Vertical.tsx']}
            code={{
              'Vertical.tsx': SplitterVertical_code
            }}
          />
        }
      >
        <SplitterVertical />
      </VPDemo>

      <h2 id="api">API</h2>
      <h3>Splitter Attributes</h3>
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
            <td>direction</td>
            <td>Orientation of the splitter</td>
            <td><code>'horizontal' | 'vertical'</code></td>
            <td><code>'horizontal'</code></td>
          </tr>
          <tr>
            <td>lazy</td>
            <td>Update size only after drag ends</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Splitter Panel Attributes</h3>
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
            <td>size</td>
            <td>Size of the panel</td>
            <td><code>string | number</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>min</td>
            <td>Minimum size</td>
            <td><code>string | number</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>max</td>
            <td>Maximum size</td>
            <td><code>string | number</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>resizable</td>
            <td>Whether the panel can be resized</td>
            <td><code>boolean</code></td>
            <td><code>true</code></td>
          </tr>
          <tr>
            <td>collapsible</td>
            <td>Whether the panel can be collapsed</td>
            <td><code>boolean</code></td>
            <td><code>false</code></td>
          </tr>
        </tbody>
      </table>
    </VPDocContent>
  )
}

export default SplitterPage
