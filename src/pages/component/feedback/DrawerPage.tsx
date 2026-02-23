import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/drawer.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import DrawerBasicUsage from '@/examples/drawer/BasicUsage.tsx'
import DrawerBasicUsage_code from '@/examples/drawer/BasicUsage.tsx?raw'

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
    </VPDocContent>
  )
}

export default DrawerPage
