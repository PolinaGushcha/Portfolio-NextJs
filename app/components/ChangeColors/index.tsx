import { backgroundColorsPalette } from '@constants/color.constants'

import styles from './changeColors.module.css'

export const ChangeColors = () => {
  const handleColorChange = (color: string) => {
    switch (color) {
      case 'red':
        return [backgroundColorsPalette.red[0], backgroundColorsPalette.red[1]]
      case 'green':
        return [backgroundColorsPalette.green[0], backgroundColorsPalette.green[1]]
      case 'blue':
        return [backgroundColorsPalette.blue[0], backgroundColorsPalette.blue[1]]
      case 'purple':
        return [backgroundColorsPalette.purple[0], backgroundColorsPalette.purple[1]]
    }
  }

  return (
    <div>
      <div onClick={() => handleColorChange('red')} className={styles.colorBtn}></div>
      <div onClick={() => handleColorChange('green')} className={styles.colorBtn}></div>
      <div onClick={() => handleColorChange('blue')} className={styles.colorBtn}></div>
      <div onClick={() => handleColorChange('purple')} className={styles.colorBtn}></div>
    </div>
  )
}
