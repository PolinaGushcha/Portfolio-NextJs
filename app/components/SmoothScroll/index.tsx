'use client'

import ReactLenis, { useLenis } from 'lenis/react'
import { useEffect } from 'react'

export interface ISmoothScroll {
  children: React.ReactNode
}

const SmoothScroll: React.FC<ISmoothScroll> = ({ children }) => {
  const lenis = useLenis()

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
  }, [lenis])

  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      {children}
    </ReactLenis>
  )
}
export default SmoothScroll
