'use client'

import { DELAY_TIME } from '@constants/data'
import ReactLenis, { useLenis } from 'lenis/react'
import { useEffect } from 'react'

export interface ISmoothScroll {
  children: React.ReactNode
}

const SmoothScroll: React.FC<ISmoothScroll> = ({ children }) => {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return
    if (!!sessionStorage.getItem('user')) {
      lenis.start()
    } else {
      lenis.stop()
      setTimeout(() => lenis.start(), DELAY_TIME)
    }

    lenis?.scrollTo(0, { immediate: true })

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement

      if (target.tagName === 'A' && target.hash) {
        event.preventDefault()
        const targetElement = document.querySelector(target.hash) as HTMLElement

        if (targetElement) {
          lenis?.scrollTo(targetElement)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [lenis])

  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      {children}
    </ReactLenis>
  )
}
export default SmoothScroll
