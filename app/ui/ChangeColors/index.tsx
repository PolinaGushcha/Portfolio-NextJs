'use client'

import { BACKGROUNDCOLORSPALETTE } from '@constants/color'
import { PaletteColor } from '@constants/types/colors.types'
import colorsStore from '@store/colorsStore'
import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './changeColors.module.css'

export const ChangeColors = observer(() => {
  const [openColorList, setOpenColorList] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownListRef = useRef<HTMLDivElement>(null)

  const { color, handleSetColors } = colorsStore
  const { baseBgGradientColor_1, baseBgGradientColor_2 } = BACKGROUNDCOLORSPALETTE[color]

  const createGradient = (color1: string, color2: string) => `linear-gradient(50deg, ${color1}, ${color2})`

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpenColorList(false)
    }
  }, [])

  const toggleColorList = () => {
    setOpenColorList(prev => !prev)
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <div ref={dropdownRef}>
      <div
        className={styles.changeColorBtn}
        style={{ background: createGradient(baseBgGradientColor_1, baseBgGradientColor_2) }}
        onClick={toggleColorList}
      >
        Change color
      </div>
      <div ref={dropdownListRef} className={clsx(styles.colorsList, openColorList && styles.colorsListClosed)}>
        {Object.entries(BACKGROUNDCOLORSPALETTE).map(([colorKey, colorValue]) => {
          return (
            <div
              key={colorKey}
              style={{ background: createGradient(colorValue.baseBgGradientColor_1, colorValue.baseBgGradientColor_2) }}
              onClick={() => handleSetColors(colorKey as PaletteColor)}
              className={clsx(styles.colorBtn, {
                [styles.activeBtn]: color === colorKey
              })}
            ></div>
          )
        })}
      </div>
    </div>
  )
})
