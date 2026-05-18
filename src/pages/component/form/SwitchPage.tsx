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

import CustomIcons from '@/examples/switch/CustomIcons.tsx'
import CustomIcons_code from '@/examples/switch/CustomIcons.tsx?raw'

import ExtendedValueTypes from '@/examples/switch/ExtendedValueTypes.tsx'
import ExtendedValueTypes_code from '@/examples/switch/ExtendedValueTypes.tsx?raw'

import SwitchDisabled from '@/examples/switch/Disabled.tsx'
import SwitchDisabled_code from '@/examples/switch/Disabled.tsx?raw'

import SwitchLoading from '@/examples/switch/Loading.tsx'
import SwitchLoading_code from '@/examples/switch/Loading.tsx?raw'

import CustomActionIcon from '@/examples/switch/CustomActionIcon.tsx'
import CustomActionIcon_code from '@/examples/switch/CustomActionIcon.tsx?raw'

import CustomActionSlot from '@/examples/switch/CustomActionSlot.tsx'
import CustomActionSlot_code from '@/examples/switch/CustomActionSlot.tsx?raw'

const SwitchPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="switch">Switch</h1>
      <p>Switch is used for switching between two opposing states.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>
        Bind <code>value</code> to a <code>Boolean</code> typed variable. The{' '}
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
        You can add <code>activeText</code> and <code>inactiveText</code> attribute to show texts.
        use <code>inlinePrompt</code> attribute to control text is displayed inside dot.
      </p>
      <p>
        You can add <code>activeText</code> and <code>inactiveText</code> attribute to show texts.
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

      <h2 id="display-custom-icons">Display custom icons</h2>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          Use the <code>activeIcon</code> and <code>inactiveIcon</code> attribute to add icon. You
          can pass either string for the component name (registered in advance) or the component
          itself which is a SVG Vue component. Element Plus has provided a set of icon that you can
          find at{' '}
          <a href="./icon" target="_blank" className="vp-link">
            icon
          </a>
        </p>
      </div>
      <p>
        You can add <code>activeIcon</code> and <code>inactiveIcon</code> attribute to show icons.
        use <code>inlinePrompt</code> attribute to control icon is displayed inside dot.
      </p>
      <VPDemo
        link="/src/examples/switch/CustomIcons.tsx"
        code={
          <VPCode
            language={['CustomIcons.tsx']}
            code={{
              'CustomIcons.tsx': CustomIcons_code
            }}
          />
        }
      >
        <CustomIcons />
      </VPDemo>

      <h2 id="extended-value-types">Extended value types</h2>
      <p>
        You can set <code>activeValue</code> and <code>inactiveValue</code> attributes. They both
        receive a <code>Boolean</code>, <code>String</code> or <code>Number</code> typed value.
      </p>
      <VPDemo
        link="/src/examples/switch/ExtendedValueTypes.tsx"
        code={
          <VPCode
            language={['ExtendedValueTypes.tsx']}
            code={{
              'ExtendedValueTypes.tsx': ExtendedValueTypes_code
            }}
          />
        }
      >
        <ExtendedValueTypes />
      </VPDemo>

      <h2 id="disabled">Disabled</h2>
      <p>
        Adding the <code>disabled</code> attribute disables Switch.
      </p>
      <VPDemo
        link="/src/examples/switch/Disabled.tsx"
        code={
          <VPCode
            language={['Disabled.tsx']}
            code={{
              'Disabled.tsx': SwitchDisabled_code
            }}
          />
        }
      >
        <SwitchDisabled />
      </VPDemo>

      <h2 id="loading">Loading</h2>
      <p>
        Setting the <code>loading</code> attribute to <code>true</code> indicates a loading state on
        the Switch.
      </p>
      <VPDemo
        link="/src/examples/switch/Loading.tsx"
        code={
          <VPCode
            language={['Loading.tsx']}
            code={{
              'Loading.tsx': SwitchLoading_code
            }}
          />
        }
      >
        <SwitchLoading />
      </VPDemo>

      <h2 id="custom-action-icon">Custom action icon</h2>
      <p>
        You can add <code>activeActionIcon</code> and <code>inactiveActionIcon</code> attribute to
        show icons.
      </p>
      <VPDemo
        link="/src/examples/switch/CustomActionIcon.tsx"
        code={
          <VPCode
            language={['CustomActionIcon.tsx']}
            code={{
              'CustomActionIcon.tsx': CustomActionIcon_code
            }}
          />
        }
      >
        <CustomActionIcon />
      </VPDemo>

      <h2>Custom action slot</h2>
      <p>
        You can use <code>activeAction</code> and <code>inactiveAction</code> slot to customize
        action.
      </p>
      <VPDemo
        link="/src/examples/switch/CustomActionSlot.tsx"
        code={
          <VPCode
            language={['CustomActionSlot.tsx']}
            code={{
              'CustomActionSlot.tsx': CustomActionSlot_code
            }}
          />
        }
      >
        <CustomActionSlot />
      </VPDemo>
    </VPDocContent>
  )
}

export default SwitchPage
