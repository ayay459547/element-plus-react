import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import ArrowLeft from '@ayay459547/element-plus-react/icons-svg/arrow-left.svg?react'
import ArrowRight from '@ayay459547/element-plus-react/icons-svg/arrow-right.svg?react'
import { isEmpty, isUndefined } from '@ayay459547/element-plus-react/utils/types.ts'
import clsx from 'clsx'
import { forwardRef, useMemo, useState } from 'react'
import './ElTransfer.scss'
import ElTransferPanel from './ElTransferPanel.tsx'
import { useComputedData } from './hooks/useComputedData.ts'
import { usePropsAlias } from './hooks/usePropsAlias.ts'
import type { ElTransferProps, TransferCheckedState, TransferDataItem } from './types.ts'

const COMPONENT_NAME = 'ElTransfer'

const ElTransfer: React.FC<ElTransferProps> = forwardRef<HTMLDivElement, ElTransferProps>(
  (props, ref) => {
    const {
      value = [],
      onChange,
      data = [],
      filterable = false,
      filterPlaceholder,
      filterMethod,
      targetOrder = 'original',
      titles = [],
      buttonTexts = [],
      renderContent,
      format,
      // props,
      leftDefaultChecked,
      rightDefaultChecked,
      // validateEvent = true,
      children,
      className,
      style
    } = props

    const [checkedState, setCheckedState] = useState<TransferCheckedState>({
      leftChecked: [],
      rightChecked: []
    })

    const propsAlias = usePropsAlias(props.props)

    const { sourceData, targetData } = useComputedData(props)

    const optionRender = useMemo(() => {
      return (option: TransferDataItem) => {
        // custom render
        if (typeof renderContent === 'function') {
          return renderContent(option)
        }

        if (children) {
          const nodes = children({ option })
          if (nodes) return nodes
        }

        return <span>{option[propsAlias.label] ?? option[propsAlias.key]}</span>
      }
    }, [renderContent, children, propsAlias.label, propsAlias.key])

    const hasButtonTexts = buttonTexts.length === 2

    // const leftPanelTitle = titles[0] || t('el.transfer.titles.0')
    // const rightPanelTitle = titles[1] || t('el.transfer.titles.1')
    const leftPanelTitle = titles[0] || 'List 1'
    const rightPanelTitle = titles[1] || 'List 2'

    const addToLeft = () => {}
    const addToRight = () => {}

    return (
      <div ref={ref} className={clsx('el-transfer', className)} style={{ ...style }}>
        <ElTransferPanel
          data={sourceData}
          title={leftPanelTitle}
          filterable={filterable}
          placeholder={filterPlaceholder}
          filterMethod={filterMethod}
          format={format}
          propsAlias={propsAlias}
          optionRender={optionRender}
        />
        <div className="el-transfer__buttons">
          <ElButton
            type="primary"
            className={clsx('el-transfer__button', hasButtonTexts ? 'is-with-texts' : '')}
            disabled={isEmpty(checkedState.rightChecked)}
            onClick={() => addToLeft()}
          >
            <ElIcon>
              <ArrowLeft />
            </ElIcon>
            {!isUndefined(buttonTexts[0]) && <span>{buttonTexts[0]}</span>}
          </ElButton>
          <ElButton
            type="primary"
            className={clsx('el-transfer__button', hasButtonTexts ? 'is-with-texts' : '')}
            disabled={isEmpty(checkedState.rightChecked)}
            onClick={() => addToRight()}
          >
            {!isUndefined(buttonTexts[1]) && <span>{buttonTexts[1]}</span>}
            <ElIcon>
              <ArrowRight />
            </ElIcon>
          </ElButton>
        </div>
        <ElTransferPanel
          data={targetData}
          title={rightPanelTitle}
          filterable={filterable}
          placeholder={filterPlaceholder}
          filterMethod={filterMethod}
          format={format}
          propsAlias={propsAlias}
          optionRender={optionRender}
        />
      </div>
    )
  }
)

ElTransfer.displayName = COMPONENT_NAME

export default ElTransfer
