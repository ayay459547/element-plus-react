import VPCode from '@/components/common/VPCode.tsx'
import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/component/checkbox.md?raw'
import VPDemo from '@/components/VPDemo.tsx'

import CheckboxBasic from '@/examples/checkbox/Basic.tsx'
import CheckboxDisabled from '@/examples/checkbox/Disabled.tsx'

const CheckboxPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="checkbox">Checkbox</h1>
      <p>A group of options for multiple choices.</p>
      <div className="warning custom-block">
        <p className="custom-block-title">WARNING</p>
        <p>
          <code>label</code> act as <code>value</code> has been <strong>deprecated</strong>,{' '}
          <code>label</code> is used only as display text, this action <strong>will be</strong>{' '}
          removed in <span className="vp-tag ml-1">3.0.0</span>, consider switching to new API.
        </p>
      </div>
      <div className="tip custom-block">
        <p className="custom-block-title">TIP</p>
        <p>
          New API <code>value</code> has been added in <span className="vp-tag ml-1">2.6.0</span>,
          the examples in the document all use the <code>value</code>. If you are using a version{' '}
          <strong>less than</strong> <span className="vp-tag ml-1">2.6.0</span> and using{' '}
          <code>checkbox-group</code>, please refer to:
        </p>
      </div>
      <VPCode
        language="vue"
        code={`
<template>
  <el-checkbox-group v-model="checkList">
    <!-- works when >=2.6.0, recommended ✔️ value not work when <2.6.0 ❌ -->
    <el-checkbox label="Option 1" value="Value 1" />
    <!-- works when <2.6.0, deprecated act as value when >=3.0.0 -->
    <el-checkbox label="Option 2 & Value 2" />
  </el-checkbox-group>
</template>
        `}
      />

      <h2 id="basic-usage">Basic usage</h2>
      <p>Checkbox can be used alone to switch between two states.</p>
      <p>
        Define <code>v-model</code>(bind variable) in <code>el-checkbox</code>. The default value is
        a <code>Boolean</code> for single <code>checkbox</code>, and it becomes <code>true</code>{' '}
        when selected. Content inside the <code>el-checkbox</code> tag will become the description
        following the button of the checkbox.
      </p>
      <VPDemo>
        <CheckboxBasic />
      </VPDemo>

      <h2 id="disabled-state">Disabled State</h2>
      <p>Disabled state for checkbox.</p>
      <p>
        Set the <code>disabled</code> attribute.
      </p>
      <VPDemo>
        <CheckboxDisabled />
      </VPDemo>
    </VPDocContent>
  )
}

export default CheckboxPage
