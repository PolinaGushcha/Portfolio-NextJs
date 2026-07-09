import styles from './burgerMenu.module.css'
import { IBurgerMenu } from './types'

export const BurgerMenu: React.FC<IBurgerMenu> = ({ handleOpen, isOpened }) => {
  return (
    <label className={styles.hamburgerMenu}>
      <input onChange={handleOpen} checked={isOpened} type='checkbox' />
    </label>
  )
}
