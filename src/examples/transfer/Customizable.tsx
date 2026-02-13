import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTransfer from '@ayay459547/element-plus-react/components/transfer/ElTransfer.tsx'
import type { ElTransferProps } from '@ayay459547/element-plus-react/components/transfer/types'
import { useState } from 'react'
import styles from './Customizable.module.scss'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const TransferCustomizable: React.FC = () => {
  const [leftValue, setLeftValue] = useState<Array<string | number>>([1])
  const [rightValue, setRightValue] = useState<Array<string | number>>([1])

  const generateData = (): Option[] => {
    const data: Option[] = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `Option ${i}`,
        disabled: i % 4 === 0
      })
    }
    return data
  }

  const data = generateData()

  const renderFunc: ElTransferProps['renderContent'] = (option) => <span>{option.label}</span>

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ margin: '0 0 20px' }}>Customize data items using renderContent</p>
      <ElTransfer
        data={data}
        value={leftValue}
        onChange={setLeftValue}
        filterable
        leftDefaultChecked={[2, 3]}
        rightDefaultChecked={[1]}
        renderContent={renderFunc}
        titles={['Source', 'Target']}
        buttonTexts={['To left', 'To right']}
        format={{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }}
        leftFooter={
          <ElButton className={styles['transfer-footer']} size="small">
            Operation
          </ElButton>
        }
        rightFooter={
          <ElButton className={styles['transfer-footer']} size="small">
            Operation
          </ElButton>
        }
      />

      <p style={{ margin: '50px 0 20px' }}>Customize data items using children</p>
      <ElTransfer
        data={data}
        value={rightValue}
        onChange={setRightValue}
        filterable
        leftDefaultChecked={[2, 3]}
        rightDefaultChecked={[1]}
        // renderContent={renderFunc}
        titles={['Source', 'Target']}
        buttonTexts={['To left', 'To right']}
        format={{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}'
        }}
        leftFooter={
          <ElButton className={styles['transfer-footer']} size="small">
            Operation
          </ElButton>
        }
        rightFooter={
          <ElButton className={styles['transfer-footer']} size="small">
            Operation
          </ElButton>
        }
      >
        {(option) => (
          <span>
            {option.key} - {option.label}
          </span>
        )}
      </ElTransfer>
    </div>
  )
}

export default TransferCustomizable
