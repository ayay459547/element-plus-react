import { useSidebar } from '@/hooks/sidebar'
import ElInput from '@ayay/element-plus-react/components/input/ElInput.tsx'
import Search from '@element-plus/icons-svg/search.svg?react'
import { useMemo, useState } from 'react'
import styles from './Overview.module.scss'

const Overview: React.FC = () => {
  const { sidebars } = useSidebar()

  const [query, setQuery] = useState('')

  const filteredSidebars = useMemo(() => {
    return sidebars
      .slice(1)
      .map((group) => ({
        ...group,
        children: group.children.filter((item) => {
          const value = query.trim().toLowerCase()
          return group.text.toLowerCase().includes(value) || item.text.toLowerCase().includes(value)
        })
      }))
      .filter((group) => group.children.length)
  }, [sidebars, query])

  console.log('filteredSidebars =>', filteredSidebars)

  return (
    <div className={styles['overview-container']}>
      <h1>Overview</h1>

      <p>Overview of all components.</p>

      <div className={styles['search-content']}>
        <ElInput
          value={query}
          size="large"
          placeholder="Search Components"
          prefix={<Search style={{ width: '1rem', height: '1rem' }} />}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Overview
