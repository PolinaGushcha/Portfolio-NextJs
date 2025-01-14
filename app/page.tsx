'use client'

import { Contacts } from '@components/Contacts'
import { Experience } from '@components/Experience'
import { Greeting } from '@components/Greeting'
import { Loading } from '@components/Loading'
import { Navigation } from '@components/Navigation'
import { Skills } from '@components/Skills'
import SmoothScroll from '@components/SmoothScroll'
import { Works } from '@components/Works'
import Background from '@ui/Background'
import { Folders } from '@ui/Folders'
import { handleActiveLinkOnScroll } from '@utils/activeLinkOnScroll'
import { useEffect } from 'react'

import styles from './page.module.css'

export default function Main() {
  useEffect(() => {
    document.addEventListener('scroll', handleActiveLinkOnScroll)
  }, [])

  return (
    <>
      <Background />
      <Loading />
      <SmoothScroll>
        <Folders />
        <Navigation />
        <main className={styles.main}>
          <Greeting />
          <Experience />
          <Skills />
          <Works />
          <Contacts />
        </main>
      </SmoothScroll>
    </>
  )
}
