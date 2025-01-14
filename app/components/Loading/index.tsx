'use client'

import { DELAY_TIME } from '@constants/data'
import SpinerIcon from '@icons/spinner.icon.svg'
import { loadingTransparent } from '@utils/gsapAnimations'
import { useEffect, useRef } from 'react'

import styles from './loading.module.css'

export const Loading = () => {
  const loadingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sessionStorage.getItem('user')) {
      setTimeout(() => {
        sessionStorage.setItem('user', 'user')
        loadingTransparent(loadingRef.current, 1, 0)
      }, DELAY_TIME)
    } else {
      loadingTransparent(loadingRef.current, 1, 0)
    }
  }, [])

  return (
    <div ref={loadingRef} className={styles.textContainer}>
      <SpinerIcon />
      <h2>Loading</h2>
    </div>
  )
}
