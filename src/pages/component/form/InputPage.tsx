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

import InputPassword from '@/examples/input/Password.tsx'
import InputPassword_code from '@/examples/input/Password.tsx?raw'

import InputWithIcon_styles from '@/examples/input/WithIcon.scss?raw'
import InputWithIcon from '@/examples/input/WithIcon.tsx'
import InputWithIcon_code from '@/examples/input/WithIcon.tsx?raw'

import InputTextarea from '@/examples/input/Textarea.tsx'
import InputTextarea_code from '@/examples/input/Textarea.tsx?raw'

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
      <VPDemo
        link="/src/examples/input/Password.tsx"
        code={
          <VPCode
            language={['Password.tsx']}
            code={{
              'Password.tsx': InputPassword_code
            }}
          />
        }
      >
        <InputPassword />
      </VPDemo>

      <h2 id="input-with-icon">Input with icon</h2>
      <p>Add an icon to indicate input type.</p>
      <p>
        To add icons in Input, you can simply use <code>prefix-icon</code> and{' '}
        <code>suffix-icon</code> attributes. Also, the <code>prefix</code> and <code>suffix</code>{' '}
        named slots works as well.
      </p>
      <VPDemo
        link="/src/examples/input/WithIcon.tsx"
        code={
          <VPCode
            language={['WithIcon.tsx', 'WithIcon.scss']}
            code={{
              'WithIcon.tsx': InputWithIcon_code,
              'WithIcon.scss': InputWithIcon_styles
            }}
          />
        }
      >
        <InputWithIcon />
      </VPDemo>

      <h2 id="textarea">Textarea</h2>
      <p>
        Resizable for entering multiple lines of text information. Add attribute{' '}
        <code>type="textarea"</code> to change <code>input</code> into native <code>textarea</code>.
      </p>
      <p>
        Control the height by setting the <code>rows</code> prop.
      </p>
      <VPDemo
        link="/src/examples/input/Textarea.tsx"
        code={
          <VPCode
            language={['Textarea.tsx']}
            code={{
              'Textarea.tsx': InputTextarea_code
            }}
          />
        }
      >
        <InputTextarea />
      </VPDemo>
    </VPDocContent>
  )
}

export default InputPage
