import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/radio.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import RadioBasicUsage from '@/examples/radio/BasicUsage.tsx'
import RadioBasicUsage_code from '@/examples/radio/BasicUsage.tsx?raw'

import RadioDisabled from '@/examples/radio/Disabled.tsx'
import RadioDisabled_code from '@/examples/radio/Disabled.tsx?raw'

import RadioGroup from '@/examples/radio/RadioGroup.tsx'
import RadioGroup_code from '@/examples/radio/RadioGroup.tsx?raw'

import RadioWithBorders from '@/examples/radio/WithBorders.tsx'
import RadioWithBorders_code from '@/examples/radio/WithBorders.tsx?raw'

import RadioOptions from '@/examples/radio/Options.tsx'
import RadioOptions_code from '@/examples/radio/Options.tsx?raw'

import RadioButton from '@/examples/radio/RadioButton.tsx'
import RadioButton_code from '@/examples/radio/RadioButton.tsx?raw'

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

      <h2 id="disabled">Disabled</h2>
      <p>
        <code>disabled</code> attribute is used to disable the radio.
      </p>
      <p>
        You just need to add the <code>disabled</code> attribute.
      </p>
      <VPDemo
        link="/src/examples/radio/Disabled.tsx"
        code={
          <VPCode
            language={['Disabled.tsx']}
            code={{
              'Disabled.tsx': RadioDisabled_code
            }}
          />
        }
      >
        <RadioDisabled />
      </VPDemo>

      <h2 id="radio-group">Radio Group</h2>
      <p>Suitable for choosing from some mutually exclusive options.</p>
      <VPDemo
        link="/src/examples/radio/RadioGroup.tsx"
        code={
          <VPCode
            language={['RadioGroup.tsx']}
            code={{
              'RadioGroup.tsx': RadioGroup_code
            }}
          />
        }
      >
        <RadioGroup />
      </VPDemo>

      <h2 id="with-borders">With borders</h2>
      <p>
        The <code>border</code> attribute adds a border to Radios.
      </p>
      <VPDemo
        link="/src/examples/radio/WithBorders.tsx"
        code={
          <VPCode
            language={['WithBorders.tsx']}
            code={{
              'WithBorders.tsx': RadioWithBorders_code
            }}
          />
        }
      >
        <RadioWithBorders />
      </VPDemo>

      <h2 id="options-attribute">
        Options attribute
        <span className="vp-tag ml-1">2.11.2</span>
      </h2>
      <p>
        Shortcut from basic <code>el-radio-group</code> usage. You can customize the alias of the{' '}
        <code>options</code> through the <code>props</code> attribute.
      </p>
      <VPDemo
        link="/src/examples/radio/Options.tsx"
        code={
          <VPCode
            language={['Options.tsx']}
            code={{
              'Options.tsx': RadioOptions_code
            }}
          />
        }
      >
        <RadioOptions />
      </VPDemo>

      <h2 id="radio-button">Radio Button</h2>
      <p>Radio with button group visual effect.</p>
      <p>
        You just need to change <code>el-radio</code> element into <code>el-radio-button</code>{' '}
        element. You can also set the style of the button when it is active by using{' '}
        <code>fill</code> and <code>text-color</code>.
      </p>
      <VPDemo
        link="/src/examples/radio/RadioButton.tsx"
        code={
          <VPCode
            language={['RadioButton.tsx']}
            code={{
              'RadioButton.tsx': RadioButton_code
            }}
          />
        }
      >
        <RadioButton />
      </VPDemo>
    </VPDocContent>
  )
}

export default RadioPage
