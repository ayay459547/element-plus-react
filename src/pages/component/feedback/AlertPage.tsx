import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/alert.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import AlertBasic_styles from '@/examples/alert/Basic.scss?raw'
import AlertBasic from '@/examples/alert/Basic.tsx'
import AlertBasic_code from '@/examples/alert/Basic.tsx?raw'

import AlertTheme from '@/examples/alert/Theme.tsx'
import AlertTheme_code from '@/examples/alert/Theme.tsx?raw'

import AlertCloseButton from '@/examples/alert/CloseButton.tsx'
import AlertCloseButton_code from '@/examples/alert/CloseButton.tsx?raw'

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

      <h2 id="theme">Theme</h2>
      <p>
        Alert provide two different themes, <code>light</code> and <code>dark</code>.
      </p>
      <p>
        Set <code>effect</code> to change theme, default is <code>light</code>.
      </p>
      <VPDemo
        link="/src/examples/alert/Theme.tsx"
        code={
          <VPCode
            language={['Theme.tsx', 'Basic.scss']}
            code={{
              'Theme.tsx': AlertTheme_code,
              'Basic.scss': AlertBasic_styles
            }}
          />
        }
      >
        <AlertTheme />
      </VPDemo>

      <h2 id="customizable-close-button">Customizable Close Button</h2>
      <p>Customize the close button as texts or other symbols.</p>
      <p>
        Alert allows you to configure if it's closable. The close button text and closing callbacks
        are also customizable. <code>closable</code> attribute decides if the component can be
        closed or not. It accepts <code>boolean</code>, and the default is <code>true</code>. You
        can set <code>closeText</code> attribute to replace the default cross symbol as the close
        button. Be careful that <code>closeText</code> must be a string. <code>close</code> event
        fires when the component is closed.
      </p>
      <VPDemo
        link="/src/examples/alert/CloseButton.tsx"
        code={
          <VPCode
            language={['CloseButton.tsx', 'Basic.scss']}
            code={{
              'CloseButton.tsx': AlertCloseButton_code,
              'Basic.scss': AlertBasic_styles
            }}
          />
        }
      >
        <AlertCloseButton />
      </VPDemo>
    </VPDocContent>
  )
}

export default AlertPage
