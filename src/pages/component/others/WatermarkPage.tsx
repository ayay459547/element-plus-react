import VPDocContent from '@/components/VPDocContent.tsx'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import WatermarkBasic from '@/examples/watermark/Basic.tsx'
import WatermarkBasic_code from '@/examples/watermark/Basic.tsx?raw'

import WatermarkMultiLine from '@/examples/watermark/MultiLine.tsx'
import WatermarkMultiLine_code from '@/examples/watermark/MultiLine.tsx?raw'

import WatermarkImage from '@/examples/watermark/Image.tsx'
import WatermarkImage_code from '@/examples/watermark/Image.tsx?raw'

const WatermarkPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="watermark">Watermark</h1>
      <p>
        Add a text or image watermark to the background of a container.
      </p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>The default content is the watermark text.</p>
      <VPDemo
        link="/src/examples/watermark/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': WatermarkBasic_code
            }}
          />
        }
      >
        <WatermarkBasic />
      </VPDemo>

      <h2 id="multi-line">Multi-line</h2>
      <p>Pass an array to <code>content</code> to display multi-line watermarks.</p>
      <VPDemo
        link="/src/examples/watermark/MultiLine.tsx"
        code={
          <VPCode
            language={['MultiLine.tsx']}
            code={{
              'MultiLine.tsx': WatermarkMultiLine_code
            }}
          />
        }
      >
        <WatermarkMultiLine />
      </VPDemo>

      <h2 id="image">Image</h2>
      <p>Use <code>image</code> to specify the image watermark.</p>
      <VPDemo
        link="/src/examples/watermark/Image.tsx"
        code={
          <VPCode
            language={['Image.tsx']}
            code={{
              'Image.tsx': WatermarkImage_code
            }}
          />
        }
      >
        <WatermarkImage />
      </VPDemo>

      <h2 id="api">API</h2>
      <h3>Watermark Attributes</h3>
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
            <td>content</td>
            <td>Watermark text content</td>
            <td><code>string | string[]</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>image</td>
            <td>Watermark image source, takes priority over <code>content</code></td>
            <td><code>string</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>width</td>
            <td>Watermark width</td>
            <td><code>number</code></td>
            <td>120</td>
          </tr>
          <tr>
            <td>height</td>
            <td>Watermark height</td>
            <td><code>number</code></td>
            <td>64</td>
          </tr>
          <tr>
            <td>rotate</td>
            <td>Watermark rotation angle</td>
            <td><code>number</code></td>
            <td>-22</td>
          </tr>
          <tr>
            <td>zIndex</td>
            <td>Watermark z-index</td>
            <td><code>number</code></td>
            <td>9</td>
          </tr>
          <tr>
            <td>gap</td>
            <td>Spacing between watermarks</td>
            <td><code>[number, number]</code></td>
            <td><code>[100, 100]</code></td>
          </tr>
          <tr>
            <td>offset</td>
            <td>Watermark offset from the top-left corner</td>
            <td><code>[number, number]</code></td>
            <td><code>[50, 50]</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Watermark Font Attributes</h3>
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
            <td>color</td>
            <td>Text color</td>
            <td><code>string</code></td>
            <td><code>rgba(0,0,0,0.15)</code></td>
          </tr>
          <tr>
            <td>fontSize</td>
            <td>Font size</td>
            <td><code>number | string</code></td>
            <td>16</td>
          </tr>
          <tr>
            <td>fontWeight</td>
            <td>Font weight</td>
            <td><code>string | number</code></td>
            <td><code>normal</code></td>
          </tr>
          <tr>
            <td>fontFamily</td>
            <td>Font family</td>
            <td><code>string</code></td>
            <td><code>sans-serif</code></td>
          </tr>
          <tr>
            <td>fontStyle</td>
            <td>Font style</td>
            <td><code>string</code></td>
            <td><code>normal</code></td>
          </tr>
        </tbody>
      </table>
    </VPDocContent>
  )
}

export default WatermarkPage
