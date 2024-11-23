import { Contacts, Experience, Footer, Home, Navigation, Skills, Work } from './components'
import styles from './page.module.css'

export default function Main() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main>
        <Home />
        <Experience />
        <Skills />
        <Work />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}
