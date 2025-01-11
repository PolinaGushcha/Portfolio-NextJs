import gsap from 'gsap'

import { IGsapAnimationParams } from './types/gsapAnimations.types'

export const gsapAnimation = ({ animatedElement, trigger, end, styles }: IGsapAnimationParams) => {
  gsap.to(animatedElement, {
    scrollTrigger: {
      trigger,
      scrub: true,
      start: 'top top',
      end
    },
    ease: 'none',
    ...styles
  })

  const experienceSection = document.getElementById('experience') as HTMLDivElement
  if (experienceSection) {
    gsap.to(animatedElement, {
      scrollTrigger: {
        trigger: experienceSection,
        start: 'top top',
        scrub: true,
        end
      },
      ease: 'none',
      display: 'none'
    })
  }
}

const WavesMovingValues = [
  { y: -0.2, x: -0.1 },
  { y: -1, x: -0.1 },
  { y: -0.3, x: 0.7 },
  { y: 0.4, x: -0.2 },
  { y: 0.23, x: -0.1 },
  { y: 1.2, x: 0 },
  { y: 1.1, x: 0 },
  { y: -1.1, x: 1 },
  { y: 0.1, x: 0.2 }
]

export const handleSetWavesMovingValues = (el: HTMLImageElement, id: number) => {
  return {
    x: el.offsetWidth * WavesMovingValues[id].x,
    y: el.offsetHeight * WavesMovingValues[id].y * 1.5
  }
}

export const loadingTransparent = (container: HTMLElement, fromOpacity: number, toOpacity: number) => {
  gsap.fromTo(container, { opacity: fromOpacity }, { opacity: toOpacity, duration: 1.3 })
  gsap.to(container, { display: 'none', delay: 1.3 })
}
