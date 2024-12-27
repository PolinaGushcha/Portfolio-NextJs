import gsap from 'gsap'

interface GsapAnimationParams {
  refElement: HTMLImageElement | null
  refContainer: HTMLDivElement | null
  containerEnd: number
  styles: Record<string, string | number>
}

export const gsapAnimation = ({ refElement, refContainer, containerEnd, styles }: GsapAnimationParams) => {
  gsap.to(refElement, {
    scrollTrigger: {
      trigger: refContainer,
      scrub: true,
      markers: true,
      start: 'top top',
      end: containerEnd
    },
    ease: 'none',
    ...styles
  })
}

const foldersGsapStyles = [
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

export const handleAddFolderStyles = (el: HTMLImageElement | null, id: number) => {
  if (el) {
    return {
      x: el.offsetWidth * foldersGsapStyles[id].x,
      y: el.offsetHeight * foldersGsapStyles[id].y * 1.5
    }
  } else {
    return { x: 0, y: 0 }
  }
}
