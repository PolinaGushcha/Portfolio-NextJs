import { EDUCATION_CARDS, EXPERIENCE_CARDS } from '@constants/data'
import EducationMedal from '@icons/educationMedal.svg'
import ExperienceMedal from '@icons/experienceMedal.svg'
import Link from 'next/link'

import styles from './experience.module.css'

export const Experience = () => {
  return (
    <section className={styles.experience} id='experience'>
      <div className={styles.container}>
        <article className={styles.article}>
          <div className={styles.title}>
            <ExperienceMedal />
            <h2 className={styles.titleText}>My experience</h2>
          </div>
          <div className={styles.cardList}>
            {EXPERIENCE_CARDS.map(el => {
              return (
                <div className={styles.card} key={el.id}>
                  <p className={styles.cardTime}>{el.duration}</p>
                  <Link href={el.link} target='_blank'>
                    <h3 className={styles.cardTitle}>{el.name}</h3>
                  </Link>
                  <p className={styles.cardText}>{el.description}</p>
                  <div>
                    <p>
                      My apps:{' '}
                      {el.products.map(product =>
                        product.link ? (
                          <Link key={product.id} href={product.link}>
                            {product.name},
                          </Link>
                        ) : (
                          <span key={product.id}>{product.name}</span>
                        )
                      )}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.title}>
            <EducationMedal />
            <h2 className={styles.titleText}>My education</h2>
          </div>
          <div className={styles.cardList}>
            {EDUCATION_CARDS.map(el => {
              return (
                <div className={styles.card} key={el.id}>
                  <p className={styles.cardTime}>{el.date}</p>
                  <h3 className={styles.cardTitle}>
                    <Link href={el.organizationLink}>{el.name}</Link>
                  </h3>
                  <p className={styles.cardText}>{el.description}</p>
                  {el.certificateLink && <Link href={el.certificateLink}>Certification</Link>}
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
