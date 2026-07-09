'use client'

import { GreetingTitle } from '@ui/GreetingTitle'
import { HelloWorld } from '@ui/HelloWorld'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

import styles from './greeting.module.css'

export const Greeting = () => {
  const helloWorldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (helloWorldRef.current) {
      gsap.registerPlugin(ScrollTrigger)

      gsap.to(helloWorldRef.current, {
        scrollTrigger: {
          trigger: helloWorldRef.current,
          scrub: true,
          start: 'top top',
          end: helloWorldRef.current.offsetHeight * 0.6
        },
        opacity: 0
      })
    }
  }, [])

  return (
    <section className={styles.container}>
      <div ref={helloWorldRef} className={styles.helloWorld}>
        <HelloWorld />
      </div>
      <GreetingTitle />
    </section>
  )
}
