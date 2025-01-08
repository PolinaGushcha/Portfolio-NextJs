'use client'

import SpinerIcon from '@icons/spinner.icon.svg'
import { loadingTransparent } from '@utils/gsapAnimations'
import { useEffect, useRef, useState } from 'react'

import styles from './loading.module.css'

export const Loading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const loadingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoading(!!sessionStorage.getItem('user'))
    if (!sessionStorage.getItem('user')) {
      setTimeout(() => {
        sessionStorage.setItem('user', 'user')
        if (loadingRef.current) {
          loadingTransparent(loadingRef.current, 1, 0)
        }
      }, 3000)
    }
  }, [])

  return isLoading ? (
    <></>
  ) : (
    <div ref={loadingRef} className={styles.textContainer}>
      <SpinerIcon />
      <h2>Loading</h2>
    </div>
  )
}
