import styles from './burgerMenu.module.css'
import { IBurgerMenu } from './types'

export const BurgerMenu: React.FC<IBurgerMenu> = ({ handleOpen }) => {
  return (
    <label className={styles.hamburgerMenu}>
      <input onChange={handleOpen} type='checkbox' />
    </label>
  )
}
