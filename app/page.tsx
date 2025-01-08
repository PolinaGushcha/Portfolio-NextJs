'use client'

import { Experience } from '@components/Experience'
import { Greeting } from '@components/Greeting'
import { Loading } from '@components/Loading'
import { Navigation } from '@components/Navigation'
import { Skills } from '@components/Skills'
import { Folders } from '@ui/Folders'
import { handleActiveLinkOnScroll } from '@utils/activeLinkOnScroll'
import { useEffect } from 'react'

import styles from './page.module.css'

export default function Main() {
  useEffect(() => {
    document.addEventListener('scroll', handleActiveLinkOnScroll)
  }, [])

  return (
    <div>
      <Loading />
      <div>
        <Folders />
        <Navigation />
        <main className={styles.main}>
          <Greeting />
          <Experience />
          <Skills />
        </main>
      </div>
    </div>
  )
}
