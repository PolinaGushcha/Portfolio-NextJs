import { ChangeColors } from '@ui/ChangeColors'

import styles from './navigation.module.css'

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div>
          <ChangeColors />
        </div>
        <ul className={styles.navUl}>
          <li className={styles.navLi}>
            <a className={`navItem ${styles.navA}`} href='#home'>
              Home
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={`navItem ${styles.navA}`} href='#experience'>
              Experience
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={`navItem ${styles.navA}`} href='#skills'>
              Skills
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={`navItem ${styles.navA}`} href='#works'>
              Works
            </a>
          </li>
          <li className={styles.navLi}>
            <a className={`navItem ${styles.navA}`} href='#contacts'>
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
