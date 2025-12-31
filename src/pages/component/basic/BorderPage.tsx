import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/border.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import BorderStyle_styles from '@/examples/border/Border.module.scss?raw'
import BorderStyle from '@/examples/border/Border.tsx'
import BorderStyle_code from '@/examples/border/Border.tsx?raw'

import BorderRadius from '@/examples/border/Radius.tsx'
import BorderRadius_code from '@/examples/border/Radius.tsx?raw'

import BorderShadow from '@/examples/border/Shadow.tsx'
import BorderShadow_code from '@/examples/border/Shadow.tsx?raw'

const BorderPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="border">Border</h1>
      <p>
        We standardize the borders that can be used in buttons, cards, pop-ups and other components.
      </p>

      <h2 id="border-style">Border style</h2>
      <p>There are few border styles to choose.</p>
      <VPDemo
        link="/src/examples/border/Border.tsx"
        code={
          <VPCode
            language={['Border.tsx', 'Border.module.scss']}
            code={{
              'Border.tsx': BorderStyle_code,
              'Border.module.scss': BorderStyle_styles
            }}
          />
        }
      >
        <BorderStyle />
      </VPDemo>

      <h2 id="radius">Radius</h2>
      <p>There are few radius styles to choose.</p>
      <VPDemo
        link="/src/examples/border/Radius.tsx"
        code={
          <VPCode
            language={['Radius.tsx', 'Border.module.scss']}
            code={{
              'Radius.tsx': BorderRadius_code,
              'Border.module.scss': BorderStyle_styles
            }}
          />
        }
      >
        <BorderRadius />
      </VPDemo>

      <h2 id="shadow">Shadow</h2>
      <p>There are few shadow styles to choose.</p>
      <VPDemo
        link="/src/examples/border/Shadow.tsx"
        code={
          <VPCode
            language={['Shadow.tsx']}
            code={{
              'Shadow.tsx': BorderShadow_code
            }}
          />
        }
      >
        <BorderShadow />
      </VPDemo>
    </VPDocContent>
  )
}

export default BorderPage
