import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/statistic.md?raw'

const StatisticPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Statistic</h1>
    </VPDocContent>
  )
}

export default StatisticPage
