import ElButton from '@ayay459547/element-plus-react/components/button/ElButton.tsx'
import ElIcon from '@ayay459547/element-plus-react/components/icon/ElIcon.tsx'
import Delete from '@ayay459547/element-plus-react/icons-svg/delete.svg?react'
import Edit from '@ayay459547/element-plus-react/icons-svg/edit.svg?react'
import Search from '@ayay459547/element-plus-react/icons-svg/search.svg?react'
import Share from '@ayay459547/element-plus-react/icons-svg/share.svg?react'
import Upload from '@ayay459547/element-plus-react/icons-svg/upload.svg?react'

const ButtonIcon: React.FC = () => {
  return (
    <div>
      <ElButton type="primary" icon={<Edit />} />
      <ElButton type="primary" icon={<Share />} />
      <ElButton type="primary" icon={<Delete />} />
      <ElButton type="primary" icon={<Search />}>
        Search
      </ElButton>
      <ElButton type="primary">
        Upload
        <ElIcon className="el-icon--right">
          <Upload />
        </ElIcon>
      </ElButton>
    </div>
  )
}

export default ButtonIcon
