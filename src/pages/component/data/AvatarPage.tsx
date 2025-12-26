import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/avatar.md?raw'
import VPDemo from '@/components/VPDemo.tsx'

import AvatarBasic from '@/examples/avatar/Basic.tsx'
import AvatarFallback from '@/examples/avatar/Fallback.tsx'
import AvatarFit from '@/examples/avatar/Fit.tsx'
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

      <h2 id="fallback">Fallback</h2>
      <p>fallback when image load error.</p>
      <VPDemo>
        <AvatarFallback />
      </VPDemo>

      <h2 id="fit-container">Fit Container</h2>
      <p>
        Set how the image fit its container for an image avatar, same as{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
          className="vp-link"
          target="_blank"
          rel="noreferrer"
        >
          object-fit
          <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" className="link-icon">
            <path
              fill="currentColor"
              d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
            ></path>
          </svg>
        </a>
        .
      </p>
      <VPDemo>
        <AvatarFit />
      </VPDemo>
    </VPDocContent>
  )
}

export default AvatarPage
