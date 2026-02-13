import ElCheckbox from '@ayay459547/element-plus-react/components/checkbox/ElCheckbox.tsx'
import ElCheckboxGroup from '@ayay459547/element-plus-react/components/checkbox/ElCheckboxGroup.tsx'
import ElInput from '@ayay459547/element-plus-react/components/input/ElInput.tsx'
import Search from '@ayay459547/element-plus-react/icons-svg/search.svg?react'
import { isEmpty } from '@ayay459547/element-plus-react/utils/types.ts'
import clsx from 'clsx'
import { forwardRef } from 'react'
import './ElTransfer.scss'
import { useCheck } from './hooks/useCheck.ts'
import type { ElTransferPanelProps } from './types'

const COMPONENT_NAME = 'ElTransferPanel'

const ElTransferPanel: React.FC<ElTransferPanelProps> = forwardRef<
  HTMLDivElement,
  ElTransferPanelProps
>((props, ref) => {
  const {
    checked,
    setChecked,
    data = [],
    title,
    filterable,
    placeholder = 'Enter keyword',
    filterMethod,
    format = {},
    propsAlias,
    optionRender,
    empty,
    children,
    className,
    style
  } = props

  const {
    filteredData,
    checkedSummary,
    isIndeterminate,
    handleAllCheckedChange,
    // panelState
    isAllChecked,
    query,
    allChecked,
    setAllChecked,
    setQuery
  } = useCheck({
    ...props,
    filterMethod,
    format
  })

  const hasNoMatch = !isEmpty(query) && isEmpty(filteredData)

  const hasFooter = !isEmpty(children)

  return (
    <div ref={ref} className={clsx('el-transfer-panel', className)} style={{ ...style }}>
      <p className="el-transfer-panel__header">
        <ElCheckbox
          checked={isAllChecked && allChecked}
          onChange={(e) => {
            setAllChecked(e.target.checked)
            handleAllCheckedChange(e.target.checked)
          }}
          indeterminate={isIndeterminate}
          // validateEvent={false}
        >
          {title}
          <span>{checkedSummary}</span>
        </ElCheckbox>
      </p>

      <div className={clsx('el-transfer-panel__body', hasFooter ? 'is-with-footer' : '')}>
        {filterable && (
          <ElInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="el-transfer-panel__filter"
            size="default"
            placeholder={placeholder}
            prefixIcon={<Search />}
            clearable
            // validateEvent={false}
          />
        )}

        {!hasNoMatch && !isEmpty(data) && (
          <ElCheckboxGroup
            value={checked}
            onChange={(newValue) => {
              setChecked(newValue ?? [])
            }}
            // validateEvent={false}
            className={clsx('el-transfer-panel__list', filterable ? 'is-filterable' : '')}
          >
            {filteredData.map((item) => {
              return (
                <ElCheckbox
                  key={item[propsAlias.key]}
                  className="el-transfer-panel__item"
                  value={item[propsAlias.key]}
                  disabled={item[propsAlias.disabled]}
                  // validateEvent={false}
                >
                  {optionRender && optionRender(item)}
                </ElCheckbox>
              )
            })}
          </ElCheckboxGroup>
        )}
        {(hasNoMatch || isEmpty(data)) && (
          <div className="el-transfer-panel__empty">
            {!isEmpty(empty)
              ? empty
              : // hasNoMatch ? t('el.transfer.noMatch') : t('el.transfer.noData')
                hasNoMatch
                ? 'No matching data'
                : 'No data'}
          </div>
        )}
      </div>

      {hasFooter && <p className="el-transfer-panel__footer">{children}</p>}
    </div>
  )
})

ElTransferPanel.displayName = COMPONENT_NAME

export default ElTransferPanel
