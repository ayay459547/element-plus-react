import ElText from 'ayay-element-plus-react/components/text/ElText.tsx'
import styles from './TextBasic.module.scss'

const TextOverride: React.FC = () => {
  return (
    <div className={styles['text-override']}>
      <ElText>span</ElText>
      <ElText tag="p">This is a paragraph.</ElText>
      <ElText tag="b">Bold</ElText>
      <ElText tag="i">Italic</ElText>
      <ElText>
        This is
        <ElText tag="sub" size="small">
          subscript
        </ElText>
      </ElText>
      <ElText>
        This is
        <ElText tag="sup" size="small">
          superscript
        </ElText>
      </ElText>
      <ElText tag="ins">Inserted</ElText>
      <ElText tag="del">Deleted</ElText>
      <ElText tag="mark">Marked</ElText>
    </div>
  )
}

export default TextOverride
