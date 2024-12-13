'use client'

import { BurgerMenu } from '@ui/BurgerMenu'
import { ChangeColors } from '@ui/ChangeColors'
import clsx from 'clsx'
import { useState } from 'react'

import styles from './navigation.module.css'

export const Navigation: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const handleOpen = () => {
    setIsOpened(!isOpened)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.changeColors}>
          <ChangeColors />
        </div>
        <div className={styles.hamburgerMenu}>
          <BurgerMenu handleOpen={handleOpen} />
        </div>
        <ul className={clsx(styles.navUl, isOpened && styles.changeColorsOpened)}>
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
