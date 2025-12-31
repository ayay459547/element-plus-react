import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/card.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import CardBasic from '@/examples/card/Basic.tsx'
import CardBasic_code from '@/examples/card/Basic.tsx?raw'

import CardShadow from '@/examples/card/Shadow.tsx'
import CardShadow_code from '@/examples/card/Shadow.tsx?raw'

import CardSimple from '@/examples/card/Simple.tsx'
import CardSimple_code from '@/examples/card/Simple.tsx?raw'

import CardWithImages from '@/examples/card/WithImages.tsx'
import CardWithImages_code from '@/examples/card/WithImages.tsx?raw'

const CardPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="card">Card</h1>
      <p>Integrate information in a card container.</p>

      <h2 id="basic-usage">Basic usage</h2>
      <p>Card includes title, content and operations.</p>
      <p>
        Card is made up of <code>header</code>, <code>body</code> and <code>footer</code>.{' '}
        <code>header</code> and <code>footer</code> are optional, and its content distribution
        depends on a named slot.
      </p>
      <VPDemo
        link="/src/examples/card/Basic.tsx"
        code={<VPCode language="tsx" code={CardBasic_code} />}
      >
        <CardBasic />
      </VPDemo>

      <h2 id="simple-card">Simple card</h2>
      <p>The header part can be omitted.</p>
      <VPDemo
        link="/src/examples/card/Simple.tsx"
        code={<VPCode language="tsx" code={CardSimple_code} />}
      >
        <CardSimple />
      </VPDemo>

      <h2 id="with-images">With images</h2>
      <p>Display richer content by adding some configs.</p>
      <p>
        The <code>body-style</code> attribute defines CSS style of custom <code>body</code>.
      </p>
      <VPDemo
        link="/src/examples/card/WithImages.tsx"
        code={<VPCode language="tsx" code={CardWithImages_code} />}
      >
        <CardWithImages />
      </VPDemo>

      <h2 id="shadow">Shadow</h2>
      <p>You can define when to show the card shadows</p>
      <p>
        The <code>shadow</code> attribute determines when the card shadows are displayed. It can be{' '}
        <code>always</code>, <code>hover</code> or <code>never</code>.
      </p>
      <VPDemo
        link="/src/examples/card/Shadow.tsx"
        code={<VPCode language="tsx" code={CardShadow_code} />}
      >
        <CardShadow />
      </VPDemo>
    </VPDocContent>
  )
}

export default CardPage
