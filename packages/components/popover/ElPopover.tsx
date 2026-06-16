import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'
import { useNamespace } from '@ayay459547/element-plus-react/hooks/useNamespace.ts'
import clsx from 'clsx'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import type { ElPopoverInstance, ElPopoverProps } from './types'

const ElPopover = forwardRef<ElPopoverInstance, ElPopoverProps>(
  (
    {
      title,
      content,
      width = 150,
      popperClass,
      popperStyle,
      trigger = 'click',
      placement = 'bottom',
      fallbackPlacements,
      visible: manualVisible,
      onVisible,
      disabled = false,
      offset = 12,
      transition = 'el-fade-in-linear',
      showArrow = true,
      enterable = true,
      teleported = true,
      plain = false,
      children,
      ...rest
    },
    ref
  ) => {
    const ns = useNamespace('popover')
    const [internalVisible, setInternalVisible] = useState(false)

    const isControlled = manualVisible !== undefined
    const visible = isControlled ? manualVisible : internalVisible

    const handleVisibleChange = (newVisible: boolean) => {
      if (!isControlled) {
        setInternalVisible(newVisible)
      }
      onVisible?.(newVisible)
    }

    useImperativeHandle(ref, () => ({
      hide: () => {
        handleVisibleChange(false)
      }
    }))

    const actualPopperClass = clsx(ns.b(), plain && ns.m('plain'), popperClass)
    const actualPopperStyle: React.CSSProperties = {
      ...popperStyle,
      width: typeof width === 'number' ? `${width}px` : width
    }

    const popoverContent = (
      <>
        {title && (
          <div className={ns.e('title')} role="title">
            {title}
          </div>
        )}
        {content}
      </>
    )

    return (
      <ElTooltip
        {...rest}
        trigger={trigger}
        placement={placement}
        fallbackPlacements={fallbackPlacements}
        visible={visible}
        onVisible={handleVisibleChange}
        disabled={disabled}
        offset={offset}
        transition={transition}
        showArrow={showArrow}
        enterable={enterable}
        teleported={teleported}
        popperClass={actualPopperClass}
        popperStyle={actualPopperStyle}
        content={popoverContent}
      >
        {children}
      </ElTooltip>
    )
  }
)

ElPopover.displayName = 'ElPopover'

export default ElPopover
