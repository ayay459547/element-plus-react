import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/badge.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import BadgeBasic_styles from '@/examples/badge/Basic.module.scss?raw'
import BadgeBasic from '@/examples/badge/Basic.tsx'
import BadgeBasic_code from '@/examples/badge/Basic.tsx?raw'

import BadgeCustomize_styles from '@/examples/badge/Customize.module.scss?raw'
import BadgeCustomize from '@/examples/badge/Customize.tsx'
import BadgeCustomize_code from '@/examples/badge/Customize.tsx?raw'

import BadgeDot from '@/examples/badge/Dot.tsx'

import BadgeMax_styles from '@/examples/badge/Max.module.scss?raw'
import BadgeMax from '@/examples/badge/Max.tsx'
import BadgeMax_code from '@/examples/badge/Max.tsx?raw'

import BadgeOffset from '@/examples/badge/Offset.tsx'
import BadgeOffset_code from '@/examples/badge/Offset.tsx?raw'

const BadgePage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="badge">Badge</h1>
      <p>A number or status mark on buttons and icons.</p>

      <h2 id="basic-usage">Basic Usage</h2>
      <p>Displays the amount of new messages.</p>
      <p>The amount is defined with value which accepts Number or String.</p>
      <VPDemo
        link="/src/examples/badge/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx', 'Basic.module.scss']}
            code={{
              'Basic.tsx': BadgeBasic_code,
              'Basic.module.scss': BadgeBasic_styles
            }}
          />
        }
      >
        <BadgeBasic />
      </VPDemo>

      <h2 id="max-value">Max Value</h2>
      <p>You can customize the max value.</p>
      <p>
        The max value is defined by property max which is a Number. Note that it only works when
        value is also a Number.
      </p>
      <VPDemo
        link="/src/examples/badge/Max.tsx"
        code={
          <VPCode
            language={['Max.tsx', 'Max.module.scss']}
            code={{
              'Max.tsx': BadgeMax_code,
              'Max.module.scss': BadgeMax_styles
            }}
          />
        }
      >
        <BadgeMax />
      </VPDemo>

      <h2 id="customizations">Customizations</h2>
      <p>
        Displays text content other than numbers. Or you can use the <code>content</code> slot to
        customize content.
      </p>
      <p>
        When value is a String, it can display customized text. Or use the <code>content</code>{' '}
        slot.
      </p>
      <VPDemo
        link="/src/examples/badge/Customize.tsx"
        code={
          <VPCode
            language={['Customize.tsx', 'Max.module.scss']}
            code={{
              'Customize.tsx': BadgeCustomize_code,
              'Max.module.scss': BadgeCustomize_styles
            }}
          />
        }
      >
        <BadgeCustomize />
      </VPDemo>

      <h2 id="red-dot">Red Dot</h2>
      <p>Use a red dot to mark content that needs to be noticed.</p>
      <p>
        Use the attribute <code>is-dot</code>. It is a Boolean.
      </p>
      <VPDemo
        link="/src/examples/badge/Max.tsx"
        code={
          <VPCode
            language={['Max.tsx', 'Max.module.scss']}
            code={{
              'Max.tsx': BadgeMax_code,
              'Max.module.scss': BadgeMax_styles
            }}
          />
        }
      >
        <BadgeDot />
      </VPDemo>

      <h2 id="offset">
        Offset
        <span className="vp-tag ml-1">2.7.0</span>
      </h2>
      <p>
        Set offset of the badge dot, the format is [left, top], which represents the offset of the
        status dot from the left and top of the default position.
      </p>
      <VPDemo
        link="/src/examples/badge/Offset.tsx"
        code={
          <VPCode
            language={['Offset.tsx', 'Basic.module.scss']}
            code={{
              'Offset.tsx': BadgeOffset_code,
              'Basic.module.scss': BadgeBasic_styles
            }}
          />
        }
      >
        <BadgeOffset />
      </VPDemo>
    </VPDocContent>
  )
}

export default BadgePage
