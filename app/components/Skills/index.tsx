import { SKILLS } from '@constants/data'
import { skillsIconsArr } from '@constants/icons'

import styles from './skills.module.css'

export const Skills = () => {
  return (
    <section className={styles.skills} id='skills'>
      <div className={styles.container}>
        <h2 className={styles.title}>My skills</h2>
        <p className={styles.text}>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        <div className={styles.skillsList}>
          {SKILLS.map((el, id) => {
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
