'use client'

import { gsapAnimation, handleSetWavesMovingValues } from '@utils/gsapAnimations'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import styles from './folders.module.css'

export const Folders: React.FC = () => {
  const foldersContainer = useRef<HTMLDivElement | null>(null)
  const folderRefs = useRef<(HTMLImageElement | null)[]>([])
  if (folderRefs.current.length === 0) {
    folderRefs.current = Array.from({ length: 9 }, () => null)
  }
  useEffect(() => {
    const backgroundFolders = foldersContainer.current as HTMLDivElement
    gsap.registerPlugin(ScrollTrigger)
    folderRefs.current.forEach(
      (animatedElement, id) =>
        animatedElement &&
        gsapAnimation({
          animatedElement,
          trigger: foldersContainer.current,
          end: backgroundFolders.offsetHeight * 1.5,
          styles: handleSetWavesMovingValues(animatedElement, id)
        })
    )
  }, [])

  return (
    <div className={styles.backgroundFolders}>
      <div ref={foldersContainer} className={styles.container}>
        {Array.from({ length: 9 }).map((_, index) => (
          <Image
            key={index}
            className={styles[`homeBg${index + 1}`]}
            alt={`homeBg${index + 1}`}
            src={`backgroundFolders/homeBg${index + 1}.svg`}
            width={1}
            height={1}
            ref={el => {
              folderRefs.current[index] = el || null
            }}
          />
        ))}
      </div>
    </div>
  )
}
