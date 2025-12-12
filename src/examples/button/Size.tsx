import ElButton from '@ayay/element-plus-react/components/button/ElButton.tsx'
import Search from '@element-plus/icons-svg/search.svg?react'

const ButtonSize: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap items-center mb-4">
        <ElButton size="large">Large</ElButton>
        <ElButton>Default</ElButton>
        <ElButton size="small">Small</ElButton>
        <ElButton size="large" icon={<Search />}>
          Search
        </ElButton>
        <ElButton icon={<Search />}>Search</ElButton>
        <ElButton size="small" icon={<Search />}>
          Search
        </ElButton>
      </div>

      <div className="flex flex-wrap items-center mb-4">
        <ElButton size="large" round>
          Large
        </ElButton>
        <ElButton round>Default</ElButton>
        <ElButton size="small" round>
          Small
        </ElButton>
        <ElButton size="large" icon={<Search />} round>
          Search
        </ElButton>
        <ElButton icon={<Search />} round>
          Search
        </ElButton>
        <ElButton size="small" icon={<Search />} round>
          Search
        </ElButton>
      </div>

      <div className="flex flex-wrap items-center">
        <ElButton icon={<Search />} size="large" circle />
        <ElButton icon={<Search />} circle />
        <ElButton icon={<Search />} size="small" circle />
      </div>
    </>
  )
}

export default ButtonSize
