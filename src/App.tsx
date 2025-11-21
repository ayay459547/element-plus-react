import styles from './app.module.scss'

function App() {
  return (
    <div className={styles['app']}>
      <header className={styles['navbar']}>Navbar</header>
      <main className={styles['page-content']}>
        <div className={styles['hero-content']}>Content</div>
      </main>
    </div>
  )
}

export default App
