import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/input.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import InputBasicUsage from '@/examples/input/BasicUsage.tsx'
import InputBasicUsage_code from '@/examples/input/BasicUsage.tsx?raw'

import InputDisabled from '@/examples/input/Disabled.tsx'
import InputDisabled_code from '@/examples/input/Disabled.tsx?raw'

import InputClearable from '@/examples/input/Clearable.tsx'
import InputClearable_code from '@/examples/input/Clearable.tsx?raw'

import InputClearIcon from '@/examples/input/ClearIcon.tsx'
import InputClearIcon_code from '@/examples/input/ClearIcon.tsx?raw'

import InputFormatter from '@/examples/input/Formatter.tsx'
import InputFormatter_code from '@/examples/input/Formatter.tsx?raw'

const InputPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="input">Input</h1>
      <p>Input data using mouse or keyboard.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <VPDemo
        link="/src/examples/input/BasicUsage.tsx"
        code={
          <VPCode
            language={['BasicUsage.tsx']}
            code={{
              'BasicUsage.tsx': InputBasicUsage_code
            }}
          />
        }
      >
        <InputBasicUsage />
      </VPDemo>

      <h2 id="disabled">Disabled</h2>
      <p>
        Disable the Input with the <code>disabled</code> attribute.
      </p>
      <VPDemo
        link="/src/examples/input/Disabled.tsx"
        code={
          <VPCode
            language={['Disabled.tsx']}
            code={{
              'Disabled.tsx': InputDisabled_code
            }}
          />
        }
      >
        <InputDisabled />
      </VPDemo>

      <h2 id="clearable">Clearable</h2>
      <p>
        Make the Input clearable with the <code>clearable</code> attribute.
      </p>
      <VPDemo
        link="/src/examples/input/Clearable.tsx"
        code={
          <VPCode
            language={['Clearable.tsx']}
            code={{
              'Clearable.tsx': InputClearable_code
            }}
          />
        }
      >
        <InputClearable />
      </VPDemo>

      <h2 id="custom-clear-icon">
        Custom Clear Icon
        <span className="vp-tag ml-1">2.11.0</span>
      </h2>
      <p>
        You can customize the clear icon by setting the <code>clear-icon</code> attribute.
      </p>
      <VPDemo
        link="/src/examples/input/ClearIcon.tsx"
        code={
          <VPCode
            language={['ClearIcon.tsx']}
            code={{
              'ClearIcon.tsx': InputClearIcon_code
            }}
          />
        }
      >
        <InputClearIcon />
      </VPDemo>

      <h2 id="formatter">Formatter</h2>
      <p>
        Display value within it's situation with <code>formatter</code>, and we usually use{' '}
        <code>parser</code> at the same time.
      </p>
      <VPDemo
        link="/src/examples/input/Formatter.tsx"
        code={
          <VPCode
            language={['Formatter.tsx']}
            code={{
              'Formatter.tsx': InputFormatter_code
            }}
          />
        }
      >
        <InputFormatter />
      </VPDemo>

      <h2 id="password-box">Password box</h2>
      <p>
        Make a toggle-able password Input with the <code>show-password</code> attribute.
      </p>
    </VPDocContent>
  )
}

export default InputPage
