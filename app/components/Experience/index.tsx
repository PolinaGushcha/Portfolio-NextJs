'use client'

import { EDUCATION_CARDS, EXPERIENCE_CARDS } from '@constants/data'
import { useLenis } from 'lenis/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import styles from './experience.module.css'

export const Experience = () => {
  const [openId, setOpenId] = useState<number | null>(null)
  const lenis = useLenis()

  const toggle = (id: number) => setOpenId(prev => (prev === id ? null : id))

  useEffect(() => {
    const t = setTimeout(() => lenis?.resize(), 750)
    return () => clearTimeout(t)
  }, [openId, lenis])

  return (
    <section className={styles.experience} id='experience'>
      <div className={styles.container}>
        {/* ── My experience ── */}
        <article className={styles.article}>
          <div className={styles.title}>
            <h2 className={styles.titleText}>My experience</h2>
          </div>
          <div className={styles.cardList}>
            {EXPERIENCE_CARDS.map(el => {
              const isOpen = openId === el.id
              return (
                <div className={styles.cardWrapper} key={el.id}>
                  <div className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}>
                    <p className={styles.cardTime}>{el.duration}</p>
                    <h3 className={styles.cardTitle}>
                      <Link href={el.link} className={styles.link} target='_blank'>
                        {el.name}
                      </Link>
                    </h3>
                    <p className={styles.cardDescription}>{el.description}</p>

                    <div className={styles.detailsPanel}>
                      <ul className={styles.cardTextList}>
                        {el.responsibilities.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                      <p className={styles.appsLabel}>
                        Team: <span>{el.team.join(', ')}</span>
                      </p>
                      {el.products && (
                        <div>
                          <span className={styles.projectsTitle}>Projects:</span>
                          {el.products.map(product =>
                            product.link ? (
                              <Link key={product.id} className={styles.appChip} href={product.link} target='_blank' rel='noopener noreferrer'>
                                {product.name}
                              </Link>
                            ) : (
                              <span key={product.id} className={styles.appChip}>
                                {product.name}
                              </span>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    <button className={styles.hoverHint} onClick={() => toggle(el.id)} aria-expanded={isOpen}>
                      {isOpen ? 'Close' : 'Details'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </article>

        <div className={styles.divider} />

        {/* ── My education ── */}
        <article className={styles.article}>
          <div className={styles.title}>
            <h2 className={styles.titleText}>My education</h2>
          </div>
          <div className={styles.cardList}>
            {EDUCATION_CARDS.map(el => (
              <div className={styles.cardWrapper} key={el.id}>
                {/* <div className={styles.timelineDot} /> */}
                <div className={styles.card}>
                  <p className={styles.cardTime}>{el.date}</p>
                  <h3 className={styles.cardTitle}>
                    <Link className={styles.link} href={el.organizationLink} target='_blank'>
                      {el.name}
                    </Link>
                  </h3>
                  <p className={styles.cardText}>{el.description}</p>
                  {el.certificateLink && (
                    <Link className={styles.certLink} href={el.certificateLink} target='_blank' rel='noopener noreferrer'>
                      View certificate →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
