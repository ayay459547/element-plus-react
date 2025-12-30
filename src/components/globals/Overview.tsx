import overviewIcons from '@/components/overview-icons'
import VPDocContent from '@/components/VPDocContent.tsx'
import { useSidebar } from '@/hooks/sidebar'
import ElCard from 'ayay-element-plus-react/components/card/ElCard.tsx'
import ElIcon from 'ayay-element-plus-react/components/icon/ElIcon.tsx'
import ElInput from 'ayay-element-plus-react/components/input/ElInput.tsx'
import ElTag from 'ayay-element-plus-react/components/tag/ElTag.tsx'
import Search from 'ayay-element-plus-react/icons-svg/search.svg?react'
import { Suspense, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
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

  const getIcon = (link: string) => {
    const name = link.split('/').pop()
    return name ? overviewIcons[name] : null
  }

  return (
    <VPDocContent>
      <div className={styles['overview-container']}>
        <h1>Overview</h1>

        <p>Overview of all components.</p>

        <div className={styles['search-content']}>
          <ElInput
            value={query}
            size="large"
            placeholder="Search Components"
            prefix={
              <ElIcon>
                <Search />
              </ElIcon>
            }
            className={styles['el-input']}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className={styles['main-content']}>
          {filteredSidebars.map((group) => {
            return (
              <div key={group.text} className={styles['component-group']}>
                <p className={styles['component-title']}>
                  {group.text}
                  <ElTag effect="dark" round size="small">
                    {group.children.length}
                  </ElTag>
                </p>
                <div className={styles['card-content']}>
                  {group.children.map((item) => {
                    const IconComponent = getIcon(`${item.link}`)

                    return (
                      <Link to={`${item.link}`} key={item.link}>
                        <ElCard
                          className={styles['el-card']}
                          headerClass={styles['el-card__header']}
                          bodyClass={styles['el-card__body']}
                          shadow="hover"
                          header={
                            <>
                              <span>{item.text}</span>
                              {item?.promotion && (
                                <ElTag effect="plain" round className={styles['vp-tag']}>
                                  {item?.promotion}
                                </ElTag>
                              )}
                            </>
                          }
                        >
                          {IconComponent && (
                            <Suspense fallback={<div>...</div>}>
                              <IconComponent />
                            </Suspense>
                          )}
                        </ElCard>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </VPDocContent>
  )
}

export default Overview
