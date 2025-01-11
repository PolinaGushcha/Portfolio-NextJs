'use client'

import { BACKGROUNDCOLORSPALETTE } from '@constants/color'
import { PaletteColor } from '@constants/types/colors.types'
import colorsStore from '@store/colorsStore'
import { mouseController } from '@utils/mouseController'
import { clsx } from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'

import styles from './background.module.css'

const Background: React.FC = observer(() => {
  const gradientBgRef = useRef<HTMLDivElement>(null)
  const cursorCircle = useRef<HTMLDivElement>(null)
  const circleRefs = Array.from({ length: 5 }, () => useRef<HTMLDivElement>(null))

  const handleChangeBgColors = () => {
    if (gradientBgRef?.current && circleRefs && cursorCircle?.current) {
      const currentColor: PaletteColor = colorsStore.color
      const { baseBgGradientColor_1, baseBgGradientColor_2, circlesColors, cursorGradientColor1, cursorGradientColor2 } =
        BACKGROUNDCOLORSPALETTE[currentColor]

      const groupedColors = Array.from({ length: circleRefs.length }, (_, i) => [circlesColors[i * 2], circlesColors[i * 2 + 1]])

      document.documentElement.style.setProperty('--baseBgGradientColor-1', baseBgGradientColor_1)
      document.documentElement.style.setProperty('--baseBgGradientColor-2', baseBgGradientColor_2)

      document.documentElement.style.setProperty('--cursorGradientColor0', cursorGradientColor1)
      document.documentElement.style.setProperty('--cursorGradientColor1', cursorGradientColor2)

      circleRefs.forEach((el, id) => {
        el.current?.style.setProperty(`--circlesColors${id}0`, groupedColors[id][0])
        el.current?.style.setProperty(`--circlesColors${id}1`, groupedColors[id][1])
      })
    }
  }

  useEffect(() => mouseController(cursorCircle?.current), [])
  useEffect(handleChangeBgColors, [colorsStore.color])

  return (
    <div ref={gradientBgRef} className={styles.gradientBg}>
      <svg className={styles.svg}>
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
            <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8' result='goo' />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
      <div className={styles.gradientsContainer}>
        <div ref={circleRefs[0]} className={clsx(styles.circleGeneral, styles.circleGradient1)}></div>
        <div ref={circleRefs[1]} className={clsx(styles.circleGeneral, styles.circleGradient2)}></div>
        <div ref={circleRefs[2]} className={clsx(styles.circleGeneral, styles.circleGradient3)}></div>
        <div ref={circleRefs[3]} className={clsx(styles.circleGeneral, styles.circleGradient4)}></div>
        <div id='cursorCircle' ref={cursorCircle} className={clsx(styles.circleGeneral, styles.cursorCircle)}></div>
      </div>
    </div>
  )
})

export default Background
