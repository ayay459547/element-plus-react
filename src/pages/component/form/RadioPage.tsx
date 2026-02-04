import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/radio.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import RadioBasicUsage from '@/examples/radio/BasicUsage.tsx'
import RadioBasicUsage_code from '@/examples/radio/BasicUsage.tsx?raw'

const RadioPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="radio">Radio</h1>
      <p>Single selection among multiple options.</p>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          New API <code>value</code> has been added in <span className="vp-tag ml-1">2.6.0</span>,
          the examples in the document all use the <code>value</code>. If you are using a version{' '}
          <strong>less than</strong> <span className="vp-tag ml-1">2.6.0</span>, please refer to:
        </p>
      </div>

      <h2 id="basic-usage">Basic usage</h2>
      <p>Radio should not have too many options. Otherwise, use the Select component instead.</p>
      <p>
        Creating a radio component is easy, you just need to bind a variable to Radio's{' '}
        <code>v-model</code>. It equals to the value of <code>value</code> of the chosen radio. The
        type of <code>value</code> is <code>String</code>, <code>Number</code> or{' '}
        <code>Boolean</code>.
      </p>
      <VPDemo
        link="/src/examples/radio/BasicUsage.tsx"
        code={
          <VPCode
            language={['BasicUsage.tsx']}
            code={{
              'BasicUsage.tsx': RadioBasicUsage_code
            }}
          />
        }
      >
        <RadioBasicUsage />
      </VPDemo>
    </VPDocContent>
  )
}

export default RadioPage
