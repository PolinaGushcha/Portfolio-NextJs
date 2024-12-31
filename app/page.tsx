'use client'

import { Experience } from '@components/Experience'
import { Greeting } from '@components/Greeting'
import { Loading } from '@components/Loading'
import { Navigation } from '@components/Navigation'
import { Folders } from '@ui/Folders'
import { handleScroll } from '@utils/activeLinkOnScroll'
import { useEffect, useState } from 'react'

import styles from './page.module.css'

export default function Main() {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setIsLoading(!sessionStorage.getItem('user'))
    if (!sessionStorage.getItem('user')) {
      setTimeout(() => {
        sessionStorage.setItem('user', 'user')
        setIsLoading(false)
      }, 3000)
    }
    document.addEventListener('scroll', handleScroll)
  }, [])

  if (isLoading === undefined) {
    return <></>
  }
  if (isLoading) {
    return <Loading />
  } else {
    return (
      <>
        <Folders />
        <Navigation />
        <main className={styles.main}>
          <Greeting />
          <Experience />
        </main>
      </>
    )
  }
}
