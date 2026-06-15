import VPDocContent from '@/components/VPDocContent.tsx'
import VPDemo from '@/components/VPDemo.tsx'
import VPCode from '@/components/common/VPCode.tsx'
import markdown from '@/en-US/component/calendar.md?raw'

import Basic from '@/examples/calendar/Basic.tsx'
import Basic_code from '@/examples/calendar/Basic.tsx?raw'

import Range from '@/examples/calendar/Range.tsx'
import Range_code from '@/examples/calendar/Range.tsx?raw'

import CustomContent from '@/examples/calendar/CustomContent.tsx'
import CustomContent_code from '@/examples/calendar/CustomContent.tsx?raw'

const CalendarPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1 id="calendar">Calendar</h1>
      <p>Display date.</p>

      <h2 id="basic-usage">Basic Usage</h2>
      <p>Set <code>value</code> to specify the currently displayed month. If <code>value</code> is not specified, current month is displayed. <code>value</code> supports two-way binding.</p>
      <VPDemo
        link="/src/examples/calendar/Basic.tsx"
        code={
          <VPCode
            language={['Basic.tsx']}
            code={{
              'Basic.tsx': Basic_code
            }}
          />
        }
      >
        <Basic />
      </VPDemo>

      <h2 id="custom-content">Custom Content</h2>
      <p>Customize what is displayed in the calendar cell by using <code>dateCellRender</code> prop.</p>
      <VPDemo
        link="/src/examples/calendar/CustomContent.tsx"
        code={
          <VPCode
            language={['CustomContent.tsx']}
            code={{
              'CustomContent.tsx': CustomContent_code
            }}
          />
        }
      >
        <CustomContent />
      </VPDemo>

      <h2 id="range">Range</h2>
      <p>Set the <code>range</code> attribute to specify the display range of the calendar. Start time must be Monday, end time must be Sunday, and the time span cannot exceed two months.</p>
      <VPDemo
        link="/src/examples/calendar/Range.tsx"
        code={
          <VPCode
            language={['Range.tsx']}
            code={{
              'Range.tsx': Range_code
            }}
          />
        }
      >
        <Range />
      </VPDemo>
    </VPDocContent>
  )
}

export default CalendarPage

