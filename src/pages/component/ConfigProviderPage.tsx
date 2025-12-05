import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/config-provider.md?raw'

const ConfigProviderPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Config Provider</h1>
    </VPDocContent>
  )
}

export default ConfigProviderPage
