import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/alert.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import AlertBasic_styles from '@/examples/alert/Basic.scss?raw'
import AlertBasic from '@/examples/alert/Basic.tsx'
import AlertBasic_code from '@/examples/alert/Basic.tsx?raw'

const AlertPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="alert">Alert</h1>
      <p>Displays important alert messages.</p>

      <h2 id="basic-usage">Basic Usage</h2>
      <p>
        Alert components are non-overlay elements in the page that does not disappear automatically.
      </p>
      <p>
        Alert provides 5 types of themes defined by <code>type</code>, whose default value is{' '}
        <code>info</code>. <code>primary</code> has been added in{' '}
        <span className="vp-tag ml-1 ">2.9.11</span>.
      </p>
      <VPDemo
        link="/src/examples/alert/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx', 'Basic.scss']}
            code={{
              'Basic.tsx': AlertBasic_code,
              'Basic.scss': AlertBasic_styles
            }}
          />
        }
      >
        <AlertBasic />
      </VPDemo>
    </VPDocContent>
  )
}

export default AlertPage
