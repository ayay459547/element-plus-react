import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/button.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode'
import ElTag from 'ayay-element-plus-react/components/tag/ElTag.tsx'

import ButtonBasic_styles from '@/examples/button/Basic.module.scss?raw'
import ButtonBasic from '@/examples/button/Basic.tsx'
import ButtonBasic_code from '@/examples/button/Basic.tsx?raw'

import ButtonDisabled from '@/examples/button/Disabled.tsx'
import ButtonDisabled_code from '@/examples/button/Disabled.tsx?raw'

import ButtonGroup from '@/examples/button/Group.tsx'
import ButtonGroup_code from '@/examples/button/Group.tsx?raw'

import ButtonIcon from '@/examples/button/Icon.tsx'
import ButtonIcon_code from '@/examples/button/Icon.tsx?raw'

import ButtonLink from '@/examples/button/Link.tsx'
import ButtonLink_code from '@/examples/button/Link.tsx?raw'

import ButtonLoading_styles from '@/examples/button/Loading.module.scss?raw'
import ButtonLoading from '@/examples/button/Loading.tsx'
import ButtonLoading_code from '@/examples/button/Loading.tsx?raw'

import ButtonSize from '@/examples/button/Size.tsx'
import ButtonSize_code from '@/examples/button/Size.tsx?raw'

import ButtonTag from '@/examples/button/Tag.tsx'
import ButtonTag_code from '@/examples/button/Tag.tsx?raw'

import ButtonText from '@/examples/button/Text.tsx'
import ButtonText_code from '@/examples/button/Text.tsx?raw'

const ButtonPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="button">Button</h1>
      <p>Commonly used button.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p className="my-4">
        Use <code>type</code>, <code>plain</code>, <code>round</code> and <code>circle</code> to
        define Button's style.
      </p>
      <VPDemo
        link="/src/examples/button/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx', 'Basic.module.scss']}
            code={{
              'Basic.tsx': ButtonBasic_code,
              'Basic.module.scss': ButtonBasic_styles
            }}
          />
        }
      >
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
      <VPDemo
        link="/src/examples/button/Disabled.tsx"
        code={
          <VPCode
            language={['Disabled.tsx', 'Basic.module.scss']}
            code={{
              'Disabled.tsx': ButtonDisabled_code,
              'Basic.module.scss': ButtonBasic_styles
            }}
          />
        }
      >
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
      <VPDemo
        link="/src/examples/button/Link.tsx"
        code={
          <VPCode
            language={['Link.tsx', 'Basic.module.scss']}
            code={{
              'Link.tsx': ButtonLink_code,
              'Basic.module.scss': ButtonBasic_styles
            }}
          />
        }
      >
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
      <VPDemo
        link="/src/examples/button/Text.tsx"
        code={
          <VPCode
            language={['Text.tsx', 'Basic.module.scss']}
            code={{
              'Text.tsx': ButtonText_code,
              'Basic.module.scss': ButtonBasic_styles
            }}
          />
        }
      >
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
      <VPDemo
        link="/src/examples/button/Icon.tsx"
        code={
          <VPCode
            language={['Icon.tsx']}
            code={{
              'Icon.tsx': ButtonIcon_code
            }}
          />
        }
      >
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
      <VPDemo
        link="/src/examples/button/Group.tsx"
        code={
          <VPCode
            language={['Group.tsx']}
            code={{
              'Group.tsx': ButtonGroup_code
            }}
          />
        }
      >
        <ButtonGroup />
      </VPDemo>

      <h2 id="loading-button">Loading Button</h2>
      <p>Click the button to load data, then the button displays a loading state.</p>
      <p>
        Set <code>loading</code> attribute to <code>true</code> to display loading state.
      </p>
      <VPDemo
        link="/src/examples/button/Loading.tsx"
        code={
          <VPCode
            language={['Loading.tsx', 'Loading.module.scss']}
            code={{
              'Loading.tsx': ButtonLoading_code,
              'Loading.module.scss': ButtonLoading_styles
            }}
          />
        }
      >
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
      <VPDemo
        link="/src/examples/button/Size.tsx"
        code={
          <VPCode
            language={['Size.tsx']}
            code={{
              'Size.tsx': ButtonSize_code
            }}
          />
        }
      >
        <ButtonSize />
      </VPDemo>

      <h2 className="tag">
        Tag
        <ElTag type="primary" size="small" effect="plain" round className="ml-1">
          2.3.4
        </ElTag>
      </h2>
      <p>You can custom element tag, For example button, div, a, router-link, nuxt-link.</p>
      <VPDemo
        link="/src/examples/button/Tag.tsx"
        code={
          <VPCode
            language={['Tag.tsx']}
            code={{
              'Tag.tsx': ButtonTag_code
            }}
          />
        }
      >
        <ButtonTag />
      </VPDemo>
    </VPDocContent>
  )
}

export default ButtonPage
