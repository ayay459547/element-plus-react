import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/button.md?raw'
import VPDemo from '@/components/VPDemo.tsx'

import ButtonBasic from '@/examples/button/Basic.tsx'
import ButtonDisabled from '@/examples/button/Disabled.tsx'
import ButtonLink from '@/examples/button/Link.tsx'

const ButtonPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1>Button</h1>
      <p>Commonly used button.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p className="my-4">
        Use <code>type</code>, <code>plain</code>, <code>round</code> and <code>circle</code> to
        define Button's style.
      </p>
      <VPDemo>
        <ButtonBasic />
      </VPDemo>

      <h2>Disabled Button</h2>
      <p className="my-4">
        The <code>disabled</code> attribute determines if the button is disabled.
      </p>
      <p className="my-4">
        Use <code>disabled</code> attribute to determine whether a button is disabled. It accepts a{' '}
        <code>Boolean</code> value.
      </p>
      <VPDemo>
        <ButtonDisabled />
      </VPDemo>

      <h2>Link Button</h2>
      <div className="warning custom-block">
        <p className="custom-block-title">WARNING</p>
        <p>
          <code>type="text"</code> has been <strong>deprecated</strong>, and{' '}
          <strong>will be</strong> removed in <span className="vp-tag ml-1">3.0.0</span>, consider
          switching to new API.
        </p>
        <p>
          New API <code>link</code> has been added in <span className="vp-tag ml-1">2.2.1</span>,
          you can use <code>type</code> API to set the theme of your link button
        </p>
      </div>
      <VPDemo>
        <ButtonLink />
      </VPDemo>
    </VPDocContent>
  )
}

export default ButtonPage
