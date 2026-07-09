import { SKILLS_LIST } from '@constants/data'
import { skillsIconsArr } from '@constants/icons'

import styles from './skills.module.css'

export const Skills = () => {
  return (
    <section className={styles.skills} id='skills'>
      <div className={styles.container}>
        <h2 className={styles.title}>My skills</h2>
        <p className={styles.text}>The technologies I use to turn ideas into fast, polished, and production-ready web and mobile experiences. </p>
        <div className={styles.skillsList}>
          {SKILLS_LIST.map((el, id) => {
            return (
              <div className={styles.card} key={id}>
                {skillsIconsArr[id]}
                <p className={styles.name}>{el}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
