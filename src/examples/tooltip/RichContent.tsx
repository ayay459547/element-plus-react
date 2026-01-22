import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElTooltip from '@ayay459547/element-plus-react/components/tooltip/ElTooltip.tsx'

const TooltipRichContent: React.FC = () => {
  return (
    <ElTooltip
      content={
        <>
          multiple lines
          <br />
          second line{' '}
        </>
      }
      placement="top"
    >
      <ElButton>Top center</ElButton>
    </ElTooltip>
  )
}

export default TooltipRichContent
