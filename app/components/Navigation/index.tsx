'use client'

import { BurgerMenu } from '@ui/BurgerMenu'
import { ChangeColors } from '@ui/ChangeColors'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import styles from './navigation.module.css'

export const Navigation: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const ref = useRef<HTMLElement>(null)

  const handleOpen = () => {
    setIsOpened(!isOpened)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && (!ref.current.contains(event.target as Node) || event.target instanceof HTMLAnchorElement)) {
      setIsOpened(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav ref={ref} className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.changeColors}>
          <ChangeColors />
        </div>
        <div className={styles.hamburgerMenu}>
          <BurgerMenu isOpened={isOpened} handleOpen={handleOpen} />
        </div>
        <ul className={clsx(styles.navUl, isOpened && styles.changeColorsOpened)}>
          <li className={styles.navLi}>
            <Link className={`navItem ${styles.navA}`} href='#greeting'>
              Home
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link className={`navItem ${styles.navA}`} href='#experience'>
              Experience
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link className={`navItem ${styles.navA}`} href='#skills'>
              Skills
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link className={`navItem ${styles.navA}`} href='#works'>
              Works
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link className={`navItem ${styles.navA}`} href='#contacts'>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
