'use client'

import Background from '@components/Background'
import { Greeting } from '@components/Greeting'
import { Loading } from '@components/Loading'
import { useEffect, useState } from 'react'

import { Contacts, Experience, Footer, Home, Navigation, Skills, Work } from './components'

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
  }, [])

  if (isLoading === undefined) {
    return <></>
  }
  if (isLoading) {
    return (
      <Background>
        <Loading />
      </Background>
    )
  } else {
    return (
      <Background>
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
      </Background>
    )
  }
}
