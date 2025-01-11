import { TECHNIC_TITLES } from '@constants/data'

import styles from './works.module.css'

export const Works = () => {
  return (
    <section className={styles.works} id='works'>
      <h2>Works</h2>
      <div>
        {TECHNIC_TITLES.map((el, id) => {
          return (
            <div key={id}>
              <p>{el}</p>
            </div>
          )
        })}
        <div>
          <div>
            <div>
              <h3>Card title</h3>
              <p>card description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
