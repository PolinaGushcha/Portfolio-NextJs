'use client'

import { BACKGROUNDCOLORSPALETTE } from '@constants/color'
import colorsStore from '@store/colorsStore'
import { mouseController } from '@utils/mouseController'
import { clsx } from 'clsx'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'

import styles from './background.module.css'
import { IBackground } from './types'

const Background: React.FC<IBackground> = observer(({ children }) => {
  const gradientBgRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const circleRefs = Array.from({ length: 5 }, () => useRef<HTMLDivElement>(null))

  const handleChangeBgColors = () => {
    if (gradientBgRef?.current && circleRefs && interactiveRef?.current) {
      const groupedColors = Array.from({ length: circleRefs.length }, (_, i) => [
        BACKGROUNDCOLORSPALETTE[colorsStore.color][2][i * 2],
        BACKGROUNDCOLORSPALETTE[colorsStore.color][2][i * 2 + 1]
      ])

      gradientBgRef.current.style.setProperty('--color-gradient-bg1', BACKGROUNDCOLORSPALETTE[colorsStore.color][0])
      gradientBgRef.current.style.setProperty('--color-gradient-bg2', BACKGROUNDCOLORSPALETTE[colorsStore.color][1])

      interactiveRef.current.style.setProperty('--color-interactive0', BACKGROUNDCOLORSPALETTE[colorsStore.color][3])
      interactiveRef.current.style.setProperty('--color-interactive1', BACKGROUNDCOLORSPALETTE[colorsStore.color][4])

      circleRefs.forEach((el, id) => {
        el.current?.style.setProperty(`--color-circle${id}0`, groupedColors[id][0])
        el.current?.style.setProperty(`--color-circle${id}1`, groupedColors[id][1])
      })
    }
  }

  useEffect(mouseController, [])
  useEffect(handleChangeBgColors, [colorsStore.color])

  return (
    <>
      <div className={styles.childrenContainer}>{children}</div>
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
          <div ref={circleRefs[0]} className={clsx(styles.circle, styles.g1)}></div>
          <div ref={circleRefs[1]} className={clsx(styles.circle, styles.g2)}></div>
          <div ref={circleRefs[2]} className={clsx(styles.circle, styles.g3)}></div>
          <div ref={circleRefs[3]} className={clsx(styles.circle, styles.g4)}></div>
          <div ref={circleRefs[4]} className={clsx(styles.circle, styles.g5)}></div>
          <div id='interactive' ref={interactiveRef} className={clsx(styles.circle, styles.interactive)}></div>
        </div>
      </div>
    </>
  )
})

export default Background
