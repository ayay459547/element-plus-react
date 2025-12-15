import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/border.md?raw'
import VPDemo from '@/components/VPDemo.tsx'

import BorderStyle from '@/examples/border/Border.tsx'
import BorderRadius from '@/examples/border/Radius.tsx'
import BorderShadow from '@/examples/border/Shadow.tsx'

const BorderPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="border">Border</h1>
      <p>
        We standardize the borders that can be used in buttons, cards, pop-ups and other components.
      </p>

      <h2 id="border-style">Border style</h2>
      <p>There are few border styles to choose.</p>
      <VPDemo>
        <BorderStyle />
      </VPDemo>

      <h2 id="radius">Radius</h2>
      <p>There are few radius styles to choose.</p>
      <VPDemo>
        <BorderRadius />
      </VPDemo>

      <h2 id="shadow">Shadow</h2>
      <p>There are few shadow styles to choose.</p>
      <VPDemo>
        <BorderShadow />
      </VPDemo>
    </VPDocContent>
  )
}

export default BorderPage
