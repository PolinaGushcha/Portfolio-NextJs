import styles from './errorMessage.module.css'
import { IErrorMessage } from './types'

export const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
  return (
    <section className={styles.textContainer}>
      <h2>404</h2>
      <p className={styles.text}>Page not found</p>
      <p>{message}</p>
    </section>
  )
}
