import ElLink from '@ayay459547/element-plus-react/components/link/ElLink.tsx'
import type { ElLinkProps } from '@ayay459547/element-plus-react/components/link/types'
import styles from './Basic.module.scss'

const LinkDisabled: React.FC = () => {
  const linkList: {
    props: ElLinkProps
    text: string
  }[] = [
    {
      props: {
        href: 'https://element-plus.org',
        target: '_blank',
        disabled: true
      },
      text: 'default'
    },
    {
      props: { type: 'primary', disabled: true },
      text: 'primary'
    },
    {
      props: { type: 'warning', disabled: true },
      text: 'warning'
    },
    {
      props: { type: 'danger', disabled: true },
      text: 'danger'
    },
    {
      props: { type: 'info', disabled: true },
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

export default LinkDisabled
