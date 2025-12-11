import DesignGuide from '@/components/globals/DesignGuide.tsx'
import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/guide/design.md?raw'

const DesignPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="design-disciplines">Design Disciplines</h1>

      <DesignGuide />

      <h2 id="consistency">Consistency</h2>
      <ul>
        <li>
          <p>
            <strong>Consistent with real life:</strong> in line with the process and logic of real
            life, and comply with languages and habits that the users are used to.
          </p>
        </li>
        <li>
          <p>
            <strong>Consistent within interface:</strong> all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </p>
        </li>
      </ul>

      <h2 id="feedback">Feedback</h2>
      <ul>
        <li>
          <p>
            <strong>Operation feedback:</strong> enable the users to clearly perceive their
            operations by style updates and interactive effects.
          </p>
        </li>
        <li>
          <p>
            <strong>Visual feedback:</strong> reflect current state by updating or rearranging
            elements of the page.
          </p>
        </li>
      </ul>

      <h2 id="efficiency">Efficiency</h2>
      <ul>
        <li>
          <p>
            <strong>Simplify the process:</strong> keep operating process simple and intuitive.
          </p>
        </li>
        <li>
          <p>
            <strong>Definite and clear:</strong> enunciate your intentions clearly so that the users
            can quickly understand and make decisions.
          </p>
        </li>
        <li>
          <p>
            <strong>Easy to identify:</strong> the interface should be straightforward, which helps
            the users to identify and frees them from memorizing and recalling.
          </p>
        </li>
      </ul>

      <h2 id="controllability">Controllability</h2>
      <ul>
        <li>
          <p>
            <strong>Decision making:</strong> giving advice about operations is acceptable, but do
            not make decisions for the users.
          </p>
        </li>
        <li>
          <p>
            <strong>Controlled consequences:</strong> users should be granted the freedom to
            operate, including canceling, aborting or terminating current operation.
          </p>
        </li>
      </ul>
    </VPDocContent>
  )
}

export default DesignPage
