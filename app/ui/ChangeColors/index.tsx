'use client'

import { BACKGROUNDCOLORSPALETTE } from '@constants/color'
import { IBackgroundColorsPalette } from '@constants/types/colors.types'
import colorsStore from '@store/colorsStore'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from 'react'

import styles from './changeColors.module.css'

export const ChangeColors = observer(() => {
  const [openColorList, setOpenColorList] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownListRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenColorList(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef}>
      <div
        className={styles.changeColorBtn}
        style={{
          background: `linear-gradient( 50deg, ${BACKGROUNDCOLORSPALETTE[colorsStore.color][0]}, ${BACKGROUNDCOLORSPALETTE[colorsStore.color][1]})`
        }}
        onClick={() => setOpenColorList(!openColorList)}
      >
        Change color
      </div>
      <div ref={dropdownListRef} className={clsx(styles.colorsList, openColorList && styles.colorsListClosed)}>
        {Object.keys(BACKGROUNDCOLORSPALETTE).map(bgColor => {
          const colorName = bgColor as keyof IBackgroundColorsPalette
          return (
            <div
              key={colorName}
              style={{
                background: `linear-gradient( 50deg, ${BACKGROUNDCOLORSPALETTE[colorName][0]}, ${BACKGROUNDCOLORSPALETTE[colorName][1]})`
              }}
              onClick={() => colorsStore.handleSetColors(bgColor)}
              className={clsx(styles.colorBtn, {
                [styles.activeBtn]: colorsStore.color === bgColor
              })}
            ></div>
          )
        })}
      </div>
    </div>
  )
})
