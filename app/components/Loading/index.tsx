import SpinerIcon from '@icons/spinner.icon.svg'

import styles from './loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.textContainer}>
      <SpinerIcon />
      <h2>Loading</h2>
    </div>
  )
}
