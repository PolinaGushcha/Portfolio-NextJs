'use client'

import { TECHNIC_TITLES } from '@constants/data'
import DownloadIcon from '@icons/download.icon.svg'
import Gmail from '@icons/gmail.icon.svg'
import LinkedIn from '@icons/linkedin.icon.svg'
import Telegram from '@icons/telegram.icon.svg'
import { Button } from '@ui/Button/'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import styles from './greetingTitle.module.css'

const CYCLE_MS = 2400
const TRANSITION_MS = 550

// Clone of the first item appended so the last → first slide looks seamless
const DISPLAY_ITEMS = [...TECHNIC_TITLES, TECHNIC_TITLES[0]]

export const GreetingTitle = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [instant, setInstant] = useState(false)

  // Advance one step every cycle
  useEffect(() => {
    const timer = setInterval(
      () => setActiveIdx(prev => prev + 1),
      CYCLE_MS,
    )
    return () => clearInterval(timer)
  }, [])

  // When we land on the clone (index === N), wait for the transition to finish,
  // then instantly snap back to the real first item (index 0).
  // Both positions show the same content, so the reset is invisible.
  useEffect(() => {
    if (activeIdx !== TECHNIC_TITLES.length) return
    const snap = setTimeout(() => {
      setInstant(true)
      setActiveIdx(0)
      // Re-enable transition after the snap frame is painted
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setInstant(false))
      )
    }, TRANSITION_MS)
    return () => clearTimeout(snap)
  }, [activeIdx])

  return (
    <section id='greeting'>
      <div className={styles.container}>
        <h1 className={styles.title}>
          I am a frontend developer
          <div className={styles.technicsContainer}>
            <div>on</div>
            <div
              className={styles.technics}
              style={{ '--active-idx': activeIdx } as React.CSSProperties}
            >
              <div
                className={styles.technicsList}
                style={instant ? { transition: 'none' } : undefined}
              >
                {DISPLAY_ITEMS.map((el, id) => (
                  <span key={id} className={styles.technicName}>
                    {el}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </h1>
        <p className={styles.text}>
          Junior Frontend developer on mobile and web applications with 1.5 years of experience. I develop both beautiful smooth animation of
          interfaces and work with Rest API. My broad experience includes the fields of e-commerce, health apps, logistics and transportation.
        </p>
        <div className={styles.mainLinks}>
          <Link href='/files/CV_Frontend_Dev_Polina.pdf' download>
            <Button icon={<DownloadIcon />} text={'Download CV'} />
          </Link>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href='https://www.linkedin.com/in/polina-gushcha/' target='_blank'>
                <Button icon={<LinkedIn />} />
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='mailto:polina.hushcha@gmail.com' target='_blank'>
                <Button icon={<Gmail />} />
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='https://t.me/PolinaGushcha' target='_blank'>
                <Button icon={<Telegram />} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
