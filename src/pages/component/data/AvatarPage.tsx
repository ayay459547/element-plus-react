import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/avatar.md?raw'
import VPDemo from '@/components/VPDemo.tsx'

import AvatarBasic from '@/examples/avatar/Basic.tsx'
import AvatarTypes from '@/examples/avatar/Types.tsx'

const AvatarPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="avatar">Avatar</h1>
      <p>
        Avatars can be used to represent people or objects. It supports images, Icons, or
        characters.
      </p>

      <h2 id="basic-usage">Basic Usage</h2>
      <p>
        Use <code>shape</code> and <code>size</code> prop to set avatar's shape and size.
      </p>
      <VPDemo>
        <AvatarBasic />
      </VPDemo>

      <h2 id="types">Types</h2>
      <p>It supports images, Icons, or characters.</p>
      <VPDemo>
        <AvatarTypes />
      </VPDemo>
    </VPDocContent>
  )
}

export default AvatarPage
