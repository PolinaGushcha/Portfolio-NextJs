'use client'

import { useEffect, useRef } from 'react'

import styles from './background.module.css'

export interface IBackground {
  children: React.ReactNode
}

const Background: React.FC<IBackground> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)

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

  return (
    <>
      <div className={styles.childrenContainer}>{children}</div>
      <div ref={ref} className={styles.gradientBg}>
        <svg className={styles.svg}>
          <defs>
            <filter id='goo'>
              <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
              <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8' result='goo' />
              <feBlend in='SourceGraphic' in2='goo' />
            </filter>
          </defs>
        </svg>
        <div ref={ref} style={{ '--color-a': 'rgb(108, 0, 162)' } as React.CSSProperties} className={styles.gradientsContainer}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div id='interactive' className={styles.interactive}></div>
        </div>
      </div>
    </>
  )
}

export default Background
