import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/text.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import TextBasic from '@/examples/text/Basic.tsx'
import TextBasic_code from '@/examples/text/Basic.tsx?raw'
import TextBasic_styles from '@/examples/text/TextBasic.module.scss?raw'

import TextOverride from '@/examples/text/Override.tsx'
import TextOverride_code from '@/examples/text/Override.tsx?raw'

import TextSize from '@/examples/text/Size.tsx'
import TextSize_code from '@/examples/text/Size.tsx?raw'

const TextPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="text">Text</h1>
      <p>Used for text.</p>

      <h2 id="basic">Basic</h2>
      <p>
        Use the <code>type</code> attribute to define Text's type.
      </p>
      <VPDemo
        link="/src/examples/link/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx', 'Basic.module.scss']}
            code={{
              'Basic.tsx': TextBasic_code,
              'Basic.module.scss': TextBasic_styles
            }}
          />
        }
      >
        <TextBasic />
      </VPDemo>

      <h2 id="sizes">Sizes</h2>
      <p>
        Use attribute <code>size</code> to set additional sizes with <code>large</code>,{' '}
        <code>default</code> or <code>small</code>.
      </p>
      <VPDemo
        link="/src/examples/link/Size.tsx"
        code={
          <VPCode
            language={['Size.tsx', 'Basic.module.scss']}
            code={{
              'Size.tsx': TextSize_code,
              'Basic.module.scss': TextBasic_styles
            }}
          />
        }
      >
        <TextSize />
      </VPDemo>

      <h2 id="override">Override</h2>
      <p>
        Use attribute <code>tag</code> to override element
      </p>
      <VPDemo
        link="/src/examples/link/Override.tsx"
        code={
          <VPCode
            language={['Override.tsx', 'Basic.module.scss']}
            code={{
              'Override.tsx': TextOverride_code,
              'Basic.module.scss': TextBasic_styles
            }}
          />
        }
      >
        <TextOverride />
      </VPDemo>
    </VPDocContent>
  )
}

export default TextPage
