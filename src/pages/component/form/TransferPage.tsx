import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/transfer.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import TransferBasic from '@/examples/transfer/Basic.tsx'
import TransferBasic_code from '@/examples/transfer/Basic.tsx?raw'

const TransferPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="transfer">Transfer</h1>
      <h2 id="basic-usage">Basic usage</h2>
      <VPDemo
        link="/src/examples/transfer/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': TransferBasic_code
            }}
          />
        }
      >
        <TransferBasic />
      </VPDemo>
    </VPDocContent>
  )
}

export default TransferPage
