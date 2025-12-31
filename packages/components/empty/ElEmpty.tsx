import { addUnit } from '@ayay459547/element-plus-react/utils/dom/style'
import clsx from 'clsx'
import type { CSSProperties, ReactNode } from 'react'
import styles from './ElEmpty.module.scss'
import ImgEmpty from './ImgEmpty.tsx'
import type { ElEmptyProps } from './types'

const ElEmpty: React.FC<ElEmptyProps> = ({
  image,
  imageSize,
  description,
  children,
  className,
  style,
  ...props
}) => {
  const imageStyle: CSSProperties = {}
  if (imageSize) {
    imageStyle.width = addUnit(imageSize)
  }

  let showDescription: ReactNode = description || 'No Data'
  if (typeof showDescription === 'string') {
    showDescription = <p>{showDescription}</p>
  }

  return (
    <div {...props} className={clsx('el-empty', styles['el-empty'], className)} style={style}>
      <div className={clsx('el-empty__image', styles['el-empty__image'])} style={{ ...imageStyle }}>
        {typeof image === 'string' && <img src={image} onDragStart={() => false} />}
        {typeof image !== 'string' && (image || <ImgEmpty />)}
      </div>
      <div className={clsx('el-empty__description', styles['el-empty__description'])}>
        {showDescription}
      </div>
      {children && (
        <div className={clsx('el-empty__bottom', styles['el-empty__bottom'])}>{children}</div>
      )}
    </div>
  )
}

export default ElEmpty
