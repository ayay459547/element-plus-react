import type { JSX } from 'react'

import OvAffix from './OVAffix.tsx'
import OvAlert from './OVAlert.tsx'
import OvAnchor from './OVAnchor.tsx'
import OvAvatar from './OVAvatar.tsx'
import OvBacktop from './OVBacktop.tsx'
import OvBadge from './OVBadge.tsx'
import OvBorder from './OVBorder.tsx'
import OvBreadcrumb from './OVBreadcrumb.tsx'
import OvButton from './OVButton.tsx'
import OvCalendar from './OVCalendar.tsx'
import OvCard from './OVCard.tsx'
import OvCarousel from './OVCarousel.tsx'
import OvCascader from './OVCascader.tsx'
import OvCheckbox from './OVCheckbox.tsx'
import OvCollapse from './OVCollapse.tsx'
import OvColor from './OVColor.tsx'
import OvColorPicker from './OVColorPicker.tsx'
import OvColorPickerPanel from './OVColorPickerPanel.tsx'
import OvConfigProvider from './OVConfigProvider.tsx'
import OvContainer from './OVContainer.tsx'
import OvDatePicker from './OVDatePicker.tsx'
import OvDatePickerPanel from './OVDatePickerPanel.tsx'
import OvDatetimePicker from './OVDatetimePicker.tsx'
import OvDescriptions from './OVDescriptions.tsx'
import OvDialog from './OVDialog.tsx'
import OvDivider from './OVDivider.tsx'
import OvDrawer from './OVDrawer.tsx'
import OvDropdown from './OVDropdown.tsx'
import OvEmpty from './OVEmpty.tsx'
import OvForm from './OVForm.tsx'
import OvIcon from './OVIcon.tsx'
import OvImage from './OVImage.tsx'
import OvInfiniteScroll from './OVInfiniteScroll.tsx'
import OvInput from './OVInput.tsx'
import OvInputNumber from './OVInputNumber.tsx'
import OvInputTag from './OVInputTag.tsx'
import OvLayout from './OVLayout.tsx'
import OvLink from './OVLink.tsx'
import OvLoading from './OVLoading.tsx'
import OvMention from './OVMention.tsx'
import OvMenu from './OVMenu.tsx'
import OvMessage from './OVMessage.tsx'
import OvMessageBox from './OVMessageBox.tsx'
import OvNotification from './OVNotification.tsx'
import OvPageHeader from './OVPageHeader.tsx'
import OvPagination from './OVPagination.tsx'
import OvPopconfirm from './OVPopconfirm.tsx'
import OvPopover from './OVPopover.tsx'
import OvProgress from './OVProgress.tsx'
import OvRadio from './OVRadio.tsx'
import OvRate from './OVRate.tsx'
import OvResult from './OVResult.tsx'
import OvScrollbar from './OVScrollbar.tsx'
import OvSegmented from './OVSegmented.tsx'
import OvSelect from './OVSelect.tsx'
import OvSelectV2 from './OVSelectV2.tsx'
import OvSkeleton from './OVSkeleton.tsx'
import OvSlider from './OVSlider.tsx'
import OvSpace from './OVSpace.tsx'
import OvSplitter from './OVSplitter.tsx'
import OvStatistic from './OVStatistic.tsx'
import OvSteps from './OVSteps.tsx'
import OvSwitch from './OVSwitch.tsx'
import OvTable from './OVTable.tsx'
import OvTabs from './OVTabs.tsx'
import OvTag from './OVTag.tsx'
import OvText from './OVText.tsx'
import OvTimeline from './OVTimeline.tsx'
import OvTimePicker from './OVTimePicker.tsx'
import OvTimeSelect from './OVTimeSelect.tsx'
import OvTooltip from './OVTooltip.tsx'
import OvTour from './OVTour.tsx'
import OvTransfer from './OVTransfer.tsx'
import OvTree from './OVTree.tsx'
import OvTreeSelect from './OVTreeSelect.tsx'
import OvTypography from './OVTypography.tsx'
import OvUpload from './OVUpload.tsx'
import OvWatermark from './OVWatermark.tsx'

const overviewIcons: Record<string, () => JSX.Element> = {
  button: OvButton,
  border: OvBorder,
  color: OvColor,
  container: OvContainer,
  icon: OvIcon,
  layout: OvLayout,
  link: OvLink,
  text: OvText,
  scrollbar: OvScrollbar,
  space: OvSpace,
  typography: OvTypography,
  'config-provider': OvConfigProvider,
  autocomplete: OvInput,
  cascader: OvCascader,
  checkbox: OvCheckbox,
  'color-picker-panel': OvColorPickerPanel,
  'color-picker': OvColorPicker,
  'date-picker': OvDatePicker,
  'date-picker-panel': OvDatePickerPanel,
  'datetime-picker': OvDatetimePicker,
  form: OvForm,
  input: OvInput,
  'input-number': OvInputNumber,
  'input-tag': OvInputTag,
  radio: OvRadio,
  rate: OvRate,
  select: OvSelect,
  'select-v2': OvSelectV2,
  slider: OvSlider,
  switch: OvSwitch,
  'time-picker': OvTimePicker,
  'time-select': OvTimeSelect,
  transfer: OvTransfer,
  upload: OvUpload,
  avatar: OvAvatar,
  badge: OvBadge,
  calendar: OvCalendar,
  card: OvCard,
  carousel: OvCarousel,
  collapse: OvCollapse,
  descriptions: OvDescriptions,
  empty: OvEmpty,
  image: OvImage,
  'infinite-scroll': OvInfiniteScroll,
  pagination: OvPagination,
  progress: OvProgress,
  result: OvResult,
  skeleton: OvSkeleton,
  table: OvTable,
  'table-v2': OvTable,
  tag: OvTag,
  timeline: OvTimeline,
  tour: OvTour,
  tree: OvTree,
  'tree-select': OvTreeSelect,
  'tree-v2': OvTree,
  statistic: OvStatistic,
  segmented: OvSegmented,
  affix: OvAffix,
  anchor: OvAnchor,
  backtop: OvBacktop,
  breadcrumb: OvBreadcrumb,
  dropdown: OvDropdown,
  menu: OvMenu,
  'page-header': OvPageHeader,
  steps: OvSteps,
  splitter: OvSplitter,
  tabs: OvTabs,
  alert: OvAlert,
  dialog: OvDialog,
  drawer: OvDrawer,
  loading: OvLoading,
  message: OvMessage,
  'message-box': OvMessageBox,
  notification: OvNotification,
  popconfirm: OvPopconfirm,
  popover: OvPopover,
  tooltip: OvTooltip,
  divider: OvDivider,
  watermark: OvWatermark,
  mention: OvMention
}

export default overviewIcons
