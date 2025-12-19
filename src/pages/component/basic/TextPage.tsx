import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/text.md?raw'
import VPDemo from '@/components/VPDemo.tsx'

import TextBasic from '@/examples/text/Basic.tsx'
import TextOverride from '@/examples/text/Override.tsx'
import TextSize from '@/examples/text/Size.tsx'

const TextPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="text">Text</h1>
      <p>Used for text.</p>

      <h2 id="basic">Basic</h2>
      <p>
        Use the <code>type</code> attribute to define Text's type.
      </p>
      <VPDemo>
        <TextBasic />
      </VPDemo>

      <h2 id="sizes">Sizes</h2>
      <p>
        Use attribute <code>size</code> to set additional sizes with <code>large</code>,{' '}
        <code>default</code> or <code>small</code>.
      </p>
      <VPDemo>
        <TextSize />
      </VPDemo>

      <h2 id="override">Override</h2>
      <p>
        Use attribute <code>tag</code> to override element
      </p>
      <VPDemo>
        <TextOverride />
      </VPDemo>
    </VPDocContent>
  )
}

export default TextPage
