import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/typography.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import TypographyFont_styles from '@/examples/typography/Font.module.scss?raw'
import TypographyFont from '@/examples/typography/Font.tsx'
import TypographyFont_code from '@/examples/typography/Font.tsx?raw'

import TypographyConvention from '@/examples/typography/Convention.tsx'
import TypographyConvention_code from '@/examples/typography/Convention.tsx?raw'

import TypographyLineHeight from '@/examples/typography/LineHeight.tsx'
import TypographyLineHeight_code from '@/examples/typography/LineHeight.tsx?raw'

const TypographyPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="typography">Typography</h1>
      <p>We create a font convention to ensure the best presentation across different platforms.</p>

      <h2 id="font">Font</h2>
      <VPDemo
        link="/src/examples/typography/Font.tsx"
        code={
          <VPCode
            language={['Font.tsx', 'Font.module.scss']}
            code={{
              'Font.tsx': TypographyFont_code,
              'Font.module.scss': TypographyFont_styles
            }}
          />
        }
      >
        <TypographyFont />
      </VPDemo>

      <h2 id="font-convention">Font Convention</h2>
      <VPDemo
        link="/src/examples/typography/Convention.tsx"
        code={
          <VPCode
            language={['Convention.tsx']}
            code={{
              'Convention.tsx': TypographyConvention_code
            }}
          />
        }
      >
        <TypographyConvention />
      </VPDemo>

      <h2 id="font-line-height">Font Line Height</h2>
      <VPDemo
        link="/src/examples/typography/LineHeight.tsx"
        code={
          <VPCode
            language={['LineHeight.tsx']}
            code={{
              'LineHeight.tsx': TypographyLineHeight_code
            }}
          />
        }
      >
        <TypographyLineHeight />
      </VPDemo>

      <h2 id="font-family">Font-family</h2>
      <VPCode
        language="css"
        code={`font-family:
  Inter, 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;`}
      />
    </VPDocContent>
  )
}

export default TypographyPage
