import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/icon.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode'

import IconSimpleUsage from '@/examples/icon/SimpleUsage.tsx'
import IconSimpleUsage_code from '@/examples/icon/SimpleUsage.tsx?raw'

const IconPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="react-Icons">React Icons</h1>
      <p>
        Include popular icons in your React projects easily with react-icons, which utilizes ES6
        imports that allows you to include only the icons that your project is using.
      </p>

      <h2 id="installation">Installation</h2>
      <p>for standard modern project</p>
      <VPCode
        language={['npm', 'yarn', 'pnpm']}
        code={{
          npm: 'npm install react-icons --save',
          yarn: 'yarn add react-icons',
          pnpm: 'pnpm add react-icons'
        }}
      ></VPCode>

      <h2 id="simple-usage">Simple Usage</h2>
      <VPDemo code={<VPCode language="tsx" code={IconSimpleUsage_code}></VPCode>}>
        <IconSimpleUsage />
      </VPDemo>
    </VPDocContent>
  )
}

export default IconPage
