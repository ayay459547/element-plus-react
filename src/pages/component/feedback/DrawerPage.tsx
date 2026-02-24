import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/drawer.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import DrawerBasicUsage from '@/examples/drawer/BasicUsage.tsx'
import DrawerBasicUsage_code from '@/examples/drawer/BasicUsage.tsx?raw'

import DrawerNoTitle from '@/examples/drawer/NoTitle.tsx'
import DrawerNoTitle_code from '@/examples/drawer/NoTitle.tsx?raw'

import CustomizationHeader from '@/examples/drawer/CustomizationHeader.tsx'
import CustomizationHeader_code from '@/examples/drawer/CustomizationHeader.tsx?raw'

import CustomizationContent from '@/examples/drawer/CustomizationContent.tsx'
import CustomizationContent_code from '@/examples/drawer/CustomizationContent.tsx?raw'

const DrawerPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="drawer">Drawer</h1>
      <p>
        Sometimes, <code>Dialog</code> does not always satisfy our requirements, let's say you have
        a massive form, or you need space to display something like{' '}
        <code>terms &amp; conditions</code>, <code>Drawer</code> has almost identical API with{' '}
        <code>Dialog</code>, but it introduces different user experience.
      </p>

      <h2 id="basic-usage">Basic Usage</h2>
      <p>Callout a temporary drawer, from multiple direction</p>
      <p>
        You must set <code>visible</code>/<code>onVisible</code> for <code>Drawer</code> like{' '}
        <code>Dialog</code> does to control the visibility of <code>Drawer</code> itself, it's{' '}
        <code>boolean</code> type. <code>Drawer</code> has three parts: <code>title</code> &amp;{' '}
        <code>body</code> &amp; <code>footer</code>, the <code>title</code> is a named slot, you can
        also set the title through attribute named <code>title</code>, default to an empty string,
        the <code>body</code> part is the main area of <code>Drawer</code>, which contains user
        defined content. When opening, <code>Drawer</code> expand itself from the{' '}
        <strong>right corner to left</strong> which size is <strong>30%</strong> of the browser
        window by default. You can change that default behavior by setting <code>direction</code>{' '}
        and <code>size</code> attribute. This show case also demonstrated how to use the{' '}
        <code>before-close</code> API, check the Attribute section for more detail
      </p>
      <VPDemo
        link="/src/examples/drawer/BasicUsage.tsx"
        code={
          <VPCode
            language={['BasicUsage.tsx']}
            code={{
              'BasicUsage.tsx': DrawerBasicUsage_code
            }}
          />
        }
      >
        <DrawerBasicUsage />
      </VPDemo>

      <h2 id="no-title">No Title</h2>
      <p>When you no longer need a title, you can remove it from the drawer.</p>
      <p>
        Set the <code>withHeader</code> attribute to <strong>false</strong>, you can remove the
        title from drawer, thus your drawer can have more space on screen. If you want to be
        accessible, make sure to set the <code>title</code> attribute.
      </p>
      <VPDemo
        link="/src/examples/drawer/NoTitle.tsx"
        code={
          <VPCode
            language={['NoTitle.tsx']}
            code={{
              'NoTitle.tsx': DrawerNoTitle_code
            }}
          />
        }
      >
        <DrawerNoTitle />
      </VPDemo>

      <h2 id="customized-content">Customized Content</h2>
      <p>
        Like <code>Dialog</code>, <code>Drawer</code> can be used to display a multitude of diverse
        interactions.
      </p>
      <VPDemo
        link="/src/examples/drawer/CustomizationContent.tsx"
        code={
          <VPCode
            language={['CustomizationContent.tsx']}
            code={{
              'CustomizationContent.tsx': CustomizationContent_code
            }}
          />
        }
      >
        <CustomizationContent />
      </VPDemo>

      <h2 id="customized-header">Customized Header</h2>
      <p>
        The <code>header</code> slot can be used to customize the area where the title is displayed.
      </p>
      <VPDemo
        link="/src/examples/drawer/CustomizationHeader.tsx"
        code={
          <VPCode
            language={['CustomizationHeader.tsx']}
            code={{
              'CustomizationHeader.tsx': CustomizationHeader_code
            }}
          />
        }
      >
        <CustomizationHeader />
      </VPDemo>
    </VPDocContent>
  )
}

export default DrawerPage
