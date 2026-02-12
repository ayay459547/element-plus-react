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

import AlertIcon from '@/examples/alert/Icon.tsx'
import AlertIcon_code from '@/examples/alert/Icon.tsx?raw'

import AlertCenter from '@/examples/alert/Center.tsx'
import AlertCenter_code from '@/examples/alert/Center.tsx?raw'

import AlertDescription from '@/examples/alert/Description.tsx'
import AlertDescription_code from '@/examples/alert/Description.tsx?raw'

import AlertIconDescription from '@/examples/alert/IconDescription.tsx'
import AlertIconDescription_code from '@/examples/alert/IconDescription.tsx?raw'

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

      <h2 id="with-icon">With Icon</h2>
      <p>Displaying an icon improves readability.</p>
      <p>
        Setting the <code>showIcon</code> attribute displays an icon that corresponds with the
        current Alert type. Or use the <code>icon</code> slot to customize icon.
      </p>
      <VPDemo
        link="/src/examples/alert/Icon.tsx"
        code={
          <VPCode
            language={['Icon.tsx', 'Basic.scss']}
            code={{
              'Icon.tsx': AlertIcon_code,
              'Basic.scss': AlertBasic_styles
            }}
          />
        }
      >
        <AlertIcon />
      </VPDemo>

      <h2 id="centered-text">Centered Text</h2>
      <p>
        Use the <code>center</code> attribute to center the text.
      </p>
      <VPDemo
        link="/src/examples/alert/Center.tsx"
        code={
          <VPCode
            language={['Center.tsx', 'Basic.scss']}
            code={{
              'Center.tsx': AlertCenter_code,
              'Basic.scss': AlertBasic_styles
            }}
          />
        }
      >
        <AlertCenter />
      </VPDemo>

      <h2 id="with-description">With Description</h2>
      <p>Description includes a message with more detailed information.</p>
      <p>
        Besides the required <code>title</code> attribute, you can add a <code>description</code>{' '}
        attribute to help you describe the alert with more details. Description can only store text
        string, and it will word wrap automatically.
      </p>
      <VPDemo
        link="/src/examples/alert/Description.tsx"
        code={
          <VPCode
            language={['Description.tsx']}
            code={{
              'Description.tsx': AlertDescription_code
            }}
          />
        }
      >
        <AlertDescription />
      </VPDemo>

      <h2 id="with-icon-and-description">With Icon and Description</h2>
      <p>At last, this is an example with both icon and description.</p>
      <VPDemo
        link="/src/examples/alert/IconDescription.tsx"
        code={
          <VPCode
            language={['IconDescription.tsx', 'Basic.scss']}
            code={{
              'IconDescription.tsx': AlertIconDescription_code,
              'Basic.scss': AlertBasic_styles
            }}
          />
        }
      >
        <AlertIconDescription />
      </VPDemo>
    </VPDocContent>
  )
}

export default AlertPage
