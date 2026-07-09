'use client'

import { WORKS_CARDS } from '@constants/data'
import clsx from 'clsx'
import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'

import styles from './works.module.css'

const EXIT_DURATION = 220

export const Works = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [displayIndex, setDisplayIndex] = useState<number>(0)
  const [isExiting, setIsExiting] = useState(false)
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const tabRefs = useRef<(HTMLDivElement | null)[]>([])
  const [gladeStyle, setGladeStyle] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const tab = tabRefs.current[selectedIndex]
    if (!tab) return
    setGladeStyle({ left: tab.offsetLeft, width: tab.offsetWidth })
  }, [selectedIndex])

  const handleTabChange = (id: number) => {
    if (id === selectedIndex || isExiting) return
    setSelectedIndex(id)
    setIsExiting(true)
    if (exitTimer.current) clearTimeout(exitTimer.current)
    exitTimer.current = setTimeout(() => {
      setDisplayIndex(id)
      setIsExiting(false)
    }, EXIT_DURATION)
  }

  const activeCards = WORKS_CARDS[displayIndex]?.cards ?? []

  return (
    <section className={styles.works} id='works'>
      <div className={styles.container}>
        <h2 className={styles.titleText}>My works</h2>
        <p className={styles.text}>
          A mix of commercial products shipped through companies I've worked with, and personal projects built to showcase my range. From little web
          and mobile apps platforms to bigger ones and Chrome extensions. Browse by stack, check my CV, or send me a message to learn more.
        </p>

        <div className={styles.tabsContainer}>
          <div className={styles.tabs}>
            <div className={styles.glade} style={{ left: `${gladeStyle.left}px`, width: `${gladeStyle.width}px` }} />
            {WORKS_CARDS.map(el => el.tech).map((el, id) => (
              <div
                className={clsx(styles.tab, selectedIndex === id && styles.activeTab)}
                key={id}
                ref={el => {
                  tabRefs.current[id] = el
                }}
                onClick={() => handleTabChange(id)}
              >
                <p className={styles.tabText}>{el}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={clsx(styles.cardContainer, isExiting && styles.cardExiting)}>
          {activeCards.map(card => (
            <div className={styles.card} key={card.id}>
              <div className={styles.image}>{card.image ? <Image className={styles.imageObject} src={card.image} alt={card.title} /> : null}</div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                {card.link && (
                  <a className={styles.cardLink} href={card.link} target='_blank' rel='noopener noreferrer'>
                    View project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
