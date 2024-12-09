'use client'

import { BACKGROUNDCOLORSPALETTE } from '@constants/color.constants'
import colorsStore from 'app/store/colorsStore'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'

import styles from './background.module.css'

export interface IBackground {
  children: React.ReactNode
}

const Background: React.FC<IBackground> = observer(({ children }) => {
  const gradientBgRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const circleRefs = Array.from({ length: 5 }, () => useRef<HTMLDivElement>(null))

  useEffect(() => {
    const interBubble = document.getElementById('interactive') as HTMLElement
    let curX = 0
    let curY = 0
    let tgX = 0
    let tgY = 0
    function move() {
      curX += (tgX - curX) / 20
      curY += (tgY - curY) / 20
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
        requestAnimationFrame(() => {
          move()
        })
      }
    }
    window.addEventListener('mousemove', event => {
      tgX = event.clientX
      tgY = event.clientY
    })
    move()
  }, [])

  useEffect(() => {
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
  }, [colorsStore.color])

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
          <div ref={circleRefs[0]} className={styles.g1}></div>
          <div ref={circleRefs[1]} className={styles.g2}></div>
          <div ref={circleRefs[2]} className={styles.g3}></div>
          <div ref={circleRefs[3]} className={styles.g4}></div>
          <div ref={circleRefs[4]} className={styles.g5}></div>
          <div id='interactive' ref={interactiveRef} className={styles.interactive}></div>
        </div>
      </div>
    </>
  )
})

export default Background
