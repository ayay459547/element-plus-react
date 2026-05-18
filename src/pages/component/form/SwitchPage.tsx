import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/switch.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import SwitchBasic from '@/examples/switch/Basic.tsx'
import SwitchBasic_code from '@/examples/switch/Basic.tsx?raw'

import SwitchSizes from '@/examples/switch/Sizes.tsx'
import SwitchSizes_code from '@/examples/switch/Sizes.tsx?raw'

import TextDescription from '@/examples/switch/TextDescription.tsx'
import TextDescription_code from '@/examples/switch/TextDescription.tsx?raw'

const SwitchPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="switch">Switch</h1>
      <p>Switch is used for switching between two opposing states.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>
        Bind <code>v-model</code> to a <code>Boolean</code> typed variable. The{' '}
        <code>--el-switch-on-color</code> and <code>--el-switch-off-color</code> CSS variables
        decides the background color in two states.
      </p>
      <VPDemo
        link="/src/examples/switch/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': SwitchBasic_code
            }}
          />
        }
      >
        <SwitchBasic />
      </VPDemo>

      <h2 id="sizes">Sizes</h2>
      <VPDemo
        link="/src/examples/switch/Sizes.tsx"
        code={
          <VPCode
            language={['Sizes.tsx']}
            code={{
              'Sizes.tsx': SwitchSizes_code
            }}
          />
        }
      >
        <SwitchSizes />
      </VPDemo>

      <h2 id="text-description">Text description</h2>
      <p>
        You can add <code>active-text</code> and <code>inactive-text</code> attribute to show texts.
        use <code>inline-prompt</code> attribute to control text is displayed inside dot.
      </p>
      <p>
        You can add <code>active-text</code> and <code>inactive-text</code> attribute to show texts.
      </p>
      <VPDemo
        link="/src/examples/switch/TextDescription.tsx"
        code={
          <VPCode
            language={['TextDescription.tsx']}
            code={{
              'TextDescription.tsx': TextDescription_code
            }}
          />
        }
      >
        <TextDescription />
      </VPDemo>
    </VPDocContent>
  )
}

export default SwitchPage
