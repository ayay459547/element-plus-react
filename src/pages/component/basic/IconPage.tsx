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
        <a
          href="https://react-icons.github.io/react-icons/"
          className="vp-link"
          target="_blank"
          rel="noreferrer"
        >
          React Icons
          <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" className="link-icon">
            <path
              fill="currentColor"
              d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
            ></path>
          </svg>
        </a>{' '}
        provides a set of common icons.
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
          npm: 'npm install react-icons --save',
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
