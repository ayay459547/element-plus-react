import ElLink from '@ayay/element-plus-react/components/link/ElLink.tsx'
import type { ElLinkProps } from '@ayay/element-plus-react/components/link/types'
import styles from './Basic.module.scss'

const LinkBasic: React.FC = () => {
  const linkList: {
    props: ElLinkProps
    text: string
  }[] = [
    {
      props: {
        href: 'https://element-plus.org',
        target: '_blank'
      },
      text: 'default'
    },
    {
      props: { type: 'primary' },
      text: 'primary'
    },
    {
      props: { type: 'warning' },
      text: 'warning'
    },
    {
      props: { type: 'danger' },
      text: 'danger'
    },
    {
      props: { type: 'info' },
      text: 'info'
    }
  ]

  return (
    <div>
      {linkList.map((linkItem) => {
        return (
          <ElLink key={linkItem.text} {...linkItem.props} className={styles['el-link']}>
            {linkItem.text}
          </ElLink>
        )
      })}
    </div>
  )
}

export default LinkBasic
