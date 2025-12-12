import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/button.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import ElTag from '@ayay/element-plus-react/components/tag/ElTag.tsx'

import ButtonBasic from '@/examples/button/Basic.tsx'
import ButtonDisabled from '@/examples/button/Disabled.tsx'
import ButtonGroup from '@/examples/button/Group.tsx'
import ButtonIcon from '@/examples/button/Icon.tsx'
import ButtonLink from '@/examples/button/Link.tsx'
import ButtonLoading from '@/examples/button/Loading.tsx'
import ButtonSize from '@/examples/button/Size.tsx'
import ButtonTag from '@/examples/button/Tag.tsx'
import ButtonText from '@/examples/button/Text.tsx'

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

      <h2 id="disabled-button">Disabled Button</h2>
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

      <h2 id="link-button">Link Button</h2>
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

      <h2 id="text-button">Text Button</h2>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          Text button has been upgraded with a new design since{' '}
          <ElTag type="primary" size="small" effect="plain" round>
            2.2.0
          </ElTag>{' '}
          , if you want to use the previous version like button, you might want to check Link out.
        </p>
        <p>
          The API is also updated, because the <code>type</code> attribute also represents the
          button's style. So we have to make a new API <code>text: boolean</code> for text button.
        </p>
      </div>
      <p>Buttons without border and background.</p>
      <VPDemo>
        <ButtonText />
      </VPDemo>

      <h2 id="icon-button">Icon Button</h2>
      <p>
        Use icons to add more meaning to Button. You can use icon alone to save some space, or use
        it with text.
      </p>
      <p>
        Use the <code>icon</code> attribute to add icon. You can find the icon list in Element Plus
        icon component. Adding icons to the right side of the text is achievable with an{' '}
        <code>&lt;i&gt;</code> tag. Custom icons can be used as well.
      </p>
      <VPDemo>
        <ButtonIcon />
      </VPDemo>

      <h2 id="button-group">Button Group</h2>
      <p>Displayed as a button group, can be used to group a series of similar operations.</p>
      <p>
        In{' '}
        <ElTag type="primary" size="small" effect="plain" round>
          2.11.9
        </ElTag>{' '}
        you can use the <code>direction</code> attribute.
      </p>
      <p>
        Use tag <code>&lt;el-button-group&gt;</code> to group your buttons.
      </p>
      <VPDemo>
        <ButtonGroup />
      </VPDemo>

      <h2 id="loading-button">Loading Button</h2>
      <p>Click the button to load data, then the button displays a loading state.</p>
      <p>
        Set <code>loading</code> attribute to <code>true</code> to display loading state.
      </p>
      <VPDemo>
        <ButtonLoading />
      </VPDemo>

      <h2 id="sizes">Sizes</h2>
      <p>
        Besides default size, Button component provides three additional sizes for you to choose
        among different scenarios.
      </p>
      <p>
        Use attribute <code>size</code> to set additional sizes with <code>large</code>,{' '}
        <code>small</code>.
      </p>
      <VPDemo>
        <ButtonSize />
      </VPDemo>

      <h2 className="tag">
        Tag
        <ElTag type="primary" size="small" effect="plain" round className="ml-1">
          2.3.4
        </ElTag>
      </h2>
      <p>You can custom element tag, For example button, div, a, router-link, nuxt-link.</p>
      <VPDemo>
        <ButtonTag />
      </VPDemo>
    </VPDocContent>
  )
}

export default ButtonPage
