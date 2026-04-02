import { SKILLS_LIST } from '@constants/data'
import { skillsIconsArr } from '@constants/icons'

import styles from './skills.module.css'

const ROW1_COUNT = Math.ceil(SKILLS_LIST.length / 2)

const row1 = SKILLS_LIST.slice(0, ROW1_COUNT)
const row2 = SKILLS_LIST.slice(ROW1_COUNT)

export const Skills = () => {
  return (
    <section className={styles.skills} id='skills'>
      <div className={styles.container}>
        <h2 className={styles.title}>My skills</h2>
        <p className={styles.text}>Technologies I work with daily to build fast, scalable, and polished products.</p>
      </div>

      <div className={styles.carouselWrapper}>
        {/* Row 1 — scrolls left */}
        <div className={styles.row}>
          <div className={styles.track}>
            {[...row1, ...row1].map((el, id) => (
              <div className={styles.card} key={id}>
                <div className={styles.iconWrap}>{skillsIconsArr[id % ROW1_COUNT]}</div>
                <p className={styles.name}>{el}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className={styles.row}>
          <div className={styles.trackReverse}>
            {[...row2, ...row2].map((el, id) => (
              <div className={styles.card} key={id}>
                <div className={styles.iconWrap}>{skillsIconsArr[ROW1_COUNT + (id % row2.length)]}</div>
                <p className={styles.name}>{el}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
