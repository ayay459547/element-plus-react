import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/tooltip.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import TooltipBasic_styles from '@/examples/tooltip/Basic.module.scss?raw'
import TooltipBasic from '@/examples/tooltip/Basic.tsx'
import TooltipBasic_code from '@/examples/tooltip/Basic.tsx?raw'

import TooltipTheme_styles from '@/examples/tooltip/Theme.scss?raw'
import TooltipTheme from '@/examples/tooltip/Theme.tsx'
import TooltipTheme_code from '@/examples/tooltip/Theme.tsx?raw'

import TooltipRichContent from '@/examples/tooltip/RichContent.tsx'
import TooltipRichContent_code from '@/examples/tooltip/RichContent.tsx?raw'

import TooltipAdvancedUsage from '@/examples/tooltip/AdvancedUsage.tsx'
import TooltipAdvancedUsage_code from '@/examples/tooltip/AdvancedUsage.tsx?raw'

import TooltipHTMLContent from '@/examples/tooltip/HTMLContent.tsx'
import TooltipHTMLContent_code from '@/examples/tooltip/HTMLContent.tsx?raw'

import TooltipVirtualTrigger from '@/examples/tooltip/VirtualTrigger.tsx'
import TooltipVirtualTrigger_code from '@/examples/tooltip/VirtualTrigger.tsx?raw'

import TooltipSingleton_styles from '@/examples/tooltip/Singleton.scss?raw'
import TooltipSingleton from '@/examples/tooltip/Singleton.tsx'
import TooltipSingleton_code from '@/examples/tooltip/Singleton.tsx?raw'

import TooltipControlled from '@/examples/tooltip/Controlled.tsx'
import TooltipControlled_code from '@/examples/tooltip/Controlled.tsx?raw'

const TooltipPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="tooltip">Tooltip</h1>
      <p>Display prompt information for mouse hover.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>Tooltip has 9 placements.</p>
      <p>
        Use attribute <code>content</code> to set the display content when hover. The attribute{' '}
        <code>placement</code> determines the position of the tooltip. Its value is{' '}
        <code>[orientation]-[alignment]</code> with four orientations <code>top</code>,{' '}
        <code>left</code>, <code>right</code>, <code>bottom</code> and three alignments{' '}
        <code>start</code>, <code>end</code>, <code>null</code>, and the default alignment is null.
        Take <code>placement="left-end"</code> for example, Tooltip will display on the left of the
        element which you are hovering and the bottom of the tooltip aligns with the bottom of the
        element.
      </p>
      <VPDemo
        link="/src/examples/tooltip/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx', 'Basic.module.scss']}
            code={{
              'Basic.tsx': TooltipBasic_code,
              'Basic.module.scss': TooltipBasic_styles
            }}
          />
        }
      >
        <TooltipBasic />
      </VPDemo>

      <h2 id="theme">Theme</h2>
      <p>
        Tooltip has two built-in themes: <code>dark</code> and <code>light</code>.
      </p>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          To use customized theme, you will have to known where your tooltip is rendered into, if
          your tooltip is rendered into the root element, you will need to set the css rule
          globally.
        </p>
        <p>
          It is recommended that not using linear gradient background color when you using
          customized theme and showing the arrow at the same time, because the popup arrow and the
          content are two different elements, the popup arrow's style needs to be set individually,
          and when it comes to the gradient background color, it might seem a little bit weird.
        </p>
      </div>
      <p>
        Set <code>effect</code> to modify theme, and the default value is <code>dark</code>.
      </p>
      <VPDemo
        link="/src/examples/tooltip/Theme.tsx"
        code={
          <VPCode
            language={['Theme.tsx', 'Theme.scss']}
            code={{
              'Theme.tsx': TooltipTheme_code,
              'Theme.scss': TooltipTheme_styles
            }}
          />
        }
      >
        <TooltipTheme />
      </VPDemo>

      <h2 id="more-content">More Content</h2>
      <p>Display multiple lines of text and set their format.</p>
      <p>
        Override attribute <code>content</code> of <code>el-tooltip</code> by adding a slot named{' '}
        <code>content</code>.
      </p>
      <VPDemo
        link="/src/examples/tooltip/RichContent.tsx"
        code={
          <VPCode
            language={['RichContent.tsx']}
            code={{
              'RichContent.tsx': TooltipRichContent_code
            }}
          />
        }
      >
        <TooltipRichContent />
      </VPDemo>

      <h2 id="advanced-usage">Advanced usage</h2>
      <p>
        In addition to basic usages, there are some attributes that allow you to customize your own:
      </p>
      <p>
        <code>transition</code> attribute allows you to customize the animation in which the tooltip
        shows or hides, and the default value is el-fade-in-linear.
      </p>
      <p>
        <code>disabled</code> attribute allows you to disable <code>tooltip</code>. You just need
        set it to <code>true</code>.
      </p>
      <p>
        In fact, Tooltip is an extension based on{' '}
        <a
          href="https://github.com/ayay459547/element-plus-react/tree/dev/packages/components/popper"
          className="vp-link"
          target="_blank"
          rel="noreferrer"
        >
          ElPopper
          <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" className="link-icon">
            <path
              fill="currentColor"
              d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
            ></path>
          </svg>
        </a>
        , you can use any attribute that are allowed in ElPopper.
      </p>
      <VPDemo
        link="/src/examples/tooltip/AdvancedUsage.tsx"
        code={
          <VPCode
            language={['AdvancedUsage.tsx']}
            code={{
              'AdvancedUsage.tsx': TooltipAdvancedUsage_code
            }}
          />
        }
      >
        <TooltipAdvancedUsage />
      </VPDemo>

      <h2 id="html-as-content">HTML as content</h2>
      <p>The content attribute can be set to HTML string.</p>
      <div className="warning custom-block">
        <p className="custom-block-title">WARNING</p>
        <p>
          Although <code>content</code> property supports HTML strings, dynamically rendering
          arbitrary HTML on your website can be very dangerous because it can easily lead to{' '}
          <a
            href="https://en.wikipedia.org/wiki/Cross-site_scripting"
            className="vp-link"
            target="_blank"
            rel="noreferrer"
          >
            XSS attacks
            <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" className="link-icon">
              <path
                fill="currentColor"
                d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3z"
              ></path>
            </svg>
          </a>
          . So when <code>raw-content</code> is on, please make sure <code>content</code> is
          trusted, and <strong>never</strong> assign user-provided <code>content</code>.
        </p>
      </div>
      <VPDemo
        link="/src/examples/tooltip/HTMLContent.tsx"
        code={
          <VPCode
            language={['HTMLContent.tsx']}
            code={{
              'HTMLContent.tsx': TooltipHTMLContent_code
            }}
          />
        }
      >
        <TooltipHTMLContent />
      </VPDemo>

      <h2 id="virtual-triggering">Virtual triggering</h2>
      <p>
        Sometimes we want to render the tooltip on some other trigger element, we can separate the
        trigger and the content.
      </p>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          Virtual triggering tooltip is controlled component, so that you will have to control the
          visibility of the tooltip your own when this happens, <strong>YOU WILL NOT</strong> be
          able to close the tooltip by clicking somewhere else.
        </p>
      </div>
      <VPDemo
        link="/src/examples/tooltip/VirtualTrigger.tsx"
        code={
          <VPCode
            language={['VirtualTrigger.tsx']}
            code={{
              'VirtualTrigger.tsx': TooltipVirtualTrigger_code
            }}
          />
        }
      >
        <TooltipVirtualTrigger />
      </VPDemo>

      <h2 id="singleton">Singleton</h2>
      <p>
        Tooltip can also be singleton, which means you can have multiple trigger with only one
        tooltip instance, this function is implemented based on <code>Virtual triggering</code>
      </p>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          Known issue: when using singleton, the popup will be bouncing out from unexpected places
        </p>
      </div>
      <VPDemo
        link="/src/examples/tooltip/Singleton.tsx"
        code={
          <VPCode
            language={['Singleton.tsx', 'Singleton.scss']}
            code={{
              'Singleton.tsx': TooltipSingleton_code,
              'Singleton.scss': TooltipSingleton_styles
            }}
          />
        }
      >
        <TooltipSingleton />
      </VPDemo>

      <h2 id="controlled">Controlled</h2>
      <p>
        Tooltip can be controlled by the parent component, by using <code>:visible</code> you can
        implement two way binding.
      </p>
      <VPDemo
        link="/src/examples/tooltip/Controlled.tsx"
        code={
          <VPCode
            language={['Controlled.tsx']}
            code={{
              'Controlled.tsx': TooltipControlled_code
            }}
          />
        }
      >
        <TooltipControlled />
      </VPDemo>
    </VPDocContent>
  )
}

export default TooltipPage
