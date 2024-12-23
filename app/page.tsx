'use client'

import { Greeting } from '@components/Greeting'
import { Loading } from '@components/Loading'
import { Folders } from '@ui/Folders'
import { handleScroll } from '@utils/activeLinkOnScroll'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useState } from 'react'

import { Contacts, Experience, Footer, Home, Navigation, Skills, Works } from './components'

export default function Main() {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

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
        <Navigation />
        <main>
          <Folders>
            <Greeting />
            <Home />
          </Folders>
          <Experience />
          {/* <Skills /> */}
          {/* <Works /> */}
          {/* <Contacts /> */}
        </main>
        {/* <Footer /> */}
      </>
    )
  }
}
