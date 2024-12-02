'use client'

import { Greeting } from '@components/Greeting'
import Loading from '@components/Loading'
import { useEffect, useState } from 'react'

import { Contacts, Experience, Footer, Home, Navigation, Skills, Work } from './components'
import styles from './page.module.css'

export default function Main() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(!!sessionStorage.getItem('user'))
    if (!sessionStorage.getItem('user')) {
      setTimeout(() => {
        sessionStorage.setItem('user', 'user')
        setIsLoading(true)
      }, 3000)
    }
  }, [])

  return (
    <>
      {!isLoading && <Loading />}
      <div className={styles.page}>
        <Navigation />
        <main>
          <Greeting />
          <Home />
          <Experience />
          <Skills />
          <Work />
          <Contacts />
        </main>
        <Footer />
      </div>
    </>
  )
}
