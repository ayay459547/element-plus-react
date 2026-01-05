import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/guide/quickstart.md?raw'
import VPCode from '@/components/common/VPCode.tsx'

const QuickStartPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="quick-start">Quick Start</h1>
      <p>This section describes how to use Element Plus React in your project.</p>

      <h2 id="usage">Usage</h2>
      <VPCode
        language={['main.ts']}
        code={`import { ElButton } from '@ayay459547/element-plus-react'
import '@ayay459547/element-plus-react/dist/index.css'

function App() {
  return <ElButton>button</ElButton>
}`}
      ></VPCode>
    </VPDocContent>
  )
}

export default QuickStartPage
