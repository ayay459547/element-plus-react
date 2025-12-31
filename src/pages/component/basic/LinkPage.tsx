import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/link.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import LinkBasic_styles from '@/examples/link/Basic.module.scss?raw'
import LinkBasic from '@/examples/link/Basic.tsx'
import LinkBasic_code from '@/examples/link/Basic.tsx?raw'

import LinkDisabled from '@/examples/link/Disabled.tsx'
import LinkDisabled_code from '@/examples/link/Disabled.tsx?raw'

import LinkUnderline from '@/examples/link/Underline.tsx'
import LinkUnderline_code from '@/examples/link/Underline.tsx?raw'

import LinkWithIcon from '@/examples/link/WithIcon.tsx'
import LinkWithIcon_code from '@/examples/link/WithIcon.tsx?raw'

const LinkPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="link">Link</h1>
      <p>Text hyperlink</p>
      <div className="warning custom-block">
        <p>
          The <code>href</code> prop will be rendered directly to an <code>&lt;a&gt;</code> tag. If
          you pass a value such as <code>javascript:alert(1)</code> or a malicious URL, it may cause{' '}
          <strong>XSS</strong> or <strong>open redirect vulnerabilities</strong>.
        </p>
        <p>Always validate and sanitize the URL before use. For example:</p>
      </div>

      <h2 id="basic">Basic</h2>
      <p>Basic text link</p>
      <VPDemo
        link="/src/examples/link/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx', 'Basic.module.scss']}
            code={{
              'Basic.tsx': LinkBasic_code,
              'Basic.module.scss': LinkBasic_styles
            }}
          />
        }
      >
        <LinkBasic />
      </VPDemo>

      <h2 id="disabled">Disabled</h2>
      <p>Disabled state of link</p>
      <VPDemo
        link="/src/examples/link/Disabled.tsx"
        code={
          <VPCode
            language={['Disabled.tsx', 'Basic.module.scss']}
            code={{
              'Disabled.tsx': LinkDisabled_code,
              'Basic.module.scss': LinkBasic_styles
            }}
          />
        }
      >
        <LinkDisabled />
      </VPDemo>

      <h2 id="underline">Underline</h2>
      <p>Controlling when underlines should appear</p>
      <div className="warning custom-block">
        <p className="custom-block-title">WARNING</p>
        <p>
          The <code>boolean</code> value has been <strong>deprecated</strong>, and{' '}
          <strong>will be</strong> removed in <span className="vp-tag ml-1">3.0.0</span> , consider
          switching to new values.
        </p>
      </div>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          Starting from <span className="vp-tag ml-1">2.9.9</span> , you can use{' '}
          <code>'always' | 'hover' | 'never'</code> to control when underlines should appear. The
          examples in the document all use these values. If you are using a version{' '}
          <strong>less than</strong> <span className="vp-tag ml-1">2.9.9</span> , please refer to:
        </p>
      </div>
      <VPCode
        language="vue"
        code={`<template>
  <!-- works before 2.9.9, use 'hover' after, removed in 3.0.0 -->
  <ElLink underline>link</ElLink>
  <!-- works before 2.9.9, use 'never' after, removed in 3.0.0 -->
  <ElLink :underline="false">link</ElLink>
</template>`}
      />
      <VPDemo
        link="/src/examples/link/Underline.tsx"
        code={
          <VPCode
            language={['Underline.tsx', 'Basic.module.scss']}
            code={{
              'Underline.tsx': LinkUnderline_code,
              'Basic.module.scss': LinkBasic_styles
            }}
          />
        }
      >
        <LinkUnderline />
      </VPDemo>

      <h2 id="icon">Icon</h2>
      <p>Link with icon</p>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          Use the <code>icon</code> attribute to add icon. You can pass either string for the
          component name (registered in advance) or the component itself which is a SVG Vue
          component. Element Plus has provided a set of icon that you can find at{' '}
          <a href="/component/icon" className="vp-link">
            icon
          </a>
        </p>
      </div>
      <VPDemo
        link="/src/examples/link/WithIcon.tsx"
        code={
          <VPCode
            language={['WithIcon.tsx', 'Basic.module.scss']}
            code={{
              'WithIcon.tsx': LinkWithIcon_code,
              'Basic.module.scss': LinkBasic_styles
            }}
          />
        }
      >
        <LinkWithIcon />
      </VPDemo>
    </VPDocContent>
  )
}

export default LinkPage
