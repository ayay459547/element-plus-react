import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/guide/ssr.md?raw'

const SSRPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Server-Side Rendering(SSR)</h1>
    </VPDocContent>
  )
}

export default SSRPage
