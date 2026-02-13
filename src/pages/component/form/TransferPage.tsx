import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/transfer.md?raw'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'

import TransferBasic from '@/examples/transfer/Basic.tsx'
import TransferBasic_code from '@/examples/transfer/Basic.tsx?raw'

import TransferFilterable from '@/examples/transfer/Filterable.tsx'
import TransferFilterable_code from '@/examples/transfer/Filterable.tsx?raw'

import TransferCustomizable_styles from '@/examples/transfer/Customizable.module.scss?raw'
import TransferCustomizable from '@/examples/transfer/Customizable.tsx'
import TransferCustomizable_code from '@/examples/transfer/Customizable.tsx?raw'

import TransferEmptyContent from '@/examples/transfer/EmptyContent.tsx'
import TransferEmptyContent_code from '@/examples/transfer/EmptyContent.tsx?raw'

import TransferPropAlias from '@/examples/transfer/PropAlias.tsx'
import TransferPropAlias_code from '@/examples/transfer/PropAlias.tsx?raw'

const TransferPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="transfer">Transfer</h1>

      <h2 id="basic-usage">Basic usage</h2>
      <p>
        Data is passed to Transfer via the <code>data</code> attribute. The data needs to be an
        object array, and each object should have these attributes: <code>key</code> being the
        identification of the data item, <code>label</code> being the displayed text, and{' '}
        <code>disabled</code> indicating if the data item is disabled. Items inside the target list
        are in sync with the variable binding to <code>value</code>/<code>onChange</code>, and the
        value of that variable is an array of target item keys. So, if you don't want the target
        list be initially empty, you can initialize the <code>value</code>/<code>onChange</code>{' '}
        with an array.
      </p>
      <VPDemo
        link="/src/examples/transfer/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': TransferBasic_code
            }}
          />
        }
      >
        <TransferBasic />
      </VPDemo>

      <h2 id="filterable">Filterable</h2>
      <p>You can search and filter data items.</p>
      <p>
        Set the <code>filterable</code> attribute to <code>true</code> to enable filter mode. By
        default, if the data item <code>label</code> contains the search keyword, it will be
        included in the search result. Also, you can implement you own filter method with the{' '}
        <code>filterMethod</code> attribute. It takes a method and passes search keyword and each
        data item to it whenever the keyword changes. For a certain data item, if the method returns
        true, it will be included in the result list.
      </p>
      <VPDemo
        link="/src/examples/transfer/Filterable.tsx"
        code={
          <VPCode
            language={['Filterable.tsx']}
            code={{
              'Filterable.tsx': TransferFilterable_code
            }}
          />
        }
      >
        <TransferFilterable />
      </VPDemo>

      <h2 id="customizable">Customizable</h2>
      <p>
        You can customize list titles, button texts, render function for data items, checking status
        texts in list footer and list footer contents.
      </p>
      <p>
        Use <code>titles</code>, <code>buttonTexts</code>, <code>renderContent</code> and{' '}
        <code>format</code> to respectively customize list titles, button texts, render function for
        data items, checking status texts in list header. Plus, you can also use scoped slot to
        customize data items. For list footer contents, two named slots are provided:{' '}
        <code>leftFooter</code> and <code>rightFooter</code>. Plus, if you want some items initially
        checked, you can use <code>leftDefaultChecked</code> and <code>rightDefaultChecked</code>.
        Finally, this example demonstrate the <code>change</code> event. Note that this demo can't
        run in JSFiddle because it doesn't support JSX syntax. In a real project,{' '}
        <code>renderContent</code> will work if relevant dependencies are correctly configured.
      </p>
      <VPDemo
        link="/src/examples/transfer/Customizable.tsx"
        code={
          <VPCode
            language={['Customizable.tsx', 'Customizable.module.scss']}
            code={{
              'Customizable.tsx': TransferCustomizable_code,
              'Customizable.module.scss': TransferCustomizable_styles
            }}
          />
        }
      >
        <TransferCustomizable />
      </VPDemo>

      <h2 id="custom-empty-content">
        Custom empty content
        <span className="vp-tag ml-1">2.9.0</span>
      </h2>
      <p>
        You can customize the content when the list is empty or when no filtering results are found.
      </p>
      <p>
        Use <code>leftEmpty</code> and <code>rightEmpty</code> slots to customize the empty content
        for each panel.
      </p>
      <VPDemo
        link="/src/examples/transfer/EmptyContent.tsx"
        code={
          <VPCode
            language={['EmptyContent.tsx']}
            code={{
              'EmptyContent.tsx': TransferEmptyContent_code
            }}
          />
        }
      >
        <TransferEmptyContent />
      </VPDemo>

      <h2 id="prop-aliases">Prop aliases</h2>
      <p>
        By default, Transfer looks for <code>key</code>, <code>label</code> and{' '}
        <code>disabled</code> in a data item. If your data items have different key names, you can
        use the <code>props</code> attribute to define aliases.
      </p>
      <p>
        The data items in this example do not have <code>key</code>s or <code>label</code>s, instead
        they have <code>value</code>s and <code>desc</code>s. So you need to set aliases for{' '}
        <code>key</code> and <code>label</code>.
      </p>
      <VPDemo
        link="/src/examples/transfer/PropAlias.tsx"
        code={
          <VPCode
            language={['PropAlias.tsx']}
            code={{
              'PropAlias.tsx': TransferPropAlias_code
            }}
          />
        }
      >
        <TransferPropAlias />
      </VPDemo>
    </VPDocContent>
  )
}

export default TransferPage
