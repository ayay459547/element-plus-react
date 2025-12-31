import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/icon.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import Link from '@/components/common/Link.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import IconSimpleUsage from '@/examples/icon/SimpleUsage.tsx'
import IconSimpleUsage_code from '@/examples/icon/SimpleUsage.tsx?raw'

const IconPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="react-Icons">React Icons</h1>
      <p>
        <Link href="https://react-icons.github.io/react-icons/">React Icons</Link> provides a set of
        common icons.
      </p>
      <p>
        Include popular icons in your React projects easily with react-icons, which utilizes ES6
        imports that allows you to include only the icons that your project is using.
      </p>

      <h2 id="installation">Installation</h2>
      <p>for standard modern project</p>
      <VPCode
        language={['npm', 'yarn', 'pnpm']}
        code={{
          npm: 'npm install react-icons',
          yarn: 'yarn add react-icons',
          pnpm: 'pnpm add react-icons'
        }}
      ></VPCode>

      <h2 id="simple-usage">Simple Usage</h2>
      <VPDemo code={<VPCode language="tsx" code={IconSimpleUsage_code} />}>
        <IconSimpleUsage />
      </VPDemo>
    </VPDocContent>
  )
}

export default IconPage
