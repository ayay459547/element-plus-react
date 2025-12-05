import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/avatar.md?raw'

const AvatarPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Avatar</h1>
    </VPDocContent>
  )
}

export default AvatarPage
