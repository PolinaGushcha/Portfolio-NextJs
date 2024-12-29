import { EDUCATION, EXPERIENCE } from '@constants/data'
import EducationMedal from '@icons/educationMedal.svg'
import ExperienceMedal from '@icons/experienceMedal.svg'

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
            {EXPERIENCE.map(el => {
              return (
                <div className={styles.card} key={el.id}>
                  <p className={styles.cardTime}>date</p>
                  <h3 className={styles.cardTitle}>{el.name}</h3>
                  <p className={styles.cardText}>description</p>
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
            {EDUCATION.map(el => {
              return (
                <div className={styles.card} key={el.id}>
                  <p className={styles.cardTime}>{el.date}</p>
                  <h3 className={styles.cardTitle}>{el.name}</h3>
                  <p className={styles.cardText}>{el.description}</p>
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
