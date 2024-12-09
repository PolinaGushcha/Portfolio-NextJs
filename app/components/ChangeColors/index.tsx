import { BACKGROUNDCOLORSPALETTE } from '@constants/color.constants'
import colorsStore from 'app/store/colorsStore'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

import styles from './changeColors.module.css'

export const ChangeColors = observer(() => {
  return (
    <div>
      {Object.keys(BACKGROUNDCOLORSPALETTE).map(bgColor => (
        <div
          key={bgColor}
          onClick={() => colorsStore.handleSetColors(bgColor)}
          className={clsx(styles.colorBtn, {
            [styles.activeBtn]: colorsStore.color === bgColor
          })}
        ></div>
      ))}
    </div>
  )
})
