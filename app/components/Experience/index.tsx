import { EDUCATION_CARDS, EXPERIENCE_CARDS } from '@constants/data'
import Link from 'next/link'

import styles from './experience.module.css'

export const Experience = () => {
  return (
    <section className={styles.experience} id='experience'>
      <div className={styles.container}>

        {/* ── My experience ── */}
        <article className={styles.article}>
          <div className={styles.title}>
            <h2 className={styles.titleText}>My experience</h2>
          </div>
          <div className={styles.cardList}>
            {EXPERIENCE_CARDS.map(el => (
              <div className={styles.cardWrapper} key={el.id}>
                <div className={styles.timelineDot} />
                <div className={styles.card}>
                  <p className={styles.cardTime}>{el.duration}</p>
                  <h3 className={styles.cardTitle}>
                    <Link href={el.link} className={styles.link} target='_blank'>
                      {el.name}
                    </Link>
                  </h3>
                  <ul className={styles.cardTextList}>
                    {el.description.map((line, i) => (
                      <li key={i}>{line.trim()}</li>
                    ))}
                  </ul>
                  <div>
                    <span className={styles.appsLabel}>Projects</span>
                    <div className={styles.appsRow}>
                      {el.products.map(product =>
                        product.link ? (
                          <Link
                            key={product.id}
                            className={styles.appChip}
                            href={product.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {product.name}
                          </Link>
                        ) : (
                          <span key={product.id} className={styles.appChip}>
                            {product.name}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* ── My education ── */}
        <article className={styles.article}>
          <div className={styles.title}>
            <h2 className={styles.titleText}>My education</h2>
          </div>
          <div className={styles.cardList}>
            {EDUCATION_CARDS.map(el => (
              <div className={styles.cardWrapper} key={el.id}>
                <div className={styles.timelineDot} />
                <div className={styles.card}>
                  <p className={styles.cardTime}>{el.date}</p>
                  <h3 className={styles.cardTitle}>
                    <Link className={styles.link} href={el.organizationLink} target='_blank'>
                      {el.name}
                    </Link>
                  </h3>
                  <p className={styles.cardText}>{el.description}</p>
                  {el.certificateLink && (
                    <Link
                      className={styles.certLink}
                      href={el.certificateLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
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
