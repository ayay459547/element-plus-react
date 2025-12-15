import styles from './Border.module.scss'

const BorderStyle: React.FC = () => {
  return (
    <table className={styles['demo-border']}>
      <tbody>
        <tr>
          <td className={styles['text']}>Name</td>
          <td className={styles['text']}>Thickness</td>
          <td className={styles['line']}>Demo</td>
        </tr>
        <tr>
          <td className={styles['text']}>Solid</td>
          <td className={styles['text']}>1px</td>
          <td className={styles['line']}>
            <div />
          </td>
        </tr>
        <tr>
          <td className={styles['text']}>Dashed</td>
          <td className={styles['text']}>2px</td>
          <td className={styles['line']}>
            <div className={styles['dashed']} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default BorderStyle
